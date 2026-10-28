# Testing

Run both before every push. Neither needs `npm install`: the validator is plain Node, and the play test uses the Playwright that's pre-installed in the cloud container (`require('playwright')`, `chromium.launch()` with no options).

```bash
node test/validate-content.cjs
```

```bash
node test/play.cjs
```

## Content validator (`test/validate-content.cjs`)
Loads `content.js` with a fake `window` and checks it against [content.md](content.md). Exits 1 on errors and prints warnings separately; aim for 0 of both.
- **Errors:** unique ids; every chapter's route exists and every route has chapters; only known keys (routes may have `fork`, chapters `path`, outfits `masc`/`spark`, replies `masc`); every node has `them` and every reply `you`; message objects have exactly one of `text`/`note`; `gaydar`/`spark` 0–100; well-formed outfits; `if` names an existing chapter and an outcome some branch of it sets; only `{name}`/`{bf}` placeholders; no empty strings; no banned slang or family words.
- **Warnings:** local brands, therapy-speak, narrator punchline patterns, typos and spacing, repeated words, duplicate messages or sibling replies, an `if` pointing at a later chapter.
- Add a key to the validator's lists whenever the schema gains one, or every chapter using it fails.

## Play-through (`test/play.cjs`)
Serves the folder on a random local port and drives the app in headless Chromium at 390px. Any console error, page error or horizontal scroll fails it.
1. **Light mode, reduced motion (no typing delays):** every route, every chapter, every reply path and every outfit, by real clicks. At each ending it checks the number of messages shown (including `if` lines), the stored outcome, the read mark, "Try different replies" and "Next chapter", and unfilled placeholders. For routes with a `fork` it then marks date one as boy clothes and walks the boy-clothes chapters too, checking the route list switched paths.
2. **Dark mode, reduced motion:** one path per chapter (last outfit, last reply), moving on with "Next chapter", then the browser back button twice (back to the route, then the list, without leaving the app). Settings fits at 390px.
3. **Light mode, normal motion:** typing delays, Skip typing and tapping the thread, leaving mid-typing, the double-click guard, the new-message announcement, keyboard focus, Continue, reload (history and scroll) and the Settings name redraw.

It takes about 45 seconds. It uses `window.steadyRouteChapters` (exposed by `index.html`) so it sees the same chapters the route list shows.

## By hand
- Look at a changed screen at 390px in light and dark mode, and with reduced motion on.
- Read new dialogue aloud against [dialogue.md](dialogue.md); the validator can't judge tone.
- Bump `CACHE_NAME` in `sw.js` when any cached file changes.
