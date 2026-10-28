#!/usr/bin/env node
// Plays the Story in headless Chromium at 390px and fails on any console error, page error,
// horizontal scroll or engine misbehaviour. Needs Playwright (pre-installed), nothing else:
//   node test/play.cjs
// 1. Light mode, reduced motion: every route, every chapter, every reply path (and every outfit),
//    clicked through the DOM, checking message counts, outcomes, "Next chapter" and overflow.
// 2. Dark mode, reduced motion: one path per chapter with real clicks, moving on with
//    "Next chapter" and leaving with the browser's back button.
// 3. Light mode, normal motion: typing delays, "Skip typing", leaving mid-typing, double clicks,
//    keyboard focus, Continue, Settings redraw, history after a reload.
"use strict";
const http = require("http");
const fs = require("fs");
const path = require("path");
const { chromium } = require("playwright");

const ROOT = path.join(__dirname, "..");
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".webmanifest": "application/manifest+json", ".svg": "image/svg+xml", ".json": "application/json" };
const server = http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, "http://x").pathname);
  const file = path.join(ROOT, p === "/" ? "index.html" : p);
  if (!file.startsWith(ROOT) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) { res.writeHead(404); res.end(); return; }
  res.writeHead(200, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream" });
  fs.createReadStream(file).pipe(res);
});

const fails = [];
let passes = 0;
const check = (ok, msg) => { if (ok) passes++; else { fails.push(msg); console.log("FAIL " + msg); } };

async function newPage(browser, base, opts) {
  const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, hasTouch: false, serviceWorkers: "block", ...opts });
  const page = await ctx.newPage();
  const label = `[${opts.colorScheme}${opts.reducedMotion === "reduce" ? ", reduced motion" : ""}]`;
  page.on("pageerror", (e) => check(false, `${label} page error: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") check(false, `${label} console error: ${m.text()}`); });
  await page.goto(base);
  return { page, ctx, label };
}
const noHScroll = (page) => page.evaluate(() => document.documentElement.scrollWidth <= innerWidth && document.body.scrollWidth <= innerWidth);

// ---------- In-page helpers ----------
// Structural checks the engine relies on (the full schema lives in validate-content.cjs).
function validateTrees() {
  const C = window.CONTENT, errs = [], ids = new Set(), routes = new Set(C.routes.map((r) => r.id));
  C.story.forEach((c) => { if (ids.has(c.id)) errs.push(`duplicate id ${c.id}`); ids.add(c.id); });
  const walk = (n, where) => {
    (n.them || []).forEach((m, k) => {
      const w = `${where} them[${k}]`;
      if (typeof m === "string") return;
      if (!m || (typeof m.text !== "string" && typeof m.note !== "string")) errs.push(`${w}: needs text or note`);
      if (m && m.if != null && !(/^[\w-]+=[\w-]+(\|[\w-]+)*$/.test(m.if) && ids.has(m.if.split("=")[0]))) errs.push(`${w}: bad if "${m.if}"`);
    });
    (n.replies || []).forEach((r, k) => { if (typeof r.you !== "string" || !r.you) errs.push(`${where} replies[${k}]: no you`); walk(r, `${where}.${k}`); });
  };
  C.story.forEach((c) => {
    if (!routes.has(c.route)) errs.push(`${c.id}: unknown route ${c.route}`);
    if (!Array.isArray(c.them)) errs.push(`${c.id}: no them`);
    (c.outfits || []).forEach((o, k) => { if (!o.label) errs.push(`${c.id} outfit ${k}: no label`); });
    walk(c, c.id);
  });
  return errs;
}

// Plays chapter `ci` (already open on screen) down every reply path, by DOM clicks.
async function walkChapter(ci) {
  const C = window.CONTENT, c = C.story[ci], view = document.querySelector("#storyView");
  const tick = () => new Promise((r) => setTimeout(r, 0));
  const settle = async () => {
    for (let n = 0; n < 500; n++) {
      if (!view.querySelector(".typing") && view.querySelector(".choices button:not(.skip)")) return;
      await tick();
    }
    throw new Error(`${c.id}: conversation got stuck`);
  };
  const outcomes = () => JSON.parse(localStorage.getItem("st_outcomes") || "{}");
  const shown = (msgs) => (msgs || []).filter((m) => typeof m === "string" || !m.if || m.if.split("=")[1].split("|").includes(outcomes()[m.if.split("=")[0]]));
  const leaves = [];
  (function paths(n, p) { if (!n.replies || !n.replies.length) leaves.push(p); else n.replies.forEach((r, k) => paths(r, p.concat(k))); })(c, []);
  const runs = [];
  if (c.outfits) c.outfits.forEach((o, f) => (f === 0 ? leaves : leaves.slice(0, 1)).forEach((p) => runs.push([f, p])));
  else leaves.forEach((p) => runs.push([-1, p]));
  const errs = [], route = window.steadyRouteChapters(c.route);
  const isLast = route.indexOf(ci) === route.length - 1;
  for (let k = 0; k < runs.length; k++) {
    const [f, p] = runs[k], where = `${c.id} ${f >= 0 ? `outfit ${f} ` : ""}path [${p}]`;
    if (k > 0) view.querySelector(".again").click();
    let want = 0, outcome = c.outcome, node = c;
    if (f >= 0) {
      await settle();
      const fits = view.querySelectorAll(".choices button.fit");
      if (fits.length !== c.outfits.length) { errs.push(`${where}: ${fits.length} outfit buttons`); continue; }
      fits[f].click();
      want += shown(c.outfits[f].them).length;
    }
    want += shown(c.them).length;
    for (const idx of p) {
      await settle();
      const btns = view.querySelectorAll(".choices button.reply");
      if (btns.length !== node.replies.length) { errs.push(`${where}: ${btns.length} reply buttons, expected ${node.replies.length}`); break; }
      btns[idx].click();
      node = node.replies[idx];
      want += shown(node.them).length;
      if (node.outcome) outcome = node.outcome;
    }
    await settle();
    const endNotes = view.querySelectorAll(".thread .bubble.note").length;
    const text = view.textContent;
    if (!view.querySelector(".choices .again")) errs.push(`${where}: no "Try different replies" at the end`);
    if (!!view.querySelector(".choices .next") === isLast) errs.push(`${where}: "Next chapter" ${isLast ? "shown on the last chapter" : "missing"}`);
    if (view.querySelectorAll(".bubble.you").length !== p.length) errs.push(`${where}: ${view.querySelectorAll(".bubble.you").length} of your bubbles, expected ${p.length}`);
    // Messages: them bubbles + narration notes (minus the outfit, intro and closing notes).
    let after = c.after, thinks = c.thinks; node = c; for (const idx of p) { node = node.replies[idx]; if (node.after) after = node.after; if (node.thinks) thinks = node.thinks; }
    const wantThinks = (f >= 0 && c.outfits[f].thinks ? 1 : 0) + (thinks ? thinks.length : 0);
    if (view.querySelectorAll(".choices .thinks p").length !== wantThinks) errs.push(`${where}: ${view.querySelectorAll(".choices .thinks p").length} lines in her head, expected ${wantThinks}`);
    const fixedNotes = (f >= 0 ? 1 : 0) + ((f >= 0 ? c.outfits[f].intro || c.intro : c.intro) ? 1 : 0) + (after ? 1 : 0);
    const msgCount = view.querySelectorAll(".bubble.them").length + endNotes - fixedNotes;
    if (msgCount !== want) errs.push(`${where}: ${msgCount} messages shown, expected ${want}`);
    if (/\{(name|bf)\}|undefined|\[object Object\]|NaN%/.test(text)) errs.push(`${where}: unfilled text`);
    if (!JSON.parse(localStorage.getItem("st_story") || "{}")[c.id]) errs.push(`${where}: not marked read`);
    if ((outcomes()[c.id] || undefined) !== (outcome || undefined)) errs.push(`${where}: outcome ${outcomes()[c.id]}, expected ${outcome}`);
    if (document.documentElement.scrollWidth > innerWidth) errs.push(`${where}: horizontal scroll`);
  }
  return { errs, runs: runs.length };
}

(async () => {
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  const base = `http://127.0.0.1:${server.address().port}/`;
  const browser = await chromium.launch();
  const t0 = Date.now();

  // ---------- 1. Every path, light mode ----------
  {
    const { page, label } = await newPage(browser, base, { colorScheme: "light", reducedMotion: "reduce" });
    const errs = await page.evaluate(validateTrees);
    errs.forEach((e) => check(false, `content: ${e}`));
    const routes = await page.evaluate(() => window.CONTENT.routes.map((r) => ({ id: r.id, lock: !!r.lock, fork: r.fork || null, chapters: window.steadyRouteChapters(r.id), masc: window.CONTENT.story.map((c, i) => i).filter((i) => window.CONTENT.story[i].route === r.id && window.CONTENT.story[i].path === "masc") })));
    check(await noHScroll(page), `${label} story list fits 390px`);
    check(await page.locator(`#storyList li[data-r="${routes.find((r) => r.lock).id}"] .item`).isDisabled(), `${label} locked routes start disabled`);
    let paths = 0, chapters = 0;
    for (const r of routes) {
      await page.click(`#storyList li[data-r="${r.id}"] .item`);
      check(await noHScroll(page), `${label} ${r.id} route list fits 390px`);
      for (const ci of r.chapters) {
        await page.click(`#storyList li[data-i="${ci}"] .item`);
        const res = await page.evaluate(walkChapter, ci);
        res.errs.forEach((e) => check(false, `${label} ${e}`));
        if (!res.errs.length) passes++;
        paths += res.runs; chapters++;
        await page.click("#storyView .back");
        await page.waitForSelector("#storyList:not([hidden])");
      }
      if (r.fork) {
        // The boy-clothes path: mark date one as boy clothes and walk the chapters that appear.
        await page.evaluate((id) => { const m = JSON.parse(localStorage.getItem("st_masc") || "{}"); m[id] = true; localStorage.setItem("st_masc", JSON.stringify(m)); }, r.fork);
        await page.click("#storyList .back");
        await page.click(`#storyList li[data-r="${r.id}"] .item`);
        check(JSON.stringify(await page.evaluate((id) => window.steadyRouteChapters(id), r.id)) === JSON.stringify([r.chapters[0]].concat(r.masc)), `${label} ${r.id}: boy clothes shows the boy-clothes path`);
        for (const ci of r.masc) {
          await page.click(`#storyList li[data-i="${ci}"] .item`);
          const res = await page.evaluate(walkChapter, ci);
          res.errs.forEach((e) => check(false, `${label} ${e}`));
          if (!res.errs.length) passes++;
          paths += res.runs; chapters++;
          await page.click("#storyView .back");
          await page.waitForSelector("#storyList:not([hidden])");
        }
      }
      check(await page.locator("#storyList .tag.new").count() === 0, `${label} ${r.id}: every chapter read`);
      await page.click("#storyList .back");
      await page.waitForSelector("#storyList li[data-r]");
    }
    check(await page.locator("#storyList .continue").count() === 0, `${label} no Continue card once everything is read`);
    console.log(`${label} walked ${paths} reply paths across ${chapters} chapters`);
    await page.context().close();
  }

  // ---------- 2. One path per chapter, dark mode, real clicks ----------
  {
    const { page, label } = await newPage(browser, base, { colorScheme: "dark", reducedMotion: "reduce" });
    check(await page.evaluate(() => getComputedStyle(document.body).backgroundColor) === "rgb(20, 19, 28)", `${label} dark theme applied`);
    const routes = await page.evaluate(() => window.CONTENT.routes.map((r) => r.id));
    let chapters = 0;
    for (const rid of routes) {
      await page.click(`#storyList li[data-r="${rid}"] .item`);
      await page.click("#storyList li[data-i] .item >> nth=0");
      for (;;) {
        const fit = page.locator("#storyView .choices button.fit");
        if (await fit.count()) await fit.last().click();
        while (!(await page.locator("#storyView .choices .again").count())) await page.click("#storyView .choices button.reply >> nth=-1");
        chapters++;
        check(await noHScroll(page), `${label} ${rid} chapter ${chapters} fits 390px`);
        const next = page.locator("#storyView .choices .next");
        if (!(await next.count())) break;
        await next.click();
      }
      await page.goBack();
      await page.waitForSelector(`#storyList .back`);
      check(await page.locator("#storyView").isHidden(), `${label} ${rid}: browser back leaves the chapter for the route`);
      await page.goBack();
      await page.waitForSelector(`#storyList li[data-r]`);
      check(page.url().startsWith(base), `${label} ${rid}: second back stays in the app`);
    }
    await page.click("#settingsBtn");
    check(await noHScroll(page), `${label} settings fits 390px`);
    await page.click("#settings .icon-btn");
    console.log(`${label} played ${chapters} chapters`);
    await page.context().close();
  }

  // ---------- 3. Engine behaviour with normal typing delays ----------
  {
    const { page, label } = await newPage(browser, base, { colorScheme: "light", reducedMotion: "no-preference" });
    const first = await page.evaluate(() => { const C = window.CONTENT; const c = C.story.find((x) => x.route === C.routes[0].id && !x.outfits); return { route: c.route, i: C.story.indexOf(c), n: c.them.filter((m) => typeof m === "string" || !m.if).length }; });
    await page.click(`#storyList li[data-r="${first.route}"] .item`);
    await page.click(`#storyList li[data-i="${first.i}"] .item`);
    await page.waitForSelector("#storyView .typing");
    check(await page.locator("#storyView .thread[role=log][aria-live=polite]").count() === 1, `${label} conversation is a polite live region`);
    check(await page.locator("#storyView .choices .skip").count() === 1, `${label} "Skip typing" shows while she's typing`);
    const tSkip = Date.now();
    await page.click("#storyView .choices .skip");
    await page.waitForSelector("#storyView .choices button.reply", { timeout: 1000 });
    check(Date.now() - tSkip < 1000 && await page.locator("#storyView .bubble.them").count() === first.n, `${label} skipping shows the whole turn at once`);
    check(await page.locator("#storyView .typing").count() === 0, `${label} no typing indicator left after skipping`);

    // A second click on the same reply (or a stale one) must not play the branch twice.
    const you = await page.evaluate(() => { const b = document.querySelector("#storyView .choices .reply"); b.click(); b.click(); return document.querySelectorAll("#storyView .bubble.you").length; });
    check(you === 1, `${label} double click plays a reply once`);

    // Tapping the conversation skips too.
    await page.waitForSelector("#storyView .typing");
    await page.click("#storyView .thread");
    await page.waitForSelector("#storyView .choices button:not(.skip)", { timeout: 1000 });
    check(true, `${label} tapping the conversation skips typing`);

    // Leave mid-typing: nothing more arrives, and reopening starts clean.
    const reply = page.locator("#storyView .choices button.reply");
    if (await reply.count()) {
      await reply.first().click();
      await page.click("#storyView .back");
      await page.waitForTimeout(2500);
      check(await page.locator("#storyView").isHidden() && await page.locator("#storyList li[data-i]").count() > 0, `${label} leaving mid-typing goes back to the route`);
      check(await page.locator("#storyView .bubble").count() === 0 || await page.locator("#storyView").isHidden(), `${label} nothing plays after leaving`);
    }

    // Keyboard: focus follows the new replies.
    await page.click(`#storyList li[data-i="${first.i}"] .item`);
    await page.waitForSelector("#storyView .typing");
    check(await page.locator("#storyView .thread .bubble.you").count() === 0, `${label} reopening a chapter starts clean`);
    await page.click("#storyView .choices .skip");
    await page.waitForSelector("#storyView .choices button.reply");
    await page.focus("#storyView .choices button.reply");
    await page.keyboard.press("Enter");
    await page.waitForSelector("#storyView .choices button:not(.skip)", { timeout: 5000 });
    check(await page.evaluate(() => !!document.activeElement.closest("#storyView .choices")), `${label} keyboard focus moves to the new buttons`);

    // Finish the chapter by skipping, then Continue picks up the next one.
    while (!(await page.locator("#storyView .choices .again").count())) {
      const s = page.locator("#storyView .choices .skip");
      if (await s.count()) await s.click().catch(() => {});
      const r = page.locator("#storyView .choices button.reply");
      if (await r.count()) await r.first().click();
      else await page.waitForTimeout(50);
    }
    await page.click("#storyView .back");
    await page.click("#storyList .back");
    await page.waitForSelector("#storyList .continue .item");
    check(/chapter 2 of/.test(await page.textContent("#storyList .continue")), `${label} Continue offers the next chapter`);
    await page.click("#storyList .continue .item");
    await page.waitForSelector("#storyView:not([hidden]) .thread");
    check(true, `${label} Continue opens the chapter`);

    // Reload with a chapter open, then back: still in the app, on the list.
    await page.reload();
    await page.waitForSelector("#storyList li[data-r]");
    await page.waitForTimeout(300);
    check(await page.evaluate(() => !(history.state && history.state.steadySub)), `${label} reload steps off the stale history entry`);
    check(await page.evaluate(() => scrollY === 0 && document.querySelector("#storyList .continue").getBoundingClientRect().top > 0), `${label} after a reload the list starts at the top with Continue in view`);

    // Settings: a new boyfriend name shows in the list straight away.
    await page.click("#settingsBtn");
    await page.fill("#bfInput", "Theo");
    await page.click("#settings .icon-btn");
    await page.waitForFunction(() => !document.querySelector("#settings").open);
    await page.waitForTimeout(100);
    check(/Then there's Theo/.test(await page.textContent("#storyList")), `${label} closing Settings redraws names in the list`);
    await page.context().close();
  }

  await browser.close();
  server.close();
  console.log(`\n${passes} checks passed, ${fails.length} failed (${((Date.now() - t0) / 1000).toFixed(1)}s)`);
  process.exit(fails.length ? 1 : 0);
})().catch((e) => { console.error(e); server.close(); process.exit(1); });
