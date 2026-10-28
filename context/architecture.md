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
`name`, `bf`, `theme`, `story` (`{chapterId: firstFinishedDate}`), `outcomes` (`{chapterId: outcome}` from the latest play-through, read by `if` messages), `last` (route id of the last chapter opened, for Continue), `masc` (`{chapterId: true|false}`: whether the latest play-through was boy clothes, from a `masc` outfit or reply; a route's `fork` chapter decides which path `routeChapters()` shows). Older versions also stored `journal`, `done`, `said`, `wardrobe*` and `game*`; they're left alone and still go in exports.

## Conversation engine
`runConversation(view, convo, header)` plays a node tree: an optional outfit pick, `them` messages (with a typing delay), then reply buttons. Messages with `if` are skipped unless an earlier chapter's stored outcome matches. A node with no replies ends the chapter: it calls `markDone` and `setOutcome`, shows `after` (the branch's own, or the chapter's), the gaydar bars, `debrief`, then "Try different replies" and "Next chapter".
- Each run gets a `Symbol` in `view._run`; every await checks it, so leaving (or re-running) mid-typing stops the old run. Buttons are made with `button()`, which ignores clicks once the button is off screen or its run is stale, so a double click can't play a branch twice. Reply buttons have class `reply`, outfit picks `fit`.
- Typing delays: `wait()` per run. "Skip typing" (in the choices area while she types) or a tap on the thread makes the rest of that turn arrive at once. `prefers-reduced-motion` skips delays entirely (the test relies on this).
- The thread is `role="log" aria-live="polite"`; the typing indicator is `aria-hidden`. New bubbles scroll into view only if he was already near the bottom (`nearBottom()`), so scrolling up to reread isn't interrupted; the ending scrolls to its first line.
- Focus follows new buttons only when he's using a keyboard (`usingKeys`, set by keydown and cleared by pointerdown), via `focusIn()`.

## Story unlocks
Story shows routes (`CONTENT.routes`), then a route's chapters. A chapter opens once the previous chapter in its route is finished (no daily wait); `lock` routes open once any other route is finished. A finished chapter shows a "Next chapter" button for the next one in the same route. The Story list shows `read/total` per route and, at the top, a **Continue** card for the first unread open chapter in the route last played (`continueAt()`). Closing Settings redraws the list or route on screen (`showing`) so name changes show straight away.

## Back
Opening a route or chapter pushes one history entry, so the phone's back button steps up a level instead of leaving. Going back scrolls to the route or chapter you came from. On load, if the top history entry is a stale `steadySub` one (a reload mid-chapter), the app steps off it so the first back press isn't dead, and `history.scrollRestoration` is `manual` because each view sets its own scroll.

## Privacy
Nothing leaves the device. Settings has export, import and erase (all `st_` keys). **Hide** shows a grocery-list cover, and a double tap (detected manually, since iOS doesn't reliably fire `dblclick`) dismisses it.

## Testing
See [testing.md](testing.md).
