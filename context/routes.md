# Routes

Every route's chapters in the order they open, with who it's with and the chapter's base `gaydar` (outfits and branches move it). Read this before adding or moving a chapter; the schema is in [content.md](content.md) and the tone in [dialogue.md](dialogue.md).

## How a route runs
- Chapters open one after another as soon as the previous one is finished. Jess and {bf} are `lock` routes: they open once any other route is finished, and stay open once started.
- Each girl's main route rises in gaydar date by date: date one is low-key, the big chapter (the old `c5`–`c6m` ids) is where she says it or breaks up with him, and `<girl>-end` is her with a straight guy. The barefoot, tickle and ambush chapters sit around the big chapter and bring in her rival.
- **The big chapter's outcome.** Every leaf of the big chapter sets `told`, `broke`, `cried` or `dodged`, and the chapters after it have `if` lines on it (see content.md).
- **Boy-clothes fork.** Ten girls' routes have `fork: "<girl>-1"`. If date one was played in the `masc` outfit ("Boy clothes: …"), `routeChapters()` shows `<girl>-m2` and `<girl>-m3` instead of the rest of the route. `m2` sets `kept` or `slipped`; `m3` reads that with `if` lines and ends `together` (she keeps dating him), `drift` (she moves on, often to her main-route boyfriend, or tells him to date guys) or, for Mia and Georgie, `told`. Replaying date one in another outfit brings the main route back; read chapters stay read.
- Keep this file in step when chapters are added, moved or renamed. To regenerate the tables, list `CONTENT.story` by route with node (see [testing.md](testing.md)).

## Archie
Three years together. She works it out before you do. Rival: Josh. Ends up with: Josh.

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `c1` | Date night | Archie | 10 |
| 2 | `c1b` | The Italian place | Archie | 40 |
| 3 | `archie-shop` | Her work party dress | Archie (in person) | 62 |
| 4 | `archie-feet` | Pool party | Archie (in person) | 65 |
| 5 | `c3` | The other guy | Archie (in person) | 99 |
| 6 | `c4` | Archie and Josh | Archie | 99 |

## Nicole
Your best friend. She knows. You haven't said a word.

`nicole-4` leaves set `told` (he says it to her), `nodded`, `hugo` (he talks to Hugo but never says it to her) or `quiet`; `nicole-5` opens with an `if` line on each. In `nicole-5`, a couple of months later, she does his nails at girls' night and admits she had a thing for him in first year that went completely once he started wearing gloss and doing his nails. He laughs, is mortified, asks when exactly it stopped, or teases back (`laughed`, `mortified`, `when`, `teased`; one `teased` leaf says it outright and sets gaydar 100).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `c2` | One of the girls | Nicole | 75 |
| 2 | `nicole-2` | Sephora | Nicole (in person) | 90 |
| 3 | `nicole-3` | Rate my Hinge | Nicole | 97 |
| 4 | `nicole-4` | Jemima's list | Nicole (in person) | 99 |
| 5 | `nicole-5` | First year | Nicole (in person) | 99 |

## Hannah
Jess's friend. Physio. No time for games. Rival: Dylan. Ends up with: Brodie (electrician).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `hannah-1` | Coffee with Jess's friend | Hannah | 20 |
| 2 | `hannah-2` | Second date | Hannah (in person) | 50 |
| 3 | `hannah-run` | Run club | Hannah (in person) | 58 |
| 4 | `c5` | Two truths | Hannah (in person) | 85 |
| 5 | `hannah-feet` | White carpet | Hannah (in person) | 92 |
| 6 | `hannah-tickle` | Movie night | Hannah (in person) | 94 |
| 7 | `hannah-end` | Hannah and Brodie | Hannah (in person) | 99 |

Boy-clothes path (after `hannah-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `hannah-m2` | Second date, plain shirt | Hannah (in person) | 15 |
| 3 | `hannah-m3` | Her place | Hannah | 20 |

## Mia
Sam's cousin. Shy. Says sorry a lot. Rival: Theo. Ends up with: Lachlan (accountant).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `mia-1` | Dumplings | Mia | 15 |
| 2 | `mia-2` | Eat Street | Mia (in person) | 45 |
| 3 | `mia-dress` | Help with a dress | Mia | 55 |
| 4 | `mia-movie` | Scary movie | Mia (in person, alone) | 60 |
| 5 | `mia-feet` | Socks off | Mia (in person) | 65 |
| 6 | `mia-barefoot` | No shoes home | Mia (in person) | 72 |
| 7 | `c6` | Hole in one | Mia (in person) | 85 |
| 8 | `mia-end` | Mia and Lachlan | Mia | 99 |

Boy-clothes path (after `mia-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `mia-m2` | Eat Street, hoodie on | Mia (in person) | 15 |
| 3 | `mia-m3` | Mochi's vet | Mia | 20 |

## Ella
Hinge. Primary teacher. A very sharp cat-eye. Rival: Hayden. Ends up with: Connor (rugby).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `ella-1` | Matched | Ella | 20 |
| 2 | `ella-2` | GOMA | Ella (in person) | 50 |
| 3 | `ella-wedding` | Plus one | Ella | 58 |
| 4 | `c6b` | Ladies | Ella (in person) | 90 |
| 5 | `ella-beach` | Kings Beach | Ella (in person) | 93 |
| 6 | `ella-barefoot` | The drive home | Ella (in person) | 94 |
| 7 | `ella-tickle` | The surf club (sunscreen) | Ella (in person) | 95 |
| 8 | `ella-end` | Ella and Connor | Ella | 99 |

Boy-clothes path (after `ella-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `ella-m2` | GOMA, no gel | Ella (in person) | 15 |
| 3 | `ella-m3` | Her sister's engagement | Ella (in person) | 20 |

## Tayla
Netball. Loud. Her friend Steph has questions. Rival: Jordan. Ends up with: Mitch (football).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `tayla-1` | Felons | Tayla | 20 |
| 2 | `tayla-2` | Courtside | Tayla (in person) | 55 |
| 3 | `tayla-board` | Bec's 30th plans | Tayla | 60 |
| 4 | `c6c` | The slideshow | Tayla (in person) | 90 |
| 5 | `tayla-feet` | Pool day | Tayla (in person) | 93 |
| 6 | `tayla-ambush` | After training | Tayla (in person) | 95 |
| 7 | `tayla-end` | Tayla and Mitch | Tayla (in person) | 99 |

Boy-clothes path (after `tayla-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `tayla-m2` | Game day, cap on | Tayla (in person) | 15 |
| 3 | `tayla-m3` | Bec's 30th | Tayla (in person) | 20 |

## Georgie
Climbing gym. Hates games. Counts everything. Rival: Corey. Ends up with: Ben (rope access).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `georgie-1` | Belay partner | Georgie | 20 |
| 2 | `georgie-2` | Tacos | Georgie (in person) | 55 |
| 3 | `georgie-shoes` | New climbing shoes | Georgie (in person) | 60 |
| 4 | `c6d` | The list | Georgie (in person) | 95 |
| 5 | `georgie-feet` | Climbing shoes | Georgie (in person) | 96 |
| 6 | `georgie-tickle` | The crash mats | Georgie (in person) | 97 |
| 7 | `georgie-end` | Georgie and Ben | Georgie (in person) | 99 |

Boy-clothes path (after `georgie-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `georgie-m2` | Tacos, bare nails | Georgie (in person) | 10 |
| 3 | `georgie-m3` | Mount Barney | Georgie (in person) | 15 |

## Lucy
Nurse. Her friends keep asking her about you. Rival: Fraser. Ends up with: Hamish (ag consultant).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `lucy-1` | Date one | Lucy | 15 |
| 2 | `lucy-2` | Paddington markets | Lucy (in person) | 40 |
| 3 | `lucy-3am` | 3am | Lucy | 50 |
| 4 | `lucy-reflex` | Reflexes | Lucy (in person, alone) | 58 |
| 5 | `c6e` | The evidence | Lucy (in person) | 90 |
| 6 | `lucy-feet` | Low tables | Lucy (in person) | 92 |
| 7 | `lucy-tickle` | After night shift | Lucy (in person) | 94 |
| 8 | `lucy-end` | Lucy and Hamish | Lucy (in person) | 99 |

Boy-clothes path (after `lucy-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `lucy-m2` | Markets, no polish | Lucy (in person) | 15 |
| 3 | `lucy-m3` | After the night shift | Lucy | 20 |

## Jade
Hinge. Picnics. Notices feet. Rival: Sean. Ends up with: Riley (plumber).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `jade-1` | Howard Smith Wharves | Jade | 15 |
| 2 | `jade-2` | Second picnic | Jade (in person) | 45 |
| 3 | `jade-pedi` | Pedicure date | Jade (in person) | 62 |
| 4 | `jade-couch` | Lowkey checking | Jade (in person, alone) | 66 |
| 5 | `jade-feet` | Hot tub | Jade (in person) | 70 |
| 6 | `jade-barefoot` | One slide | Jade (in person) | 74 |
| 7 | `c6f` | Feet in a row | Jade (in person) | 92 |
| 8 | `jade-end` | Jade and Riley | Jade (in person) | 99 |

Boy-clothes path (after `jade-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `jade-m2` | Picnic, toes bare | Jade (in person) | 15 |
| 3 | `jade-m3` | Mel's birthday, slides on | Jade (in person) | 20 |

## Olivia
Bumble. Tells her sister everything. Rival: Marcus. Ends up with: James (finance).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `olivia-1` | Coffee in Bulimba | Olivia | 15 |
| 2 | `olivia-2` | Cocktails on James St | Olivia (in person) | 45 |
| 3 | `olivia-facetime` | Her sister on FaceTime | Olivia | 55 |
| 4 | `olivia-paint` | For the photos | Olivia (in person, alone) | 64 |
| 5 | `olivia-feet` | Boat day | Olivia (in person) | 70 |
| 6 | `olivia-barefoot` | Dinner after the boat | Olivia (in person) | 76 |
| 7 | `c6g` | The next table | Olivia (in person) | 90 |
| 8 | `olivia-end` | Olivia and James | Olivia (in person) | 99 |

Boy-clothes path (after `olivia-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `olivia-m2` | James St, no mascara | Olivia (in person) | 15 |
| 3 | `olivia-m3` | Meeting her sister | Olivia (in person) | 20 |

## Zoe
Trivia team. Her friend Brooke is a lot. Rival: Tyler. Ends up with: Kyle (mechanic).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `zoe-1` | Trivia | Zoe | 20 |
| 2 | `zoe-2` | Her wardrobe | Zoe (in person) | 55 |
| 3 | `zoe-quiz` | Trivia night | Zoe (in person) | 60 |
| 4 | `zoe-lightning` | Lightning round | Zoe (in person, alone) | 63 |
| 5 | `zoe-feet` | Trivia at Brooke's | Zoe (in person) | 75 |
| 6 | `zoe-ambush` | Tash's picnic | Zoe (in person) | 78 |
| 7 | `c6h` | Brooke asks | Zoe (in person) | 97 |
| 8 | `zoe-end` | Zoe and Kyle | Zoe (in person) | 99 |

Boy-clothes path (after `zoe-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `zoe-m2` | Wardrobe crisis | Zoe (in person) | 15 |
| 3 | `zoe-m3` | Brooke's barbecue | Zoe (in person) | 20 |

## Sophie
Paralegal. Dry. Her friend Kirra films everything. Rival: Ethan. Ends up with: Nathan (physio).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `sophie-1` | Riverside | Sophie | 15 |
| 2 | `sophie-2` | Movie night | Sophie (in person) | 50 |
| 3 | `sophie-kirra` | Kirra gets the phone | Sophie | 55 |
| 4 | `sophie-file` | Cross-examination | Sophie (in person, alone) | 64 |
| 5 | `sophie-feet` | Game night | Sophie (in person) | 76 |
| 6 | `sophie-ambush` | The rematch | Sophie (in person) | 79 |
| 7 | `c6i` | On Kirra's TV | Sophie (in person) | 98 |
| 8 | `sophie-end` | Sophie and Nathan | Sophie (in person) | 99 |

Boy-clothes path (after `sophie-1` in boy clothes, replaces the rest of the route):

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 2 | `sophie-m2` | Movie night, nails bare | Sophie (in person) | 15 |
| 3 | `sophie-m3` | Kirra's game night | Sophie (in person) | 20 |

## Bianca
Hypes you up. A bit gayer every date. Rival: Jake. Ends up with: Liam (carpenter).

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `c6j` | Rooftop | Bianca | 25 |
| 2 | `c6k` | Gelato | Bianca (in person) | 60 |
| 3 | `bianca-sephora` | Shopping with Bianca | Bianca (in person) | 70 |
| 4 | `c6l` | Getting ready at hers | Bianca (in person) | 85 |
| 5 | `c6m` | Bianca's girls 💅 | Bianca's girls 💅 | 95 |
| 6 | `bianca-feet` | Pedi night | Bianca (in person) | 97 |
| 7 | `bianca-ambush` | The new boots | Bianca (in person) | 98 |
| 8 | `bianca-end` | Bianca and Liam | Bianca (in person) | 100 |

## Jess (locked)
What everyone's been saying about you.

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `c7` | The group chat | Jess |  |
| 2 | `jess-2` | Drinks Friday | Jess (in person) |  |

## {bf} (locked)
From the first message to six months.

| # | id | Title | With | Gaydar |
|---|---|---|---|---|
| 1 | `s1` | Hey there | {bf} |  |
| 2 | `s2` | After the first date | {bf} |  |
| 3 | `s3` | Good morning | {bf} |  |
| 4 | `s4` | So... are we? | {bf} |  |
| 5 | `s5` | Meeting your friends | {bf} |  |
| 6 | `s6` | Holding hands | {bf} |  |
| 7 | `s6b` | Summer feet | {bf} |  |
| 8 | `s7b` | Lazy Sunday | {bf} |  |
| 9 | `s8` | A wobble | {bf} |  |
| 10 | `s9` | Three words | {bf} |  |
| 11 | `s10` | Six months | {bf} |  |
