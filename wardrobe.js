// Steady: the Style tab. Dress-up avatar, "how it reads" meter, saved looks,
// outfit reactions, a "wear it out" confidence ladder and a daily style dare.
// Self-contained add-on: state lives in store key "wardrobe" (st_wardrobe) and "wardrobe_dares".
// Events: outfit-saved {id, score}, wear-step {item, step, first}, dare-done {date},
// outfit-reaction {from, text}. Exposes SteadyAPI.wardrobe.current().
(() => {
  const API = window.SteadyAPI;
  if (!API) return;
  const { store, today, day, fill, esc, on, emit, toast, $ } = API;
  const reduceMotion = (() => { try { return matchMedia("(prefers-reduced-motion: reduce)").matches; } catch { return false; } })();
  const pick = (a) => a[Math.floor(Math.random() * a.length)];
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const f = (n) => (Math.round(n * 10) / 10).toString();

  // ---------- Colours ----------
  // b: extra boldness the colour adds. p: phrase override used in reactions.
  const sw = (k, v, b = 0, p) => ({ k, v, b, p });
  const RB = sw("rainbow", "rainbow", 6);
  const PASTEL = [sw("pink", "#f7b6d2", 2), sw("lilac", "#c9b6f2", 2), sw("mint", "#a8e6cf", 2), sw("baby blue", "#a7d3f5", 2), sw("butter yellow", "#fbe7a1", 2), sw("peach", "#ffc7a8", 2)];
  const BRIGHT = [sw("hot pink", "#ff4fa3", 3), sw("orange", "#ff8a3d", 3), sw("lime", "#b6e34a", 3), sw("cobalt", "#3d6bff", 3), sw("purple", "#8b4fe0", 3), sw("red", "#e8404a", 3)];
  const BW = [sw("white", "#f8f8f6"), sw("black", "#26252d")];
  const DENIM = [sw("light wash", "#a9c4e4"), sw("mid wash", "#5f87b8"), sw("dark wash", "#33496e"), sw("black", "#2c2c34"), sw("white", "#f2f2ee", 1)];
  const LINEN = [sw("natural", "#e8dcc4"), sw("white", "#f8f8f6"), sw("sage", "#b7c9a8", 1), sw("terracotta", "#d9825b", 1), sw("lilac", "#c9b6f2", 2), sw("baby blue", "#a7d3f5", 2), sw("black", "#26252d")];
  const METAL = [sw("gold", "#e2b84a"), sw("silver", "#c9ccd4"), sw("rose gold", "#e8a598", 1)];
  const mix = (...g) => [].concat(...g);

  // ---------- Items ----------
  // b: base boldness. n: noun for reactions. d: what it says about the look.
  const ITEMS = {
    top: [
      { id: "crop", label: "Crop top", n: "crop top", b: 22, yb: 140, colours: mix(PASTEL, BRIGHT, BW, [RB]), d: "The midriff does the talking." },
      { id: "ctee", label: "Cropped tee", n: "cropped tee", b: 17, yb: 152, colours: mix(PASTEL, BRIGHT, BW, [RB]), d: "Easy, cute, a little bit of tummy." },
      { id: "rtank", label: "Ribbed tank", n: "ribbed tank", b: 10, yb: 198, colours: mix(BW, PASTEL, BRIGHT, [RB]), d: "Fitted and summery. Arms out." },
      { id: "mtank", label: "Mesh tank", n: "mesh tank", b: 22, yb: 198, colours: mix(BW, [PASTEL[0], PASTEL[1], PASTEL[3]], [BRIGHT[0], BRIGHT[4]]), d: "Sheer, breezy and very Valley." },
      { id: "linen", label: "Open linen shirt", n: "open linen shirt", b: 14, yb: 206, colours: LINEN, d: "Unbuttoned, breezy, holiday mode." },
      { id: "button", label: "Pastel button-up", n: "button-up", b: 9, yb: 200, colours: mix(PASTEL, [BW[0]]), d: "Soft colours, sharp collar." },
      { id: "otee", label: "Oversized tee", n: "oversized tee", b: 3, yb: 214, colours: mix(BW, PASTEL, BRIGHT, [RB]), d: "Comfy classic. A great base for extras." },
    ],
    bottom: [
      { id: "short5", label: "Short shorts (5\")", n: "short shorts", b: 20, yb: 224, fl: 3, colours: mix(PASTEL, BRIGHT, BW, [RB]), d: "Thighs out. The classic." },
      { id: "fitted", label: "Fitted shorts", n: "fitted shorts", b: 12, yb: 240, fl: 1, colours: mix(LINEN, [PASTEL[0], PASTEL[2]]), d: "Neat, fitted, above the knee." },
      { id: "bike", label: "Bike shorts", n: "bike shorts", b: 17, yb: 252, fl: -0.5, colours: mix([BW[1]], BRIGHT, PASTEL, [RB]), d: "Sporty and snug." },
      { id: "cutoff", label: "Cut-off denim", n: "cut-offs", b: 16, yb: 228, fl: 3, colours: DENIM, d: "Frayed hems and summer energy." },
      { id: "linenp", label: "Linen pants", n: "linen pants", b: 6, yb: 312, fl: 7, colours: LINEN, d: "Floaty, cool and easy." },
      { id: "jeans", label: "Jeans", n: "jeans", b: 1, yb: 314, fl: 1, colours: DENIM, d: "A safe base. Add flair elsewhere." },
    ],
    shoes: [
      { id: "flip", label: "Cute flip-flops", n: "flip-flops", b: 8, colours: mix(PASTEL, BRIGHT, BW, [RB]), d: "Cute, beachy, very Brisbane." },
      { id: "slides", label: "Slides", n: "slides", b: 4, colours: mix(BW, PASTEL, [BRIGHT[0], BRIGHT[3]]), d: "Pool-deck chic." },
      { id: "strappy", label: "Strappy sandals", n: "strappy sandals", b: 11, colours: mix([sw("tan", "#c58b55"), BW[1], BW[0]], PASTEL, METAL), d: "Strappy and a bit fancy." },
      { id: "platform", label: "Platform sandals", n: "platforms", b: 15, colours: mix(BW, PASTEL, BRIGHT, [RB]), d: "Extra height, extra attitude." },
      { id: "sneak", label: "White sneakers", n: "white sneakers", fixedPhrase: true, b: 2, colours: mix([sw("white", "#f8f8f6")], PASTEL, BRIGHT, [RB]), d: "Clean and go-with-anything. The swatch is the stripe." },
    ],
    acc: [
      { id: "hat", label: "Bucket hat", n: "bucket hat", b: 5, colours: mix(BW, PASTEL, BRIGHT, [RB], [DENIM[1]]), d: "Sun-smart and stylish." },
      { id: "sunnies", label: "Sunnies", n: "sunnies", b: 4, colours: mix(BW, [BRIGHT[0], PASTEL[1]], [METAL[0]], [RB]), d: "Instant cool." },
      { id: "tote", label: "Tote bag", n: "tote", b: 6, colours: mix([LINEN[0]], BW, PASTEL, BRIGHT, [RB]), d: "Carries snacks and a statement." },
      { id: "nails", label: "Painted nails", n: "nails", b: 14, colours: mix(PASTEL, BRIGHT, BW, [RB]), d: "Small detail, loud message." },
      { id: "rings", label: "Rings", n: "rings", b: 4, colours: METAL, d: "A little shine." },
      { id: "earrings", label: "Earrings", n: "earrings", b: 9, colours: mix(METAL, [sw("pearl", "#f4efe6", 1)]), d: "Hoops say hello." },
      { id: "necklace", label: "Necklace", n: "necklace", b: 7, colours: [sw("gold", "#e2b84a", 0, "gold chain"), sw("silver", "#c9ccd4", 0, "silver chain"), sw("pearls", "#f4efe6", 3, "pearls"), sw("pastel beads", "#f7b6d2", 3, "pastel bead necklace")], d: "Frames the look." },
      { id: "bracelets", label: "Bracelet stack", n: "bracelet stack", b: 6, colours: mix(METAL, [sw("pastel", "pastel", 2), RB]), d: "Stack 'em up." },
      { id: "pin", label: "Rainbow pin", n: "pin", b: 12, colours: [sw("rainbow", "rainbow", 0, "rainbow pin"), sw("progress", "progress", 0, "progress pride pin"), sw("gay men's flag", "mlm", 0, "gay men's flag pin")], d: "Says it for you. 🏳️‍🌈" },
    ],
    // Makeup: personal style, same as the rest. Drawn on the face.
    mu: [
      { id: "gloss", label: "Lip gloss", n: "lip gloss", b: 8, colours: [sw("clear", "#f2b8b0", 0, "lip gloss"), sw("pink tint", "#f48fb1", 1), sw("peach tint", "#ffab91", 1)], d: "A bit of shine. Low effort, high reward." },
      { id: "lipstick", label: "Lipstick", n: "lipstick", b: 12, colours: [sw("nude", "#c98b7a"), sw("pink", "#e0607e", 1), sw("berry", "#9c2a5a", 2), sw("red", "#d0213a", 3)], d: "A colour that walks in before you do." },
      { id: "liner", label: "Eyeliner", n: "eyeliner", b: 9, colours: [sw("black", "#1e1b24"), sw("brown", "#5a3a28"), sw("purple", "#7b3fc4", 2), sw("blue", "#2f62d8", 2)], d: "A little wing, a lot of attitude." },
      { id: "mascara", label: "Mascara", n: "mascara", fixedPhrase: true, b: 4, colours: [sw("black", "#1e1b24"), sw("brown", "#5a3a28")], d: "Lashes, but more. Subtle and lovely." },
      { id: "blush", label: "Blush", n: "blush", b: 5, colours: [sw("pink", "#ff7fa8"), sw("peach", "#ff9e7a"), sw("berry", "#d24d7e", 1)], d: "Sun-kissed, even on a cloudy day." },
      { id: "glitter", label: "Glitter / highlight", n: "glitter", b: 8, colours: [sw("gold", "#f5cf63", 0, "gold highlight"), sw("silver", "#e6e8f0", 0, "silver glitter"), sw("pink", "#ffb3d9", 1, "pink glitter"), sw("rainbow", "rainbow", 4, "rainbow glitter")], d: "Catch the light. Very Pride, very any day." },
    ],
  };
  const MULTI = ["acc", "mu"];
  // One-tap preset for the Makeup slot.
  const SOFT_GLAM = { mascara: 0, liner: 1, blush: 1, gloss: 1, glitter: 0 };
  const SLOTS = [["top", "Top"], ["bottom", "Bottoms"], ["shoes", "Shoes"], ["acc", "Extras"], ["mu", "Makeup"], ["you", "You"]];
  const SKIN = ["#f6d7c3", "#eebd9a", "#d9a07a", "#b97a52", "#8d5a3b", "#5e3b26"];
  const HAIR = [["dark brown", "#2b211c"], ["brown", "#5a3b24"], ["auburn", "#a8743f"], ["blond", "#e2c17a"], ["black", "#161519"], ["pink", "#f29ac0"], ["lilac", "#b9a3e8"]];
  const BYID = {};
  Object.entries(ITEMS).forEach(([slot, list]) => list.forEach((it) => (BYID[it.id] = Object.assign(it, { slot }))));
  const colourOf = (it, ci) => it.colours[Math.max(0, Math.min(it.colours.length - 1, ci | 0))];

  const RAINBOW = ["#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e", "#732982"];
  const FLAGS = {
    rainbow: RAINBOW,
    progress: ["#5bcefa", "#f5a9b8", "#ffffff", "#e40303", "#ff8c00", "#ffed00", "#008026", "#24408e", "#732982"],
    mlm: ["#078d70", "#26ceaa", "#98e8c1", "#ffffff", "#7bade2", "#5049cc", "#3d1a78"],
  };

  // ---------- State ----------
  const DEFAULT_CUR = { top: { id: "otee", c: 0 }, bottom: { id: "jeans", c: 1 }, shoes: { id: "sneak", c: 2 }, acc: {}, mu: {}, skin: 1, hair: 0 };
  function load() {
    let s = store.get("wardrobe", null);
    if (!s || typeof s !== "object") s = {};
    s.cur = Object.assign({}, DEFAULT_CUR, s.cur || {});
    MULTI.forEach((m) => { if (!s.cur[m] || typeof s.cur[m] !== "object") s.cur[m] = {}; Object.keys(s.cur[m]).forEach((k) => { if (!BYID[k] || BYID[k].slot !== m) delete s.cur[m][k]; }); });
    ["top", "bottom", "shoes"].forEach((k) => { if (!s.cur[k] || !BYID[s.cur[k].id] || BYID[s.cur[k].id].slot !== k) s.cur[k] = Object.assign({}, DEFAULT_CUR[k]); });
    if (!Array.isArray(s.saved)) s.saved = [];
    if (!s.ladder || typeof s.ladder !== "object") s.ladder = {};
    if (!Array.isArray(s.reactions)) s.reactions = [];
    return s;
  }
  let S = load();
  const save = () => store.set("wardrobe", S);

  // ---------- Boldness ----------
  const LEVELS = [
    { min: 0, label: "Low-key", line: "Comfy, classic, all yours. Every look counts." },
    { min: 25, label: "Bit of flair", line: "A little sparkle. People will start to clock the vibe." },
    { min: 50, label: "Gaydar pinging", line: "Heads up: the Valley is going to notice. In the best way." },
    { min: 75, label: "Unmistakably gay 🏳️‍🌈", line: "No notes. Fully, fabulously you." },
  ];
  const levelOf = (score) => { let i = 0; while (i + 1 < LEVELS.length && score >= LEVELS[i + 1].min) i++; return i; };
  function parts(o) {
    const out = [];
    ["top", "bottom", "shoes"].forEach((k) => { if (o[k] && BYID[o[k].id]) out.push({ it: BYID[o[k].id], ci: o[k].c }); });
    MULTI.forEach((m) => Object.keys(o[m] || {}).forEach((id) => BYID[id] && out.push({ it: BYID[id], ci: o[m][id] })));
    return out;
  }
  function scoreOf(o) {
    let raw = 0;
    parts(o).forEach(({ it, ci }) => (raw += it.b + (colourOf(it, ci).b || 0)));
    return Math.max(0, Math.min(100, Math.round(raw * 1.15)));
  }
  const phrase = ({ it, ci }) => {
    const c = colourOf(it, ci);
    if (c.p) return c.p;
    if (it.fixedPhrase) return it.n;
    return `${c.k} ${it.n}`;
  };

  // ---------- Avatar SVG ----------
  let uidN = 0;
  const xl = (y) => (y <= 150 ? 68 + ((y - 92) * 4) / 58 : 72 + ((Math.min(y, 210) - 150) * 2) / 50);
  const xr = (y) => 200 - xl(y);
  const lerp = (pts, y) => { if (y <= pts[0][0]) return pts[0][1]; for (let i = 1; i < pts.length; i++) if (y <= pts[i][0]) { const [y0, x0] = pts[i - 1], [y1, x1] = pts[i]; return x0 + ((x1 - x0) * (y - y0)) / (y1 - y0); } return pts[pts.length - 1][1]; };
  const LO = [[196, 74], [252, 78], [316, 81]], LI = [[208, 100], [252, 97], [316, 95]];
  const lo = (y) => lerp(LO, y), li = (y) => lerp(LI, y);
  function shade(hex, amt) {
    if (!/^#[0-9a-f]{6}$/i.test(hex)) return "#732982";
    const n = parseInt(hex.slice(1), 16);
    const ch = (v) => Math.max(0, Math.min(255, Math.round(amt < 0 ? v * (1 + amt) : v + (255 - v) * amt)));
    return "#" + [n >> 16, (n >> 8) & 255, n & 255].map((v) => ch(v).toString(16).padStart(2, "0")).join("");
  }
  const MIRROR = 'transform="translate(200 0) scale(-1 1)"';
  const both = (s) => s + `<g ${MIRROR}>${s}</g>`;

  function avatarSVG(o, opts = {}) {
    const u = "wd" + ++uidN;
    const skin = SKIN[o.skin | 0] || SKIN[1];
    const skinD = shade(skin, -0.12);
    const hair = (HAIR[o.hair | 0] || HAIR[0])[1];
    const defs = [];
    let rbDone = false;
    // Fill for a colour: hex, or a striped rainbow gradient.
    const paint = (c) => {
      if (c.v === "rainbow") {
        if (!rbDone) {
          rbDone = true;
          const stops = RAINBOW.map((col, i) => `<stop offset="${f((i / 6) * 100)}%" stop-color="${col}"/><stop offset="${f(((i + 1) / 6) * 100)}%" stop-color="${col}"/>`).join("");
          defs.push(`<linearGradient id="${u}rb" x1="0" y1="0" x2="0" y2="1">${stops}</linearGradient>`);
        }
        return `url(#${u}rb)`;
      }
      return c.v;
    };
    const det = (c, amt = -0.18) => (c.v === "rainbow" ? "#5b2a7a" : shade(c.v, amt));
    const sel = (k) => (o[k] && BYID[o[k].id] ? { it: BYID[o[k].id], c: colourOf(BYID[o[k].id], o[k].c) } : null);
    const top = sel("top"), bot = sel("bottom"), sh = sel("shoes");
    const acc = {};
    MULTI.forEach((m) => Object.keys(o[m] || {}).forEach((id) => BYID[id] && (acc[id] = colourOf(BYID[id], o[m][id]))));
    const E = 'style="stroke:var(--wd-edge)" stroke-width="1.2" stroke-linejoin="round"';

    const L = []; // layers in paint order
    // Scene
    defs.push(`<linearGradient id="${u}sky" x1="0" y1="0" x2="0" y2="1"><stop offset="0" style="stop-color:var(--wd-sky1)"/><stop offset="1" style="stop-color:var(--wd-sky2)"/></linearGradient>`);
    L.push(`<rect x="0" y="0" width="200" height="350" rx="22" fill="url(#${u}sky)"/>`);
    L.push(`<circle cx="164" cy="40" r="17" style="fill:var(--wd-sun)"/><circle cx="164" cy="40" r="26" style="fill:var(--wd-sun)" opacity=".25"/>`);
    L.push(`<path d="M0 300 Q100 284 200 300 L200 328 Q200 350 178 350 L22 350 Q0 350 0 328 Z" style="fill:var(--wd-ground)"/>`);
    L.push(`<ellipse cx="100" cy="334" rx="42" ry="5" fill="#000" opacity=".13"/>`);

    // Tote body (behind the right arm)
    if (acc.tote) {
      const c = acc.tote;
      L.push(`<path d="M138 172 L172 172 L176 216 Q176 220 172 220 L138 220 Q134 220 134 216 Z" fill="${paint(c)}" ${E}/>`);
      L.push(`<path d="M149 192 c0-4 6-4 6 0 c0-4 6-4 6 0 c0 4-6 8-6 9 c0-1-6-5-6-9z" fill="${c.v === "#f8f8f6" || c.v === "#e8dcc4" ? "#ff4fa3" : "#ffffff"}" opacity=".9"/>`);
    }

    // Arms, legs, torso, neck
    L.push(`<g fill="none" stroke="${skin}" stroke-width="15" stroke-linecap="round"><path d="M66 98 Q56 140 54 196"/><path d="M134 98 Q144 140 146 196"/></g>`);
    L.push(`<path d="M74 196 L126 196 L${f(200 - lo(252))} 252 L${f(200 - lo(316))} 316 L${f(200 - li(316))} 316 L${f(200 - li(252))} 252 L100 208 L${f(li(252))} 252 L${f(li(316))} 316 L${f(lo(316))} 316 L${f(lo(252))} 252 Z" fill="${skin}"/>`);
    L.push(`<rect x="92" y="70" width="16" height="22" rx="5" fill="${skinD}"/>`);
    L.push(`<path d="M68 92 Q100 84 132 92 L${f(xr(150))} 150 L${f(xr(200))} 200 L${f(xl(200))} 200 L${f(xl(150))} 150 Z" fill="${skin}"/>`);
    L.push(`<circle cx="70" cy="97" r="8" fill="${skin}"/><circle cx="130" cy="97" r="8" fill="${skin}"/>`);
    L.push(`<circle cx="100" cy="174" r="1.3" fill="${skinD}"/>`);

    // Shoes and feet
    const feet = [87, 113];
    const shUnder = [], shOver = [];
    if (sh) {
      const c = sh.c, p = paint(c), d = det(c);
      feet.forEach((cx) => {
        if (sh.it.id === "flip") {
          shUnder.push(`<ellipse cx="${cx}" cy="325" rx="12" ry="6.5" fill="${p}" ${E}/>`);
          shOver.push(`<path d="M${cx - 8} 323 Q${cx} 315 ${cx + 8} 323" fill="none" stroke="${d}" stroke-width="2.4" stroke-linecap="round"/>`);
          shOver.push(`<g transform="translate(${cx} 318.5)"><circle r="2.6" fill="#fff"/><circle cx="-2.3" r="1.6" fill="#fff"/><circle cx="2.3" r="1.6" fill="#fff"/><circle cy="-2.2" r="1.6" fill="#fff"/><circle cy="2.2" r="1.6" fill="#fff"/><circle r="1.3" fill="#ffc83d"/></g>`);
        } else if (sh.it.id === "slides") {
          shUnder.push(`<ellipse cx="${cx}" cy="325.5" rx="12" ry="6" fill="${shade(c.v === "rainbow" ? "#ffffff" : c.v, 0.35)}" ${E}/>`);
          shOver.push(`<rect x="${cx - 10.5}" y="316.5" width="21" height="8" rx="4" fill="${p}" ${E}/>`);
        } else if (sh.it.id === "strappy") {
          shUnder.push(`<ellipse cx="${cx}" cy="325.5" rx="11.5" ry="5.5" fill="${p}" ${E}/>`);
          shOver.push(`<g fill="none" stroke="${p}" stroke-width="2" stroke-linecap="round"><path d="M${cx - 9} 324 L${cx + 9} 319"/><path d="M${cx - 9} 319 L${cx + 9} 324"/><path d="M${cx - 6} 312 L${cx + 6} 312"/></g>`);
        } else if (sh.it.id === "platform") {
          shUnder.push(`<rect x="${cx - 12.5}" y="323" width="25" height="11" rx="4" fill="${p}" ${E}/><path d="M${cx - 12} 330 L${cx + 12} 330" stroke="${d}" stroke-width="1"/>`);
          shOver.push(`<rect x="${cx - 10.5}" y="317" width="21" height="4.5" rx="2.2" fill="${p}" ${E}/><rect x="${cx - 7}" y="310" width="14" height="3.4" rx="1.7" fill="${p}" ${E}/>`);
        } else {
          // sneakers: white shoe, coloured stripe
          shOver.push(`<path d="M${cx - 11.5} 327 Q${cx - 12} 315 ${cx - 7} 311 L${cx + 7} 311 Q${cx + 12} 315 ${cx + 11.5} 327 Z" fill="#fbfbfa" ${E}/>`);
          shOver.push(`<path d="M${cx - 11.5} 325 L${cx + 11.5} 325" stroke="#d9d7e0" stroke-width="3"/><path d="M${cx - 7} 320 Q${cx} 314 ${cx + 7} 320" fill="none" stroke="${c.v === "#f8f8f6" ? "#d9d7e0" : p}" stroke-width="3" stroke-linecap="round"/>`);
        }
      });
    }
    L.push(shUnder.join(""));
    L.push(feet.map((cx) => `<ellipse cx="${cx}" cy="322" rx="9" ry="6" fill="${skin}"/>`).join(""));
    if (acc.nails) feet.forEach((cx) => L.push(`<g fill="${paint(acc.nails.v === "rainbow" ? { v: RAINBOW[cx === 87 ? 0 : 4] } : acc.nails)}">${[-5, -1.7, 1.7, 5].map((dx) => `<circle cx="${cx + dx}" cy="326" r="1.1"/>`).join("")}</g>`));
    L.push(shOver.join(""));

    // Bottoms
    if (bot) {
      const it = bot.it, c = bot.c, p = paint(c), d = det(c), yb = it.yb, fl = it.fl;
      const body = `M73 186 L127 186 L${f(200 - lo(yb) + fl)} ${yb} L${f(200 - li(yb) - 0.5)} ${yb} L100 209 L${f(li(yb) + 0.5)} ${yb} L${f(lo(yb) - fl)} ${yb} Z`;
      L.push(`<path d="${body}" fill="${p}" ${E}/>`);
      if (it.id === "short5") {
        const trim = c.v === "#f8f8f6" ? "#ff4fa3" : "#ffffff";
        L.push(`<g stroke="${trim}" stroke-width="2.2" fill="none"><path d="M${f(lo(yb) - fl + 1)} ${yb - 2} L${f(li(yb))} ${yb - 2}"/><path d="M${f(200 - lo(yb) + fl - 1)} ${yb - 2} L${f(200 - li(yb))} ${yb - 2}"/></g>`);
        L.push(`<path d="M73 191 L127 191" stroke="${d}" stroke-width="1.4"/>`);
      } else if (it.id === "bike") {
        L.push(`<g stroke="${c.v === "#26252d" ? "#ff4fa3" : "#ffffff"}" stroke-width="1.8" opacity=".85"><path d="M74 194 L${f(lo(yb) + 1.4)} ${yb - 1}"/><path d="M126 194 L${f(200 - lo(yb) - 1.4)} ${yb - 1}"/></g>`);
        L.push(`<path d="M73 191 L127 191" stroke="${d}" stroke-width="1.4"/>`);
      } else if (it.id === "cutoff" || it.id === "jeans") {
        L.push(`<g fill="none" stroke="${d}" stroke-width="1.1"><path d="M73 191 L127 191"/><path d="M78 192 Q84 204 90 192"/><path d="M122 192 Q116 204 110 192"/><path d="M100 192 L100 207"/></g><circle cx="100" cy="189" r="1.5" fill="#d7b46a"/>`);
        if (it.id === "cutoff") {
          const fr = (x0, x1) => { let s = ""; for (let x = x0; x < x1 - 1; x += 3) s += `M${f(x)} ${yb} l1.5 3.2 l1.5 -3.2 `; return s; };
          L.push(`<path d="${fr(lo(yb) - fl, li(yb))} ${fr(200 - li(yb), 200 - lo(yb) + fl)}" fill="none" stroke="${shade(c.v, 0.4)}" stroke-width="1.2"/>`);
          L.push(`<path d="M${f(lo(yb) - fl + 1)} ${yb} l5 0 l-1 5 z" fill="#ffffff" opacity=".9"/><path d="M${f(200 - lo(yb) + fl - 1)} ${yb} l-5 0 l1 5 z" fill="#ffffff" opacity=".9"/>`);
        } else {
          L.push(`<g fill="${d}"><rect x="${f(lo(yb) - fl - 0.5)}" y="${yb - 6}" width="${f(li(yb) - lo(yb) + fl + 1)}" height="6" rx="1.5"/><rect x="${f(200 - li(yb) - 0.5)}" y="${yb - 6}" width="${f(li(yb) - lo(yb) + fl + 1)}" height="6" rx="1.5"/></g>`);
        }
      } else if (it.id === "linenp") {
        L.push(`<path d="M73 192 L127 192" stroke="${d}" stroke-width="1.4"/><path d="M98 192 l-2 9 M102 192 l2 9" stroke="${d}" stroke-width="1.2" stroke-linecap="round"/><g stroke="${d}" stroke-width=".9" opacity=".6"><path d="M86 214 L84 300"/><path d="M114 214 L116 300"/></g>`);
      } else {
        L.push(`<path d="M73 191 L127 191" stroke="${d}" stroke-width="1.4"/><path d="M84 194 l0 8 M116 194 l0 8" stroke="${d}" stroke-width="1"/>`);
      }
    }

    // Tops
    if (top) {
      const it = top.it, c = top.c, p = paint(c), d = det(c), yb = it.yb;
      const panel = (pad, y2) => `M${f(xl(92) - pad)} 92 L88 87 Q100 98 112 87 L${f(xr(92) + pad)} 92 L${f(xr(y2) + pad)} ${y2} L${f(xl(y2) - pad)} ${y2} Z`;
      const tank = (y2) => `M78 87 L86 87 Q100 110 114 87 L122 87 Q123 106 ${f(xr(114))} 114 L${f(xr(y2) + 0.5)} ${y2} L${f(xl(y2) - 0.5)} ${y2} L${f(xl(114))} 114 Q77 106 78 87 Z`;
      const shortSleeve = `M65 90 L78 99 L72 125 L48 120 L56 95 Z`;
      const elbowSleeve = (w) => `M64 89 L80 100 L${73 + w} 151 L${44 - w} 147 L54 95 Z`;
      if (it.id === "crop") {
        L.push(`<path d="M${f(xl(108) - 0.5)} 108 Q100 101 ${f(xr(108) + 0.5)} 108 L${f(xr(yb) + 0.5)} ${yb} L${f(xl(yb) - 0.5)} ${yb} Z" fill="${p}" ${E}/>`);
        L.push(`<g stroke="${d}" stroke-width="2.2" stroke-linecap="round"><path d="M81 89 L80 106"/><path d="M119 89 L120 106"/></g>`);
        L.push(`<path d="M${f(xl(yb) - 0.5)} ${yb - 2} L${f(xr(yb) + 0.5)} ${yb - 2}" stroke="${d}" stroke-width="1" opacity=".6"/>`);
      } else if (it.id === "ctee" || it.id === "otee" || it.id === "button") {
        const pad = it.id === "otee" ? 7 : 0;
        L.push(`<g fill="${p}" ${E}>${both(it.id === "otee" ? `<path d="${elbowSleeve(2)}"/>` : `<path d="${shortSleeve}"/>`)}<path d="${panel(pad, yb)}"/></g>`);
        if (it.id === "button") {
          L.push(`<g fill="${shade(c.v, 0.25)}" ${E}><path d="M88 86 L100 98 L92 104 L84 90 Z"/><path d="M112 86 L100 98 L108 104 L116 90 Z"/></g>`);
          L.push(`<path d="M100 98 L100 ${yb}" stroke="${d}" stroke-width="1"/>` + [110, 128, 146, 164, 182].map((y) => `<circle cx="102.5" cy="${y}" r="1.4" fill="${d}"/>`).join(""));
          L.push(`<rect x="108" y="112" width="12" height="13" rx="2" fill="none" stroke="${d}" stroke-width="1"/>`);
        } else {
          L.push(`<path d="M88 87 Q100 98 112 87" fill="none" stroke="${d}" stroke-width="2"/>`);
          if (it.id === "ctee") L.push(`<path d="M${f(xl(yb))} ${yb - 2} L${f(xr(yb))} ${yb - 2}" stroke="${d}" stroke-width="1" opacity=".6"/>`);
        }
      } else if (it.id === "rtank") {
        L.push(`<path d="${tank(yb)}" fill="${p}" ${E}/>`);
        L.push(`<g stroke="${d}" stroke-width=".8" opacity=".55">${[84, 90, 96, 102, 108, 114].map((x) => `<path d="M${x + (x < 100 ? -2 : 2) * 0.3} ${x > 86 && x < 114 ? 106 : 112} L${x + (x < 100 ? -2 : 2)} ${yb - 2}"/>`).join("")}</g>`);
        L.push(`<path d="M86 87 Q100 110 114 87" fill="none" stroke="${d}" stroke-width="2"/>`);
      } else if (it.id === "mtank") {
        defs.push(`<pattern id="${u}mesh" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><path d="M0 0 L0 5 M0 0 L5 0" stroke="${c.v}" stroke-width="1.5"/></pattern>`);
        L.push(`<path d="${tank(yb)}" fill="${c.v}" fill-opacity=".3"/><path d="${tank(yb)}" fill="url(#${u}mesh)" ${E}/>`);
        L.push(`<path d="M78 87 L86 87 Q100 110 114 87 L122 87" fill="none" stroke="${c.v}" stroke-width="2.4" stroke-linejoin="round"/><path d="M${f(xl(yb))} ${yb - 1} L${f(xr(yb))} ${yb - 1}" stroke="${c.v}" stroke-width="2.4"/>`);
      } else if (it.id === "linen") {
        L.push(`<g fill="${p}" ${E}>${both(`<path d="${elbowSleeve(0)}"/><path d="M${f(xl(92) - 1.5)} 92 L89 87 L95 114 L93 ${yb} L${f(xl(yb) - 2.5)} ${yb} Z"/>`)}</g>`);
        L.push(`<g fill="${shade(c.v, -0.07)}" ${E}>${both(`<path d="M89 86 L97 116 L88 104 L84 90 Z"/>`)}</g>`);
        L.push(both(`<path d="M50 140 L74 144" stroke="${d}" stroke-width="2.4" stroke-linecap="round"/>`));
      }
    }

    // Hands and wrist bits
    L.push(`<circle cx="54" cy="204" r="8.5" fill="${skin}"/><circle cx="146" cy="204" r="8.5" fill="${skin}"/>`);
    if (acc.nails) {
      [54, 146].forEach((hx, h) => {
        L.push([-4.5, -1.5, 1.5, 4.5].map((dx, i) => `<ellipse cx="${hx + dx}" cy="210.6" rx="1.4" ry="1.8" fill="${acc.nails.v === "rainbow" ? RAINBOW[(i + h * 2) % 6] : acc.nails.v}" style="stroke:var(--wd-edge)" stroke-width=".5"/>`).join(""));
      });
    }
    if (acc.rings) L.push(`<g fill="${acc.rings.v}" style="stroke:var(--wd-edge)" stroke-width=".5"><rect x="48.5" y="205.5" width="4" height="2.2" rx="1"/><rect x="55.5" y="205.5" width="4" height="2.2" rx="1"/><rect x="146.5" y="205.5" width="4" height="2.2" rx="1"/></g>`);
    if (acc.bracelets) {
      const c = acc.bracelets;
      const cols = c.v === "rainbow" ? ["#e40303", "#ffed00", "#24408e"] : c.v === "pastel" ? ["#f7b6d2", "#a8e6cf", "#c9b6f2"] : [c.v, shade(c.v, -0.15), c.v];
      L.push(cols.map((col, i) => `<rect x="${i === 1 ? 45.5 : 46}" y="${181 + i * 4}" width="${i === 1 ? 18 : 17}" height="3.3" rx="1.6" fill="${col}" style="stroke:var(--wd-edge)" stroke-width=".6"/>`).join(""));
    }

    // Head
    L.push(`<circle cx="76" cy="56" r="5.5" fill="${skinD}"/><circle cx="124" cy="56" r="5.5" fill="${skinD}"/>`);
    L.push(`<circle cx="100" cy="51" r="25" fill="${skin}"/>`);
    L.push(`<path d="M75.5 52 Q73 23 100 23 Q128 23 124.5 52 Q121 40 112 37 Q104 42 92 37 Q80 40 75.5 52 Z" fill="${hair}"/>`);
    L.push(`<g fill="#2a2433"><circle cx="91" cy="54" r="2.4"/><circle cx="109" cy="54" r="2.4"/></g>`);
    L.push(acc.blush ? `<g fill="${acc.blush.v}" opacity=".5"><circle cx="84.5" cy="61.5" r="5.2"/><circle cx="115.5" cy="61.5" r="5.2"/></g>` : `<g fill="#ff7d9a" opacity=".35"><circle cx="85" cy="62" r="4"/><circle cx="115" cy="62" r="4"/></g>`);
    if (acc.glitter) {
      const g = acc.glitter, star = (x, y, s, col) => `<path d="M${x} ${f(y - s)} L${f(x + s * 0.32)} ${y} L${x} ${f(y + s)} L${f(x - s * 0.32)} ${y} Z M${f(x - s)} ${y} L${x} ${f(y - s * 0.32)} L${f(x + s)} ${y} L${x} ${f(y + s * 0.32)} Z" fill="${col}"/>`;
      const cols = g.v === "rainbow" ? ["#ff4f4f", "#ffd23d", "#3dd17a", "#4f7bff", "#b45cff"] : [g.v, "#ffffff", g.v, g.v, "#ffffff"];
      L.push(`<g style="stroke:var(--wd-edge)" stroke-width=".25">` + [[82, 57.5, 2.2], [87.5, 58.6, 1.5], [80.5, 61.5, 1.3], [118, 57.5, 2.2], [112.5, 58.6, 1.5], [119.5, 61.5, 1.3], [100, 58.5, 1.2]].map(([x, y, sz], i) => star(x, y, sz, cols[i % cols.length])).join("") + `</g>`);
    }
    if (acc.liner) L.push(both(`<path d="M88.2 52.4 Q91 50.6 93.6 52.2 M88.6 53 L85.4 50.6" fill="none" stroke="${acc.liner.v}" stroke-width="1.3" stroke-linecap="round"/>`));
    if (acc.mascara) L.push(both(`<path d="M88.4 53 l-2.2 -1.5 M89.4 52 l-1.4 -2.1 M91 51.5 l-0.5 -2.3" fill="none" stroke="${acc.mascara.v}" stroke-width="1" stroke-linecap="round"/>`));
    const lips = "M92.5 63 Q96 61.4 100 62.7 Q104 61.4 107.5 63 Q100 71 92.5 63 Z";
    if (acc.lipstick) L.push(`<path d="${lips}" fill="${acc.lipstick.v}"/>`);
    else if (acc.gloss) L.push(`<path d="${lips}" fill="${acc.gloss.v}" opacity=".75"/>`);
    L.push(`<path d="M92.5 63 Q100 ${acc.lipstick || acc.gloss ? 66.5 : 70} 107.5 63" fill="none" stroke="${acc.lipstick ? shade(acc.lipstick.v, -0.35) : "#7a3b3b"}" stroke-width="${acc.lipstick || acc.gloss ? 1.1 : 2}" stroke-linecap="round"/>`);
    if (acc.gloss) L.push(`<ellipse cx="102.5" cy="66.8" rx="2.4" ry=".9" fill="#ffffff" opacity=".85"/><circle cx="96.5" cy="66.4" r=".6" fill="#ffffff" opacity=".8"/>`);
    if (acc.earrings) {
      const c = acc.earrings;
      L.push(c.k === "pearl" ? both(`<circle cx="76" cy="62.5" r="2.4" fill="${c.v}" style="stroke:var(--wd-edge)" stroke-width=".6"/>`) : both(`<circle cx="76" cy="64.5" r="3.6" fill="none" stroke="${c.v}" stroke-width="1.8"/>`));
    }
    if (acc.sunnies) {
      const c = acc.sunnies, p = paint(c);
      L.push(`<g><path d="M80 52 L77 54 M120 52 L123 54" stroke="${c.v === "rainbow" ? "#732982" : c.v}" stroke-width="1.8"/><rect x="81" y="47.5" width="16" height="11" rx="4.5" fill="${p}"/><rect x="103" y="47.5" width="16" height="11" rx="4.5" fill="${p}"/><rect x="83" y="49.5" width="12" height="7" rx="3" fill="#2b2b3a" opacity=".92"/><rect x="105" y="49.5" width="12" height="7" rx="3" fill="#2b2b3a" opacity=".92"/><path d="M97 51 Q100 49 103 51" stroke="${c.v === "rainbow" ? "#732982" : c.v}" stroke-width="1.8" fill="none"/><path d="M85 51 l3 0" stroke="#fff" stroke-width="1" opacity=".6"/><path d="M107 51 l3 0" stroke="#fff" stroke-width="1" opacity=".6"/></g>`);
    }
    if (acc.hat) {
      const c = acc.hat, p = paint(c);
      L.push(`<path d="M79 40 Q80 17 100 17 Q120 17 121 40 Z" fill="${p}" ${E}/><path d="M80 34 L120 34" stroke="${det(c, -0.15)}" stroke-width="2.2"/><path d="M70 45 L78 36 Q100 31 122 36 L130 45 Q100 51 70 45 Z" fill="${p}" ${E}/>`);
    }

    // Necklace, pin, tote strap
    if (acc.necklace) {
      const c = acc.necklace;
      if (c.k === "pearls" || c.k === "pastel beads") L.push(`<path d="M89 85 Q100 103 111 85" fill="none" stroke="${c.k === "pearls" ? "#f4efe6" : "url(#" + u + "bd)"}" stroke-width="3.6" stroke-linecap="round" stroke-dasharray="0 4.4"/>`), c.k !== "pearls" && defs.push(`<linearGradient id="${u}bd" gradientUnits="userSpaceOnUse" x1="89" y1="0" x2="111" y2="0"><stop offset="0" stop-color="#f7b6d2"/><stop offset=".33" stop-color="#a8e6cf"/><stop offset=".66" stop-color="#c9b6f2"/><stop offset="1" stop-color="#fbe7a1"/></linearGradient>`);
      else L.push(`<path d="M89 85 Q100 102 111 85" fill="none" stroke="${c.v}" stroke-width="1.5"/><circle cx="100" cy="95.5" r="2.6" fill="${c.v}" style="stroke:var(--wd-edge)" stroke-width=".6"/>`);
    }
    if (acc.pin) {
      const cols = FLAGS[acc.pin.v] || RAINBOW, h = 13 / cols.length;
      defs.push(`<clipPath id="${u}pin"><circle cx="117" cy="122" r="6.5"/></clipPath>`);
      L.push(`<g clip-path="url(#${u}pin)">${cols.map((col, i) => `<rect x="110" y="${f(115.5 + i * h)}" width="14" height="${f(h + 0.3)}" fill="${col}"/>`).join("")}</g><circle cx="117" cy="122" r="6.5" fill="none" stroke="#c9ccd4" stroke-width="1.3"/>`);
    }
    if (acc.tote) {
      const c = acc.tote, d = det(c, -0.2);
      L.push(`<path d="M142 172 Q136 110 124 90 M168 172 Q150 106 130 91" fill="none" stroke="${d}" stroke-width="2.6" stroke-linecap="round"/>`);
    }

    const title = opts.label ? `<title>${esc(opts.label)}</title>` : "";
    return `<svg class="${opts.cls || "wd-fig"}" viewBox="0 0 200 350" role="img" aria-label="${esc(opts.label || "Your avatar")}" xmlns="http://www.w3.org/2000/svg">${title}<defs>${defs.join("")}</defs>${L.join("")}</svg>`;
  }

  // ---------- Reactions ----------
  // Most come from the women in his life; men only as a date, crush or the boyfriend (flirty-sweet, never sexual).
  // Placeholders: {top} {bottom} {shoes} {acc} {mu} {look} {focus} plus {name} {bf} via fill().
  // t: tiers (0 low-key .. 3 unmistakable). need: "acc"/"mu" means at least one accessory/makeup piece is worn.
  const R = [
    // Low-key
    { from: "Jess", t: [0], text: "Love the {top}, {name}. Clean and comfy suits you." },
    { from: "Sam", t: [0], text: "Casual Friday energy, {name}. The {bottom} work." },
    { from: "Chloe", t: [0], text: "Simple and cute. Next time chuck some sunnies on and own it 😎" },
    { from: "Ailisha", t: [0, 1], text: "Understated but so you, {name}. Love the {shoes}." },
    { from: "Rachel", t: [0], text: "{name}, simple style but I like! Very comfortable feeling. Next time more colour, okay? 😊" },
    { from: "Dani", t: [0], text: "Classic. Now let's see you try something with a bit more leg 😏" },
    // Bit of flair
    { from: "Priya", t: [1, 2], text: "Ooh {name}, the {top} with the {bottom}? Cute cute cute." },
    { from: "Nicole", t: [1], text: "Okay I see you, {name}. A little bit of flair 👀" },
    { from: "Chloe", t: [1, 2], text: "Flatmate review: {shoes} are a 10. Can I borrow them?" },
    { from: "Jemima", t: [1, 2], need: "acc", text: "{name}!! The {acc}?? Little details like that make the whole look." },
    { from: "Rachel", t: [1, 2], text: "Wah, {name}, the {top} is so pretty on you. Where you buy? I want same one." },
    { from: "Sam", t: [1], text: "Tell me the {top} is coming to work drinks. It has to." },
    { from: "Dani", t: [1, 2], text: "{bottom} and {shoes} for leg day recovery? Respect 💪" },
    // Gaydar pinging
    { from: "Jemima", t: [2, 3], text: "Okay {name}, Valley-ready. The {look}? Yes." },
    { from: "Priya", t: [2, 3], text: "STOP. The {look}?? Iconic." },
    { from: "Nicole", t: [2], text: "{name} is the main character at South Bank, honestly. The {shoes} too!!" },
    { from: "Jess", t: [2, 3], text: "Obsessed with the {top}. You're wearing that to trivia, no arguments." },
    { from: "Ailisha", t: [2, 3], text: "You look so relaxed in this, {name}. The {bottom} are perfect for the heat." },
    { from: "Rachel", t: [2, 3], text: "대박!! {name}, this outfit is really suit you. You look so happy." },
    { from: "Chloe", t: [2, 3], need: "acc", text: "The {acc} with the {top}?? I'm taking a photo before you leave." },
    { from: "Sam", t: [2, 3], text: "James St called. It wants its best-dressed back." },
    // Unmistakably gay
    { from: "Priya", t: [3], text: "{name}. The {look} with the {shoes}?? Unmistakably gay and absolutely thriving 🏳️‍🌈" },
    { from: "Jemima", t: [3], need: "acc", text: "{name}!! {acc}, {shoes}, all of it. The Valley isn't ready." },
    { from: "Nicole", t: [3], text: "I'M SCREAMING. {name} said gay rights and wore the {top} 🌈" },
    { from: "Jess", t: [3], text: "You look like the happiest person on Queen St Mall. Because you will be." },
    { from: "Dani", t: [3], text: "Mate. MATE. That's the most confident fit I've seen on you. Proud of you." },
    { from: "Rachel", t: [3], text: "Wah, {name} so stylish today 대박. Everyone in West End will look. In good way!! 💕" },
    { from: "Ailisha", t: [3], need: "acc", text: "Fully you, head to toe, {name}. The {acc} is the cherry on top." },
  ];
  // Makeup lines ({mu} = a makeup piece being worn).
  R.push(
    { from: "Priya", t: [1, 2, 3], need: "mu", text: "{name} that {mu}?? Teach me." },
    { from: "Jemima", t: [2, 3], need: "mu", text: "The {mu} with the {top}. {name}, you're glowing. Literally." },
    { from: "Rachel", t: [1, 2, 3], need: "mu", text: "{name}, your {mu} is so pretty! Which brand? I want try also." },
    { from: "Nicole", t: [2, 3], need: "mu", text: "Not {name} out here with the {mu} looking better than all of us 💄" },
    { from: "Chloe", t: [1, 2], need: "mu", text: "Flatmate verdict: the {mu} is perfect. Raid my makeup bag anytime." },
    { from: "Ailisha", t: [0, 1], need: "mu", text: "A little {mu} goes a long way. Looks lovely, {name}." },
    { from: "Sam", t: [1, 2, 3], need: "mu", text: "{name}, the {mu} today? Easily the best-dressed person on the floor." },
  );
  const GUYS = [
    { from: "{bf}", t: [1, 2, 3], need: "mu", text: "The {mu} looks really good on you, {name}. Just saying." },
    { from: "Alex", t: [2, 3], need: "mu", text: "Okay, the {mu}? Very distracting. Dinner Friday? 😊" },
    { from: "{bf}", t: [0, 1], text: "You look good in anything. But I'll be honest, I'm a fan of the {shoes}." },
    { from: "{bf}", t: [2, 3], text: "Okay wow. I'm taking you to James St in that {top}." },
    { from: "{bf}", t: [1, 2, 3], text: "You look so happy in this. It suits you. You suit you." },
    { from: "Alex", t: [1, 2, 3], text: "Okay the {bottom} and {shoes} combo? Coffee's on me." },
    { from: "Alex", t: [0, 1], text: "Your profile pic didn't mention you dress this well. Drinks this week? 😊" },
    { from: "The cute guy at the café", t: [1, 2, 3], text: "Love the {top}. Your flat white's on the house today 😊" },
    { from: "A guy at a bar in the Valley", t: [2, 3], text: "Sorry, had to say it: that's the best outfit in here." },
  ];
  // Extra lines for real-world wear steps (3: quick trip, 4: with a friend, 5: somewhere busy).
  const STEP_R = {
    3: [
      { from: "Chloe", text: "Saw you duck out to the servo in the {focus}. Smooth. Nobody even blinked." },
      { from: "Rachel", text: "Aigoo, {name} go to shops in {focus}? So brave and so cute! 👏" },
      { from: "Priya", text: "Coffee run in the {focus} counts. Proud of you." },
    ],
    4: [
      { from: "Jess", text: "Thanks for wearing the {focus} out with me today, {name}. You looked so comfortable." },
      { from: "Dani", text: "Gym buddy AND style icon? The {focus} was a good call today." },
      { from: "Nicole", text: "Brunch was great but the {focus} was the main event 💅" },
    ],
    5: [
      { from: "Jemima", text: "{name}! The {focus} at the Valley on a Saturday?? That's huge. Love you." },
      { from: "Ailisha", text: "You walked through South Bank in the {focus} like you owned it. Because you do." },
      { from: "Rachel", text: "Busy place and you wear {focus}! Daebak, I'm so proud of you 💕" },
    ],
  };
  const STEP_GUYS = [
    { from: "The cute guy at the café", text: "Hope you don't mind me saying, the {focus} really suits you." },
    { from: "{bf}", text: "Heard you wore the {focus} out today. Show me later? So proud of you." },
    { from: "Alex", text: "Saw your story in the {focus}. Okay, that's my favourite look of yours." },
  ];

  function vocab(o, focus) {
    const ps = parts(o);
    const get = (slot) => { const p = ps.find((x) => x.it.slot === slot); return p ? phrase(p) : ""; };
    const accs = ps.filter((x) => x.it.slot === "acc");
    const v = { top: get("top"), bottom: get("bottom"), shoes: get("shoes") };
    v.acc = accs.length ? phrase(pick(accs)) : "";
    const mus = ps.filter((x) => x.it.slot === "mu");
    v.mu = mus.length ? phrase(pick(mus)) : "";
    v.look = `${v.top} with the ${v.bottom}`;
    v.focus = focus || v.top;
    return v;
  }
  const subst = (text, v) => fill(text.replace(/\{(top|bottom|shoes|acc|mu|look|focus)\}/g, (_, k) => v[k] || ""))
    .replace(/^(\w)/, (m) => m.toUpperCase());

  function makeReactions(o, score, step, focusPhrase) {
    const tier = levelOf(score);
    const v = vocab(o, focusPhrase);
    const n = 2 + (Math.random() < 0.5 ? 1 : 0);
    const ok = (r) => (!r.t || r.t.includes(tier)) && (!r.need || v[r.need]);
    let women = shuffle(R.filter(ok)), guys = shuffle(GUYS.filter(ok));
    if (step >= 3) { women = shuffle(STEP_R[step] || STEP_R[3]).concat(women); guys = shuffle(STEP_GUYS).concat(guys); }
    const out = [], used = new Set();
    for (let i = 0; i < n; i++) {
      const fromGuy = Math.random() < 0.2 && guys.length; // ~80% from the women
      const pool = fromGuy ? guys : women;
      let r = pool.find((x) => !used.has(x.from));
      if (!r) r = (fromGuy ? women : guys).find((x) => !used.has(x.from));
      if (!r) break;
      used.add(r.from);
      pool.splice(pool.indexOf(r), 1);
      out.push({ from: fill(r.from), text: subst(r.text, v) });
    }
    return out;
  }

  function addReactions(o, score, label, step, focusPhrase) {
    let msgs = [];
    try { msgs = makeReactions(o, score, step, focusPhrase); } catch (e) { console.error(e); }
    if (!msgs.length) return null;
    S.reactions.unshift({ at: Date.now(), date: today, label, score, msgs });
    // Keep about the last 10 messages.
    let total = 0;
    S.reactions = S.reactions.filter((b) => (total += b.msgs.length) - b.msgs.length < 10);
    save();
    msgs.forEach((m) => emit("outfit-reaction", { from: m.from, text: m.text }));
    return msgs;
  }

  // ---------- Ladder ----------
  const STEPS = [
    { t: "Try it on at home", line: "Just you and the mirror. No audience, no pressure." },
    { t: "Wear it around the house for a day", line: "Let it stop feeling like a costume and start feeling like yours." },
    { t: "Wear it on a quick trip (coffee, servo, shops)", line: "Ten minutes, in and out. The servo has seen it all." },
    { t: "Wear it out with a friend", line: "Bring someone in your corner. Everything's more fun with a mate." },
    { t: "Wear it somewhere busy (South Bank, James St, the Valley on a Saturday)", line: "Big, busy and sunny. You've built up to this." },
  ];
  const STEP_TOASTS = [
    ["Step one. That's how it starts. 💛", "Mirror check: looking good."],
    ["Home-tested and approved.", "A whole day in it. It's yours now."],
    ["Out in the world! How good.", "Quick trip, big step."],
    ["Mates make everything easier. Nice one.", "Out with a friend. Look at you go."],
    ["Somewhere busy. That's the big one. 🏳️‍🌈", "You did it in broad Brisbane daylight. Legend."],
  ];
  const niceDate = (iso) => { try { return iso === today ? "today" : new Date(iso + "T00:00:00Z").toLocaleDateString("en-AU", { day: "numeric", month: "short", timeZone: "UTC" }); } catch { return iso || ""; } };
  const lad = (id) => (S.ladder[id] = Object.assign({ done: {}, notes: {}, ever: [] }, S.ladder[id]));
  const ladCount = (id) => { const l = S.ladder[id]; return l ? Object.keys(l.done || {}).length : 0; };

  // ---------- Dares ----------
  const DARES = [
    "Paint just one nail today. Pinky counts.",
    "Wear your shortest shorts for a coffee run.",
    "Swap sneakers for sandals on a quick trip to the shops.",
    "Try a crop top at home and take a mirror selfie. You don't have to post it.",
    "Put a rainbow pin on your bag or hat for one errand.",
    "Wear a bracelet stack all day, even if it's just around the house.",
    "Go pastel from head to toe for an hour.",
    "Walk through Queen St Mall in your favourite look.",
    "Send a mate a photo of today's outfit and ask for a score out of 10.",
    "Bucket hat and sunnies for a stroll through New Farm Park.",
    "Wear earrings to the servo. In and out, nobody cares.",
    "Pick the brightest top you own and wear it out for lunch.",
    "Save a new look here that scores higher than your last one.",
    "Wear the outfit that makes you smile to West End for a browse.",
  ];
  const dareToday = () => DARES[(day * 5 + 3) % DARES.length];

  // ---------- CSS ----------
  const css = `
:root { --wd-sky1: #cfe9ff; --wd-sky2: #fff1d6; --wd-sun: #ffd45c; --wd-ground: #f1dfbd; --wd-edge: rgba(40,28,60,.32); }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --wd-sky1: #34306a; --wd-sky2: #6b5a8e; --wd-sun: #ffc46b; --wd-ground: #4a3f63; --wd-edge: rgba(10,6,20,.55); } }
:root[data-theme="dark"] { --wd-sky1: #34306a; --wd-sky2: #6b5a8e; --wd-sun: #ffc46b; --wd-ground: #4a3f63; --wd-edge: rgba(10,6,20,.55); }
.wd-stage { display: grid; grid-template-columns: minmax(118px, 42%) 1fr; gap: 14px; align-items: start; }
.wd-fig { width: 100%; height: auto; display: block; }
.wd-side { min-width: 0; }
.wd-meter { position: relative; height: 14px; border-radius: 99px; background: var(--soft); overflow: hidden; margin: 6px 0 4px; }
.wd-meter i { position: absolute; inset: 0 auto 0 0; background: var(--rainbow); border-radius: 99px; transition: width .5s cubic-bezier(.3,1.4,.5,1); }
.wd-ticks { display: grid; grid-template-columns: repeat(4, 1fr); gap: 2px; font-size: 10.5px; line-height: 1.2; color: var(--muted); }
.wd-ticks span[aria-current="true"] { color: var(--accent); font-weight: 700; }
.wd-level { font-size: 18px; font-weight: 700; margin: 8px 0 2px; line-height: 1.25; }
.wd-score { font-size: 13px; color: var(--muted); }
.wd-wearing { list-style: none; margin: 8px 0 0; padding: 0; font-size: 13px; color: var(--muted); }
.wd-wearing li { padding: 2px 0; display: flex; gap: 6px; align-items: center; }
.wd-dot { flex: none; width: 10px; height: 10px; border-radius: 50%; border: 1px solid var(--line); }
.wd-seg { display: grid; grid-template-columns: repeat(6, minmax(0, 1fr)); gap: 4px; background: var(--soft); border-radius: 12px; padding: 4px; margin-bottom: 12px; }
.wd-seg button { background: none; border: 0; color: var(--muted); font: inherit; font-size: 12.5px; padding: 7px 0; overflow: hidden; text-overflow: ellipsis; border-radius: 9px; cursor: pointer; min-width: 0; }
.wd-seg button[aria-selected="true"] { background: var(--card); color: var(--ink); font-weight: 600; box-shadow: 0 1px 3px rgba(0,0,0,.12); }
.wd-chips { display: flex; flex-wrap: wrap; gap: 6px; }
.wd-chip { background: var(--card); color: var(--ink); border: 1px solid var(--line); border-radius: 99px; padding: 7px 12px; font: inherit; font-size: 14px; cursor: pointer; }
.wd-chip[aria-pressed="true"] { border-color: var(--accent); background: var(--soft); font-weight: 600; }
.wd-chip[aria-pressed="true"]::before { content: "✓ "; color: var(--accent); }
.wd-chip.wd-focus { outline: 2px solid var(--accent); outline-offset: 1px; }
.wd-info { margin: 12px 0 8px; font-size: 14px; }
.wd-info b { display: block; }
.wd-sw { display: flex; flex-wrap: wrap; gap: 8px; }
.wd-sw button { width: 32px; height: 32px; border-radius: 50%; border: 2px solid var(--line); cursor: pointer; padding: 0; position: relative; }
.wd-sw button[aria-pressed="true"] { border-color: var(--ink); box-shadow: 0 0 0 2px var(--card), 0 0 0 4px var(--accent); }
.wd-swname { font-size: 13px; color: var(--muted); margin-top: 6px; min-height: 1.4em; }
.wd-save { display: flex; gap: 8px; margin-top: 4px; }
.wd-save input { flex: 1; min-width: 0; }
.wd-gallery { display: grid; grid-template-columns: repeat(auto-fill, minmax(92px, 1fr)); gap: 10px; margin-top: 12px; }
.wd-look { position: relative; background: var(--bg); border: 1px solid var(--line); border-radius: 14px; padding: 6px; text-align: center; font-size: 13px; min-width: 0; }
.wd-look > button.wd-wear { all: unset; display: block; cursor: pointer; width: 100%; }
.wd-look .wd-mini { width: 100%; height: auto; display: block; }
.wd-look b { display: block; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; margin-top: 4px; }
.wd-look span { color: var(--muted); font-size: 11.5px; display: block; line-height: 1.25; }
.wd-del { position: absolute; top: 2px; left: 2px; width: 26px; height: 26px; border-radius: 50%; border: 1px solid var(--line); background: var(--card); color: var(--muted); font-size: 14px; line-height: 1; cursor: pointer; }
.wd-thread { display: flex; flex-direction: column; gap: 6px; }
.wd-thread .bubble { max-width: 88%; }
.wd-rhead { font-size: 13px; color: var(--muted); margin: 0 0 8px; }
.wd-dare { display: flex; gap: 12px; align-items: center; }
.wd-dare p { margin: 0; flex: 1; font-size: 16px; }
.wd-lad { border-top: 1px solid var(--line); }
.wd-lad:first-of-type { border-top: 0; }
.wd-lad summary { list-style: none; display: flex; gap: 10px; align-items: center; padding: 10px 0; color: var(--ink); }
.wd-lad summary::-webkit-details-marker { display: none; }
.wd-lad summary .wd-n { flex: 1; min-width: 0; font-weight: 600; }
.wd-pips { display: flex; gap: 3px; }
.wd-pips i { width: 9px; height: 9px; border-radius: 50%; background: var(--line); }
.wd-pips i.on { background: var(--accent); }
.wd-pips.full i.on { background: var(--rainbow); }
.wd-step { display: grid; grid-template-columns: 26px 1fr; gap: 2px 8px; padding: 6px 0 10px; }
.wd-step input[type=checkbox] { width: 22px; height: 22px; margin: 2px 0 0; accent-color: var(--accent); }
.wd-step label { font-weight: 600; font-size: 15px; cursor: pointer; }
.wd-step .muted { grid-column: 2; font-size: 13px; }
.wd-step input[type=text] { grid-column: 2; padding: 7px 10px; font-size: 14px; margin-top: 4px; }
.wd-sub { font-size: 13px; text-transform: uppercase; letter-spacing: .06em; color: var(--muted); margin: 14px 0 2px; font-weight: 600; }
.wd-tip { background: var(--soft); border-color: transparent; }
.wd-tip p { margin: 0; }
.wd-pop { animation: wdpop .35s ease-out; }
@keyframes wdpop { 0% { transform: scale(.97); } 60% { transform: scale(1.02); } 100% { transform: none; } }
@media (prefers-reduced-motion: reduce) { .wd-meter i { transition: none; } .wd-pop { animation: none; } }
@media (max-width: 370px) { .wd-seg button { font-size: 11px; } }
`;

  // ---------- Mount ----------
  let sec, slot = "top", focus = { acc: null, mu: null }, openLad = new Set();
  function mount() {
    if (sec) return;
    try {
      const st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
      sec = document.createElement("section"); sec.id = "tab-wardrobe"; sec.hidden = true;
      document.querySelector("main").appendChild(sec);
      const nav = document.querySelector("nav.tabs");
      if (nav && !nav.querySelector('[data-tab="wardrobe"]')) {
        const b = document.createElement("button");
        b.setAttribute("role", "tab"); b.dataset.tab = "wardrobe"; b.setAttribute("aria-selected", "false");
        b.innerHTML = "<span>👕</span>Style";
        const pr = nav.querySelector('[data-tab="practice"]');
        pr ? nav.insertBefore(b, pr) : nav.appendChild(b);
      }
      sec.addEventListener("click", onClick);
      sec.addEventListener("change", onChange);
      sec.addEventListener("toggle", (e) => { const d = e.target; if (d.classList && d.classList.contains("wd-lad")) d.open ? openLad.add(d.dataset.id) : openLad.delete(d.dataset.id); }, true);
    } catch (e) { console.error(e); }
  }

  function render() {
    mount();
    if (!sec) return;
    S = load();
    sec.innerHTML = `
      <p class="muted" style="margin-top:0">Dress up, see how it reads, then wear it out one small step at a time. Brisbane is hot most of the year, so legs out is just good sense.</p>
      <div class="card" id="wdStage"></div>
      <div class="card"><h2>Pick your look</h2><div id="wdPicker"></div></div>
      <div class="card"><h2>Save this look</h2>
        <div class="wd-save"><input type="text" id="wdName" maxlength="30" placeholder="Name it, e.g. Valley Saturday" autocomplete="off"><button class="btn" id="wdSaveBtn">Save</button></div>
        <div id="wdGallery"></div>
      </div>
      <div class="card" id="wdReact"></div>
      <div class="card" id="wdDare"></div>
      <div class="card"><h2>Wear it out</h2><p class="muted" style="margin-top:0">Five small steps per piece, ticked off in real life. Go at your own pace; any step counts.</p><div id="wdLadder"></div></div>
      <div class="card wd-tip"><h2>Real talk</h2><p>Most people are thinking about their coffee order, not your shorts. The Valley and West End are about as relaxed as Brisbane gets, and South Bank and James St see every look under the sun. Bring a layer if it helps, trust your gut about a place, and build up one step at a time.</p></div>`;
    renderStage(); renderPicker(); renderGallery(); renderReactions(); renderDare(); renderLadder();
  }

  function renderStage(pop) {
    const el = sec && sec.querySelector("#wdStage"); if (!el) return;
    const o = S.cur, score = scoreOf(o), lv = levelOf(score);
    const ps = parts(o);
    const dot = (c) => (c.v === "rainbow" ? "background:var(--rainbow)" : FLAGS[c.v] ? "background:var(--rainbow)" : c.v === "pastel" ? "background:linear-gradient(90deg,#f7b6d2,#a8e6cf,#c9b6f2)" : `background:${c.v}`);
    el.innerHTML = `<div class="wd-stage">
      <div>${avatarSVG(o, { label: "Your avatar wearing: " + ps.map(phrase).join(", ") })}</div>
      <div class="wd-side">
        <h2 style="margin-bottom:2px">How it reads</h2>
        <div class="wd-level${pop ? " wd-pop" : ""}">${esc(LEVELS[lv].label)}</div>
        <div class="wd-meter" role="meter" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${score}" aria-label="Boldness"><i style="width:${Math.max(4, score)}%"></i></div>
        <div class="wd-ticks">${LEVELS.map((l, i) => `<span aria-current="${i === lv}">${esc(l.label.replace(" 🏳️‍🌈", ""))}</span>`).join("")}</div>
        <p class="wd-score" style="margin:8px 0 0">${esc(LEVELS[lv].line)} <b style="color:var(--ink)">${score}/100</b></p>
        <ul class="wd-wearing">${ps.map((p) => `<li><span class="wd-dot" style="${dot(colourOf(p.it, p.ci))}"></span>${esc(p.it.label)}</li>`).join("")}</ul>
        <button class="btn ghost" data-act="surprise" style="margin-top:10px;font-size:14px;padding:8px 12px">🎲 Surprise me</button>
      </div></div>`;
  }

  function renderPicker() {
    const el = sec && sec.querySelector("#wdPicker"); if (!el) return;
    const o = S.cur;
    const seg = `<div class="wd-seg" role="tablist">${SLOTS.map(([k, l]) => `<button role="tab" data-slot="${k}" aria-selected="${k === slot}">${l}</button>`).join("")}</div>`;
    let body = "";
    const swatches = (list, curI, kind, id) => `<div class="wd-sw">${list.map((c, i) => {
      const bg = c.v === "rainbow" ? "var(--rainbow)" : c.v === "pastel" ? "linear-gradient(135deg,#f7b6d2,#a8e6cf,#c9b6f2)" : FLAGS[c.v] ? `linear-gradient(180deg,${FLAGS[c.v].join(",")})` : c.v;
      return `<button data-sw="${kind}" data-id="${id || ""}" data-i="${i}" aria-pressed="${i === curI}" aria-label="${esc(c.k)}" title="${esc(c.k)}" style="background:${bg}"></button>`;
    }).join("")}</div><div class="wd-swname">${esc((list[curI] || {}).k || "")}</div>`;
    if (slot === "you") {
      body = `<div class="wd-info"><b>Skin tone</b></div>${swatches(SKIN.map((v, i) => ({ k: "tone " + (i + 1), v })), o.skin | 0, "skin")}
        <div class="wd-info"><b>Hair</b></div>${swatches(HAIR.map(([k, v]) => ({ k, v })), o.hair | 0, "hair")}`;
    } else if (MULTI.includes(slot)) {
      const on = o[slot] || {};
      let fa = focus[slot];
      if (!fa || on[fa] == null) fa = focus[slot] = Object.keys(on)[0] || null;
      body = `<p class="muted" style="margin:0 0 8px">${slot === "mu" ? "Makeup is just more ways to play. Pick as many as you like." : "Pick as many as you like."} Tap a ticked one again to take it off.</p><div class="wd-chips">${ITEMS[slot].map((it) => `<button class="wd-chip${it.id === fa ? " wd-focus" : ""}" data-acc="${it.id}" aria-pressed="${on[it.id] != null}">${esc(it.label)}</button>`).join("")}${slot === "mu" ? '<button class="wd-chip" data-act="glam">✨ Soft glam</button>' : ""}</div>`;
      if (fa) {
        const it = BYID[fa];
        body += `<div class="wd-info"><b>${esc(it.label)}</b><span class="muted">${esc(it.d)}</span></div>${swatches(it.colours, on[fa], "acc", it.id)}`;
      }
    } else {
      const curSel = o[slot];
      body = `<div class="wd-chips">${ITEMS[slot].map((it) => `<button class="wd-chip" data-item="${it.id}" aria-pressed="${curSel.id === it.id}">${esc(it.label)}</button>`).join("")}</div>`;
      const it = BYID[curSel.id];
      body += `<div class="wd-info"><b>${esc(it.label)}</b><span class="muted">${esc(it.d)}</span></div>${swatches(it.colours, curSel.c, "slot", it.id)}`;
    }
    el.innerHTML = seg + body;
  }

  const lookLabel = (lk) => `${lk.score}/100 · ${LEVELS[levelOf(lk.score)].label}`;
  function renderGallery() {
    const el = sec && sec.querySelector("#wdGallery"); if (!el) return;
    if (!S.saved.length) { el.innerHTML = '<p class="muted" style="margin:10px 0 0">Your saved looks will show up here. Tap one to wear it again.</p>'; return; }
    el.innerHTML = `<div class="wd-gallery">${S.saved.map((lk) => `<div class="wd-look">
      <button class="wd-wear" data-wear="${esc(lk.id)}" aria-label="Wear ${esc(lk.name)}">${avatarSVG(lk.outfit, { cls: "wd-mini", label: lk.name })}<b>${esc(lk.name)}</b><span>${esc(lookLabel(lk))}</span></button>
      <button class="wd-del" data-del="${esc(lk.id)}" aria-label="Delete ${esc(lk.name)}">×</button></div>`).join("")}</div>`;
  }

  function renderReactions() {
    const el = sec && sec.querySelector("#wdReact"); if (!el) return;
    const rs = S.reactions;
    if (!rs.length) { el.innerHTML = '<h2>Reactions</h2><p class="muted" style="margin:0">Save a look (or wear a piece out) and the group chat will have opinions. Good ones.</p>'; return; }
    const bub = (m) => `<div class="bubble them"><span class="from">${esc(m.from)}</span>${esc(m.text)}</div>`;
    const [latest, ...older] = rs;
    el.innerHTML = `<h2>Reactions</h2><p class="wd-rhead">About “${esc(latest.label)}”</p><div class="wd-thread">${latest.msgs.map(bub).join("")}</div>` +
      (older.length ? `<details style="margin-top:10px"><summary>Earlier</summary>${older.map((b) => `<p class="wd-rhead" style="margin-top:10px">About “${esc(b.label)}”</p><div class="wd-thread">${b.msgs.map(bub).join("")}</div>`).join("")}</details>` : "");
  }

  function renderDare() {
    const el = sec && sec.querySelector("#wdDare"); if (!el) return;
    const done = !!store.get("wardrobe_dares", {})[today];
    el.innerHTML = `<h2>Today's style dare</h2><div class="wd-dare"><p>${esc(fill(dareToday()))}</p>${done ? '<span class="tag done">✓ Done</span>' : '<button class="btn ghost" data-act="dare">Done it</button>'}</div>`;
  }

  function renderLadder() {
    const el = sec && sec.querySelector("#wdLadder"); if (!el) return;
    const wearing = parts(S.cur).map((p) => p.it.id);
    const others = Object.values(BYID).filter((it) => !wearing.includes(it.id));
    const row = (it) => {
      const l = S.ladder[it.id] || { done: {}, notes: {} };
      const n = ladCount(it.id);
      const nextI = STEPS.findIndex((_, i) => !(l.done || {})[i + 1]);
      return `<details class="wd-lad" data-id="${it.id}"${openLad.has(it.id) ? " open" : ""}><summary><span class="wd-n">${esc(it.label)}</span><span class="wd-pips${n === 5 ? " full" : ""}">${STEPS.map((_, i) => `<i class="${(l.done || {})[i + 1] ? "on" : ""}"></i>`).join("")}</span><span class="tag">${n === 5 ? "🏳️‍🌈 Worn out loud" : n + "/5"}</span></summary>
        ${n < 5 && nextI >= 0 ? `<p class="muted" style="margin:0 0 4px">Next up: ${esc(STEPS[nextI].t.toLowerCase())}.</p>` : n === 5 ? '<p class="muted" style="margin:0 0 4px">All five! This one is officially part of you.</p>' : ""}
        ${STEPS.map((s, i) => {
          const k = i + 1, on = !!(l.done || {})[k], cid = `wd-${it.id}-${k}`;
          return `<div class="wd-step"><input type="checkbox" id="${cid}" data-lad="${it.id}" data-step="${k}"${on ? " checked" : ""}><label for="${cid}">${k}. ${esc(s.t)}</label><span class="muted">${esc(on ? "Done " + niceDate(l.done[k]) + ". " + s.line : s.line)}</span><input type="text" maxlength="120" data-note="${it.id}" data-step="${k}" placeholder="How did it feel? (optional)" value="${esc((l.notes || {})[k] || "")}" aria-label="Note for step ${k}"></div>`;
        }).join("")}</details>`;
    };
    el.innerHTML = `<div class="wd-sub" style="margin-top:0">In this look</div>${wearing.map((id) => row(BYID[id])).join("")}
      <details style="margin-top:10px"><summary>Everything else (${others.length})</summary>${others.map(row).join("")}</details>`;
  }

  // ---------- Actions ----------
  function changed(pop) { save(); renderStage(pop); renderPicker(); renderLadder(); }

  function surprise() {
    const r = (a) => Math.floor(Math.random() * a.length);
    const o = S.cur;
    ["top", "bottom", "shoes"].forEach((k) => { const it = ITEMS[k][r(ITEMS[k])]; o[k] = { id: it.id, c: r(it.colours) }; });
    o.acc = {}; o.mu = {};
    shuffle(ITEMS.acc).slice(0, 1 + r([0, 1, 2, 3])).forEach((it) => (o.acc[it.id] = r(it.colours)));
    if (Math.random() < 0.5) shuffle(ITEMS.mu).slice(0, 1 + r([0, 1, 2])).forEach((it) => (o.mu[it.id] = r(it.colours)));
    focus = { acc: null, mu: null };
  }

  function onClick(e) {
    const t = e.target.closest("button"); if (!t || !sec.contains(t)) return;
    try {
      const o = S.cur;
      if (t.dataset.slot) { slot = t.dataset.slot; renderPicker(); return; }
      if (t.dataset.item) {
        const it = BYID[t.dataset.item];
        if (o[it.slot].id !== it.id) o[it.slot] = { id: it.id, c: Math.min(o[it.slot].c | 0, it.colours.length - 1) };
        return changed(true);
      }
      if (t.dataset.acc) {
        const id = t.dataset.acc, m = BYID[id].slot, map = o[m];
        if (map[id] != null && focus[m] === id) { delete map[id]; focus[m] = null; }
        else { if (map[id] == null) map[id] = 0; focus[m] = id; }
        return changed(true);
      }
      if (t.dataset.sw) {
        const i = +t.dataset.i, kind = t.dataset.sw;
        if (kind === "skin") o.skin = i; else if (kind === "hair") o.hair = i;
        else if (kind === "acc") o[BYID[t.dataset.id].slot][t.dataset.id] = i;
        else o[slot].c = i;
        return changed(false);
      }
      if (t.dataset.act === "surprise") { surprise(); return changed(true); }
      if (t.dataset.act === "glam") { o.mu = Object.assign({}, SOFT_GLAM); focus.mu = "gloss"; toast("Soft glam on. Glowing. ✨"); return changed(true); }
      if (t.id === "wdSaveBtn") return saveLook();
      if (t.dataset.wear) {
        const lk = S.saved.find((x) => x.id === t.dataset.wear); if (!lk) return;
        S.cur = Object.assign({ acc: {}, mu: {} }, JSON.parse(JSON.stringify(lk.outfit))); focus = { acc: null, mu: null };
        changed(true);
        toast(`Wearing “${lk.name}”`);
        sec.querySelector("#wdStage").scrollIntoView?.({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        return;
      }
      if (t.dataset.del) {
        const lk = S.saved.find((x) => x.id === t.dataset.del); if (!lk) return;
        if (!confirm(`Delete “${lk.name}”?`)) return;
        S.saved = S.saved.filter((x) => x !== lk); save(); renderGallery(); return;
      }
      if (t.dataset.act === "dare") {
        const d = store.get("wardrobe_dares", {});
        if (!d[today]) { d[today] = true; store.set("wardrobe_dares", d); emit("dare-done", { date: today }); }
        toast(pick(["Dare done. Look at you go! 💛", "Small step, big deal. Nice one.", "Ticked! Brisbane didn't even flinch."]));
        renderDare();
      }
    } catch (err) { console.error(err); }
  }

  function saveLook() {
    const inp = sec.querySelector("#wdName");
    const name = (inp.value || "").trim().slice(0, 30) || `Look ${S.saved.length + 1}`;
    const score = scoreOf(S.cur);
    const id = "o" + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
    S.saved.unshift({ id, name, outfit: JSON.parse(JSON.stringify(S.cur)), score, date: today });
    S.saved = S.saved.slice(0, 24);
    save();
    inp.value = "";
    emit("outfit-saved", { id, score });
    const msgs = addReactions(S.cur, score, name);
    if (msgs && msgs[0]) toast(`${msgs[0].from}: ${msgs[0].text}`, 4200);
    else toast("Saved. Looking good.");
    renderGallery(); renderReactions();
  }

  function onChange(e) {
    const t = e.target;
    try {
      if (t.dataset.lad) {
        const id = t.dataset.lad, k = +t.dataset.step, l = lad(id);
        if (t.checked) {
          l.done[k] = today;
          const first = !l.ever.includes(k);
          if (first) l.ever.push(k);
          save();
          emit("wear-step", { item: id, step: k, first });
          openLad.add(id);
          const count = ladCount(id);
          let msg = count === 5 ? `🏳️‍🌈 All five steps for the ${BYID[id].n}! Worn out loud.` : pick(STEP_TOASTS[k - 1]);
          if (k >= 3 && first) {
            // Reactions to wearing it out: use the current look if this piece is in it, else the latest saved look that has it.
            let o = S.cur;
            if (!parts(o).some((p) => p.it.id === id)) {
              const lk = S.saved.find((x) => parts(x.outfit).some((p) => p.it.id === id));
              o = lk ? lk.outfit : Object.assign(JSON.parse(JSON.stringify(S.cur)), MULTI.includes(BYID[id].slot) ? { [BYID[id].slot]: Object.assign({}, S.cur[BYID[id].slot], { [id]: 0 }) } : { [BYID[id].slot]: { id, c: 0 } });
            }
            const p = parts(o).find((x) => x.it.id === id);
            const msgs = addReactions(o, scoreOf(o), `${BYID[id].label}, step ${k}`, k, p ? phrase(p) : BYID[id].n);
            if (msgs && msgs[0]) msg += `  ${msgs[0].from}: ${msgs[0].text}`;
            renderReactions();
          }
          toast(msg, k >= 3 && first ? 4200 : 2600);
        } else {
          delete l.done[k]; save();
        }
        renderLadder();
      } else if (t.dataset.note) {
        const l = lad(t.dataset.note);
        l.notes[+t.dataset.step] = t.value.trim().slice(0, 120);
        save();
      }
    } catch (err) { console.error(err); }
  }

  // ---------- Public ----------
  API.wardrobe = {
    current() {
      try {
        const lk = load().saved[0];
        if (!lk) return null;
        return {
          name: lk.name, score: lk.score,
          items: parts(lk.outfit).map((p) => ({ slot: p.it.slot === "acc" ? "accessory" : p.it.slot === "mu" ? "makeup" : p.it.slot, id: p.it.id, label: p.it.label, colour: colourOf(p.it, p.ci).k })),
        };
      } catch { return null; }
    },
  };

  mount();
  on("tab", (t) => { if (t === "wardrobe") render(); });
})();
