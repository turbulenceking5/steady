// Steady: XP, levels, daily quests and badges.
// Self-contained add-on. Listens to SteadyAPI events and keeps its state in store key "game"
// (stored as st_game, so export/import/erase cover it). Never touches localStorage directly.
(() => {
  const API = window.SteadyAPI;
  if (!API) return;
  const { store, today, day, esc, on, emit, toast, showTab, $ } = API;
  const C = window.CONTENT || { chats: [], story: [], practice: [] };
  const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isoOf = (ord) => new Date(ord * 86400e3).toISOString().slice(0, 10);

  // ---------- Balance ----------
  const XP = { mood: 5, journal: 15, chat: 10, story: 25, practice: 20, outfit: 10, outfitMax: 3, wearPerStep: 10, dare: 15, written: 10, writtenMax: 5, gayBonus: 5, quest: 5, bonus: 30 };

  // Pacing: the core habit (mood + journal + 3 quests + bonus) is 65 XP a day; a typical day with a written
  // reply, an outfit and the odd dare/wear step is ~115. Chats, Story and Practice add ~590 once, mostly in
  // the first fortnight. Level 2 lands on day one, level 3 in ~5-7 days, 5 in ~3 weeks, 7 in ~6-8 weeks,
  // Legend after 2-3 months. index.html unlocks "voice tier" chats at levels 3, 5 and 7.
  const LEVELS = [
    { xp: 0, name: "Closet Curious", as: "Closet Curious", emoji: "🚪", blurb: "Every story starts somewhere. Yours just did." },
    { xp: 30, name: "Baby Gay", as: "a Baby Gay", emoji: "🐣", blurb: "Welcome, little one. The group chat has been expecting you." },
    { xp: 700, name: "Rainbow Rookie", as: "a Rainbow Rookie", emoji: "🌈", blurb: "You're getting the hang of this. Colour suits you." },
    { xp: 1400, name: "Out & About", as: "Out & About", emoji: "🚶", blurb: "Look at you, being yourself in broad daylight." },
    { xp: 2400, name: "Brunch Regular", as: "a Brunch Regular", emoji: "🥂", blurb: "Smashed avo, endless chats and zero apologies." },
    { xp: 3800, name: "Valley Local", as: "a Valley Local", emoji: "🏙️", blurb: "Fortitude Valley knows your name. And your order." },
    { xp: 5500, name: "Main Character", as: "the Main Character", emoji: "🎬", blurb: "The plot revolves around you now. As it should." },
    { xp: 7000, name: "Icon", as: "an Icon", emoji: "✨", blurb: "People are taking notes. Mostly on your outfits." },
    { xp: 9000, name: "Legend", as: "a Legend", emoji: "👑", blurb: "Proud, steady and unmistakably you. Absolute legend." },
  ];
  const UNLOCKS = [3, 5, 7]; // voice-tier chats in index.html
  const levelOf = (xp) => { let i = 0; while (i + 1 < LEVELS.length && xp >= LEVELS[i + 1].xp) i++; return i + 1; };

  // ---------- State ----------
  const blank = () => ({ v: 1, xp: 0, level: 1, days: {}, chats: [], story: [], practice: [], wear: {}, wear5: [], outfits: 0, best: 0, dares: 0, reactions: 0, said: 0, saidGay: 0, questDays: 0, ach: {}, hasW: false, off: false });
  let S = store.get("game", null);
  const fresh = !S || typeof S !== "object";
  S = Object.assign(blank(), fresh ? {} : S);
  const save = () => store.set("game", S);
  const DAY0 = () => ({ xp: 0, mood: false, journal: false, outfitXp: 0, written: 0, gayToast: false, dare: false, ev: {}, quests: null, qdone: {}, bonus: false });
  // Mutate in place: callers hold on to the returned object.
  const D = () => { const d = S.days[today] || (S.days[today] = {}); const z = DAY0(); for (const k in z) if (!(k in d)) d[k] = z[k]; return d; };

  // ---------- Feedback (quiet during init) ----------
  let quiet = true;
  let pendingXp = 0, flushTimer = null;
  function award(n) {
    if (!n) return;
    S.xp += n; D().xp += n;
    if (quiet) return;
    pendingXp += n;
    clearTimeout(flushTimer);
    flushTimer = setTimeout(() => { floatXp(pendingXp); pendingXp = 0; }, 30);
  }

  // ---------- Quests ----------
  const QUESTS = {
    mood: { emoji: "🙂", text: "Check in with your mood", ev: "mood-set", go: () => focusEl("#mood") },
    journal: { emoji: "📝", text: "Write a few lines in your journal", ev: "journal", go: () => focusEl("#journal", true) },
    chat: { emoji: "💬", text: "Finish a chat in Messages", ev: "chat-done", go: () => showTab("chats") },
    story: { emoji: "💙", text: "Read a Story chapter", ev: "story-done", go: () => showTab("story") },
    practice: { emoji: "🎭", text: "Run through a Practice scenario", ev: "practice-done", go: () => showTab("practice") },
    written: { emoji: "✍️", text: "Write it in your own words in Practice", ev: "practice-written", go: () => showTab("practice") },
    outfit: { emoji: "👕", text: "Save an outfit", ev: "outfit-saved", w: true },
    outfit60: { emoji: "🔥", text: "Save an outfit scoring 60 or more", ev: "outfit60", w: true },
    wear: { emoji: "🚶", text: "Tick off a wear-it-out step", ev: "wear-step", w: true },
    dare: { emoji: "🎲", text: "Take on today's dare", ev: "dare-done", w: true },
    reaction: { emoji: "😍", text: "Get a reaction to an outfit", ev: "outfit-reaction", w: true },
  };
  const CORE = ["mood", "journal"];
  const CORE_TABS = ["today", "chats", "story", "practice"];
  const styleTab = () => { const b = [...document.querySelectorAll("nav.tabs button[data-tab]")].find((x) => !CORE_TABS.includes(x.dataset.tab)); return b && b.dataset.tab; };
  const hasWardrobe = () => S.hasW || !!styleTab();

  function rng(seed) { // mulberry32
    return () => { seed |= 0; seed = (seed + 0x6d2b79f5) | 0; let t = Math.imul(seed ^ (seed >>> 15), 1 | seed); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  function pickQuests() {
    const r = rng(day * 2654435761);
    const rest = Object.keys(QUESTS).filter((k) => !CORE.includes(k) && (!QUESTS[k].w || hasWardrobe()));
    for (let i = rest.length - 1; i > 0; i--) { const j = Math.floor(r() * (i + 1)); [rest[i], rest[j]] = [rest[j], rest[i]]; }
    return [CORE[day % 2], rest[0], rest[1]];
  }
  function todaysQuests() { const d = D(); if (!d.quests) d.quests = pickQuests(); return d.quests; }

  function bump(evName) {
    const d = D();
    d.ev[evName] = (d.ev[evName] || 0) + 1;
    const qs = todaysQuests();
    qs.forEach((q) => {
      if (!d.qdone[q] && QUESTS[q] && QUESTS[q].ev === evName) { d.qdone[q] = true; award(XP.quest); if (!quiet) toast(`✅ Quest done: ${QUESTS[q].text}`); }
    });
    if (!d.bonus && qs.every((q) => d.qdone[q])) {
      d.bonus = true; S.questDays++; award(XP.bonus);
      if (!quiet) { toast(`🎉 All three quests done! +${XP.bonus} XP bonus`); confetti(60); }
    }
  }

  // ---------- Streak (same rule as index.html) ----------
  function streak() {
    const all = store.get("journal", {}) || {};
    const has = (iso) => all[iso] && (all[iso].text || all[iso].mood != null);
    let n = 0, d = has(today) ? day : day - 1;
    while (has(isoOf(d))) { n++; d--; }
    return n;
  }

  // ---------- Achievements ----------
  const inContent = (list, ids) => list.filter((x) => ids.includes(x.id)).length;
  const part1 = (() => {
    const s = C.story || []; if (!s.length) return ["c1", "c2", "c3", "c4"];
    const first = s[0].part; const ids = [];
    for (const c of s) { if (c.part && c.part !== first) break; ids.push(c.id); }
    return ids;
  })();
  const journalDays = () => { const all = store.get("journal", {}) || {}; return Object.keys(all).filter((k) => all[k] && String(all[k].text || "").trim()).length; };
  const moodDays = () => { const all = store.get("journal", {}) || {}; return Object.keys(all).filter((k) => all[k] && all[k].mood != null).length; };

  const ACH = [
    { id: "first-mood", emoji: "🌤️", name: "Checking In", desc: "Log your first mood", test: () => moodDays() >= 1 },
    { id: "first-journal", emoji: "📔", name: "Dear Diary", desc: "Write your first journal entry", test: () => journalDays() >= 1 },
    { id: "streak-3", emoji: "🔥", name: "Hat-Trick", desc: "Check in 3 days in a row", test: () => streak() >= 3 },
    { id: "streak-7", emoji: "🗓️", name: "Week Strong", desc: "Check in 7 days in a row", test: () => streak() >= 7 },
    { id: "streak-30", emoji: "🏆", name: "Month of Me", desc: "Check in 30 days in a row", test: () => streak() >= 30 },
    { id: "first-chat", emoji: "💬", name: "Group Chat Energy", desc: "Finish your first chat", test: () => S.chats.length >= 1 },
    { id: "all-chats", emoji: "🦋", name: "Social Butterfly", desc: "Finish every chat in Messages", test: () => C.chats.length > 0 && inContent(C.chats, S.chats) >= C.chats.length },
    { id: "first-story", emoji: "📖", name: "The Plot Thickens", desc: "Read your first Story chapter", test: () => S.story.length >= 1 },
    { id: "part-1", emoji: "🚪", name: "Door's Open", desc: "Finish Part 1 of the Story", test: () => part1.every((id) => S.story.includes(id)) },
    { id: "all-story", emoji: "💞", name: "Six Months Strong", desc: "Finish the whole Story", test: () => C.story.length > 0 && inContent(C.story, S.story) >= C.story.length },
    { id: "first-practice", emoji: "🎭", name: "Dress Rehearsal", desc: "Do your first Practice scenario", test: () => S.practice.length >= 1 },
    { id: "all-practice", emoji: "🎤", name: "Ready for Anything", desc: "Do every Practice scenario", test: () => C.practice.length > 0 && inContent(C.practice, S.practice) >= C.practice.length },
    { id: "said-1", emoji: "✍️", name: "In My Own Words", desc: "Write your own reply in Practice", test: () => S.said >= 1 },
    { id: "said-gay", emoji: "🏳️‍🌈", name: "Said the Word", desc: "Write the word \"gay\" yourself", test: () => S.saidGay >= 1 },
    { id: "said-10", emoji: "🗣️", name: "Said It 10 Times", desc: "Write 10 of your own replies", test: () => S.said >= 10 },
    { id: "said-50", emoji: "📣", name: "Said It 50 Times", desc: "Write 50 of your own replies", test: () => S.said >= 50 },
    { id: "first-outfit", emoji: "👕", name: "Fit Check", desc: "Save your first outfit", w: true, test: () => S.outfits >= 1 },
    { id: "outfit-80", emoji: "🌈", name: "Unmistakable", desc: "Save an outfit scoring 80 or more", w: true, test: () => S.best >= 80 },
    { id: "wear-5", emoji: "🌏", name: "Out in the Wild", desc: "Reach wear-it-out step 5 with an item", w: true, test: () => S.wear5.length >= 1 },
    { id: "wear-5x3", emoji: "💅", name: "Seen and Serving", desc: "Take 3 items all the way to step 5", w: true, test: () => S.wear5.length >= 3 },
    { id: "reactions-10", emoji: "👀", name: "Turning Heads", desc: "Get 10 reactions to your outfits", w: true, test: () => S.reactions >= 10 },
    { id: "first-dare", emoji: "🎲", name: "Dare Accepted", desc: "Complete your first dare", w: true, test: () => S.dares >= 1 },
    { id: "quests-1", emoji: "⭐", name: "Triple Threat", desc: "Finish all three daily quests", test: () => S.questDays >= 1 },
    { id: "quests-5", emoji: "🌟", name: "Quest Royalty", desc: "Finish all three daily quests on 5 days", test: () => S.questDays >= 5 },
    { id: "level-5", emoji: "🥂", name: "Brunch Club", desc: "Reach Brunch Regular (level 5)", test: () => levelOf(S.xp) >= 5 },
  ];
  function checkAch() {
    let any = false;
    ACH.forEach((a) => {
      if (S.ach[a.id]) return;
      let ok = false; try { ok = a.test(); } catch {}
      if (!ok) return;
      S.ach[a.id] = today; any = true;
      emit("achievement", { id: a.id });
      if (!quiet) toast(`${a.emoji} Nice one, ${API.name()}! Badge unlocked: ${a.name}`, 3200);
    });
    return any;
  }

  // ---------- Level ----------
  function checkLevel() {
    const lv = levelOf(S.xp);
    if (lv > S.level) {
      S.level = lv;
      emit("level-up", { level: lv });
      if (!quiet) celebrate(lv);
    } else if (lv < S.level) S.level = lv;
  }

  function after() { checkLevel(); checkAch(); checkLevel(); prune(); save(); render(); }
  function prune() { const keep = isoOf(day - 40); Object.keys(S.days).forEach((k) => { if (k < keep) delete S.days[k]; }); }

  // ---------- Event handlers ----------
  const addId = (list, id) => { if (id == null || list.includes(id)) return false; list.push(id); return true; };
  const H = {
    "mood-set"() { const d = D(); if (!d.mood) { d.mood = true; award(XP.mood); } bump("mood-set"); },
    "journal-saved"(x) {
      if (!x || !String(x.text || "").trim()) return;
      const d = D(); if (d.journal) return; // keystroke saves: once per day
      d.journal = true; award(XP.journal); bump("journal");
    },
    "chat-done"(x) { if (x && addId(S.chats, x.id) && x.first !== false) award(XP.chat); bump("chat-done"); },
    "story-done"(x) { if (x && addId(S.story, x.id) && x.first !== false) award(XP.story); bump("story-done"); },
    "practice-done"(x) { if (x && addId(S.practice, x.id) && x.first !== false) award(XP.practice); bump("practice-done"); },
    "practice-written"(x) {
      const text = String((x && x.text) || "").trim(); if (!text) return;
      S.said++;
      const gay = /gay/i.test(text); if (gay) S.saidGay++;
      const d = D();
      if (d.written < XP.writtenMax) { d.written++; award(XP.written + (gay ? XP.gayBonus : 0)); }
      if (gay && !d.gayToast && !quiet) { d.gayToast = true; toast("🏳️‍🌈 You wrote it yourself. That's a big one. Proud of you.", 3600); }
      bump("practice-written");
    },
    "outfit-saved"(x) {
      S.hasW = true; S.outfits++;
      const score = Math.max(0, Math.min(100, +(x && x.score) || 0));
      S.best = Math.max(S.best, score);
      const d = D(); if (d.outfitXp < XP.outfitMax) { d.outfitXp++; award(XP.outfit); }
      bump("outfit-saved"); if (score >= 60) bump("outfit60");
    },
    "wear-step"(x) {
      S.hasW = true; if (!x || x.item == null) return;
      const step = Math.max(1, Math.min(5, Math.round(+x.step) || 1));
      const key = x.item + "|" + step;
      if (!S.wear[key]) { S.wear[key] = today; if (x.first !== false) award(XP.wearPerStep * step); }
      if (step >= 5) addId(S.wear5, String(x.item));
      bump("wear-step");
    },
    "outfit-reaction"() { S.hasW = true; S.reactions++; bump("outfit-reaction"); },
    "dare-done"() { S.hasW = true; const d = D(); if (!d.dare) { d.dare = true; S.dares++; award(XP.dare); } bump("dare-done"); },
  };
  Object.keys(H).forEach((ev) => on(ev, (data) => { H[ev](data); after(); }));

  // ---------- First run: credit progress made before this module existed ----------
  function seed() {
    const done = store.get("done", {}) || {};
    const storyMap = store.get("story", {}) || {};
    (done.chat || []).forEach((id) => addId(S.chats, id) && (S.xp += XP.chat));
    [...(done.story || []), ...Object.keys(storyMap)].forEach((id) => addId(S.story, id) && (S.xp += XP.story));
    (done.practice || []).forEach((id) => addId(S.practice, id) && (S.xp += XP.practice));
    const said = store.get("said", []) || [];
    if (Array.isArray(said)) said.forEach((l) => { S.said++; if (/gay/i.test(String((l && l.text) || ""))) S.saidGay++; S.xp += XP.written; });
    const all = store.get("journal", {}) || {};
    Object.keys(all).forEach((k) => { if (k >= today) return; const e = all[k] || {}; if (e.mood != null) S.xp += XP.mood; if (String(e.text || "").trim()) S.xp += XP.journal; });
  }
  // Catch up on today's check-in if it happened before this loaded (or before an update).
  function reconcileToday() {
    const e = (store.get("journal", {}) || {})[today] || {};
    if (e.mood != null && !D().mood) H["mood-set"]();
    if (String(e.text || "").trim() && !D().journal) H["journal-saved"](e);
  }

  // ---------- UI ----------
  const css = `
.gm-chip { flex: none; display: inline-flex; flex-direction: column; align-items: stretch; gap: 3px; background: none; border: 1px solid var(--line); color: var(--ink); border-radius: 10px; padding: 4px 8px 5px; font: inherit; font-size: 12px; font-weight: 700; line-height: 1.1; cursor: pointer; }
.gm-chip .gm-bar { width: 46px; }
.gm-bar { display: block; height: 4px; border-radius: 99px; background: var(--soft); overflow: hidden; }
.gm-bar > i { display: block; height: 100%; width: 0; background: var(--rainbow); border-radius: inherit; transition: width .5s ease; }
.gm-hidden { display: none !important; }
.gm-quests h2 { display: flex; justify-content: space-between; align-items: center; }
.gm-quests h2 span { letter-spacing: 0; text-transform: none; font-size: 13px; color: var(--accent); font-weight: 700; }
.gm-q { width: 100%; display: flex; align-items: center; gap: 10px; background: none; border: 0; border-top: 1px solid var(--line); color: var(--ink); font: inherit; text-align: left; padding: 9px 0; cursor: pointer; }
.gm-q:first-of-type { border-top: 0; }
.gm-tick { flex: none; width: 24px; height: 24px; border-radius: 50%; border: 2px solid var(--line); display: grid; place-items: center; font-size: 13px; color: var(--accent-ink); }
.gm-q.done .gm-tick { background: var(--accent); border-color: var(--accent); }
.gm-q .gm-qt { flex: 1; min-width: 0; }
.gm-q.done .gm-qt { color: var(--muted); text-decoration: line-through; text-decoration-color: var(--muted); }
.gm-q .gm-xp { flex: none; font-size: 12px; font-weight: 700; color: var(--muted); }
.gm-bonus { margin: 8px 0 0; padding: 8px 12px; border-radius: 12px; background: var(--soft); font-size: 14px; }
.gm-bonus.won { position: relative; overflow: hidden; font-weight: 700; padding-top: 11px; }
.gm-bonus.won::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 4px; background: var(--rainbow); }
#gmSheet { max-height: calc(100vh - 32px); overflow-y: auto; overscroll-behavior: contain; }
.gm-hero { display: flex; gap: 14px; align-items: center; margin: 14px 0 6px; }
.gm-badge { flex: none; width: 64px; height: 64px; border-radius: 50%; display: grid; place-items: center; font-size: 30px; background: var(--soft); position: relative; }
.gm-badge::after { content: ""; position: absolute; inset: -3px; border-radius: 50%; padding: 3px; background: conic-gradient(#e40303,#ff8c00,#ffed00,#008026,#24408e,#732982,#e40303); -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0); -webkit-mask-composite: xor; mask-composite: exclude; }
.gm-hero b { display: block; font-size: 20px; line-height: 1.2; }
.gm-hero .muted { font-size: 13px; }
.gm-hero .gm-bar { height: 8px; margin: 6px 0 3px; }
.gm-hero > div { flex: 1; min-width: 0; }
.gm-stats { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; margin: 12px 0 4px; }
.gm-stat { background: var(--soft); border-radius: 12px; padding: 8px 6px; text-align: center; }
.gm-stat b { display: block; font-size: 18px; }
.gm-stat span { font-size: 12px; color: var(--muted); }
.gm-week { margin: 8px 0 0; font-size: 14px; }
.gm-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(96px, 1fr)); gap: 8px; }
.gm-ach { border: 1px solid var(--line); border-radius: 12px; padding: 8px 6px; text-align: center; background: var(--card); }
.gm-ach .gm-e { font-size: 26px; display: block; line-height: 1.2; }
.gm-ach b { display: block; font-size: 13px; line-height: 1.25; margin-top: 2px; }
.gm-ach span:last-child { display: block; font-size: 11px; line-height: 1.3; color: var(--muted); margin-top: 2px; }
.gm-ach.locked { background: transparent; border-style: dashed; }
.gm-ach.locked .gm-e { filter: grayscale(1); opacity: .35; }
.gm-ach.locked b { color: var(--muted); }
.gm-ladder { list-style: none; padding: 0 !important; margin: 4px 0 0 !important; font-size: 14px; }
.gm-ladder li { display: flex; justify-content: space-between; gap: 8px; padding: 4px 0; border-top: 1px solid var(--line); }
.gm-ladder li.now { font-weight: 700; color: var(--accent); }
.gm-ladder li.future { color: var(--muted); }
.gm-earn { font-size: 14px; color: var(--muted); }
.gm-float { position: fixed; z-index: 41; pointer-events: none; background: var(--accent); color: var(--accent-ink); font-size: 12px; font-weight: 700; border-radius: 99px; padding: 3px 9px; white-space: nowrap; animation: gm-float 1.3s ease-out forwards; }
@keyframes gm-float { 0% { opacity: 0; transform: translate(-50%, 0) scale(.8); } 15% { opacity: 1; transform: translate(-50%, 6px) scale(1.05); } 70% { opacity: 1; } 100% { opacity: 0; transform: translate(-50%, 26px) scale(1); } }
.gm-lvl { position: fixed; inset: 0; z-index: 45; display: grid; place-items: center; padding: 16px; background: rgba(0,0,0,.45); animation: gm-fade .25s ease-out; }
.gm-lvl-card { position: relative; width: min(340px, 100%); background: var(--card); color: var(--ink); border: 1px solid var(--line); border-radius: 22px; padding: 26px 20px 20px; text-align: center; overflow: hidden; animation: gm-pop .4s cubic-bezier(.2,1.4,.4,1); }
.gm-lvl-card::before { content: ""; position: absolute; left: 0; right: 0; top: 0; height: 6px; background: var(--rainbow); }
.gm-lvl-card .gm-big { font-size: 56px; line-height: 1; display: block; margin-bottom: 6px; }
.gm-lvl-card small { display: block; text-transform: uppercase; letter-spacing: .12em; font-size: 12px; font-weight: 700; color: var(--muted); }
.gm-lvl-card h3 { font-size: 26px; margin: 4px 0 8px; }
.gm-lvl-card p { margin: 0 0 16px; color: var(--muted); }
.gm-lvl-card p.gm-unlock { margin-top: -6px; display: inline-block; background: var(--soft); color: var(--ink); font-weight: 700; font-size: 14px; border-radius: 99px; padding: 5px 12px; }
.gm-timer { position: absolute; left: 0; bottom: 0; height: 3px; width: 100%; background: var(--rainbow); transform-origin: left; animation: gm-shrink 4.5s linear forwards; }
@keyframes gm-shrink { to { transform: scaleX(0); } }
@keyframes gm-fade { from { opacity: 0; } }
@keyframes gm-pop { from { opacity: 0; transform: scale(.7); } }
@media (prefers-reduced-motion: reduce) { .gm-float, .gm-lvl, .gm-lvl-card { animation: none; } .gm-bar > i { transition: none; } }
.gm-set { margin-top: 6px; }
.gm-set label { display: flex !important; align-items: center; gap: 8px; font-weight: 400 !important; margin: 10px 0 0 !important; }
`;
  const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);

  // Header chip
  const chip = document.createElement("button");
  chip.className = "gm-chip"; chip.type = "button";
  chip.innerHTML = '<span class="gm-lv"></span><span class="gm-bar"><i></i></span>';
  const hideBtn = $("#hideBtn");
  if (hideBtn) hideBtn.parentNode.insertBefore(chip, hideBtn); else document.querySelector("header")?.appendChild(chip);
  chip.addEventListener("click", openSheet);

  // Quest card
  const card = document.createElement("div");
  card.className = "card gm-quests";
  const todayTab = $("#tab-today");
  const greet = $("#greeting");
  if (greet && greet.parentNode === todayTab) greet.after(card); else todayTab?.prepend(card);
  card.addEventListener("click", (ev) => {
    const b = ev.target.closest(".gm-q"); if (!b) return;
    const q = QUESTS[b.dataset.q]; if (!q) return;
    if (q.go) q.go(); else { const t = styleTab(); if (t) showTab(t); }
  });
  function focusEl(sel, focus) { const el = $(sel); if (!el) return; el.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); if (focus) el.focus({ preventScroll: true }); }

  // Progress sheet
  const sheet = document.createElement("dialog");
  sheet.id = "gmSheet"; sheet.setAttribute("aria-label", "Progress");
  document.body.appendChild(sheet);
  sheet.addEventListener("click", (ev) => { if (ev.target === sheet) sheet.close(); }); // tap backdrop to close
  function openSheet() { renderSheet(); if (!sheet.open) sheet.showModal(); sheet.scrollTop = 0; }

  // Settings extra
  const extra = $("#settingsExtra");
  if (extra) {
    extra.innerHTML = '<h3>Progress</h3><p class="muted" style="margin:0">XP, daily quests and badges. Just for fun, and only on this device.</p><div class="gm-set"><button class="btn ghost" id="gmOpen" type="button">View progress &amp; badges</button><label><input type="checkbox" id="gmShow"> Show XP and daily quests</label></div>';
    extra.querySelector("#gmOpen").addEventListener("click", () => { const s = $("#settings"); if (s && s.open) s.close(); openSheet(); });
    const cb = extra.querySelector("#gmShow");
    cb.addEventListener("change", () => { S.off = !cb.checked; save(); render(); });
    $("#settingsBtn")?.addEventListener("click", () => { cb.checked = !S.off; });
  }

  function lvInfo() {
    const lv = levelOf(S.xp), cur = LEVELS[lv - 1], next = LEVELS[lv];
    const pct = next ? Math.round(((S.xp - cur.xp) / (next.xp - cur.xp)) * 100) : 100;
    return { lv, cur, next, pct };
  }

  function render() {
    const { lv, cur, next, pct } = lvInfo();
    chip.querySelector(".gm-lv").textContent = `🌈 Lv ${lv}`;
    chip.querySelector(".gm-bar > i").style.width = pct + "%";
    chip.setAttribute("aria-label", `Progress: level ${lv}, ${cur.name}. ${S.xp} XP${next ? `, ${next.xp - S.xp} to next level` : ""}`);
    chip.title = `Level ${lv}: ${cur.name}`;
    chip.classList.toggle("gm-hidden", !!S.off);
    card.classList.toggle("gm-hidden", !!S.off);

    const d = D(), qs = todaysQuests();
    const n = qs.filter((q) => d.qdone[q]).length;
    card.innerHTML = `<h2>Today's quests <span>${n}/3</span></h2>` +
      qs.map((q) => { const Q = QUESTS[q] || { emoji: "•", text: q }; const ok = !!d.qdone[q];
        return `<button type="button" class="gm-q${ok ? " done" : ""}" data-q="${esc(q)}" aria-label="${esc(Q.text)}${ok ? ", done" : ""}"><span class="gm-tick">${ok ? "✓" : ""}</span><span class="gm-qt">${Q.emoji} ${esc(Q.text)}</span><span class="gm-xp">+${XP.quest}</span></button>`; }).join("") +
      (d.bonus ? `<p class="gm-bonus won">🎉 All done! +${XP.bonus} XP bonus banked. Proud of you.</p>`
        : `<p class="gm-bonus">Finish all three for a <b>+${XP.bonus} XP</b> bonus.</p>`);
    if (sheet.open) renderSheet();
  }

  function week() {
    let xp = 0, quests = 0, days = 0;
    for (let i = 0; i < 7; i++) { const x = S.days[isoOf(day - i)]; if (!x) continue; xp += x.xp || 0; quests += Object.keys(x.qdone || {}).length; if (x.mood || x.journal) days++; }
    return { xp, quests, days };
  }

  function renderSheet() {
    const { lv, cur, next, pct } = lvInfo();
    const w = week(), s = streak();
    const shown = ACH.filter((a) => !a.w || hasWardrobe() || S.ach[a.id]);
    const got = shown.filter((a) => S.ach[a.id]).length;
    sheet.innerHTML = `
<form method="dialog"><div class="row" style="justify-content:space-between"><b style="font-size:18px">Progress</b><button class="icon-btn">Close</button></div></form>
<div class="gm-hero"><span class="gm-badge" aria-hidden="true">${cur.emoji}</span><div>
  <span class="muted">Level ${lv} of ${LEVELS.length}</span><b>${esc(cur.name)}</b>
  <span class="gm-bar"><i style="width:${pct}%"></i></span>
  <span class="muted">${S.xp} XP · ${next ? `${next.xp - S.xp} XP to ${esc(next.name)}` : "Top level. Absolute legend."}</span>
</div></div>
<p class="muted" style="margin:0">${esc(cur.blurb)}</p>
<div class="gm-stats">
  <div class="gm-stat"><b>🔥 ${s}</b><span>day streak</span></div>
  <div class="gm-stat"><b>⭐ ${S.questDays}</b><span>quest days</span></div>
  <div class="gm-stat"><b>🏅 ${got}/${shown.length}</b><span>badges</span></div>
</div>
<p class="gm-week"><b>Last 7 days:</b> ${w.xp} XP, ${w.quests} quest${w.quests === 1 ? "" : "s"} done, checked in on ${w.days} day${w.days === 1 ? "" : "s"}. ${w.days >= 5 ? "Ripper week. 💪" : w.days >= 1 ? "Every little bit counts." : "Today's a great day to start."}</p>
<h3>Badges</h3>
<div class="gm-grid">${shown.map((a) => `<div class="gm-ach${S.ach[a.id] ? "" : " locked"}" title="${esc(a.desc)}"><span class="gm-e" aria-hidden="true">${a.emoji}</span><b>${esc(a.name)}</b><span>${S.ach[a.id] ? esc(a.desc) : "🔒 " + esc(a.desc)}</span></div>`).join("")}</div>
<h3>Levels</h3>
<ul class="gm-ladder">${LEVELS.map((L, i) => `<li class="${i + 1 === lv ? "now" : i + 1 > lv ? "future" : ""}"><span>${L.emoji} ${i + 1}. ${esc(L.name)}</span><span>${L.xp} XP</span></li>`).join("")}</ul>
<details style="margin-top:12px"><summary>How to earn XP</summary><ul class="gm-earn">
  <li>Mood check-in: ${XP.mood} (once a day)</li><li>Journal: ${XP.journal} (once a day)</li>
  <li>Each daily quest: ${XP.quest}, plus ${XP.bonus} for all three</li>
  <li>Writing your own reply in Practice: ${XP.written}, +${XP.gayBonus} if you say "gay" (up to ${XP.writtenMax} a day)</li>
  <li>New chat: ${XP.chat} · New Story chapter: ${XP.story} · New Practice: ${XP.practice}</li>
  ${hasWardrobe() ? `<li>Saving an outfit: ${XP.outfit} (up to ${XP.outfitMax} a day) · Dare: ${XP.dare}</li><li>Wear-it-out step: ${XP.wearPerStep} × the step number, first time per item</li>` : ""}
</ul></details>`;
  }

  function floatXp(n) {
    if (S.off || !n) return;
    const r = chip.getBoundingClientRect();
    if (!r.width) return;
    document.querySelectorAll(".gm-float").forEach((x) => x.remove());
    const f = document.createElement("div");
    f.className = "gm-float"; f.textContent = `+${n} XP`;
    f.style.left = r.left + r.width / 2 + "px"; f.style.top = r.bottom + 4 + "px";
    if (reduceMotion) f.style.transform = "translate(-50%,0)";
    document.body.appendChild(f);
    setTimeout(() => f.remove(), reduceMotion ? 1100 : 1350);
  }

  function celebrate(lv) {
    if (S.off) return;
    const L = LEVELS[lv - 1];
    document.querySelector(".gm-lvl")?.remove();
    const o = document.createElement("div");
    o.className = "gm-lvl"; o.setAttribute("role", "alertdialog"); o.setAttribute("aria-label", `Level up: ${L.name}`);
    o.innerHTML = `<div class="gm-lvl-card"><span class="gm-big" aria-hidden="true">${L.emoji}</span><small>Level ${lv} unlocked</small><h3>${esc(L.name)}</h3><p><b style="color:var(--ink)">${esc(API.name())}, you're officially ${esc(L.as)} 🏳️‍🌈</b><br>${esc(L.blurb)}</p>${UNLOCKS.includes(lv) ? '<p class="gm-unlock">💬 New chats unlocked in Messages</p>' : ""}<button class="btn" type="button">Yass, thanks</button><span class="gm-timer"></span></div>`;
    let timer;
    const close = () => { clearTimeout(timer); o.remove(); document.removeEventListener("keydown", onKey); };
    const onKey = (e) => { if (e.key === "Escape" || e.key === "Enter") close(); };
    o.addEventListener("pointerdown", close); // any tap dismisses it
    o.addEventListener("click", close);
    timer = setTimeout(close, 4500);
    document.addEventListener("keydown", onKey);
    document.body.appendChild(o);
    o.querySelector("button").focus({ preventScroll: true });
    confetti(160);
  }

  function confetti(count) {
    if (reduceMotion || S.off) return;
    const cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden", "true");
    cv.style.cssText = "position:fixed;inset:0;width:100vw;height:100vh;pointer-events:none;z-index:46";
    document.body.appendChild(cv);
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const W = innerWidth, Hh = innerHeight;
    cv.width = W * dpr; cv.height = Hh * dpr;
    const ctx = cv.getContext("2d"); if (!ctx) { cv.remove(); return; }
    ctx.scale(dpr, dpr);
    const cols = ["#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e", "#732982", "#5bcefa", "#f5a9b8"];
    const P = Array.from({ length: count }, () => ({
      x: W / 2 + (Math.random() - .5) * 60, y: Hh * .35, vx: (Math.random() - .5) * 13, vy: -Math.random() * 13 - 4,
      w: 6 + Math.random() * 6, h: 4 + Math.random() * 6, r: Math.random() * 6, vr: (Math.random() - .5) * .4, c: cols[(Math.random() * cols.length) | 0],
    }));
    const t0 = performance.now(), dur = 2200;
    (function frame(t) {
      const k = (t - t0) / dur;
      ctx.clearRect(0, 0, W, Hh);
      if (k >= 1 || !cv.isConnected) { cv.remove(); return; }
      ctx.globalAlpha = k > .7 ? (1 - k) / .3 : 1;
      P.forEach((p) => {
        p.vy += .32; p.vx *= .985; p.x += p.vx; p.y += p.vy; p.r += p.vr;
        ctx.save(); ctx.translate(p.x, p.y); ctx.rotate(p.r); ctx.fillStyle = p.c; ctx.fillRect(-p.w / 2, -p.h / 2, p.w, Math.abs(Math.cos(p.r * 2)) * p.h + 1); ctx.restore();
      });
      requestAnimationFrame(frame);
    })(t0);
  }

  // Hide must win over anything this module shows.
  hideBtn?.addEventListener("click", () => { if (sheet.open) sheet.close(); document.querySelector(".gm-lvl")?.remove(); });

  // ---------- Init ----------
  if (fresh) seed();
  todaysQuests();
  reconcileToday();
  checkLevel(); checkAch(); checkLevel(); // silently, so existing progress doesn't trigger a parade
  prune(); save(); render();
  quiet = false;

  API.game = { level: () => levelOf(S.xp), xp: () => S.xp, levelName: () => LEVELS[levelOf(S.xp) - 1].name };
  // index.html rendered Today before this file loaded; its level-up handler treats the first call as a
  // silent baseline (no toast) and re-renders with the right voice tier.
  emit("level-up", { level: S.level, initial: true });
  // Small hook for debugging/tests.
  window.SteadyGame = { state: () => JSON.parse(JSON.stringify(S)), levels: LEVELS, xp: XP, open: openSheet };
})();
