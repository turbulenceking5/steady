#!/usr/bin/env node
// Checks content.js against the schema in context/content.md and the voice rules in
// context/dialogue.md. Plain Node, no dependencies:
//   node test/validate-content.cjs [path/to/content.js]
// Errors (schema problems, banned words) exit 1. Warnings (style, likely typos) are
// printed separately and don't fail the run.
"use strict";
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const file = process.argv[2] || path.join(__dirname, "..", "content.js");
const errors = [];
const warnings = [];
const err = (where, msg) => errors.push(`${where}: ${msg}`);
const warn = (where, msg) => warnings.push(`${where}: ${msg}`);

let C;
try {
  const window = {};
  vm.runInNewContext(fs.readFileSync(file, "utf8"), { window }, { filename: file });
  C = window.CONTENT;
} catch (e) {
  console.error(`Could not load ${file}: ${e.message}`);
  process.exit(1);
}
if (!C || !Array.isArray(C.routes) || !Array.isArray(C.story)) {
  console.error("window.CONTENT must have routes[] and story[]");
  process.exit(1);
}

// ---- Word lists (keep in sync with context/content.md) ----
const PLACEHOLDERS = new Set(["{name}", "{bf}"]);
const SLANG = ["mate", "g'day", "gday", "arvo", "heaps", "reckon", "reckons", "reckoned", "thongs", "footy", "snag", "snags", "sunnies"];
const FAMILY = ["mum", "mums", "mom", "mother", "nan", "nana", "dad", "dads", "father", "parents"];
// Local brands, venues-as-brands and footy teams content.md says to keep out (warnings:
// a passing mention can be fine, but prefer something generic).
const LOCAL = ["bunnings", "kmart", "myer", "sportsgirl", "glassons", "princess polly", "country road",
  "rm williams", "twisties", "holden", "commodore", "lovisa", "suncorp", "broncos", "morningside", "afl",
  "nrl", "guernsey", "schooners?", "woolies", "woolworths", "coles", "maccas", "brekky", "servo"];
// Phrases dialogue.md calls out as therapy-speak or AI tells.
const AI_TELLS = [
  /\bi appreciate you sharing\b/i, /\bthat'?s (so )?valid\b/i, /\bfor what it'?s worth\b/i,
  /\bi mean that genuinely\b/i, /\bhonestly,? i respect that\b/i, /\bholding space\b/i,
  /\byour (feelings|truth) (are|is) valid\b/i, /\bjourney\b/i, /\bauthentic(ally)? (self|you)\b/i,
  /\bthank you for (trusting|sharing)\b/i,
];
// Narrator patterns content.md says to avoid.
const NARRATOR = [
  /\byou meant to\b[^.]*\bwhat came out\b/i,
  /\bleast threatening\b[^.]* in (history|human history)\b/i,
];
const TYPOS = {
  teh: "the", adn: "and", recieve: "receive", definately: "definitely", seperate: "separate",
  occured: "occurred", untill: "until", wierd: "weird", alot: "a lot", truely: "truly",
  freind: "friend", beleive: "believe", becuase: "because", tommorow: "tomorrow",
  tomorow: "tomorrow", embarassed: "embarrassed", embarassing: "embarrassing", accross: "across",
  goverment: "government", wich: "which", thier: "their", jewelery: "jewellery",
};
// Words people really do say twice ("no no", "you you've", "a guy guy", "Padam Padam").
const REPEAT_OK = /^(so|ha|no|very|bye|oh|go|hi|yes|ok|stop|wait|more|please|really|haha|ah|okay|lol|omg|pretty|her|that|had|is|ya|na|nah|yeah|baby|babe|tickle|knock|again|ooh|aww|aw|bad|ow|hey|sorry|fine|now|tick|good|you|guy|padam|makeup|sit)$/i;
const wordRe = (w) => new RegExp(`(^|[^\\p{L}'])${w}(?![\\p{L}'])`, "iu");
const SLANG_RE = SLANG.map((w) => [w, wordRe(w)]);
const FAMILY_RE = FAMILY.map((w) => [w, wordRe(w)]);
const LOCAL_RE = LOCAL.map((w) => [w, wordRe(w)]).concat([["Reds", /\bReds\b/], ["Lions", /\bLions\b/]]);

// ---- Text checks, applied to every player-visible string ----
function checkText(where, s, { required = true } = {}) {
  if (s == null) { if (required) err(where, "missing text"); return; }
  if (typeof s !== "string") { err(where, `expected a string, got ${typeof s}`); return; }
  if (!s.trim()) { err(where, "empty string"); return; }
  const q = JSON.stringify(s.length > 70 ? s.slice(0, 70) + "…" : s);
  for (const m of s.match(/\{[^{}]*\}/g) || []) if (!PLACEHOLDERS.has(m)) err(where, `unknown placeholder ${m} in ${q}`);
  if (/[{}]/.test(s.replace(/\{[^{}]*\}/g, ""))) err(where, `stray brace in ${q}`);
  for (const [w, re] of SLANG_RE) if (re.test(s)) err(where, `banned slang "${w}" in ${q}`);
  for (const [w, re] of FAMILY_RE) if (re.test(s)) err(where, `family member "${w}" in ${q}`);
  for (const [w, re] of LOCAL_RE) if (re.test(s)) warn(where, `local brand/team "${w}" in ${q}`);
  for (const re of AI_TELLS) if (re.test(s)) warn(where, `therapy-speak / AI tell (${re.source}) in ${q}`);
  for (const re of NARRATOR) if (re.test(s)) warn(where, `narrator pattern to avoid in ${q}`);
  if (s !== s.trim()) warn(where, `leading/trailing whitespace in ${q}`);
  if (/ {2,}/.test(s)) warn(where, `double space in ${q}`);
  if (/ [,.!?;:](?![.\w])/.test(s) && !/ \.\.\./.test(s)) warn(where, `space before punctuation in ${q}`);
  if (/,,|!!!!!|\?\?\?\?|(?<!\.)\.\.(?!\.)/.test(s)) warn(where, `doubled punctuation in ${q}`);
  const rep = s.match(/\b([a-z]{2,})\s+\1\b/i);
  if (rep && !REPEAT_OK.test(rep[1])) warn(where, `repeated word "${rep[0]}" in ${q}`);
  for (const w of s.toLowerCase().match(/[a-z]+/g) || []) if (TYPOS[w]) warn(where, `typo "${w}" (→ ${TYPOS[w]}) in ${q}`);
  const opens = (s.match(/\(/g) || []).length, closes = (s.match(/\)/g) || []).length;
  if (opens !== closes) warn(where, `unbalanced brackets in ${q}`);
  if ((s.match(/"/g) || []).length % 2) warn(where, `unbalanced double quotes in ${q}`);
}

const msgText = (m) => (typeof m === "string" ? m : m && (m.text != null ? m.text : m.note));

function checkMsgs(where, list) {
  if (!Array.isArray(list)) { err(where, "`them` must be an array"); return; }
  list.forEach((m, i) => {
    const w = `${where}[${i}]`;
    if (typeof m === "string") checkText(w, m);
    else if (!m || typeof m !== "object") return err(w, "message must be a string or object");
    else {
      for (const k of Object.keys(m)) if (!["from", "text", "note", "if"].includes(k)) err(w, `unknown message key "${k}"`);
      if (("text" in m) === ("note" in m)) err(w, "message object needs exactly one of `text` or `note`");
      if ("from" in m) { if (!("text" in m)) err(w, "`from` needs `text`"); checkText(w + ".from", m.from); }
      if ("text" in m) checkText(w, m.text);
      if ("note" in m) checkText(w, m.note);
      if ("if" in m) ifRefs.push({ where: w, cond: m.if });
    }
    if (i > 0) {
      const prev = list[i - 1] || {}, a = msgText(prev), b = msgText(m);
      const sameSender = prev.from === m.from;
      if (typeof a === "string" && typeof b === "string" && sameSender && a.trim().toLowerCase() === b.trim().toLowerCase() && !(m.if || prev.if)) warn(w, `duplicate of the previous message: ${JSON.stringify(b)}`);
    }
  });
}

const NODE_KEYS = ["them", "replies", "after", "debrief", "gaydar", "spark", "outcome"];
const CHAPTER_KEYS = ["id", "route", "title", "contact", "intro", "irl", "friend", "gaydarSays", "gaydarWho", "outfits", "outfitPrompt", "path", ...NODE_KEYS];
const ifRefs = [];
const outcomesByChapter = {};

function inRange(where, key, v) {
  if (v == null) return;
  if (typeof v !== "number" || !Number.isFinite(v) || v < 0 || v > 100) err(where, `\`${key}\` must be a number 0–100, got ${JSON.stringify(v)}`);
}

function checkNode(where, n, chapter, isChapter) {
  if (!isChapter) for (const k of Object.keys(n)) if (![...NODE_KEYS, "you", "masc"].includes(k)) err(where, `unknown branch key "${k}"`);
  const hasReplies = Array.isArray(n.replies) && n.replies.length > 0;
  if (n.replies != null && !Array.isArray(n.replies)) err(where, "`replies` must be an array");
  if (Array.isArray(n.replies) && !n.replies.length) err(where, "empty `replies` (omit it for a leaf)");
  if (n.them != null) {
    checkMsgs(where + ".them", n.them);
    if (!n.them.length) err(where, "empty `them` (omit it instead)");
  } else if (isChapter) err(where, "chapter has no `them`");
  else if (hasReplies) warn(where, "branch has replies but no `them` (he answers his own message)");
  for (const k of ["after", "debrief"]) if (k in n) checkText(`${where}.${k}`, n[k]);
  inRange(where, "gaydar", n.gaydar);
  inRange(where, "spark", n.spark);
  if ("outcome" in n) {
    if (typeof n.outcome !== "string" || !/^[a-z][a-z0-9-]*$/.test(n.outcome)) err(where, `bad outcome ${JSON.stringify(n.outcome)}`);
    else (outcomesByChapter[chapter.id] ||= new Set()).add(n.outcome);
  }
  if (hasReplies) {
    const seen = new Set();
    n.replies.forEach((r, i) => {
      const w = `${where}.replies[${i}]`;
      if (!r || typeof r !== "object") return err(w, "reply must be an object");
      checkText(w + ".you", r.you);
      const key = typeof r.you === "string" ? r.you.trim().toLowerCase() : "";
      if (key && seen.has(key)) warn(w, `same reply text as a sibling: ${JSON.stringify(r.you)}`);
      seen.add(key);
      if (r.them && n.them && n.them.length && r.them.length && msgText(r.them[0]) && msgText(r.them[0]) === msgText(n.them[n.them.length - 1])) warn(w, "first message repeats the previous node's last message");
      checkNode(w, r, chapter, false);
    });
  }
  // A reply with no `them` and no `replies` is a valid leaf: it just ends the chapter.
}

// ---- Routes ----
const routeIds = new Set();
C.routes.forEach((r, i) => {
  const w = `routes[${i}]${r && r.id ? ` (${r.id})` : ""}`;
  for (const k of Object.keys(r)) if (!["id", "name", "blurb", "part", "lock", "avatar", "intro", "fork"].includes(k)) err(w, `unknown route key "${k}"`);
  if (typeof r.id !== "string" || !r.id) err(w, "missing id");
  else if (routeIds.has(r.id)) err(w, `duplicate route id "${r.id}"`);
  else routeIds.add(r.id);
  checkText(w + ".name", r.name);
  checkText(w + ".blurb", r.blurb);
  checkText(w + ".part", r.part, { required: false });
  if ("lock" in r && typeof r.lock !== "boolean") err(w, "`lock` must be true/false");
  for (const k of ["avatar", "intro"]) if (k in r) checkText(`${w}.${k}`, r[k]);
});

// ---- Chapters ----
const chapterIds = new Map(); // id -> index
const perRoute = {};
C.story.forEach((c, i) => {
  const w = `story[${i}]${c && c.id ? ` (${c.id})` : ""}`;
  if (!c || typeof c !== "object") return err(w, "chapter must be an object");
  for (const k of Object.keys(c)) if (!CHAPTER_KEYS.includes(k)) err(w, `unknown chapter key "${k}"`);
  if (typeof c.id !== "string" || !c.id.trim()) err(w, "missing or empty id");
  else if (chapterIds.has(c.id)) err(w, `duplicate chapter id "${c.id}"`);
  else chapterIds.set(c.id, i);
  if (!routeIds.has(c.route)) err(w, `unknown route "${c.route}"`);
  else (perRoute[c.route] ||= []).push(c.id);
  checkText(w + ".title", c.title);
  for (const k of ["contact", "intro", "gaydarSays", "gaydarWho", "outfitPrompt"]) if (k in c) checkText(`${w}.${k}`, c[k]);
  for (const k of ["irl", "friend"]) if (k in c && typeof c[k] !== "boolean") err(w, `\`${k}\` must be true/false`);
  if ("gaydarSays" in c && c.gaydar == null) warn(w, "`gaydarSays` without a chapter `gaydar` (only shows if a branch sets one)");
  if ("outfits" in c) {
    if (!Array.isArray(c.outfits) || c.outfits.length < 2) err(w, "`outfits` must be an array of at least two options");
    else c.outfits.forEach((o, j) => {
      const ow = `${w}.outfits[${j}]`;
      if (!o || typeof o !== "object") return err(ow, "outfit must be an object");
      for (const k of Object.keys(o)) if (!["label", "intro", "gaydar", "them", "at", "masc", "spark"].includes(k)) err(ow, `unknown outfit key "${k}"`);
      checkText(ow + ".label", o.label);
      if ("intro" in o) checkText(ow + ".intro", o.intro);
      if ("gaydar" in o && (typeof o.gaydar !== "number" || o.gaydar < -100 || o.gaydar > 100)) err(ow, "outfit `gaydar` is a delta between -100 and 100");
      if ("gaydar" in o && c.gaydar == null) warn(ow, "outfit `gaydar` but the chapter has no base `gaydar`");
      if ("them" in o) { checkMsgs(ow + ".them", o.them); if (Array.isArray(o.them) && !o.them.length) err(ow, "empty `them`"); }
      if ("at" in o && (!Number.isInteger(o.at) || o.at < 0 || o.at > (c.them || []).length)) err(ow, `\`at\` must be an index 0–${(c.them || []).length}`);
    });
  }
  checkNode(w, c, c, true);
});

for (const id of routeIds) if (!perRoute[id]) err(`route ${id}`, "has no chapters");
if (C.routes.every((r) => r.lock)) err("routes", "every route is locked; nothing can open");

// ---- `if` conditions ----
for (const { where, cond } of ifRefs) {
  const m = typeof cond === "string" && cond.match(/^([^=]+)=([^=]+)$/);
  if (!m) { err(where, `bad if ${JSON.stringify(cond)} (want "chapterId=a|b")`); continue; }
  const [, id, vals] = m;
  if (!chapterIds.has(id)) { err(where, `if refers to unknown chapter "${id}"`); continue; }
  const set = outcomesByChapter[id] || new Set();
  for (const v of vals.split("|")) if (!set.has(v)) err(where, `if: chapter "${id}" never sets outcome "${v}" (sets: ${[...set].join(", ") || "none"})`);
  const here = Number((where.match(/^story\[(\d+)\]/) || [])[1]);
  if (here <= chapterIds.get(id)) warn(where, `if refers to "${id}", which doesn't come before this chapter`);
}
// Outcomes that nothing reads are fine (replay history), so no warning for those.

// ---- Report ----
const counts = `${C.routes.length} routes, ${C.story.length} chapters`;
if (warnings.length) {
  console.log(`Warnings (${warnings.length}):`);
  for (const w of warnings) console.log("  ! " + w);
}
if (errors.length) {
  console.error(`Errors (${errors.length}):`);
  for (const e of errors) console.error("  x " + e);
  console.error(`content.js: ${errors.length} error(s), ${warnings.length} warning(s) in ${counts}`);
  process.exit(1);
}
console.log(`content.js OK: ${counts}, ${warnings.length} warning(s)`);
