# Architecture

## Files
| File | What it does |
|---|---|
| `index.html` | Shell, CSS tokens, Story, Settings, Hide cover, conversation engine |
| `content.js` | `window.CONTENT`: `routes` and `story` (see content.md) |
| `sw.js` | Service worker: network-first, cache fallback |
| `manifest.webmanifest`, `icon.svg` | Install metadata. Deliberately neutral name ("Steady") and icon |

Load order: `content.js`, then the inline app script.

## Helpers (inside index.html)
- `store.get(key, default)` / `store.set(key, value)`: JSON values, saved as `st_<key>`.
- `bneDate()`: Brisbane ISO date (called each time, so a tab left open overnight stamps the right day).
- `fill(text)`: replaces `{name}` (default "Calum") and `{bf}` (default "Matt").

## Storage keys (all prefixed `st_`)
`name`, `bf`, `theme`, `quick` (bool, quick-reply timer, default off), `buzz` (bool, vibrate, default on), `reacts` (`{chapterId: {rawMessageText: emoji}}`, his reactions on her bubbles), `story` (`{chapterId: firstFinishedDate}`), `outcomes` (`{chapterId: outcome}` from the latest play-through, read by `if` messages), `last` (route id of the last chapter opened, for Continue), `found` (`{chapterId: {e: ["0.1", ...], o: [outfitIndex, ...]}}`: endings reached, as reply-index paths, and outfits worn, for the "x of y endings found" line and the route list), `masc` (`{chapterId: true|false}`: whether the latest play-through was boy clothes, from a `masc` outfit or reply; a route's `fork` chapter decides which path `routeChapters()` shows). Older versions also stored `journal`, `done`, `said`, `wardrobe*` and `game*`; they're left alone and still go in exports.

## Conversation engine
`runConversation(view, convo, header)` plays a node tree: an optional outfit pick, `them` messages (with a typing delay), then reply buttons. Messages with `if` are skipped unless an earlier chapter's stored outcome matches. A node with no replies ends the chapter: it calls `markDone` and `setOutcome`, shows `after` (the branch's own, or the chapter's), her `thinks` card (the outfit's line, then the deepest branch's or the chapter's), the gaydar bars, `debrief`, then the endings/outfits-found line (`addFound`, `chapterFound`; "New ending." when it's a first), then "Change last reply", "Try different replies" and "Next chapter".
- "Change last reply" re-runs with the same outfit and `replay` (the reply-index path minus its last step): those replies are taken again with no typing delay or bubble animation (`instant`, `.thread.instant`), and he lands on the last choice, scrolled to the buttons.
- Each run gets a `Symbol` in `view._run`; every await checks it, so leaving (or re-running) mid-typing stops the old run. Buttons are made with `button()`, which ignores clicks once the button is off screen or its run is stale, so a double click can't play a branch twice. Reply buttons have class `reply`, outfit picks `fit`.
- Typing delays: `wait()` per run. "Skip typing" (in the choices area while she types) or a tap on the thread makes the rest of that turn arrive at once. `prefers-reduced-motion` skips delays entirely (the test relies on this).
- The thread is `role="log" aria-live="polite"`; the typing indicator is `aria-hidden`. New bubbles scroll into view only if he was already near the bottom (`nearBottom()`), so scrolling up to reread isn't interrupted; the ending scrolls to its first line.
- Focus follows new buttons only when he's using a keyboard (`usingKeys`, set by keydown and cleared by pointerdown), via `focusIn()`.

## Chat interactions (inside `runConversation`)
- **Reactions:** a tap on one of her bubbles (`.bubble.them`) opens `.reactbar`, a fixed-position `role="toolbar"` of six emoji appended to `body` (not inside the live-region thread), placed above the bubble or below it near the header and clamped to the screen. While she's typing a tap still skips typing instead; a touch long-press (450ms) or `contextmenu` opens it either way. Keyboard: her newest bubble has `tabindex=0` (roving; ArrowUp/Down move between her bubbles), Enter or Space opens the bar, arrows move along it, Escape closes and refocuses the bubble. Picking saves to `st_reacts` (keyed by the chapter id and the message's raw, unfilled text, so a replay restores it via `drawReact`) and draws a `.react` badge (`role="img"`, labelled). Picking the same emoji removes it. `closeReact()` runs on every new run, on the list and route views, on Hide, on scroll, resize and an outside pointerdown.
- **Receipts:** in text chapters (not `irl`), choosing a reply adds a `.receipt` (aria-hidden) under your bubble: "Delivered", then "Seen" 500ms later (that wait is a `wait()`, so Skip typing and reduced motion skip it) just before she types. A reply with no answer ends on "Seen" (left on read). Instant replays show "Seen" straight away.
- **Quick replies:** with `st_quick` on, each set of reply buttons gets a `.qtimer` bar (`role="timer"`) of 8–20s (5s + 0.06s per character of reply text). A 100ms interval counts down only while the page is visible and Settings, Hide and the reaction bar are closed; it stops when a reply is chosen or the run goes stale. At zero it picks a random reply, marked "Picked for you" on the receipt (shown in person too, and not aria-hidden). Reduced motion steps the bar once a second. Not used during an instant replay.
- **Haptics:** `buzz(pattern)` calls `navigator.vibrate` in try/catch on a reply (10ms), a reaction (15ms) and an auto-pick; never with `prefers-reduced-motion` or with `st_buzz` false.
- The test relies on: your bubble being added synchronously on click (the double-click check), no `.typing` or extra buttons in `.choices` from these features, and none of them adding `.bubble` elements.

## Story unlocks
Story shows routes (`CONTENT.routes`), then a route's chapters. A chapter opens once the previous chapter in its route is finished (no daily wait); `lock` routes open once any other route is finished. A finished chapter shows a "Next chapter" button for the next one in the same route. The Story list shows `read/total` per route and, at the top, a **Continue** card for the first unread open chapter in the route last played (`continueAt()`). Closing Settings redraws the list or route on screen (`showing`) so name changes show straight away.

## Back
Opening a route or chapter pushes one history entry, so the phone's back button steps up a level instead of leaving. Going back scrolls to the route or chapter you came from. On load, if the top history entry is a stale `steadySub` one (a reload mid-chapter), the app steps off it so the first back press isn't dead, and `history.scrollRestoration` is `manual` because each view sets its own scroll.

## Privacy
Nothing leaves the device. Settings has export, import and erase (all `st_` keys). **Hide** shows a grocery-list cover, and a double tap (detected manually, since iOS doesn't reliably fire `dblclick`) dismisses it.

## Testing
See [testing.md](testing.md).

## Tabs and Confirmations
Under the header, a Story / Confirmations tab row (`showTab()`, remembered as `st_tab`). Confirmations fills `#confBox` with lines from `CONTENT.confirmations` (`{name}` filled): `confSpawn()` adds one every ~0.5 to 1.2s, at a random spot that doesn't overlap anything showing (it skips a turn when the box is too crowded), never the same line twice on screen, up to seven at once. Each fades in, stays 2.6 to 5.2s and fades out (no fade with reduced motion). It only runs while the tab is showing, the page is visible and Hide is off.
