# Architecture

## Files
| File | What it does |
|---|---|
| `index.html` | Shell, CSS tokens, tabs, Today, Messages, Story, Practice, Settings, Hide cover, conversation engine, `SteadyAPI` |
| `content.js` | `window.CONTENT`: affirmations, prompts, chats, story, practice (see content.md) |
| `wardrobe.js` | Style tab module |
| `game.js` | XP and progress module |
| `sw.js` | Service worker: network-first, cache fallback |
| `manifest.webmanifest`, `icon.svg` | Install metadata. Deliberately neutral name ("Steady") and icon |

Load order: `content.js`, then the inline app script, then `wardrobe.js`, then `game.js`. Modules run after `SteadyAPI` exists, so they init immediately (the `ready` event fires before they load).

## SteadyAPI
`window.SteadyAPI = { store, today, day, ordinal, bneDate, fill, name, esc, on, emit, toast, showTab, $ }`
- `store.get(key, default)` / `store.set(key, value)`: JSON values, saved as `st_<key>`.
- `today`: Brisbane ISO date. `day`: integer day ordinal used for daily rotation.
- `fill(text)`: replaces `{name}` (default "Calum") and `{bf}` (default "Matt").
- `toast(msg)`: short message above the tab bar.
- `showTab(name)`: shows `<section id="tab-<name>">`. Tab clicks are delegated, so modules can add `nav.tabs` buttons.

Modules add their own tab section and nav button, inject their own `<style>` (class prefixes `wd-` and `gm-`), and may append to `#settingsExtra`.

## Events
| Event | Payload | Emitted by |
|---|---|---|
| `ready` | none | index.html, at startup |
| `tab` | tab name | index.html, on every tab change |
| `mood-set` | `{date, mood}` | Today |
| `journal-saved` | `{date, text}` | Today. Fires on every debounced save, so dedupe |
| `chat-done` / `story-done` / `practice-done` | `{id, first}` | conversation engine at the end of a conversation |
| `practice-written` | `{id, text}` | Practice, when he types his own reply |
| `outfit-saved` | `{id, score}` | wardrobe.js |
| `wear-step` | `{item, step, first}` | wardrobe.js |
| `outfit-reaction` | `{from, text}` | wardrobe.js |
| `dare-done` | `{date}` | wardrobe.js |
| `level-up` / `achievement` | `{level}` / `{id}` | game.js |

`SteadyAPI.game.level()` (from game.js, 1-based) drives the voice tiers in Messages. Without game.js the tier is 0.

`SteadyAPI.wardrobe.current()` (from wardrobe.js) returns the last saved outfit or null. Guard it, since the module may not have loaded.

## Storage keys (all prefixed `st_`)
`name`, `bf`, `theme`, `journal` (`{date: {prompt, text, mood}}`), `done` (`{chat:[], practice:[], story:[]}`), `story` (`{chapterId: firstFinishedDate}`), `said` (written practice lines), `wardrobe*`, `game*`.

## Conversation engine
`runConversation(view, convo, kind, header)` plays a node tree: `them` messages (with a typing delay), then reply buttons. In Practice there's also a write-your-own box, which follows the branch sharing the most words with what he typed. A node with no replies ends the conversation: it calls `markDone`, shows `after` (the branch's own, or the conversation's), then `debrief`, then "Try different replies".

## Story unlocks
Chapter n opens once chapter n-1 was first finished on an earlier Brisbane day (one chapter per day).

## Privacy
Nothing leaves the device. Settings has export, import and erase (all `st_` keys). **Hide** shows a grocery-list cover, and a double tap (detected manually, since iOS doesn't reliably fire `dblclick`) dismisses it.
