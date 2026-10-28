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
- `today`: Brisbane ISO date.
- `fill(text)`: replaces `{name}` (default "Calum") and `{bf}` (default "Matt").

## Storage keys (all prefixed `st_`)
`name`, `bf`, `theme`, `story` (`{chapterId: firstFinishedDate}`), `outcomes` (`{chapterId: outcome}` from the latest play-through, read by `if` messages). Older versions also stored `journal`, `done`, `said`, `wardrobe*` and `game*`; they're left alone and still go in exports.

## Conversation engine
`runConversation(view, convo, header)` plays a node tree: an optional outfit pick, `them` messages (with a typing delay), then reply buttons. Messages with `if` are skipped unless an earlier chapter's stored outcome matches. A node with no replies ends the chapter: it calls `markDone` and `setOutcome`, shows `after` (the branch's own, or the chapter's), the gaydar bars, `debrief`, then "Try different replies" and "Next chapter".

## Story unlocks
Story shows routes (`CONTENT.routes`), then a route's chapters. A chapter opens once the previous chapter in its route is finished (no daily wait); `lock` routes open once any other route is finished. A finished chapter shows a "Next chapter" button for the next one in the same route.

## Back
Opening a route or chapter pushes one history entry, so the phone's back button steps up a level instead of leaving.

## Privacy
Nothing leaves the device. Settings has export, import and erase (all `st_` keys). **Hide** shows a grocery-list cover, and a double tap (detected manually, since iOS doesn't reliably fire `dblclick`) dismisses it.
