// All app content. {name} is replaced with the name set in Settings (or "Calum"),
// {bf} with the boyfriend's name from Settings (or "Matt").
// Conversation nodes: { them: [messages], replies: [{ you, ...node }], debrief }.
// A message is a string, { from, text } in group chats, or { note } for narration.
// Every reply is a fine reply - there is no wrong answer anywhere in here.

window.CONTENT = {
  // Confirmations tab: short lines that fade in and out around the screen. {name} works.
  confirmations: [
    "You are GAY",
    "You are GAY, {name}",
    "Everyone knows you are gay",
    "{name} is gay",
    "Gay. Obviously.",
    "You like guys",
    "You like guys. Say it.",
    "Nobody thinks you're straight",
    "Not one girl believed you",
    "The girls all know",
    "Hannah knew from the polish",
    "Archie knew before you did",
    "Nicole's known for years",
    "The waiter knew",
    "Hayden knew too",
    "Coral toes. Gay.",
    "The lashes said it first",
    "You were never straight",
    "It's not a phase, {name}",
    "Gaydar: 100%",
    "Called it",
    "You're the gay friend now",
    "One of the girls",
    "Totally, completely gay",
    "Gay and that's that",
    "We all know, {name}",
    "You are so gay",
    "Still gay. Always gay.",
    "Girls don't do it for you",
    "Say it: I'm gay",
    "Stop pretending, babe",
    "{name}. Gay.",
    "GAY. G-A-Y.",
    "Everyone at the surf club knows",
    "Brooke knew at trivia",
    "Kirra has the video",
    "Out loud: I'm gay",
    "Completely gay, {name}",
    "You blush for boys",
    "Your boyfriend's out there",
    "Gay, and it suits you",
    "100% gay",
    "You want guys. In bed too.",
    "Guys turn you on. That's it.",
    "Wanting cock is just gay, {name}",
    "You'd go down on him. So what.",
    "Thinking about sucking cock is normal",
    "Nothing wrong with what you want in bed",
    "Top, bottom, whatever. It's yours.",
    "Liking a guy taking charge is allowed",
    "You get to say what you're into",
    "Fancying men isn't dirty",
    "Your sex life's not a secret to keep",
    "Hot guy at the gym. You looked. Fine.",
  ],
  // Story routes: pick who to date. Each girl's route takes it slowly and ends with her
  // leaving for a straight guy. Chapters in a route open one after another; `lock` routes
  // open once any other route is finished. A chapter's contact defaults to {bf}.
  routes: [
    {"id": "archie", "name": "Archie", "blurb": "Three years together. She works it out before you do.", "part": "Part 1: Before"},
    {"id": "nicole", "name": "Nicole", "blurb": "Your best friend. She knows. You haven't said a word.", "part": "Part 1: Before"},
    {"id": "hannah", fork: "hannah-1", "name": "Hannah", "blurb": "Jess's friend. Physio. No time for games.", "part": "Part 1: Before"},
    {"id": "mia", fork: "mia-1", "name": "Mia", "blurb": "Sam's cousin. Shy. Says sorry a lot.", "part": "Part 1: Before"},
    {"id": "ella", fork: "ella-1", "name": "Ella", "blurb": "Hinge. Primary teacher. A very sharp cat-eye.", "part": "Part 1: Before"},
    {"id": "tayla", fork: "tayla-1", "name": "Tayla", "blurb": "Netball. Loud. Her friend Steph has questions.", "part": "Part 1: Before"},
    {"id": "georgie", fork: "georgie-1", "name": "Georgie", "blurb": "Climbing gym. Hates games. Counts everything.", "part": "Part 1: Before"},
    {"id": "lucy", fork: "lucy-1", "name": "Lucy", "blurb": "Nurse. Her friends keep asking her about you.", "part": "Part 1: Before"},
    {"id": "jade", fork: "jade-1", "name": "Jade", "blurb": "Hinge. Picnics. Notices feet.", "part": "Part 1: Before"},
    {"id": "olivia", fork: "olivia-1", "name": "Olivia", "blurb": "Bumble. Tells her sister everything.", "part": "Part 1: Before"},
    {"id": "zoe", fork: "zoe-1", "name": "Zoe", "blurb": "Trivia team. Her friend Brooke is a lot.", "part": "Part 1: Before"},
    {"id": "sophie", fork: "sophie-1", "name": "Sophie", "blurb": "Paralegal. Dry. Her friend Kirra films everything.", "part": "Part 1: Before"},
    {"id": "bianca", "name": "Bianca", "blurb": "Hypes you up. A bit gayer every date.", "part": "Part 1: Before"},
    {"id": "jess", "name": "Jess", "blurb": "What everyone's been saying about you.", "part": "Part 1: Before", "lock": true},
    {"id": "bf", "name": "{bf}", "blurb": "From the first message to six months.", "part": "Part 2: {bf}", "lock": true}
  ],

  story: [
    {
      id: "c1", route: "archie", gaydar: 10, gaydarSays: "He's just sensitive. Right? ...Right?", title: "Date night", contact: "Archie",
      intro: "You and Archie have been together three years. Her sister has started a Pinterest board for your wedding and keeps sending Archie links from it.",
      them: ["{name}, dinner at that Italian place on Friday? I booked us a table 🍝", "My sister keeps asking when we're getting engaged 😂", "she asked me at lunch today in front of everyone at the cafe. i nearly died"],
      replies: [
        { you: "Sounds good! Haha tell her to relax.",
          them: ["already did. she never listens 🙄", "shes also decided youre wearing the navy suit to hers so good luck", "love you x"],
          replies: [
            { you: "Love you too x",
              them: ["😘", "oh and wear something nice friday", "not the rugby polo pls"],
              replies: [
                { you: "I was thinking of trying something a bit different actually.", gaydar: 15, them: ["ooh different how", "like a nice shirt? you've still got that cream one with the tags on"] },
                { you: "The polo and I have been through a lot together.", them: ["{name} 😐", "it has a hole under the arm", "ive seen it. everyone's seen it"] }
              ] },
            { you: "Do we have to talk about weddings?",
              them: ["haha ok calm down its my sister's wedding", "...unless you're trying to tell me something lol", "you're not are you"],
              replies: [
                { you: "No, no. Just a long day.", them: ["ok", "you've had a lot of those lately", "anyway friday. i need wine x"] },
                { you: "Weddings just make me itchy. All those speeches.", them: ["you cried at the last one", "at the speech about the dog", "lol anyway friday x"] },
                { you: "I don't know.", gaydar: 20, them: ["you don't know what?", "{name}?", "ok youre being weird. we'll talk friday"] }
              ] }
          ] },
        { you: "Ha. Yeah. Friday's good.",
          them: ["you ok? you've been a bit off lately", "like quiet. idk", "anyway im here if somethings up x"],
          replies: [
            { you: "Just tired. Work stuff.",
              them: ["ok", "you keep saying that", "im not having a go. get some sleep xx"] },
            { you: "Can I ask you something weird?",
              them: ["yeah?", "if its about the wedding i promise im not expecting a ring lol"],
              replies: [
                { you: "Do you ever feel like you're playing a part?", gaydar: 20,
                  them: ["at work? all the time", "wait like with us?", "no. do you??"],
                  replies: [
                    { you: "Sometimes.", them: ["oh", "ok thats kind of a big thing to say over text {name}", "can we talk friday. properly", "love you"] },
                    { you: "No. Forget it. I'm being dramatic.", them: ["ok weirdo", "friday x"] }
                  ] },
                { you: "Never mind. It's nothing.", them: ["its never nothing with you", "but ok x"] }
              ] }
          ] },
        { you: "Can we go somewhere else this time?",
          them: ["why?? you love that place", "you said the tiramisu changed your life"],
          replies: [
            { you: "The waiter there keeps staring at me.", gaydar: 15, them: ["the tall one? lol hes probably just bored", "or he thinks youre cute 😂", "we're going. i already booked"] },
            { you: "Fine. But I'm getting my own tiramisu. I'm not sharing again.", them: ["you ate most of mine last time", "7pm. love you x"] }
          ] }
      ],
      after: "On Friday you open your wardrobe and look at the cream shirt with the tags still on. The lilac nail polish you bought \"for a friend\" is in the drawer under it.",
      debrief: "Feeling a bit distant from your own relationship is really common before people come out. It doesn't make you a bad boyfriend."
    },
    {
      "id": "c1b",
      "route": "archie",
      "gaydar": 40,
      "gaydarSays": "Since when does my boyfriend own lip gloss??",
      "title": "The Italian place",
      "contact": "Archie",
      "intro": "Friday. You wore clear gloss, a bit of mascara, the cream silky shirt that's been in your wardrobe with the tags on, and your nails painted lilac. Archie looked at you for a second too long when you picked her up and didn't say anything all the way there.",
      "outfits": [
        {
          "label": "A plain shirt, but clear gloss and lilac nails",
          "thinks": "plain shirt like that fixes it. lilac nails in the bread basket all night",
          "gaydar": -10,
          "intro": "Friday. You kept it simple: a plain white shirt and your good jeans. But you put on clear gloss and painted your nails lilac, and you didn't take either off. Archie noticed in the car. She didn't say anything all the way there.",
          "them": [
            "i kept looking at your nails instead of your face",
            "and i didnt want to hold your hand on the way out. i dont know why. i just didnt"
          ]
        },
        {
          "label": "The cream silky shirt, gloss, mascara and lilac nails",
          "thinks": "Silky shirt, tags finally off, and he looked so pretty. I sat through the whole main thinking my boyfriend is gay and I still have to go home and act like I didn't notice",
          "them": [
            "the shirt was nice. it was really nice. it just looked nicer on you than anything i own and i sat there in my jeans feeling like the boyfriend"
          ]
        },
        {
          "label": "Silky shirt, gloss, mascara, lilac nails and gold hoops",
          "thinks": "gold hoops. since when are his ears even done. whatever, i'm not asking",
          "gaydar": 5,
          "intro": "Friday. Clear gloss, a bit of mascara, the cream silky shirt that's had the tags on for months, lilac nails, and the little gold hoops you bought online and hid in your sock drawer. Archie looked at the hoops for a long time at the first red light. She didn't say anything all the way there.",
          "them": [
            "and EARRINGS??",
            "you were prettier than me tonight. the waiter looked at you first. i hated that"
          ]
        }
      ],
      "thinks": [
        "the waiter said ladies and he just smiled at him. didn't even blink. how many times has that happened when i wasn't there",
        "His gloss was neater than mine and you don't get that good in a week. Three years. I've been sleeping with a gay guy for three years and telling everyone we're fine",
        "said i was tired at the car so he wouldn't try anything. he wasn't going to try anything. he hasn't tried in months, i just like pretending it's me saying no"
      ],
      "them": [
        "home",
        "what was that tonight",
        "the lip gloss {name}. and your nails"
      ],
      "replies": [
        {
          "you": "What do you mean?",
          "them": [
            "dont do that",
            "you know exactly what i mean",
            "you just turned up in it like it was normal",
            "the waiter kept looking at your hands and i wanted to die",
            "he asked if we were ready to order ladies. ladies {name}"
          ],
          "replies": [
            {
              "you": "I just wanted to try it.",
              "them": [
                "at dinner?? with me??",
                "my sister's friend was two tables over",
                "she's already messaged my sister asking if you're ok"
              ],
              "replies": [
                {
                  "you": "Why wouldn't I be okay?",
                  "them": [
                    "because guys dont just start wearing lip gloss out of nowhere",
                    "is something going on. like actually. tell me"
                  ],
                  "replies": [
                    {
                      "you": "Nothing's going on. I liked how it looked.",
                      "them": [
                        "well i didnt",
                        "i felt like an idiot sitting there",
                        "dont do it again when we're out. please"
                      ]
                    },
                    {
                      "you": "Maybe. I don't know yet.",
                      "gaydar": 60,
                      "them": [
                        "what does that even mean",
                        "no actually i cant do this tonight",
                        "im going to bed"
                      ]
                    }
                  ]
                },
                {
                  "you": "I'm sorry you were embarrassed.",
                  "them": [
                    "i was",
                    "i told her you lost a bet",
                    "thats what i had to say about my own boyfriend"
                  ],
                  "replies": [
                    {
                      "you": "I didn't lose a bet.",
                      "them": [
                        "i know you didnt",
                        "i didnt know what else to say"
                      ]
                    },
                    {
                      "you": "Okay.",
                      "them": [
                        "ok?",
                        "thats it?",
                        "whatever. night"
                      ]
                    }
                  ]
                }
              ]
            },
            {
              "you": "Do you not like it?",
              "them": [
                "no",
                "not really",
                "it just didnt look like you"
              ],
              "replies": [
                {
                  "you": "Maybe it is me.",
                  "gaydar": 60,
                  "them": [
                    "what does that mean",
                    "{name} you're freaking me out"
                  ],
                  "replies": [
                    {
                      "you": "Forget I said that.",
                      "them": [
                        "you cant just say that and then go forget it",
                        "fine. night"
                      ]
                    },
                    {
                      "you": "I don't know yet. I'm trying to work it out.",
                      "gaydar": 65,
                      "them": [
                        "work WHAT out",
                        "we've been together three years",
                        "im not doing this over text"
                      ]
                    }
                  ]
                },
                {
                  "you": "That's fair.",
                  "them": [
                    "im not trying to be mean",
                    "i just want it to be normal again"
                  ],
                  "replies": [
                    {
                      "you": "Okay.",
                      "them": [
                        "night"
                      ]
                    },
                    {
                      "you": "Your boyfriend wore a hole in that polo. He was boring.",
                      "them": [
                        "ok well i liked boring",
                        "you looked like you were off to a bachelorette",
                        "night"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "you": "Did you not like it?",
          "them": [
            "honestly no",
            "it was really embarrassing",
            "and dont wear it saturday my friends will be there"
          ],
          "replies": [
            {
              "you": "Yeah, okay.",
              "them": [
                "thanks",
                "night"
              ]
            },
            {
              "you": "To be fair the gloss looked better on me than the polo ever did.",
              "them": [
                "thats not the point",
                "it was so weird sitting there with my boyfriend more done up than me",
                "saturday. im serious"
              ]
            },
            {
              "you": "I'm going to wear what I want.",
              "them": [
                "wow ok",
                "then dont be surprised when people say stuff",
                "and dont expect me to stick up for you"
              ],
              "replies": [
                {
                  "you": "I wasn't asking you to.",
                  "them": [
                    "good",
                    "night"
                  ]
                },
                {
                  "you": "Night, Archie.",
                  "them": [
                    "night"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "after": "You take the gloss off with toilet paper in the bathroom. Your nails you leave. You look at them a lot over the weekend.",
      "debrief": "You can like how something looks before you know why. Archie hating it doesn't make it wrong."
    },
    {
      "id": "archie-shop",
      "route": "archie",
      "title": "Her work party dress",
      "contact": "Archie",
      "irl": true,
      "gaydar": 62,
      "spark": 30,
      "gaydarSays": "He found my dress in four minutes. Josh would've sat outside on his phone. I don't know which is worse.",
      "intro": "Saturday. Archie needs a dress for her work Christmas party and she's dragged you to the big shopping centre at Chermside. Three years together and she's never let you come shopping before. Now she says you've \"got an eye\".",
      "thinks": [
        "He touched that satin slip and his face went all soft. That's my Sephora face. He's never made that face at me in bed and it's been three years, sooo",
        "he picked the green one for himself, i know he did. and now i have to wear it to the work party knowing he wanted it more than me. great",
        "He's gay. I'm not making it up. I'm just tired, I'd honestly rather go shopping on my own"
      ],
      "them": [
        {
          "note": "She holds up a navy dress. It's fine. It's very fine."
        },
        {
          "note": "She catches you running your hand down a satin slip on the next rack. She watches you do it. Something in her face goes flat."
        },
        "This one? It's safe. Everyone at work wears navy.",
        {
          "note": "You're already holding a green satin one off the rack behind her. You didn't decide to pick it up. Your hand just did."
        }
      ],
      "replies": [
        {
          "you": "Try this one. Trust me.",
          "them": [
            {
              "note": "She comes out of the change room in the green. It's perfect. The shop girl says \"oh wow\" out loud."
            },
            "Okay. Fine. It's good.",
            "\"Your boyfriend's got great taste,\" the shop girl says.",
            "Yeah. He's great at this. Sooo great. It's a bit much, babe."
          ],
          "replies": [
            {
              "you": "Get the gold earrings with it. The small ones.",
              "spark": 22,
              "them": [
                "Of course you've already picked the earrings.",
                {
                  "note": "She buys both. In the car she looks at you for a long time."
                },
                "Do you know Josh asked me to help him buy a shirt last week and he held it up and said 'is this blue'. That's the level I'm used to."
              ],
              "after": "Archie, to Priyanka: \"he picked my dress AND my earrings\" Priyanka: \"marry him\" Archie: \"idk. josh said 'is this blue' about a blue shirt and i nearly cried laughing. i miss stupid\""
            },
            {
              "you": "(Shrug.) It just suits you. Can we get food?",
              "spark": 36,
              "them": [
                "Yeah. Food.",
                {
                  "note": "She holds your hand on the escalator. Then she lets go to look at the nail bar, and you both look at it a bit too long."
                }
              ],
              "after": "Archie, to Priyanka: \"he picked a green dress for me and it's perfect\" Priyanka: \"so whats wrong\" Archie: \"nothing. he was just better at it than me\""
            }
          ]
        },
        {
          "you": "Navy's fine. Get the navy.",
          "them": [
            "Really? You're not going to say anything?",
            {
              "note": "She looks at the green one in your other hand."
            },
            "You're holding a green one.",
            "\"It's... I just picked it up. It's nothing.\""
          ],
          "replies": [
            {
              "you": "Okay, try the green. But I'm not coming in.",
              "spark": 32,
              "them": [
                {
                  "note": "She tries the green. She buys the green."
                },
                "Thanks, I guess. You can say you're good at this. I won't tell anyone."
              ],
              "after": "Archie, to Priyanka: \"he pretended he didn't want to pick the dress\" Priyanka: \"did he pick it\" Archie: \"obviously\""
            },
            {
              "you": "Navy. You'll look nice. You always do.",
              "spark": 40,
              "them": [
                "That's sweet.",
                {
                  "note": "She buys the navy. In the car park she says, \"you'd have looked better in the green than me,\" and then laughs like it was a joke."
                }
              ],
              "after": "Archie, to Priyanka: \"bought the navy\" Priyanka: \"why\" Archie: \"he said get the navy and i wanted him to fight me on it and he didn't\""
            }
          ]
        }
      ],
      "debrief": "Having an eye for clothes isn't something to apologise for. It's just a thing you're good at."
    },
{
  "id": "archie-feet",
  "route": "archie",
  "gaydar": 65,
  "spark": 40,
  "gaydarSays": "Josh from logistics grabbed my boyfriend's foot in front of my whole office. My BOSS was there.",
  "title": "Pool party",
  "contact": "Archie",
  "irl": true,
  "intro": "Archie's work summer party at her boss's house. Shoes off by the pool, the boss's rule. You took your sneakers off at the gate and remembered too late that your toes are still lilac from last weekend. Josh from logistics is here. Archie has mentioned him a lot lately.",
  "thinks": [
    "lilac toes at my boss's pool party. he does them on my bath mat, i keep finding cotton balls in the bin, and i kept telling myself loads of guys do that now. idk who i was kidding",
    "Josh had his foot and {name} looked up at Josh. Not at me once. I went and got another drink",
    "his feet are smaller than mine. josh is cute. i shouldn't be thinking that at a work thing with my boyfriend right there but he wasn't thinking about me either so"
  ],
  "them": [
    {
      "note": "Archie looks at your feet on the pool tiles. She doesn't say anything. She takes your hand, then lets it go when her boss walks past."
    },
    {
      "note": "After that she stands half a step away from you, like you came separately."
    },
    {
      "note": "Josh comes over with two beers. Polo shirt, board shorts, big bare feet. He hands one to Archie and one to you."
    },
    "\"You're {name}, yeah?\" He looks down. \"Oh, nice colour, buddy. Arch, you didn't say he gets pedicures.\"",
    "He does them himself. He gets it all over my bath mat.",
    "And look how small they are. His feet are smaller than mine, Josh. I can wear his socks.",
    "\"Course he does,\" Josh says, to her.",
    {
      "note": "You sit on the edge of a sun lounger. Josh drops onto the end of it and grabs your foot before you can move it."
    },
    "\"Hold still, I want to see if it's a gel.\" His thumb goes right down the middle of your sole."
  ],
  "replies": [
    {
      "you": "(Bite the inside of your cheek. Do not laugh. Do not laugh.)",
      "them": [
        {
          "note": "You stare at the pool. Your face is doing something weird. Josh looks up at you and grins."
        },
        "\"Oh, he's fighting it. Arch, look, he's fighting it.\"",
        {
          "note": "He wiggles his fingers under your toes. Your whole leg shakes. Two of Archie's coworkers have stopped talking to watch."
        }
      ],
      "replies": [
        {
          "you": "(Hold it in. Pull your foot back calmly.) It's a gel. Can I have my foot back?",
          "spark": 42,
          "them": [
            "\"Ha. Yeah, alright,\" Josh says, and lets go. \"Tough guy.\"",
            {
              "note": "Archie laughs, a bit relieved, and sits down next to you with her hand on your knee."
            },
            "Okay that was kind of impressive. I'd have screamed.",
            {
              "note": "Josh goes to get another beer. Archie watches him go."
            }
          ],
          "after": "Archie, to her work friend Priyanka, in the bathroom: \"he didn't even flinch\" Priyanka: \"his toes were purple arch\" Archie: \"lilac\" Priyanka: \"you know what i mean\" Archie: \"...josh is funny though\""
        },
        {
          "you": "(Crack. A giggle comes out of your nose.)",
          "spark": 28,
          "them": [
            {
              "note": "It comes out as a snort, then a high little giggle, then you can't stop. You're curled up on the lounger, laughing into your knees, while Josh keeps going."
            },
            "\"There it is!\" Josh says. \"Arch, he giggles. Your boyfriend giggles.\"",
            "\"Stop,\" you squeak. \"Stop, stop, okay!\"",
            {
              "note": "He stops. Archie's laughing, shaking her head at Josh."
            },
            {
              "note": "She gives your shoulder a quick squeeze and turns back to him."
            },
            {
              "note": "Her boss says \"oh, to be young\" and walks off."
            }
          ],
          "after": "Archie, in the car: \"you giggled in front of my boss\" \"you GIGGLED, {name}\" Then she goes quiet and looks out the window the rest of the way home."
        }
      ]
    },
    {
      "you": "(Give in. You're already giggling.)",
      "them": [
        {
          "note": "You don't even try. The second his thumb moves you're giggling, high and helpless, grabbing the cushion, kicking your free foot."
        },
        "\"Oh my god,\" Josh says. \"That was barely anything!\"",
        {
          "note": "Everyone near the pool turns round. Archie's boss is holding a plate of prawns, staring."
        }
      ],
      "replies": [
        {
          "you": "(Giggling) Josh! Please! Please stop!",
          "spark": 22,
          "them": [
            {
              "note": "He stops and lets go and holds his hands up."
            },
            "\"Begging already. Arch, he's begging.\"",
            {
              "note": "You're red to your ears, hugging your knees, toes curled tight against the cushion. Archie laughs once and then sort of stops."
            },
            "Can you sit up properly. Everyone's looking.",
            {
              "note": "She moves to the lounger next to Josh's."
            }
          ],
          "after": "Archie, texting Priyanka that night: \"he squealed in front of my whole work. my BOSS was holding prawns\" \"josh made him beg\" \"idk why im so annoyed about it\""
        },
        {
          "you": "(Let him keep going. You can't stop laughing anyway.)",
          "spark": 12,
          "gaydar": 72,
          "them": [
            {
              "note": "You don't pull away. You're flat on your back on the lounger, shrieking with laughter, tears in your eyes, toes wriggling in his hand. It goes on for ages."
            },
            "\"He's not even trying to get away,\" someone says.",
            "\"Arch,\" Josh says, still going, \"is he always this ticklish, or just for me?\"",
            {
              "note": "You manage \"stop\" eventually. He stops right away. You lie there gasping, hair stuck to your forehead."
            },
            {
              "note": "Archie isn't laughing. She's holding Josh's beer for him."
            }
          ],
          "after": "Archie, to Priyanka, the next morning: \"he just lay there and let josh tickle him. for like five minutes\" Priyanka: \"he looked like he was having the time of his life tbh\" Archie: \"yeah he did\" \"can we talk about something else\""
        }
      ]
    }
  ],
  "debrief": "Laughing when someone tickles you is a reflex. Whatever Archie felt watching was mostly about Josh."
},
    {
      "id": "c3",
      "route": "archie",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Left him for Josh. He asked where Josh got his jacket.",
      "title": "The other guy",
      "contact": "Archie",
      "irl": true,
      "intro": "Archie texted you this morning: \"can you come over tonight. we need to talk.\" Her place in Paddington. There's a men's denim jacket on the back of her kitchen chair. It isn't yours. She's put the kettle on twice without making anything.",
      "thinks": [
        "I think I knew around month four. I bought him a moisturiser for Christmas instead of saying anything and he loved it, obviously he loved it",
        "We haven't slept together since Christmas. I kept saying I was tired and he kept looking relieved and neither of us said a word about it for months",
        "nothing's happened with josh. yet. i'm allowed to want someone who actually wants me back"
      ],
      "them": [
        {
          "note": "She sits on the far end of the couch with her knees pulled up and a cushion in her lap."
        },
        "Okay. I'm just going to say it or I'll chicken out and we'll end up watching MasterChef.",
        "I've met someone. Josh, from work. He's in logistics. He plays soccer with the guys on Wednesdays, he's kind of boring honestly. Nothing's happened. Well, we got coffee. A few times. But I want something to happen.",
        {
          "note": "She looks at the jacket on the chair, then back at you."
        },
        "And I don't think you're going to be that upset. I don't think you've wanted me for a long time, {name}. I think you'd want someone like Josh too."
      ],
      "replies": [
        {
          "you": "What's that supposed to mean? I'm your boyfriend. Of course I want you.",
          "them": [
            "You know what it means.",
            {
              "note": "She doesn't look away. Her eyes are puffy."
            },
            "The gloss. The nails you never took off. You know my lipsticks better than I do. And the way you look at waiters, {name}. Come on.",
            "And Josh, at my work drinks. Before I even liked him. You asked him where he got his jacket and you went bright red.",
            "I think you're gay. I've thought it for months. I kept waiting for you to say something and you didn't, and I'm sort of over waiting."
          ],
          "replies": [
            {
              "you": "I'm not gay, Archie. I like makeup. That's not the same thing.",
              "them": [
                "Okay.",
                "Then you're a straight guy who borrows my concealer and hasn't kissed me properly since Christmas. Fine.",
                "Either way I'm going. Josh actually wants me. That's sort of all it is."
              ],
              "replies": [
                {
                  "you": "Archie, please. Listen to me. I'm not gay. I just need to try harder with us.",
                  "them": [
                    {
                      "note": "She almost smiles."
                    },
                    "You don't have to try harder. That's what I'm saying.",
                    "You can stop wiping the gloss off in the car before you pick me up. I know you do that."
                  ]
                },
                {
                  "you": "(Say nothing.)",
                  "them": [
                    {
                      "note": "She waits a long time. The kettle clicks off again."
                    },
                    "Yeah.",
                    "I hope you say it to someone one day. Doesn't have to be me."
                  ]
                }
              ]
            },
            {
              "you": "Wait. You were watching me look at Josh?",
              "them": [
                "I didn't have to watch. Priyanka saw it from the bar.",
                "He asked me about it after, in the car park. 'Is your boyfriend...' and he did this little hand thing. I said no.",
                "And then I went home and cried in the shower. So."
              ],
              "replies": [
                {
                  "you": "Josh asked you if I was gay? In the car park? That's so embarrassing.",
                  "them": [
                    "That's the bit you're upset about?",
                    {
                      "note": "She laughs, properly, for the first time tonight."
                    },
                    "You're unbelievable."
                  ]
                },
                {
                  "you": "I'm sorry you had to lie for me. That's not fair on you.",
                  "them": [
                    "No, it wasn't.",
                    "I kept thinking if nobody said it out loud it wouldn't be true."
                  ]
                }
              ]
            }
          ]
        },
        {
          "you": "You're leaving me for a guy from work? A guy who plays pickup soccer?",
          "them": [
            "Yes.",
            "He wears the same three polo shirts and he's never owned a moisturiser and I don't care. He actually looks at me.",
            {
              "note": "She says it quietly."
            },
            "You've never looked at me like that. You look at my makeup bag like that, honestly.",
            "I was angry a few months ago. Now I'm just tired."
          ],
          "replies": [
            {
              "you": "I do want you. I've wanted you for three years. You're my best friend.",
              "them": [
                "Exactly. I'm your best friend.",
                "You want me to do your eyebrows and tell you if your shirt's see-through. Which I love. But I want someone who wants to kiss me.",
                "When you kiss me it's like kissing Priyanka. It's nice. That's it, it's just nice.",
                "And don't think I didn't see you checking out Josh's arms at the party. You were worse than me. Maybe go find your own Josh, {name}. I'm serious."
              ]
            },
            {
              "you": "Is he better than me? Just tell me what he's got that I don't.",
              "them": [
                "He's not better. He's just into me.",
                "He asked what I was doing on the weekend and then he just turned up. He's never once asked what shade my nails are. I don't think he knows nail polish has names."
              ]
            }
          ]
        },
        {
          "you": "(Start crying.)",
          "them": [
            {
              "note": "She drops the cushion and moves down the couch and puts her arm around you, the way she always has."
            },
            "I know. I'm sorry. I know.",
            "You were a good boyfriend. You remembered my sister's birthday every year. You were just... yeah.",
            "Someone has to say it, so. You're gay, {name}. It's okay."
          ],
          "replies": [
            {
              "you": "Don't say that. Please don't say that.",
              "them": [
                "Okay. I won't say it again.",
                "I'm not taking it back though."
              ]
            },
            {
              "you": "(Keep crying into her shoulder.)",
              "them": [
                {
                  "note": "She holds on until you stop. It takes a while."
                },
                "Josh is picking me up at seven. You can stay till then.",
                "Put MasterChef on. You can tell me which one you think is cute, I won't say anything."
              ]
            }
          ]
        },
        {
          "you": "Please, Archie. Give me another chance. I'll stop with the makeup. I'll stop with all of it.",
          "them": [
            "It's not the makeup. I don't care about the makeup.",
            "You could wear all of it and I'd do your lashes for you. You still wouldn't want me.",
            "And I'm not asking you to stop. I'd rather you were with some guy who likes you in it."
          ],
          "replies": [
            {
              "you": "I don't want to be with a man. I want to be with you.",
              "them": [
                {
                  "note": "She looks at you until you look away."
                },
                "Okay.",
                "Josh is coming at seven."
              ]
            },
            {
              "you": "Okay. Okay.",
              "them": [
                "Okay.",
                {
                  "note": "She squeezes your hand. Then she picks up Josh's jacket and puts it on."
                }
              ]
            }
          ]
        },
        {
          "you": "His jacket's from H&M. Two seasons ago. I'm just saying.",
          "them": [
            {
              "note": "She stares at you. Then she covers her face with the cushion and laughs into it."
            },
            "Oh my god. {name}.",
            "That's literally what I'm talking about.",
            "He doesn't even know where it's from. He wouldn't care if I told him."
          ],
          "replies": [
            {
              "you": "What? It is. You can tell by the buttons.",
              "them": [
                "Mm.",
                {
                  "note": "She takes the jacket off the chair and folds it over her arm, away from you."
                },
                "Josh is picking me up at seven."
              ]
            },
            {
              "you": "(Go quiet.) Sorry. I don't know why I said that.",
              "them": [
                "I do.",
                {
                  "note": "She bumps your knee with hers."
                },
                "It's fine. Stay till seven if you want."
              ]
            }
          ]
        },
        {
          "you": "Fine. Go be with Josh. Go have a boring life with Mr Pickup Soccer.",
          "them": [
            "I will.",
            "Leave your key on the bench.",
            "And your nail polish is still in my bathroom. Take it with you."
          ]
        }
      ],
      "after": "Archie, to her sister, that night: \"did it. told him about josh\" \"how'd he take it\" \"idk. weird. he kept looking at josh's jacket on the chair\" \"his JACKET?\" \"dont\"",
      "debrief": "She more or less said it for you, before you were ready. You still get to say it yourself, when you want to."
    },
    {
      id: "c4", route: "archie", gaydar: 99, spark: 0, gaydarSays: "Josh's friend Ryan does pilates. I'm just saying.", title: "Archie and Josh", contact: "Archie",
      intro: "Three weeks later. Archie's Instagram is mostly Josh now, nearly always in a polo shirt. Then she texts.",
      them: ["hey {name}", "just wanted to say im doing ok", "josh and i are good. like really good. he took me to the breakfast creek hotel and ate this massive steak and fell asleep on the couch at 8:30 lol", "sorry if thats weird to hear", "are you ok? like actually"],
      replies: [
        { you: "I'm okay. Honestly. I'm really happy for you, Arch. He seems like a real guy's guy.",
          them: [
            "he is SO a guy's guy",
            "his shampoo is 2 in 1. thats the whole routine",
            "hes doing my bookshelf this weekend. remember ours lol. you cried and there were like six screws left over",
            "anyway thanks for saying that",
            "ok can i say one thing and then ill shut up",
            "josh has a friend ryan. hes gay. hes really nice",
            "he does reformer pilates and he has a dog called margot and like. very nice arms",
            "just saying"
          ],
          replies: [
            { you: "Archie. I'm not gay. Why does everyone keep saying that?",
              them: ["ok", "his numbers in my phone if you ever want it", "no pressure"] },
            { you: "Okay first of all I didn't cry about the bookshelf. I had something in my eye. For an hour.",
              them: ["you made me hug you in the hallway", "anyway. ryan. think about it"] },
            { you: "Why are you telling me about his arms? Why would I care about his arms?",
              them: ["no reason 😇", "lol", "forget i said anything"] },
            { you: "...How nice are the arms? Hypothetically.",
              them: ["very", "ok im saying nothing else", "josh just asked why im smiling at my phone"] }
          ] },
        { you: "Are you texting me from his place right now?",
          them: ["...maybe", "sorry. too soon?", "he says hi btw", "and he wants to know where you got your jacket from the work drinks"],
          replies: [
            { you: "Tell him it's from the women's section at Zara. Actually, don't tell him that.", them: ["lol im telling him", "he said fair enough", "hes watching the cricket"] },
            { you: "Too soon, Arch. I need a bit.", them: ["sorry youre right", "look after yourself ok"] }
          ] },
        { you: "I miss you. Not as a girlfriend. Just you. Is that weird?",
          them: [
            "not weird",
            "i miss you too",
            "can we just be friends eventually? like actual friends",
            "i want to hear about whoever you end up with. even if its a ryan lol"
          ],
          replies: [
            { you: "Yeah. Eventually. When it stings less.", them: ["ok", "no rush", "ill be here watching josh fall asleep in front of the cricket"] },
            { you: "It's not going to be a Ryan.", them: ["ok", "ryan's still single btw"] }
          ] }
      ],
      after: "You still haven't said the word out loud to anyone.",
      debrief: "It's allowed to sting, seeing her this happy with Josh. You weren't the problem."
    },
    {
      id: "c2", route: "nicole", gaydar: 75, friend: true, gaydarSays: "He knew Jemima's lip liner by name. I'm not saying anything. I'm just saying.", title: "One of the girls", contact: "Nicole",
      intro: "Friday drinks at the Regatta with the uni girls. Archie couldn't come. You spent most of the night helping Ailisha pick a lipstick on her phone and told Jemima the bartender was \"objectively\" good-looking, then spent ten minutes explaining why that was a normal thing to say. Nicole kept smiling into her drink.",
      them: ["{name}!! tonight was so fun", "ok ive decided something and you're not allowed to argue", "you're coming to girls night from now on. thursdays", "not optional"],
      replies: [
        { you: "Girls' night? Nic, I'm a guy. I've got a girlfriend. I'm pretty sure that disqualifies me.",
          them: [
            "are you though",
            "i mean yes technically",
            "you knew what jemima's lip liner was called {name}. by name",
            "and you said the bartender had great forearms lol",
            "anyway ailisha already added you to the group chat. you're saved in her phone as '{name} 💅'"
          ],
          replies: [
            { you: "I'm literally dating Archie. Three years. We're basically engaged according to her sister.",
              them: ["mm", "how is archie", "do you guys still go on dates or is it mostly you doing her eyebrows in front of masterchef"],
              replies: [
                { you: "We go on dates! We went to the Italian place last week. It was very romantic and very straight.", them: ["very straight 😂", "was that the lip gloss night", "jemima told me. jemima tells me everything", "anyway thursday"] },
                { you: "...okay, it's mostly eyebrows. But I'm really good at eyebrows.", them: ["i KNOW you are. that's my whole point", "thursday. you're doing mine too"] }
              ] },
            { you: "The bartender DID have great forearms. That's just a fact. Anyone could see that.",
              them: ["SEE", "this is what im talking about", "i know a bar in the valley you'd love 👀"],
              replies: [
                { you: "What's that supposed to mean?", them: ["nothing 😇", "its mostly kylie but the drinks are good"] },
                { you: "...What bar? Just so I know. For the cocktails.", them: ["omg", "ill send you the address", "for the cocktails. sure"] }
              ] }
          ] },
        { you: "Ha. Sure. What do you even do at girls' night?",
          them: [
            "wine and face masks and the bachelorette mostly",
            "and talking about boys",
            "you'd be good at it you always have opinions about the guys on the bachelorette",
            "you said 'he's too pretty for this show' about like half of them"
          ],
          replies: [
            { you: "I don't have opinions about the guys. I was just commenting. Objectively.", them: ["objectively 😂", "ok", "thursday 7"] },
            { you: "Fine. But I'm Team Jordan and I'm not changing my mind.", them: ["TEAM JORDAN 😭", "ok you're definitely coming", "ailisha is going to fight you"] }
          ] },
        { you: "What do you mean, one of you? What's that supposed to mean, Nic?",
          them: [
            "you know what i mean",
            "relax im not asking you anything lol",
            "i just mean you're my favourite person to go shopping with",
            "like over the girls even"
          ],
          replies: [
            { you: "There's nothing to tell, Nic. Honestly. I just like shopping.", them: ["ok sure", "anyway can you come to sephora saturday", "i need a blush and you're the only one who's honest with me"] },
            { you: "Thanks, Nic. I'd love to come.", them: ["yay", "also sephora saturday?", "bring your loyalty card i know you have one"] }
          ] },
        { you: "Fine. But I'm not sitting on the floor. I'm a guest.",
          them: [
            "you're not a guest you're furniture now",
            "jemima's boyfriend isn't even allowed to come lol",
            "you can have the corner of the couch",
            "bring face masks. not the cheap ones ailisha breaks out"
          ],
          replies: [
            { you: "Why isn't her boyfriend allowed? I'm a boyfriend. I'm Archie's boyfriend.", them: ["because he talks about crypto", "you talk about our hair", "its different"] },
            { you: "The corner of the couch. Okay. I accept.", them: ["omg you said that like you were accepting a rose", "thursday 7"] }
          ] }
      ],
      after: "You go on Thursday. You have opinions about every guy on The Bachelorette. Nicole keeps topping up your wine and doesn't say a thing about it.",
      debrief: "Some friends just make room for you without needing you to say anything. You can say it whenever you want, or not at all."
    },
    {
      id: "nicole-2", route: "nicole", gaydar: 90, friend: true, gaydarSays: "He swatched eleven lipsticks on his own wrist. ELEVEN.", title: "Sephora", contact: "Nicole", irl: true,
      outfits: [
        { label: "Jeans and a tee. It's just shopping.", gaydar: -5, intro: "Saturday. Sephora in the Queen St Mall. Jeans, a plain tee, nothing that says anything. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Your cropped knit, a bit of tinted balm and your rings", intro: "Saturday. Sephora in the Queen St Mall. You wore your cream cropped knit, a bit of tinted lip balm and all your rings, because it's Sephora and you didn't want to look like you didn't belong. Nicole is waiting at the entrance with two iced lattes." },
        { label: "Cropped knit, lip tint, mascara and a little shoulder bag", gaydar: 5, intro: "Saturday. Sephora in the Queen St Mall. Cropped knit, berry lip tint, mascara, and the little black shoulder bag you bought online and have never taken out of the flat. Nicole is waiting at the entrance with two iced lattes. She sees the bag and nearly drops one.", them: ["And a BAG. Okay. We're doing this properly then."] }
      ],
      them: [
        "Oat latte, extra shot. Because you're a diva.",
        { note: "She hands it to you and links her arm through yours." },
        "Okay so I need a blush, and a lip for my cousin's wedding. And you're getting something for yourself and you're not allowed to say it's for Archie."
      ],
      replies: [
        { you: "I don't need anything. I'm just here for moral support. And the free samples.",
          them: [
            "You literally just walked past the blush and went straight to Rare Beauty.",
            { note: "You're already holding a liquid blush. You don't remember picking it up." },
            "Put it on your hand. Go on, I'm not judging."
          ],
          replies: [
            { you: "Okay, but this shade is actually so pretty. Look how it melts in. Nic, LOOK at it.",
              them: [
                "I'm looking! It's really nice on you.",
                "Okay, you're getting it. Don't do that face. Wear it Thursday, nobody's going to say anything except where's it from.",
                { note: "The sales girl comes over and asks if your girlfriend needs help. Nicole says, \"Oh, we're not together.\" The sales girl looks at your swatched wrist and says, \"Oh. Okay.\"" }
              ],
              replies: [
                { you: "Why did she say 'oh okay' like that? What did that mean?", them: ["Mean? Nothing. She was just being nice.", { note: "Nicole is biting her lip." }, "Anyway. Cousin's wedding. Come on."] },
                { you: "Fine. I'm getting it. But it's a secret. Archie can't know.", them: ["I won't tell Archie. I don't tell anyone anything, you know that.", { note: "She's already walking to the till." }] }
              ] },
            { you: "Nic, I'm a straight guy in Sephora. I'm literally only here for you.",
              them: [
                "Mm-hm.",
                "Then why have you swatched eleven lipsticks on your own wrist?",
                { note: "You look down. There are eleven stripes on your wrist." },
                "It's fine. Pick your favourite."
              ],
              replies: [
                { you: "The fourth one. Obviously. The mauve. It's giving soft but expensive.", them: ["'It's giving soft but expensive.'", "Did you hear that? Did you hear yourself?", "Mauve. I'm buying it for you, don't argue."] },
                { you: "None of them. I'm washing my wrist. This never happened.", them: ["Too late, I took a photo.", "Kidding. Kind of. Come on."] },
                { you: "Don't look at me like that. Your ex swatched once. You told me.", them: ["He swatched one foundation and said they all looked the same.", "You just told me one was a bit cool for your undertone.", "So."] }
              ] }
          ] },
        { you: "Okay, wait. The something for me. Can I get a lip oil? Just a clear one. Nothing crazy.",
          them: [
            "Yes. Yes.",
            "Clear's fine. Or the rosy one? Your lips are already pink, it'd just look like you but a bit more.",
            "And don't pretend you haven't looked. You went straight to the Dior stand when we walked in."
          ],
          replies: [
            { you: "Okay, fine, the rosy one. But if anyone asks, it's chapstick.", them: ["'It's chapstick.'", "Sure.", "Do you want to look at brow stuff while we're here? Your brows are better than mine and I hate it."] },
            { you: "The rosy one. And maybe a little liner. Just to see. Don't make it a thing.", them: [{ note: "She doesn't make it a thing." }, "Okay. I'll get a basket."] }
          ] },
        { you: "Nic. Why do you keep linking arms with me like I'm one of your girlfriends?",
          them: [
            "Because you're one of my girlfriends.",
            "Okay that came out wrong.",
            "Or not wrong. I don't know. Do you want me to stop?"
          ],
          replies: [
            { you: "No. I don't want you to stop. I kind of like it.", them: ["Good, I wasn't going to.", { note: "She squeezes your arm and steers you towards the blush." }] },
            { you: "It's fine. People might think we're together, that's all.", them: ["Nobody in here thinks we're together.", "The sales girl called you hun. She calls all the boyfriends sir, I've been listening."] },
            { you: "Okay but if you're linking arms, you're carrying the basket. I'm wearing rings.", them: ["Oh my god. Fine.", { note: "She takes the basket and keeps hold of your arm." }] }
          ] }
      ],
      after: "On the way out Nicole says, \"Same time next month?\" At home you put the little Sephora bag in your bedside drawer, under your socks.",
      debrief: "You're allowed to just enjoy a day like that, without explaining it to anyone."
    },
    {
      id: "nicole-3", route: "nicole", gaydar: 97, friend: true, gaydarSays: "He rated my Hinge guys out of ten and then said 'actually, I'd date him'. I didn't even flinch.", title: "Rate my Hinge", contact: "Nicole",
      intro: "A month of Thursdays later. Archie's with Josh now. Your blush lives in Nicole's bathroom. Tonight she's lying across your lap swiping on Hinge and you're giving every guy a score out of ten.",
      them: ["ok im texting you even though youre on my couch because jemima's here", "this one. aaron. 31. engineer. 6'2 and a dog", "thoughts"],
      replies: [
        { you: "Nine. Ten without the bucket hat. The jaw though. I'd go out with him honestly. Like if I were you. Obviously.",
          them: [
            "'like if i were you obviously' 😭",
            "{name}",
            "jemima just mouthed omg at me from the kitchen"
          ],
          replies: [
            { you: "As you, Nic! I meant if I were you! I'm with Archie. Was with Archie. I'm straight.",
              them: [
                "ok",
                "you know im never going to ask you right",
                "you can drop the obviously with me though"
              ],
              replies: [
                { you: "I know. Thanks. Can we just keep swiping?", them: ["yes. next. tom, 28, physio", "your face just did something", "im saying nothing"] },
                { you: "I'm not doing a thing. Next guy. Quick, before I die.", them: ["next guy. ryan. pilates. dog called margot", "wait isn't that josh's friend", "{name} your face"] }
              ] },
            { you: "Okay, but have you seen his second photo? The one at the beach? Nic. NIC.",
              them: ["i have seen it", "screenshotting it for you", "youre welcome"] }
          ] },
        { you: "Three. Bucket hat, fish photo, and he says 'looking for my partner in crime'. Absolutely not, babe. Next.",
          them: ["'absolutely not babe' 😭", "you called me babe", "youve never called me babe", "telling the girls"],
          replies: [
            { you: "I didn't. Did I? It slipped out. It's from girls' night. You're all a bad influence.",
              them: ["we're a great influence", "ailisha is going to lose it"] },
            { you: "I'll call you babe if I want, babe. Next guy. Come on. I'm on a roll.",
              them: ["omg", "ok next. hes a vet. hes holding a puppy", "if you dont give him a ten im kicking you out"] }
          ] },
        { you: "Why do you always ask me about guys? You've got Jemima and Ailisha for this.",
          them: [
            "because youre better at it",
            "you noticed the wedding ring on that guy last week. in his third photo",
            "and idk. you look at guys the way i do",
            "thats all im saying"
          ],
          replies: [
            { you: "I don't look at guys like that. I just notice stuff. I'm a noticing person.", them: ["ok noticing person", "notice this one. owen. 29. electrician", "would you"] },
            { you: "(Say nothing. Look at Owen's photos for a really long time.)",
              them: [{ note: "She watches you go through all of Owen's photos twice. Then she takes her phone back and hugs you." }, "ok", "you dont have to say anything", "jemima's already got a list of guys for you btw. just so you know"] }
          ] }
      ],
      after: "Nicole never asks. Every few days she sends you a screenshot of some guy with no message. You haven't deleted any of them.",
      debrief: "Nicole isn't waiting on you to say anything. There's no deadline."
    },
    {
      id: "nicole-4", route: "nicole", gaydar: 99, friend: true, gaydarSays: "My thirtieth, and Jemima's present was for him. I got a candle.", title: "Jemima's list", contact: "Nicole", irl: true,
      outfits: [
        { label: "A black tee and jeans. It's her night, not yours.", intro: "Saturday. Nicole's 30th at a wine bar in West End, fairy lights and far too many people. Black tee, jeans. She's in the back booth with the uni girls and a gold balloon that says 30.", them: ["You look nice. Very... black tee. Very low effort. I love you anyway."] },
        { label: "Your cream knit, your rings and the blush from Sephora", intro: "Saturday. Nicole's 30th at a wine bar in West End, fairy lights and far too many people. Cream knit, all your rings, and the liquid blush she made you buy, which has lived in her bathroom for a month. She's in the back booth with the uni girls and a gold balloon that says 30.", them: ["Wait. Is that the blush? From Sephora? Ailisha. AILISHA. He's wearing the blush."] },
        { label: "A sheer black shirt, eyeliner and the little shoulder bag", intro: "Saturday. Nicole's 30th at a wine bar in West End, fairy lights and far too many people. A sheer black shirt, a thin line of eyeliner you redid three times, and the little shoulder bag. She's in the back booth with the uni girls and a gold balloon that says 30.", them: ["Oh. Okay. Sheer. At my birthday. Are you trying to upstage me?", { note: "She's grinning. She takes a photo of you before you can put your hand up." }] }
      ],
      them: [
        "You came! You're late. I don't care. Happy birthday to me.",
        { note: "She hugs you hard and nearly tips her spritz down your back." },
        "Okay. Don't be mad.",
        "Jemima invited someone. From her work. He's at the bar. Blue shirt.",
        { note: "You look. Blue shirt is waiting to order, laughing at something the bartender said. Nice forearms. His collar's sticking up at the back." },
        "His name's Hugo. He's really lovely. That's all I'm saying. I'm not saying anything."
      ],
      replies: [
        { you: "Nic. Is this a set-up? At your own birthday?",
          them: [
            "It's not my set-up. It's Jemima's. I'm completely separate.",
            { note: "Across the room Jemima waves at you with both hands." },
            "Okay, I knew. But I told her no pressure, and she heard 'go'.",
            "You don't have to talk to him. You can just stand here with me and judge people's shoes."
          ],
          replies: [
            { you: "Fine. We're judging shoes. Starting with Blue Shirt's. ...Okay, they're actually nice.",
              them: [
                "They're Common Projects. I asked Jemima. She said you'd know.",
                { note: "You did know." },
                "Go and tell him you like his shoes. That's not a date. That's one sentence."
              ],
              replies: [
                { you: "(Go over.)",
                  them: [
                    { note: "You get to the bar and stand next to him and forget the sentence." },
                    "\"Hey,\" he says. \"You're Nicole's {name}? Jemima said you'd come over and say something about my shoes.\"",
                    "\"So. Go on.\""
                  ],
                  replies: [
                    { you: "They're really nice shoes. That's... that was the whole thing.",
                      them: [
                        "\"That's it?\" He laughs. \"Jemima built you up so much.\"",
                        "\"She said you'd fix my collar too. Is it bad?\"",
                        { note: "It is bad. You fix it. Your hands are a bit shaky and he pretends not to notice." }
                      ],
                      outcome: "hugo", after: "You stay at the bar for an hour and a bit. He puts his number in your phone himself, as \"Hugo (shoes)\". When you get back to the booth Nicole is very busy with her balloon and doesn't ask a single thing." },
                    { you: "Sorry. I'm really out of practice. I've never actually done this. With a guy.",
                      them: [
                        { note: "He doesn't make a face. He just nods, like you've said you've never been to Melbourne." },
                        "\"Okay. Well, you're doing it now.\"",
                        "\"I'm getting a drink anyway. Want one? You can tell me about the shoes properly.\""
                      ],
                      outcome: "hugo", after: "You talk to Hugo until the bar staff start stacking stools. At some point you look over and Nicole is watching you from the booth, chin on her hand. She doesn't come over once." }
                  ] },
                { you: "(Stay.) Not tonight. It's your birthday. I'm not leaving you for a shoe.",
                  them: [
                    "Okay.",
                    { note: "She doesn't push it. She slides you her spritz and orders another one." },
                    "But if he comes over here I'm going to the bathroom for a really long time."
                  ],
                  outcome: "quiet", after: "He doesn't come over. You do, eventually, on your way out, and say \"nice shoes\" so fast he has to ask you to repeat it. Nicole hears about it from Jemima before you're even in the Uber." }
              ] },
            { you: "I'm not mad. Why does everyone think I'd want a Hugo, though?",
              them: [
                { note: "She looks at you for a second. She's had two spritzes and it's her birthday." },
                "Because you just looked at him for about nine seconds. I counted.",
                "I'm not asking. I've never asked you. I'm not starting at my own birthday."
              ],
              replies: [
                { you: "Nic. I'm gay.",
                  them: [
                    { note: "She doesn't scream. She puts her drink down on the nearest table, which isn't theirs, and hugs you." },
                    "Okay.",
                    "Okay. I know. I love you.",
                    "You said it at my birthday. That's my present. Jemima got me a candle.",
                    { note: "She's crying a bit, and laughing at herself for crying, and wiping her mascara with the back of her hand." },
                    "Do you want to go and meet Hugo, or do you want to just stand here with me for a bit?"
                  ],
                  replies: [
                    { you: "Stand here with you for a bit.", them: ["Good. That's what I wanted anyway.", { note: "She puts her arm through yours. The people whose table it is take their drink back without saying anything." }],
                      outcome: "told", after: "Nicole doesn't tell anyone. A week later Ailisha says \"so Nic says you're coming to Pride with us\", and that's how you find out Nicole told exactly one person, and only so you'd have a group to go with." },
                    { you: "Both. Here first. Then Hugo.", them: ["Yes. Correct answer.", "Fix his collar. It's been bugging me all night."],
                      outcome: "told", after: "You fix Hugo's collar. He goes a bit pink, which you weren't expecting. Nicole watches from the booth with mascara on her cheek and both thumbs up." }
                  ] },
                { you: "(Don't say anything. Just nod.)",
                  them: [
                    { note: "She nods back." },
                    "Okay.",
                    "That's plenty for me.",
                    "Now come and sit down before Jemima physically walks him over."
                  ],
                  outcome: "nodded", after: "Jemima doesn't walk him over. She tries twice. Nicole stops her both times with one look, and keeps your glass topped up all night." }
              ] }
          ] },
        { you: "Oh, he's cute. What did Jemima tell him about me?",
          them: [
            "That you're my best friend and you're funny and you'll be here.",
            "That's it. I made her show me the text.",
            "Nothing else. She knows I'd kill her."
          ],
          replies: [
            { you: "Okay. Okay. His collar's sticking up. I'm going to fix it. That's all I'm doing.",
              them: [
                { note: "You walk over before you can think about it and fix his collar from behind." },
                "\"Oh. Thanks,\" he says, and turns round. \"Are you the one who fixes collars? Jemima said there'd be a guy.\"",
                { note: "He's taller than he looked from the booth." }
              ],
              replies: [
                { you: "I'm the one. {name}. Sorry for touching your neck.", them: ["\"I'll live,\" he says. \"Hugo. Do you want a drink, or is collar-fixing a one-off?\""],
                  outcome: "hugo", after: "You have a drink with him. Then another. When you get back to the booth Ailisha has written HUGO on a napkin and drawn a love heart on it, and Nicole folds it into your hand without a word." },
                { you: "(Go red.) Nicole made me. Happy birthday to her. Bye.",
                  them: [{ note: "You go straight back to the booth and sit down with your face in your hands." }, "That was SO good. That was the best thing I've ever seen.", "He's still looking over here, by the way. Don't look."],
                  outcome: "quiet", after: "You don't look for a whole hour. Then you do, and he's looking too, and he lifts his glass at you. Nicole pretends to be asleep on Jemima so you don't feel watched." }
              ] },
            { you: "I'm going to hide in the bathroom for a second.",
              them: [
                { note: "She follows you in. You both stand at the mirror. She does her lipstick and doesn't say anything." },
                "You can go home if you want. I won't be weird about it.",
                "Or you can stay and not talk to him. Or talk to him. I'll be in the booth for all three."
              ],
              replies: [
                { you: "I'll stay. I just needed a minute.", them: ["Take two. I'll tell Jemima you're doing your eyeliner. She'll believe it."],
                  outcome: "quiet", after: "You go back out. You don't talk to Hugo. You do watch him laugh at the bar a few times, and Nicole watches you watch him and doesn't say a word." },
                { you: "Can you come with me to say hi? Just stand there?", them: ["Yes. I'll be so normal. You won't even know I'm there."],
                  outcome: "hugo", after: "She is not normal. She introduces you as \"my best friend {name}, he's single, he does eyebrows\" and then walks away. Hugo laughs for a really long time. He asks you to do his." }
              ] }
          ] },
        { you: "It's your birthday. Can we not do anything about me tonight?",
          them: [
            "Yes. Totally. Nothing about you.",
            { note: "She lasts about forty minutes." },
            "Okay, he's coming over. I'm sorry. I didn't do it. Act normal.",
            "\"Hi,\" Hugo says. \"Sorry. Jemima basically pushed me. I'm Hugo. Happy birthday, Nicole.\""
          ],
          replies: [
            { you: "Hi. {name}. I like your shoes.",
              them: [
                "\"Thanks. Jemima said you would.\"",
                { note: "Nicole gets up to go to the bar, very slowly, looking back twice." },
                "\"So she's left us. Subtle.\""
              ],
              outcome: "hugo", after: "You talk to Hugo in the booth while Nicole stays at the bar for twenty-five minutes buying one drink. When she comes back she sits on the other side of the table so you don't have to move." },
            { you: "Hi. Sorry, I think Jemima's got the wrong idea. I'm straight.",
              them: [
                "\"Oh. Right. Sorry, man.\"",
                { note: "He goes back to the bar. Jemima's face falls from across the room." },
                "...Okay.",
                { note: "Nicole puts her arm through yours and leaves it there." },
                "Nothing about you tonight. I promised."
              ],
              outcome: "quiet", after: "Nicole doesn't bring it up, that night or after. A week later she sends you a screenshot with no message: Hugo's Instagram, the photo in the blue shirt. You look at it for a long time." }
          ] }
      ],
      after: "At the end of the night Nicole falls asleep in the Uber with her head on your shoulder, still holding the 30 balloon.",
      debrief: "Nicole never needed you to say it. Whatever you did at her birthday, she was glad you came."
    },
    {
      id: "nicole-5", route: "nicole", gaydar: 99, friend: true, gaydarSays: "I fancied him for all of first year. Then he started doing his nails better than mine and that was that.", title: "First year", contact: "Nicole", irl: true,
      outfitPrompt: "What did you wear to girls' night?",
      outfits: [
        { label: "A hoodie, trackies and your lip oil. It's only Nicole's.", gaydar: -3, intro: "Thursday, a couple of months after her birthday. Jemima and Ailisha have gone home and it's just you and Nicole on her couch with the end of the rosé. You came in a hoodie and trackies and your lip oil. Your nails are chipped, so she's got her whole kit out on the coffee table and your hand in her lap.", them: ["Look at you in your little hoodie. Very cosy. The lip oil's doing all the work."] },
        { label: "Your cream knit, your rings and a bit of gloss", intro: "Thursday, a couple of months after her birthday. Jemima and Ailisha have gone home and it's just you and Nicole on her couch with the end of the rosé. Cream knit, all your rings, a bit of gloss. Your nails are chipped, so she's got her whole kit out on the coffee table and your hand in her lap.", them: ["Rings off. All of them. I can't paint around eight rings, {name}.", { note: "You take them off one at a time. She lines them up on a coaster." }] },
        { label: "Your satin shirt, gloss, lashes and little gold hoops", gaydar: 3, intro: "Thursday, a couple of months after her birthday. Jemima and Ailisha have gone home and it's just you and Nicole on her couch with the end of the rosé. The green satin shirt, gloss, a set of lashes you put on for nobody, and the little gold hoops. Your nails are chipped, so she's got her whole kit out on the coffee table and your hand in her lap.", them: ["Lashes. For girls' night. On my couch.", { note: "She leans right in to look at them, her nose nearly on yours, and doesn't blink." }, "They're good. Who did them? I want her number."] }
      ],
      them: [
        "Hold still. Your cuticles look like nobody's ever loved you.",
        { note: "She files your first nail into an almond without asking what shape you want." },
        "Ailisha asked me in the kitchen tonight if I was ever into you.",
        "I said no. Way too fast. She gave me a look.",
        { text: "And I've been thinking about it since my birthday anyway. Since you told me. With my drink on some stranger's table.", if: "nicole-4=told" },
        { text: "And I've been thinking about it since my birthday anyway. Since the nod. Best nod of my life.", if: "nicole-4=nodded" },
        { text: "You never actually said it to me, you know. You just went and talked to Hugo at my thirtieth. Which, same thing.", if: "nicole-4=hugo" },
        { text: "You've still never said it to me, by the way. You don't have to. I've met your nails.", if: "nicole-4=quiet" },
        "Okay. I'm telling you this because I'm two wines in and it's funny now.",
        "I had the biggest thing for you in first year.",
        "I sat behind you in stats every Wednesday and did my hair before it. Every Wednesday.",
        { note: "She says it to your thumbnail. She keeps filing." },
        "Don't look at me like that. It's gone. It's so gone it's actually funny."
      ],
      replies: [
        { you: "(Laugh so hard she smudges the base coat.)",
          them: [
            "Wow. Okay.",
            { note: "She holds your hand up to the lamp. There's base coat on your knuckle." },
            "I tell you my deepest secret and you wreck a thumb.",
            "No, it's fine, I'm laughing too. It's insane. I wrote your name in my planner, {name}. In pencil. So I could rub it out."
          ],
          replies: [
            { you: "In pencil. Nic, that's so tragic. Why didn't you ever say anything?",
              them: [
                "Timing. I had a boyfriend, then you had Archie. So I was the friend.",
                "Then it just kind of sat there for ages. Not a big thing. A little bit, sometimes.",
                "And then you started doing your nails. And stealing my lip oil. And telling me my eyeliner was uneven, which it was.",
                "And then one day I looked at you and there was nothing there. I checked. Nothing.",
                "Now you're basically Ailisha with better skin."
              ],
              outcome: "laughed",
              after: "She redoes the thumb. Before your top coat's dry she's told the group chat, and Ailisha replies \"FIRST YEAR??\" so many times Jemima mutes it." },
            { you: "Okay. Sorry. I'm composed. Was it the hair? I had really good hair in first year.",
              them: [
                "You had a fringe. It was bad. I loved it.",
                "It was the grey jumper, mostly. You wore it every Wednesday. I knew what day it was by the jumper.",
                "And now your nails are better than mine and I'd honestly rather die than kiss you.",
                { note: "She blows on your thumb." },
                "That's a compliment. That's the nicest thing I've ever said to a man."
              ],
              outcome: "laughed",
              after: "Next Thursday you turn up in the grey jumper. You still have it. Nicole screams, takes a photo, and announces to the room that it does nothing for her now, not one thing, sounding thrilled about it." }
          ] },
        { you: "Nic. Why would you tell me that. I have to lie face down on your floor now.",
          them: [
            "Oh my god, you've gone red.",
            "You're pinker than the polish.",
            "Stop. It's not a thing. It was a thing when we were nineteen. Now it's a story I tell at girls' night.",
            "Honestly the first time you wore gloss to brunch I was cured. Fully."
          ],
          replies: [
            { you: "(Put your face in the couch cushion. Hold your hand out so she can keep going.)",
              them: [
                { note: "She keeps going. She does three nails before either of you says anything." },
                "See, this is why it went.",
                "A straight guy would've made this weird. You just held your hand out for the next coat.",
                "You're my favourite girlfriend. Don't tell Jemima."
              ],
              outcome: "mortified",
              after: "You stay in the cushion until the top coat's dry. She puts the throw rug over your head and The Bachelorette back on, and by the second rose ceremony you're arguing about the guys like nothing happened." },
            { you: "Did I lead you on? Back then? Tell me I didn't do something awful.",
              them: [
                "You lent me your umbrella once and I thought about it for a month. That's what you did.",
                "No. You were just nice and a bit oblivious.",
                "Very oblivious. Now I know why.",
                { note: "She taps your nail with the end of the brush." },
                "Stop worrying. You did my contour last week and all I felt was jealous."
              ],
              outcome: "mortified",
              after: "You apologise for the umbrella twice on the way out. Nicole says if you apologise a third time she's telling Ailisha about the planner too. A week later she tells Ailisha about the planner anyway, and blames you." }
          ] },
        { you: "Okay, but when did it stop? I need a date. I need to know what I was wearing.",
          them: [
            "Oh, I know exactly when.",
            "First time you came to girls' night with your nails done. That pale pink. You kept doing this all night.",
            { note: "She holds her hand out flat and tilts it under the lamp, admiring her own nails." },
            "And I thought, oh, he's one of us now. And I waited to be sad about it, and mostly I wanted to know what the colour was called."
          ],
          replies: [
            { you: "One manicure. That's all it took? Since first year, and a bottle of pale pink did it?",
              them: [
                "No, the manicure finished it. The gloss started it.",
                "Then you started saying 'obsessed'. Then you told me my bronzer was 'a lot for daytime, babe'. Babe!",
                "Every week there was something. The hoops. The little bag. And every week I cared a bit less, and then one week I just didn't.",
                "By last month I was getting changed in front of you and didn't even think about it. You did my zip.",
                "I'm so relieved, by the way. I'd have been an awful girlfriend. I'm a great one of these."
              ],
              outcome: "when",
              after: "She paints the last nail and makes you hold your hand up next to hers for a photo. She sends it to the uni girls with the caption \"first year me would die\". Ailisha replies with a skull and \"his are nicer\"." },
            { you: "So my nails did that. Honestly I'm a bit proud.",
              them: [
                "You should be. They're great nails. I'm doing them.",
                "Honestly it's so much easier like this.",
                "I spent years being weird about you and now I just get to borrow your concealer.",
                { note: "She holds the polish bottle up against your hand and nods, like it passed." }
              ],
              outcome: "when",
              after: "On your way out she gives you the bottle of pale pink, the one from that night. \"It's yours. It ended me.\" You keep it on your bathroom shelf where you'll see it every morning." }
          ] },
        { you: "Wow. So you fancied me right up until I got hotter. That's on you, Nic.",
          them: [
            "Hotter. Okay.",
            "No, you did get hotter. That's the problem. You got hot for the wrong people.",
            "Like, you're gorgeous now. You're so pretty. And it does nothing for me. Zero.",
            "I look at you and think, I want your skin. That's it. That's the whole thought."
          ],
          replies: [
            { you: "Just so you know, I'm very gay, Nic. Extremely. It was never going to work.",
              gaydar: 100,
              them: [
                "I KNOW.",
                { note: "She throws the cotton pad at you." },
                "I've known since you said the bartender had great forearms.",
                "Say it again when your top coat's dry. I like hearing it."
              ],
              outcome: "teased",
              after: "You say it again when the top coat's dry. Then again at the door, because she asks. She shouts \"extremely!\" down the stairwell after you, and her neighbour opens his door to see what's going on." },
            { you: "Honestly I'm offended. I've put so much work into my look and it's not working on anyone.",
              them: [
                "It's working. Just not on me.",
                "The bartender at the Wickham gave you a free drink on Saturday. He gave me nothing. I was standing right there.",
                "You lost me to the gloss, babe. Sorry. You get the bartenders. I get your concealer."
              ],
              outcome: "teased",
              after: "Saturday she drags you back to the Wickham to test it. The bartender gives you a free drink again. Nicole pays for hers, holds up the receipt, and says \"I rest my case\"." }
          ] }
      ],
      debrief: "Nicole fancied you once and now she just likes having you on her couch. Neither of those needed you to look any different."
    },
    {
      "id": "hannah-1",
      "route": "hannah",
      "gaydar": 20,
      "gaydarSays": "Nice guy. Knew my earrings were from Claire's, which was weird, but nice.",
      "title": "Coffee with Jess's friend",
      "contact": "Hannah",
      "outfits": [
        {
          "label": "Boy clothes: a polo and chinos",
          "thinks": "Polo and chinos, fine. Then his wrist did this little flick about his oat flat white and I just parked it",
          "masc": true,
          "spark": 10,
          "gaydar": -10,
          "intro": "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. You wore a navy polo and chinos and felt like you were in a costume of a straight guy. She was early. She'd already ordered."
        },
        {
          "label": "A button-up and a clear coat on your nails",
          "thinks": "clear coat and no cuticles. i look at hands for a living, he pushes them back. i don't even push mine back",
          "intro": "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, jeans, and a clear coat on your nails that nobody would notice unless they were looking. She was early. She'd already ordered.",
          "them": [
            "was that clear polish on your nails btw? i'm a physio i notice hands. it threw me a bit"
          ]
        },
        {
          "label": "A button-up, clear nails and a tiny bit of clear gloss",
          "thinks": "his lips were shinier than mine and I'd put balm on at the lights. thats a bit gay? I think it is",
          "gaydar": 5,
          "intro": "Jess set you up with her friend Hannah: 31, physio, \"very no-nonsense, you'll love her\". Sunday coffee in Teneriffe. A white button-up, a clear coat on your nails, and a little bit of clear gloss you put on in the car and nearly wiped off twice. She was early. She'd already ordered.",
          "them": [
            "also were you wearing gloss? like lip gloss? i kept looking at your mouth and not in the good way"
          ]
        }
      ],
      "thinks": [
        "he asked me questions and listened to the answers?? jess's guys just talk about their deadlift. nice. bit suss",
        "didn't try to kiss me. fine, it's coffee. one more and then i'll know"
      ],
      "them": [
        "hey thanks for coffee",
        "that was nice actually. jess's last setup talked about crypto for an hour",
        "and you asked me questions which is rare lol"
      ],
      "replies": [
        {
          "you": "Thanks for coming. I was pretty nervous, Jess talked you up a lot. Said you'd see straight through me.",
          "them": [
            "lol she says that about everyone",
            "im just busy. i work saturdays too so i dont really do dates that go nowhere",
            "also random but how did you know my earrings were from claire's"
          ],
          "replies": [
            {
              "you": "My friend Nicole has the same ones. I just notice that stuff, I guess.",
              "them": [
                "ha ok",
                "observant",
                "second date? friday? somewhere with actual food this time"
              ],
              "replies": [
                {
                  "you": "Friday sounds good. You pick, I'm easy.",
                  "them": [
                    "good. theres an italian place in paddington",
                    "dont be late. im always early and then i get cranky"
                  ]
                },
                {
                  "you": "Friday's great. Should I dress up?",
                  "them": [
                    "just don't wear flip-flops and we're fine",
                    "see you friday"
                  ]
                }
              ]
            },
            {
              "you": "Honestly I was just looking at them the whole time because they were cute. Sorry. Is that weird?",
              "them": [
                "lol no",
                "most guys arent looking at my ears",
                "friday?"
              ],
              "replies": [
                {
                  "you": "Yes. Friday. Definitely.",
                  "them": [
                    "good",
                    "paddington. 7. i'll book"
                  ]
                }
              ]
            }
          ]
        },
        {
          "you": "It was nice! The coffee was great. Do you want to do it again?",
          "them": [
            "yeah i would",
            "you're different to the guys i normally go out with. less... i dunno. less blokey? in a good way",
            "friday?"
          ],
          "replies": [
            {
              "you": "Is less blokey a good thing?",
              "them": [
                "for me yeah",
                "ive done enough guys who only talk about cricket",
                "friday. paddington. ill book"
              ]
            },
            {
              "you": "Less blokey. Wow. I'll go buy a big truck and a dog called Bear.",
              "them": [
                "lol please don't",
                "the last guy had a dog called bear. it ate my sunglasses",
                "friday. paddington. i'll book"
              ]
            },
            {
              "you": "Friday's perfect. I'm looking forward to it.",
              "them": [
                "me too",
                "night {name}"
              ]
            }
          ]
        },
        {
          "you": "Did you notice my nails? Sorry. I don't know why I'm asking that.",
          "gaydar": 30,
          "them": [
            "your nails?",
            "oh the clear stuff? yeah i noticed",
            "its fine lots of guys do that. my brother does it because he bites them",
            "do you bite them?"
          ],
          "replies": [
            {
              "you": "Yeah. Totally. That's why. I bite them.",
              "them": [
                "ha ok well it worked",
                "anyway. friday?"
              ]
            },
            {
              "you": "No, I just like how they look.",
              "gaydar": 35,
              "them": [
                "oh",
                "ok fair enough",
                "theyre nicer than mine tbh. i do mine in the car",
                "um. friday?"
              ]
            }
          ]
        }
      ],
      "after": "Hannah, to Jess: \"he's nice. really nice actually. asked me loads of questions.\" Jess: \"told you!!\" Hannah: \"he knew my earrings were from claire's though. is that a thing?\" Jess: \"...he's observant\""
    },
    {
      "route": "hannah",
      "path": "masc",
      "id": "hannah-m2",
      "title": "Second date, plain shirt",
      "contact": "Hannah",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "Plain shirt, no rings, ate all the garlic bread. Finally a normal one.",
      "intro": "Second date. The Italian place in Paddington. You wore a plain blue shirt and jeans, no rings, nothing on your nails. You took the polish off last night and it took forty minutes. Hannah's already at the table with a glass of red.",
      "them": [
        {
          "note": "She stands up and kisses you, properly, on the mouth. Then sits down like she didn't just do that."
        },
        "Hi. You look nice. Normal nice. I've had back-to-back knees all day and I just want garlic bread and a man who doesn't talk about crypto.",
        "Jess said you're into fashion or something? You don't look like you're into fashion. No offence. I like it."
      ],
      "replies": [
        {
          "you": "Jess exaggerates. I own about four shirts.",
          "them": [
            "Good. My ex owned more skincare than me. It was a whole shelf.",
            {
              "note": "She tears off a bit of garlic bread and hands it to you."
            },
            "So what do you do on weekends. Please say something outdoors."
          ],
          "replies": [
            {
              "you": "Bit of climbing. Bit of running. Bit of watching the cricket.",
              "masc": true,
              "spark": 86,
              "outcome": "kept",
              "them": [
                "Cricket. Okay. I don't care about cricket but I love that you said it.",
                {
                  "note": "Under the table her foot finds yours and stays there."
                }
              ],
              "after": "Hannah, to Jess: \"ok he's actually great\" \"he watches cricket\" \"i dont know why that made me so happy\" Jess: \"...cricket?\" Hannah: \"leave it\""
            },
            {
              "you": "Honestly? Face masks and reality TV. Don't tell anyone.",
              "spark": 62,
              "outcome": "slipped",
              "them": [
                "Oh.",
                "Which reality TV.",
                "\"Love Island, mostly. The UK one.\"",
                "Right. Okay. Jess did say."
              ],
              "after": "Hannah, to Jess: \"he does face masks\" Jess: \"is that bad\" Hannah: \"no. its just. i had him down as a cricket guy for about 40 minutes there\""
            }
          ]
        },
        {
          "you": "Into fashion? Me? I wore this shirt to my cousin's wedding.",
          "them": [
            "Ha. It shows. In a good way.",
            {
              "note": "The waiter comes over. He's got very nice forearms and an earring. You look at the menu very hard."
            },
            "You alright? You've gone a bit red."
          ],
          "replies": [
            {
              "you": "Just hungry. Get the carbonara, it's the best thing here.",
              "masc": true,
              "spark": 82,
              "outcome": "kept",
              "them": [
                "Bossy. Okay. I like bossy.",
                {
                  "note": "She orders the carbonara. She doesn't look at the waiter once."
                }
              ],
              "after": "Hannah, to Jess: \"he ordered for me\" Jess: \"is that ok?\" Hannah: \"normally no. tonight yes\""
            },
            {
              "you": "(Watch the waiter walk away.) Sorry, what were you saying?",
              "spark": 58,
              "outcome": "slipped",
              "them": [
                "I wasn't saying anything.",
                {
                  "note": "She looks at the waiter, then back at you, and puts her glass down."
                },
                "Interesting."
              ],
              "after": "Hannah, to Jess: \"he looked at the waiter's arms for a full 5 seconds\" Jess: \"maybe he was looking at the menu\" Hannah: \"the waiter didnt have the menu jess\""
            }
          ]
        }
      ],
      "debrief": "Taking the polish off for a date is a choice you get to make. So is leaving it on."
    },
    {
      "route": "hannah",
      "path": "masc",
      "id": "hannah-m3",
      "title": "Her place",
      "contact": "Hannah",
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "Six weeks in. Still haven't seen this man use moisturiser. Respect.",
      "intro": "Six weeks in. You've stayed at Hannah's three times. Tonight she's texting from work.",
      "them": [
        {
          "text": "hey. so jess asked if you're my boyfriend and i didnt know what to say",
          "if": "hannah-m2=kept"
        },
        {
          "text": "hey. random but jess asked if you're my boyfriend and i said idk. because i dont",
          "if": "hannah-m2=slipped"
        },
        "are you? do you want to be?",
        "also you left your razor here. the blue one. i put it in the drawer. that felt like something"
      ],
      "replies": [
        {
          "you": "Yeah. I want to be. Keep the razor.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "ok good",
            "boyfriend. cool. i'm going to tell jess and she's going to scream",
            "come over after. ill get thai"
          ],
          "after": "You're Hannah's boyfriend. Jess screams down the phone for about a minute. You keep your nails bare and your shirts plain and you watch the cricket with Jess's housemates at her barbecue. It's nice. It's easy."
        },
        {
          "you": "Can we keep it how it is for now?",
          "spark": 55,
          "outcome": "drift",
          "them": [
            "sure",
            "thats fine",
            {
              "note": "She doesn't text again that night."
            },
            "ok i thought about it. i dont really do 'how it is'. i'm 31. lets just be friends yeah. no offence"
          ],
          "after": "Hannah moves on fast, the way she does everything. A month later Jess shows you a photo of her with a guy called Brodie. He's holding a fish."
        },
        {
          "you": "Did you find the eye cream in the drawer too?",
          "spark": 30,
          "outcome": "drift",
          "them": [
            "the what",
            "{name}",
            "there's an eye cream in my drawer that isnt mine",
            "is it yours??",
            "lol ok. ok. so not a cricket guy then",
            "go out with a guy. you'll have way more fun than watching cricket with me. i'm keeping the eye cream"
          ],
          "after": "Hannah tells Jess everything. Jess says \"I could have told you that.\" Hannah keeps the eye cream."
        }
      ],
      "debrief": "Hannah wanted a straight answer and she got one, whichever one you gave. It only has to make sense to you."
    },
    {
      "id": "hannah-2",
      "route": "hannah",
      "gaydar": 50,
      "gaydarSays": "He asked the waitress about her skin routine. For eight minutes. I timed it.",
      "title": "Second date",
      "contact": "Hannah",
      "irl": true,
      "outfits": [
        {
          "label": "A nice shirt, two rings and a sheer nude polish",
          "thinks": "sheer nude. commit or don't babe",
          "gaydar": -5,
          "intro": "Second date. A little Italian place in Paddington. You wore a nice black shirt, two of your rings and a sheer nude polish you hoped would pass for clear. Hannah is already at the table with a glass of red, and she's ordered garlic bread for both of you.",
          "them": [
            {
              "note": "When you reach for the garlic bread she watches your nails all the way to the plate and back."
            }
          ]
        },
        {
          "label": "A nice shirt, your rings, and nude polish on your nails",
          "thinks": "my exact nude and better cuticles than me. I've got wrecked work hands and I felt like the guy at the table",
          "intro": "Second date. A little Italian place in Paddington. A nice black shirt, all four of your rings, and a nude polish on your nails, which you told yourself was basically the same as clear. It isn't. Hannah is already at the table with a glass of red.",
          "them": [
            {
              "note": "She goes to hold your hand across the table, sees the nude polish, and picks up her wine instead."
            }
          ]
        },
        {
          "label": "Shirt, rings, nude nails and a tinted lip balm",
          "thinks": "Pink balm and he looked pretty. I keep using that word about him, which is a problem if I'm meant to want to sleep with him",
          "gaydar": 5,
          "intro": "Second date. A little Italian place in Paddington. A nice black shirt, all your rings, nude polish, and a tinted lip balm that's basically a lip tint if you're honest. Hannah is already at the table with a glass of red. She looks at your mouth for a second too long when you sit down.",
          "them": [
            {
              "note": "\"Is that... tinted?\" she says, and then, \"sorry, nothing\"."
            },
            {
              "note": "She leans back in her chair. All the way back, like she's making room."
            }
          ]
        }
      ],
      "thinks": [
        "kept looking at his hands and losing the thread, and not in a hot way. in a working out how gay he is way",
        "Tiny wrists, soft hands, I'd guess zero grip strength. I like a guy who could open my jars and I shaved my legs for this lol",
        "hugged him at the car instead of kissing him and he looked relieved?? like actually relieved. am i that unfuckable or is he just gay. he's just gay"
      ],
      "them": [
        {
          "note": "She stands up to kiss you on the cheek. She glances at your hands while she does it."
        },
        "Hi. You're on time. Good. I've ordered garlic bread, I hope that's okay, I'm starving, I've had back-to-back ACLs all day.",
        {
          "note": "She sits down and looks at your hands again. Properly this time."
        },
        "Sorry, I have to ask or I'll think about it all night. Is that polish? Like actual polish?"
      ],
      "replies": [
        {
          "you": "Yeah, it's just a nude. I thought it looked clean. Is that okay? You can be honest.",
          "them": [
            "It's... fine. It looks clean, you're right.",
            "I just haven't been out with a guy who wears polish before. My ex wouldn't wear sunscreen because he said it was 'for girls'. So this is a bit of a jump.",
            {
              "note": "She takes a big sip of her wine."
            },
            "It's fine. Seriously. Tell me about your week."
          ],
          "replies": [
            {
              "you": "My week was good! I finally found a moisturiser that doesn't break me out. It's a Korean one with snail mucin. Sorry. Too much?",
              "them": [
                "Snail mucin.",
                "No, I use that one. That's weird.",
                {
                  "note": "She laughs, a small one."
                },
                "Okay. Do you play any sport? Anything?"
              ],
              "replies": [
                {
                  "you": "Not really. I do pilates sometimes. And I go to a dance class with my friend Dani. It's mostly Beyoncé.",
                  "gaydar": 55,
                  "them": [
                    "Mostly Beyoncé.",
                    "Okay. Cool. That's... cool.",
                    {
                      "note": "She checks her phone. Just for a second."
                    },
                    "Sorry. Work. Keep going."
                  ]
                },
                {
                  "you": "I played soccer in high school. I was terrible. I mostly hid on the wing and talked to the other team.",
                  "them": [
                    "Ha. That's cute.",
                    "My brothers all played. Christmas is just them tackling each other in the backyard.",
                    "You'd hate it."
                  ]
                }
              ]
            },
            {
              "you": "My week was fine. Work stuff. Can we talk about you though? How were the ACLs?",
              "them": [
                "Oh my god, thank you. Nobody ever asks about the ACLs.",
                "Okay so the first one was a netballer, and she'd done it at Nissan Arena, and the whole team came to the appointment...",
                {
                  "note": "She talks for ten minutes. She's funny. Twice you catch yourself looking at the waiter's forearms."
                }
              ]
            }
          ]
        },
        {
          "you": "It is. Are you going to assess it? Is this a consult now?",
          "them": [
            "Ha. I do knees.",
            "Your hands are nicer than mine though, which is annoying.",
            {
              "note": "She laughs, then stops a bit too quickly and picks up the menu."
            },
            "Garlic bread. Eat. I'm not watching you pick at it."
          ],
          "replies": [
            {
              "you": "You can say that to me any time. I'll take it.",
              "them": [
                "I'm sure you will.",
                {
                  "note": "She says it into the menu."
                },
                "So. Pasta. I'm getting the carbonara and I'm not sharing."
              ]
            },
            {
              "you": "Sorry. That was a bit much. I'm nervous.",
              "them": [
                "You're fine. Order something."
              ]
            }
          ]
        },
        {
          "you": "It is polish. Do you hate it? I can take it off for next time.",
          "them": [
            "No, don't take it off for me.",
            "I'm just trying to work out what it means. Is that bad? I'm 31, I don't have time to work stuff out on dates.",
            "Like what am I getting here."
          ],
          "replies": [
            {
              "you": "You're getting a guy who likes his nails done. That's it. Nothing to work out.",
              "them": [
                "Okay.",
                "Okay, fair. Sorry. Garlic bread?",
                {
                  "note": "She pushes the plate towards you and doesn't look at your hands again all night."
                }
              ]
            },
            {
              "you": "I don't know what you mean. It's just polish.",
              "them": [
                "Right. Yeah.",
                "Sorry, ignore me, I'm tired."
              ]
            },
            {
              "you": "You're getting a guy who'll never steal your hoodies. I'll steal your hand cream though.",
              "them": [
                "Ha.",
                "My last boyfriend stole three hoodies and never gave one back.",
                {
                  "note": "She looks at your hands, then at hers, then puts hers in her lap."
                }
              ]
            }
          ]
        },
        {
          "you": "Oh my god, you noticed! It's this brand called Essie, it's called 'Ballet Slippers', it's literally the perfect nude. You'd love it.",
          "gaydar": 60,
          "them": [
            {
              "note": "She looks at you. She looks at your nails. She looks at you again."
            },
            "I have that exact one. It's in my bathroom.",
            "Okay. Wow.",
            "Can you pass the garlic bread."
          ],
          "replies": [
            {
              "you": "What? Did I say something weird?",
              "them": [
                "No. It's fine.",
                "I just thought tonight we'd talk about me a bit more than nail polish lol. Tell me about your work."
              ]
            },
            {
              "you": "Sorry, I get excited about this stuff. I'll stop. Tell me about your day.",
              "them": [
                "It's okay. It's sort of cute.",
                "Like, a friend's little brother is cute. You know.",
                "Anyway. ACLs."
              ]
            }
          ]
        }
      ],
      "after": "Walking her to her car, she hugs you instead of kissing you. In the car she texts Jess: \"second date was nice. hes lovely\" \"he talked to the waitress about her skin for like 8 minutes\" \"he had nail polish on jess\" Jess: \"oh\" Hannah: \"yeah\""
    },
    {
      "id": "hannah-run",
      "route": "hannah",
      "title": "Run club",
      "contact": "Hannah",
      "irl": true,
      "gaydar": 58,
      "spark": 38,
      "gaydarSays": "Turned up to run club in a matching pastel set. My physio friends haven't stopped talking about it.",
      "intro": "Saturday, 6am. Hannah's physio run club, round New Farm Park. You bought a matching pastel set for it: lilac shorts, a lilac zip-up. It felt sporty in the shop. Hannah's in old black shorts and a tee from a fun run in 2019.",
      "thinks": [
        "matching lilac set at 6am. ok. at least i know i'm not sleeping with him, that's one less thing to stress about",
        "he was checking out the guys stretching on the grass. i know because i was too lol. same guys. we have the same taste in hamstrings, great",
        "He runs up on his toes and his hips do a thing. I watch gait all day. idk, I'm not writing it up, I'm just saying"
      ],
      "them": [
        {
          "note": "Hannah looks at you from your lilac zip-up down to your white sneakers. Her friend Nat says \"oh, cute\" before Hannah can say anything."
        },
        {
          "note": "Hannah's eyes go from your lilac set to the guys stretching in old rugby shorts, then back to you. She doesn't smile."
        },
        "You look like you're about to film a workout video.",
        "That's not a compliment. It's 6am. Nobody's filming."
      ],
      "replies": [
        {
          "you": "It was on sale. I'll keep up, don't worry.",
          "them": [
            {
              "note": "You don't keep up. By the second lap you're at the back with Nat, who's walking."
            },
            "\"He's lovely,\" Nat says to Hannah at the end. \"Can I borrow him for shopping?\"",
            "You can have him for shopping. I'll keep him for... I don't know what for, actually."
          ],
          "replies": [
            {
              "you": "For carrying your water bottle, obviously.",
              "spark": 40,
              "them": [
                "Ha. Yeah. You're very good at holding things.",
                {
                  "note": "She pats your arm twice, the way she pats patients off the table."
                }
              ],
              "after": "Hannah, to Jess: \"he came to run club in a lilac set\" Jess: \"stop\" Hannah: \"nat wants to take him shopping. i dont want to kiss him at 6am. those might be related\""
            },
            {
              "you": "Shopping sounds great, actually. Nat, when are you free?",
              "spark": 28,
              "them": [
                "\"Thursday!\" Nat says.",
                "Okay. Great. You two go. I'll do something sporty."
              ],
              "after": "Hannah, to Jess: \"my date made shopping plans with my friend AT my run club\" Jess: \"lol\" Hannah: \"jess. i'm the one who's meant to be dating him\""
            }
          ]
        },
        {
          "you": "Sorry. I'll just go home.",
          "them": [
            "Don't be dramatic. You're here now.",
            {
              "note": "She runs next to you the whole way, slow, which she hates. Every guy who runs past looks at your shorts."
            },
            "Okay. The shorts are a bit much. They're a bit... girl."
          ],
          "replies": [
            {
              "you": "They're unisex.",
              "spark": 42,
              "them": [
                "Nothing lilac is unisex, {name}.",
                {
                  "note": "She laughs, which helps, and then stops laughing, which doesn't."
                }
              ],
              "after": "Hannah, to Jess: \"he said his lilac shorts were unisex\" Jess: \"are they\" Hannah: \"there was a little bow on the zip jess\""
            },
            {
              "you": "Yeah. I know. I liked them.",
              "spark": 34,
              "them": [
                "I know you did. That's the bit I'm stuck on.",
                {
                  "note": "She bumps you with her shoulder like you're one of the run club girls."
                }
              ],
              "after": "Hannah, to Jess: \"he admitted he liked the girl shorts\" Jess: \"aw\" Hannah: \"yeah aw. not exactly hot though is it\""
            }
          ]
        }
      ],
      "debrief": "Wearing what you like to something sporty is fine. Running slowly is also fine."
    },
    {
      "id": "c5",
      "route": "hannah",
      "title": "Two truths",
      "contact": "Hannah",
      "irl": true,
      "gaydar": 85,
      "gaydarSays": "Nobody at the table even had to think about it. I'm sorry but nobody did.",
      "intro": "Third date, sort of. Hannah's having drinks with Kate and two of the girls from her clinic at a wine bar in New Farm, and she said come, meet them. You wore a pink knit, a berry lip tint, mascara, your rings and fresh nails. On the way in you asked the bartender where his jacket was from. Acne Studios. Hannah heard. Nat from run club is here, and a physio who does hands. Two bottles in, Kate decides you're all playing two truths and a lie.",
      "outfits": [
        {
          "label": "A navy tee, jeans, rings, nude nails, lip tint and a bit of mascara",
          "thinks": "navy tee so he'd look normal and then mascara. no-makeup makeup, done better than i do it",
          "gaydar": -8,
          "intro": "Third date, sort of. Hannah's having drinks with Kate and two of the girls from her clinic at a wine bar in New Farm, and she said come, meet them. You kept it simple: a navy tee, jeans, your rings, your nude nails, a berry lip tint and a bit of mascara you nearly didn't do. On the way in you asked the bartender where his jacket was from. Acne Studios. Hannah heard. Nat from run club is here, and a physio who does hands. Two bottles in, Kate decides you're all playing two truths and a lie.",
          "them": [
            {
              "note": "Hannah hugs you hello the way she hugs Kate. Quick, side-on."
            }
          ]
        },
        {
          "label": "Pink knit, lip tint, mascara, rings, fresh nails",
          "thinks": "he looked lovely in the pink knit and lovely is not what i want from a guy i'm meant to be sleeping with",
          "them": [
            {
              "note": "Hannah sees the pink knit and her smile drops for a second before she puts it back. Kate sees it drop."
            }
          ]
        },
        {
          "label": "Pink knit, lip tint, mascara, rings, pearls and little heeled boots",
          "thinks": "pearls and heeled boots with all my girls there. kate looked at me, i looked at kate. yep",
          "gaydar": 5,
          "intro": "Third date, sort of. Hannah's having drinks with Kate and two of the girls from her clinic at a wine bar in New Farm, and she said come, meet them. A pink knit, a berry lip tint, mascara, your rings, fresh nails, a string of pearls and the little heeled ankle boots that make you taller than her. On the way in you asked the bartender where his jacket was from. Acne Studios. Hannah heard. Nat from run club is here, and a physio who does hands. Two bottles in, Kate decides you're all playing two truths and a lie.",
          "them": [
            {
              "note": "Kate looks at the pearls, then at Hannah, and mouths \"pearls\" across the table."
            },
            {
              "note": "Hannah doesn't kiss you hello. She pulls a chair out for you, like you're one of the girls."
            }
          ]
        }
      ],
      "debrief": "Getting read by a whole table at once is a lot. You got through it, and once it landed, those girls were on your side.",
      "thinks": [
        "he asked the bartender where his jacket was from then said Acne Studios before the guy even finished. he already knew",
        "Everyone knew which one was the lie. Kate didn't even pretend to think. I've known since the polish and I kept going on dates anyway, I'm an idiot",
        "I don't even feel bad about not fancying him anymore. I just feel like I wasted my Fridays. And a wax"
      ],
      "them": [
        {
          "note": "Kate's sorted the rules already. Two truths and a lie, everyone votes at once, and whoever gets caught drinks."
        },
        {
          "from": "Kate",
          "text": "Okay, me first. I've been to Bali four times. I've never had a filling. I once kissed one of Dylan's friends at a christening."
        },
        {
          "from": "Nat",
          "text": "Filling. You had one in March, you cried in my car."
        },
        {
          "from": "Kate",
          "text": "Oh my god. Fine. Drink."
        },
        {
          "note": "Nat gets caught straight away too. The physio who does hands gets away with hers and looks smug about it. Then everyone looks at you."
        },
        "Okay, your go. No because make it hard, Kate's like, a professional at this.",
        {
          "from": "Kate",
          "text": "I am. Go."
        }
      ],
      "replies": [
        {
          "you": "Okay. I've never broken a bone. I've been to Paris. I'm straight.",
          "them": [
            {
              "note": "Nobody waits. Kate's hand goes up first, then Nat's, then the hands physio's, still holding her glass."
            },
            {
              "from": "Kate",
              "text": "Straight."
            },
            {
              "from": "Nat",
              "text": "Straight. Sorry, babe."
            },
            {
              "note": "You look at Hannah."
            },
            "Yeah. It's the straight one.",
            "Sorry. I'm not going to sit here and pretend. It's my vote too."
          ],
          "replies": [
            {
              "you": "Wrong. You all drink. The lie was Paris, I've never been.",
              "them": [
                {
                  "from": "Kate",
                  "text": "Wait. He's actually saying it's true."
                },
                {
                  "note": "Kate puts her glass down. The hands physio looks at her coaster."
                },
                "Okay.",
                "No because... okay. Fine. Kate, drink.",
                {
                  "from": "Kate",
                  "text": "I'm not drinking for that."
                },
                {
                  "note": "Hannah drinks anyway. Then she gets her phone out and looks at it under the table."
                }
              ],
              "replies": [
                {
                  "you": "I am, Han. I don't know why that's so hard to believe.",
                  "gaydar": 87,
                  "spark": 12,
                  "them": [
                    "It's not hard. That's sort of the problem.",
                    "I'm sorry, I did two years of pretending with a guy once. I'm not doing it again at a wine bar in front of Nat.",
                    {
                      "from": "Nat",
                      "text": "Leave me out of it."
                    },
                    {
                      "note": "Kate starts talking about her housewarming. Nobody looks at you for a while. When the bill comes Hannah splits it five ways, to the cent."
                    }
                  ],
                  "after": "Later, Hannah, in a group chat with Kate: \"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\" Kate: \"he said straight was a truth\" Hannah: \"i know kate i was there\"",
                  "outcome": "dodged"
                },
                {
                  "you": "Okay! Kate, your go again.",
                  "gaydar": 88,
                  "spark": 8,
                  "them": [
                    {
                      "from": "Kate",
                      "text": "No no. You're out. Next."
                    },
                    {
                      "from": "Hands physio",
                      "text": "Can I do one? Two truths and a lie. I've done a marathon. I can't whistle. I once dated a straight guy who wore lip tint."
                    },
                    {
                      "from": "Kate",
                      "text": "Lie. Obviously the lie."
                    },
                    {
                      "note": "The table cracks up. Hannah laughs too, into her glass, and then stops and looks at you, and then laughs again a bit."
                    }
                  ],
                  "after": "Hannah, to Kate, in the car park: \"you didnt have to do the lip tint one\" Kate: \"that was her not me\" Hannah: \"you laughed the loudest\" Kate: \"so did you han\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Wow. Unanimous. Fine. FINE. I'll drink.",
              "them": [
                {
                  "note": "You drink. The whole glass. Kate screams so loud the bartender looks over."
                },
                {
                  "from": "Kate",
                  "text": "He drank! He DRANK."
                },
                {
                  "from": "Nat",
                  "text": "That's a confession, that's like legally a confession."
                },
                "No because nobody even made him. He didn't have to drink.",
                "{name}. Did you just drink to that."
              ],
              "replies": [
                {
                  "you": "I did. You got it. It's the straight one. I'm gay.",
                  "gaydar": 100,
                  "spark": 4,
                  "them": [
                    {
                      "note": "Kate grabs your arm across the table."
                    },
                    {
                      "from": "Kate",
                      "text": "Oh my GOD. Okay. Hi. Hi, new friend."
                    },
                    "Okay.",
                    "I'm sorry, I knew at the coffee. With the Claire's earrings. I said it to Jess and she said he's just observant.",
                    {
                      "note": "She laughs, properly, the first time tonight, and pushes the bottle across to you."
                    },
                    "Have another one. You're not driving and I'm not, like, having you on my conscience. Nat, you can take him shopping now. I said you could."
                  ],
                  "after": "Hannah, to Kate, at midnight: \"he just SAID it\" Kate: \"i know i was there\" Hannah: \"i feel weird\" Kate: \"good weird?\" Hannah: \"i dont know. relieved weird. also i fancied a gay guy for three dates and my calves hurt\"",
                  "outcome": "told"
                },
                {
                  "you": "I drank because I'm thirsty. Next question.",
                  "gaydar": 95,
                  "spark": 6,
                  "them": [
                    {
                      "from": "Nat",
                      "text": "He's thirsty."
                    },
                    {
                      "note": "The hands physio puts her head down on the table."
                    },
                    "Okay, I'm not touching that. Kate. Go again. I can't look at him.",
                    {
                      "from": "Kate",
                      "text": "Two truths and a lie. Hannah's date is thirsty. Hannah's date is..."
                    },
                    "Kate.",
                    {
                      "note": "For the rest of the night Kate calls you \"thirsty\" and Hannah doesn't tell her to stop."
                    }
                  ],
                  "after": "Kate, to Hannah, later: \"he's actually so funny\" Hannah: \"i know\" Kate: \"like i'd go out with him\" Hannah: \"no you wouldnt\" Kate: \"no i wouldnt lol\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "...Is it that obvious?",
              "them": [
                {
                  "note": "The table goes soft for a second. Nat says \"aw\" into her glass."
                },
                "Kind of? Yeah. Sorry. Like physically, you're...",
                {
                  "note": "She does a little wave at all of you, from your hair down to your hands."
                },
                {
                  "from": "Kate",
                  "text": "Wait."
                },
                {
                  "from": "Kate",
                  "text": "Wait, does Jess know?"
                },
                {
                  "note": "Nobody says anything. The hands physio looks at her coaster. Hannah looks at Kate like she'd like to kick her under the table, and then at you."
                }
              ],
              "replies": [
                {
                  "you": "(Your eyes go hot. You can't stop it. You start crying.)",
                  "them": [
                    {
                      "note": "It comes up out of nowhere. One breath, and then you're crying at a wine bar in New Farm with your rings on and four women looking at you."
                    },
                    {
                      "note": "Nat's round the table before Hannah's even moved. She crouches by your stool and puts her hand flat between your shoulder blades."
                    },
                    {
                      "from": "Nat",
                      "text": "Okay. Okay, babe. Breathe out longer than you breathe in. I do this with post-op knees all day, you're fine."
                    },
                    {
                      "from": "Kate",
                      "text": "Oh my god. Oh my god, I'm so sorry. I'm an idiot. I didn't mean it like that."
                    },
                    "Kate. Water.",
                    {
                      "note": "Kate goes. Hannah moves her stool round so her knee's against yours. She takes your hand off your glass and holds it in her lap and doesn't let go."
                    },
                    "No, I'm sorry. I should've just asked you myself, in the car or something. I'm so bad at this."
                  ],
                  "replies": [
                    {
                      "you": "(Laugh, wet.) I'm fine. I'm so embarrassing.",
                      "gaydar": 97,
                      "spark": 2,
                      "them": [
                        "You're not. Like, you're a bit embarrassing, but not about this.",
                        {
                          "from": "Nat",
                          "text": "I cried at a car ad on Tuesday. In the clinic. In front of a patient."
                        },
                        {
                          "note": "Kate comes back with water and a second glass of the rosé and a little bowl of olives nobody ordered."
                        },
                        {
                          "from": "Kate",
                          "text": "Okay. You're coming to my housewarming. It's a white carpet and it's shoes off and you're going to love it. Give me your phone."
                        },
                        {
                          "note": "She puts her number in as \"Kate 💗 (Han's)\". Nat sits back down next to you instead of across."
                        }
                      ],
                      "after": "Hannah, to Kate, from the car: \"i feel so bad\" Kate: \"i feel worse i said the jess thing\" Hannah: \"yeah you did\" Kate: \"he's so sweet han\" Hannah: \"i know. i'm not dating him though. obviously\" Kate: \"obviously. he's coming saturday though\"",
                      "outcome": "cried"
                    },
                    {
                      "you": "Nobody knows. I haven't said it out loud. Ever.",
                      "gaydar": 98,
                      "spark": 2,
                      "them": [
                        "Okay. Then you don't have to. Definitely not at a wine bar because Kate asked.",
                        {
                          "from": "Kate",
                          "text": "Not for me. God. Sorry."
                        },
                        "Like, I'm not going to make you say a word into a candle.",
                        {
                          "note": "She keeps her knee against yours. The hands physio gives you her cardigan, because you're shivering, and it's too small and it's lilac and you put it on anyway."
                        },
                        {
                          "from": "Nat",
                          "text": "That's actually your colour."
                        },
                        "It is. That's so annoying."
                      ],
                      "after": "Later, Hannah, to Nat: \"is he ok\" Nat: \"he's fine. he's in kate's uber. they're singing\" Hannah: \"singing what\" Nat: \"abba i think. he still has the cardigan\"",
                      "outcome": "cried"
                    },
                    {
                      "you": "(Squeeze her hand.) I'm gay. Sorry. I'm gay.",
                      "gaydar": 100,
                      "spark": 0,
                      "them": [
                        "Don't say sorry. Oh my god. Don't you dare.",
                        {
                          "note": "Kate's back. She puts the water down and kisses the top of your head without asking."
                        },
                        {
                          "from": "Kate",
                          "text": "Welcome. Oh my god. You'll love it. Sorry. I don't know what I'm saying. You'll love it though."
                        },
                        "Honestly I'm relieved. Is that bad? I thought I was going crazy for three dates.",
                        {
                          "from": "Nat",
                          "text": "You weren't."
                        },
                        "I know I wasn't, Nat.",
                        {
                          "note": "Hannah orders another bottle and puts her arm round you while she does it, the way she'd put it round Kate."
                        }
                      ],
                      "after": "Hannah, to Kate, at 1am: \"he said it\" Kate: \"i was there babe\" Hannah: \"i know. i just wanted to type it\" Kate: \"he's coming to my housewarming\" Hannah: \"i know. he asked what he should bring. he said a candle\"",
                      "outcome": "broke"
                    }
                  ],
                  "thinks": [
                    "His mascara went everywhere and Nat fixed it with a napkin the way she does mine. He just sat there and let her. Yeah he's gay",
                    "held his hand under the table after. soft little hand, no grip, felt nothing. honestly so glad we never slept together, that would've made tonight so much worse"
                  ]
                },
                {
                  "you": "(Stand up.) I'm just going to go to the bathroom.",
                  "them": [
                    {
                      "note": "You stand in the bathroom for a long time and read the poster about a jazz night. When you come back out the bill's paid and Kate's got her coat on."
                    },
                    "I paid. Don't argue, it's already gone through.",
                    {
                      "from": "Kate",
                      "text": "I'm sorry about the Jess thing. That was so stupid of me."
                    },
                    "Kate's sorry. We're all sorry. Are you okay?"
                  ],
                  "replies": [
                    {
                      "you": "I'm fine. I'm going to head home.",
                      "gaydar": 90,
                      "spark": 5,
                      "them": [
                        "Okay. Text me when you're in.",
                        {
                          "note": "She hugs you outside, quick, and gets in Nat's car."
                        }
                      ],
                      "after": "You get home and she's already texted: \"home?\" You say yes. She sends a thumbs up, and then: \"you can tell jess whenever. i wont. kate might, sorry in advance\"",
                      "outcome": "dodged"
                    },
                    {
                      "you": "Can we stay for one more? I don't want it to end on the bathroom.",
                      "gaydar": 93,
                      "spark": 3,
                      "them": [
                        "Yes. Oh my god. Sit.",
                        {
                          "from": "Kate",
                          "text": "I'll get it. I owe you one. I owe you like four."
                        },
                        {
                          "note": "Kate takes her coat back off. Nobody plays the game again. Nat asks you about the boots, or the knit, and you talk about it for twenty minutes and Hannah just lets it happen."
                        }
                      ],
                      "after": "Hannah, to Kate, after: \"that was nice in the end\" Kate: \"it was so nice. i love him\" Hannah: \"you love everyone\" Kate: \"i love him more than your last one\"",
                      "outcome": "dodged"
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "you": "I'm straight. I'm straight. And I'm straight.",
          "them": [
            {
              "from": "Kate",
              "text": "Two truths and a LIE, {name}. Not three."
            },
            {
              "from": "Nat",
              "text": "All three. All three are the lie."
            },
            {
              "note": "The hands physio just points at you with a chip."
            },
            "Yeah. All three.",
            "Sorry. It's funny, but yeah."
          ],
          "replies": [
            {
              "you": "Rude! One of them was true.",
              "them": [
                "Which one.",
                {
                  "note": "Everyone leans in. Kate's actually holding her breath."
                }
              ],
              "replies": [
                {
                  "you": "...The middle one.",
                  "gaydar": 92,
                  "spark": 6,
                  "them": [
                    {
                      "from": "Kate",
                      "text": "The middle one."
                    },
                    "The middle one's the same as the other two.",
                    "I can't. I'm out. I'm getting chips.",
                    {
                      "note": "She gets chips. Nat makes you explain which bit of the middle one is true. You can't. The hands physio is crying."
                    }
                  ],
                  "after": "Kate, in the group chat: \"'the middle one'\" Nat: \"im still thinking about it\" Hannah: \"can we not\" Kate: \"he's so funny though\" Hannah: \"yes kate he's very funny\"",
                  "outcome": "dodged"
                },
                {
                  "you": "None of them. Okay? None of them. That's my turn.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    {
                      "note": "Kate puts both hands over her mouth. Nat says \"oh, babe\" and reaches for your hand on the table."
                    },
                    "Okay.",
                    "Okay, that's... okay. Thank you. I'm sorry but I've been sitting on that since the coffee.",
                    {
                      "from": "Kate",
                      "text": "You did it as a BIT. Oh my god I love you."
                    },
                    "Kate, calm down. Get him a drink.",
                    {
                      "note": "Hannah's hand is on your back, just resting there, the whole time Kate's at the bar."
                    }
                  ],
                  "after": "Hannah, to Kate, later: \"he did it as a bit\" Kate: \"best coming out ive ever seen\" Hannah: \"how many have you seen\" Kate: \"two. his was better\"",
                  "outcome": "told"
                }
              ]
            },
            {
              "you": "Okay, that was a joke. Obviously I'm straight.",
              "them": [
                {
                  "from": "Kate",
                  "text": "Obviously."
                },
                {
                  "note": "Nat snorts into her wine. The hands physio tries to turn it into a cough."
                },
                "{name}. You just did a bit about it. You don't do a bit about a thing that's not a thing."
              ],
              "replies": [
                {
                  "you": "It was a joke, Han.",
                  "gaydar": 89,
                  "spark": 9,
                  "them": [
                    "Okay.",
                    {
                      "note": "She doesn't look at you for a bit. Kate fills everyone's glass but yours, then sees, then fills yours."
                    },
                    "I just. I'm sorry but I'm 31. I don't have the energy to play a game inside a game.",
                    {
                      "from": "Nat",
                      "text": "Two truths and a lie. Hannah's tired. Hannah's tired. Hannah wants chips."
                    },
                    "All true."
                  ],
                  "after": "Later, Hannah, in a group chat with Kate: \"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\" Kate: \"and he did a bit about being straight\" Hannah: \"three times\"",
                  "outcome": "dodged"
                },
                {
                  "you": "Fine. I'm going to get us another bottle.",
                  "gaydar": 92,
                  "spark": 7,
                  "them": [
                    {
                      "note": "You go to the bar. The bartender in the jacket asks what you're after and you end up talking for ten minutes about where he got it, and whether it comes in a colour, and whether it'd come up big."
                    },
                    {
                      "note": "When you come back with the bottle all four of them are watching you."
                    },
                    {
                      "from": "Kate",
                      "text": "Did you ask about the jacket again?"
                    },
                    "He did. I watched him."
                  ],
                  "after": "Kate, in the group chat: \"two truths and a lie. he's straight. he went to get wine. he asked the bartender if the jacket comes in pink\" Hannah: \"it was cream. he asked about cream\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "hannah-feet",
      "route": "hannah",
      "gaydar": 92,
      "gaydarSays": "Dylan keeps saying your feet are nicer than mine. They are, which is so annoying.",
      "title": "White carpet",
      "contact": "Hannah",
      "irl": true,
      "intro": "Kate's housewarming in Paddington. Since the wine bar nobody's calling it dating, but Hannah still said come, so you came. Kate's Hannah's best friend from uni and she's got a brand new white carpet. There's a sign taped to the door: SHOES OFF. YES YOU. On Sunday Dani painted your toes a pale pink called Ballet Slippers, and you left it on because nobody was going to see.",
      "thinks": [
        "didn't know feet could look gay. his do. arches right up off kate's carpet",
        "dylan's a size thirteen with awful jokes and i'd go home with him tonight, which is annoying. eleven times he's asked",
        "{name} kept checking if Dylan was looking at his toes. Dylan was. Kate saw it too and did the eyebrows at me"
      ],
      "them": [
        {
          "note": "There's a pile of shoes in the hallway. Hannah kicks off her sneakers and waits for you."
        },
        "Come on. Kate will actually kill you.",
        {
          "note": "You undo your laces as slowly as you can. Then your socks. Hannah looks down."
        },
        "Oh. Okay. They're pink.",
        {
          "note": "She steps away from you in the hallway so it doesn't look like you came together."
        },
        "Your feet are tiny. Like, actually tiny. What are you, a six?",
        {
          "note": "A big guy in the hallway looks down too. Barefoot, beer in hand. He grins."
        },
        "\"Dylan. Kate's brother.\" He looks at your toes, then at Hannah. \"This is the guy from the wine bar? Han. Come on.\"",
        "He's been asking me out since uni. Ignore him.",
        "\"Eleven times,\" Dylan says. \"Guess my odds just went up though.\"",
        {
          "note": "Kate squeezes your arm on her way past. \"Proud of you,\" she says, quietly, like it's nothing. Dylan doesn't hear.",
          "if": "c5=told|broke"
        },
        {
          "note": "Kate puts a cider in your hand without asking. \"No crying on the white carpet,\" she says. \"Joking. Kind of.\" She's checking your face while she says it.",
          "if": "c5=cried"
        },
        {
          "text": "And before you start, Dylan, no. He's still saying he's straight. Like, still.",
          "if": "c5=dodged"
        }
      ],
      "replies": [
        {
          "you": "(Curl your toes into the carpet.) Thanks. It was a bet. I lost a bet.",
          "them": [
            "\"Yeah? Who with?\" Dylan says.",
            {
              "note": "You don't have an answer. Hannah looks at you."
            },
            "It wasn't a bet. Dani put it on her story. 'Pedi day with my bestie.'",
            "\"Pedi day. With his bestie,\" Dylan says, delighted. He puts a hand on Hannah's back and steers her towards the kitchen. \"Come get a drink, Han. Your bestie can come too.\""
          ],
          "replies": [
            {
              "you": "(Follow them to the kitchen.)",
              "them": [
                {
                  "note": "Dylan opens Hannah's cider on the edge of the bench. Then he opens yours too and hands it to you. \"Didn't want you breaking a nail,\" he says."
                },
                {
                  "note": "Every time you move, your pink toes are right there on Kate's white tiles. Kate's housemate looks at them, then at Hannah."
                },
                "\"Han,\" the housemate says, very quietly. \"Is he...\"",
                "Yeah. I mean, yeah. We're not really... it's fine.",
                "I sort of can't picture kissing him anymore.",
                {
                  "note": "Hannah's watching Dylan cut limes."
                }
              ]
            },
            {
              "you": "(Stay in the hallway and look at your feet.)",
              "them": [
                {
                  "note": "You stand on the cold floorboards by the shoe pile for a whole song. Through the doorway you can see Dylan making Hannah laugh. She's got her hand on his arm."
                },
                {
                  "note": "Kate walks past and says \"oh my god, cute toes\" without stopping."
                }
              ]
            }
          ]
        },
        {
          "you": "It's Ballet Slippers. Essie. Dani did them.",
          "gaydar": 96,
          "them": [
            "\"Essie,\" Dylan says, to nobody, delighted. \"Han. He knows the brand.\"",
            "Kate, from the lounge: \"Wait, is that Ballet Slippers? Show me!\"",
            {
              "note": "A minute later you're on the white couch with three of Kate's friends, comparing feet. Someone's got her foot on your knee. Out on the balcony Dylan's got Hannah laughing."
            },
            "Hannah, when she finally comes back in: \"You've been on that couch talking about feet for half an hour.\"",
            "\"Dylan seems nice,\" you say.",
            "\"Yeah,\" she says. \"He's alright.\""
          ]
        },
        {
          "you": "(Stand up straight.) She's here with me, man.",
          "them": [
            "\"Course she is, buddy.\" He looks down at your toes and back up and just smiles.",
            {
              "note": "Hannah bites her lip."
            },
            "\"Love the confidence,\" Dylan says, and pats your cheek. \"Go grab a drink, man. Grown-ups are talking.\""
          ],
          "replies": [
            {
              "you": "(Go and grab a drink.)",
              "them": [
                {
                  "note": "When you get back Dylan's in your spot on the couch next to Hannah, with his big bare feet up on the coffee table. She hasn't moved over."
                },
                "Sit on the floor, it's fine. Kate's friends are down there. You'll fit in."
              ]
            },
            {
              "you": "...Your feet are huge.",
              "gaydar": 98,
              "them": [
                "\"Size thirteen,\" Dylan says. \"Not a drop of polish on 'em.\"",
                "{name}. Why are you looking at his feet?",
                {
                  "note": "You go red. Dylan laughs, properly, and puts his arm round Hannah. She lets him."
                }
              ]
            }
          ]
        }
      ],
      "after": "Hannah, to Kate, at 1am: \"did you see his toes\" Kate: \"everyone saw his toes lol. dylan hasnt shut up about them\" Hannah: \"what did he say\" Kate: \"'han's wine bar guy has nicer feet than han'. then he asked if you're free friday\"",
      "debrief": "Having your toes on show before you were ready is a lot. You still picked the colour."
    },
    {
      "id": "hannah-tickle",
      "route": "hannah",
      "gaydar": 94,
      "irl": true,
      "title": "Movie night",
      "contact": "Hannah",
      "gaydarSays": "Dylan had {name}'s foot in a headlock in front of Kate's whole lounge room. I'm still not over it.",
      "intro": "A week after the housewarming. Kate's having people over to watch a movie on the white carpet, and Hannah said come, so you came. SHOES OFF. YES YOU. is still on the door. Your toes are still Ballet Slippers pink. Dylan's on the couch. He's taken the whole middle of it.",
      "thinks": [
        "kept the pink a whole week. probably wore it to the gym",
        "I was watching his face, not his foot, the whole time Dylan had him. Dylan's leg was right against mine and I didn't move it",
        "ok i'm done trying, he's gay. dylan smells really good though. dylan's been texting me since tuesday"
      ],
      "them": [
        {
          "note": "You leave your shoes in the pile. Hannah looks at your toes, then at you, then sighs through her nose and goes to get a drink."
        },
        "\"Pink's back,\" Dylan says from the couch. \"Han, he kept it. For a whole week.\"",
        "He can do what he wants with his feet, Dylan.",
        "They're not even big enough to be in the way. Look at them.",
        "\"I'm not stopping him. I'm a fan.\" He pats the couch next to him. \"Sit down, buddy. Best seat. Han, you're on the other side.\"",
        {
          "note": "There's nowhere else to sit. You sit on the end of the couch with your knees up. Hannah sits on Dylan's other side. Kate turns the lights off and the movie starts."
        },
        {
          "note": "Twenty minutes in, your feet are on the cushion between you and Dylan. You don't notice until his hand closes round your ankle."
        },
        "\"Han,\" he says, not quietly. \"Hey. Han. Bet you ten bucks he's ticklish.\"",
        "Dylan. We're watching a movie.",
        "\"Kate's seen it. Ten bucks.\"",
        {
          "note": "Kate pauses the movie. She doesn't even pretend she isn't going to watch. Dylan's thumb is resting on the arch of your foot."
        },
        "\"Ready, champ?\" he says, and starts."
      ],
      "replies": [
        {
          "you": "(Don't react. Look at the TV. Breathe through your nose.)",
          "them": [
            {
              "note": "You stare at the paused frame on the TV. A woman in a raincoat. You stare at the raincoat."
            },
            {
              "note": "Dylan runs his thumb slowly down your sole, heel to toes. Your foot jerks. You keep your face still."
            },
            "\"Ooh. He's tough. Han, he's being tough.\"",
            "Dylan, he obviously doesn't want you to.",
            "\"He hasn't said that.\" He looks at you. \"You said that, buddy?\"",
            {
              "note": "You can't open your mouth. If you open your mouth it's over. You shake your head a tiny bit and stare at the raincoat."
            },
            {
              "note": "He switches to his fingertips, right under your toes, fast and light. Kate makes a noise into her wine glass. The pink toes curl so hard they go white."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it. Hold it.)",
              "them": [
                {
                  "note": "You hold it. Your jaw aches. Your eyes water. You don't make a sound."
                },
                {
                  "note": "Dylan keeps going for what feels like a full minute. Then he digs in under your toes one last time, and you still don't make a sound."
                },
                "\"Huh,\" Dylan says, and lets go. He sounds a bit disappointed. \"Okay. Respect.\"",
                "Pay up.",
                "\"We never shook on it.\"",
                "Pay. Up. Dylan."
              ],
              "replies": [
                {
                  "you": "(Calmly take your foot back and move closer to Hannah.) Can you press play, Kate?",
                  "outcome": "held",
                  "spark": 22,
                  "them": [
                    {
                      "note": "You get up, step over Dylan's legs, and sit down on Hannah's other side. She shifts over to make room. Her shoulder touches yours."
                    },
                    "Okay. That was actually impressive.",
                    "I'd have kicked him in the face.",
                    "\"She did once,\" Dylan says. \"At uni.\"",
                    {
                      "note": "Kate presses play. Twenty minutes later Hannah's leaning on you a bit. Dylan watches the movie with his arms folded, a bit quieter than before."
                    }
                  ],
                  "after": "Hannah, to Kate, in the kitchen after: \"he didn't even laugh\" Kate: \"dylan's so annoyed\" Hannah: \"good\" Kate: \"you sat with him the whole movie\" Hannah: \"yeah. i did.\""
                },
                {
                  "you": "(Wiggle your toes at him.) Want to try the other foot?",
                  "outcome": "held",
                  "spark": 16,
                  "them": [
                    "\"Oh, he's cocky now,\" Dylan says, and grabs the other foot before you've finished the sentence.",
                    {
                      "note": "This one's worse. He goes straight for the soft bit under your toes. A noise comes out of your nose. Just one. You turn it into a cough."
                    },
                    "\"That was a laugh.\"",
                    "That was a cough. Let go of him.",
                    {
                      "note": "He lets go. You win, sort of. But Hannah's laughing now, and she's laughing at something Dylan says under his breath, and she doesn't move over."
                    },
                    "\"Next time,\" Dylan says, and points at you. \"Next time, sweetheart.\""
                  ],
                  "after": "Hannah, to Kate: \"he basically won\" Kate: \"he coughed\" Hannah: \"it was a laugh. i know what his laugh sounds like\" Kate: \"dylan's asking if you want a lift home\" Hannah: \"...tell him maybe\""
                }
              ]
            },
            {
              "you": "(It's too much. A giggle breaks out.)",
              "them": [
                {
                  "note": "It starts as a squeak. Then it's a high, helpless giggle, and once it's out you can't put it back. You fold up on the couch, trying to pull your foot back, and Dylan holds the ankle without even trying."
                },
                "\"THERE it is!\" Dylan says. \"Han! Ten bucks!\"",
                "Oh my god.",
                {
                  "note": "Kate's filming. Of course Kate's filming. You can hear yourself on her phone, a squeaky little giggle that doesn't sound like you at all."
                },
                "\"Listen to him. He sounds like a cartoon mouse.\""
              ],
              "replies": [
                {
                  "you": "(Through the giggles) Okay! Okay, you got me! You win!",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away, holding both hands up like a footballer who didn't do it."
                    },
                    "\"I always win, buddy.\"",
                    {
                      "note": "You sit up. Your face is hot. Your hair's a mess. You try to laugh it off like it was nothing, and it comes out as one more little giggle, and Dylan points at you again."
                    },
                    "Here.",
                    {
                      "note": "Hannah gives Dylan a ten dollar note out of her phone case. He folds it in half very slowly, looking at her, and puts it in his shirt pocket."
                    },
                    "\"Gonna frame that,\" he says. \"Or buy you a drink with it. Friday?\"",
                    {
                      "note": "Hannah doesn't say no. She just tells Kate to press play."
                    }
                  ],
                  "after": "Kate, to Hannah, at midnight: \"[video]\" Hannah: \"delete that\" Kate: \"no\" Hannah: \"he sounds like a squeaky toy\" Kate: \"he does. dylan's played it four times\" Hannah: \"...send it to me\""
                },
                {
                  "you": "(Bright red, giggling) Stop! Dylan, stop!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He stops the second you say it and lets go."
                    },
                    "\"Stopping. Stopped. Look, no hands.\"",
                    {
                      "note": "You pull both feet up under you and sit on them. Your whole face is burning. You can't look at anyone."
                    },
                    "Are you okay?",
                    {
                      "note": "She asks it like you're a kid who fell off a scooter. Then she turns round to Dylan and they both start laughing, quietly, into the same cushion."
                    },
                    "\"Sorry, buddy,\" he says. He doesn't sound sorry. \"Didn't know you'd go that high.\""
                  ],
                  "after": "Hannah, to Kate, at 1am: \"he went SO red\" Kate: \"you and dylan laughed into the same cushion for ten minutes\" Hannah: \"we did not\" Kate: \"i have it on video\" Hannah: \"why do you have everything on video\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're already giggling before he's started.)",
          "them": [
            {
              "note": "You don't stand a chance. His thumb barely moves and you're gone: high, squeaky giggles, grabbing a cushion, kicking your other foot against the arm of the couch."
            },
            "\"Oh no,\" Dylan says, delighted. \"Oh no, he's so ticklish. Han. HAN.\"",
            "I can see.",
            {
              "note": "He gets both hands on it. One holds the ankle. The other one runs up and down your sole, between your toes, under the arch. Every time you think you've got it under control, he finds a new spot."
            },
            "\"Pink toes AND ticklish. Han, where did you find this guy?\"",
            {
              "note": "Kate's laughing so hard she's lying on the carpet. Two of Kate's friends have come in from the kitchen to see what the noise is."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Dylan! Please! Please please stop!",
              "them": [
                {
                  "note": "He stops straight away and lets go of your foot. You collapse into the corner of the couch, panting, giggling at nothing."
                },
                "\"He said please,\" Dylan says. \"Three times. Han, he said please three times.\"",
                "I heard.",
                {
                  "note": "Then he puts his hand back on your ankle. He's not tickling, just holding it. He looks at you with his eyebrows up."
                },
                "\"One more go? Ten seconds. For the people in the kitchen.\""
              ],
              "replies": [
                {
                  "you": "(Pull your foot away.) No! No more. I'm done.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough,\" Dylan says, and lets go. \"Sorry, sweetheart. Couldn't help it.\"",
                    {
                      "note": "You sit with your knees pulled up for the rest of the movie, feet tucked under a cushion where nobody can reach them."
                    },
                    {
                      "note": "Hannah sits on the other side of Dylan the whole time. At one point she leans over and says something in his ear, and he laughs, and they both look at your cushion."
                    },
                    "You're fine. It was funny.",
                    {
                      "note": "She says it without looking away from the TV. Her hand's on Dylan's side of the cushion."
                    }
                  ],
                  "after": "Hannah, to Kate: \"he begged. like actually begged\" Kate: \"he said please three times\" Hannah: \"in a little voice\" Kate: \"dylan asked for your number again\" Hannah: \"he has my number\" Kate: \"he said he wants to ask properly this time\" Hannah: \"...ok\""
                },
                {
                  "you": "(Giggling, red) ...Okay. Ten seconds.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 96,
                  "them": [
                    {
                      "note": "The kitchen people cheer. Dylan counts down from ten out loud, slowly, while he does it. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he keeps going for another five seconds. You're laughing too hard to say anything. Then he stops and lets go."
                    },
                    "\"Best ten seconds of my life,\" Dylan says.",
                    "Okay, I'm going to go and get a drink.",
                    {
                      "note": "Hannah gets up. Dylan says \"grab me one\" and she does. She hands it to him on her way back and sits down next to him, a bit closer than before."
                    },
                    {
                      "note": "You lie on the end of the couch with your feet in the air, still giggling. Nobody's watching the movie."
                    }
                  ],
                  "after": "Kate, in the group chat: \"[video] he asked for MORE\" Kate's friend: \"he asked for more??\" Kate: \"ten seconds. dylan did fifteen\" Hannah: \"can we stop talking about my date's feet\" Kate: \"is he your date\" Hannah: \"...\""
                }
              ]
            },
            {
              "you": "(Stop fighting it. Let him keep going.)",
              "them": [
                {
                  "note": "You stop pulling. You lie back across the end of the couch, laughing so hard you can barely breathe, toes wriggling in his hand."
                },
                "\"He's not even trying to get away,\" Kate's friend says.",
                "\"He loves it,\" Dylan says. \"Look at him. He loves it.\"",
                {
                  "note": "It goes on. And on. He does the arch, the heel, the gaps between your toes, then back to the arch. You've got tears running into your ears."
                },
                {
                  "note": "Hannah's stopped laughing. She's just watching, holding her drink with both hands."
                },
                "{name}. You can tell him to stop, you know."
              ],
              "replies": [
                {
                  "you": "(Gasping) S-stop. Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "He stops the moment you say it and lets go."
                    },
                    "\"Two minutes,\" Kate says, looking at her phone. \"That was two full minutes.\"",
                    {
                      "note": "You lie there with your hair stuck to your forehead and your pink toes still curling on their own. Dylan pats your ankle twice and sits back."
                    },
                    "\"Good effort, champ.\"",
                    {
                      "note": "Then he turns to Hannah. \"Drink? Kitchen?\" And she says yes, and they go, and they're in the kitchen for the rest of the movie."
                    }
                  ],
                  "after": "Kate, to Hannah, at 2am: \"you were in the kitchen with dylan for an hour\" Hannah: \"we were talking\" Kate: \"about what\" Hannah: \"his feet thing. the tickling. he was laughing about it\" Kate: \"and\" Hannah: \"and then we weren't talking about that\""
                },
                {
                  "you": "(Can't say anything. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. Dylan keeps going."
                    },
                    "Dylan. Enough.",
                    {
                      "note": "Hannah says it flat, and he stops straight away and lets go."
                    },
                    "\"He didn't say stop,\" Dylan says.",
                    "He couldn't say anything. Look at him.",
                    {
                      "note": "You're lying on Kate's white carpet now. You don't remember sliding off the couch. Kate's friend is filming from above."
                    },
                    {
                      "note": "Hannah looks down at you, then at Dylan, and goes to get her keys."
                    },
                    "I'm going to head off. Dylan, you're driving me? You've had one beer.",
                    "\"Yeah,\" Dylan says, already getting up. \"Yeah, I'm driving you.\""
                  ],
                  "after": "Hannah, to Kate, from Dylan's car: \"im not being mean\" \"i just watched a grown man giggle on your carpet for three minutes\" \"like i couldnt even fancy him a little bit\" Kate: \"and dylan\" Hannah: \"dylan's driving me home\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Being ticklish is just how your body is. Hannah had mostly made up her mind before the movie started."
    },
    {
      "id": "hannah-end",
      "route": "hannah",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Brodie owns four pairs of steel caps and zero lip products. I've never been happier.",
      "title": "Hannah and Brodie",
      "contact": "Hannah",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans, a nice top and just lip oil. Keep it low-key.",
          "thinks": "jeans and lip oil, toned down for me, cute. hip out, wine by the stem, still the gayest guy in the pub by a lot",
          "gaydar": -2,
          "intro": "Six weeks later. Jess's birthday drinks at a pub in Newstead. You went low-key: jeans, a black top, lip oil. Then Hannah walks in. With a guy.",
          "them": [
            {
              "note": "She looks you up and down once, and you can see her decide it doesn't matter what you wear any more."
            }
          ]
        },
        {
          "label": "Your going-out look: a sheer top, lashes, gloss, a little bag",
          "thinks": "lashes and a little bag to the pub. pool table guy kept looking at him the whole time, brodie didn't notice, i did",
          "intro": "Six weeks later. Jess's birthday drinks at a pub in Newstead. You did your going-out look: a sheer black top, gold rings, lashes, gloss and the little shoulder bag. Then Hannah walks in. With a guy.",
          "them": [
            {
              "note": "She clocks the lashes and glances at Brodie, like she's checking he's still the one she came with."
            }
          ]
        },
        {
          "label": "Full glam: a satin top, lashes, contour, heeled boots, pink nails",
          "thinks": "Contour and heeled boots in Newstead. None of that was for me, none of it was ever for me lol",
          "gaydar": 1,
          "intro": "Six weeks later. Jess's birthday drinks at a pub in Newstead. Full glam. Satin top, lashes, a proper contour, heeled boots, pink nails, the works. Two of Jess's work friends have already asked where you got your boots. Then Hannah walks in. With a guy.",
          "them": [
            {
              "note": "She sees your boots before she sees your face. She almost smiles."
            },
            {
              "note": "Then she takes Brodie's hand, very deliberately, where you can see it."
            }
          ]
        }
      ],
      "thinks": [
        "he looked at brodie's forearms when they shook hands. for ages. hello",
        "brodie stays over and actually wants to, like every time. i forgot what that was like. all those dates with {name} and he never even tried to come in",
        "he should be on the guy apps. mullet guy at the bar keeps looking over, go on babe"
      ],
      "them": [
        {
          "note": "He's huge. Hi-vis still on under his flannel, a pint in each hand."
        },
        "Oh. Hi, {name}. Didn't know you'd be here. Well, I did. Jess said. This is Brodie.",
        {
          "note": "Brodie puts down a pint and shakes your hand so hard your rings click together."
        },
        "\"Hey man. Brodie. Electrician. Han's told me a lot about you.\" He looks at your nails. \"Nice nails, man. My niece does hers like that.\"",
        "We've been seeing each other a few weeks. Jess said she told you.",
        {
          "if": "hannah-tickle=held",
          "text": "\"Hang on,\" Brodie says. \"Are you the guy Dylan tried to tickle? He said you didn't even blink. He's still annoyed about it. Respect, man.\""
        },
        {
          "if": "hannah-tickle=cracked|begged|kept",
          "text": "\"Hang on,\" Brodie says, and starts grinning. \"You're the ticklish guy. Dylan showed the whole pub the video. The squeaky one.\""
        },
        {
          "if": "hannah-tickle=cracked|begged|kept",
          "note": "Hannah looks at the floor. Brodie looks at your shoes like he's wondering what's inside them."
        },
        {
          "text": "Jess says you're on the apps now. Like, the guy ones. I'm sorry but that's so good. Get it.",
          "if": "c5=told|broke"
        },
        {
          "text": "And, um. Kate still feels bad about the wine bar. She says you were so nice about it. Even with the, like. Crying.",
          "if": "c5=cried"
        },
        {
          "text": "Jess says you're still telling people you're straight? Like. Babe. Okay.",
          "if": "c5=dodged"
        }
      ],
      "replies": [
        {
          "you": "Oh my god, hi Brodie! Love the hi-vis, very rugged. Han, he's gorgeous. I'm so happy for you, babe, honestly.",
          "them": [
            {
              "note": "Hannah stares at you for a second."
            },
            "Thanks. He is.",
            "Don't take this the wrong way but I'm glad we stopped at three dates.",
            "You're just not my type. I don't know what I was doing. Like. Brodie's my type.",
            "Pretty sure he's your type too. You've looked at his arms twice since you got here.",
            "Download Hinge and set it to men. Takes two seconds. I'll do it for you if you're scared.",
            "Anyway you look good.",
            {
              "note": "Brodie has wandered off to watch the game on the TV above the bar."
            }
          ],
          "replies": [
            {
              "you": "I'm not... it's not like that, Han. I'm just more comfortable now. That's all.",
              "them": [
                "Okay.",
                "Brodie's going to ask you about the rugby in a minute. Just say the refs were terrible, he'll be happy."
              ]
            },
            {
              "you": "Honestly? Yeah, I'm happier. Don't ask me what that means, I don't know yet.",
              "them": [
                "Mm.",
                "Okay.",
                {
                  "note": "She goes back to Brodie, who's yelling at a TV with the sound off."
                }
              ]
            }
          ]
        },
        {
          "you": "He's very... blokey. Like, very manly. Is that what you wanted? I didn't think you were into that.",
          "them": [
            "Yeah. It's exactly what I wanted.",
            "No offence but after you I wanted someone who'd never ask where a jacket's from. He buys his clothes at the hardware store.",
            "And he looks at me when we're out. Like the whole time. It's nice.",
            "And I can wear heels with him."
          ],
          "replies": [
            {
              "you": "That's fair. Good. He looks like he'd carry your couch up three flights.",
              "them": [
                "Thanks.",
                "Honestly you'd be fun to go shopping with. That's about it though lol",
                "Go on, Jess is doing shots."
              ]
            },
            {
              "you": "Babe. He buys his clothes at THE HARDWARE STORE?",
              "them": [
                {
                  "note": "She laughs, a proper one."
                },
                "He does. He's got like six of the same shirt.",
                "Go away {name}, Jess is doing shots."
              ]
            }
          ]
        },
        {
          "you": "(Go over to Brodie.) Um. Hi. Sorry. Can I borrow you for a sec? It's about Hannah.",
          "them": [
            "\"Borrow me?\" Brodie says, loud enough for his friends at the bar to hear. He puts his pint down and leans right down to your height. \"Go on then, man.\"",
            {
              "note": "He smells like body spray. You had a whole speech ready on the drive over. It's gone."
            },
            "\"Take your time. I've got all night.\""
          ],
          "replies": [
            {
              "you": "I think I want her back. Sorry. I know you're with her. I just wanted to say it to you first.",
              "them": [
                "\"You want her back,\" Brodie says. He looks you up and down, slowly, from your rings to your shoes. Then he laughs. \"Yeah, okay.\"",
                "\"Han! Your ex wants to fight me for you!\"",
                {
                  "note": "His friends turn round. One of them raises his pint at you."
                },
                "\"I'm shaking, man. Look.\" He holds his hand out flat. It's dead still.",
                {
                  "note": "Hannah comes over and puts her hand on your shoulder."
                },
                "Brodie. Leave him alone.",
                "{name}. You said sorry like three times.",
                "No. Obviously no. But that was kind of cute.",
                {
                  "note": "She kisses you on the cheek and goes back to Brodie."
                }
              ]
            },
            {
              "you": "...Never mind. Sorry. Your arms are really big. Sorry. Bye.",
              "gaydar": 100,
              "them": [
                "\"There it is,\" Brodie says, grinning, and flexes a bit. \"Han, I think your ex has got a crush on me.\"",
                {
                  "note": "You go red from your neck up. His friends are laughing. Hannah's got her hand over her mouth."
                },
                "Oh my god, {name}.",
                "You went over there to get me back.",
                "Don't even. Your whole face is pink."
              ]
            }
          ]
        },
        {
          "you": "(Smile, say 'nice to meet you, Brodie', then go and hide in the bathroom with Jess.)",
          "them": [
            {
              "note": "In the bathroom Jess fixes your hair, which doesn't need fixing, and says nothing for a full minute."
            },
            "\"You okay?\" Jess says eventually.",
            {
              "note": "Through the door you can hear Brodie telling someone about a switchboard."
            },
            "\"He's literally the straightest man I've ever seen,\" Jess says. \"She went from you to that. She's running the other way, babe.\""
          ],
          "replies": [
            {
              "you": "The other way from what, Jess?",
              "them": [
                "\"From you,\" Jess says.",
                "\"Come on. Shots.\""
              ]
            },
            {
              "you": "I'm fine. I'm actually fine. Weirdly. He seems nice.",
              "them": [
                "\"He is nice,\" Jess says. \"He told me about switchboards for ten minutes.\"",
                "\"Shots. Come on.\""
              ]
            }
          ]
        }
      ],
      "after": "Later, Hannah, to Jess, outside by the Ubers: \"he looked so good tonight. better than me again lol\" Jess: \"he did\" Hannah: \"i dont miss him. i thought i would\" \"i think hes going to end up with some guy who knows what a cuticle is\" Jess: \"yeah\" Hannah: \"brodie asked if he plays touch\"",
      "debrief": "It's weird seeing her that happy with someone so different. It's not a ranking."
    },
    {
      "id": "mia-1",
      "route": "mia",
      "gaydar": 15,
      "gaydarSays": "Really nice. Smelled better than me?? Which is fine. Cute??",
      "title": "Dumplings",
      "contact": "Mia",
      "outfits": [
        {
          "label": "Boy clothes: jeans and a hoodie",
          "thinks": "Jeans and a hoodie, normal. Then he crossed his legs at the knee and I went oh. Lots of people sit like that, probably",
          "masc": true,
          "spark": 10,
          "gaydar": -10,
          "intro": "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore jeans and a grey hoodie. Mia wore a yellow sundress and kept apologising for things that weren't her fault."
        },
        {
          "label": "A linen shirt and your silver rings",
          "thinks": "his rings were nicer than mine and there were so many of them",
          "intro": "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. You wore a white linen shirt and your silver rings. Mia wore a yellow sundress and kept apologising for things that weren't her fault.",
          "them": [
            "sorry this is weird but you have nicer rings than me? i kept looking at them"
          ]
        },
        {
          "label": "Linen shirt, rings, and a bit of tinted lip balm",
          "thinks": "Tinted balm on a first date. I didn't want to be thinking it this early and I'm thinking it",
          "gaydar": 5,
          "intro": "Sam from work set you up with her cousin Mia. \"She's sweet, she's shy, don't be weird.\" First date: dumplings in Sunnybank. A white linen shirt, your rings, and a tinted lip balm you told yourself was just for the dry air. Mia wore a yellow sundress and kept apologising for things that weren't her fault.",
          "them": [
            "and um. was that tinted lip balm? sorry. it was just very pink. i didnt know where to look"
          ]
        }
      ],
      "thinks": [
        "He kept looking at my dress more than me, like the dress itself. I think that's a gay thing? I don't know. I think I know",
        "texted Sam under the table asking if he's straight before we'd even ordered. she said yes. she said it really fast"
      ],
      "them": [
        "hi!! sorry is this too soon",
        "i just wanted to say thanks for tonight i had a really nice time",
        "and sorry about the soy sauce",
        "and for talking about my cat the whole time lol. mochi. you probably remember"
      ],
      "replies": [
        {
          "you": "Don't be sorry! I loved hearing about Mochi. And your dress was so pretty, that yellow is so you.",
          "them": [
            "omg thank you",
            "nobodys ever said that",
            "my last boyfriend said i looked like a banana in it so",
            "anyway would you want to hang out again?? no pressure"
          ],
          "replies": [
            {
              "you": "Stop saying sorry! Yes, I'd love to. What about Eat Street next weekend?",
              "them": [
                "yes!! i love eat street",
                "ok no more sorry",
                "saturday 😊"
              ]
            },
            {
              "you": "A banana? He needs his eyes checked. Yes, let's hang out again.",
              "them": [
                "😭 thank you",
                "ok saturday? eat street? i'll try not to spill anything"
              ]
            }
          ]
        },
        {
          "you": "I had a really nice time too, Mia. You're easy to be around.",
          "them": [
            "really?? i thought i was so awkward",
            "can i see you again?"
          ],
          "replies": [
            {
              "you": "Yeah, of course. You pick where.",
              "them": [
                "eat street? saturday? it's so loud there that i can't be awkward because you can't hear me lol"
              ]
            },
            {
              "you": "Only if Mochi comes.",
              "them": [
                "😭😭 she would bite you",
                "but she might like you. she likes people who smell nice and you smelled really nice",
                "eat street saturday?"
              ]
            }
          ]
        },
        {
          "you": "Did the soy sauce get your dress? I know a trick for that. Dish soap and cold water. Sorry. Weird thing to know.",
          "gaydar": 20,
          "them": [
            "omg it did!! its on the hem",
            "wait cold? not hot?",
            "lol im getting stain tips from a boy",
            "can i see you again?"
          ],
          "replies": [
            {
              "you": "Cold. Never hot, it sets it. And yes. Saturday?",
              "them": [
                "ok cold. noted 😊",
                "eat street saturday?"
              ]
            },
            {
              "you": "Your last boyfriend sounds like a banana.",
              "them": [
                "😭😭",
                "he kind of was",
                "eat street saturday?"
              ]
            }
          ]
        },
        {
          "you": "The dumplings were amazing. Did you see the guy making them in the window? His hands were so fast.",
          "gaydar": 20,
          "them": [
            "haha yes",
            "you were really into it lol i thought you were going to ask for his number",
            "kidding!! sorry",
            "can i see you again?"
          ],
          "replies": [
            {
              "you": "Ha! No, just appreciating the craft. Yes, let's do it again.",
              "them": [
                "😊 eat street? saturday?"
              ]
            },
            {
              "you": "I mean, if he'd given me his number I wouldn't have said no. For dumpling reasons.",
              "gaydar": 25,
              "them": [
                "lol",
                "for dumpling reasons",
                "ok um. eat street saturday?"
              ]
            }
          ]
        }
      ],
      "after": "Mia, to Sam: \"he's so nice!!\" Sam: \"told you\" Mia: \"he smelled really good. like better than me?\" Sam: \"...thats nice\""
    },
    {
      "route": "mia",
      "path": "masc",
      "id": "mia-m2",
      "title": "Eat Street, hoodie on",
      "contact": "Mia",
      "irl": true,
      "gaydar": 15,
      "spark": 78,
      "gaydarSays": "He ate four spring rolls and didn't look at a single earring stall. Sorry. That's good.",
      "intro": "Second date. Eat Street Northshore on a Saturday night. Jeans, a grey hoodie, no rings. Mia's in a little denim skirt and keeps checking you can hear her over the music.",
      "them": [
        "Okay, I've decided we're getting the mac and cheese spring rolls. And churros. Sorry. That's a lot.",
        {
          "note": "You walk past the jewellery stall with the little gold hoops. You slow down. Mia doesn't notice. Yet."
        },
        "Do you want to get a beer? There's a beer place. Sorry, do you even drink beer?"
      ],
      "replies": [
        {
          "you": "Yeah. Two beers. Whatever's cold.",
          "masc": true,
          "them": [
            {
              "note": "You carry the beers back through the crowd. Mia's holding the spring rolls like they're a baby."
            },
            "You're so normal. Sorry. I mean that in a good way. Sam said you were... I don't know what she meant."
          ],
          "replies": [
            {
              "you": "What did Sam say?",
              "masc": true,
              "spark": 82,
              "outcome": "kept",
              "them": [
                "Nothing. Just that you were nice. And that you'd probably like the jewellery stall. Which is so random.",
                {
                  "note": "She bumps your shoulder with hers and leaves it there."
                }
              ],
              "after": "Mia, to Sam: \"he didnt even look at the jewellery stall\" Sam: \"really??\" Mia: \"why do you sound surprised. sorry\""
            },
            {
              "you": "(Go back for the gold hoops while she's eating.)",
              "spark": 55,
              "outcome": "slipped",
              "them": [
                {
                  "note": "You come back with a tiny paper bag. Mia looks at it."
                },
                "Oh. Are they for me?",
                "\"They're... for me, actually.\"",
                "Oh. Sorry. That's fine. They're really pretty."
              ],
              "after": "Mia, to Sam: \"he bought earrings. for him\" Sam: \"called it\" Mia: \"called what. sorry. what did you call\""
            }
          ]
        },
        {
          "you": "Actually, can we get one of those pink spritz things?",
          "them": [
            "Oh. Yeah. Sorry, yes. I love those.",
            {
              "note": "You both drink pink spritzes with little straws. She takes a photo of them, then of you."
            },
            "You look so cute with that. Sorry. Is that weird to say to a boy?"
          ],
          "replies": [
            {
              "you": "Very weird. Delete it.",
              "masc": true,
              "spark": 70,
              "outcome": "kept",
              "them": [
                "Okay okay. Deleting. It's gone. Sorry.",
                {
                  "note": "She doesn't delete it."
                }
              ],
              "after": "Mia, to Sam: \"he drank a pink spritz but he was weird about the photo\" Sam: \"weird how\" Mia: \"like a boy. it was nice. i kept the photo\""
            },
            {
              "you": "Not weird. Send it to me, I want it for my profile.",
              "spark": 48,
              "outcome": "slipped",
              "them": [
                "For your Hinge? Sorry. Are you still on Hinge?",
                "\"No! For my... for my Instagram.\"",
                "Oh. Okay. Yeah. It's a good one."
              ],
              "after": "Mia, to Sam: \"he wanted the photo of him with the pink straw for his instagram\" Sam: \"oh mia\" Mia: \"what. sorry. what\""
            }
          ]
        }
      ],
      "debrief": "You can keep it low-key and still have a good night. Low-key isn't the same as fake, as long as it's what you want."
    },
    {
      "route": "mia",
      "path": "masc",
      "id": "mia-m3",
      "title": "Mochi's vet",
      "contact": "Mia",
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He drove me and Mochi to the vet and held the cat carrier like a man. Sorry. That's a weird thing to love.",
      "intro": "Two months in. Mia's cat needs the vet and she doesn't have a car.",
      "them": [
        {
          "text": "thank you SO much for driving us. sorry. mochi hates the car",
          "if": "mia-m2=kept"
        },
        {
          "text": "thank you for driving. sorry. also sorry i keep talking about your earrings",
          "if": "mia-m2=slipped"
        },
        "the vet thought you were my boyfriend btw. i didnt correct her. sorry",
        "is that ok"
      ],
      "replies": [
        {
          "you": "Yeah. I'd like to be. Tell the vet.",
          "masc": true,
          "spark": 88,
          "outcome": "together",
          "them": [
            "oh",
            "ok",
            "ok!!!",
            "sorry i'm crying a bit. mochi's looking at me",
            "boyfriend"
          ],
          "after": "You're Mia's boyfriend. She says sorry for it about once a day and you tell her to stop. You keep the hoodie. Mochi sleeps on your chest. It's quiet. It's nice."
        },
        {
          "you": "Ha. Did she like my jacket?",
          "spark": 50,
          "outcome": "drift",
          "them": [
            "your jacket?",
            "i mean. she said it was nice. sorry",
            "you asked that really fast",
            {
              "note": "She doesn't text for an hour."
            },
            "sorry. i think i want someone who doesnt ask what the vet thought of his jacket. i think thats fair"
          ],
          "after": "Mia stops replying so slowly you almost don't notice. Then Sam tells you she's seeing a guy called Lachlan. He's an accountant. He doesn't own a jacket anyone would comment on."
        },
        {
          "you": "Mia, can I tell you something? I think I'm not into girls the way I should be.",
          "them": [
            "oh",
            "oh {name}",
            "sorry. no. i'm not sorry. i mean i'm sorry but",
            "thank you for saying it",
            "honestly sam's going to say she knew and i'm going to say shut up sam",
            "you should be dating boys. sorry. you should. theo has a friend who does ceramics. sorry. too soon"
          ],
          "spark": 10,
          "gaydar": 100,
          "outcome": "told",
          "after": "You stay friends. She sends you a Hinge profile of a guy who works with Lachlan every week until you match with him."
        }
      ],
      "debrief": "Driving someone's cat to the vet is a real thing to share, whatever you end up calling each other."
    },
    {
      "id": "mia-2",
      "route": "mia",
      "gaydar": 45,
      "gaydarSays": "He stopped dead at an earring stall. Like properly stopped. Sorry. I don't know what that means.",
      "title": "Eat Street",
      "contact": "Mia",
      "irl": true,
      "outfits": [
        {
          "label": "A tee and jeans, rings on",
          "thinks": "Six rings. Hayley's boyfriend wears one ring",
          "gaydar": -5,
          "intro": "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. You wore a plain tee, jeans and your rings. Mia's in a little denim skirt and keeps checking you can hear her over the music.",
          "them": [
            {
              "note": "She looks at your rings and then at your face, like she's trying to make them match."
            }
          ]
        },
        {
          "label": "A cropped tee, rings and a clear lip gloss",
          "thinks": "crop top at eat street. his stomach was flatter than mine and he knew it. i felt bad looking and then i looked again",
          "intro": "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. You wore a cropped white tee, your rings and a clear lip gloss. Mia noticed the crop top first. She said \"cute top\" in a small voice and then didn't look at your stomach again all night.",
          "them": [
            {
              "note": "She sees the crop top and the gloss, and after that she walks a little bit ahead of you, not beside you."
            }
          ]
        },
        {
          "label": "A cropped tee, gloss and your nails painted pale pink",
          "thinks": "pale pink nails, my formal pink. i keep picturing him in the shop choosing it for ages",
          "gaydar": 5,
          "intro": "Second date. Eat Street Northshore on a Saturday night, fairy lights and too many people. A cropped white tee, clear gloss and nails painted pale pink. Mia noticed the nails while you were paying for gyoza and went quiet for a whole stall.",
          "them": [
            {
              "note": "She keeps glancing at your pink nails every time you point at something."
            },
            {
              "note": "When you hold the churro bag out she takes one without touching your fingers."
            }
          ]
        }
      ],
      "thinks": [
        "he checked out the churro guy. i watched him do it. like hello i am right here",
        "He stopped at the earring stall so fast I walked into his back, and then we were there for ages and I just stood there holding my spring roll",
        "Sorry but I was so relieved when he didn't kiss me. Is that bad. Hayley says it's not bad"
      ],
      "them": [
        "Okay, I've decided we're getting the mac and cheese spring rolls, and then churros, and then I'm going to be sick, probably. Sorry. That's a lot of food.",
        {
          "note": "You walk past a little jewellery stall. You stop. You don't mean to."
        },
        "Oh, do you like those? The little gold ones? They're so pretty. Are they for... someone?"
      ],
      "replies": [
        {
          "you": "They're for me, actually. I've been wanting little hoops for ages. Do you think they'd suit me? Be honest.",
          "them": [
            {
              "note": "Mia blinks. Then she nods a lot, very fast."
            },
            "Oh! For you. Yes! Totally. They'd suit you. You've got the face for it. Like the jaw. Sorry, I'm being weird.",
            "My friend's boyfriend has an earring. One. In one ear. That's normal. Two is also normal. Sorry. I'm going to stop talking.",
            {
              "note": "The stall lady holds a mirror up for you. You put them in. They look good. Mia says \"oh\" very quietly."
            }
          ],
          "replies": [
            {
              "you": "Oh my god, I love them. I'm getting them. Do you want a pair too? We can match!",
              "gaydar": 55,
              "them": [
                "Match?",
                "Um. Sure! Yeah. Cute.",
                {
                  "note": "She buys a pair and puts them in her bag, not her ears. She holds your hand for the rest of the night, but loosely."
                }
              ]
            },
            {
              "you": "Actually, never mind. They're a bit much. Let's get the spring rolls.",
              "them": [
                "No! They looked nice. You should get them if you want them.",
                "Sorry. I just mean, don't not get them because of me. I don't mind. I really don't.",
                {
                  "note": "She's already walking towards the spring rolls."
                }
              ]
            }
          ]
        },
        {
          "you": "Ha, no, I was just looking. Spring rolls! Lead the way.",
          "them": [
            "Okay! This way. Hold my hand so we don't get separated, it's so busy.",
            {
              "note": "She takes your hand. She looks down at your nails while she does it."
            },
            "Your hands are so soft. Do you use a hand cream? Sorry. Random question."
          ],
          "replies": [
            {
              "you": "L'Occitane. The shea one. It's honestly the best one, you have to try it. I'll lend you mine.",
              "gaydar": 50,
              "them": [
                "Oh. Okay. You... carry it with you?",
                "That's... yeah. Cool. Sorry. Spring rolls."
              ]
            },
            {
              "you": "Not really. Just lucky I guess.",
              "them": [
                "Lucky. Okay. They're really soft.",
                "Sorry. I keep saying weird things. Spring rolls!"
              ]
            },
            {
              "you": "They're soft because I've never done a day of real work. Don't ask me to change a tyre.",
              "them": [
                "Ha! No, that's okay.",
                "Hayley's flatmate Theo does everything at their place. He's got like, builder hands.",
                "Yours are nicer. Sorry. I don't know why I said that.",
                {
                  "note": "She keeps holding your hand. Her thumb goes over your nails, not your knuckles."
                }
              ]
            }
          ]
        },
        {
          "you": "They're for my friend Nicole. She'd love them. I've got really good taste in earrings, if I do say so myself.",
          "them": [
            "You do! They're so pretty. She's lucky.",
            "Do you buy jewellery for your friends a lot?",
            {
              "note": "She says it nicely."
            }
          ],
          "replies": [
            {
              "you": "All the time. Me and Nicole go to Sephora every month. It's our thing.",
              "gaydar": 50,
              "them": [
                "Oh. That's... nice. That you have a thing.",
                "I don't really go to Sephora. It's a bit much for me. Sorry."
              ]
            },
            {
              "you": "Only for special people. Like you, maybe. If you're lucky.",
              "them": [
                {
                  "note": "She goes pink and laughs."
                },
                "Oh! Stop. Okay. Spring rolls."
              ]
            }
          ]
        }
      ],
      "after": "Mia, to Sam, from the Uber home: \"had fun\" \"he REALLY liked the earrings at this one stall\" Sam: \"ok?\" Mia: \"idk\" \"his hands are softer than mine sam\" Sam: \"hes my coworker not my problem lol\""
    },
    {
      "id": "mia-dress",
      "route": "mia",
      "title": "Help with a dress",
      "contact": "Mia",
      "gaydar": 55,
      "spark": 40,
      "gaydarSays": "He sent me eleven photos of dresses before I'd sent him one. Sorry. That's a lot of dresses.",
      "intro": "A Thursday night. Mia needs something to wear to Hayley's birthday.",
      "them": [
        "hey sorry random question",
        "hayleys birthday is next week and i have nothing to wear. sam says you're good at this??",
        "sorry. you dont have to"
      ],
      "replies": [
        {
          "you": "Send me what you've got.",
          "them": [
            "ok [photo] [photo] [photo]",
            "sorry the lighting is bad",
            "the blue one is my favourite but i dont know"
          ],
          "replies": [
            {
              "you": "Not the blue. The yellow one, with your white sneakers and little gold hoops.",
              "spark": 34,
              "them": [
                "oh",
                "ok wait",
                "[photo]",
                "omg",
                "how did you do that",
                "sorry. my last boyfriend said i looked like a banana in yellow. you just made it look like an outfit",
                "youre honestly better at this than my friends"
              ],
              "after": "Mia, to Sam: \"he styled me over text\" Sam: \"told you\" Mia: \"i felt like i was texting hayley. sorry. not hayley. you know what i mean\""
            },
            {
              "you": "They're all nice. Wear the blue.",
              "spark": 50,
              "them": [
                "really?",
                "ok. sorry. i thought you'd have more of an opinion",
                "sam said you'd have an opinion"
              ],
              "after": "Mia, to Sam: \"he said 'they're all nice'\" Sam: \"that's weird for him\" Mia: \"sorry why is that weird for him\""
            }
          ]
        },
        {
          "you": "Sam said that? What else did Sam say?",
          "them": [
            "nothing. sorry",
            "just that you'd love it",
            "and that i shouldnt let you borrow anything. which was a weird thing to say"
          ],
          "replies": [
            {
              "you": "Ha. That's weird. Send the dresses.",
              "spark": 42,
              "them": [
                "[photo] [photo]",
                "ok?",
                {
                  "note": "You reply in about four seconds with a full outfit, shoes and a bag."
                },
                "sorry you did that so fast"
              ],
              "after": "Mia, to Sam: \"why did you say not to let him borrow anything\" Sam: \"no reason\" Mia: \"sam\""
            },
            {
              "you": "I would only borrow the cardigan. Once.",
              "spark": 30,
              "them": [
                "oh",
                "lol",
                "ok you can borrow the cardigan",
                "sorry. thats a weird thing for my boyfriend to borrow. if you're my boyfriend. sorry"
              ],
              "after": "Mia, to Sam: \"he wants to borrow my cardigan\" Sam: \"called it\" Mia: \"i dont think i want to date a guy who borrows my cardigan. sorry. is that mean\""
            }
          ]
        }
      ],
      "debrief": "Being the one people ask about outfits is a nice thing to be."
    },
    {
      "id": "mia-movie",
      "route": "mia",
      "title": "Scary movie",
      "contact": "Mia",
      "irl": true,
      "gaydar": 60,
      "gaydarSays": "I grabbed his foot at the scary bit. It was an accident. The second time wasn't. Sorry.",
      "intro": "A Friday night at Mia's flat, just the two of you. She picked a horror movie because Hayley told her to \"be braver\". She said to get comfy, then said sorry for saying it, so your socks are off and your feet are up on her couch. There's a clear coat on your toes. You did it last night, just to see.",
      "thinks": [
        "He hid his feet under the blanket the second I looked at them. I didn't know guys cared about their feet",
        "clear coat on his toes, he said just to see. see what. i kind of know what",
        "I sat at the other end of the couch on purpose so he wouldn't try anything, and then I spent the whole movie wanting him to do my toes, which I don't think is how dates are meant to go"
      ],
      "them": [
        {
          "note": "She sits at the other end of the couch, not next to you. There's a whole cushion between you."
        },
        {
          "note": "Twenty minutes in, something bangs on a door on screen. Mia screams and grabs the nearest thing. The nearest thing is your foot."
        },
        {
          "note": "Her fingers land right in the middle of your sole. A noise comes out of you. A high one. She lets go like it's hot."
        },
        "Oh my god. Sorry. Sorry! Did I hurt you?",
        {
          "note": "She pauses the movie. She looks at your foot, then at you."
        },
        "Um. Was that... are you ticklish?"
      ],
      "replies": [
        {
          "you": "No. You just scared me. It's a scary movie, Mia.",
          "them": [
            "Right. Sorry. Yeah, of course.",
            {
              "note": "She unpauses it. Ten minutes later something jumps out of a cupboard and her hand goes back to your foot. Slower this time. Her nails go all the way down the sole."
            },
            "...Sorry. That one was on purpose. I just wanted to check."
          ],
          "replies": [
            {
              "you": "(Keep a straight face.) See? Nothing.",
              "them": [
                {
                  "note": "She does it again, very lightly, under your toes. You stare at the TV so hard your eyes water. Nothing comes out."
                },
                "Oh. Okay. Huh. Sorry, I thought...",
                "Your feet are like doll feet, though? Sorry. That's weird. They're just really small.",
                {
                  "note": "She goes back to the movie. She keeps glancing down at your feet like they owe her an explanation."
                }
              ],
              "gaydar": 58,
              "spark": 52
            },
            {
              "you": "(It's too much. You snort.)",
              "them": [
                {
                  "note": "It comes out of your nose, and then you're giggling and pulling your foot in, and Mia has both hands over her mouth."
                },
                "Oh no. Oh my god. You ARE.",
                "Sorry. I'm sorry. It's just, you giggle. Like a proper giggle.",
                {
                  "note": "She's laughing too now, a small one, into her knees. Neither of you watches the rest of the movie."
                }
              ],
              "gaydar": 64,
              "spark": 40
            }
          ]
        },
        {
          "you": "(Laugh.) Maybe a little. Don't tell anyone.",
          "them": [
            "I won't! Sorry. I won't. Um.",
            "...Can I check? Just once. Sorry. You can say no."
          ],
          "replies": [
            {
              "you": "Once. Go on.",
              "them": [
                {
                  "note": "She takes your foot in both hands like it might break and runs one finger down the middle. You last about a second. Then you're squealing and a cushion goes off the couch."
                },
                "Sorry! Sorry, sorry.",
                {
                  "note": "She doesn't stop, though. She's giggling too, and she's got your ankle tucked under her arm, and she goes for your toes."
                }
              ],
              "replies": [
                {
                  "you": "Mia! Stop! STOP!",
                  "them": [
                    {
                      "note": "She stops the second you say it, lets go, and pats your foot like she's apologising to it."
                    },
                    "Sorry. You said once. That was like four.",
                    "You squeal like Hayley's cat when someone steps on its tail. I mean that nicely. I think."
                  ],
                  "gaydar": 68,
                  "spark": 30
                },
                {
                  "you": "(Can't get a word out. Just keep laughing.)",
                  "them": [
                    {
                      "note": "You're laughing too hard to talk. After a few seconds she looks at your face, stops by herself and lets go."
                    },
                    "Okay. Okay, sorry. You couldn't breathe. I'm stopping.",
                    "Do you want water? I'll get water.",
                    {
                      "note": "She gets water. She also takes a photo of your feet on the couch. \"For nothing,\" she says."
                    }
                  ],
                  "gaydar": 72,
                  "spark": 22
                }
              ]
            },
            {
              "you": "No. Absolutely not. Watch your movie.",
              "them": [
                "Okay! Sorry. Watching.",
                {
                  "note": "She watches for a whole minute. Then she pokes your heel with one finger, very fast, and stares at the screen."
                },
                "That wasn't me. That was the ghost."
              ],
              "gaydar": 60,
              "spark": 50
            }
          ]
        }
      ]
    },
{
  "id": "mia-feet",
  "route": "mia",
  "gaydar": 65,
  "spark": 40,
  "gaydarSays": "Theo grabbed his foot in front of everyone and I didn't know where to look. Sorry.",
  "title": "Socks off",
  "contact": "Mia",
  "irl": true,
  "intro": "Mia's friend Hayley's birthday at her flat in West End. Socks off at the door, new floorboards. You've got clear polish on your toes and a pale pink on the big ones, because you were trying something. Hayley's flatmate Theo is here. Mia told you, very quietly, that he asked her out last year and she said maybe.",
  "thinks": [
    "pink on the big toes and clear on the rest. Hayley was looking. Everyone was",
    "Theo held his ankle up and he just let him. I'd have kicked Theo. I kind of wanted Theo to grab mine, sorry, I know",
    "I don't fancy him. I tried really hard to and I don't"
  ],
  "them": [
    {
      "note": "You line your shoes up at the door with everyone else's. Mia looks at your big toes and says \"oh\" in her small voice. Then \"sorry. they're nice.\""
    },
    {
      "note": "Everyone sits on the floor round the coffee table for cards. Theo sits across from you, stretches his legs out, and finds your foot under the table with his hand."
    },
    "\"Who's got the pink toes?\" He holds your ankle up so everyone can see. \"Mia, is this yours?\"",
    "No. Sorry. That's... that's {name}.",
    {
      "note": "She says it like she's handing back something that isn't hers."
    },
    "Sorry. I know. They're so small I'd have thought they were mine too.",
    "\"Oh, it's his.\" He grins and doesn't let go. \"Let's see how tough he is.\" He drags his nails down your sole."
  ],
  "replies": [
    {
      "you": "(Keep your face completely still. Look at your cards.)",
      "them": [
        {
          "note": "You stare very hard at a seven of hearts. Your foot twitches. Theo leans in and goes for the spot right under your toes."
        },
        "\"He's shaking,\" Hayley says. \"Look at his face.\"",
        {
          "note": "Mia's peeking at you over her cards, biting her lip."
        }
      ],
      "replies": [
        {
          "you": "(Hold it. Swallow it.) Your go, Theo.",
          "spark": 45,
          "them": [
            "\"Huh,\" Theo says, and lets go. \"Not ticklish. Boring.\"",
            {
              "note": "Mia lets out a breath and shuffles a little closer to you. Her knee's touching yours."
            },
            "Sorry. I thought you were going to lose it.",
            "\"Nope,\" you say. Your foot's still tingling."
          ],
          "after": "Mia, to Sam, that night: \"theo tried to tickle him\" Sam: \"and?\" Mia: \"he didn't even laugh. he just said 'your go'\" Mia: \"sorry. that was kind of hot\""
        },
        {
          "you": "(You can't. You squeak.)",
          "spark": 30,
          "them": [
            {
              "note": "A noise comes out of you like a kettle. Then the giggles. Cards go everywhere."
            },
            "\"There we go!\" Theo says, delighted, and keeps going. \"Mia, he squeaks!\"",
            "\"Stop! Stop, okay, okay!\"",
            {
              "note": "He stops. You're on your back on the floorboards. Hayley's crying laughing. Mia's laughing too, with her hand over her mouth, and she's laughing at something Theo whispers to her."
            }
          ],
          "after": "Mia, to Sam: \"he made a noise like a kettle\" Sam: \"lol\" Mia: \"sorry i shouldn't laugh\" Mia: \"theo walked me to my car after\""
        }
      ]
    },
    {
      "you": "(Give up straight away. Giggle.)",
      "them": [
        {
          "note": "You don't stand a chance. You're giggling before he's even properly started, trying to wriggle away across the floorboards, and he just pulls you back by the ankle."
        },
        "\"Oh, he's SO ticklish,\" Hayley says.",
        {
          "note": "Theo grabs your other foot too. Now he's got both."
        }
      ],
      "replies": [
        {
          "you": "(Giggling) Mia! Help! Tell him to stop!",
          "spark": 20,
          "them": [
            "Um. Theo. Sorry. You should... stop?",
            "You sound like Mochi at the vet. Sorry.",
            {
              "note": "Theo stops, because Mia asked. He winks at her. \"Anything for you.\""
            },
            {
              "note": "You sit up, pink in the face, tucking both feet under you. Mia goes back to her cards. She doesn't sit closer to you this time."
            }
          ],
          "after": "Mia, to Sam: \"he yelled for me to save him\" Mia: \"from being tickled\" Mia: \"idk how i feel about it\""
        },
        {
          "you": "(Lie back and laugh. Let him.)",
          "spark": 10,
          "gaydar": 72,
          "them": [
            {
              "note": "You just lie there on Hayley's floorboards and giggle and squeal while Theo tickles both your feet. Your toes curl and uncurl. Someone puts on music like it's a show."
            },
            "\"He's not even fighting,\" Hayley says.",
            {
              "note": "You say \"okay stop\" at last, and he stops straight away. You lie there, out of breath, grinning at the ceiling."
            },
            {
              "note": "When you sit up, Mia's moved. She's sitting next to Theo now, laughing at something on his phone."
            }
          ],
          "after": "Mia, to Sam: \"he just let theo do it. for ages. he was LOVING it\" Sam: \"ha\" Mia: \"idk. i kind of went and sat with theo after\""
        }
      ]
    }
  ],
  "debrief": "Being ticklish is just a body thing. Nobody there will remember it as much as you do."
},
    {
      "id": "mia-barefoot",
      "route": "mia",
      "gaydar": 72,
      "spark": 34,
      "gaydarSays": "He was so worried about his toes all night. Everyone saw them anyway. Sorry.",
      "title": "No shoes home",
      "contact": "Mia",
      "irl": true,
      "intro": "Still Hayley's birthday. Around eleven it pours, and the shoe pile by the door was under the gutter. Your sneakers are full of water. Mia's are too, but she's got a spare pair of Hayley's flats. Nobody has a spare pair in your size. The plan is dumplings on Boundary Street, two blocks away, and everyone's going.",
      "thinks": [
        "curled his toes the whole way to Boundary Street so nobody would see the pink. everybody saw",
        "Theo called him pink toes and he went red, and he was looking at Theo when he did. I go red at Theo too, so. Yeah",
        "he's gay. i'm just going to think it properly once. he's gay, we're never going to sleep together, and i'm a bit relieved, sorry"
      ],
      "them": [
        {
          "note": "Mia holds up one of your sneakers. Water runs out of it onto the mat."
        },
        "Oh no. Sorry. That's so bad.",
        "Do you want to just come barefoot? It's not far.",
        "Your feet are so little. Sorry. I didn't notice at the door. They're smaller than mine.",
        {
          "note": "She holds Hayley's flats against her chest with both arms the whole way down the stairs."
        },
        {
          "note": "Theo's already out the door in his own dry boots. \"Come on, pink toes,\" he calls back up the stairs."
        }
      ],
      "replies": [
        {
          "you": "It's fine. It's a footpath. People walk on footpaths.",
          "them": [
            {
              "note": "You walk the two blocks barefoot. The footpath's wet and cold and you walk on the sides of your feet, toes curled under, like that makes them less pink."
            },
            "Are you ok? You're walking funny.",
            "\"I'm walking normally.\"",
            {
              "note": "At the dumpling place you sit down and pull both feet up under you on the chair. Mia notices."
            },
            "You can put your feet down. Nobody's looking."
          ],
          "replies": [
            {
              "you": "(Keep them tucked under.) I'm comfy like this.",
              "spark": 36,
              "them": [
                {
                  "note": "You eat a whole plate of dumplings sitting on your feet. Your legs go numb. You don't move."
                },
                "You're very stubborn. Sorry. That's not bad.",
                {
                  "note": "She nudges the soy sauce towards you and her fingers touch yours for a second."
                }
              ],
              "after": "Mia, to Sam, the next day: \"he sat on his feet the whole time so no one would see his toes\" Sam: \"did it work\" Mia: \"no lol. he tried really hard though\""
            },
            {
              "you": "(Put them down. Go red.) They're so pink under these lights.",
              "spark": 24,
              "them": [
                {
                  "note": "You put your feet flat on the cold tiles. Under the fluorescent lights the pink on your big toes is very pink."
                },
                "They're nice though. Sorry. I keep saying that.",
                "\"Theo's going to bring it up forever.\"",
                {
                  "note": "Theo, from the next table, without looking up: \"Forever.\""
                }
              ],
              "after": "Mia, to Sam, the next day: \"he went so red about his toes. like the whole meal\" Sam: \"was it bad\" Mia: \"no. i just kept thinking theo wouldn't go red about anything\""
            }
          ]
        },
        {
          "you": "Can I borrow socks? Any socks. Anyone's socks.",
          "them": [
            "\"I've got socks,\" Theo says, coming back up the stairs. He holds up a pair. They're Hayley's. They've got little cats on them.",
            "Oh. They're cute. Sorry.",
            {
              "note": "You put on the cat socks. They come up to your ankles and they're far too small, and now you're walking to dumplings in tiny cat socks."
            }
          ],
          "replies": [
            {
              "you": "(Pretend this is a choice.) I actually like cats.",
              "spark": 30,
              "them": [
                "\"You look great,\" Theo says. \"Really committing.\"",
                {
                  "note": "Mia walks next to you the whole way. She keeps looking at your feet and then pressing her lips together."
                },
                "I'm not laughing. Sorry. I'm not.",
                "You look like you're going to a sleepover."
              ],
              "after": "Mia, to Sam: \"he walked to dumplings in hayley's cat socks\" Sam: \"stop\" Mia: \"they were so small on him. theo took a photo. i asked him to delete it\" Sam: \"did he\" Mia: \"no\""
            },
            {
              "you": "(Take them off again halfway.) These are worse. These are so much worse.",
              "spark": 26,
              "them": [
                {
                  "note": "Halfway down the block you stop, peel the cat socks off and stuff them in your pocket. Now you're barefoot and holding wet cat socks."
                },
                "\"Lasted a whole block,\" Theo says.",
                "It's ok. Sorry. You look fine. You look... yeah."
              ],
              "after": "Mia, to Sam: \"he gave up on the socks after one block\" Sam: \"so barefoot\" Mia: \"barefoot with pink toes at the dumpling place. theo walked me to my bus after.\""
            }
          ]
        },
        {
          "you": "I'll just go home. It's fine. You go.",
          "them": [
            "No, come. Please. Sorry. It's Hayley's birthday.",
            {
              "note": "Hayley yells from the kitchen: \"If you leave because of your feet I'll never forgive you.\""
            },
            {
              "note": "So you go. Barefoot. At the restaurant the waiter looks at your feet, then at you, then gives you the table by the window."
            }
          ],
          "replies": [
            {
              "you": "Of course it's the window table.",
              "spark": 32,
              "them": [
                "It's a good table though.",
                {
                  "note": "You sit with your feet hooked behind the chair legs, out of sight. Mia sits next to you instead of across from you, which means she can see them anyway."
                },
                "I'm not looking. Sorry."
              ],
              "after": "Mia, to Sam: \"he was so embarrassed about his feet but he still came\" Sam: \"aww\" Mia: \"yeah hes sweet. idk\""
            },
            {
              "you": "(Say nothing. Order very fast. Stare at the menu.)",
              "spark": 28,
              "them": [
                {
                  "note": "You order eight dumplings in about two seconds and stare at the menu until they come. Theo spends the whole meal telling the table about your toes."
                },
                "He's just joking. Sorry. He does that.",
                "\"He does,\" Theo says, and pours her tea."
              ],
              "after": "Mia, to Sam: \"theo told everyone about the pink toes\" Sam: \"was {name} ok\" Mia: \"he went quiet. theo poured my tea. i don't know why i noticed that\""
            }
          ]
        }
      ],
      "after": "You get home at one with wet sneakers in a plastic bag and black soles on both feet.",
      "debrief": "Your feet are just feet, even pink ones. The night kept going either way."
    },
    {
      "id": "c6",
      "route": "mia",
      "title": "Hole in one",
      "contact": "Mia",
      "irl": true,
      "gaydar": 85,
      "gaydarSays": "Hayley wrote on the scorecard the whole time and I pretended I couldn't see. Sorry. I could see.",
      "intro": "Third date, sort of. Mini golf at South Bank, and Mia's brought Hayley and a friend from her work, because she says four is less pressure than two. You wore wide-leg trousers, a cropped cardigan, the gold hoops from Eat Street and a proper rosy lipstick. There's a kids' birthday party two holes ahead of you. Hayley has the scorecard and the little pencil.",
      "outfits": [
        {
          "label": "Jeans, a cropped cardigan, the hoops, rosy lipstick",
          "thinks": "I've wanted a rosy lipstick like his for ages and he just found one. I'm going to have to ask him where he got it, ugh",
          "gaydar": -5,
          "intro": "Third date, sort of. Mini golf at South Bank, and Mia's brought Hayley and a friend from her work, because she says four is less pressure than two. Jeans and sneakers so it's \"normal\", but a cropped cardigan, the gold hoops from Eat Street and a proper rosy lipstick on top. There's a kids' birthday party two holes ahead of you. Hayley has the scorecard and the little pencil.",
          "them": [
            {
              "note": "Mia says hi without looking at your lipstick. She looks at everything else."
            }
          ]
        },
        {
          "label": "Wide-leg trousers, cropped cardigan, gold hoops, rosy lipstick",
          "thinks": "wide-leg trousers and hoops. hayley's gay friend from work has that exact outfit, like exact",
          "them": [
            {
              "note": "Mia hugs you hello with her body angled away, the way you hug someone you don't know very well."
            }
          ]
        },
        {
          "label": "A pleated skirt, cropped cardigan, hoops, lipstick and a handbag",
          "thinks": "Pleated skirt and a little handbag to mini golf. I tried to think of a straight reason and I couldn't",
          "gaydar": 5,
          "intro": "Third date, sort of. Mini golf at South Bank, and Mia's brought Hayley and a friend from her work, because she says four is less pressure than two. You went all in: a short pleated skirt, a cropped cardigan, the gold hoops, a rosy lipstick and a little shoulder bag you keep putting down to putt. There's a kids' birthday party two holes ahead of you. Hayley has the scorecard and the little pencil.",
          "them": [
            {
              "note": "Hayley looks at the skirt, then at the little bag, then at Mia, and writes something down before anyone's even hit a ball."
            },
            {
              "note": "Mia sees the skirt and says sorry. You don't know what for. Neither does she."
            }
          ]
        }
      ],
      "after": "That night Sam texts you a single \"?\" and then, a minute later, \"mia rang me\".",
      "debrief": "Someone else saying it for you isn't the same as you saying it. You still got to choose what came next, and crying at mini golf is allowed.",
      "thinks": [
        "Hayley didn't even write half of it down. He checked out the guy running the kids' party twice",
        "that squeal at the windmill omg. the whole kids' party turned round",
        "All these dates and he never tried to kiss me properly. I kept wearing nice things. I bought a new bra for Eat Street and nobody ever needs to know that"
      ],
      "them": [
        {
          "note": "Hole one. Mia's ball goes in the water and she says sorry to the ball."
        },
        "Sorry. Sorry, I'm so bad at this. Um.",
        {
          "note": "By hole six she's started four sentences to you and finished none of them. \"Can I ask... no, sorry.\" \"Do you ever... it doesn't matter.\" Hayley writes on the scorecard after every hole, a lot more than a number."
        },
        "{name}, can I just... sorry. Never mind. Your go.",
        {
          "note": "Hole seven. The windmill. You line it up and hit it and it goes straight through the windmill, down the little ramp and in. Hole in one."
        },
        {
          "note": "A noise comes out of you. High. The whole kids' party turns round."
        },
        {
          "from": "Hayley",
          "text": "Okay. I'm doing it."
        },
        "Hayley, no. Sorry. Hayley.",
        {
          "from": "Hayley",
          "text": "Babe, she's been trying to say it since the car park. She's going to do it at hole eighteen and then cry in the Uber."
        },
        {
          "from": "Hayley",
          "text": "Mia thinks you're gay. I think you're gay. It's on the card."
        },
        {
          "note": "She holds up the scorecard. Next to your name, under the numbers, in tiny pencil: called the counter guy darling. lipstick top-up hole 3. asked if mia's top is zara. took a photo of the windmill."
        },
        {
          "from": "Hayley",
          "text": "And I'm adding the squeal."
        },
        {
          "note": "She writes it."
        },
        "I'm so sorry. Oh my god I feel so bad. I was going to say it nicer. Not that it's bad. Like it's not a bad thing, sorry, I'm making it sound like a bad thing..."
      ],
      "replies": [
        {
          "you": "What's wrong with a squeal? It was a hole in one!",
          "them": [
            {
              "from": "Hayley",
              "text": "Nothing's wrong with it. It's just the gayest noise I've ever heard, and I've been to Kylie twice."
            },
            "It was a nice squeal. Sorry. It was."
          ],
          "replies": [
            {
              "you": "Okay. I'll give you the squeal. It was a gay squeal.",
              "them": [
                {
                  "from": "Hayley",
                  "text": "And the rest of the card?"
                },
                {
                  "note": "Mia's work friend has stopped pretending to look for her ball."
                }
              ],
              "replies": [
                {
                  "you": "Read me the card. Out loud. I want to hear it.",
                  "gaydar": 96,
                  "spark": 4,
                  "them": [
                    {
                      "note": "Hayley reads it out, all of it, loud. The kids' party has gone quiet to listen."
                    },
                    {
                      "note": "When she gets to \"lipstick top-up hole 3\" you say it was a top-up and a blot, actually, and Mia laughs so hard she has to hold onto the windmill."
                    },
                    "Sorry. Sorry. That's so funny. A BLOT.",
                    {
                      "from": "Hayley",
                      "text": "Adding the blot."
                    },
                    {
                      "note": "At the end Hayley gives you the card. You've won by four. Mia's on 41."
                    }
                  ],
                  "after": "Mia, to Sam, that night: \"hayley said it for me\" Sam: \"mia\" Mia: \"i know!! sorry!! he wasnt even mad. he made her read it out\" Sam: \"read what\" Mia: \"the card\"",
                  "outcome": "dodged"
                },
                {
                  "you": "Fine. All of it. I'm gay, Mia.",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    {
                      "note": "Mia goes very still with her putter."
                    },
                    "Oh.",
                    "Okay. Oh my god. Okay. Thank you. Sorry. I don't know why I said thank you.",
                    {
                      "note": "She hugs you. It's a proper hug, both arms, the longest one she's ever done. Hayley writes \"SAID IT\" on the card in capitals and underlines it twice."
                    },
                    "Can we still get dumplings after? Like as... sorry. As friends. Is that okay to say?"
                  ],
                  "after": "Mia, to Sam: \"he said it\" Sam: \"said what\" Mia: \"you know what\" Mia: \"sorry. hes gay. he said it at the windmill\" Sam: \"oh thank god\"",
                  "outcome": "told"
                }
              ]
            },
            {
              "you": "I'm not gay, Hayley. I'm just good at mini golf.",
              "them": [
                {
                  "from": "Hayley",
                  "text": "You're on 31, babe. You're not good at mini golf."
                },
                {
                  "from": "Hayley",
                  "text": "You're good at one hole."
                },
                {
                  "note": "Mia looks at the ground. Her work friend looks at Hayley."
                }
              ],
              "replies": [
                {
                  "you": "I'm not.",
                  "gaydar": 88,
                  "spark": 10,
                  "them": [
                    "Okay. Sorry. Okay.",
                    {
                      "note": "She stops saying sorry after that. She stops saying much at all. She putts the last eleven holes without looking at you and gets a two on the hard one, and doesn't say anything about it."
                    },
                    {
                      "from": "Hayley",
                      "text": "Cool. Great. Hole eight."
                    },
                    {
                      "note": "At the end Hayley folds the scorecard in half and puts it in her back pocket."
                    }
                  ],
                  "after": "Mia, to Sam, from the car: \"sorry i know its your coworker\" \"but he's gay sam\" \"he said he wasn't and then he called the counter guy darling AGAIN when we gave the putters back\" Sam: \"oh no\" Mia: \"sorry\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Grab the pencil off her and cross the whole list out.)",
                  "gaydar": 90,
                  "spark": 8,
                  "them": [
                    {
                      "from": "Hayley",
                      "text": "You can't cross out a squeal. It happened. There are witnesses. There are like nine witnesses under ten."
                    },
                    {
                      "note": "She takes the pencil back and writes \"crossed it all out\" underneath, very neatly."
                    },
                    "Hayley, stop. Sorry. Stop. He doesn't want..."
                  ],
                  "after": "Hayley, to Mia, that night: \"[photo of the scorecard]\" Mia: \"why do you still have that\" Hayley: \"framing it\" Mia: \"sorry is he ok\" Hayley: \"he crossed it out mia. he's fine. he's gay. he's fine\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(Look at Mia.) Mia. Is that what you were trying to say?",
          "them": [
            "Sorry. Yes. No. I mean... I didn't think it was bad. I just thought I was going out with a guy, and then you took the photo of the windmill, and I thought oh... sorry.",
            "Oh my god I feel so bad. Sorry. I'm saying sorry too much. Sorry.",
            {
              "from": "Hayley",
              "text": "Mia."
            },
            "Sorry!"
          ],
          "replies": [
            {
              "you": "(You open your mouth to say it's fine and it comes out as crying.)",
              "them": [
                {
                  "note": "Your face goes before you do. Then you're crying, holding a putter, next to a windmill."
                },
                "Oh no. Oh no, sorry, oh my god...",
                {
                  "note": "And then Mia's crying too. Properly, with her hand over her mouth."
                },
                {
                  "from": "Hayley",
                  "text": "Okay. Okay okay okay. Bench. Both of you. Now."
                },
                {
                  "note": "Hayley sits between you on the bench by hole seven and puts an arm round each of you. Mia's work friend digs a packet of tissues out of her bag and hands them out one at a time, you, Mia, you."
                },
                {
                  "from": "Hayley",
                  "text": "Look at you two. You're the same. You're literally doing the same face."
                },
                "Sorry. Sorry, I'm getting it on your cardigan."
              ],
              "replies": [
                {
                  "you": "I'm sorry I made you go out with me.",
                  "gaydar": 97,
                  "spark": 2,
                  "them": [
                    "No! Sorry! I asked YOU! I asked you at the dumplings!",
                    {
                      "note": "You both start laughing, still crying, which makes it worse. Hayley gets up and comes back with two slushies from the counter, a blue one and a red one, and puts one in each of your hands."
                    },
                    {
                      "from": "Hayley",
                      "text": "Drink. Nobody's sorry. Nobody's allowed to say sorry for the rest of the course."
                    },
                    "Sor... okay.",
                    {
                      "note": "For the next eleven holes Mia holds your arm between shots. Hayley lets you keep the pencil."
                    }
                  ],
                  "after": "Mia, to Sam, that night: \"we both cried at mini golf\" Sam: \"WHO cried\" Mia: \"both of us. hayley got us slushies\" Mia: \"sorry i know he's your coworker. he's ok. hes so nice sam. he's going to help me with my hair for your birthday\"",
                  "outcome": "cried"
                },
                {
                  "you": "(Say it into Hayley's shoulder.) I'm gay.",
                  "gaydar": 100,
                  "spark": 0,
                  "them": [
                    {
                      "from": "Hayley",
                      "text": "I know, babe. I know. Good. Well done."
                    },
                    {
                      "note": "She kisses the side of your head. Mia reaches across Hayley's lap and grabs your hand and holds onto it with both of hers."
                    },
                    "That's so good. Sorry. Not sorry. That's so good, {name}.",
                    {
                      "note": "Mia's work friend writes \"he said it\" on the scorecard with a heart over the i, then crosses out the squeal."
                    },
                    {
                      "from": "Hayley",
                      "text": "Okay. Important. Now you're allowed. Is Theo hot? Be honest. I have to live with him."
                    },
                    "HAYLEY."
                  ],
                  "after": "Hayley, to Mia, that night: \"he said theo's a 7\" Mia: \"why did you ask him that\" Hayley: \"i needed a second opinion\" Mia: \"only a 7?\" Hayley: \"he said 8 with his shirt off\" Mia: \"oh\"",
                  "outcome": "broke"
                },
                {
                  "you": "Can we just finish the game? I'm winning.",
                  "gaydar": 96,
                  "spark": 2,
                  "them": [
                    {
                      "from": "Hayley",
                      "text": "Yes. Yes, we can finish the game. Mia, blow your nose."
                    },
                    {
                      "note": "You play the last eleven holes with wet faces. Hayley gives you the scorecard and the pencil, and you keep your own score and write \"the squeal\" next to Hayley's name when she misses the clown."
                    },
                    "He's better at this than all of us. Sorry. He is.",
                    {
                      "from": "Hayley",
                      "text": "And you're doing my brows. Not tonight. Soon. You obviously know a brow."
                    },
                    {
                      "note": "Mia hits Hayley on the arm with her putter, gently."
                    }
                  ],
                  "after": "Mia, to Sam: \"we finished the whole course\" Sam: \"and??\" Mia: \"he won. he cried and then he won. hayley's obsessed with him now\" Sam: \"everyone's obsessed with him\" Mia: \"sorry i know\"",
                  "outcome": "cried"
                }
              ],
              "thinks": [
                "his lipstick stayed perfect when he cried. mine was all over my face. how",
                "Hayley hugged both of us and he did her little pat-pat on her back. I don't think we were ever really going out. I was just the girl he had dinner with"
              ]
            },
            {
              "you": "It's okay. You don't have to be sorry. I get why you'd think it.",
              "them": [
                "Do you... sorry. Are you?",
                {
                  "note": "Hayley's pencil stops."
                }
              ],
              "replies": [
                {
                  "you": "Yeah. I am.",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    "Okay.",
                    "Okay. Thank you for... sorry. Okay. That's really good. That's so good.",
                    {
                      "note": "She hugs you, quick and tight, and then stands back and looks at your hoops for some reason, and then hugs you again."
                    },
                    {
                      "from": "Hayley",
                      "text": "Writing it down."
                    },
                    {
                      "note": "She writes it down. Mia's work friend gives you a high five you weren't ready for."
                    }
                  ],
                  "after": "Mia, to Sam: \"i didnt even have to say it in the end\" Sam: \"who said it\" Mia: \"hayley. and then him\" Mia: \"sorry. he's so lovely. i feel so bad i made him come to mini golf\"",
                  "outcome": "told"
                },
                {
                  "you": "I don't know yet.",
                  "gaydar": 92,
                  "spark": 6,
                  "them": [
                    "That's okay. Sorry. That's okay. You don't have to know at mini golf.",
                    {
                      "from": "Hayley",
                      "text": "Writing down 'doesn't know yet'."
                    },
                    "Hayley, don't write that down.",
                    {
                      "note": "She writes it down anyway, and draws a little heart next to it. Mia holds your hand for the windmill again, loosely, like she's holding a friend's."
                    }
                  ],
                  "after": "Mia, to Sam: \"he said he doesn't know yet\" Sam: \"he knows\" Mia: \"sam!!\" Sam: \"i sit next to him mia. he knows\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(Take the scorecard off Hayley and read it.)",
          "them": [
            {
              "note": "You read it twice. Under \"took a photo of the windmill\" there's another one you hadn't seen: \"asked mia's work friend if her brows are tinted. they are.\""
            },
            {
              "from": "Hayley",
              "text": "I'm not sorry. Someone had to."
            },
            "I'm sorry. She's sorry. Hayley's sorry. Everyone's sorry."
          ],
          "replies": [
            {
              "you": "(Put the card down, put your putter back, and walk out.)",
              "them": [
                {
                  "note": "You hand your putter back at the counter. The guy says \"done already?\" and you say yes."
                },
                "{name}! Sorry! Wait! Sorry!"
              ],
              "replies": [
                {
                  "you": "(Keep walking.)",
                  "gaydar": 88,
                  "spark": 6,
                  "them": [
                    {
                      "note": "You walk along the river to the ferry. Your phone goes three times on the ferry and you don't look."
                    }
                  ],
                  "after": "In the morning there are four messages from Mia. \"sorry\" \"im so sorry\" \"hayley shouldnt have done that. well. she shouldn't have done it like THAT\" \"are you ok\". And one from a number you don't have: \"its hayley. sorry about the card. it was a good hole in one\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Stop and wait for her.)",
                  "gaydar": 92,
                  "spark": 4,
                  "them": [
                    {
                      "note": "She catches up with you near the big wheel, out of breath, holding your phone, because you left it on the bench."
                    },
                    "Sorry. Here. You left this. Sorry.",
                    "Hayley's not mean. She just does things. I wanted to say it nice. I had a nice version in my notes app.",
                    "Can we still get dumplings sometime? Like, as... sorry. Dumplings. You know."
                  ],
                  "after": "Mia, to Sam: \"he walked out and then he waited for me by the wheel\" Sam: \"so are you ok\" Mia: \"yeah. we're getting dumplings thursday. not a date. sorry. i know. i keep saying that\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "This is my best review ever. Can I keep it?",
              "gaydar": 95,
              "spark": 5,
              "them": [
                {
                  "from": "Hayley",
                  "text": "Oh my god. Yes. Wait."
                },
                {
                  "note": "She takes it back, signs the bottom, and hands it over. Mia's work friend signs it too. Then Mia, very small, in the corner."
                },
                "Sorry. I didn't know where to sign.",
                {
                  "note": "You fold it into your pocket. Hayley tells you to play the rest of the course as \"the squeal\". You do. Every time you sink one the kids' party cheers."
                }
              ],
              "after": "Hayley, to Mia, that night: \"he kept the card\" Mia: \"i know\" Hayley: \"i love him. can i have him\" Mia: \"hes not a cat hayley\" Hayley: \"is he coming to my thing friday\" Mia: \"sorry. i already asked him\"",
              "outcome": "dodged"
            }
          ]
        }
      ]
    },
    {
      "id": "mia-end",
      "route": "mia",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Lachlan asked if Zara is a tennis player. Sorry. I love him.",
      "title": "Mia and Lachlan",
      "contact": "Mia",
      "intro": "Two months later. You're at Sam's for her birthday barbecue in a long linen shirt, lashes and the gold hoops. Mia's there. She's brought a guy: Lachlan, an accountant, in boat shoes and a quarter-zip, talking to Sam's husband about negative gearing. That night, Mia messages you.",
      "them": [
        "hi {name}!! sorry its late",
        "it was really nice to see you today. you looked SO good. the hoops with the lashes",
        "sam's sister asked me if you were single and i didnt know what to say lol",
        "and sorry about mini golf. properly. i was so weird",
        "lachlan's really nice. i asked him if he knew what zara was and he said is that a tennis player 😭",
        "anyway sorry im rambling. hope you're good",
        {
          "text": "also hayley says hi!! she still has the scorecard. she says you have to let her set you up. sorry, she's like that",
          "if": "c6=told|broke"
        },
        {
          "text": "i still feel so bad about the bench. sorry. hayley says you're fine and i'm the one who needs to get over it lol",
          "if": "c6=cried"
        },
        {
          "text": "um also hayley keeps asking if you've 'said anything yet'. i told her to stop. sorry",
          "if": "c6=dodged"
        }
      ],
      "replies": [
        {
          "you": "Mia! You don't have to say sorry. Honestly, babe, mini golf was a lot. I was a LOT. I'm so happy for you. Lachlan seems sweet. A bit beige, but sweet.",
          "them": [
            "a bit beige 😭",
            "he IS beige. hes got like six quarter-zips and theyre all navy",
            "after you i just wanted someone simple. he doesnt care where my top is from. its so relaxing",
            "and hes like. a cuddler? he falls asleep on me and i cant move all night. i love it",
            "sorry. you never really did that. its fine",
            "can i ask you something? you can say no"
          ],
          "replies": [
            {
              "you": "Ask me anything. I'm an open book. Mostly.",
              "them": [
                "are you seeing anyone? like... anyone?",
                "sam said you've been going out in the valley with dani a lot",
                "sorry thats nosy"
              ],
              "replies": [
                {
                  "you": "Not really. Just having fun. Dancing. It's a straight-guy-having-fun thing, Mia.",
                  "them": [
                    "ok 😊",
                    "in lashes",
                    "sorry!! im teasing"
                  ]
                },
                {
                  "you": "There's no one. And there's no one in the Valley either, before you ask. Sam's a gossip.",
                  "them": [
                    "sam is SUCH a gossip",
                    "ok well whoever it ends up being. i hope they like the hoops"
                  ]
                }
              ]
            },
            {
              "you": "No. Not tonight. I've had two wines and Sam's husband tried to explain negative gearing to me.",
              "them": [
                "lol fair",
                "lachlan explained it to me the whole drive home",
                "night 😊"
              ]
            }
          ]
        },
        {
          "you": "It's fine, Mia. Really. You were honest, eventually. I'm glad you found someone.",
          "them": [
            "thanks. you were nice about it even when i wasnt",
            "ok one more thing then im going to bed",
            "i think youd be really happy with someone who loves all the hoops and lipstick stuff",
            "and i dont think thats a girl. sorry. i dont mean it badly"
          ],
          "replies": [
            {
              "you": "What's that supposed to mean? You think I should date guys?",
              "them": [
                "i didnt say that!!",
                "ok i kind of said that",
                "sorry. going to bed. lachlans been asleep since 9:30"
              ]
            },
            {
              "you": "Maybe. I don't know. Goodnight, Mia. Say hi to Lachlan.",
              "them": [
                "i will 😊",
                "he'll say 'who'",
                "night"
              ]
            }
          ]
        },
        {
          "you": "Can I come over? I need to say something and I can't do it over text.",
          "them": [
            "wait now??",
            "um ok. lachlan's here though. is that ok",
            "unit 4. gate code is 1972. sorry the lift is really slow"
          ],
          "replies": [
            {
              "you": "(Book an Uber before you can change your mind.)",
              "them": [
                {
                  "note": "Twenty minutes later Mia opens the door in a big sweatshirt. Lachlan's in the hallway behind her in a navy quarter-zip, holding a cup of tea."
                },
                "hi!! come in. sorry, can you take your shoes off? we just got the floors done",
                "socks too sorry. they're so slippery. lachlan went over twice yesterday",
                {
                  "from": "Lachlan",
                  "text": "twice. right on my bum. hey man"
                },
                {
                  "note": "You'd forgotten. You painted your toes on Sunday, lilac with a bit of glitter. You peel your socks off and there they are, on her doormat, under the hallway light."
                },
                {
                  "note": "Lachlan looks down at them, then at you, and smiles."
                },
                {
                  "from": "Lachlan",
                  "text": "oh man. glitter"
                },
                "oh my god. {name}. your toes. they're so cute",
                "sorry. you came to say something. go"
              ],
              "replies": [
                {
                  "you": "(Stand up as straight as you can, barefoot.) Mia, I made a mistake. I want another chance. I wanted to say it in front of Lachlan so it's fair.",
                  "them": [
                    {
                      "from": "Lachlan",
                      "text": "ha. sure man. you two have a chat. i'll be in the lounge"
                    },
                    {
                      "note": "He says it over his shoulder and wanders off down the hall, whistling."
                    },
                    "{name} thats so sweet",
                    "but you said it so quietly lol. and youre holding your socks",
                    "i cant. sorry. i just dont think of you like that anymore. at all",
                    "like if you tried to kiss me i think id laugh. not in a mean way. sorry",
                    "lachlan says you should come to his work drinks. theres a guy called nico who'd love you",
                    "sorry. im just saying. he really would",
                    {
                      "note": "She gives your arm a little rub."
                    }
                  ],
                  "replies": [
                    {
                      "you": "(Look down at your toes.) Okay. That's okay. Sorry for coming over.",
                      "them": [
                        "no!! don't be sorry",
                        {
                          "note": "She hugs you. From the lounge, without looking away from the game:"
                        },
                        {
                          "from": "Lachlan",
                          "text": "want a coffee man? or a hot chocolate"
                        },
                        "stay for a tea. he wants to ask you about a shirt for my cousin's wedding lol"
                      ]
                    },
                    {
                      "you": "He's not even a little bit worried, is he?",
                      "them": [
                        "no lol",
                        "sorry",
                        "he said to me in the kitchen before 'mia hes got glitter on his toes i think im ok'",
                        "and then he laughed for like a whole minute",
                        "hes not wrong though"
                      ]
                    }
                  ]
                },
                {
                  "you": "(Stand on one foot so they can't see the other one.)",
                  "gaydar": 100,
                  "them": [
                    {
                      "from": "Lachlan",
                      "text": "steady there, princess"
                    },
                    {
                      "note": "He comes down the hall and holds your elbow while you wobble. His hand's warm. Whatever you were going to say is gone."
                    },
                    {
                      "from": "Lachlan",
                      "text": "nice colour. mia's got that one. you two should share"
                    },
                    {
                      "note": "\"Thanks,\" you say. It comes out tiny."
                    },
                    "omg",
                    "{name} did you just go shy at lachlan",
                    "youre so pink",
                    "ok im putting the kettle on. youre staying"
                  ]
                }
              ]
            },
            {
              "you": "Actually, never mind. It's late. Night, Mia.",
              "them": [
                "are you sure?? ok",
                "night {name} 😊 text me tomorrow"
              ]
            }
          ]
        },
        {
          "you": "Did Sam's sister really ask if I was single? Which one? The one with the bob?",
          "them": [
            "yes the one with the bob!!",
            "i said i didn't know",
            "then she said 'is he... you know' and did a little wrist thing and i said i DON'T KNOW sorry and walked away",
            "sorry. i shouldn't have told you that"
          ],
          "replies": [
            {
              "you": "She did a WRIST thing? Mia. Why does everyone keep doing wrist things at me?",
              "them": [
                "i don't know!!",
                "sorry",
                "night {name}. you looked really pretty today. sorry. handsome. you know what i mean"
              ]
            },
            {
              "you": "The bob was very cute though. Tell her I said that.",
              "them": [
                "lol ok",
                "shes going to be so confused",
                "night"
              ]
            }
          ]
        }
      ],
      "after": "Mia, to Lachlan, in bed: \"do you think {name} is gay?\" Lachlan, half asleep: \"who's {name}?\" Mia: \"the guy with the hoops at the barbecue\" Lachlan: \"oh. yeah, obviously.\" Then he's asleep.",
      "debrief": "Mia wanted someone who's asleep by 9:30. That's allowed, and it was never going to be you."
    },
    {
      "id": "ella-1",
      "route": "ella",
      "gaydar": 20,
      "gaydarSays": "His Hinge pics are a polo at a wedding. In real life he knew what a 'cat eye' was. Hmm.",
      "title": "Matched",
      "contact": "Ella",
      "outfits": [
        {
          "label": "Boy clothes: the polo from your Hinge photos",
          "thinks": "the polo from his pics, very wedding guest. then he crossed his legs and his loafers were nicer than mine and i went hm",
          "masc": true,
          "spark": 10,
          "gaydar": -10,
          "intro": "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding, which Jess says is \"very marketable\". First date: drinks at a little bar in West End. You wore the polo. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it."
        },
        {
          "label": "A black tee and a bit of concealer",
          "thinks": "My concealer. MY concealer, same shade, I'd know it anywhere",
          "intro": "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. You wore a fitted black tee and a bit of concealer you stole from Nicole. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it.",
          "them": [
            "also was that concealer?? sorry i do makeup i can tell lol. it was good concealer"
          ]
        },
        {
          "label": "A black tee, concealer and a clear brow gel",
          "thinks": "clear brow gel on a first date. his brows were more done than mine. i'm dying",
          "gaydar": 5,
          "intro": "You matched with Ella on Hinge. Your profile is mostly photos of you in a polo shirt at a wedding. First date: drinks at a little bar in West End. A fitted black tee, a bit of concealer and clear brow gel, which made your brows look annoyingly good. Ella's a primary school teacher with a cat-eye so sharp you couldn't stop looking at it.",
          "them": [
            "and your brows were gelled. like properly. better than mine tbh which is rude"
          ]
        }
      ],
      "thinks": [
        "He looked at my eyeliner before he looked at my eyes. I've done enough brunches with gay guys, I know that look",
        "he was SO fun tho. gaydar going off a bit all night and i ignored it because i'd shaved my legs and i wasn't wasting a leg shave on a feeling"
      ],
      "them": [
        "hey!! home safe",
        "tonight was really fun",
        "also how did you know what a cat eye was lol",
        "you just said it like it was nothing. none of the guys i go out with know that word"
      ],
      "replies": [
        {
          "you": "My friend Nicole does hers every day. I've watched her do it a hundred times. Yours was perfect though, honestly. Like a ruler.",
          "them": [
            "omg stop 😭",
            "it took me 4 goes tonight",
            "second date?"
          ],
          "replies": [
            {
              "you": "Yes! What about GOMA next weekend? There's an exhibition I've been wanting to see.",
              "them": [
                "omg yes",
                "sunday? 😊"
              ]
            },
            {
              "you": "Second date, yes. And you can show me how you did it. The eyeliner. For research.",
              "gaydar": 25,
              "them": [
                "haha for research",
                "ok deal",
                "GOMA? sunday?"
              ]
            }
          ]
        },
        {
          "you": "I don't know, I just noticed. You looked really good tonight.",
          "them": [
            "😊 thank you",
            "you looked good too. different to your pics. better",
            "your pics are literally you in a polo at a wedding. i nearly didn't swipe",
            "second date?"
          ],
          "replies": [
            {
              "you": "The polo pics were Jess's idea. She said they're 'marketable'.",
              "them": [
                "lol jess was wrong",
                "you're way cuter in person. sunday? GOMA?"
              ]
            },
            {
              "you": "Second date. Definitely.",
              "them": [
                "yay. sunday. GOMA. i'll meet you at the big red thing out the front"
              ]
            }
          ]
        },
        {
          "you": "Is that bad? I can pretend I don't know. What's eyeliner? Is it a type of pen?",
          "them": [
            "lol no don't",
            "my last boyfriend called it 'the black stuff'. for two years",
            "it was nice to be noticed tbh",
            "second date? GOMA sunday?"
          ],
          "replies": [
            {
              "you": "Sunday. I'll wear the polo so you recognise me.",
              "them": [
                "please don't 😭",
                "big red thing out the front. 11?"
              ]
            },
            {
              "you": "Yes. And I'm going to notice everything. Brace yourself.",
              "gaydar": 25,
              "them": [
                "ok that's a bit scary lol",
                "sunday. 11. big red thing"
              ]
            }
          ]
        }
      ],
      "after": "Ella, to her sister: \"date was so good. he's funny. he complimented my eyeliner??\" Her sister: \"wait he knew what eyeliner was\" Ella: \"he knew what a CAT EYE was\" Her sister: \"interesting\""
    },
    {
      "route": "ella",
      "path": "masc",
      "id": "ella-m2",
      "title": "GOMA, no gel",
      "contact": "Ella",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "He didn't know what eyeliner was called again. I think he was pretending. I don't care.",
      "intro": "Second date. Sunday at GOMA. A plain navy tee and jeans, nothing on your face, nothing on your brows. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture.",
      "them": [
        "Hi! Okay, I've got the map. There's the Pacific art one and then a fashion one upstairs that's apparently amazing. Which first?",
        {
          "note": "She's holding your hand already. She grabbed it when you walked up."
        }
      ],
      "replies": [
        {
          "you": "Pacific art. Fashion's not really my thing.",
          "masc": true,
          "them": [
            {
              "note": "You do the Pacific art. You read every sign. She leans on you in front of the big canoe."
            },
            "Okay, you're actually so easy to be with. My last boyfriend would've been in the cafe by now."
          ],
          "replies": [
            {
              "you": "I'm still going to make you get a coffee after.",
              "masc": true,
              "spark": 85,
              "outcome": "kept",
              "them": [
                "Deal. You're paying. That's the rule.",
                {
                  "note": "She kisses you in the lift. A lady with a pram looks away."
                }
              ],
              "after": "Ella, to her sister: \"he read every single sign\" Sister: \"is that a good thing\" Ella: \"it's a really good thing. he held my hand the whole time\""
            },
            {
              "you": "...Okay, can we do the fashion one quickly though?",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                {
                  "note": "Upstairs you spend twenty minutes in front of one dress. She checks her phone twice."
                },
                "You really like that one, huh.",
                "\"The cut is just really good.\"",
                "Yeah. Totally."
              ],
              "after": "Ella, to her sister: \"he said fashion wasn't his thing and then cried at a dress\" Sister: \"cried??\" Ella: \"his eyes went shiny. its the same thing\""
            }
          ]
        },
        {
          "you": "Fashion first. Obviously.",
          "them": [
            {
              "note": "You go straight upstairs. You know more about the dresses than the little signs do."
            },
            "How do you know who that designer is?",
            "Like. How."
          ],
          "replies": [
            {
              "you": "My sister's friend. She went through a phase. I just remember stuff.",
              "masc": true,
              "spark": 66,
              "outcome": "kept",
              "them": [
                "Ha. Okay. Your sister's friend's phase.",
                {
                  "note": "She looks at you a bit longer than she needs to, then lets it go and takes your hand again."
                }
              ],
              "after": "Ella, to her sister: \"he knew who the designer was\" Sister: \"weird\" Ella: \"it was for his sister's friend. apparently. i decided to believe it\""
            },
            {
              "you": "I just love it. Is that bad?",
              "spark": 50,
              "outcome": "slipped",
              "them": [
                "No! No. It's not bad.",
                "It's just. None of the guys I've dated could name a designer.",
                {
                  "note": "She lets go of your hand to take a photo of a gown, and doesn't take it back after."
                }
              ],
              "after": "Ella, to her sister: \"he can name designers\" Sister: \"so can i\" Ella: \"you're a girl\""
            }
          ]
        }
      ],
      "debrief": "You don't have to perform anything on a date. Liking what you like is allowed in a gallery."
    },
    {
      "route": "ella",
      "path": "masc",
      "id": "ella-m3",
      "title": "Her sister's engagement",
      "contact": "Ella",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "Everyone thinks he's lovely. My sister's fiancé asked if he played rugby. He said no. Still liked him.",
      "intro": "Two months in. Ella's sister's engagement party at a bowls club in Bulimba. Everyone's here. You wore a plain white shirt and chinos.",
      "them": [
        {
          "note": "Her sister's fiancé shakes your hand for a long time.",
          "if": "ella-m2=kept"
        },
        {
          "note": "Her sister looks at your shirt, then at Ella, and raises her eyebrows. Ella shakes her head.",
          "if": "ella-m2=slipped"
        },
        "Okay. One of my sister's friends wants to know if you're my boyfriend. Out loud. In front of everyone.",
        {
          "note": "Ella's holding your hand. Everyone at the table is waiting."
        }
      ],
      "replies": [
        {
          "you": "Yeah. I am.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "\"Oh lovely,\" the woman says.",
            {
              "note": "Ella squeezes your hand so hard it hurts. She doesn't let go for the rest of the night."
            },
            "You didn't have to say that. But I'm really glad you did."
          ],
          "after": "You're Ella's boyfriend. Her sister's fiancé sends you a link to a touch football team. You say maybe. You go to bowls with them on Sundays. It's a nice life. Mostly you talk about bowls."
        },
        {
          "you": "(Laugh.) We're just seeing how it goes.",
          "spark": 55,
          "outcome": "drift",
          "them": [
            {
              "note": "Ella laughs too. A beat late."
            },
            "Yeah. We're just seeing.",
            {
              "note": "In the car she's quiet. \"Seeing how it goes,\" she says, to the window."
            }
          ],
          "after": "Ella stops texting good morning, then stops texting good night. Six weeks later she's dating a rugby player called Connor and her sister's fiancé likes him more than he liked you."
        },
        {
          "you": "(Lean over.) Her sister's dress is incredible, by the way. Is it silk?",
          "them": [
            "\"It is!\" her sister says, delighted. \"Ella, he knows silk.\"",
            "He knows a lot of things.",
            {
              "note": "Ella lets go of your hand to get a drink."
            },
            "Honestly you should come shopping with us. You'd have more fun than you have with me."
          ],
          "spark": 40,
          "outcome": "drift",
          "after": "Ella's sister adds you to a group chat called \"bridesmaid dresses\". Ella leaves it a week later. You don't."
        }
      ],
      "debrief": "A bowls club full of her family is a lot of eyes. What you said there isn't the last word on anything."
    },
    {
      "id": "ella-2",
      "route": "ella",
      "gaydar": 50,
      "gaydarSays": "We went to GOMA and he spent the whole time looking at dresses. I don't know what I expected.",
      "title": "GOMA",
      "contact": "Ella",
      "irl": true,
      "outfits": [
        {
          "label": "A nice shirt and a clear brow gel",
          "thinks": "Checked his brows in the display case glass. Twice. He thought I didn't see",
          "gaydar": -5,
          "intro": "Second date. Sunday at GOMA. You wore a nice cream shirt and the brow gel. Ella's in a slip skirt and a little cardigan and she's already waiting by the big red sculpture out the front.",
          "them": [
            {
              "note": "She goes to link arms with you, then sort of pats your arm instead."
            }
          ]
        },
        {
          "label": "A cream shirt, a bit of mascara and a light lip tint",
          "thinks": "mascara and lip tint at GOMA. i wanted to redo his lashes the whole exhibition and i didn't think about kissing him once",
          "intro": "Second date. Sunday at GOMA. A cream shirt, a coat of mascara and a light lip tint. You practised the mascara three times this morning. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She does a double take at your lashes.",
          "them": [
            {
              "note": "She sees the mascara up close and her smile changes. Still a smile. A friendlier one."
            }
          ]
        },
        {
          "label": "A cream shirt, mascara, lip tint and your nails painted lilac",
          "thinks": "he said lilac. out loud, to me. a guy said lilac to me on a date",
          "gaydar": 5,
          "intro": "Second date. Sunday at GOMA. A cream shirt, mascara, lip tint and lilac nails. Ella's in a slip skirt and a little cardigan, waiting by the big red sculpture. She looks at your hands, then your face, then your hands again.",
          "them": [
            {
              "note": "\"Are your nails... purple?\" she says. \"Lilac,\" you say. She says \"oh\" and then \"cute\" a second too late."
            },
            {
              "note": "In the fashion room she doesn't take your hand. She takes a photo of you in front of a gown instead."
            }
          ]
        }
      ],
      "thinks": [
        "He stood at the gowns forever and he was picturing himself in one. It was all over his face",
        "Finally held his hand. So soft. Felt nothing and kept holding it so it wasn't weird, and he didn't even squeeze back",
        "he's gay. i'm still inviting him to the engagement party because i want his opinion on my dress, idk what that says"
      ],
      "them": [
        "Hi! Okay, I've got the map. There's the Pacific art one and then there's this fashion one upstairs that's apparently amazing. Which first?",
        {
          "note": "She's smiling. She keeps glancing at your face."
        }
      ],
      "replies": [
        {
          "you": "Oh my god, the fashion one. Obviously. Sorry. Is that okay? There's a gown up there with like ten thousand hand-sewn beads.",
          "gaydar": 55,
          "them": [
            "Ha. Sure. Fashion first.",
            {
              "note": "Upstairs you stand in front of the beaded gown for eleven minutes explaining the beading and the neckline. Ella stands next to you and nods."
            },
            "You know a lot about dresses.",
            "Like more than me."
          ],
          "replies": [
            {
              "you": "I just think they're beautiful. Like, it's art. Wearable art. That's all.",
              "them": [
                "Yeah. No, totally.",
                "My last boyfriend would've been in the cafe by now. So.",
                {
                  "note": "She doesn't hold your hand walking to the next room."
                }
              ]
            },
            {
              "you": "Ella. You'd look amazing in it. That green is completely your colour.",
              "gaydar": 58,
              "them": [
                "Oh! Thanks.",
                "That's literally what my friend Maddy says to me in change rooms.",
                {
                  "note": "On the stairs she walks a little ahead of you."
                }
              ]
            },
            {
              "you": "Sorry. I went on a bit. I always do when it comes to dresses. Nicole says I'm a menace.",
              "them": [
                "No, it's fine! It's kind of cute.",
                "Do you... wear dresses? Sorry. That's a weird question. I don't know why I asked that.",
                {
                  "note": "You both stand there in front of the gown and don't say anything for a bit too long."
                }
              ],
              "replies": [
                {
                  "you": "Ha! No. God, no. Can you imagine?",
                  "gaydar": 55,
                  "them": [
                    "Ha. Yeah. No.",
                    {
                      "note": "You both laugh a bit too hard."
                    }
                  ]
                },
                {
                  "you": "...Not yet.",
                  "gaydar": 65,
                  "them": [
                    {
                      "note": "She turns and looks at you properly for the first time all day."
                    },
                    "Not yet?",
                    "Okay. Okay. Cool. Let's... let's go see the Pacific stuff."
                  ],
                  "after": "Ella, to her sister: \"i asked if he wears dresses. like as a joke\" \"he said NOT YET\" Sister: \"ELLA\""
                }
              ]
            }
          ]
        },
        {
          "you": "Whatever you want! I'm easy. You pick.",
          "them": [
            "Okay, Pacific first, then fashion. I'm a teacher, I like a plan.",
            {
              "note": "You walk around the Pacific gallery and she tells you about her Year 2s. She's funny. Then you get to the fashion room and you don't hear a word she says for ten minutes."
            },
            "{name}? Hello? You've been staring at that dress for ages."
          ],
          "replies": [
            {
              "you": "Sorry! It's just so pretty. Look at the colour. Imagine wearing that to brunch.",
              "gaydar": 55,
              "them": [
                "Imagine ME wearing it to brunch, you mean?",
                {
                  "note": "She says it like a joke."
                }
              ]
            },
            {
              "you": "Sorry. I zoned out. Tell me about your Year 2s again.",
              "them": [
                "Ha, it's okay. Okay, so there's this kid called Oscar...",
                {
                  "note": "You listen. You still look back at the dress when she's not looking."
                }
              ]
            }
          ]
        }
      ],
      "after": "Ella, to her sister: \"second date at GOMA\" Sister: \"and??\" Ella: \"he spent the whole time looking at dresses\" Sister: \"looking at them or wanting to wear them\" Ella: \"idk??\""
    },
    {
      "id": "ella-wedding",
      "route": "ella",
      "title": "Plus one",
      "contact": "Ella",
      "gaydar": 58,
      "spark": 40,
      "gaydarSays": "I asked him to my sister's engagement and his first question was what colour the bridesmaids are wearing.",
      "intro": "A week after GOMA. Ella's sister just got engaged.",
      "them": [
        "ok so my sister got engaged!!",
        "the party's in a few weeks. do you want to be my plus one?",
        "no pressure. my whole friend group will be there so its a lot"
      ],
      "replies": [
        {
          "you": "Yes! What colour is everyone wearing? Is there a theme?",
          "them": [
            "a theme?",
            "its at a bowls club {name}",
            "why is that your first question lol"
          ],
          "replies": [
            {
              "you": "I just want to match you. Is that weird?",
              "spark": 38,
              "them": [
                "a bit",
                "my last boyfriend wore a polo to my birthday",
                "you want to match me. its so sweet. its also something my friend maddy would say"
              ],
              "after": "Ella, to Maddy: \"asked {name} to the engagement\" Maddy: \"and\" Ella: \"he asked what colour everyone's wearing\" Maddy: \"lol thats me\" Ella: \"exactly maddy\""
            },
            {
              "you": "Never mind. I'll wear whatever. Can't wait.",
              "spark": 48,
              "them": [
                "ok good",
                "its going to be fun",
                "you can wear the polo. the hinge one. i miss the hinge one"
              ],
              "after": "Ella, to Maddy: \"he asked about a theme for a bowls club party\" Maddy: \"and?\" Ella: \"and then he said never mind really fast\""
            }
          ]
        },
        {
          "you": "Of course. I'll be the one in a shirt and tie.",
          "them": [
            "a tie!!",
            "ok thats very boyfriend of you",
            {
              "note": "Five minutes later you send her a photo of three ties, and then a photo of a pink one, separately."
            },
            "why is the pink one separate"
          ],
          "replies": [
            {
              "you": "Because it's the one I want to wear.",
              "spark": 36,
              "them": [
                "oh",
                "ok wear the pink one",
                "my sister's fiancé is going to stare at it all night lol"
              ],
              "after": "Ella, to Maddy: \"he's wearing a pink tie to the engagement\" Maddy: \"cute\" Ella: \"he sent it separately like it was a secret\""
            },
            {
              "you": "No reason. The navy one.",
              "spark": 46,
              "them": [
                "ok. navy",
                "you sure?",
                "you seem sure"
              ],
              "after": "Ella, to Maddy: \"he's wearing navy\" Maddy: \"boring\" Ella: \"i know. he sent a pink one first. i think he wanted the pink\""
            }
          ]
        }
      ],
      "debrief": "Wanting to know what everyone's wearing is a normal thing to want."
    },
    {
      "id": "c6b",
      "route": "ella",
      "title": "Ladies",
      "contact": "Ella",
      "irl": true,
      "gaydar": 90,
      "gaydarSays": "The waitress took one look at our table and said ladies. I'm still not over it. I'll never be over it.",
      "intro": "Third date. Brunch in Paddington, at the window. You'd bought the dress the day after GOMA and never worn it out of the flat: pale blue, floral, little buttons down the front. Nails done, foundation, blush, lashes, a pink lip. You nearly changed three times. Ella's in jeans and a tee. You've been sitting down six minutes when her friends Meg and Maddy walk in, very surprised to see her.",
      "outfits": [
        {
          "label": "The dress, white sneakers and light makeup",
          "thinks": "floral dress with white sneakers so it's casual. babe it has buttons down the front",
          "gaydar": -5,
          "intro": "Third date. Brunch in Paddington, at the window. The pale blue floral dress you bought the day after GOMA, but with white sneakers so it felt less scary, and light makeup: a bit of foundation, lashes, a pink lip. Ella's in jeans and a tee. You've been sitting down six minutes when her friends Meg and Maddy walk in, very surprised to see her.",
          "them": [
            {
              "note": "Ella looks at you in the dress and her mouth does something. She turns it into a smile."
            }
          ]
        },
        {
          "label": "The dress, nails, foundation, blush, lashes, a pink lip",
          "thinks": "his lashes and his pink lip, at brunch, on our date. I actually tried this morning and his face was still more done than mine",
          "them": [
            {
              "note": "Ella looks at your lashes for a long time. She doesn't kiss you hello. She tells you you look gorgeous, the way she says it to Meg."
            }
          ]
        },
        {
          "label": "The dress, strappy heels, painted toes, full glam and a handbag",
          "thinks": "Strappy heels and a handbag in Paddington. MY date. I was in jeans",
          "gaydar": 5,
          "intro": "Third date. Brunch in Paddington, at the window. The pale blue floral dress, strappy heeled sandals, pink toes, full glam (foundation, contour, blush, lashes, a pink lip) and a little white handbag. Ella's in jeans and a tee. You've been sitting down six minutes when her friends Meg and Maddy walk in, very surprised to see her.",
          "them": [
            {
              "note": "Maddy looks under the table at your heels and says \"oh, stop\" to nobody."
            },
            {
              "note": "Ella moves her bag off the chair next to her and puts it on the one between you."
            }
          ]
        }
      ],
      "debrief": "Being turned into a scene is a lot. Crying in front of people is okay, and the girls at that table were on your side once it landed.",
      "thinks": [
        "the waitress said ladies and honestly, look at the table. me, Meg, Maddy and my date in a floral dress",
        "i want to borrow his dress and i do NOT want to sleep with him. you can't have both. well you can, just not me",
        "coffee machine guy looked over and I SAW {name} look back. on my date. at my brunch"
      ],
      "them": [
        {
          "note": "Maddy says \"oh my god, what are the chances\" and pulls a chair over before anyone's asked. Meg's already got her sunglasses off and is looking at your dress."
        },
        "I didn't tell them. I literally didn't. Okay, I said Paddington. I didn't say WHICH Paddington.",
        {
          "from": "Meg",
          "text": "There's one Paddington, Ella."
        },
        {
          "note": "A waitress comes over with menus, smiles round the table and says, \"Morning, ladies. What can I get you?\""
        },
        {
          "note": "Ella puts her menu down flat."
        },
        "Ladies.",
        "She said ladies. Did everyone hear that? We're ladies. All four of us.",
        {
          "from": "Maddy",
          "text": "Ella."
        },
        "No, I'm just narrating. It's my third date. I'm at brunch with my date and my two best friends who happened to be walking past, and the waitress has looked at the table and gone, four ladies. I literally can't.",
        {
          "note": "The waitress says \"sorry, sorry\" and goes red. A guy at the next table turns round. The waiter at the coffee machine looks over at you, then down at his milk jug."
        },
        {
          "from": "Maddy",
          "text": "Can I just say. The dress. Where's it from, because I need it."
        },
        "Maddy. Read the room.",
        {
          "from": "Maddy",
          "text": "I am reading it. The room is that dress."
        }
      ],
      "replies": [
        {
          "you": "(To the waitress) Ladies is fine! Can I get a mimosa?",
          "them": [
            {
              "note": "The waitress laughs, relieved, and writes it down."
            },
            "Ladies is FINE, he says. Okay. Okay. Mimosas. Four. It's a moment, we're having one.",
            {
              "from": "Meg",
              "text": "Why are you being weird? He's fine with it."
            },
            "Because I'm meant to be on a date, Meg!",
            {
              "from": "Maddy",
              "text": "Are you though?"
            },
            {
              "note": "The mimosas come. Before anyone's touched theirs, Ella stands up, scrapes her chair back, and lifts her glass."
            },
            "Okay. Everyone. To {name}. Coming out. At brunch. In Paddington. In florals.",
            {
              "note": "You haven't said anything. Nobody's said anything. The guy at the next table lifts his coffee."
            }
          ],
          "replies": [
            {
              "you": "(You try to laugh. It comes out wrong, and then you're crying.)",
              "them": [
                {
                  "note": "You laugh, or you start to, and it turns into something else halfway out. Then you're crying at the window table with a mimosa in front of you."
                },
                "No no no no. Oh babe. Oh no. I thought you'd laugh. It was a bit. It was a BIT.",
                {
                  "note": "Maddy's already round your side of the table. She tips your chin up with two fingers and fixes the corner of your lashes with a folded napkin, very carefully."
                },
                {
                  "from": "Maddy",
                  "text": "Don't rub. Look up. You're fine, they're fine. Look at the ceiling."
                },
                {
                  "note": "Meg calls the waitress back and orders the pancakes with the berries on them and tells her they're for you."
                },
                {
                  "note": "Ella sits down hard and pulls her chair round until it's touching yours."
                },
                "I'm so sorry. That was so much. I made it a scene. I always make it a scene, and you didn't even say anything."
              ],
              "replies": [
                {
                  "you": "(Through it) You're not wrong, though.",
                  "gaydar": 99,
                  "spark": 1,
                  "them": [
                    "I know. Sorry. I know I'm not.",
                    "I just wanted you to say it, not me. I literally stole it off you. I'm the worst.",
                    {
                      "from": "Meg",
                      "text": "You're a bit the worst."
                    },
                    {
                      "note": "Maddy keeps one hand on your back the whole time the pancakes are coming. When they arrive Ella cuts the first bit for you."
                    }
                  ],
                  "after": "Ella, to her sister: \"he cried at brunch\" Sister: \"WHAT why\" Ella: \"i did a toast\" Sister: \"ella\" Ella: \"i know. i'm the worst. maddy fixed his lashes. he's coming to the beach with us\"",
                  "outcome": "cried"
                },
                {
                  "you": "Can I have the pancakes?",
                  "gaydar": 97,
                  "spark": 2,
                  "them": [
                    {
                      "from": "Meg",
                      "text": "They're yours. They were always yours. Nobody else is having the pancakes."
                    },
                    {
                      "note": "They come. Ella pushes the maple syrup at you, then the cream, then her own coffee."
                    },
                    "Eat. Eat, babe. I'm getting you another mimosa and this one isn't a toast. It's just a drink.",
                    {
                      "from": "Maddy",
                      "text": "And I'm borrowing the dress. Not now. I'm just telling you now so it's in your head."
                    }
                  ],
                  "after": "Ella, to Meg and Maddy, after: \"i made him cry\" Meg: \"he ate all the pancakes though\" Maddy: \"he said i can borrow the dress for the engagement\" Ella: \"MY sister's engagement??\" Maddy: \"he said it's a bowls club so florals are fine\"",
                  "outcome": "cried"
                },
                {
                  "you": "I'm gay. I've never said it out loud before.",
                  "gaydar": 100,
                  "spark": 0,
                  "them": [
                    {
                      "note": "Ella grabs your hand with both of hers and holds on."
                    },
                    "Oh my god. Okay. I'm not doing a toast. I'm not. I'm sitting on my hands. Look, I'm sitting on them.",
                    {
                      "from": "Maddy",
                      "text": "You did so good."
                    },
                    {
                      "from": "Meg",
                      "text": "Way better than her toast."
                    },
                    {
                      "note": "The waitress brings the pancakes nobody ordered yet and says \"on the house, ladies\", and this time Ella just says thank you."
                    }
                  ],
                  "after": "Ella, to her sister: \"he said it\" Sister: \"said what\" Ella: \"that he's gay. at brunch. after i made a toast and he cried\" Sister: \"ELLA\" Ella: \"i know. the drama. maddy's borrowing his dress\"",
                  "outcome": "broke"
                }
              ],
              "thinks": [
                "I made him cry with a mimosa toast, I'm the worst. His lashes held for like a whole minute though, good glue",
                "maddy fixed his lashes and meg got him pancakes and by the time they came he was just one of the girls. omg i'm so relieved i never slept with him"
              ]
            },
            {
              "you": "(Clink your glass on hers.) To me, I guess.",
              "them": [
                {
                  "note": "Maddy screams. Meg clinks. The guy at the next table claps twice. The waiter at the coffee machine is smiling into his milk jug."
                },
                "Wait. Wait wait wait. Was that a yes? Is this a yes?"
              ],
              "replies": [
                {
                  "you": "It's a yes. I'm gay, Ella.",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    "I'm dying. I'm literally dying. Okay. Okay hi.",
                    "I'm a bit annoyed. Is that allowed? I'm annoyed I wore my sleep tee. I'd have dressed up for this.",
                    {
                      "from": "Maddy",
                      "text": "So can I borrow it."
                    },
                    "Maddy, he JUST said it.",
                    {
                      "from": "Maddy",
                      "text": "I know. So can I borrow it."
                    },
                    {
                      "note": "You say yes. Ella orders another round and tells the waitress it's a celebration and the waitress says \"oh, for who?\" and all three of them point at you."
                    }
                  ],
                  "after": "Ella, to her sister: \"brunch guy is gay\" Sister: \"we knew that\" Ella: \"he SAID it though. i did a toast\" Sister: \"did you stand up\" Ella: \"obviously i stood up\"",
                  "outcome": "told"
                },
                {
                  "you": "It's a mimosa, Ella.",
                  "gaydar": 95,
                  "spark": 4,
                  "them": [
                    "It's a mimosa, he says. In florals. Meg. Meg, he said it's a mimosa.",
                    {
                      "from": "Meg",
                      "text": "I heard."
                    },
                    {
                      "note": "Ella sits back down, slowly, still holding her glass up a bit."
                    },
                    "Fine. I'll take a mimosa. I'll take it as like a yes-shaped mimosa.",
                    {
                      "note": "The waiter brings the coffees. You thank him and touch his arm without meaning to, and Ella sees, and makes a face at Meg."
                    }
                  ],
                  "after": "Ella, to Meg, after: \"he said 'it's a mimosa'\" Meg: \"and then he touched the waiter\" Ella: \"the ARM meg\" Meg: \"you should've seen your face\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Ella, sit down. I didn't say anything.",
              "them": [
                {
                  "note": "She sits down. Slowly. The guy at the next table turns back round."
                },
                "Right. You didn't. Sorry. I made it a scene. I always make it a scene.",
                {
                  "from": "Maddy",
                  "text": "So that's a no?"
                }
              ],
              "replies": [
                {
                  "you": "It's a no.",
                  "gaydar": 88,
                  "spark": 10,
                  "them": [
                    "Okay.",
                    {
                      "note": "Meg looks at Maddy. Maddy looks at your dress."
                    },
                    "Okay. Cool. So I'm on a date with a straight guy in florals. That's fine. That's a story.",
                    {
                      "note": "Nobody says much after that. Meg asks for the bill early and pays for everyone."
                    }
                  ],
                  "after": "Ella, to her sister: \"brunch guy turned up in a dress\" Sister: \"WHAT. like a costume?\" Ella: \"no like a nice one. and lashes\" Sister: \"is he gay\" Ella: \"he said no\" Sister: \"is he gay though\" Ella: \"obviously he's gay\"",
                  "outcome": "dodged"
                },
                {
                  "you": "It's a not at brunch. Not with Meg and Maddy here.",
                  "gaydar": 94,
                  "spark": 6,
                  "them": [
                    {
                      "from": "Meg",
                      "text": "Fair. That's fair. We'll go."
                    },
                    {
                      "from": "Maddy",
                      "text": "We won't go. We'll sit over there."
                    },
                    {
                      "note": "They move two tables away and watch you both over their menus for the next forty minutes."
                    },
                    "Okay. Not at brunch. That's fair. I'm sorry. I'm sorry I did the toast.",
                    "Is it a yes somewhere else though?"
                  ],
                  "after": "Maddy, to Ella, from two tables away: \"he's looking at the waiter\" Ella: \"i can see maddy\" Maddy: \"also can i still borrow the dress\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(To the waitress, in your deepest voice) Morning. I'll have a long black.",
          "them": [
            {
              "note": "Meg chokes on her water."
            },
            "Oh my god. He did a voice. Did everyone hear the voice? Where did that voice come from?",
            {
              "from": "Maddy",
              "text": "That's the voice from his Hinge. The polo voice."
            },
            "I'm dying. I've heard you talk for three dates and that's the first time you've ever sounded like that."
          ],
          "replies": [
            {
              "you": "That's my normal voice.",
              "them": [
                "Your normal voice said 'obsessed' about my earrings at GOMA.",
                {
                  "from": "Meg",
                  "text": "Do it again."
                },
                {
                  "from": "Maddy",
                  "text": "Say 'how about the rugby'. Go on."
                }
              ],
              "replies": [
                {
                  "you": "It IS my normal voice, Ella.",
                  "gaydar": 90,
                  "spark": 8,
                  "them": [
                    {
                      "note": "It goes up at the end. Maddy puts her face in her hands."
                    },
                    "Okay. Sure. Okay.",
                    {
                      "note": "For the rest of brunch Meg orders everything in a deep voice. Ella laughs every time, and doesn't look at you while she does it."
                    }
                  ],
                  "after": "Ella, to her sister: \"he did a deep voice at the waitress\" Sister: \"why\" Ella: \"because she called us ladies\" Sister: \"ella that's the funniest thing you've ever told me\" Ella: \"i know. i'm not dating him though\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Drop it.) Okay. It isn't.",
                  "gaydar": 95,
                  "spark": 4,
                  "them": [
                    "I KNOW it isn't.",
                    {
                      "from": "Maddy",
                      "text": "Thank you. Thank you, that voice was scaring me."
                    },
                    {
                      "note": "The waitress comes back with your long black and you ask, in your own voice, if you could actually have an iced oat latte instead. She says of course, love."
                    },
                    "Love. She's calling you love now. We've gone from ladies to love. I can't with this brunch."
                  ],
                  "after": "Ella, to Meg, after: \"did we just watch him come out over a coffee order\" Meg: \"kind of\" Ella: \"it was such a moment\" Meg: \"you said that about the pancakes\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Get up.) I'm going to go.",
              "them": [
                "No. Wait. The DRAMA. Sit down. Please.",
                {
                  "from": "Maddy",
                  "text": "Don't go, I haven't even seen the back of the dress."
                }
              ],
              "replies": [
                {
                  "you": "(Go anyway.)",
                  "gaydar": 92,
                  "spark": 5,
                  "them": [
                    {
                      "note": "You walk out onto Given Terrace in the dress. A woman with a pram looks at you, then keeps walking. You get all the way to the bus stop before your phone goes."
                    }
                  ],
                  "after": "Ella: \"sorry about brunch. that was so much\" Then, ten minutes later, from a number you don't know: \"hi its maddy. ella gave me your number. can i borrow the dress. not now. one day. sorry. it was really pretty\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Sit back down.)",
                  "gaydar": 94,
                  "spark": 4,
                  "them": [
                    "Thank you. Okay. I'll stop. I'm stopping. I'm doing my breathing.",
                    {
                      "from": "Maddy",
                      "text": "Stand up for a second though. Do a twirl. I need the back."
                    },
                    {
                      "note": "You stand up and do half a twirl. Maddy claps. The waiter at the coffee machine looks over, and this time he doesn't look back down."
                    },
                    "Okay, he's looking at you. The waiter. Not me. I'm literally invisible. I wore my sleep tee for this."
                  ],
                  "after": "Ella, to her sister: \"he did a twirl at brunch\" Sister: \"for you??\" Ella: \"for maddy. and the waiter watched the whole thing\" Sister: \"so are you seeing him again\" Ella: \"as what\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "ella-beach",
      "route": "ella",
      "gaydar": 93,
      "gaydarSays": "Coral gel toes on a beach full of lifesavers. Hayden hasn't stopped grinning.",
      "title": "Kings Beach",
      "contact": "Ella",
      "irl": true,
      "intro": "Since brunch you and Ella aren't really a thing, but she still asked you to come. Her uni friends do a beach day at Kings Beach in Caloundra every summer. You wore boardies and a linen shirt, and you kept your sneakers on for the whole drive up, because last night you painted your toes coral and then panicked about it.",
      "thinks": [
        "coral toes the night before a beach day and then sneakers the whole drive up. so gay i can't even be mad",
        "We were both staring at Hayden's chest when he came out of the water. Me and my date. Same chest",
        "I'm SO into Hayden and I'm pretty sure {name} is too and I refuse to compete with my date over a lifesaver, I'm dying"
      ],
      "them": [
        {
          "note": "On the sand everyone kicks their flip-flops off. You keep your sneakers on until Ella looks at them."
        },
        "It's the beach. Shoes off.",
        {
          "note": "You take them off. Then your socks. Coral toes, in the sand, in front of nine people."
        },
        "Oh my god. When did you do that?",
        {
          "note": "She looks at the coral for a long second. Then she looks over at her friends, like she's checking who saw."
        },
        "Also why are your feet so small? Mine are bigger than yours. That's so cute. Sorry, it's not a good cute.",
        {
          "note": "A tall guy in red and yellow boardies comes up from the water, shaking it out of his hair."
        },
        "\"Ha! Ells, who's your little friend?\" he says. \"I'm Hayden.\"",
        "Hayden's a lifesaver. He's been trying to take me out since second year.",
        "\"Still am,\" Hayden says, and grins at her. Then down at your feet. \"You coming in, man? Or are you worried about the polish?\"",
        {
          "note": "Ella leans over while Hayden's shaking his hair out. \"I haven't told anyone from uni, by the way,\" she whispers. \"Brunch stays at brunch. Unless you want me to, then I'll literally announce it.\"",
          "if": "c6b=told|broke"
        },
        {
          "note": "Ella squeezes your hand under the towel, quick. \"No crying at the beach,\" she whispers. \"Sand gets in it. I've been there.\"",
          "if": "c6b=cried"
        },
        {
          "note": "Ella leans over. \"Meg asked if you were coming as my date or my friend and I said, um, yes. So.\"",
          "if": "c6b=dodged"
        }
      ],
      "replies": [
        {
          "you": "I'm fine in the water. I'm a strong swimmer.",
          "them": [
            {
              "note": "You go in. The first wave knocks you flat and you come up coughing with your shirt over your face."
            },
            "\"Gotcha,\" Hayden says, and pulls you up by one arm. He keeps hold of you until the next set's gone through, like you're a kid at swim lessons. \"Steady, little guy.\"",
            {
              "note": "Back on the sand, Ella's taking photos. Of Hayden."
            },
            "Aww. Hayden saved you.",
            "\"I didn't need saving.\"",
            "\"Dude,\" Hayden says, grinning at Ella. \"You did a bit.\""
          ]
        },
        {
          "you": "(Sit on the towel.) I'll mind the bags.",
          "them": [
            "\"Good idea, man. Keep the polish dry,\" Hayden says. He holds his hand out to Ella. \"Come on, Ells. I'll take you out past the break.\"",
            {
              "note": "She goes. You sit on her towel with her sunglasses on your head and your coral toes in the sand. Her friend Maddy sits down and puts her foot next to yours."
            },
            "\"Same colour as mine,\" Maddy says. \"Yours are neater.\"",
            {
              "note": "Out past the break Hayden lifts Ella onto his shoulders. She screams and laughs and doesn't look back at the beach once."
            }
          ]
        },
        {
          "you": "(Wiggle your toes.) The polish is fine, thanks. It's gel.",
          "gaydar": 97,
          "them": [
            "\"Gel,\" Hayden says. \"Course it is.\" He looks at Ella. Ella looks at the sand.",
            "I can't believe you know the difference.",
            "\"I thought gel was for hair,\" Hayden says, and Ella laughs.",
            {
              "note": "Hayden picks up the softball bat. \"Beach softball, boys,\" he says to the other guys. Then, to you: \"You can keep score, man. Wouldn't want you breaking anything.\""
            },
            {
              "note": "You keep score on the back of Ella's sunscreen with her eyeliner. Hayden hits a home run into the water. Ella cheers."
            }
          ]
        }
      ],
      "after": "Ella, to her sister, on the drive home: \"he took his shoes off and his toes were CORAL\" \"stop\" \"and hayden saw\" \"what did hayden say\" \"nothing. he just kept looking at me like. you sure about this one?\" \"are you\" \"no\"",
      "debrief": "That was a lot of people looking at your feet. You still took your shoes off."
    },
    {
      "id": "ella-barefoot",
      "route": "ella",
      "gaydar": 94,
      "spark": 24,
      "gaydarSays": "His sneakers got washed out to sea so he went home barefoot in Hayden's car. He was SO weird about his toes.",
      "title": "The drive home",
      "contact": "Ella",
      "irl": true,
      "intro": "Later at Kings Beach. You left your sneakers and socks on the towel, and when the tide came in, so did the water. Your socks are gone. One sneaker's in the shallows; the other one's nowhere. Ella's car is full, so you're in the back seat of Hayden's, with Ella in the front. Fish and chips on the way home, then the drive back to Brisbane.",
      "thinks": [
        "sat on his feet the whole way home. babe we saw them all day",
        "He was checking out Hayden in the mirror at every red light. From the back of Hayden's car. I was in the front seat",
        "hayden's dropping him first and i'm kind of glad, no awkward is he coming up thing. he was never coming up"
      ],
      "them": [
        {
          "note": "Hayden holds up your one wet sneaker like a trophy."
        },
        "\"Found half of it, man.\"",
        "It's fine. Just come barefoot, it's a car.",
        "your little feet wont even reach the floor back there lol",
        {
          "note": "She gets in the front with Hayden without asking if you want to."
        },
        {
          "note": "You get in the back. Your feet are sandy and your coral toes are very bright against his black floor mats."
        },
        "\"Don't get sand in my car,\" Hayden says, and then, looking in the mirror: \"Nice colour though.\""
      ],
      "replies": [
        {
          "you": "(Sit on your feet. All the way to Brisbane.)",
          "them": [
            {
              "note": "You fold your legs up under you on the back seat. Hayden watches in the mirror."
            },
            "\"You good back there? You look like you're meditating.\"",
            "He's hiding his toes, Hay. Leave him alone.",
            {
              "note": "She says it nicely. She's laughing."
            }
          ],
          "replies": [
            {
              "you": "I'm not hiding them. I'm comfortable.",
              "spark": 26,
              "them": [
                "\"Sure.\"",
                {
                  "note": "Twenty minutes later your legs have gone completely dead. You shift and both feet flop out onto the seat, toes up."
                },
                "\"There they are,\" Hayden says. Ella turns round to look and laughs into her hand."
              ],
              "after": "Ella, to her friend: \"he sat on his feet in hayden's car for half an hour so we wouldn't see his toes\" Friend: \"and then?\" Ella: \"his legs went to sleep and they flopped out. hayden lost it. i couldn't stop laughing either\""
            },
            {
              "you": "Yes. I'm hiding them. Is that ok with everyone?",
              "spark": 22,
              "them": [
                "\"Totally fine, little guy,\" Hayden says.",
                "It's ok. They're so cute though.",
                "You look like one of my Year 2s back there.",
                {
                  "note": "She turns back round to the front. She and Hayden talk about surf club stuff for the rest of the drive."
                }
              ],
              "after": "Ella, to her friend: \"he admitted he was hiding his toes lol\" Friend: \"aww\" Ella: \"yeah. hayden and i talked the whole way home. he's actually really easy to talk to\""
            }
          ]
        },
        {
          "you": "Can we stop somewhere? I'll buy flip-flops. Anything.",
          "them": [
            "\"Gas station's got flip-flops,\" Hayden says, and pulls in.",
            {
              "note": "You walk across the hot forecourt barefoot. Inside, the only flip-flops in your size are pink with daisies on them."
            },
            "Oh my god. Get them. You have to get them."
          ],
          "replies": [
            {
              "you": "(Buy the daisies.) Fine. Fine!",
              "spark": 22,
              "them": [
                {
                  "note": "You walk back out in pink daisy flip-flops with coral toes. Hayden's leaning on the car."
                },
                "\"Man. They're perfect.\"",
                {
                  "note": "Ella takes a photo of your feet for the group chat."
                }
              ],
              "after": "Ella, to her friend: \"he bought pink daisy flip flops at the gas station\" Friend: \"with the coral toes??\" Ella: \"with the coral toes. hayden bought me an ice cream while he was paying\""
            },
            {
              "you": "(Put them back.) No. Barefoot's better than daisies.",
              "spark": 26,
              "them": [
                {
                  "note": "You put them back and walk out barefoot, empty-handed. Hayden's eating a pie on the bonnet."
                },
                "\"Nothing in your size?\"",
                "There was. He chose barefoot.",
                "\"Respect,\" Hayden says, and doesn't sound like he means it."
              ],
              "after": "Ella, to her friend: \"he went into the gas station barefoot and came out still barefoot\" Friend: \"why\" Ella: \"the only ones were pink daisies. i would've bought them for him honestly\""
            }
          ]
        },
        {
          "you": "Ella, can I sit in the front? Please? Nobody looks at the front footwell.",
          "them": [
            "\"Ella's in the front,\" Hayden says. \"Ella's always in the front.\"",
            {
              "note": "Ella stays in the front. She puts her own feet up on the dash, bare, sandy, unpainted."
            },
            "See? Feet. Nobody cares."
          ],
          "replies": [
            {
              "you": "Yours aren't coral.",
              "spark": 24,
              "them": [
                "Mine aren't anything. Yours are nicer than mine.",
                "\"They are,\" Hayden says. \"He does a better job than you, Ells.\"",
                {
                  "note": "She hits his arm. He laughs. She leaves her hand there for a second."
                }
              ],
              "after": "Ella, to her friend: \"hayden said his toes were nicer than mine\" Friend: \"rude\" Ella: \"it was true though. i hit him. we were laughing the whole way home\""
            },
            {
              "you": "(Put your feet up too. Try to be normal about it.)",
              "spark": 28,
              "them": [
                {
                  "note": "You put your feet up on the back of the centre console, coral toes in full view. Your whole face is hot."
                },
                "Look at you!",
                "\"Ten out of ten for effort,\" Hayden says."
              ],
              "after": "Ella, to her friend: \"he put his feet up in hayden's car and went bright red the whole time\" Friend: \"did hayden say anything\" Ella: \"he gave him ten out of ten. i don't know. it was nice of him\""
            }
          ]
        }
      ],
      "after": "Hayden drops you home first. In the window, you watch him and Ella drive off together.",
      "debrief": "You can be shy about your toes and still get home fine."
    },
    {
      "id": "ella-tickle",
      "route": "ella",
      "gaydar": 95,
      "irl": true,
      "title": "The surf club",
      "contact": "Ella",
      "gaydarSays": "Hayden did his sunscreen and he went red to his ears. I watched the whole thing. So did Meg.",
      "intro": "Two weeks after Kings Beach. Hayden's surf club does a sausage sizzle after patrol, Ella's friends wanted to go, and Ella brought you. You wore boardies and a cropped linen shirt, and this time you took your sandals off on the sand without being asked. Your toes are coral again. You did them again on purpose.",
      "thinks": [
        "coral again. took his sandals off before anyone even asked",
        "When Hayden had his foot I watched his face the whole time and it had nothing to do with sunscreen",
        "I'm so done. I tried at brunch, I tried at the beach. I've seen this man's toes more times than I've seen him want to kiss me"
      ],
      "them": [
        {
          "note": "Hayden's at the barbecue in his red and yellow cap. When he sees your feet he puts the tongs down."
        },
        "\"Coral's back! Ells, he's committed.\"",
        "Hi Hayden.",
        "\"Hi Ella.\" He grins at her, then at you. \"You put sunscreen on those? Feet burn first, buddy. Lifesaver tip.\"",
        {
          "note": "You sit on a towel by the club fence with Ella and her friend Meg. Hayden finishes the sausages and comes over and sits on the sand right at your feet, uninvited, with a bottle of sunscreen."
        },
        "\"Seriously, give me your foot. Club policy. Nobody burns on my patch.\"",
        "Hayden. He's an adult.",
        "He's got baby feet, but he's an adult.",
        {
          "note": "He's already got your heel in his hand. His hand is huge, warm, rough from the boards. Your whole foot fits in it with room left over."
        },
        "\"She's not wrong,\" he says, turning your foot over. \"These are tiny, buddy. Hold still.\"",
        {
          "note": "He squirts the sunscreen into his palm and works it in with both thumbs, slowly, from your heel up into the arch. Something happens to your breathing."
        },
        {
          "note": "Ella's watching your face, not your feet."
        }
      ],
      "replies": [
        {
          "you": "(Stare at the ocean. Act normal.)",
          "them": [
            {
              "note": "You stare at the waves. His thumbs go round in slow circles in the middle of your arch. Your toes curl on their own."
            },
            "\"Relax,\" Hayden says. \"You're all tense.\"",
            "He's not tense.",
            "Look at his face, Hayden.",
            {
              "note": "Hayden looks. You look at the ocean harder."
            }
          ],
          "replies": [
            {
              "you": "(Keep it together. Don't make a sound.)",
              "them": [
                {
                  "note": "You don't make a sound. He does the top of your foot, the heel, each toe, taking his time like he's waxing a board. Your face is burning. You count waves."
                },
                {
                  "note": "He finishes and gives your foot two quick pats. \"Done. You won't burn now.\""
                },
                "You've gone so red.",
                "Like, I get it now. I really, really get it.",
                {
                  "note": "Meg says nothing. She doesn't need to. She's got her eyebrows."
                }
              ],
              "outcome": "held",
              "spark": 18,
              "gaydar": 95,
              "thinks": [
                "he didn't make a sound but he went red from his ears down to his collarbones. i could see it from my towel",
                "Meg leaned over and whispered he's gay Ells and I said I KNOW Meg, way too loud",
                "He blushes harder at Hayden than he's ever blushed at me, and I've been in my bikini next to him all day"
              ]
            },
            {
              "you": "(A sound slips out. A small one.)",
              "them": [
                {
                  "note": "It comes out of you before you can stop it. A soft little sigh, right as his thumb presses into the arch."
                },
                {
                  "note": "Hayden's hands stop. Then he grins."
                },
                "\"Good, yeah? Club massage. Free with every sizzle.\"",
                {
                  "note": "One of the patrol guys laughs. Meg puts her hand over her mouth."
                },
                "oh my god. {name}."
              ],
              "replies": [
                {
                  "you": "(Mortified) Hayden. Okay. You can stop now.",
                  "them": [
                    {
                      "note": "He stops straight away and lets go. \"No worries, buddy.\" He wipes his hands on his boardies and hands you the bottle. \"Other foot's all yours.\""
                    },
                    {
                      "note": "You do the other foot yourself, fast and badly, without looking up. Nobody says anything for a whole set of waves."
                    },
                    "It's fine. It's fine! He's very good at sunscreen. Apparently.",
                    {
                      "note": "She's smiling at you the way she smiles at the kids on yard duty."
                    }
                  ],
                  "outcome": "cracked",
                  "spark": 8,
                  "gaydar": 96,
                  "thinks": [
                    "a little sound came out of him, on my towel. that wasn't a ticklish sound. Meg heard it, everyone heard it",
                    "Hayden okay you can stop now, in this tiny voice. He's never used that voice with me, not even when he was trying to be cute",
                    "i'd set him up with someone. not hayden. hayden's mine, or he will be, fingers crossed lol"
                  ]
                },
                {
                  "you": "(Say nothing. Let him keep going.)",
                  "them": [
                    {
                      "note": "You say nothing. He takes it as a yes and does the other foot too, slower, like he's proving a point. You can't look at anyone. You stare at your knees."
                    },
                    {
                      "note": "Ella doesn't laugh. She just watches you, very quietly, with her sunglasses pushed up on her head."
                    },
                    {
                      "note": "When he's done he stands up and holds his hand out to her. \"Swim, Ells?\""
                    },
                    {
                      "note": "She looks at you. You're still sitting there with your shiny feet and your red face. She takes his hand."
                    }
                  ],
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 98,
                  "thinks": [
                    "He let him do both feet. Red down to his neck, eyes on his knees, and you could tell he liked it",
                    "i stopped laughing pretty early. it wasn't funny anymore, it was just obvious. my date has a crush on the lifesaver and the whole beach can see",
                    "Hayden held his hand out after and I took it and didn't look back. bit bad. not very"
                  ]
                }
              ]
            }
          ]
        },
        {
          "you": "(Try to pull your foot back.) I can do it myself.",
          "them": [
            {
              "note": "He doesn't let go. He just holds your ankle a bit firmer, without even looking up."
            },
            "\"Two minutes. Nearly done. You can tell me to stop, buddy, I'm not going to cry about it.\"",
            {
              "note": "His thumbs slide in between your toes. You open your mouth to say stop and nothing comes out."
            }
          ],
          "replies": [
            {
              "you": "(Pull harder.) Seriously, Hayden. I've got it.",
              "them": [
                {
                  "note": "He lets go the moment you pull. \"All yours.\" He hands you the bottle and goes back to the barbecue, whistling."
                },
                {
                  "note": "You do your feet yourself. Your hands are shaking a bit. You get sunscreen on the towel."
                },
                "You're shaking.",
                "{name}. Your hands are actually shaking. From that.",
                {
                  "note": "You tell her it's the sun. She doesn't argue. She just looks over at the barbecue, then back at you, like she's doing maths."
                }
              ],
              "outcome": "begged",
              "spark": 14,
              "gaydar": 95,
              "thinks": [
                "he took the bottle and said he'd do it himself, fair. then his hands were shaking doing it in front of Hayden, a man who once ate a sausage in one bite for five bucks",
                "hands still shaking after because a guy touched his heel. ok babe",
                "Done pretending it's a date. Hayden's mine though, or he will be. Tonight probably if I'm honest"
              ]
            },
            {
              "you": "(Don't pull again. Let him.)",
              "them": [
                {
                  "note": "You don't pull again. His thumbs work up between each toe, one at a time, slow. Your ears go hot. You put a hand over your mouth without deciding to."
                },
                "\"You right?\" Hayden says.",
                {
                  "note": "You nod. You don't trust your voice."
                },
                "oh my god,",
                "You like it.",
                {
                  "note": "Ella says it quietly. She isn't laughing."
                }
              ],
              "replies": [
                {
                  "you": "(Red) No. It's just... the sunscreen's cold.",
                  "them": [
                    "It's thirty-one degrees.",
                    {
                      "note": "Hayden laughs and finishes the second foot, taking his time, and pats your ankle when he's done. \"There you go, buddy. Protected.\""
                    },
                    {
                      "note": "Ella gets up to get drinks. Hayden goes with her. You sit there and look at your shiny little feet."
                    }
                  ],
                  "outcome": "cracked",
                  "spark": 5,
                  "gaydar": 97,
                  "thinks": [
                    "He said the sunscreen was cold. It's thirty-one degrees babe",
                    "his feet looked tiny in hayden's hands and he looked so happy, happier than on any of our dates, which is rude actually",
                    "Hayden asked me at the drinks fridge if we're a thing and I said no really fast. He didn't look surprised. Nobody here would be"
                  ]
                },
                {
                  "you": "(Hide your face in your knees.)",
                  "them": [
                    {
                      "note": "You fold over and put your face in your knees. Hayden keeps going, slow and thorough, the heel, the arch, every coral toe. He hums a bit while he does it."
                    },
                    "\"You right, buddy?\"",
                    {
                      "note": "You nod into your knees. He finishes, gives your foot a little squeeze, and sets it down on the towel like it's breakable."
                    },
                    {
                      "note": "When you finally look up, Meg's filming and Ella's just looking at you with her chin on her knees."
                    },
                    "Okay. Yeah. I'm going to go swim. With Hayden. Is that okay?",
                    {
                      "note": "It's not really a question. Hayden's already standing."
                    }
                  ],
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 99,
                  "thinks": [
                    "He hid his face in his knees and let him keep going and Hayden was HUMMING. I'm actually dying",
                    "that was it for me, worse than brunch. him all folded up on my towel so gay and so happy and me just sitting there with the sunscreen",
                    "went swimming with hayden and didn't wait. he wasn't going to look up anyway. i'm letting hayden walk me to my car later and we'll see"
                  ]
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Going red when Hayden did your feet doesn't need explaining to anyone, you included."
    },
    {
      "id": "ella-end",
      "route": "ella",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "I asked Connor about my cat eye and he asked what was wrong with my eye. I love him so much.",
      "title": "Ella and Connor",
      "contact": "Ella",
      "intro": "A month later, Ella's Instagram story pops up: her and a guy in a rugby jersey at the stadium, his arm round her, both holding pies. His name's Connor. You reply to the story with a heart-eyes emoji before you can stop yourself. Ten minutes later she replies.",
      "them": [
        "omg hi!!",
        "thats connor lol. he plays rugby. like on weekends not for real",
        "i asked him if he liked my cat eye and he said whats wrong with your eye 😭",
        "anyway how are you?? i felt kind of bad after brunch",
        {
          "text": "also hayden still brings up the surf club. how you just sat there bright red and didn't make a sound. he thinks you're shy lol",
          "if": "ella-tickle=held"
        },
        {
          "text": "also sorry but connor's heard about the surf club. the sunscreen thing. his cousin's in the club. he said 'the guy who went red when hayden did his feet?' i said yes. sorry",
          "if": "ella-tickle=cracked|begged|kept"
        },
        {
          "text": "also maddy still wants the dress. she says now you're out you have to share your wardrobe, it's like the law",
          "if": "c6b=told|broke"
        },
        {
          "text": "and sorry again about the toast. meg says i made you cry with a mimosa and that's a new low for me",
          "if": "c6b=cried"
        },
        {
          "text": "meg still says the waitress was right lol. i'm just the messenger",
          "if": "c6b=dodged"
        }
      ],
      "replies": [
        {
          "you": "Oh my god, he's SO rugby. Look at his neck. I'm so happy for you, Ella! And don't feel bad. Brunch was... a moment. I was having a moment.",
          "them": [
            "you were DEFINITELY having a moment",
            "good for you. less for me lol. i was the girl in jeans next to the guy in the dress",
            "connor carried me up the stairs at the stadium last week cos my heels were killing me",
            "you would've wanted to try them on lol",
            "ok can i say something without it being weird"
          ],
          "replies": [
            {
              "you": "Say it. I can take it.",
              "them": [
                "i think you'd love a connor",
                "not MY connor. but like. a big guy who's a bit dumb and really nice",
                "you looked at the waiter at brunch like that"
              ],
              "replies": [
                {
                  "you": "Ella! I'm not... I don't... why is everyone saying this to me?",
                  "them": [
                    "because its true lol",
                    "anyway connor says hi. he wants to know if you want to play touch wednesday",
                    "i said you'd turn up in a skort"
                  ]
                },
                {
                  "you": "...What's his number? Kidding. Kidding! Mostly.",
                  "them": [
                    "LOL",
                    "hes taken. his friend dev is single though",
                    "just saying"
                  ]
                }
              ]
            },
            {
              "you": "Actually no. Don't say it. I know what you're going to say.",
              "them": [
                "ok 😊",
                "im still thinking it though"
              ]
            }
          ]
        },
        {
          "you": "I miss you. I want to try again. And I'm going to tell Connor that. To his face.",
          "them": [
            "omg",
            "{name}",
            "ok i told him. he sent a voice note",
            "\"hey man ella says you want her back. ha. all good. come down to touch wednesday and try and take her off me. wear proper shoes yeah\"",
            "his friends are laughing in the background",
            "hes not worried lol. at all"
          ],
          "replies": [
            {
              "you": "Fine. I'll be there.",
              "them": [
                "omg ok",
                "i'm coming. i'm bringing snacks"
              ],
              "after": "Wednesday. You wear a white skort and a visor. Before the game Connor jogs over, all sweaty, yells \"boys, he came! in a skort!\" and puts a hand on your shoulder, and you forget why you came. You get the ball once and pass it straight back to him. Afterwards he says \"so. still gonna take her off me, man?\" and you say \"no. um. good game. you're really fast\" and your voice goes up at the end. He says \"didn't think so\", ruffles your hair and goes to get Ella a pie. Later she sends you the video: \"youre so cute 😭\" \"still no tho\""
            },
            {
              "you": "Actually tell him never mind. I'd ruin my nails.",
              "them": [
                "lol he said thought so",
                "and tell him to come anyway the boys want to meet him",
                "theyre going to adopt you as like a mascot"
              ]
            }
          ]
        },
        {
          "you": "I'm okay. Honestly. Still wearing the dress, if that's what you're asking. Wore it to the Valley last weekend with Dani.",
          "them": [
            "STOP",
            "the blue one?? i need photos",
            "see this is what i mean. youre in the valley in a dress and im at the rugby watching connor eat two pies"
          ],
          "replies": [
            {
              "you": "Two pies is a lot, babe. Is he okay?",
              "them": [
                "hes a prop thats his whole job",
                "ok have to go hes yelling at the ref. glad youre good x"
              ]
            },
            {
              "you": "I'm really glad for you, Ella.",
              "them": [
                "thanks 😊",
                "ok connor's back with more pies. bye"
              ]
            }
          ]
        }
      ],
      "after": "Ella, to Connor at half time: \"remember the guy from hinge i told you about? brunch guy?\" Connor, mouth full of pie: \"the one in the dress?\" Ella: \"yeah he just replied to my story\" Connor: \"he gay?\" Ella: \"yeah\" Connor: \"good for him.\" Then he yells at the ref again.",
      "debrief": "You two wanted different things. That's all it was."
    },
    {
      "id": "tayla-1",
      "route": "tayla",
      "gaydar": 20,
      "gaydarSays": "He knew every single word of Padam Padam. That's fine. Lots of guys like Kylie. I think?",
      "title": "Felons",
      "contact": "Tayla",
      "outfits": [
        {
          "label": "Boy clothes: jeans, a tee and a cap",
          "thinks": "jeans and a cap, normal boy, thank god. lasted till the first kylie song",
          "masc": true,
          "spark": 10,
          "gaydar": -10,
          "intro": "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks, loudly, in front of everyone. First date: Felons Brewery on a Friday. You wore jeans, a tee and a cap and tried to look like you knew what a hazy IPA was."
        },
        {
          "label": "A short-sleeve shirt and your rings",
          "thinks": "more rings than me. nicer ones. i wanted to ask where the little one was from and then i was like, i'm not asking my date that",
          "intro": "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks, loudly, in front of everyone. First date: Felons Brewery on a Friday. You wore a short-sleeve patterned shirt and your rings, and ordered a spritz before you remembered it was a brewery.",
          "them": [
            "also your rings were nicer than mine and i dont know how i feel about that lol"
          ]
        },
        {
          "label": "A patterned shirt, rings and a clear gloss",
          "thinks": "his lips were shinier than mine under the bar lights and i thought ok well i'm not kissing that tonight. had another vodka about it",
          "gaydar": 5,
          "intro": "Tayla plays wing defence on Sam's netball team. She asked you out at Sam's work drinks. First date: Felons Brewery on a Friday. A patterned shirt, your rings and a clear gloss. You ordered a spritz and the bartender said \"good choice\" and winked.",
          "them": [
            "and the gloss. babe. steph is going to ASK"
          ]
        }
      ],
      "thinks": [
        "he knew the HAND thing to padam padam. and then at the end he hugged me goodbye with his bum sticking out so nothing touched and got in his uber and i just stood there on the footpath",
        "Writing the girls a recap and deleting half so Steph won't just reply gay. not much left lol. i still want to see him again?? idk"
      ],
      "them": [
        "omg that was so fun",
        "cant believe you knew all of padam padam",
        "you did the hand thing!!",
        "my ex thought kylie was a girl from his work. like an actual person he worked with"
      ],
      "replies": [
        {
          "you": "Who doesn't know Padam Padam? I was just being polite.",
          "them": [
            "polite lol",
            "ok so bec's 30th is in a few weeks",
            "you should come. with me i mean. like as my date",
            "if you want. no pressure"
          ],
          "replies": [
            {
              "you": "Yes. Wait. Is your whole team going to be there?",
              "them": [
                "yes and theyre feral",
                "steph will grill you. just go with it",
                "actually come to our game sunday first? so its not all of them at once"
              ]
            },
            {
              "you": "As your date. Okay. Yeah, I'm in.",
              "them": [
                "yay",
                "come watch us sunday too? 9am downey park",
                "its fine if you cant"
              ]
            }
          ]
        },
        {
          "you": "Okay, I'm a Kylie fan. Is that a problem?",
          "them": [
            "no?? why would that be a problem",
            "best first date ive had in ages tbh",
            "the girls want to meet you. i might have talked about you at training a bit"
          ],
          "replies": [
            {
              "you": "What did you say about me?",
              "them": [
                "that youre cute and funny and you smell nice",
                "and steph goes nice like what. and i said like the le labo shop in james st",
                "and she did a face. idk why",
                "anyway sunday?"
              ]
            },
            {
              "you": "I'll come and cheer. Loudly.",
              "them": [
                "pls do",
                "bring snacks. bec will literally love you if theres sour patch kids"
              ]
            }
          ]
        },
        {
          "you": "There was no hand thing. That was a wrist moment. It's different.",
          "gaydar": 25,
          "them": [
            "a wrist moment 😭",
            "im telling the girls",
            "steph is going to have questions btw she always does",
            "netball sunday?"
          ],
          "replies": [
            {
              "you": "Steph can ask whatever she wants.",
              "them": [
                "lol ok",
                "she will",
                "9am downey park"
              ]
            },
            {
              "you": "Please don't tell them about the wrist thing.",
              "them": [
                "already did sorry",
                "bec said iconic",
                "sunday 9"
              ]
            }
          ]
        }
      ],
      "after": "Tayla, in the netball chat: \"date was SO fun. he knows every kylie song\" Steph: \"every one?\" Tayla: \"like all of them yeah\" Steph: \"hm\" Bec: \"steph dont\""
    },
    {
      "route": "tayla",
      "path": "masc",
      "id": "tayla-m2",
      "title": "Game day, cap on",
      "contact": "Tayla",
      "irl": true,
      "gaydar": 15,
      "spark": 82,
      "gaydarSays": "He stood with the boyfriends and talked about baseball. Steph was so confused.",
      "intro": "Sunday morning, Tayla's game at Downey Park. Shorts, a tee and your cap, the same one from Felons. You stood with Steph's boyfriend the whole game and he wouldn't stop talking about baseball.",
      "them": [
        {
          "note": "Final whistle. Tayla runs over, sweaty, and jumps on you."
        },
        "You came!! Girls, this is {name}. That's Bec, it's her 30th soon, and that's Steph. Don't listen to Steph.",
        "\"Hi,\" Steph says. She looks at your cap. \"Huh. You look different to how Tay said.\"",
        "Steph!"
      ],
      "replies": [
        {
          "you": "Different how?",
          "them": [
            "\"Nothing,\" Steph says. \"Just. She said you knew all the words to Padam Padam.\"",
            "Steph oh my god"
          ],
          "replies": [
            {
              "you": "Everyone knows Padam Padam. Good game, by the way. That intercept in the third.",
              "masc": true,
              "spark": 88,
              "outcome": "kept",
              "them": [
                "You saw that??",
                {
                  "note": "Tayla grabs your arm with both hands. Steph looks at Bec."
                },
                "\"Okay,\" Steph says. \"Fine. He's alright.\""
              ],
              "after": "Tayla, to the netball chat: \"he noticed my intercept\" Bec: \"marry him\" Steph: \"fine. i was wrong\" Tayla: \"you were SO wrong\""
            },
            {
              "you": "I know ALL the words. Do you want me to do the hand thing?",
              "spark": 58,
              "outcome": "slipped",
              "them": [
                {
                  "note": "You do the hand thing. Bec screams. Steph films it."
                },
                "\"Tay,\" Steph says, still filming. \"Tay. Come on.\"",
                "Stop it. He's just fun."
              ],
              "after": "Steph, in the netball chat: \"[video]\" Bec: \"the HAND THING\" Tayla: \"hes just fun ok\" Steph: \"sure babe\""
            }
          ]
        },
        {
          "you": "(Shake Steph's hand.) Nice to meet you. Good game.",
          "masc": true,
          "them": [
            "\"Thanks,\" Steph says. She looks a bit thrown.",
            "See? He's normal. I told you he's normal."
          ],
          "replies": [
            {
              "you": "I'm very normal. Who's hungry? Brunch is on me.",
              "masc": true,
              "spark": 85,
              "outcome": "kept",
              "them": [
                "Oh my god, a man who buys brunch.",
                {
                  "note": "At brunch Tayla sits on the same side of the booth as you, pressed right up against your arm."
                }
              ],
              "after": "Tayla, to Bec: \"he paid for all of us\" Bec: \"keep him\" Tayla: \"i'm going to\""
            },
            {
              "you": "I'm very normal. Steph, that bag is gorgeous though. Is it new?",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                "\"...It is,\" Steph says. \"Thank you.\"",
                {
                  "note": "Steph looks at Tayla. Tayla looks at the grass."
                }
              ],
              "after": "Steph, to Bec, privately: \"he complimented my bag within 30 seconds\" Bec: \"so\" Steph: \"so nothing. i'm just saying\""
            }
          ]
        }
      ],
      "debrief": "You stood with the boyfriends and it went fine. You don't have to do that forever, but you can if you want."
    },
    {
      "route": "tayla",
      "path": "masc",
      "id": "tayla-m3",
      "title": "Bec's 30th",
      "contact": "Tayla",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He wore a shirt with no pattern on it to Bec's 30th. Steph's still in shock.",
      "intro": "Bec's 30th, two months in. A rooftop in the Valley. You wore a plain black shirt. Tayla's in a red dress and she's had three espresso martinis.",
      "them": [
        {
          "text": "Okay, everyone here thinks you're my boyfriend. Steph thinks you're my boyfriend. Even Steph.",
          "if": "tayla-m2=kept"
        },
        {
          "text": "Okay, Steph's being weird again. She keeps asking if you're my boyfriend or my 'buddy'.",
          "if": "tayla-m2=slipped"
        },
        "So. Are you? My boyfriend?",
        {
          "note": "Bec's watching from the bar. So is a tall guy in a team jersey who's been looking at Tayla all night."
        }
      ],
      "replies": [
        {
          "you": "(Kiss her.) Yeah. I am.",
          "masc": true,
          "spark": 92,
          "outcome": "together",
          "them": [
            {
              "note": "Bec screams from the bar. Steph claps three times, slowly, and hands Bec a ten dollar note."
            },
            "Okay. Okay! That's... yeah."
          ],
          "after": "You're Tayla's boyfriend. You go to every game. You stand with the boyfriends. Steph stops calling you her buddy. It took a while."
        },
        {
          "you": "Who's the guy in the jersey?",
          "spark": 50,
          "outcome": "drift",
          "them": [
            "Mitch? He's Bec's cousin. Why?",
            "\"No reason. He's... tall.\"",
            {
              "note": "Tayla looks at you, then at Mitch, then back."
            },
            "Right. Yeah. He is."
          ],
          "after": "Two weeks later Tayla texts: \"hey so mitch asked me out. i think i'm going to say yes. you're not mad right? you were looking at him more than me lol\""
        },
        {
          "you": "Can we talk about this tomorrow? Your eyeliner's smudged, come here.",
          "them": [
            {
              "note": "You fix her eyeliner with your thumb, very carefully, under the fairy lights. Steph watches the whole thing."
            },
            "...Thanks.",
            "\"Tay,\" Steph says, very gently. \"Babe. He's doing your eyeliner.\"",
            "I know, Steph."
          ],
          "spark": 35,
          "outcome": "drift",
          "after": "Tayla doesn't break up with you that night. She does it a week later, over text: \"ok so. youre SO fun. but steph's right and i hate that. you fixed my eyeliner better than i do it. go find a guy who wants his eyeliner fixed lol\""
        }
      ],
      "debrief": "She asked on a loud rooftop after three espresso martinis. Whatever you said, you can say something else later."
    },
    {
      "id": "tayla-2",
      "route": "tayla",
      "gaydar": 55,
      "gaydarSays": "He told Bec her ponytail was giving. Giving what, {name}.",
      "title": "Courtside",
      "contact": "Tayla",
      "irl": true,
      "outfits": [
        {
          "label": "Shorts, a tee, sunglasses. Supportive boyfriend.",
          "thinks": "normal boyfriend outfit, then i scored and he did a little clap with just his fingers. gay clap",
          "gaydar": -5,
          "intro": "Sunday morning, Tayla's game at Downey Park. Shorts, a tee, sunglasses and a bag of Sour Patch Kids for the girls. You end up on the sideline next to Steph's boyfriend, who wants to talk about baseball.",
          "them": [
            {
              "note": "She steps back after the hug and looks at you like she's double-checking which guy you are."
            }
          ]
        },
        {
          "label": "Little shorts, a cropped tee, sunglasses and a bit of tint",
          "thinks": "his shorts were littler than mine. at MY game",
          "intro": "Sunday morning, Tayla's game at Downey Park. Little pastel shorts, a cropped white tee, big sunglasses and some lip tint, and a bag of Sour Patch Kids. Steph's boyfriend looks at your shorts once and then stays on his phone for the whole game.",
          "them": [
            {
              "note": "She pulls back from the hug fast. Her eyes go to the crop top, then the tint, then the girls behind her."
            }
          ]
        },
        {
          "label": "Little shorts, a cropped tee, sunglasses, tint and painted nails",
          "thinks": "painted nails and a crop courtside. steph saw the nails before i did, obviously",
          "gaydar": 5,
          "intro": "Sunday morning, Tayla's game at Downey Park. Pastel shorts, a cropped tee, big sunglasses, lip tint, pink nails and a sign that says GO TAYLA 💅. Steph reads the sign, then looks at your nails, then at Bec.",
          "them": [
            {
              "note": "Steph mouths something to Bec across the court. It looks a lot like \"the nails\"."
            },
            {
              "note": "Then she sees your nails over her shoulder and lets go first."
            }
          ]
        }
      ],
      "thinks": [
        "steph said netball-adjacent and looked straight at me. yes steph i KNOW",
        "two dates, no kiss. he hugged me all sweaty after the game and patted my back twice. like, thanks?",
        "into him maybe sixty percent now? it was eighty at felons. is it bad i'm kind of relieved i don't have to sleep with him yet"
      ],
      "them": [
        {
          "note": "Final whistle. Tayla runs over, sweaty, and hugs you. The girls are right behind her."
        },
        "You came! Okay. Girls, this is {name}. {name}, that's Bec, it's her 30th soon, and that's Steph. Don't listen to Steph.",
        {
          "note": "Steph looks at you from your sunglasses down to your shoes."
        },
        "\"Hi,\" Steph says. \"Cute outfit. Very... netball-adjacent.\""
      ],
      "replies": [
        {
          "you": "Thanks! You were all amazing. Bec, how does your ponytail not move? It didn't move once. It was giving Ariana.",
          "gaydar": 65,
          "them": [
            "\"Giving Ariana,\" Steph says.",
            {
              "note": "Bec actually tells you how she does it. Two hair ties and some trick with the second one. You ask a lot of questions. Tayla's next to you the whole time, and at some point she stops smiling."
            },
            "Okay! Coffee? Just us two?",
            {
              "note": "She doesn't say much in the line at the coffee van. She checks her phone twice. Then: \"You were really into Bec's hair.\""
            }
          ],
          "replies": [
            {
              "you": "Sorry. I talk a lot when I'm nervous. Did I embarrass you?",
              "them": [
                "No. No, they liked you.",
                "Steph's just like that. She thinks everyone's something.",
                "Come to Bec's thing. I want you there."
              ]
            },
            {
              "you": "Is that bad? It was a really good ponytail.",
              "them": [
                "It's not bad.",
                "It's just, Steph's boyfriend asked me if you were a friend from work. Like a work friend.",
                "And I said no, he's my date, and Steph laughed into her drink bottle. Everyone saw.",
                "Can you just be a bit less, I don't know. At the 30th. When Steph's there."
              ],
              "replies": [
                {
                  "you": "Less what?",
                  "them": [
                    "You know what.",
                    "Sorry. Forget it.",
                    {
                      "note": "She pays for both coffees and passes yours over without looking at you."
                    },
                    "Just come. I want them to like you."
                  ]
                },
                {
                  "you": "Fine. I'll talk baseball with Steph's boyfriend all night.",
                  "them": [
                    "You don't know anything about baseball.",
                    "You called it the stick one. He told Steph that, by the way.",
                    "Just come. Be normal. Maybe a bit quieter."
                  ]
                }
              ]
            },
            {
              "you": "Yours was better though. You had a little flick at the end. Sporty but make it fashion.",
              "them": [
                {
                  "note": "She laughs, then looks at you for a second longer than she needs to."
                },
                "Sporty but make it fashion. Okay.",
                "Youre coming to the 30th. I want them to see you being funny. Not just the hair stuff and...",
                "Yeah. Anyway."
              ]
            }
          ]
        },
        {
          "you": "I'll take netball-adjacent. Steph, you were scary out there. I felt bad for the other team.",
          "them": [
            "\"Thanks,\" Steph says. She looks at your outfit again. \"You're very supportive.\"",
            "He brought snacks! Who does that? I love him. Not LOVE. One date. Ignore me.",
            {
              "note": "Bec laughs. Steph doesn't."
            }
          ],
          "replies": [
            {
              "you": "Is she always like this or is it me?",
              "them": [
                "\"It's you,\" Steph says, and goes to get her drink bottle.",
                "She's like that with everyone. Like ninety percent of people. You're still coming to Bec's 30th, yeah?"
              ]
            },
            {
              "you": "(Hold the Sour Patch Kids out to Steph.)",
              "them": [
                "\"...thanks,\" Steph says. She takes two.",
                {
                  "note": "She eats them slowly. She doesn't stop watching you."
                }
              ]
            }
          ]
        }
      ],
      "after": "That night, in a chat you're not in. Steph: \"ok im just going to say it. tayla's guy is gay\" Bec: \"STEPH\" Steph: \"he said your ponytail was giving ariana\" Bec: \"it was tho\" Steph: \"bec thats not the point\""
    },
    {
      "id": "tayla-board",
      "route": "tayla",
      "title": "Bec's 30th plans",
      "contact": "Tayla",
      "gaydar": 60,
      "spark": 38,
      "gaydarSays": "He made a mood board for Bec's 30th. Bec cried. I'm meant to be his girlfriend.",
      "intro": "Two weeks before Bec's 30th. Tayla's added you to a group chat called \"BEC IS OLD\".",
      "them": [
        {
          "from": "Tayla",
          "text": "ok i added {name} because he has taste"
        },
        {
          "from": "Steph",
          "text": "does he"
        },
        {
          "from": "Bec",
          "text": "i want it pink. like proper pink. and disco balls"
        },
        {
          "from": "Tayla",
          "text": "babe can you help"
        }
      ],
      "replies": [
        {
          "you": "[mood board] Pink, gold and mirror tiles. Disco balls on the tables. Matching sashes.",
          "them": [
            {
              "from": "Bec",
              "text": "OMG"
            },
            {
              "from": "Bec",
              "text": "IM CRYING"
            },
            {
              "from": "Steph",
              "text": "tay. he made a board"
            },
            {
              "from": "Steph",
              "text": "in 4 minutes"
            },
            {
              "from": "Tayla",
              "text": "i know steph"
            }
          ],
          "replies": [
            {
              "you": "I can do the balloon arch too.",
              "spark": 30,
              "them": [
                {
                  "from": "Bec",
                  "text": "hes my favourite person now"
                },
                {
                  "from": "Steph",
                  "text": "tay ur boyfriend is the party planner"
                },
                {
                  "from": "Tayla",
                  "text": "lol yeah. he did my hair for presentation night too"
                },
                {
                  "from": "Tayla",
                  "text": "thats not a bad thing!! its just a thing"
                }
              ],
              "after": "Tayla, privately, to Bec: \"he's doing your balloon arch\" Bec: \"i love him\" Tayla: \"yeah. me too. kind of. not in the way im meant to though. is that bad\""
            },
            {
              "you": "Anyway. I'll bring the beer.",
              "spark": 44,
              "them": [
                {
                  "from": "Steph",
                  "text": "after making a pinterest board"
                },
                {
                  "from": "Steph",
                  "text": "ok"
                },
                {
                  "from": "Tayla",
                  "text": "steph leave him alone. he's bringing the beer"
                }
              ],
              "after": "Steph, privately, to Tayla: \"the beer thing was a cover\" Tayla: \"it wasnt a cover\" Steph: \"babe\""
            }
          ]
        },
        {
          "you": "I'm useless at this stuff. Whatever Bec wants.",
          "them": [
            {
              "from": "Bec",
              "text": "boo"
            },
            {
              "from": "Tayla",
              "text": "since when are you useless at this"
            },
            {
              "from": "Tayla",
              "text": "you picked my whole outfit last week"
            },
            {
              "from": "Steph",
              "text": "he picked your outfit??"
            }
          ],
          "replies": [
            {
              "you": "That was one time.",
              "spark": 42,
              "them": [
                {
                  "from": "Steph",
                  "text": "once is enough"
                },
                {
                  "from": "Tayla",
                  "text": "steph"
                },
                {
                  "from": "Bec",
                  "text": "can he pick mine"
                }
              ],
              "after": "Tayla, privately, to Steph: \"why did you do that\" Steph: \"i'm just saying what everyone's thinking\" Tayla: \"what's everyone thinking\" Steph: \"tay\""
            },
            {
              "you": "Okay fine. Pink and gold. Mirror tiles. Done.",
              "spark": 34,
              "them": [
                {
                  "from": "Bec",
                  "text": "PERFECT"
                },
                {
                  "from": "Steph",
                  "text": "useless he said"
                },
                {
                  "from": "Tayla",
                  "text": "lol ok. ur hired"
                }
              ],
              "after": "Tayla, to Bec: \"he's better at your party than i am\" Bec: \"he's better at everything girly than you tay\" Tayla: \"thanks bec\""
            }
          ]
        }
      ],
      "debrief": "You made a good board in four minutes. Steph noticing doesn't make it a worse board."
    },
    {
      "id": "c6c",
      "route": "tayla",
      "title": "The slideshow",
      "contact": "Tayla",
      "irl": true,
      "gaydar": 90,
      "gaydarSays": "Eighty-four photos of Bec and the only thing anyone's going to remember is my text. On the TV. Babe.",
      "intro": "Bec's 30th, upstairs at a bar in the Valley. Pink and gold, mirror tiles, disco balls on the tables, all off your mood board. You're Tayla's date. You wore a satin top, a skirt, eyeliner and a bit of glitter, and your toes are glitter pink in your sandals. Earlier, Bec's eyeliner smudged and you fixed it for her in the bathroom. At ten Tayla plugs her phone into the big TV for the slideshow she made: Bec at three, Bec at seventeen, Bec's formal.",
      "outfits": [
        {
          "label": "Satin top, jeans, sneakers and a flick of eyeliner",
          "thinks": "his flick is better than mine. i've been doing mine since year nine. what",
          "gaydar": -5,
          "intro": "Bec's 30th, upstairs at a bar in the Valley. Pink and gold, mirror tiles, disco balls on the tables, all off your mood board. You're Tayla's date. You wore a satin top with jeans and sneakers and a little flick of eyeliner, and your toes are glitter pink where nobody can see them. Earlier, Bec's eyeliner smudged and you fixed it for her in the bathroom. At ten Tayla plugs her phone into the big TV for the slideshow she made: Bec at three, Bec at seventeen, Bec's formal.",
          "them": [
            {
              "note": "Tayla says you look \"so nice, babe\" and doesn't hold your hand once all the way round the room."
            }
          ]
        },
        {
          "label": "Satin top, a skirt, eyeliner and glitter",
          "thinks": "he came as my date. in a skirt. so that's my date",
          "them": [
            {
              "note": "Tayla sees the glitter and looks away fast, at the balloons, at anything."
            }
          ]
        },
        {
          "label": "A satin slip dress, heels, sharp eyeliner and a lot of glitter",
          "thinks": "slip dress and heels and he did bec's stairs better than bec. so we're never having sex, cool, noted",
          "gaydar": 5,
          "intro": "Bec's 30th, upstairs at a bar in the Valley. Pink and gold, mirror tiles, disco balls on the tables, all off your mood board. You're Tayla's date. You wore a satin slip dress, heels, sharp eyeliner and glitter on your cheekbones, and your toes are glitter pink in the heels. Earlier, Bec's eyeliner smudged and you fixed it for her in the bathroom. At ten Tayla plugs her phone into the big TV for the slideshow she made: Bec at three, Bec at seventeen, Bec's formal.",
          "them": [
            {
              "from": "Bec",
              "text": "Also you walked up those stairs in heels better than me. At my own birthday. Rude."
            },
            {
              "note": "Tayla walks two steps ahead of you all night and introduces you as \"this is {name}\", no \"my\"."
            }
          ]
        }
      ],
      "after": "By the morning, Steph's video of the TV is in the netball chat. Sam sends you a screenshot of it with no message, and then a heart.",
      "debrief": "Your business ended up on a TV at someone else's party. That wasn't your call, and whatever you did next was fine.",
      "thinks": [
        "fuck. i put the group chat on bec's TV. at her 30th. i'm never airplaying anything again",
        "five dates and he's never once tried to come up. i stopped shaving after the second one honestly",
        "steph's going to find him a guy before she finds me one, watch"
      ],
      "them": [
        {
          "note": "Everyone's crowded round the TV. Tayla's at the front with her phone, flicking through photos. Bec screams at every single one."
        },
        {
          "from": "Bec",
          "text": "NOT the formal. Tay. Not the formal."
        },
        "Babe, it's your 30th. Everything goes in.",
        {
          "note": "Between the formal and Schoolies, Tayla's thumb slips out of the photos. Her chat with Bec and Steph comes up on the TV, huge. \"the girls 💗\". She's been typing in it all night between slides."
        },
        {
          "note": "The last message, three minutes old, in big white letters: \"is he gay or am i crazy\". Under it, Steph: \"crazy if u think hes not\"."
        },
        {
          "note": "The room reads it. You can hear it go back towards the bar, a little at a time."
        },
        "No. NO. That's not. Okay. Nobody screenshot... nobody SCREENSHOT that.",
        {
          "note": "Steph already has her phone up, filming the TV."
        },
        {
          "from": "Bec",
          "text": "Tay. TAY. Oh my god."
        },
        {
          "from": "Steph",
          "text": "Well. Somebody had to ask."
        },
        "I wasn't asking HIM, Steph. I was asking you, babe. You're standing right there. Why are you replying.",
        {
          "note": "Tayla gets the photos back up. It's Bec at Schoolies. Nobody's looking at it. They're looking at you."
        }
      ],
      "replies": [
        {
          "you": "(Take the phone off her and type 'you're not crazy' into the chat.)",
          "them": [
            {
              "note": "It comes up on the TV as you type it, one letter at a time. \"youre not crazy\". You hit send. It goes blue."
            },
            {
              "note": "For one second nothing. Then Bec screams, a proper one, and the whole room goes with her. People are cheering. Someone at the bar is banging the counter. Someone puts Padam Padam on."
            },
            {
              "from": "Bec",
              "text": "HE SAID IT. ON MY TV. AT MY THIRTIETH."
            },
            {
              "from": "Steph",
              "text": "I KNEW IT. I've been saying it since NETBALL."
            },
            "Oh my god. Babe. BABE."
          ],
          "replies": [
            {
              "you": "(The cheering doesn't stop. Your face crumples. You start crying.)",
              "them": [
                {
                  "note": "It's too loud and it's all at you. Thirty people clapping. Your chin goes and then you're crying in front of the TV with your eyeliner going."
                },
                {
                  "note": "Bec sees it first. She stops cheering mid-scream."
                },
                {
                  "from": "Bec",
                  "text": "Okay. Okay, off. Music off. Bathroom. Come with me, babe."
                },
                {
                  "note": "She takes your hand and walks you through the party to the bathroom, the same one, and sits you on the little bench by the sinks. She gets her own eyeliner out of her clutch."
                },
                {
                  "from": "Bec",
                  "text": "Look up. You did mine. I'm doing yours. Don't blink."
                },
                {
                  "note": "Steph comes in with a vodka soda and puts it in your hand without saying anything. Then Tayla, shutting the door behind her."
                },
                "Babe. I'm so sorry. Like SO sorry. I didn't mean for it to go on the TV. I wouldn't do that. I'd never."
              ],
              "replies": [
                {
                  "you": "Is my eyeliner ruined? Be honest.",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    {
                      "from": "Bec",
                      "text": "It's ruined. It's fine. I'm better at it than you think."
                    },
                    {
                      "note": "She isn't, quite, but she's close. Steph holds your chin still so Bec can do the other side."
                    },
                    {
                      "from": "Steph",
                      "text": "I'm sorry I replied. I'm sorry I filmed it. I'm sending it to you, not to anyone else."
                    },
                    "Steph, you've already sent it to the netball chat.",
                    {
                      "from": "Steph",
                      "text": "...I'm sending it to you as well."
                    },
                    {
                      "note": "Steph's got her notes app open. She's typing a heading. \"guys for {name}\". Tayla sees it and doesn't tell her to stop."
                    }
                  ],
                  "after": "Tayla, to the girls 💗, at 3am: \"is he ok\" Bec: \"hes fine hes asleep on my couch\" Bec: \"he did my eyeliner and then i did his and his was better\" Steph: \"started a list\" Tayla: \"a list of what\" Steph: \"guys\"",
                  "outcome": "broke"
                },
                {
                  "you": "Can we go back out? I don't want to miss your cake.",
                  "gaydar": 100,
                  "spark": 1,
                  "them": [
                    {
                      "from": "Bec",
                      "text": "There's no cake without you, babe. You did the board."
                    },
                    {
                      "note": "You go back out with Bec on one arm and Tayla on the other. The room cheers again, smaller, nicer. Someone hands you a sparkler."
                    },
                    "You're in the photo. With the girls. Middle, babe, go.",
                    {
                      "note": "In the cake photo you're in the middle between Bec and Steph, eyeliner a bit wonky, and Tayla's at the end with her arm round your waist."
                    }
                  ],
                  "after": "Tayla, to the girls 💗, the next day: \"the cake photo is SO cute\" Bec: \"he looks better than me in it\" Steph: \"he looks better than all of us in it\" Tayla: \"yeah well. hes not my boyfriend anymore so i can say that\"",
                  "outcome": "broke"
                }
              ],
              "thinks": [
                "he typed it on the tv with a typo and everyone screamed and then his face went. i did that. i'm the one who put it on the tv",
                "Bec fixed his eyeliner and Steph got him a vodka soda and nobody looked at me once, which fine. i was probably going to end it at the cake anyway"
              ]
            },
            {
              "you": "(Bow.)",
              "them": [
                {
                  "note": "You bow. A proper one, hand on your chest. The cheering doubles."
                },
                {
                  "from": "Bec",
                  "text": "I'm going to cry. I'm literally going to cry. Thats my present. Best present."
                },
                "Babe. Oh my god. Okay. So I'm not crazy."
              ],
              "replies": [
                {
                  "you": "(Take the mic off the DJ.) Happy birthday, Bec!",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    {
                      "note": "The DJ hands it over without arguing. Thirty people sing happy birthday. You start it too high and everyone goes with you anyway."
                    },
                    {
                      "from": "Bec",
                      "text": "BEST BIRTHDAY EVER."
                    },
                    "I'm so annoyed. I'm so annoyed I'm not annoyed. Is that a thing?",
                    {
                      "from": "Steph",
                      "text": "It's a thing, Tay."
                    },
                    {
                      "note": "Tayla hugs you from the side, quick, the way she hugs Bec after a win."
                    }
                  ],
                  "after": "Steph, to the netball chat: \"[video] tay's ex came out on the tv and then sang happy birthday into a mic\" Sam: \"he's my coworker\" Steph: \"sam he's ICONIC\" Tayla: \"hes not my ex its been like four minutes\"",
                  "outcome": "told"
                },
                {
                  "you": "(Go and dance to Kylie. On your own, like before.)",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    {
                      "note": "You go out on the floor on your own. Two songs in, Bec's with you. Then Steph. Then half the party."
                    },
                    "I'm coming. Wait. I'm coming, babe.",
                    {
                      "note": "Tayla dances next to you, not with you. She does the hand thing from Padam Padam and you do it back."
                    }
                  ],
                  "after": "Tayla, to the girls 💗, at 2am: \"he danced to every kylie song\" Bec: \"he did that last time too\" Tayla: \"yeah but this time i didn't mind\"",
                  "outcome": "told"
                }
              ]
            },
            {
              "you": "(Panic.) Wait, that was a joke. I was joking.",
              "them": [
                {
                  "from": "Bec",
                  "text": "Babe, you can't take it back. It's on my TV."
                },
                {
                  "from": "Steph",
                  "text": "It's on my phone as well."
                },
                {
                  "note": "The cheering dies off. Someone near the bar laughs."
                }
              ],
              "replies": [
                {
                  "you": "I was JOKING, Tay.",
                  "gaydar": 95,
                  "spark": 8,
                  "them": [
                    "Okay. Cool. Funny joke.",
                    {
                      "note": "She unplugs her phone. The TV goes back to blue. Somebody puts the music on louder than before."
                    },
                    "I'm going to go help Bec with the cake. You can come or not. Whatever.",
                    {
                      "note": "She doesn't wait to see which."
                    }
                  ],
                  "after": "Tayla, to the girls 💗, at 1am: \"he said it was a joke\" Steph: \"was it\" Tayla: \"steph it was on the tv\" Bec: \"he still did my eyeliner though\" Tayla: \"BEC\"",
                  "outcome": "dodged"
                },
                {
                  "you": "...Okay. I wasn't joking.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    {
                      "from": "Bec",
                      "text": "I KNOW you weren't, babe."
                    },
                    "Oh my god. Okay. So it's not a joke. So it's real. So I'm not crazy.",
                    {
                      "from": "Steph",
                      "text": "You were never crazy. I said that. It's in writing."
                    },
                    {
                      "note": "Tayla puts the slideshow back on. When Bec at Schoolies comes up, she points at the traffic cone and looks at you, and you both laugh, for no reason."
                    }
                  ],
                  "after": "Steph, to the netball chat: \"[video] he said joking. then he said not joking\" Bec: \"we love him\" Tayla: \"yes ok we love him\"",
                  "outcome": "told"
                }
              ]
            }
          ]
        },
        {
          "you": "Bec, can we go to the next photo?",
          "them": [
            {
              "from": "Bec",
              "text": "Babe, this is better than the photos."
            },
            {
              "from": "Steph",
              "text": "So? Is she crazy?"
            },
            {
              "note": "Tayla's looking at you. Her phone's still lit up in her hand."
            }
          ],
          "replies": [
            {
              "you": "She's crazy. I'm straight.",
              "them": [
                {
                  "from": "Steph",
                  "text": "Okay."
                },
                "Okay, so I'm crazy. Cool. Great.",
                {
                  "note": "She unplugs her phone. The slideshow's over at Schoolies."
                }
              ],
              "replies": [
                {
                  "you": "I'm straight, Tay.",
                  "gaydar": 90,
                  "spark": 10,
                  "them": [
                    "You did Bec's eyeliner. In the BATHROOM. At her party.",
                    "And I'm the crazy one. Okay.",
                    {
                      "note": "She goes to stand with the girls by the bar. Steph puts an arm round her and looks at you over her shoulder."
                    }
                  ],
                  "after": "An hour later Tayla, on her own: \"im not mad at you\" \"just embarrassed\" \"steph's been my best friend since year 7 and she saw my text on a TV\" \"and you just said im crazy in front of everyone\" \"i think we should stop. sorry\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Go and get a drink at the bar.)",
                  "gaydar": 92,
                  "spark": 7,
                  "them": [
                    {
                      "note": "The bartender has seen the TV. He slides you a pink drink you didn't order and says \"on the house, babe\". You take it."
                    },
                    {
                      "note": "When you turn round the three of them are watching you from the TV."
                    },
                    {
                      "from": "Steph",
                      "text": "He took the pink drink."
                    },
                    "I can see, Steph. I can see."
                  ],
                  "after": "Steph, to the girls 💗: \"the bartender called him babe and he took the pink drink\" Bec: \"to be fair it was a good drink\" Tayla: \"can we please just do the cake\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "She's not crazy.",
              "them": [
                {
                  "note": "Bec screams. Steph says \"thank you\" to the ceiling. Tayla just stands there with her mouth open."
                },
                "Babe.",
                "Okay. Okay okay. I'm not crazy."
              ],
              "replies": [
                {
                  "you": "Sorry, Tay. I should have said it before your friend's party.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    "Yeah. You should have. Like a bit.",
                    "But you did the board. And Bec's eyeliner. And you came. So.",
                    {
                      "note": "She hugs you. It's short, but it's a real one."
                    },
                    {
                      "from": "Bec",
                      "text": "Can we put the slideshow back on now? I want everyone to see the formal."
                    },
                    "Everyone's seen the formal, babe."
                  ],
                  "after": "Tayla, to the girls 💗, at 2am: \"he said sorry for doing it at bec's party\" Bec: \"he didn't do it the tv did it\" Steph: \"tay did it\" Tayla: \"STEPH\"",
                  "outcome": "told"
                },
                {
                  "you": "Can we at least get a photo by the balloon arch first?",
                  "gaydar": 100,
                  "spark": 2,
                  "them": [
                    {
                      "from": "Bec",
                      "text": "YES. All of us. Get in."
                    },
                    {
                      "note": "You stand under the balloon arch you built, between Bec and Steph. Tayla takes the photo. Then she hands her phone to Steph and squeezes in next to you."
                    },
                    "Delete the first one. I wasn't in it.",
                    {
                      "from": "Steph",
                      "text": "You were holding the phone, Tay."
                    },
                    "Delete it."
                  ],
                  "after": "Tayla's story the next morning: the balloon arch photo, all four of you, with \"the girls 💗\" written over it. You're in the middle.",
                  "outcome": "told"
                }
              ]
            }
          ]
        },
        {
          "you": "(Get your things and go.)",
          "them": [
            {
              "note": "You go down the stairs. The music starts again behind you."
            },
            "{name}! Babe! Wait!"
          ],
          "replies": [
            {
              "you": "(Keep going.)",
              "gaydar": 90,
              "spark": 5,
              "them": [
                {
                  "note": "You walk down Ann Street in your party clothes and get an Uber outside the convenience store. The driver asks if it was a good night."
                }
              ],
              "after": "On the drive home Tayla sends five messages in a row. \"im so sorry\" \"it wasnt for you\" \"i mean it was ABOUT you but it wasnt for you\" \"bec says come back for cake\" \"steph says sorry. she doesnt really mean it but she says it\"",
              "outcome": "dodged"
            },
            {
              "you": "(Stop on the stairs.)",
              "them": [
                {
                  "note": "She catches up three steps down, holding her heels in one hand."
                },
                "I'm so sorry. I swear I didn't mean it to go on the TV. That was for the girls. I text them everything. I texted them about your nails on our first date.",
                "Are you okay? Like... am I crazy, though?"
              ],
              "replies": [
                {
                  "you": "You're not crazy.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    "Okay.",
                    "Okay. Babe. Okay.",
                    {
                      "note": "She sits down on the step, so you sit down too. She puts her head on your shoulder for a second."
                    },
                    "Come back up for the cake. Please. It's pink. You picked it."
                  ],
                  "after": "Tayla, to the girls 💗: \"he said im not crazy\" Bec: \"we KNOW youre not crazy\" Steph: \"i said that on the tv\" Tayla: \"hes coming back up for cake\"",
                  "outcome": "told"
                },
                {
                  "you": "I don't know, Tay. I don't know what you are.",
                  "gaydar": 94,
                  "spark": 4,
                  "them": [
                    "That's fair. That's so fair.",
                    "I'm going to go back up. Bec'll kill me if I miss the candles.",
                    "Text me you got home. Not in the girls chat. Just me."
                  ],
                  "after": "You text her from the Uber: \"home\". She replies with a heart. Then, a minute later, in the girls 💗, which you aren't in, but Bec tells you later: \"hes home. hes fine. im the worst\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "tayla-feet",
      "route": "tayla",
      "gaydar": 93,
      "gaydarSays": "Jordan worked out he's ticklish in about four seconds. Steph filmed it obviously",
      "title": "Pool day",
      "contact": "Tayla",
      "irl": true,
      "intro": "A week after Bec's 30th. You and Tayla aren't really dating since the slideshow, but the girls said you're coming to everything now. Pool day at Steph's, everyone barefoot on the hot pavers. Your toes are still glittery pink from the party because the remover's at Dani's. Steph's cousin Jordan is here. He coaches Tayla's team on Thursdays and he's been asking her to dinner since preseason.",
      "thinks": [
        "his toes were sparklier than the pool and mine are chipped so i hid mine. on my own lounger. for HIM",
        "jordan sat on the end of his lounger with no shirt on and {name} went bright red and stared at the pool filter. babe i saw",
        "wore my good bikini for a guy who cared more about jordan's abs than me. whatever, jordan noticed it"
      ],
      "them": [
        {
          "note": "Tayla's on the lounger next to yours. Bec and Steph are on the edge of the pool with their feet in."
        },
        {
          "note": "Steph's already waving her phone at you from the pool. \"Guys for {name}, part two,\" she yells. \"I've got three.\" Bec yells \"FOUR.\"",
          "if": "c6c=told"
        },
        {
          "note": "Bec hugs you hello and holds on a second longer than normal. \"Waterproof eyeliner today?\" she says into your ear. \"Good.\"",
          "if": "c6c=broke"
        },
        {
          "note": "Steph looks at your toes, then at Bec, and very loudly doesn't say anything.",
          "if": "c6c=dodged"
        },
        {
          "note": "Tayla looks at your glittery toes next to her own chipped ones and pulls her feet up onto the lounger, out of the line-up."
        },
        "\"Tay, his toes are sparklier than the pool,\" Steph says.",
        {
          "note": "Jordan comes out with a tray of drinks, no shirt on, and sits on the end of your lounger without asking."
        },
        "\"So this is him.\" He looks at your feet, then at Tayla. \"Really, Tay?\"",
        "Jordan. Be nice.",
        "Look how small they are though. Steph, look. They're smaller than mine.",
        "\"I am nice.\" He grabs your ankle. \"Hang on, I want to see the glitter.\""
      ],
      "replies": [
        {
          "you": "(Pull your foot back.) Hey. No. Give it back.",
          "them": [
            {
              "note": "He doesn't. He runs one finger down the sole of your foot, slowly."
            },
            {
              "note": "A noise comes out of you. It's high and it carries right across the pool."
            },
            "\"Oh, he's ticklish,\" Jordan says. \"Tay. Did you know?\"",
            {
              "note": "Steph's already got her phone up."
            },
            {
              "note": "He goes under your toes. You're laughing too hard to talk, slapping the lounger, trying to kick him and not kick him."
            }
          ],
          "replies": [
            {
              "you": "Stop! Stop. Jordan. STOP.",
              "spark": 7,
              "them": [
                {
                  "note": "He lets go straight away and puts his hands up."
                },
                "\"Stopped. Nice toes though, buddy.\"",
                {
                  "note": "You pull both feet up under you. Bec is crying into her towel."
                },
                "\"Did he squeal?\" Bec says. \"Tay, did you hear that?\"",
                "Yeah. He squealed.",
                {
                  "note": "She says it to Jordan. He moves down to the end of her lounger and she shifts her legs over so he fits."
                }
              ]
            },
            {
              "you": "(Laughing) Okay okay okay, you win!",
              "spark": 2,
              "gaydar": 95,
              "them": [
                "\"Didn't even try,\" Jordan says, and lets go.",
                "\"Do it again,\" Steph says. \"It wasn't recording properly.\"",
                "No, leave him, he's gone all red.",
                {
                  "note": "She's smiling at Jordan when she says it."
                },
                "\"He surrendered, Tay,\" Jordan says. \"Pretty sure that means you owe me dinner.\"",
                "That's not how it works.",
                {
                  "note": "She doesn't say no, though. He sits on the end of her lounger and stays there."
                }
              ]
            }
          ]
        },
        {
          "you": "I'm not even ticklish. Go on.",
          "spark": 5,
          "them": [
            "\"Yeah?\" Jordan holds your ankle and wiggles his fingers just above your toes.",
            {
              "note": "You start giggling before he's even touched you."
            },
            "\"Not ticklish,\" Bec says. \"Ok.\"",
            {
              "note": "Then he gets the arch and you fold in half, grabbing at the towel, other leg kicking. Your sunglasses come off."
            },
            "\"Stop! Okay! I'm ticklish! I am!\"",
            {
              "note": "He stops as soon as you say it."
            },
            "\"Thought so,\" he says. \"Tay, he lied to you.\"",
            "\"And the glitter,\" Steph says. She's still filming.",
            {
              "note": "Jordan hands Tayla a drink and sits down on the pavers next to her lounger."
            }
          ]
        },
        {
          "you": "(Tuck both feet under your towel.) They're not for touching.",
          "spark": 12,
          "gaydar": 92,
          "them": [
            "\"Not for touching,\" Jordan says. \"Tay, his feet have rules.\"",
            {
              "note": "He reaches under the towel anyway and squeezes your toes once. You squeak and kick the towel off. Steph gets it on her phone."
            },
            "Jordan.",
            "\"Sorry,\" he says. He isn't. He moves to the edge of the pool by Tayla's feet. \"They were just there.\"",
            {
              "note": "He's in the water next to her for the rest of the afternoon. Your feet stay under the towel."
            }
          ]
        }
      ],
      "after": "Steph, in a chat {name} isn't in this time: \"[video]\" \"ive watched this so many times\" Bec: \"the NOISE he made\" Bec: \"also has anyone noticed where tay's been sitting since\" Tayla: \"i can see this chat\" Tayla: \"jordan's my coach. we were talking about thursday\"",
      "debrief": "Getting laughed at in front of people feels bad even when it's friendly. You said stop and he stopped, which is how it should go."
    },
    {
      "id": "tayla-ambush",
      "route": "tayla",
      "gaydar": 95,
      "irl": true,
      "title": "After training",
      "contact": "Tayla",
      "gaydarSays": "My coach and my two best friends held {name} down on the grass and did his feet. I didn't exactly stop them.",
      "intro": "A week after the pool. You come to watch Tayla's Thursday training in Windsor in white sneakers and socks, on purpose. Training's done and everyone's lying on the grass. Jordan's on the bench with his whistle still round his neck.",
      "thinks": [
        "socks in thirty degrees. lying about GLITTER",
        "half the team was round him and i was sitting by his head thinking i am never going to have sex with this man. which is fine. it's just a weird thing to think at training",
        "jordan was all sweaty with his whistle still on and i'd have gone home with him in a second. is that bad"
      ],
      "them": [
        {
          "note": "You sit on the grass next to Tayla with your knees up and your sneakers on. Steph looks at your shoes, then at Bec."
        },
        "\"Socks,\" Steph says. \"It's like thirty degrees.\"",
        "\"He's hiding them,\" Bec says.",
        "They're tiny, that's why. He's embarrassed. He's a size six, I checked his sneakers at mine.",
        "\"Is the glitter still on?\" Jordan gets up off the bench. \"Let's have a look.\"",
        "\"No,\" you say. \"It's off. I took it off. Leave my shoes alone.\"",
        "\"He's lying,\" Steph says.",
        {
          "note": "Jordan drops onto the grass, grabs your ankle and pulls your foot into his lap. You kick. He's already got the laces undone."
        },
        "\"No! Jordan, I said no!\"",
        "\"Steph, grab the other one.\"",
        {
          "note": "Steph sits on your other leg and Bec holds your shoulders down, laughing. You twist and kick and it doesn't help. Jordan throws the sneaker over his shoulder and peels the sock off from the heel."
        },
        {
          "note": "The glitter's still on."
        },
        "\"LIAR,\" Steph yells. \"Tay, it's still on!\"",
        "Oh my god. You said you took it off.",
        {
          "note": "Steph's got your other shoe and sock off too. Both feet are out on the grass, held down."
        },
        "\"Right,\" Jordan says. \"Penalty for lying to your coach.\"",
        "\"You're not my...\"",
        {
          "note": "He starts, and Steph starts on the other foot."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at the court lights. Don't make a sound.)",
          "them": [
            {
              "note": "Jordan goes slow up the arch. Steph goes fast under the toes. Your legs go stiff."
            },
            "\"He's fighting it,\" Bec says, above your head. \"Look at his face.\"",
            "\"Bec, get his ribs.\"",
            "\"No, feet only,\" Jordan says. \"Bec, swap in with Steph.\"",
            {
              "note": "There's three of them now. Half the team has wandered over. Tayla's sitting cross-legged by your head with her chin in her hands."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Just keep holding it.)",
              "them": [
                {
                  "note": "You do. Your eyes are watering, your jaw hurts and your toes keep curling, but nothing comes out."
                },
                "\"How,\" Steph says. \"I'd be dead.\"",
                "\"Tay, want a go?\" Jordan says. \"Bet you know a spot.\"",
                {
                  "note": "Tayla looks at your foot, then at you."
                }
              ],
              "replies": [
                {
                  "you": "(Look straight at her.) Don't, Tay.",
                  "outcome": "held",
                  "spark": 20,
                  "them": [
                    {
                      "note": "She looks back at you for a second. Then she pushes Jordan's hands off."
                    },
                    "Okay, enough. He wins. Give him his shoes.",
                    "\"He didn't win, he just didn't lose,\" Jordan says, but he lets go. They all do.",
                    {
                      "note": "Steph gets your sneaker off the court. Tayla brushes the grass off your feet before you put your socks on. She takes her time."
                    },
                    "\"Whatever,\" Jordan says, and packs up the balls by himself."
                  ],
                  "after": "Tayla, to the team chat: \"three of you and he didnt laugh once\" Steph: \"it wasnt normal\" Tayla: \"it was kind of hot actually\" Bec: \"TAY\" Jordan: \"rematch next week\" Tayla: \"no\""
                },
                {
                  "you": "(Say nothing. Keep holding.)",
                  "outcome": "cracked",
                  "spark": 9,
                  "them": [
                    {
                      "note": "Tayla shuffles down. She skips the sole and goes for the spot just under your ankle bone, the one she found on her couch."
                    },
                    {
                      "note": "Half a second. Then you squeal so loud the team on the next court looks over, and all four of them are going at once."
                    },
                    "\"TAY,\" Steph screams. \"You broke him!\"",
                    "I found that ages ago. On my couch.",
                    {
                      "note": "They stop when you finally get \"stop\" out. Tayla high-fives Jordan."
                    }
                  ],
                  "after": "Steph, to the team chat: \"[video] tay found it\" Bec: \"that noise omg\" Jordan: \"tay's a natural\" Steph: \"wait you knew about that spot??\" Tayla: \"he made me promise not to use it\" Steph: \"and??\" Tayla: \"and jordan asked\""
                }
              ]
            },
            {
              "you": "(It's too much. You squeal.)",
              "them": [
                {
                  "note": "It comes out as a squeal and then you're giggling and bucking on the grass, trying to get your feet back. Six hands. It's not happening."
                },
                "\"THERE he goes,\" Steph yells.",
                "\"Penalty accepted,\" Jordan says, and keeps going.",
                {
                  "note": "Bec's filming with one hand. Tayla's laughing so much she has to lie down."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! It's still on! I lied! I lied!",
                  "outcome": "cracked",
                  "spark": 9,
                  "them": [
                    {
                      "note": "They all let go. Jordan blows his whistle, one short blast."
                    },
                    "\"Confession accepted.\"",
                    {
                      "note": "You curl up with your toes tucked under you, red to your hairline. Steph throws your sneaker at you."
                    },
                    "You lied to my coach about nail polish. Who does that.",
                    {
                      "note": "She's still laughing. Jordan gives her a hand up off the grass and holds on a bit longer than he needs to."
                    }
                  ],
                  "after": "Bec, to the team chat: \"[video] 'I LIED I LIED'\" Steph: \"best training all season\" Jordan: \"he can come every thursday\" Tayla: \"you only coach thursdays\" Jordan: \"so every week then\""
                },
                {
                  "you": "(Giggling, red) Stop! All of you, stop!",
                  "outcome": "cracked",
                  "spark": 7,
                  "them": [
                    {
                      "note": "They let go as soon as you say it."
                    },
                    "\"Hands off,\" Jordan says. \"Stopped.\"",
                    {
                      "note": "You sit up and pull your feet in. There's grass in your hair."
                    },
                    "Are you okay? That was so high.",
                    {
                      "note": "Then Steph does the noise you made, and Tayla loses it and has to grab Jordan's arm to stay standing."
                    }
                  ],
                  "after": "Tayla, to Bec: \"i feel bad\" Bec: \"you laughed the most\" Tayla: \"i know thats why i feel bad\" Bec: \"you also held jordan's arm for like ten minutes\" Tayla: \"i was falling over\" Bec: \"for ten minutes\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they've even started.)",
          "them": [
            {
              "note": "You go the second they move. Squealing, twisting on the grass, toes going everywhere."
            },
            "\"Oh my god,\" Steph says. \"He's so bad.\"",
            "\"Bec, Tay, get in here,\" Jordan says. \"Everyone gets a foot.\"",
            {
              "note": "Bec takes half a foot. Tayla crawls over laughing and takes the toes on the other one."
            },
            "Why are you SO ticklish. This is so bad. {name}.",
            {
              "note": "Half the team's standing round you in a circle. Someone puts music on."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please stop!",
              "them": [
                {
                  "note": "They stop and let go. You lie there panting with your arms over your face."
                },
                "\"He said please,\" Jordan says. \"Three times. Did everyone count?\"",
                "\"Three,\" a couple of the girls say.",
                {
                  "note": "Tayla picks your foot up again. She isn't tickling. She's just holding it and grinning at you."
                },
                "One more? Just me. Ten seconds."
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No. Not even you.",
                  "outcome": "begged",
                  "spark": 5,
                  "them": [
                    "Fine! Fine.",
                    {
                      "note": "She lets go. You keep your feet tucked under you. Jordan's sitting on your socks."
                    },
                    "Jordan, give him his socks.",
                    "\"Come and get them, Tay.\"",
                    {
                      "note": "She goes to get them and it turns into her and Jordan wrestling on the grass. She's laughing the whole time. You sit there holding your sneakers."
                    }
                  ],
                  "after": "Steph, to the team chat: \"he begged. 3 pleases\" Bec: \"then tay and jordan wrestled for his socks for like five min\" Steph: \"who won\" Bec: \"not {name}\""
                },
                {
                  "you": "(Still giggling) ...Okay. Ten seconds. Just you.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "The team counts down. Tayla goes straight for the spot under your ankle bone and you're screaming from ten."
                    },
                    {
                      "note": "At one the others all pile back in. They stop when you finally squeak \"stop\"."
                    },
                    "\"He asked for that,\" Jordan says. \"He literally asked.\"",
                    "He did ask.",
                    {
                      "note": "Jordan sits down on the grass next to her."
                    },
                    "\"Team's going to the pub after,\" he says to her. \"You coming?\"",
                    "Yeah, okay.",
                    {
                      "note": "She doesn't look at you."
                    }
                  ],
                  "after": "Bec, to the team chat: \"[video] he asked for MORE\" Steph: \"jordan sat next to tay all night at the pub\" Bec: \"where was {name}\" Steph: \"fixing my eyeliner in the bathroom\" Bec: \"ok well thats fair\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back on the grass and let them.)",
              "them": [
                {
                  "note": "You stop struggling and lie flat with your arms out, laughing at the sky."
                },
                "\"He's given up,\" someone says. \"He's just lying there.\"",
                "\"Look at him,\" Jordan says. \"He loves this.\"",
                {
                  "note": "It goes on for ages. They swap round. Someone does your arch with the corner of a netball bib."
                },
                {
                  "note": "After a while Tayla stops and sits back and watches."
                },
                "{name}. You can tell them to stop, you know."
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "They stop and let go."
                    },
                    "\"Three minutes,\" Bec says. \"I got the whole thing.\"",
                    {
                      "note": "Jordan pats your foot twice. \"Subbed off. Good effort, champ.\""
                    },
                    {
                      "note": "Then he stands up and holds his hand out to Tayla. \"Walk you to your car?\""
                    },
                    {
                      "note": "She takes it. Steph throws your sneakers over, one at a time."
                    }
                  ],
                  "after": "Tayla, to Bec, from Jordan's passenger seat: \"he just lay there and let everyone do it\" \"for like three minutes\" \"he was having the best time\" Bec: \"and?\" Tayla: \"idk. its fine. i just dont want that in a boyfriend\" Tayla: \"jordan's getting us food\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. They keep going."
                    },
                    "Okay. Everyone stop. He can't breathe.",
                    {
                      "note": "It's her on-court voice. Everyone lets go at once."
                    },
                    "\"He didn't say stop,\" Jordan says.",
                    "He couldn't. Look at him.",
                    {
                      "note": "You're lying in a heap of socks and bibs, still giggling. Half the team's filming."
                    },
                    {
                      "note": "Tayla picks up her bag."
                    },
                    "Jordan, can you give me a lift?",
                    "\"Yeah. Course.\""
                  ],
                  "after": "Steph, to the team chat: \"[video] all four minutes\" Tayla: \"stop sending it\" Steph: \"tay you left with jordan\" Tayla: \"he drove me home\" Bec: \"you live ten minutes away\" Bec: \"it took two hours\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "You lost it laughing on the grass because your feet are ticklish. That's all it was. Getting in Jordan's car was Tayla's call."
    },
    {
      "id": "tayla-end",
      "route": "tayla",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Mitch thought Padam Padam was from a car ad. Steph liked him straight away.",
      "title": "Tayla and Mitch",
      "contact": "Tayla",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans and a tee. Keep your head down.",
          "thinks": "jeans and a tee. toned down for me i think. didn't work, still SO gay",
          "gaydar": -2,
          "intro": "Two months later Sam drags you to the netball grand final. Jeans, a tee, just lip oil. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch.",
          "them": [
            {
              "note": "She looks at your jeans and her shoulders come down."
            }
          ]
        },
        {
          "label": "Cute shorts, a cropped knit and lashes",
          "thinks": "lashes at netball. better than bec's and she pays someone",
          "intro": "Two months later Sam drags you to the netball grand final. Little shorts, a cropped knit, lashes and gloss. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch.",
          "them": [
            {
              "note": "She sees the lashes and squeezes Mitch's hand a bit tighter."
            }
          ]
        },
        {
          "label": "A sundress, sandals, painted toes and big sunglasses",
          "thinks": "sundress in the stands and big sunglasses. he's more of a WAG than me and i'm the actual WAG",
          "gaydar": 1,
          "intro": "Two months later Sam drags you to the netball grand final. A yellow sundress, sandals, painted toes and big sunglasses. A woman in the row behind asks where the dress is from. In the stands next to Tayla's drink bottle there's a tall sunburnt guy in a football jersey yelling \"GO TAY\" every time she touches the ball. That's Mitch.",
          "them": [
            {
              "note": "Steph spots the sundress from the court and gives you a slow thumbs up."
            },
            {
              "note": "Tayla laughs, properly, and tucks herself under Mitch's arm."
            }
          ]
        }
      ],
      "thinks": [
        "mitch carries the cooler and thinks padam padam is an ad. mitch also actually wants to have sex with me, which, wild, turns out that's nice",
        "{name} looked so good. obviously. he's gay",
        "the girls want him at every party now and so do i. i just don't have to pretend i want to kiss him anymore and omg the relief"
      ],
      "them": [
        {
          "note": "After the game Tayla comes over, still sweaty, holding Mitch's hand."
        },
        "Oh! Hi! Sam said you might come. This is Mitch. Mitch, {name}. We went out. For a bit.",
        "\"Hey man,\" Mitch says. \"You did Bec's makeup that time, right? She still talks about it.\"",
        "He plays football. Every Saturday, it's his whole thing. I played him Padam Padam in the car and he goes, is this from an ad?",
        "He carried the whole cooler in from the car by himself. You made me hold your tote bag at Felons. Remember that?",
        {
          "if": "tayla-ambush=held",
          "text": "\"Wait, are you the guy from training?\" Mitch says. \"Jordan couldn't get a laugh out of you? He's still annoyed about that.\""
        },
        {
          "if": "tayla-ambush=cracked|begged|kept",
          "text": "\"Oh, hang on,\" Mitch says, grinning. \"You're the guy from the training video. Tay's team sent it to everyone.\""
        },
        {
          "if": "tayla-ambush=cracked|begged|kept",
          "note": "Tayla says \"Mitch\" and elbows him, but she's laughing."
        },
        {
          "text": "Steph's list is still going btw. She's up to like ELEVEN guys. Mitch said he knows a twelfth.",
          "if": "c6c=told"
        },
        {
          "text": "Also Bec's lock screen is still you redoing your eyeliner in her bathroom at the party. Just so you know.",
          "if": "c6c=broke"
        },
        {
          "text": "Steph says you're still telling people you're straight. She's not mad. She's just, like, waiting.",
          "if": "c6c=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hi Mitch! Love the jersey. Very orange. Tay, he's gorgeous. I'm so happy for you.",
          "them": [
            "Thanks. Yeah. He is.",
            {
              "note": "She looks at you properly for the first time. Your outfit, your face."
            },
            "You look really happy. Way happier than at Felons. Are you seeing anyone?",
            "\"Tay,\" Mitch says. \"Nosy.\""
          ],
          "replies": [
            {
              "you": "No one. Just me and the girls. Dani's taking me dancing on Saturday.",
              "them": [
                "In the Valley?",
                "\"Love the Valley,\" Mitch says. \"Went to a buck's there once and we ended up at a drag show. Great night.\"",
                "Mitch. That's... okay, never mind.",
                "Have fun Saturday."
              ]
            },
            {
              "you": "Not yet. We'll see.",
              "them": [
                "Steph made a list, by the way. Of guys. For you.",
                "After the 30th. I told her to throw it out and she didn't.",
                "There's a guy from her work on it. He's actually really nice."
              ]
            }
          ]
        },
        {
          "you": "(Stand up a bit straighter.) Mitch? Can I talk to you for a sec? About Tay.",
          "them": [
            "\"Yeah, course,\" Mitch says, and follows you over to the fence.",
            {
              "note": "He's a head taller and sunburnt across the nose. He leans on the fence so he's down at your level. Your stomach flips."
            },
            "\"What's up, champ?\""
          ],
          "replies": [
            {
              "you": "I want her back. I think. I'm going to ask her. I just thought I should tell you first. Sorry.",
              "them": [
                "\"You want her back?\" He grins like you've told him a good one. \"Go on then. Have a go. I'll wait here.\"",
                "\"Here.\" He holds out his Gatorade. \"You look like you need this more than me.\"",
                {
                  "note": "You have a sip. Your hand shakes when you give it back, and he sees."
                },
                {
                  "note": "Tayla's come over. She heard."
                },
                "Did you just ask Mitch if you could have me back?",
                "Oh my god. He's not giving me back, {name}. If anything he'd give you his number.",
                "Honestly you two would be cute. Don't tell him I said that.",
                "{name}. No. Oh my god.",
                "That's actually really cute though.",
                {
                  "note": "She fixes your sunglasses on top of your head for you, then goes back to Mitch."
                }
              ],
              "after": "Steph, in the netball chat that night: \"update. {name} asked mitch for tay back\" \"mitch gave him a gatorade\" Bec: \"i love him\" Tayla: \"which one\" Bec: \"both??\""
            },
            {
              "you": "...Nothing. Sorry. It's a really good orange, your jersey.",
              "gaydar": 100,
              "them": [
                "\"Ha. Thanks. I've got a spare in the car if you want it. Might be big on you.\"",
                {
                  "note": "You walk back to Tayla holding Mitch's spare jersey and his number, for if you ever want to come to a game. Your ears are bright red."
                },
                "You went over there to fight for me and you came back with his number.",
                "Steph filmed it. Sorry. I tried."
              ],
              "after": "Steph, in the netball chat that night: \"[video] {name} went to fight mitch and came back with his jersey and his number\" Bec: \"is he going to wear it\" Steph: \"crop it probably\" Tayla: \"mitch wants to know if he's coming saturday\""
            }
          ]
        },
        {
          "you": "Ha. Okay. Nice to meet you, Mitch. I'm going to go find Sam.",
          "them": [
            "\"Yeah, you too, man!\"",
            {
              "note": "Tayla catches your arm as you go."
            },
            "Hey. You look good.",
            "And Steph says told you so. Don't reply to her."
          ]
        }
      ],
      "after": "Steph, in the netball chat that night: \"{name} came to the grand final\" Bec: \"he looked so good\" Steph: \"mitch liked him\" Tayla: \"mitch likes everyone\"",
      "debrief": "She's with a guy who thinks Padam Padam is from an ad, and she's happy. Whatever you said to Mitch, you got through it."
    },
    {
      "id": "georgie-1",
      "route": "georgie",
      "gaydar": 20,
      "gaydarSays": "Fell off a V1 twice. Did his own nails. Not sure what to do with that yet.",
      "title": "Belay partner",
      "contact": "Georgie",
      "outfits": [
        {
          "label": "Boy clothes: gym shorts and an old tee",
          "thinks": "Old tee, normal. Then the nails. For grip. One",
          "masc": true,
          "spark": 10,
          "gaydar": -10,
          "intro": "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, and then, in the same flat voice, asked if you wanted a drink after. You were in gym shorts and an old tee with a hole in the armpit."
        },
        {
          "label": "Fitted gym shorts and a nice tank",
          "thinks": "Nicer tank than mine. That's two and he hasn't touched a hold",
          "intro": "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, and then, in the same flat voice, asked if you wanted a drink after. You were in fitted gym shorts, a nice black tank and a clear coat on your nails, which you've started doing \"for grip\".",
          "them": [
            "also your tank was really nice. like nicer than mine. noted"
          ]
        },
        {
          "label": "Short shorts, a cropped tank, and nails with a French tip",
          "thinks": "French tips on a climbing wall. Three before he chalked up, that's a record",
          "gaydar": 5,
          "intro": "Georgie climbs at your gym on Tuesdays and Thursdays. She doesn't do small talk. Tonight she asked you to belay her, then asked if you wanted a drink after. You were in short running shorts, a cropped tank and a French tip you did last night. The chalk wrecked it in ten minutes and you said \"no\" out loud. Georgie heard.",
          "them": [
            "also french tips. on your nails. at the gym. i counted three people looking"
          ]
        }
      ],
      "thinks": [
        "ABBA on the wall, the scream, does his own nails, then the scream again. Three. I counted the scream once. Still said yes to Thai",
        "I don't do second dates. Doing one. If he tries to kiss me after Thai I'll let him and see. He won't though"
      ],
      "them": [
        "hey. good session",
        "youre a terrible climber btw",
        "good belayer though. and funny",
        "want to do it again? saturday. thai in west end"
      ],
      "replies": [
        {
          "you": "Terrible? Wow. Okay. Yes to Thai.",
          "them": [
            "you are though",
            "id rather just say it",
            "saturday 7. the one on boundary st"
          ],
          "replies": [
            {
              "you": "Saturday. Wear something nice. I want to see you out of a harness.",
              "them": [
                "lol ok",
                "you too. not the gym stuff"
              ]
            },
            {
              "you": "Can I ask why you asked me? I fell off a V1. Twice.",
              "them": [
                "you dont take yourself seriously",
                "every other guy there grunts. you sang abba on the wall",
                "anyway saturday"
              ]
            }
          ]
        },
        {
          "you": "I'm not terrible! I'm graceful. It's different. Saturday works.",
          "them": [
            "graceful lol",
            "you did a little scream every time you slipped",
            "but yes saturday"
          ],
          "replies": [
            {
              "you": "It was a manly scream.",
              "gaydar": 25,
              "them": [
                "it was not",
                "it was like a high C",
                "see you saturday"
              ]
            },
            {
              "you": "See you Saturday. I'll try to scream less.",
              "them": [
                "dont",
                "it was the best bit"
              ]
            }
          ]
        },
        {
          "you": "Thai, yes. But my forearms are dead after tonight, so be gentle with me.",
          "them": [
            "your forearms are tiny. let them be dead",
            "you can pick the restaurant though",
            "actually no i already picked it. boundary st, 7"
          ],
          "replies": [
            {
              "you": "They're not tiny. They're delicate.",
              "gaydar": 25,
              "them": [
                "thats worse",
                "saturday"
              ]
            },
            {
              "you": "Rude. But fine. Saturday.",
              "them": [
                "👍"
              ]
            }
          ]
        }
      ],
      "after": "Georgie, to her housemate: \"asked out the guy from the gym\" Housemate: \"the one who sings?\" Georgie: \"yeah. he's funny. he does his own nails\" Housemate: \"oh?\" Georgie: \"for grip apparently\" Housemate: \"is that a thing\" Georgie: \"no\""
    },
    {
      "route": "georgie",
      "path": "masc",
      "id": "georgie-m2",
      "title": "Tacos, bare nails",
      "contact": "Georgie",
      "irl": true,
      "gaydar": 10,
      "spark": 85,
      "gaydarSays": "Bare nails. Ate all the pork belly. Asked about my project. Fine. I like him.",
      "intro": "Second date. Tacos in Fortitude Valley. Jeans, a plain grey tee, bare nails. Georgie's in a black tank and cargo pants with chalk still on her knuckles. She's already ordered for both of you.",
      "them": [
        "Hi. I ordered. Fish, pork belly, the corn thing. You're having a beer. You look like a beer person tonight.",
        {
          "note": "She sits back and looks at you. She doesn't fill the silence. She never does."
        },
        "You look different. Less... I don't know. Less."
      ],
      "replies": [
        {
          "you": "Less what?",
          "them": [
            "I don't know. Last week I thought you might be into the belayer guy.",
            "Today I don't."
          ],
          "replies": [
            {
              "you": "I'm into the girl who called me a terrible climber.",
              "masc": true,
              "spark": 90,
              "outcome": "kept",
              "them": [
                "You are a terrible climber.",
                {
                  "note": "She smiles. It's the first time you've seen her actually smile."
                },
                "Okay. Good."
              ],
              "after": "Georgie, to her housemate: \"second date\" \"and?\" \"good. normal. he's into me\" \"you sound surprised\" \"i was a bit\""
            },
            {
              "you": "The belayer guy? Rory? He's so nice. His forearms are unreal.",
              "spark": 55,
              "outcome": "slipped",
              "them": [
                "Yeah.",
                "That's what I mean.",
                {
                  "note": "She eats the last bit of pork belly without asking."
                }
              ],
              "after": "Georgie, to her housemate: \"he talked about rory's forearms for 2 min\" \"is that bad\" \"its just information\""
            }
          ]
        },
        {
          "you": "Less what? I'm the same guy.",
          "masc": true,
          "them": [
            "Okay.",
            {
              "note": "She looks at your hands. Bare nails, a bit of chalk still in the creases."
            },
            "You took the polish off."
          ],
          "replies": [
            {
              "you": "It was for grip. Didn't help. Waste of time.",
              "masc": true,
              "spark": 84,
              "outcome": "kept",
              "them": [
                "Told you. Nothing helps your grip. You need to actually get stronger.",
                "Saturday. I'll show you."
              ],
              "after": "Georgie, to her housemate: \"he took the nail stuff off\" \"good?\" \"good. less to think about\""
            },
            {
              "you": "Yeah. I sort of miss it.",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                "Huh.",
                "You can put it back on. I'm not your boss.",
                {
                  "note": "She says it flat. You can't tell if she minds."
                }
              ],
              "after": "Georgie, to her housemate: \"he misses his nail polish\" \"aw\" \"yeah\""
            }
          ]
        }
      ],
      "debrief": "Georgie says what she sees. You don't have to explain yourself to it."
    },
    {
      "route": "georgie",
      "path": "masc",
      "id": "georgie-m3",
      "title": "Mount Barney",
      "contact": "Georgie",
      "irl": true,
      "gaydar": 15,
      "spark": 75,
      "gaydarSays": "Carried his own pack up Mount Barney. Complained twice. Acceptable.",
      "intro": "Two months in. Georgie's taken you up Mount Barney. You're at the saddle, eating squashed sandwiches. She hasn't said anything for twenty minutes, which is normal.",
      "them": [
        {
          "note": "She offers you the last of her water without looking at you.",
          "if": "georgie-m2=kept"
        },
        {
          "note": "She looks at your new hiking socks. Lilac. She doesn't say anything.",
          "if": "georgie-m2=slipped"
        },
        "My housemate asked if we're a thing.",
        "I said I'd ask. So. Are we."
      ],
      "replies": [
        {
          "you": "Yeah. We're a thing.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "Okay. Good.",
            {
              "note": "She leans her shoulder on yours. You sit like that until the wind gets cold."
            },
            "Don't make it weird."
          ],
          "after": "You and Georgie are a thing. She calls you her boyfriend once, at the gym, very loud, to a guy called Corey. Corey doesn't ask her to Kangaroo Point again."
        },
        {
          "you": "What did you want to say?",
          "spark": 60,
          "outcome": "drift",
          "them": [
            "I don't know. I asked you.",
            {
              "note": "She packs up the sandwich bag."
            },
            "Never mind. Let's go down before it's dark."
          ],
          "after": "Georgie doesn't ask again. She starts climbing on Thursdays with a guy called Ben. She tells you in one text: \"climbing with ben on thursdays now. hes good. 4 times this week\""
        },
        {
          "you": "Honestly? I don't think I'm into you like that. I think I'm into... I don't know.",
          "them": [
            "Guys.",
            {
              "note": "She says it the same way she says \"V3\"."
            },
            "Yeah. I figured. The lilac socks.",
            "It's fine. You're a good belayer. Go date a guy who'll belay you back."
          ],
          "spark": 10,
          "gaydar": 100,
          "outcome": "told",
          "after": "Georgie is the first person you said it to out loud. She never brings it up again. She still calls you a terrible climber."
        }
      ],
      "debrief": "She asked straight out, halfway up a mountain with a squashed sandwich. You didn't need the answer ready."
    },
    {
      "id": "georgie-2",
      "route": "georgie",
      "gaydar": 55,
      "gaydarSays": "Green nails to tacos. I didn't ask why at the time. I'm asking now.",
      "title": "Tacos",
      "contact": "Georgie",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans, a plain tee, sage nails",
          "thinks": "jeans, tee, fine. then sage nails and I looked at them all dinner",
          "gaydar": -5,
          "intro": "Second date. Tacos in Fortitude Valley. Jeans, a plain tee, and your nails painted a soft sage green, which felt like a lot when you left the house. Georgie's in a black tank and cargo pants with chalk still on her knuckles. She's already ordered for both of you.",
          "them": [
            {
              "note": "She looks at your green nails for exactly as long as she looks at the menu."
            }
          ]
        },
        {
          "label": "A fitted shirt, gloss and painted nails",
          "thinks": "His mouth was shinier than mine. Tried to picture kissing it. Couldn't",
          "intro": "Second date. Tacos in Fortitude Valley. A fitted shirt, a clear gloss and your nails painted a soft sage green. Georgie's in a black tank and cargo pants with chalk on her knuckles. She's already ordered for both of you.",
          "them": [
            {
              "note": "She sees the gloss and goes very quiet, even for her."
            }
          ]
        },
        {
          "label": "A sheer shirt, gloss, sage nails and a little eyeliner",
          "thinks": "Sheer shirt and eyeliner to tacos. Four people looked at him. I wasn't one of them, not like that",
          "gaydar": 5,
          "intro": "Second date. Tacos in Fortitude Valley. A sheer black shirt, gloss, sage nails and a thin line of eyeliner. Georgie's in a black tank and cargo pants. She's already ordered for both of you, and she looks at your eyeliner for a while without blinking.",
          "them": [
            {
              "note": "\"Eyeliner,\" she says. Not a question."
            },
            {
              "note": "She pushes her chair back an inch. You hear it scrape."
            }
          ]
        }
      ],
      "thinks": [
        "Green nails. Sage, sorry. I stopped counting at six",
        "Two dates and he hasn't tried to kiss me. I keep checking if I'd want him to and it keeps coming back eh",
        "Housemate asked if I'd sleep with him. I said maybe. I meant no, but no sounded mean"
      ],
      "them": [
        "Hi. I ordered. Fish, pork belly, and the corn thing. You're having a marg. You look like a marg person.",
        {
          "note": "She sits back and looks at you. She doesn't fill the silence. She never does."
        },
        "Your nails are green."
      ],
      "replies": [
        {
          "you": "Sage, actually. Everyone's doing it right now. Do you like it? I could do yours. You'd suit a deep red.",
          "gaydar": 60,
          "them": [
            "No. I'd chip it on the wall in five minutes.",
            "It's neat though. You're good at it.",
            {
              "note": "The waiter comes over. His eyebrows are perfect. You stare at them. Georgie watches you stare."
            },
            "Are you going to say something or just look at him?"
          ],
          "replies": [
            {
              "you": "Sorry! Are your brows laminated? They look amazing. Who does them?",
              "gaydar": 65,
              "them": [
                "\"Oh my god, yes, thank you! There's a girl on James St,\" the waiter says.",
                {
                  "note": "You talk for four minutes. You get the girl's Instagram. He comes back with a free churro. Georgie eats her taco and says nothing until he's gone."
                },
                "You got a free churro.",
                "I've been coming here two years. I've never got a churro.",
                "He was more into you than he was into me. That doesn't usually happen on my dates."
              ],
              "after": "Georgie, to her housemate: \"second date\" Housemate: \"and?\" Georgie: \"green nails. talked to the waiter about his eyebrows for four minutes. waiter gave him a churro\" Housemate: \"do you like him though\" Georgie: \"yeah. i dont know if he likes me. i dont know if he likes girls\""
            },
            {
              "you": "I wasn't looking at him. I was reading the specials board.",
              "them": [
                "The specials board is behind me.",
                "It's fine. Eat."
              ]
            }
          ]
        },
        {
          "you": "Sage is basically a neutral now, Georgie.",
          "gaydar": 60,
          "them": [
            "Is it.",
            "My last boyfriend wore the same black hoodie for three years. I liked that. I never had to wonder about him.",
            "Eat your taco."
          ],
          "replies": [
            {
              "you": "So I'm the opposite of the hoodie guy.",
              "them": [
                "You're the opposite of every guy I've been out with.",
                "Haven't decided if that's good. Eat."
              ]
            },
            {
              "you": "(Eat the taco. Say nothing. Pinkie slightly up.)",
              "them": [
                {
                  "note": "She watches your pinkie. Her lips move a bit, like she's counting something."
                }
              ]
            }
          ]
        },
        {
          "you": "They're for grip. Climbing grip. It's a technique.",
          "them": [
            "No it's not.",
            "I've climbed for eleven years. It's not a thing.",
            "You can just say you like it."
          ],
          "replies": [
            {
              "you": "...Fine. I like it. I did them last night watching Drag Race.",
              "gaydar": 65,
              "them": [
                "Drag Race.",
                "Okay.",
                {
                  "note": "She drinks her marg and doesn't bring it up again."
                }
              ]
            },
            {
              "you": "It's a technique. Look it up.",
              "them": [
                "I won't.",
                "Eat. They go soggy."
              ]
            }
          ]
        }
      ],
      "after": "Georgie, to her housemate: \"second date\" Housemate: \"and?\" Georgie: \"green nails\" Housemate: \"do you like him though\" Georgie: \"yeah. i think. i dont know if he likes me\" Georgie: \"i dont know if he likes girls\""
    },
    {
      "id": "georgie-shoes",
      "route": "georgie",
      "title": "New climbing shoes",
      "contact": "Georgie",
      "irl": true,
      "gaydar": 60,
      "spark": 40,
      "gaydarSays": "We went to buy climbing shoes. He tried on the pink ones first. They were the women's ones. They fit.",
      "intro": "Saturday. The climbing shop in Milton. Georgie says your shoes are \"embarrassing\" and you need new ones. She's going to pick. You're going to agree.",
      "thinks": [
        "He looked at the pink women's ones for about a minute. A full minute. I wasn't going to say anything and then I did",
        "Three dates. Never once tried to come in after. I thought I'd mind more than I do",
        "Smaller feet than me. I'm a nine. I don't want to date someone with smaller feet than me, that's a rule now, I just made it"
      ],
      "them": [
        "These. Aggressive downturn. You'll hate them for a month then you'll climb better.",
        {
          "note": "She holds up a black pair. Men's. You're looking at a pink pair on the women's wall."
        },
        "Why are you looking at those.",
        {
          "note": "She says it flat, not a joke. She's still holding the black pair out."
        }
      ],
      "replies": [
        {
          "you": "No reason. The black ones. Sure.",
          "them": [
            {
              "note": "You try the black ones. Size eight. They're huge on you. The shop guy goes to get a seven."
            },
            "Small feet.",
            "\"They're normal feet.\"",
            "They're smaller than mine. I'm a nine."
          ],
          "replies": [
            {
              "you": "Can I try the pink ones? Just to compare.",
              "spark": 32,
              "them": [
                {
                  "note": "The pink ones, women's six and a half, fit perfectly. The shop guy says \"oh nice, they're made for you.\""
                },
                "They are. They're made for a small woman.",
                {
                  "note": "She buys them for you anyway. She doesn't hold your hand on the way out."
                }
              ],
              "after": "Georgie, to her housemate: \"bought him climbing shoes\" \"which ones\" \"women's six and a half\" \"oh\" \"pink\" \"OH\""
            },
            {
              "you": "Get me the seven. In black.",
              "spark": 46,
              "them": [
                "Okay.",
                {
                  "note": "You keep looking at the pink ones while she pays."
                },
                "You can get the pink ones. I don't care. I just don't want to date them."
              ],
              "after": "Georgie, to her housemate: \"he wanted the pink ones\" \"so?\" \"so he got the black ones and looked sad about it for an hour\""
            }
          ]
        },
        {
          "you": "The pink ones are nice.",
          "them": [
            "They're women's.",
            "\"Shoes don't have a gender.\"",
            "These ones do. It says on the box."
          ],
          "replies": [
            {
              "you": "I'm getting them.",
              "spark": 30,
              "them": [
                {
                  "note": "You get them. Size six and a half. She looks at your feet in them, then at you."
                },
                "They look good. That's annoying.",
                "My housemate's going to love this."
              ],
              "after": "Georgie, to her housemate: \"he bought pink women's climbing shoes\" \"cute\" \"they fit him better than mine fit me\" \"is that a problem\" \"i don't know yet\""
            },
            {
              "you": "Fine. Black. I'm a man. I'll suffer.",
              "spark": 44,
              "them": [
                "Ha.",
                {
                  "note": "It's the first time she's laughed today. She buys you a coffee after."
                }
              ],
              "after": "Georgie, to her housemate: \"he said 'i'm a man i'll suffer'\" \"lol\" \"it was the most convincing he's been\""
            }
          ]
        }
      ],
      "debrief": "You liked the pink ones. That can be the whole reason."
    },
    {
      "id": "c6d",
      "route": "georgie",
      "title": "The list",
      "contact": "Georgie",
      "irl": true,
      "gaydar": 95,
      "gaydarSays": "Twenty-two things. My housemate added two. I'd stand by every one of them except one, and I'm not saying which.",
      "intro": "Thursday, the cafe at the climbing gym. You're meeting Georgie after her session, then dinner. You wore the lilac slip dress with a cardigan over it, your nails done, gloss and lashes. Georgie's still at the table with her housemate and a girl from the Tuesday crew called Tess, all chalky, sharing a brownie. Georgie has her phone out before you've sat down.",
      "outfits": [
        {
          "label": "The slip dress with a cardigan buttoned right up",
          "thinks": "Cardigan buttoned right up. Still a dress",
          "gaydar": -5,
          "intro": "Thursday, the cafe at the climbing gym. You're meeting Georgie after her session, then dinner. You wore the lilac slip dress with a big cardigan buttoned right up over it, and just gloss. Georgie's still at the table with her housemate and a girl from the Tuesday crew called Tess, all chalky, sharing a brownie. Georgie has her phone out before you've sat down.",
          "them": [
            {
              "note": "Georgie's eyes go to the cardigan buttoned right up to your neck. \"You can undo it,\" she says. \"We've all seen dresses.\""
            }
          ]
        },
        {
          "label": "Lilac slip dress, a cardigan, nails, gloss and lashes",
          "thinks": "Dress, nails, gloss, lashes. Didn't even add them. What's the point",
          "them": [
            {
              "note": "Georgie looks at your lashes and makes a note on her phone."
            }
          ]
        },
        {
          "label": "Lilac slip dress, strappy sandals, painted toes, lashes, no cardigan",
          "thinks": "No cardigan and painted toes and Tess gasped out loud. Toes are ten on their own",
          "gaydar": 4,
          "intro": "Thursday, the cafe at the climbing gym. You're meeting Georgie after her session, then dinner. You wore the lilac slip dress with no cardigan, strappy sandals, toes painted to match, gloss and lashes. Georgie's still at the table with her housemate and a girl from the Tuesday crew called Tess, all chalky, sharing a brownie. Georgie has her phone out before you've sat down.",
          "them": [
            {
              "from": "Tess",
              "text": "Are your toes the same colour as the dress? Georgie. His toes match."
            },
            {
              "note": "Georgie looks at your toes and puts her phone face up on the table, next to the brownie."
            }
          ]
        }
      ],
      "debrief": "She read you out as a numbered list in front of two people. Some of it was fair and some of it wasn't. However you took it was fine.",
      "thinks": [
        "I couldn't say it so I wrote twenty-two things. Housemate wrote two of them. Tess wanted to do more",
        "Housemate asked if we've slept together. No. Haven't even kissed properly. Four dates. I know what that means, I just wanted it written down",
        "I'd still climb with him every week. I just want someone who wants to have sex with me, it's not a big ask, and it's not him"
      ],
      "them": [
        "Hi. Sit. I got you the iced chai.",
        {
          "note": "Her housemate looks at the dress, then at Georgie. Tess puts her hand over her mouth."
        },
        "Okay. I'm doing this here, because I said I would, and if I wait till dinner I won't. I've been keeping a list. Don't.",
        {
          "from": "Tess",
          "text": "She has. She read us some at the top of the wall."
        },
        "Things. About you. Numbered.",
        {
          "note": "She scrolls. It's long."
        },
        "One. Does his own nails 'for grip'. Two, sang ABBA on the wall. Three, the scream. High C. Four, 'sage is basically a neutral now, Georgie'.",
        "Five. Got a free churro at tacos by talking to the waiter about his eyebrows. I've been going there two years.",
        "Six. Pink climbing shoes. Women's. Six and a half. They fit.",
        {
          "from": "Her housemate",
          "text": "Seven. He told me my pilates socks were cute when he picked her up. Nobody's ever noticed my socks."
        },
        {
          "from": "Tess",
          "text": "Can I do one? Eight. He asked me where my chalk bag's from. It's from the shop downstairs. It's the shop one."
        },
        "Eight, okay. Nine is the dress. Which looks good. I'm putting that in brackets. Nine, dress, bracket, looks good.",
        "So. That's nine and there's more. Are you gay?"
      ],
      "replies": [
        {
          "you": "No. I'm not. It's a dress, Georgie.",
          "them": [
            {
              "from": "Tess",
              "text": "Ten. Said 'it's a dress, Georgie'."
            },
            {
              "note": "Her housemate laughs into the brownie. Georgie types it in."
            },
            "Ten. Okay."
          ],
          "replies": [
            {
              "you": "Can you stop writing things down?",
              "them": [
                "No. It's how I think.",
                "Eleven. Asked me to stop writing things down."
              ],
              "replies": [
                {
                  "you": "I'm not gay.",
                  "gaydar": 88,
                  "spark": 8,
                  "them": [
                    "Okay.",
                    "Then I don't want to go to dinner. That's not a punishment. I just don't want to sit there for another hour and do the same date for a fourth time.",
                    {
                      "note": "She puts her phone in her chalk bag. Her housemate gets up to put her mug back. Tess suddenly has to go and coil a rope."
                    }
                  ],
                  "after": "Georgie, to her housemate, on the drive home: \"he said no\" Housemate: \"i was there\" Georgie: \"i know. im just saying it out loud. he said no and he was wearing a dress\" Housemate: \"are you ok\" Georgie: \"nice guy. not a boyfriend\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Take her phone and put it face down on the table.)",
                  "gaydar": 90,
                  "spark": 10,
                  "them": [
                    "Twelve. Took my phone.",
                    {
                      "note": "She says it from memory, without the phone, and for a second she nearly smiles."
                    },
                    {
                      "from": "Her housemate",
                      "text": "That's actually a good one. I'd keep that one."
                    },
                    "I'm keeping it. Twelve's staying.",
                    "You can still come to dinner. I'm still hungry. I'm just not going to pretend I'm not counting."
                  ],
                  "after": "Georgie, to her housemate: \"he took my phone\" Housemate: \"and you just kept going\" Georgie: \"i know the list off by heart\" Housemate: \"georgie\" Georgie: \"what. it's twelve things now\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Laugh.) Okay. Number five's fair.",
              "them": [
                "Which means the rest are fair.",
                "That's not how lists work but it's how this one works."
              ],
              "replies": [
                {
                  "you": "...They're all fair.",
                  "gaydar": 98,
                  "spark": 4,
                  "them": [
                    "Okay.",
                    "Okay. Thank you. That's the most you've said about it in three dates.",
                    {
                      "from": "Tess",
                      "text": "Do you want my brownie? You can have the rest of my brownie."
                    },
                    {
                      "note": "Georgie closes the list. She doesn't delete it. She just puts the phone in her chalk bag and leaves it there."
                    },
                    "Still dinner? I'm starving. I did the purple one twice."
                  ],
                  "after": "Georgie, to her housemate: \"he said they're all fair\" Housemate: \"so he said it\" Georgie: \"he said they're all fair. that's like ninety-eight percent\" Housemate: \"you're not counting this\" Georgie: \"i am\"",
                  "outcome": "dodged"
                },
                {
                  "you": "Five's fair. The rest are slander.",
                  "gaydar": 93,
                  "spark": 6,
                  "them": [
                    {
                      "from": "Tess",
                      "text": "Thirteen. Said 'slander'."
                    },
                    "Thirteen. Thank you, Tess.",
                    {
                      "note": "Her housemate is crying laughing. Georgie isn't, but her mouth's doing something at the corner."
                    },
                    "Six isn't slander. I bought them. I was there."
                  ],
                  "after": "Georgie, to Tess: \"he said slander\" Tess: \"he's so funny\" Georgie: \"yes\" Tess: \"are you sad\" Georgie: \"no. a bit. i think i'd ranked him higher\"",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "Keep going. What's after nine?",
          "them": [
            "Okay. Ten. Asked if my belay device came in another colour.",
            {
              "from": "Her housemate",
              "text": "Eleven. Did a little skip when the waiter said 'love' at tacos. You told me that one."
            },
            "I did tell you that one. Twelve, cried at the end of the climbing documentary. Thirteen, has a hand cream in the car and it's nicer than mine.",
            {
              "note": "She's going fast now, not really looking up."
            },
            "Fourteen. Said he's never been in love. Three years with his ex and he said he didn't think he ever was.",
            {
              "note": "She stops. It's quiet. Tess looks at the table. Her housemate looks at Georgie."
            },
            "That one's... I shouldn't have read that one."
          ],
          "replies": [
            {
              "you": "(You try to say something and your chin goes. You're crying, in the gym cafe, in the dress.)",
              "them": [
                {
                  "note": "You open your mouth and nothing comes out, and then your chin goes, and then you're crying, at the gym cafe, with chalk on the table and a bouldering wall behind you."
                },
                {
                  "note": "Georgie looks at you. Then she holds her phone up so you can see it, opens the note, and deletes it. All twenty-two. She shows you the empty screen."
                },
                "Gone.",
                {
                  "note": "She gets up, comes round to your side of the table and sits down right next to you, shoulder against yours. She doesn't say anything else. She never fills a silence."
                },
                {
                  "note": "Her housemate pulls off her hoodie, the grey one with chalk all down the front, and holds it out to you."
                },
                {
                  "from": "Her housemate",
                  "text": "Here. Put it on. It's the softest one I own and it's disgusting."
                },
                {
                  "note": "Tess goes to the counter and comes back with a hot chocolate with two marshmallows and puts it in front of you and then a third marshmallow from her pocket, wrapped."
                }
              ],
              "replies": [
                {
                  "you": "(Into the hot chocolate) It's true, though. Fourteen. I wasn't.",
                  "gaydar": 99,
                  "spark": 1,
                  "them": [
                    "I know. I didn't mean it like it was bad. I just meant, that's when I knew.",
                    "Because it wasn't about her. It was about her being a her.",
                    {
                      "note": "Her housemate puts a hand on your knee. Tess nods."
                    },
                    "You don't have to say anything else. Drink that. It's four dollars."
                  ],
                  "after": "Georgie, to her housemate, that night: \"i shouldnt have read fourteen\" Housemate: \"no\" Georgie: \"i deleted it\" Housemate: \"i know i was there\" Georgie: \"he kept your hoodie\" Housemate: \"he can keep it. it looks better on him. over a slip dress\"",
                  "outcome": "cried"
                },
                {
                  "you": "I'm gay. That's what fourteen is.",
                  "gaydar": 100,
                  "spark": 0,
                  "them": [
                    "Yeah.",
                    "Okay. Thank you for saying it. You didn't have to, after I did that.",
                    {
                      "note": "She leans her head on your shoulder for about one second, then sits back up like it didn't happen."
                    },
                    {
                      "from": "Tess",
                      "text": "Can I say something? There's a guy on Tuesdays who'd love you. He's got a dog."
                    },
                    "Tess. Not now.",
                    "Maybe later though. He does have a nice dog."
                  ],
                  "after": "Georgie, to her housemate: \"he said it\" Housemate: \"good. you ok?\" Georgie: \"yeah. weird. good. i ranked him top five dates this year and he's gay\" Housemate: \"what's number one\" Georgie: \"the guy with the boat. you know that\"",
                  "outcome": "broke"
                },
                {
                  "you": "(Wipe your face on the hoodie sleeve.) Can you start a new list?",
                  "gaydar": 97,
                  "spark": 1,
                  "them": [
                    "Of what.",
                    "...Oh. Okay. Yeah. I can do that.",
                    {
                      "note": "She opens a new note. She types a heading and turns the phone round: \"guys at this gym for {name}. ranked.\""
                    },
                    {
                      "from": "Tess",
                      "text": "One. The Tuesday guy with the dog."
                    },
                    {
                      "from": "Her housemate",
                      "text": "Not the one who grunts. Put him at the bottom."
                    },
                    "I'm putting him at the bottom. Drink your hot chocolate. We're going to dinner after, all of us, I'm not leaving you with the brownie."
                  ],
                  "after": "Georgie, to her housemate, from the Thai place: \"new list's at seven names\" Housemate: \"tess added three\" Georgie: \"he ranked them himself. he put the grunting guy at four\" Housemate: \"why\" Georgie: \"he said 'arms'\"",
                  "outcome": "cried"
                }
              ],
              "thinks": [
                "I read fourteen out because Tess was there and I wanted to look clever. Never in love with her in three years. Yeah. Obviously. Shit",
                "Deleted it and sat next to him with my shoulder on him and he cried on the dress and all I could think was I'd never have got to sleep with him anyway, which is the worst thing to be thinking right then"
              ]
            },
            {
              "you": "(Hold it together.) That one's not funny, Georgie.",
              "them": [
                "No. It's not. Sorry.",
                {
                  "note": "She deletes it. Just that one. You watch her do it."
                },
                "I'm not reading the rest. I've still got the question though. I still want to know."
              ],
              "replies": [
                {
                  "you": "Yeah. I'm gay. That's your answer.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    "Okay.",
                    "Thank you. I wanted you to say it. Not me reading it off my phone.",
                    {
                      "from": "Tess",
                      "text": "That was so brave. In a dress. At the gym."
                    },
                    "Tess.",
                    {
                      "from": "Tess",
                      "text": "What? It was."
                    },
                    {
                      "note": "Georgie pushes the last of the brownie across to you. You still go to dinner. She orders for both of you."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"i asked him straight up and he answered straight up\" Housemate: \"pun?\" Georgie: \"no\" Georgie: \"maybe. it's thirteen things now\"",
                  "outcome": "told"
                },
                {
                  "you": "I'm going to go.",
                  "gaydar": 92,
                  "spark": 5,
                  "them": [
                    "Okay. That's fair.",
                    {
                      "note": "You stand up. Your bag strap catches on the chair. Her housemate unhooks it for you without making it a thing."
                    },
                    "I'm sorry about fourteen. I'm not sorry about the other ones. But I'm sorry about that one.",
                    "Still belay me Tuesday? You don't have to answer that now either."
                  ],
                  "after": "Georgie, at 11pm: \"sorry about fourteen\" Then: \"the other 21 stand\" Then, a minute later: \"belay tuesday?\" You reply with a thumbs up. She replies \"good\".",
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "Only nine? Georgie. I'm disappointed.",
          "them": [
            {
              "note": "Tess shrieks. Her housemate slaps the table."
            },
            "There's twenty-two. I stopped at nine because I thought you'd be upset.",
            {
              "from": "Tess",
              "text": "He's not upset. Look at him. He's thrilled."
            },
            "Okay. Ranked, how thrilled?"
          ],
          "replies": [
            {
              "you": "Read them all. I want the full ranking.",
              "them": [
                {
                  "note": "She reads them all. Ten to twenty-two. You correct her twice: it was a laminated brow, not a tinted one, and you were singing Dancing Queen on the wall, not Mamma Mia."
                },
                {
                  "note": "Somewhere around fourteen she skips one. She thinks you don't see her do it."
                },
                "Twenty-two. Tonight. Walked past the bouldering wall in lilac and none of the guys fell off, I checked.",
                "So. The question still stands."
              ],
              "replies": [
                {
                  "you": "Yes. Obviously. I'm gay. Put that as twenty-three.",
                  "gaydar": 100,
                  "spark": 3,
                  "them": [
                    "Twenty-three. He said yes.",
                    {
                      "note": "She types it in. Her housemate leans over to watch her do it."
                    },
                    "Okay. That's the list done. That's the whole list. I feel weird. Good weird.",
                    {
                      "from": "Tess",
                      "text": "Can I take you shopping? I've never had a gay friend who climbs. I mean you don't climb. You fall off."
                    },
                    "He does fall off. That's number fifteen."
                  ],
                  "after": "Georgie, to her housemate: \"23 things\" Housemate: \"and number 23\" Georgie: \"he said yes\" Housemate: \"proud of you\" Georgie: \"of me??\" Housemate: \"yeah. go to sleep\"",
                  "outcome": "told"
                },
                {
                  "you": "I'll answer at number thirty.",
                  "gaydar": 95,
                  "spark": 5,
                  "them": [
                    "Thirty. Okay. Then I need eight more.",
                    {
                      "from": "Tess",
                      "text": "Twenty-three. Corrected Georgie about Dancing Queen."
                    },
                    {
                      "from": "Her housemate",
                      "text": "Twenty-four. Knows what a laminated brow is."
                    },
                    "This is going to take five minutes. Get comfy. I'm getting you another chai."
                  ],
                  "after": "Georgie, to her housemate: \"we got to 30\" Housemate: \"i was there\" Georgie: \"he answered\" Housemate: \"i was THERE georgie\" Georgie: \"i know. i just like saying 30\"",
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Write this down. Number ten: he's gay.",
              "gaydar": 100,
              "spark": 2,
              "them": [
                {
                  "note": "Georgie looks at you for a long second. Then she types it."
                },
                "Ten. He's gay.",
                "Okay. Good. Thank you. You made it a list item. For me. Okay.",
                {
                  "from": "Her housemate",
                  "text": "That's actually romantic. In a sad way."
                },
                {
                  "note": "Georgie stops the list at ten and doesn't read the other twelve. You still go to dinner. She lets you order for her, for the first time."
                }
              ],
              "after": "Georgie, to her housemate: \"he made it number ten\" Housemate: \"aw\" Georgie: \"yeah\" Georgie: \"i didnt read 11 to 22\" Housemate: \"why\" Georgie: \"dunno. he ordered me the wrong curry and i ate it anyway\"",
              "outcome": "told"
            }
          ]
        }
      ]
    },
    {
      "id": "georgie-feet",
      "route": "georgie",
      "gaydar": 96,
      "gaydarSays": "His toes are lilac and he did them himself and the edges are cleaner than mine. Corey saw them first.",
      "title": "Climbing shoes",
      "contact": "Georgie",
      "irl": true,
      "intro": "Thursday at the gym. Since the list, you and Georgie aren't really seeing each other, but she still asked you to come Thursday. Corey's here tonight. He sets the routes, and every single week he asks Georgie to come climbing outside with him.",
      "thinks": [
        "Lilac toes. Neater than mine",
        "Corey asked me out right over the top of his feet and {name} didn't look annoyed once. He looked at Corey's shoulders. Three times",
        "three weeks, no sex, barely a kiss, and a guy asked me out in front of him and he looked at the guy. I said yes to Corey. I'm not sorry"
      ],
      "them": [
        {
          "note": "After the session you sit on the bench and pull your climbing shoes off. Lilac toes. You forgot."
        },
        "Huh. Lilac.",
        {
          "text": "My housemate says hi, by the way. She's got you in her phone as 'Georgie's gay one'. Her words. I'm just passing it on.",
          "if": "c6d=told|broke"
        },
        {
          "text": "Tess asked if you were okay after the cafe. I said yes. I think yes. That's two people who've asked, so.",
          "if": "c6d=cried"
        },
        {
          "text": "I deleted the list, by the way. Mostly. I kept number nine.",
          "if": "c6d=dodged"
        },
        "Your feet are small. For your height. I'm a nine. You're what, a seven?",
        {
          "note": "Corey drops his chalk bag next to you. His feet are bare and huge and covered in chalk."
        },
        "\"No way,\" he says, loud enough for the whole bench. \"You get your toes done, man?\"",
        "He did them himself. Look at the edges.",
        "\"Course he did.\" Corey's grinning. He doesn't lower his voice when he turns to Georgie. \"Kangaroo Point Saturday? Proper rock. Just us. He'll survive a day without you.\""
      ],
      "replies": [
        {
          "you": "Can I come too?",
          "them": [
            "\"Yeah, course, man,\" Corey says, way too easily. \"Wear flip-flops for the walk down. Don't want you chipping anything.\"",
            {
              "note": "Georgie snorts. She doesn't say no to Saturday."
            },
            "Bring snacks. You can belay.",
            {
              "note": "So you'll be at the bottom holding the rope. Corey will be up there next to her."
            }
          ],
          "replies": [
            {
              "you": "Actually, you two go. I've got a thing Saturday.",
              "them": [
                "What thing?",
                "\"He's got a thing,\" Corey says. \"Leave him alone, Georgie.\"",
                {
                  "note": "She looks at you a beat too long. She doesn't ask again."
                },
                "Okay. Next time."
              ],
              "after": "You don't have a thing. You spend Saturday redoing your toes. Georgie sends one photo from the top, the river and the city, with Corey's hand in the corner of it."
            },
            {
              "you": "I can lead, actually. I've done a few.",
              "them": [
                "You've done four. You came off two.",
                "\"Four's good, man,\" Corey says. \"I'll put a top rope up for you.\"",
                {
                  "note": "He says it nicely. He's already looking at Georgie."
                }
              ],
              "after": "On Friday night Georgie texts: \"corey says the walk in is steep and 40 min. maybe next time for you?\" Then: \"he said to say sorry\" Then: \"he didnt actually say that\""
            }
          ]
        },
        {
          "you": "(Shove your feet back into your socks.)",
          "them": [
            {
              "note": "One sock goes on inside out. Corey's still grinning."
            },
            "Why are you hiding them. They look good.",
            "That's kind of the problem.",
            "\"What problem?\" Corey says.",
            "Nothing. Saturday. Seven."
          ],
          "replies": [
            {
              "you": "What problem, Georgie?",
              "them": [
                {
                  "note": "She looks at you, then at Corey, then back at you."
                },
                "Two problems. One, they're neater than mine.",
                "I'm not saying two in front of Corey.",
                "\"I can go,\" Corey says, not going anywhere."
              ]
            },
            {
              "you": "(Get the other sock on and say nothing.)",
              "them": [
                {
                  "note": "Georgie picks up your climbing shoe and hands it to you, and then she's talking to Corey about what time and whose car."
                },
                "Seven. I said seven. You're always late, Corey."
              ]
            }
          ]
        },
        {
          "you": "They won't chip, actually. That's a top coat.",
          "gaydar": 98,
          "them": [
            "\"Top coat,\" Corey says, nodding slowly. \"Georgie. Come on.\"",
            "Three weeks of dates and I never once heard you say top coat.",
            "\"You never asked,\" you say. You nod at Corey. \"He did.\"",
            {
              "note": "Corey laughs and ruffles your hair. Then he goes and helps Georgie coil her rope, standing very close to her."
            }
          ],
          "replies": [
            {
              "you": "(Fix your hair.)",
              "them": [
                {
                  "note": "You fix it in the glass of the drinks fridge. Georgie sees you in the reflection."
                },
                "That's the third time tonight. It's fine. It was fine before he touched it."
              ]
            },
            {
              "you": "Georgie. He's standing really close to you.",
              "them": [
                "I know. I can count.",
                "About a forearm. His forearm, not yours.",
                {
                  "note": "She doesn't move away. Corey hands her the end of the rope and she takes it."
                }
              ]
            }
          ]
        }
      ],
      "after": "Georgie, to her housemate: \"corey asked me out again\" \"and?\" \"said yes. for climbing\" \"what about {name}\" \"he's got lilac toes. did them himself. neater than mine\" \"so?\" \"so im going climbing with corey\"",
      "debrief": "Getting caught out in front of the guy who wants her stings. You don't have to win anything against him."
    },
    {
      "id": "georgie-tickle",
      "route": "georgie",
      "gaydar": 97,
      "irl": true,
      "title": "The crash mats",
      "contact": "Georgie",
      "gaydarSays": "I timed the whole thing. Obviously I timed it. I'm not saying what the number means.",
      "intro": "A week after Corey asked Georgie to Kangaroo Point. Thursday night at the gym again. After the session everyone lies on the crash mats under the bouldering wall, barefoot, eating the lollies someone always brings. Your toes are still lilac. Corey's on the mat right next to Georgie.",
      "thinks": [
        "I had the stopwatch. That's what I was doing. Timing it and thinking I'm never sleeping with him, I knew at the nails",
        "Corey led a 22 on Saturday and I seconded it and it was the best day I've had in a month. Ranked: Corey, the 22, the lollies, {name}",
        "what's annoying is I'd have slept with him on date one if he was straight"
      ],
      "them": [
        {
          "note": "You lie down on Georgie's other side. Your feet end up near Corey's head, because that's how the mats work."
        },
        "\"Still lilac,\" Corey says, looking at them sideways. \"No chips. Respect.\"",
        "He does a top coat. Apparently.",
        "On his tiny feet. Corey's are twice the size.",
        "\"How was the rock on Saturday?\" you ask her.",
        "Good. Corey led a 22. I seconded it. Yeah. It was good.",
        {
          "note": "That's all she says. Corey smiles at the ceiling."
        },
        {
          "note": "Then he rolls onto his elbow and looks at your foot."
        },
        "\"Hey, Georgie. Climbers are meant to have tough feet. Calluses. Can't feel a thing. Bet his aren't.\"",
        "Corey.",
        "\"Just checking.\" His hand's already round your ankle, chalky. \"Hold still, buddy. This is for the gym record.\"",
        "There's no gym record for that.",
        "\"There is now. Georgie, time it.\"",
        {
          "note": "Georgie gets her phone out, slowly, and opens the stopwatch."
        }
      ],
      "replies": [
        {
          "you": "(Go rigid. Stare at the holds on the ceiling. Not a sound.)",
          "them": [
            {
              "note": "You stare at a pink crimp on the ceiling. Corey's fingers start at your heel and walk up the sole, slow."
            },
            "Five seconds.",
            {
              "note": "He gets to the arch. Your calf goes tight. He feels it and grins."
            },
            "\"Oh, he's fighting. Look at the calf.\"",
            "Ten.",
            {
              "note": "A couple of the regulars sit up to watch. Someone says \"oh no, Corey's doing the thing\". So it's a thing he does."
            },
            "Fifteen.",
            {
              "note": "The chalk makes it dry and scratchy. He goes right under your toes."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it all the way.)",
              "them": [
                {
                  "note": "You hold it through twenty, then thirty. Your eyes are watering. Nothing comes out."
                },
                "Forty. Forty-five.",
                {
                  "note": "At sixty Corey lets go and flops onto his back."
                },
                "\"Nothing,\" he says. \"Not a thing. He's a statue.\"",
                "One minute two. Not a sound.",
                {
                  "note": "She keeps looking at you after she's stopped the timer."
                }
              ],
              "replies": [
                {
                  "you": "(Sit up and dust the chalk off your foot.) My turn to time you, Corey.",
                  "outcome": "held",
                  "spark": 22,
                  "them": [
                    {
                      "note": "Corey laughs and sits up and tucks his feet right under himself. \"No thanks.\""
                    },
                    "Oh, interesting. Corey. Give me your foot.",
                    "\"Absolutely not.\"",
                    {
                      "note": "Georgie lies back down, a bit closer to you this time, and leaves her hand on your arm."
                    },
                    "I'm putting it in the gym chat. One minute two.",
                    {
                      "note": "Corey goes to put the lollies away. It takes him a long time."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"new record. 1:02. no reaction\" Corey: \"rigged\" Georgie: \"you wont do yours\" Corey: \"no comment\" Georgie, to her housemate: \"he beat corey at corey's own thing\" \"i liked that more than i thought i would\""
                },
                {
                  "you": "(Wiggle your toes in his face.) Go on. Do the other one.",
                  "outcome": "held",
                  "spark": 15,
                  "them": [
                    "\"Bad idea, buddy,\" Corey says, and grabs it.",
                    "Restarting.",
                    {
                      "note": "This time he doesn't mess around. Both thumbs, straight under the toes. You last eight seconds. Then a snort comes out, then a giggle, and you're kicking."
                    },
                    "Eight. Okay. So the left one's the weak one.",
                    {
                      "note": "He lets go. The regulars cheer. Georgie's laughing properly, at Corey's face more than yours."
                    },
                    "\"Kangaroo Point again Saturday?\" Corey says to her.",
                    "Yeah, okay."
                  ],
                  "after": "Georgie, to her housemate: \"right foot 1:02. left foot 8 seconds\" \"so he is ticklish\" \"yeah\" \"corey's taking me back to kangaroo point. harder one this time\""
                }
              ]
            },
            {
              "you": "(It breaks. You giggle.)",
              "them": [
                {
                  "note": "At eighteen seconds it comes out: a giggle, then a squeak, and you're curled on your side trying to get your foot back. He's not letting go."
                },
                "Eighteen.",
                "\"Eighteen!\" Corey says. \"Georgie, eighteen seconds!\"",
                "I can see the timer, Corey.",
                {
                  "note": "A girl halfway up the bouldering wall has stopped to watch, hanging off one hand, laughing."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Fine! I'm ticklish! Happy?",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away."
                    },
                    "\"Very.\" He lies back with his hands behind his head. \"Write it down, Georgie.\"",
                    "Writing it down.",
                    {
                      "note": "She actually does. In her phone, in a note called 'Corey's records'. There are other names in it. Yours goes at the bottom."
                    },
                    {
                      "note": "You sit up and pick chalk out from between your toes. Georgie lies back down next to Corey and they look at something on her phone together."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"18 seconds\" \"corey keeps a list. top guy did four minutes\" \"{name}'s at the bottom\" Housemate: \"is that bad\" Georgie: \"its just numbers\""
                },
                {
                  "you": "(Bright red, giggling) Corey! Stop it!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "He lets go straight away and holds both hands up."
                    },
                    "\"Done, done. Sorry, buddy.\"",
                    {
                      "note": "You sit up and hug your knees, feet flat where he can't get at them. You're red down to your neck."
                    },
                    "You okay? That was loud.",
                    {
                      "note": "She asks it like she'd ask if you'd hurt a finger. Then she turns to Corey. \"Do me.\""
                    },
                    "\"No way. You'll kick me.\"",
                    "I won't. I won't react.",
                    {
                      "note": "She doesn't. He tries for a full minute while she eats a lolly. Then they both look over at you."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"me 1:00 no reaction. {name} 18 seconds\" Corey: \"he went so red\" Georgie: \"yep\" Corey: \"kangaroo point saturday\" Georgie: \"yes\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling the second he touches you.)",
          "them": [
            "One... oh. Okay. One second.",
            {
              "note": "You're gone before she's finished saying it, giggling and squirming across the mat while he hangs on to your ankle."
            },
            "\"ONE SECOND,\" Corey says. \"Georgie! That's a record!\"",
            "It's the worst record.",
            {
              "note": "He doesn't stop. He tucks your foot under his arm and goes at the sole. You're shrieking. The whole bouldering area has turned round."
            },
            "\"How do you even climb with feet like this?\""
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Corey, please, stop!",
              "them": [
                {
                  "note": "He stops right away and lets go. You lie there panting, chalk all down your shin."
                },
                "\"He said please,\" Corey says. \"Georgie, write that down.\"",
                "I'm not writing that down.",
                {
                  "note": "He picks your foot up again, not tickling, just holding it, and waves it at Georgie."
                },
                "\"One more round? He's the easiest one I've ever done.\""
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No. I'm done. Done.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough, champ.\" He lets it go.",
                    {
                      "note": "You sit cross-legged with your feet under your knees for the rest of the night. Every time Corey moves you flinch. He notices and starts doing it on purpose."
                    },
                    "Stop flinching. He's not going to.",
                    {
                      "note": "She lies back down on Corey's side of the mat. He's showing her a video of some route in Spain and her head's nearly on his shoulder."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"he lasted one second\" \"one\" \"and then he begged\" Housemate: \"poor guy\" Georgie: \"yeah\" Georgie: \"also corey asked me to the blue mountains for a weekend\" Housemate: \"and\" Georgie: \"its a climbing trip\" Housemate: \"georgie\""
                },
                {
                  "you": "(Still giggling) ...Fine. One more.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 98,
                  "them": [
                    "Starting the timer.",
                    {
                      "note": "He goes again. You don't last any time at all. Someone's filming from the top of the wall."
                    },
                    "Thirty. Forty. Corey, he's not even trying to get away.",
                    "\"He likes it,\" Corey says, still going. \"Look at him.\"",
                    {
                      "note": "At a minute he lets go and holds his hand up for a high five. Georgie gives him one."
                    },
                    "You asked for more. You actually asked.",
                    {
                      "note": "You lie on the mat giggling while the two of them pack up the lollies."
                    }
                  ],
                  "after": "Georgie, to the gym chat: \"he asked for a second round\" Corey: \"he loved it\" Gym regular: \"is this the lilac toes guy\" Georgie: \"yes\" Gym regular: \"he seems happy\" Georgie: \"yeah he does\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let him.)",
              "them": [
                {
                  "note": "You stop pulling and lie back with your arms out, laughing at the ceiling, toes wriggling in Corey's hand."
                },
                "\"He's given up,\" someone says. \"He's just lying there.\"",
                "Thirty seconds. Forty.",
                {
                  "note": "Corey takes his time. Heel, arch, between the toes. He hums. You're crying laughing."
                },
                "A minute. Corey, a minute.",
                {
                  "note": "Georgie's stopped laughing. She's watching your face, not the timer."
                },
                "{name}. You can say stop."
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "He stops as soon as you say it and lets go."
                    },
                    "One forty-one.",
                    "\"Longest ever,\" Corey says. \"Most ticklish ever. Both.\"",
                    {
                      "note": "He gives your foot a little shake. \"Good game, buddy.\" Then he stands and puts a hand down for Georgie. \"One more problem before close?\""
                    },
                    {
                      "note": "She takes it. They do the purple one together. You lie on the mat with the lollies and watch."
                    }
                  ],
                  "after": "Georgie, to her housemate: \"1 minute 41\" \"he just let corey do it for 1 minute 41\" \"and the whole time i was like. this guy doesnt like girls\" Housemate: \"and corey\" Georgie: \"corey drove me home\""
                },
                {
                  "you": "(Can't speak. Too busy laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "You can't get a word out. Corey keeps going."
                    },
                    "Corey. Stop. Now.",
                    {
                      "note": "He stops straight away and lets go."
                    },
                    "\"He was laughing, George. Laughing's not stop.\"",
                    "He can't. He's purple. Two minutes ten.",
                    {
                      "note": "You're sprawled across two mats, chalk everywhere, still giggling. The girl from the wall has come down to look."
                    },
                    {
                      "note": "Georgie puts her phone away. She looks at you for a while, then at Corey."
                    },
                    "I'm heading off. You going my way?",
                    "\"Yeah. I'm going your way.\""
                  ],
                  "after": "Georgie, to her housemate, from Corey's car: \"two minutes ten\" \"he didnt say stop once\" \"im not even mad\" \"im just over it\" Housemate: \"where are you\" Georgie: \"corey's car\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Your feet are ticklish and Corey made it a record. Georgie had made up her mind before the timer started."
    },
    {
      "id": "georgie-end",
      "route": "georgie",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Ben abseils off skyscrapers for work. He's never worn a slip dress. I asked.",
      "title": "Georgie and Ben",
      "contact": "Georgie",
      "irl": true,
      "outfits": [
        {
          "label": "Old gym gear. Pretend nothing happened.",
          "thinks": "Old gym gear, hiding from me. Still the gayest guy in here",
          "gaydar": -2,
          "intro": "Six weeks later, Tuesday night at the gym. Your oldest gym gear and no makeup, so nobody looks twice. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben.",
          "them": [
            {
              "note": "She looks at your old gym gear a second longer than she'd look at anyone's. Nothing changes on her face."
            }
          ]
        },
        {
          "label": "Matching pastel gym set and lip oil",
          "thinks": "Matching pastel set. Ben's shorts have a hole in the bum and I love the hole",
          "intro": "Six weeks later, Tuesday night at the gym. A matching lilac gym set, lip oil, hair clipped back. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben.",
          "them": [
            {
              "note": "She looks at the matching set, then at Ben's ripped old shorts, and steps half a pace closer to Ben."
            }
          ]
        },
        {
          "label": "Matching gym set, a full face of 'no-makeup makeup' and a pink claw clip",
          "thinks": "Pink claw clip and forty minutes of no-makeup makeup. Ben said nice clip and meant it",
          "gaydar": 1,
          "intro": "Six weeks later, Tuesday night at the gym. A matching lilac gym set, no-makeup makeup that took forty minutes, and a pink claw clip. Georgie's on the overhang wall. Belaying her is a guy you've never seen before: huge, bearded, a coil of rope over his shoulder. That's Ben.",
          "them": [
            {
              "note": "Ben looks at your claw clip and says \"nice clip\". He seems to mean it."
            },
            {
              "note": "Georgie snorts and turns it into a cough."
            }
          ]
        }
      ],
      "thinks": [
        "Ben's said about forty words to me and I like all of them. Ben also stays the night. That's already more than {name} ever did",
        "{name} looked happy. Properly. Never looked like that at tacos",
        "Ranked it in the car. Ben, climbing, {name}. Good"
      ],
      "them": [
        {
          "note": "Georgie lowers off and lands right next to you."
        },
        "Oh. Hi. This is Ben. Ben, {name}. We went out for a bit.",
        "\"Hey, man,\" Ben says. His voice is so low you feel it. \"Georgie says you're a good belayer.\"",
        "He does rope access. Abseils down buildings in the city. He's doing the Infinity tower on Monday.",
        "He carried both our packs up Mount Barney. You asked me to open your water bottle once. We were on a flat path.",
        {
          "if": "georgie-tickle=held",
          "text": "\"Corey told me about you,\" Ben says. \"The guy who beat his tickle thing. He still brings it up.\""
        },
        {
          "if": "georgie-tickle=cracked|begged|kept",
          "text": "\"Oh, you're on Corey's list,\" Ben says. \"Bottom of it, right?\" He's being friendly about it."
        },
        {
          "if": "georgie-tickle=cracked|begged|kept",
          "note": "Georgie doesn't correct him. She says \"it's a dumb list\" and chalks up."
        },
        {
          "text": "The Tuesday guy with the dog asked about you. He's still top of the new list. Ranked first. I don't make the rules.",
          "if": "c6d=told|broke"
        },
        {
          "text": "Tess still asks if you're coming. Every Tuesday. That's like nine times. She's got the hot chocolate order memorised.",
          "if": "c6d=cried"
        },
        {
          "text": "Not to be dramatic but the list's back. Number twenty-three is that you're still saying you're straight.",
          "if": "c6d=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hi Ben! Rope access, wow, brave. Georgie, he's lovely. I'm really happy for you.",
          "them": [
            "Thanks.",
            "You look good. More relaxed. You never looked relaxed with me, even in the dress.",
            "Sorry. I'm just saying what I see."
          ],
          "replies": [
            {
              "you": "I am more relaxed. I'm working some stuff out. Slowly.",
              "them": [
                "Good.",
                "Hurry up a bit though."
              ]
            },
            {
              "you": "I'm the same guy. I just stopped hiding the nail polish.",
              "them": [
                "Yeah.",
                "That's fine. It's just not for me."
              ]
            },
            {
              "you": "Do you miss me? Even a bit?",
              "them": [
                "No.",
                "I miss you belaying. That's not the same thing.",
                "Ben's taller than me. When he hugs me I can't see over his shoulder. I like that."
              ]
            }
          ]
        },
        {
          "you": "(Go up to Ben.) Ben. Hi. Sorry. Can I talk to you? About Georgie.",
          "them": [
            "\"Yeah, man,\" Ben says, and starts coiling his rope. He doesn't look up.",
            {
              "note": "He's got chalk up to the elbows and a little scar through one eyebrow. You look at the scar for too long."
            },
            "\"Go on.\""
          ],
          "replies": [
            {
              "you": "I think I made a mistake with her. I want to try again. So. Um. I thought you should know.",
              "them": [
                "\"Good luck with that,\" Ben says. Still coiling.",
                "\"Want me to spot you on the overhang after? Might help with the whole impressing her thing.\"",
                {
                  "note": "You say yes before you've thought about it. Ben smirks. Georgie heard all of it from the bench."
                },
                "{name}. You came over to get me back and now he's spotting you.",
                "No, by the way. Obviously no.",
                "Keep your hips in on the overhang. He'll tell you."
              ],
              "after": "Georgie, to her housemate: \"{name} told ben he wants me back\" \"no\" \"yes. at the gym. then ben spotted him on the overhang\" \"NO\" \"is ben worried\" \"ben gave him tips\""
            },
            {
              "you": "...Never mind. Your forearms are very... sorry. I'm going to go.",
              "gaydar": 100,
              "them": [
                {
                  "note": "Your face goes hot. You turn round too fast and kick the chalk bucket."
                },
                "\"Easy, tiger.\" Ben catches the bucket, then your elbow. He's laughing.",
                "You went over to fight him for me and you're bright red."
              ],
              "after": "Georgie, to her housemate: \"{name} went over to say something to ben\" \"what\" \"no idea. he went red and kicked the chalk bucket\" \"NO\" \"ben thought it was cute\" \"is ben worried\" \"ben doesnt get worried\""
            }
          ]
        },
        {
          "you": "(Wave, smile, and go to the other side of the gym for the rest of the night.)",
          "them": [
            {
              "note": "You climb on your own for an hour and fall off everything. At one point you look over and Ben's showing Georgie a heel hook and she's laughing, loud, with her head back."
            },
            {
              "note": "On your way out she says \"see you Thursday\" like nothing's different. Ben says \"see you, man\" and holds out his fist. You bump it."
            }
          ]
        }
      ],
      "after": "Georgie, to her housemate: \"{name} was at the gym. met ben\" \"and?\" \"he was nice about it. ben liked him\" \"is ben worried\" \"why would ben be worried\"",
      "debrief": "She's with a guy who abseils off buildings for work. However you handled Ben, he was never going to make it a fight."
    },
    {
      "id": "lucy-1",
      "route": "lucy",
      "gaydar": 15,
      "gaydarSays": "Polo and chinos, totally normal. He did ask where my scrunchie was from. Maybe for a friend?",
      "title": "Date one",
      "contact": "Lucy",
      "outfits": [
        {
          "label": "Boy clothes: the polo",
          "thinks": "polo. very first date. good",
          "masc": true,
          "spark": 10,
          "gaydar": -5,
          "intro": "Lucy's a nurse at the RBWH. You met at Kayla's housewarming and she wrote her number on a napkin. Date one: drinks at the Story Bridge Hotel. You wore a polo and chinos, the most normal outfit you own. She wore a black dress and a green velvet scrunchie."
        },
        {
          "label": "The polo, but with your good cologne and a silver chain",
          "thinks": "He smelled better than me. Most guys smell like whatever deodorant was on special",
          "intro": "Lucy's a nurse at the RBWH. You met at Kayla's housewarming and she wrote her number on a napkin. Date one: drinks at the Story Bridge Hotel. A polo, your good cologne and a thin silver chain you kept touching. She wore a black dress and a green velvet scrunchie.",
          "them": [
            "also you smelled amazing. like better than me. i was wearing hospital soap though so thats not hard"
          ]
        }
      ],
      "thinks": [
        "he asked where my scrunchie was from and i honestly can't tell if he wants to date me or borrow it. borrow probably",
        "hugged me at the car and that was it, no kiss. which is fine, first date, some guys are polite. i'm on at 7 i need to sleep"
      ],
      "them": [
        "hi! home safe 😊",
        "that was really nice. youre so easy to talk to",
        "most guys just talk about themselves for 2 hours",
        "also youre the first guy who has ever asked me where i got my scrunchie lol"
      ],
      "replies": [
        {
          "you": "It was a really good green! I had to know. Is that weird?",
          "them": [
            "not weird!! cute",
            "its from a stall at the paddington markets. i'll take you",
            "date two? im on nights next week but the weekend after?"
          ],
          "replies": [
            {
              "you": "Yes. Weekend after. Markets.",
              "them": [
                "deal 😊",
                "ok going to sleep, im on at 7. night!"
              ]
            },
            {
              "you": "For sure. And I'm getting you another one. Burgundy. You'd suit burgundy.",
              "gaydar": 20,
              "them": [
                "burgundy 😭 ok",
                "paddington then. its a plan"
              ]
            }
          ]
        },
        {
          "you": "Ha. I was nervous, so I just kept asking questions. But I had a really good time.",
          "them": [
            "lol well it worked",
            "date two?",
            "my roster is chaos but i'll make it work"
          ],
          "replies": [
            {
              "you": "Make it work. I want to see you again.",
              "them": [
                "😊 ok. weekend after next. i'll pick"
              ]
            },
            {
              "you": "Yes. I'm free. I'm basically always free. That sounded sad, ignore that.",
              "them": [
                "lol it did a bit",
                "its fine. last guy had a boat and never answered his phone",
                "ill send you my roster when it comes out"
              ]
            }
          ]
        },
        {
          "you": "Most guys are boring. Low bar.",
          "them": [
            "lol ok",
            "weekend after next? ill pick somewhere"
          ]
        }
      ],
      "after": "Lucy, to Kayla: \"he's lovely. like really lovely\" Kayla: \"he looked very... polo\" Lucy: \"he asked where my scrunchie was from\" Kayla: \"lol why\" Lucy: \"idk he liked it\""
    },
    {
      "route": "lucy",
      "path": "masc",
      "id": "lucy-m2",
      "title": "Markets, no polish",
      "contact": "Lucy",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "Bare nails, carried all my stuff, didn't ask where my scrunchie was from. I'm a bit in love.",
      "intro": "Date two. Paddington markets on a Saturday morning. A plain tee and jeans, bare nails. You thought about painting them last night and didn't. Lucy meets you at the gate with two coffees.",
      "them": [
        "Hi! I got you an oat flat white. I guessed. Is that okay?",
        {
          "note": "She hands it over. Her eyes go to your hands and then back up to your face."
        },
        "Okay, I need a present for Kayla's birthday and I'm hopeless. Help?"
      ],
      "replies": [
        {
          "you": "I'm hopeless too. Candle? Everyone likes a candle.",
          "masc": true,
          "them": [
            "Ha. Okay. Candle. That's such a boy answer. I love it."
          ],
          "replies": [
            {
              "you": "(Carry her bags for the rest of the morning.)",
              "masc": true,
              "spark": 86,
              "outcome": "kept",
              "them": [
                {
                  "note": "By eleven you're carrying a candle, a plant and a tote bag full of her stuff. She holds your arm while she looks at earrings."
                },
                "You're very useful. Has anyone told you that?"
              ],
              "after": "Lucy, to Kayla: \"he carried everything and picked you a candle\" Kayla: \"what kind of candle\" Lucy: \"a candle kayla. he's a boy\""
            },
            {
              "you": "Wait. Not that candle. This one. Fig and cedar. She'll love it.",
              "spark": 62,
              "outcome": "slipped",
              "them": [
                "How do you know she'll love it? You've met her once.",
                "\"She had a fig candle at her housewarming. Same brand. Bathroom shelf.\"",
                "...You looked at her bathroom shelf?"
              ],
              "after": "Lucy, to Kayla: \"he remembered the candle in your bathroom\" Kayla: \"thats a bit much\" Lucy: \"its a bit gay kayla\" Kayla: \"lol\""
            }
          ]
        },
        {
          "you": "What's she into? Let's do the jewellery stall.",
          "them": [
            {
              "note": "At the jewellery stall you pick up three things in ten seconds and they're all perfect."
            },
            "Okay. How are you so good at this?"
          ],
          "replies": [
            {
              "you": "Lucky guess. Is it this one? I don't know. You choose.",
              "masc": true,
              "spark": 72,
              "outcome": "kept",
              "them": [
                "Okay, this one. You chose it though. I saw your face.",
                {
                  "note": "She kisses your cheek, then your mouth."
                }
              ],
              "after": "Lucy, to Kayla: \"got your present\" Kayla: \"what is it\" Lucy: \"a surprise. {name} picked it. he pretended he didnt\""
            },
            {
              "you": "I just have taste. Here, hold your hair up, I want to see the earrings on you.",
              "spark": 50,
              "outcome": "slipped",
              "them": [
                {
                  "note": "She holds her hair up. You tilt her chin. The stall lady says \"you two are cute\" and then \"is he your stylist?\""
                },
                "Ha. Yeah. Sort of."
              ],
              "after": "Lucy, to Kayla: \"the earring lady asked if he was my stylist\" Kayla: \"is he\" Lucy: \"i think he might be\""
            }
          ]
        }
      ],
      "debrief": "You're good at presents. Lucy noticed, and that's all that happened."
    },
    {
      "route": "lucy",
      "path": "masc",
      "id": "lucy-m3",
      "title": "After the night shift",
      "contact": "Lucy",
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He brought me a bacon and egg roll after my night shift. In a hoodie. No skincare questions. I'm keeping him.",
      "intro": "Two months in. 7am. Lucy's just finished four night shifts in a row.",
      "them": [
        {
          "text": "omg you're outside?? with a bacon and egg roll???",
          "if": "lucy-m2=kept"
        },
        {
          "text": "omg you're outside?? with a coffee and... is that a sheet mask??",
          "if": "lucy-m2=slipped"
        },
        "im so tired i could cry",
        "kayla says i have to ask you something so. are you my boyfriend. sorry. its 7am. i'm not normal"
      ],
      "replies": [
        {
          "you": "Yes. Come down and eat your roll.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "ok",
            "ok coming",
            "boyfriend!!",
            "i'm going to cry on you a bit and then sleep for 14 hours"
          ],
          "after": "You're Lucy's boyfriend. You learn her roster. You bring rolls. You never once mention what she uses on her skin, even though you really want to know."
        },
        {
          "you": "Let's talk after you've slept, nurse.",
          "spark": 60,
          "outcome": "drift",
          "them": [
            "ok",
            {
              "note": "She sleeps fourteen hours. When she wakes up, she doesn't bring it up again."
            },
            "hey so. i think i want someone who just says yes. is that crazy"
          ],
          "after": "Lucy starts having breakfast after night shifts with a paramedic called Fraser. He says yes to everything. She sends you a photo of him asleep on her couch."
        },
        {
          "you": "Before that. Your under-eyes, babe. I brought you patches.",
          "them": [
            "you brought me under eye patches",
            "at 7am",
            "outside my work",
            "{name} i love you but you're my kayla",
            "you're literally my kayla. i'm not dating kayla"
          ],
          "spark": 25,
          "outcome": "drift",
          "after": "Lucy keeps the under-eye patches. She uses them before her date with a guy called Hamish. She tells you all about it. You do her eyeliner for the second one."
        }
      ],
      "debrief": "Lucy asked at 7am after four nights on. Nobody gives a perfect answer that early, including her."
    },
    {
      "id": "lucy-2",
      "route": "lucy",
      "gaydar": 40,
      "gaydarSays": "Deep red nails at the markets. Better than mine. I held my hand next to his to check.",
      "title": "Paddington markets",
      "contact": "Lucy",
      "irl": true,
      "outfits": [
        {
          "label": "A tee and jeans, nails painted a deep red",
          "thinks": "red nails with jeans. the nails were the whole outfit. saw them at the gate and decided i hadn't",
          "gaydar": -5,
          "intro": "Date two. Paddington markets on a Saturday morning. A plain tee and jeans, but you painted your nails last night, a deep red. You meant to take it off this morning. You didn't. Lucy meets you at the gate with two coffees.",
          "them": [
            {
              "note": "She looks at the red nails round the cup, and her face does the thing it does at work when someone tells her a symptom they googled."
            }
          ]
        },
        {
          "label": "A linen shirt, deep red nails and a bit of tinted balm",
          "thinks": "Linen shirt and tinted balm. He looked lovely. I only say lovely about guys I don't want to kiss",
          "intro": "Date two. Paddington markets on a Saturday morning. A cream linen shirt, a bit of tinted balm and your nails painted a deep red. Lucy meets you at the gate with two coffees.",
          "them": [
            {
              "note": "She clocks the tinted balm and her smile goes polite. The patient smile."
            }
          ]
        }
      ],
      "thinks": [
        "red nails neater than mine and I look at hands for a living",
        "two dates, no kiss. he's so lovely and so polite and i think i'm going to have to be the one who does it and i really don't want to",
        "Bless him. I'm pretty sure he's gay and I have no idea what I'm doing"
      ],
      "them": [
        "Hi! I got you an oat flat white. I guessed. Is that okay?",
        {
          "note": "She hands it over and looks at your fingers round the cup."
        },
        "Oh. Your nails are red. Were they red last time? I don't think they were. Or I wasn't paying attention?"
      ],
      "replies": [
        {
          "you": "They're new! The colour's called Bordeaux. I did them last night. Do you hate it?",
          "gaydar": 45,
          "them": [
            "Bordeaux.",
            "No! I don't hate it. It's nicer than mine, which is annoying.",
            {
              "note": "She holds her hand up next to yours. Yours is neater. She laughs, a bit loud."
            },
            "Okay. Scrunchie stall? It's this way."
          ],
          "replies": [
            {
              "you": "Lead the way. I'm getting you the burgundy one. It'll match my nails.",
              "them": [
                "Ha. Okay. Matching.",
                {
                  "note": "At the stall you pick the burgundy one for her and a black one for yourself. \"For the gym,\" you say. She says \"of course\" and pays for hers."
                }
              ],
              "after": "Lucy, to Kayla: \"second date. red nails. he called the colour bordeaux\" Kayla: \"BORDEAUX??\" Lucy: \"and he bought himself a scrunchie. for the gym\" Kayla: \"lucy\" Lucy: \"i know\""
            },
            {
              "you": "Sorry. I know it's a bit much. I'll take it off before next time.",
              "them": [
                "No, don't. It's your nails. Do what you want.",
                "It just surprised me. Come on."
              ]
            }
          ]
        },
        {
          "you": "They weren't red, you were paying attention. I just felt like it this week. Nobody's ever noticed my nails before.",
          "them": [
            "I'm a nurse. I look at hands all day.",
            "They suit you. Kind of annoyingly.",
            {
              "note": "She takes your hand to get through the crowd. Lets go. Takes it again."
            }
          ],
          "replies": [
            {
              "you": "Annoyingly? Why annoyingly?",
              "them": [
                "Because mine are wrecked from hand sanitiser and you look like you just walked out of a salon.",
                "Anyway. Scrunchies."
              ]
            },
            {
              "you": "(Squeeze her hand.)",
              "them": [
                {
                  "note": "She squeezes back. She's looking down at your nails while she does it."
                }
              ]
            }
          ]
        },
        {
          "you": "It's just nail polish. Loads of guys wear it now.",
          "them": [
            "Do they? Which guys?",
            {
              "note": "You can't think of one who isn't in a band."
            },
            "Okay. It looks nice. I'm not saying it doesn't. The stall's this way."
          ]
        }
      ],
      "after": "Lucy, to Kayla: \"second date. he had red nails\" Kayla: \"red??\" Lucy: \"like a deep red. they were really neat\" Kayla: \"lucy\" Lucy: \"i know\""
    },
    {
      "id": "lucy-3am",
      "route": "lucy",
      "title": "3am",
      "contact": "Lucy",
      "gaydar": 50,
      "spark": 42,
      "gaydarSays": "Texted him at 3am from a night shift. He was up. Doing a face mask. Of course he was.",
      "intro": "3:04am. Lucy's on a night shift. You're awake.",
      "them": [
        "are you awake. sorry. its quiet on the ward and im bored",
        "why are you awake??"
      ],
      "replies": [
        {
          "you": "Couldn't sleep. Doing a sheet mask.",
          "them": [
            "a sheet mask",
            "at 3am",
            "send a pic",
            {
              "note": "You send it. A lilac sheet mask with a little cat face on it."
            },
            "omg",
            "my patient just asked why i'm laughing"
          ],
          "replies": [
            {
              "you": "Want me to save you one? I've got a pack.",
              "spark": 34,
              "them": [
                "lol yes",
                "kayla does that too",
                "she brings me one after nights",
                "youre like a kayla. a boy kayla"
              ],
              "after": "Lucy, to Kayla: \"he does sheet masks at 3am\" Kayla: \"same\" Lucy: \"i know. thats the problem kayla. i texted my date and got you\""
            },
            {
              "you": "It's for my skin. It's very manly. Lots of guys do it.",
              "spark": 46,
              "them": [
                "name one",
                "...",
                "thats what i thought lol",
                "its cute though. go to sleep"
              ],
              "after": "Lucy, to Kayla: \"he said sheet masks are manly\" Kayla: \"are they\" Lucy: \"his had a cat face on it kayla\""
            }
          ]
        },
        {
          "you": "Just watching TV. What's happening on the ward?",
          "them": [
            "nothing. old man in bed 4 keeps calling me sweetheart",
            "what are you watching"
          ],
          "replies": [
            {
              "you": "A reality show rerun. The one with the rich sisters.",
              "spark": 38,
              "them": [
                "lol",
                "of course you are",
                "my ex watched rugby league at 3am once. this is better. i think"
              ],
              "after": "Lucy, to Kayla: \"he watches rich sisters reality tv at 3am\" Kayla: \"icon\" Lucy: \"thats what i said. icon. not boyfriend\""
            },
            {
              "you": "Cricket highlights. Riveting.",
              "spark": 52,
              "them": [
                "oh god",
                "ok go to sleep you nerd",
                "goodnight"
              ],
              "after": "Lucy, to Kayla: \"he was watching cricket highlights at 3am\" Kayla: \"nooo\" Lucy: \"i know. i was weirdly relieved\""
            }
          ]
        }
      ],
      "debrief": "What you do at 3am is your business."
    },
    {
      "id": "lucy-reflex",
      "route": "lucy",
      "title": "Reflexes",
      "contact": "Lucy",
      "irl": true,
      "gaydar": 58,
      "gaydarSays": "I was checking his plantar reflex. Then I wasn't. Bless him.",
      "intro": "3pm at Lucy's share house in Annerley. She's just woken up after nights and you brought her a coffee. Her housemates are at work, so it's just the two of you. You're on the couch with your feet up. Your nails are still the deep red from the markets. Your toes are bare.",
      "thinks": [
        "armchair. my day off, he comes over, and i sat in the armchair. you sit on the couch with someone you want to get off with",
        "Plantar reflex normal. Patient also extremely gay. Can't chart that one but it's the main finding",
        "told him red would suit his toes. i say that to kayla. then i lay in bed after he left and we've been seeing each other a few weeks and he's never once asked to stay"
      ],
      "them": [
        {
          "note": "She takes the coffee, says thank you, and sits in the armchair instead of on the couch next to you."
        },
        "Okay. Give me your foot. I want to test something.",
        "It's a reflex. Plantar reflex. You run something down the sole and the toes should curl down. If they go up, that's a problem.",
        {
          "note": "She clicks a pen and holds it cap end out."
        },
        "I've done it about a thousand times. It doesn't tickle. It's clinical."
      ],
      "replies": [
        {
          "you": "Fine. For science.",
          "them": [
            {
              "note": "She takes your heel in her hand and runs the pen cap up the outside of your sole and across under your toes, slow and firm. Your whole body goes stiff."
            },
            "Toes curl down. Good. That's normal.",
            "...Your face isn't normal though. Bless. Are you holding your breath?"
          ],
          "replies": [
            {
              "you": "(Keep holding it.)",
              "them": [
                {
                  "note": "You keep holding it. She does the other foot the same way, slow and firm, eyes on your face, not your foot."
                },
                "Both normal. You held it together. Very brave. I'd give you a sticker.",
                "Red would suit your toes, by the way. Like your nails. Just saying."
              ],
              "gaydar": 56,
              "spark": 54
            },
            {
              "you": "(Breathe out. It comes out as a giggle.)",
              "them": [
                {
                  "note": "The giggle comes out, then another one, and your foot jerks in her hand."
                },
                "Oh no. Oh, sweetheart. That's not a reflex. That's just you.",
                {
                  "note": "She puts the pen down and uses her fingernails instead, very lightly."
                }
              ],
              "replies": [
                {
                  "you": "Lucy! Okay, stop! Stop!",
                  "them": [
                    {
                      "note": "She stops the moment you say it and pats your shin twice. \"All done, lovely.\""
                    },
                    "Sorry. Occupational hazard. I see a foot, I assess it.",
                    "Your feet are tiny, by the way. Clinically. I've had kids on the ward with bigger feet than you."
                  ],
                  "gaydar": 64,
                  "spark": 34
                },
                {
                  "you": "(Can't speak. Laughing too hard.)",
                  "them": [
                    {
                      "note": "You can't get the word out. After a few seconds she watches your face, sees you can't breathe, and stops on her own."
                    },
                    "Okay. Deep breath. In through the nose. There you go.",
                    "I'm writing that up. Patient presented as extremely ticklish. Plan: do that again."
                  ],
                  "gaydar": 70,
                  "spark": 22
                }
              ]
            }
          ]
        },
        {
          "you": "Lucy, it absolutely tickles. Don't.",
          "them": [
            "It's not tickling, it's assessing. Different thing. Hold still.",
            {
              "note": "She's already got your ankle. She's very strong for someone who woke up ten minutes ago."
            }
          ],
          "replies": [
            {
              "you": "(Kick a bit.)",
              "them": [
                {
                  "note": "You kick a bit. She's held worse. She tucks your foot under her arm, the hold she uses on kids getting a cannula, and does the pen anyway."
                },
                "Toes curl down, normal. Also squealing. Not normal. Noted.",
                {
                  "note": "Then she lets go and gives you your foot back, very professional."
                },
                "Relax. I don't do anything without consent. Unless you're unconscious."
              ],
              "gaydar": 62,
              "spark": 42
            },
            {
              "you": "(Give up. Hold your foot out.)",
              "them": [
                "Thank you. Good patient.",
                {
                  "note": "She runs the pen down slowly. You last half a second, then you're laughing so hard you slide off the couch onto her floor, and she comes down with you, still holding your ankle, laughing too."
                },
                "Say stop. You know you can just say stop."
              ],
              "replies": [
                {
                  "you": "Stop! Stop, stop.",
                  "them": [
                    {
                      "note": "She lets go straight away and lies back on the floor next to you, both of you out of breath."
                    },
                    "That's the most fun I've had on a day off in about a year. That's sad. Don't tell Kayla."
                  ],
                  "gaydar": 66,
                  "spark": 30
                },
                {
                  "you": "(Shake your head, laughing. Not yet.)",
                  "them": [
                    "Not yet? Okay.",
                    {
                      "note": "She keeps going, light and quick, for maybe ten more seconds. Then you finally say it, and she stops straight away."
                    },
                    "Bless. You're a nightmare patient. I love it."
                  ],
                  "gaydar": 74,
                  "spark": 18
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "c6e",
      "route": "lucy",
      "title": "The evidence",
      "contact": "Lucy",
      "irl": true,
      "intro": "Three weeks of Lucy. 7:40am on a Thursday, the cafe across the road from the RBWH. She's just come off a night shift with Kayla and Ruby, and she texted you at six: \"come get breakfast with us?? the girls want to see you\". A cropped knit, your silver hoops, mascara and a bit of blush. The three of them are still in scrubs. Kayla has her phone face down in the middle of the table.",
      "gaydar": 90,
      "gaydarSays": "Four photos in a row on Kayla's phone. Like, clinically, it's a very clear trend.",
      "outfits": [
        {
          "label": "A white tee, your silver hoops and a bit of mascara",
          "thinks": "Mascara at 7:40am. That's him toning it down",
          "gaydar": -5,
          "intro": "Three weeks of Lucy. 7:40am on a Thursday, the cafe across the road from the RBWH. She's just come off a night shift with Kayla and Ruby, and she texted you at six: \"come get breakfast with us?? the girls want to see you\". A plain white tee, your silver hoops and a bit of mascara. The three of them are still in scrubs. Kayla has her phone face down in the middle of the table.",
          "them": [
            {
              "note": "She lets go of the hug quickly. Her eyes stay on your mascara a second longer than on the rest of you."
            }
          ]
        },
        {
          "label": "A cropped knit, your hoops, mascara and blush",
          "thinks": "blush. to breakfast with three nurses off a twenty hour shift. he looked fresher than all of us",
          "them": [
            {
              "note": "She sees the blush and does a tiny nod to herself."
            }
          ]
        },
        {
          "label": "A cropped knit, a mini skirt, your hoops, mascara, blush and gloss",
          "thinks": "mini skirt across from the hospital. kayla nearly fell off her chair. didn't need the photos after that",
          "gaydar": 5,
          "intro": "Three weeks of Lucy. 7:40am on a Thursday, the cafe across the road from the RBWH. She's just come off a night shift with Kayla and Ruby, and she texted you at six: \"come get breakfast with us?? the girls want to see you\". A cropped knit, a mini skirt, your silver hoops, mascara, blush and gloss. The three of them are still in scrubs. Kayla has her phone face down in the middle of the table.",
          "them": [
            {
              "note": "Kayla looks at the skirt, then taps the table twice in front of Ruby."
            },
            {
              "note": "Lucy looks at the mini skirt and pulls her scrubs jumper down over her hands."
            }
          ]
        }
      ],
      "debrief": "Four photos of you lined up on a phone and a pool on the ward, at 8am. That's a lot. Those three were on your side the whole time, even Kayla.",
      "thinks": [
        "Kayla's photos were mean and she was right. Polo, nails, hoops, mascara, and I fancied him a bit less in every one",
        "three weeks and we never got past kissing and the kissing was short. I'm not a prude. I think he was waiting for it to finish",
        "I've been up twenty hours. I'd rather he was my gay friend than my boyfriend pretending, and also I just want to sleep"
      ],
      "them": [
        {
          "note": "Lucy hugs you, quick. She smells like hand sanitiser. Kayla pulls a chair out for you with her foot."
        },
        "Hi! Sorry. We're feral. We've been up since yesterday.",
        {
          "from": "Kayla",
          "text": "Sit. Okay, Luce. Do it."
        },
        "Kayla, I'm not doing it.",
        {
          "from": "Ruby",
          "text": "She's doing it. She practised in the lift."
        },
        {
          "note": "Kayla turns her phone over. It's a collage, three photos side by side and an empty square at the end."
        },
        "Okay. Fine. Um.",
        "Handover. So. Male, thirties, presented three weeks ago at the Story Bridge Hotel in a polo and a silver chain. Asked where my scrunchie was from. Obs were fine. Like, totally fine. Kayla flagged it anyway.",
        "Two weeks ago, Paddington markets. Red nails. The colour's called Bordeaux, he told me without me asking. Bought himself a scrunchie. For the gym, apparently.",
        "Last week, coffee in Teneriffe. Silver hoops and gloss. Kayla was at the next table and she took that one. Sorry. That's a bit creepy. She's creepy.",
        {
          "from": "Kayla",
          "text": "I'm thorough."
        },
        "And this morning...",
        {
          "note": "Ruby holds her phone up and takes your photo across the table. It goes in the last square."
        },
        {
          "from": "Ruby",
          "text": "Today. Hoops again. Mascara at seven in the morning."
        },
        {
          "from": "Kayla",
          "text": "There's a pool on the ward. Ten bucks a square. Today's Ruby's."
        },
        {
          "note": "Lucy looks at you over her cold coffee. She yawns, says sorry, and yawns again."
        },
        "So, like. Plan for the next shift. That's you. Over to you."
      ],
      "replies": [
        {
          "you": "Can I see that?",
          "them": [
            {
              "note": "Kayla slides the phone over. You pinch the photos bigger, one at a time."
            },
            {
              "note": "The polo one first. You're holding your beer with both hands and smiling with your mouth shut."
            },
            {
              "from": "Kayla",
              "text": "See, he's looking properly. Luce, he's doing a full assessment."
            },
            "Kayla, shush. He's allowed to look.",
            {
              "note": "You swipe to the red nails. Then the hoops. Then the one Ruby took a minute ago. Your face in that one is different, and you don't know when that happened."
            }
          ],
          "replies": [
            {
              "you": "(Keep looking at the first one. Your eyes start to sting.)",
              "them": [
                {
                  "note": "You can't stop looking at the polo. Your throat goes tight and then your eyes go, all at once, right there at the table."
                },
                "Oh. Oh, no. Kayla, take it.",
                {
                  "note": "Kayla grabs the phone and turns it face down. Ruby's already pulling napkins out of the holder, a whole stack."
                },
                {
                  "from": "Ruby",
                  "text": "Here. Here, babe. They're the scratchy ones, sorry."
                },
                {
                  "note": "Lucy comes round the table and sits on the chair next to you, knees against yours. She puts her hand flat on your back."
                },
                "Hey. Hey. You're okay. Breathe out for me. Longer than that. Bless you.",
                {
                  "from": "Kayla",
                  "text": "I'm cancelling the pool. It's cancelled. Ruby, it's cancelled."
                },
                {
                  "from": "Ruby",
                  "text": "It's cancelled."
                }
              ],
              "replies": [
                {
                  "you": "(Through it) I just look so sad in the polo one.",
                  "them": [
                    "You do. You look like you're waiting for a blood test.",
                    {
                      "from": "Kayla",
                      "text": "Look at this one though. Ruby's one. Look at your face."
                    },
                    {
                      "note": "She turns the phone back over, just to the last photo. You're laughing in it at something Ruby said. Your hoops are catching the window."
                    },
                    {
                      "from": "Kayla",
                      "text": "That's you. That's just you, babe. That's the good one."
                    },
                    {
                      "note": "Kayla wipes under your eye with the corner of a napkin, careful with your mascara. She does Lucy's like that before photos."
                    },
                    "Okay. So. Clinically, I think you're gay, and I think you're going to be fine.",
                    "And you're coming to Kayla's birthday. It's Japanese, low tables, you'll love it. Not as my date. Just as you."
                  ],
                  "gaydar": 97,
                  "spark": 3,
                  "after": "Kayla, in the group chat that afternoon: \"he's coming to my birthday\" Ruby: \"as what\" Kayla: \"as himself obviously\" Lucy: \"he cried into ruby's napkins and then asked where i get my scrubs embroidered\" Ruby: \"i love him\"",
                  "outcome": "cried"
                },
                {
                  "you": "(Through it) I'm gay. I think everyone knew except me. Sorry, Luce.",
                  "them": [
                    "Don't say sorry. Oh my god. Don't you dare say sorry to me.",
                    {
                      "note": "She pulls your head onto her shoulder. Her scrubs smell like the ward. Ruby rubs your arm across the table, and Kayla gets up and goes to the counter without a word."
                    },
                    {
                      "note": "Kayla comes back with a hot chocolate with marshmallows on the side and puts it in front of you."
                    },
                    {
                      "from": "Kayla",
                      "text": "Drink that. Marshmallows on the side, I didn't know if you're a dunker."
                    },
                    {
                      "from": "Ruby",
                      "text": "I'm doing your brows. Not today. Soon. I've been looking at them for three weeks."
                    },
                    "We weren't really dating anyway, were we? We were having brunch. I was the only one who didn't know it was brunch."
                  ],
                  "gaydar": 100,
                  "spark": 2,
                  "after": "Lucy, to Kayla, from bed at 10am: \"i cant sleep\" Kayla: \"same\" Lucy: \"he said it. at the table\" Kayla: \"i know i was there\" Lucy: \"i think im happy for him? im so tired kayla\" Kayla: \"go to sleep. we're doing his brows saturday\"",
                  "outcome": "broke"
                }
              ],
              "thinks": [
                "he kept going back to the polo one and then he was crying and I was in my work voice before I'd even thought. breathe out for me. I say it forty times a shift",
                "Kayla wiped his mascara and Ruby did the napkins and I had my knees against his and thought okay, I'm never sleeping with him, and I was relieved, and then I felt bad about being relieved"
              ]
            },
            {
              "you": "Okay, but who's winning the pool?",
              "them": [
                {
                  "from": "Kayla",
                  "text": "Nobody yet. It closes when you say it."
                },
                {
                  "from": "Ruby",
                  "text": "And I've got today. So. No pressure. Pot's at a hundred and ten, babe."
                },
                "Ruby. Oh my god.",
                "Sorry. They've been up for fourteen hours. I've been up for twenty. We're all feral."
              ],
              "replies": [
                {
                  "you": "Then pay Ruby. I'm gay.",
                  "them": [
                    {
                      "note": "Ruby screams and then covers her own mouth. A man in a lanyard at the next table turns round."
                    },
                    {
                      "from": "Ruby",
                      "text": "Sorry! Sorry. I won a thing."
                    },
                    "Okay. Okay. Bless.",
                    {
                      "note": "Lucy puts her hand on yours on the table and leaves it there."
                    },
                    "Like, clinically, I knew at the markets. I just didn't want to be the girl who called it.",
                    {
                      "from": "Kayla",
                      "text": "I called it. I'm the girl who called it."
                    },
                    "Ruby's buying your eggs with the pool money. And then you're telling me about guys, because I've had three weeks of you asking about my scrunchies."
                  ],
                  "gaydar": 100,
                  "spark": 4,
                  "outcome": "told"
                },
                {
                  "you": "Then nobody wins. Leave it open.",
                  "them": [
                    {
                      "from": "Kayla",
                      "text": "Ohhh. Okay. Bold."
                    },
                    "Pending further tests, then.",
                    {
                      "note": "She says it in the handover voice and nobody laughs. She picks up her cold coffee and drinks it anyway."
                    },
                    {
                      "from": "Ruby",
                      "text": "I've got tomorrow too. Just so you know."
                    },
                    "I'm on nights again from Sunday. I'll text you.",
                    {
                      "note": "She says it to the table, not to you."
                    }
                  ],
                  "gaydar": 93,
                  "spark": 9,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "Okay, first of all, who took the first one? The lighting is a crime.",
          "them": [
            {
              "from": "Kayla",
              "text": "OH my god."
            },
            "I took it! On the balcony! It was golden hour!",
            "Golden hour's meant to be nice for, like, everyone.",
            {
              "note": "Ruby has her forehead on the table. Her shoulders are shaking."
            },
            {
              "from": "Kayla",
              "text": "He's critiquing the evidence. Luce, write that down. Patient is critiquing the evidence."
            }
          ],
          "replies": [
            {
              "you": "Photo three's my best. Send me that one. Ruby, airdrop it, babe.",
              "them": [
                {
                  "from": "Ruby",
                  "text": "Sent. You're welcome."
                },
                {
                  "from": "Kayla",
                  "text": "That's a confession. Asking for the hoops photo is a confession. I'm sorry, it is."
                },
                "Is it though? Like, is it?",
                {
                  "note": "Lucy looks at you. You're zooming in on your own earlobe."
                },
                "Okay. Yeah, it is."
              ],
              "replies": [
                {
                  "you": "Fine. Pay out the pool. I'm gay, babe.",
                  "them": [
                    {
                      "note": "Kayla slaps the table. Ruby holds her hand out across it, palm up."
                    },
                    {
                      "from": "Ruby",
                      "text": "A hundred and ten. Cash or card, Kayla."
                    },
                    "Babe. You called me babe.",
                    "Okay, I'm, like, totally fine. I knew. I'm just a bit annoyed I shaved my legs for date three.",
                    {
                      "from": "Kayla",
                      "text": "You shaved your legs?"
                    },
                    "Shut up. Ruby, get him a coffee with the money. A proper one, not the cart."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                },
                {
                  "you": "I'm not confirming anything. I'm just saying that's my angle.",
                  "them": [
                    "Noted. Patient's evasive but, like, really well presented.",
                    {
                      "from": "Kayla",
                      "text": "Evasive's not a no."
                    },
                    {
                      "from": "Ruby",
                      "text": "My square's still open."
                    },
                    {
                      "note": "Lucy laughs, then yawns into her hand halfway through it."
                    },
                    "I need to sleep. Text me the photo back. I want it."
                  ],
                  "gaydar": 95,
                  "spark": 7,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Lean over to Ruby.) Delete mine. Take it again. From above.",
              "them": [
                {
                  "note": "Ruby holds the phone up. You tip your chin down and look up into it. She takes six."
                },
                {
                  "from": "Ruby",
                  "text": "Oh, he's done this before."
                },
                {
                  "note": "Lucy watches you go through all six. She's smiling, a tired smile."
                },
                "You're having more fun at this table than on any of our dates. Like, by a lot."
              ],
              "replies": [
                {
                  "you": "Yeah, well. I'm not on a date, am I?",
                  "them": [
                    "Yeah. Bless. I know.",
                    {
                      "note": "She reaches over and turns one of your hoops round. It had gone backwards."
                    },
                    "Kayla, he's not saying it, so don't pay out.",
                    {
                      "from": "Kayla",
                      "text": "I don't need him to say it. I've got four photos."
                    },
                    "Just text me when you go on a date with a guy. I want a full history. Like, everything."
                  ],
                  "gaydar": 98,
                  "spark": 3,
                  "outcome": "dodged"
                },
                {
                  "you": "That's because Kayla's here. Kayla, I love you.",
                  "them": [
                    {
                      "from": "Kayla",
                      "text": "I love you too. You're still gay."
                    },
                    {
                      "from": "Ruby",
                      "text": "She's not wrong."
                    },
                    "She's not wrong though.",
                    {
                      "note": "Lucy pulls her hair out of its scrunchie and puts it up again. It's the burgundy one."
                    },
                    "I'm going to go home and sleep for nine hours. And then I think we're, like, friends? Is that okay?"
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "It's a polo, some nail polish and a pair of earrings. That's not evidence, Luce.",
          "them": [
            "Okay. Noted.",
            "Ruby, can you add 'patient denies'?",
            {
              "from": "Ruby",
              "text": "Added."
            },
            {
              "from": "Kayla",
              "text": "Denies is my column, actually. I had 'he'll deny it' as a side bet."
            },
            {
              "note": "Lucy looks at the photos and not at you. Her eyes are pink round the edges from the shift."
            },
            "I'm not trying to trap you. I just, like, wanted it to be a joke, and it got less funny every week."
          ],
          "replies": [
            {
              "you": "I'm serious. I'm straight. I like you.",
              "them": [
                "I know you like me.",
                "You like me how Kayla likes me. You asked about my scrunchie like she does.",
                {
                  "from": "Kayla",
                  "text": "I do ask about the scrunchies."
                }
              ],
              "replies": [
                {
                  "you": "So what, that's it?",
                  "them": [
                    "I don't know. I'm on nights again from Sunday.",
                    "I'll text you.",
                    {
                      "note": "Kayla turns her phone over and puts it in her pocket. Ruby starts talking about a patient in bed six who keeps trying to leave."
                    },
                    {
                      "from": "Ruby",
                      "text": "...anyway he got as far as the lifts."
                    }
                  ],
                  "gaydar": 92,
                  "spark": 12,
                  "after": "Lucy, to the group chat at 11am: \"he said hes straight\" Kayla: \"he wore mascara to say it\" Ruby: \"pool's still open\" Lucy: \"im not doing the pool anymore\" Kayla: \"ok\" Kayla: \"im still doing the pool\"",
                  "outcome": "dodged"
                },
                {
                  "you": "(Pick up your keys.) I'm going to go. You need to sleep.",
                  "them": [
                    "Yeah. Okay. Yeah.",
                    {
                      "note": "She doesn't get up. You walk out past the counter. Through the window you see Kayla say something, and Lucy put her face in her hands, and Ruby rub her back."
                    },
                    {
                      "note": "Your phone buzzes on the bus. It's Kayla. The collage, no message."
                    }
                  ],
                  "gaydar": 90,
                  "spark": 14,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Kayla, you took photos of me without asking? That's a bit creepy.",
              "them": [
                {
                  "from": "Kayla",
                  "text": "I took one. From the next table. Lucy took two, and Ruby took one just now, in front of you."
                },
                {
                  "from": "Kayla",
                  "text": "But yeah. A bit creepy. It's also four photos of a gay man, so."
                },
                "Kayla.",
                {
                  "from": "Kayla",
                  "text": "What! It is!"
                }
              ],
              "replies": [
                {
                  "you": "Delete them.",
                  "them": [
                    {
                      "note": "Kayla holds the phone up so you can watch her do it. Delete. Gone."
                    },
                    {
                      "from": "Kayla",
                      "text": "Done."
                    },
                    {
                      "from": "Ruby",
                      "text": "I've still got mine."
                    },
                    "Ruby.",
                    {
                      "from": "Ruby",
                      "text": "I'll delete mine. After the pool closes."
                    },
                    "Sorry. They're, like, really tired. Me too."
                  ],
                  "gaydar": 91,
                  "spark": 10,
                  "outcome": "dodged"
                },
                {
                  "you": "(Laugh, even though you don't want to.) Okay. The hoops one is a lot.",
                  "them": [
                    "It's a lot! It's so much!",
                    {
                      "from": "Kayla",
                      "text": "It's my favourite. It's his contact photo in my phone."
                    },
                    "You have him in your phone?",
                    {
                      "from": "Kayla",
                      "text": "Obviously. Under 'Lucy's gay one'."
                    },
                    {
                      "note": "Lucy laughs so hard she has to put her coffee down. Then she wipes her eye with her sleeve."
                    },
                    "Okay. You don't have to say anything. Just, like, maybe I'm not your girlfriend. Maybe I'm your Kayla."
                  ],
                  "gaydar": 95,
                  "spark": 6,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "lucy-feet",
      "route": "lucy",
      "gaydar": 92,
      "gaydarSays": "Red toes at the low table. Fraser drove me home after. Kayla says that's not nothing.",
      "title": "Low tables",
      "contact": "Lucy",
      "irl": true,
      "intro": "Since the cafe after night shift it isn't really dating with Lucy any more, but Kayla said come \"just as you\". Kayla's birthday dinner at a Japanese place in Sunnybank. The private room has tatami mats, low tables and a sign at the step: please remove your shoes. You're in loafers with no socks, and you painted your toes red on Tuesday because Lucy said red would suit you. Fraser's here too. He's a paramedic on the same nights as Lucy, and in the car Kayla told you he's been in love with her for about a year.",
      "thinks": [
        "Fraser's knee was on mine under the table and I left it there. {name}'s red toes were right next to it. Didn't feel bad",
        "said little princess feet out loud. nobody blinked",
        "Fraser drove me home. Nothing happened in the car. Something nearly did. I'm not telling Kayla"
      ],
      "them": [
        {
          "note": "Everyone lines their shoes up at the step. You slip your loafers off. Red toes, bright light."
        },
        {
          "note": "Kayla sees you at the step and does a little clap. \"He came just as him,\" she tells the whole table, and two people she works with clap too.",
          "if": "c6e=told|broke"
        },
        {
          "note": "Ruby shuffles over on the tatami to make room and pats the cushion. \"Breathing okay?\" she says, in Lucy's work voice, and Lucy throws a napkin at her.",
          "if": "c6e=cried"
        },
        {
          "note": "Kayla catches Ruby's eye when you sit down. Ruby mouths \"pool's still open\".",
          "if": "c6e=dodged"
        },
        "Oh! You did them! They look so good.",
        "And your feet are so small! I never noticed. You've got little princess feet.",
        {
          "note": "Fraser sits down cross-legged right next to Lucy. Big guy, grey hoodie, thick work socks. He looks at your feet."
        },
        "\"Red,\" he says, and grins at Lucy. \"Bold, man.\"",
        {
          "note": "There's nowhere to put your feet. Under the low table they end up next to his knee."
        },
        "Fraser's a paramedic. Don't let him tell you his worst callout. He'll do it while the gyoza's on the table.",
        "\"Wasn't going to,\" Fraser says, leaning back on his hands, closer to her. \"I was going to tell him about the nurse who gave me a Mars bar at 3am and saved my life.\" Lucy goes pink."
      ],
      "replies": [
        {
          "you": "(Kneel and tuck your feet under you.)",
          "them": [
            {
              "note": "You sit on your feet. Ten minutes in you can't feel them."
            },
            {
              "note": "Fraser pours Lucy's sake, then everyone else's, then yours. He says \"say when\" and you say \"when\" and your voice goes up on it. \"Easy, lightweight,\" he says."
            },
            "Kayla, across the table: \"{name} sits like my ballet teacher.\"",
            "He does! Sorry. He does.",
            {
              "note": "She's laughing. Then she turns back to Fraser for the Mars bar story."
            }
          ]
        },
        {
          "you": "It's called Big Apple Red. Lucy picked it.",
          "gaydar": 96,
          "them": [
            "Kayla: \"LUCY picked it?\"",
            "I said red would suit him. And it does.",
            "\"Did you paint them for him?\" Fraser asks her.",
            "No! He does his own. He's better at it than me.",
            {
              "note": "Fraser laughs, says \"course he is\" and takes a gyoza off her plate. She slaps his hand. Then she lets him have it."
            }
          ]
        },
        {
          "you": "Bold's kind of my thing.",
          "them": [
            "\"Yeah, I can see that,\" Fraser says, looking right at your toes, and laughs.",
            {
              "note": "When the karaage comes he gives Lucy the biggest piece. Then he puts a little crumbly one on your plate. \"Small one for you, buddy.\""
            },
            "Ruby, quietly, next to you: \"You know he's been after her for a year, yeah?\"",
            "\"Kayla mentioned,\" you say."
          ]
        },
        {
          "you": "(To Fraser) Thick work socks at a birthday dinner. Also bold.",
          "them": [
            "\"Ha. Fair,\" Fraser says, and wiggles one sock at you. Lucy laughs harder at that than at anything you've said all night.",
            "Fraser, your feet have done a twelve-hour shift. His smell like hand cream.",
            {
              "note": "She shifts her cushion a bit closer to the socks."
            },
            "\"Hand cream,\" Fraser says. \"Course they do.\""
          ]
        }
      ],
      "after": "Kayla, in the group chat after: \"{name} sat through dinner with red toes and fraser did not stop grinning\" Ruby: \"fraser drove lucy home\" Kayla: \"FRASER DROVE LUCY HOME?\" Lucy: \"he lives near me. its nothing\" Ruby: \"its not nothing\"",
      "debrief": "Your red toes were on show all dinner, right next to a guy that sure of himself. You stayed at the table."
    },
    {
      "id": "lucy-tickle",
      "route": "lucy",
      "gaydar": 94,
      "irl": true,
      "title": "After night shift",
      "contact": "Lucy",
      "gaydarSays": "Fraser said he was checking his reflexes. I'm a nurse. That's not how you check reflexes. Everyone at the table knew that.",
      "intro": "A week after Kayla's birthday. Lucy's off a run of nights, and her share house in Annerley does a big breakfast when someone finishes. Shoes off at the door because the floorboards are new. You came in sandals. Your toes are still Big Apple Red. Fraser's already here, because he finished the same shift. He's on the couch in his uniform pants and a hoodie, barefoot.",
      "thinks": [
        "fraser's been after me for a year and he's loud and he smells like the ambulance and i would. i would. {name} would too, bless him",
        "We kissed maybe four times in three weeks. Short ones. I opened my eyes once and his were already open",
        "I'd do his toes any day. Not kissing him again though"
      ],
      "them": [
        {
          "note": "Lucy hugs you at the door, still in scrubs, half asleep. She looks down at your toes."
        },
        "You kept the red!",
        "On your little feet. Fraser, look how tiny they are next to yours.",
        "\"Big Apple Red,\" Fraser says from the couch. \"See, I remembered.\"",
        "Fraser, don't start. He's been up nineteen hours. He goes silly.",
        {
          "note": "Breakfast is on the coffee table. The only spot left is the end of the couch next to Fraser. You sit there with your plate. Lucy sits on the floor between his feet and leans back against his legs. She looks like she's done it before."
        },
        {
          "note": "You put your feet up on the ottoman. Fraser looks at them. Then he puts his coffee down."
        },
        "\"Hey, Luce. Want to see a reflex? Plantar reflex.\"",
        "I've seen a plantar reflex, Fraser. I'm a nurse.",
        "\"Not on him you haven't.\"",
        {
          "note": "He's already got your foot. He holds it by the heel and runs one finger slowly up the outside of your sole, heel to toes, the way they do it at the hospital."
        },
        "\"Toes should curl down,\" he says. \"Normal response. Let's see.\"",
        {
          "note": "Then the finger goes back down the middle, faster, and it's not the hospital way anymore."
        }
      ],
      "replies": [
        {
          "you": "(Keep your face still. You're a grown man eating eggs.)",
          "them": [
            {
              "note": "You hold your fork in the air and look at your eggs. Your toes curl so hard they go white."
            },
            "\"Toes curling. Normal response,\" Fraser says. \"Better check again.\"",
            "That's not a reflex anymore. That's just tickling.",
            "\"Noted.\"",
            {
              "note": "Two of Lucy's housemates come out of the kitchen with toast. One of them says \"oh, is Fraser doing the feet thing?\""
            },
            {
              "note": "He gets the gap under your toes with his thumbnail. Your fork shakes. Some egg falls off it."
            }
          ],
          "replies": [
            {
              "you": "(Don't break. Eat your eggs.)",
              "them": [
                {
                  "note": "You put the egg in your mouth and chew. He tries the arch, then the heel, then your little toe. You keep chewing."
                },
                {
                  "note": "After a long time he puts your foot down and picks up his coffee."
                },
                "\"Nothing. Abnormal response. Luce, he can't feel his feet.\"",
                "He can feel them fine. He's just better at hiding it than you.",
                {
                  "note": "She looks up at you from the floor, smiling."
                }
              ],
              "replies": [
                {
                  "you": "(Put your feet down on the floor next to Lucy.) Thanks for breakfast, Luce.",
                  "outcome": "held",
                  "spark": 24,
                  "them": [
                    {
                      "note": "You put your feet on the floorboards right next to her. She leans off Fraser's legs and onto yours."
                    },
                    "You're welcome. Sorry about him. He's not usually like this. No, he is.",
                    "\"I'm going to bed,\" Fraser says, a bit flat, and takes his coffee with him.",
                    {
                      "note": "Lucy stays leaning on your legs while the housemates clear up. She falls asleep there for twenty minutes. You don't move."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"fraser tried to tickle him and he didnt even flinch\" Kayla: \"wow\" Lucy: \"he just ate his eggs\" Kayla: \"and you\" Lucy: \"fell asleep on him\" Kayla: \"LUCY\" Lucy: \"on his legs. it was nice\""
                },
                {
                  "you": "(Smile.) You can try the other one if you want.",
                  "outcome": "held",
                  "spark": 16,
                  "them": [
                    "\"Oh, brave,\" Fraser says, and grabs it.",
                    {
                      "note": "No reflex stuff this time. Both thumbs, straight under the toes. One small high giggle gets out. You put your hand over your mouth."
                    },
                    "\"There it is. Normal response, finally.\"",
                    {
                      "note": "He lets go. The housemates clap. Lucy laughs up at Fraser and he messes her hair up, and she lets him."
                    },
                    "Okay. Both of you. Eat.",
                    {
                      "note": "She stays leaning on Fraser's legs."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"he lasted ages and then giggled once\" Kayla: \"cute\" Lucy: \"fraser messed my hair up\" Kayla: \"cute??\" Lucy: \"i dont know kayla im so tired\""
                }
              ]
            },
            {
              "you": "(It's too much. You giggle.)",
              "them": [
                {
                  "note": "You crack. Egg everywhere. A high giggle comes out, then another, and you're doubled over with your plate tipping."
                },
                "\"Abnormal response!\" Fraser says. \"Luce, look! Very abnormal!\"",
                {
                  "note": "Lucy grabs your plate before it goes. She's laughing so hard she's crying, the overtired kind."
                },
                "\"Someone film this, he sounds like a squeaky toy.\"",
                {
                  "note": "One of the housemates films it."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I'm ticklish! You got me!",
                  "outcome": "cracked",
                  "spark": 10,
                  "them": [
                    {
                      "note": "He lets go straight away and sits back with his coffee."
                    },
                    "\"Fourteen years on the road. Nobody beats the plantar reflex.\"",
                    "That's not what it's for, Fraser.",
                    {
                      "note": "You sit up, red, picking egg off your shorts. You try to say something and it comes out as another giggle. Fraser points at you without looking."
                    },
                    {
                      "note": "Lucy goes to make more coffee. Fraser goes to help. You can hear them laughing in the kitchen."
                    }
                  ],
                  "after": "Lucy's housemate, to the house chat: \"[video] the squeaky toy\" Lucy: \"please delete\" Housemate: \"fraser asked for it\" Lucy: \"why does fraser want it\" Housemate: \"to show the station\" Lucy: \"oh no\""
                },
                {
                  "you": "(Red, giggling) Fraser! Stop! Stop it!",
                  "outcome": "cracked",
                  "spark": 8,
                  "them": [
                    {
                      "note": "His hands are off your foot before you've finished the word."
                    },
                    "\"Okay, okay. Sorry, man.\"",
                    {
                      "note": "You tuck your feet under you and sit on them. Your face is burning. There's egg on the couch."
                    },
                    "Are you okay? You went really high.",
                    {
                      "note": "It's the voice she uses on patients. Then Fraser says \"he hit a note I didn't know men could hit\" and she snorts and can't stop, and ends up with her face in his knee."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"fraser tickled him and he squealed\" Kayla: \"lol\" Lucy: \"and then i laughed into fraser's knee for like five minutes\" Kayla: \"lucy\" Lucy: \"i know\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before the second stroke.)",
          "them": [
            {
              "note": "You're gone straight away, high squeaky giggles. You put your plate down before you drop it and hug a cushion."
            },
            "\"Oh, that's VERY abnormal,\" Fraser says. \"Luce, look at him.\"",
            "I'm looking.",
            {
              "note": "He tucks your foot under his arm like he's holding a leg for a splint and goes at it with his whole hand. You're shrieking into the cushion."
            },
            "\"Red toes and the most ticklish feet in Brisbane. Luce, write him up.\"",
            {
              "note": "The housemates have come out to watch. One's eating toast and not looking away."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Fraser! Please, please stop!",
              "them": [
                {
                  "note": "He stops and lets go straight away. You fold over the cushion, panting."
                },
                "\"He said please,\" Fraser says. \"Very polite patient.\"",
                "He is very polite.",
                {
                  "note": "Fraser holds your foot up again, not tickling, just holding it, and looks at you over it."
                },
                "\"One more? Ten seconds. For research.\""
              ],
              "replies": [
                {
                  "you": "(Pull your foot back.) No! No more research.",
                  "outcome": "begged",
                  "spark": 6,
                  "them": [
                    "\"Fair enough, sweetheart. Patient declines.\" He lets go.",
                    {
                      "note": "You eat the rest of breakfast with your feet pulled right up under you, as far from Fraser as the couch goes."
                    },
                    {
                      "note": "Lucy stays on the floor against his legs. At some point he starts playing with her hair while he talks to her housemates, and she closes her eyes."
                    },
                    "You're fine. You sounded exactly like my little sister when we were kids. Same scream.",
                    {
                      "note": "She says it with her eyes shut."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"he begged fraser to stop\" Kayla: \"aw\" Lucy: \"in this tiny voice\" Lucy: \"fraser played with my hair for an hour after\" Kayla: \"and you let him\" Lucy: \"i was so tired\" Kayla: \"lucy\""
                },
                {
                  "you": "(Still giggling) ...Okay. Ten seconds.",
                  "outcome": "kept",
                  "spark": 3,
                  "gaydar": 96,
                  "them": [
                    {
                      "note": "The housemates cheer. Fraser counts down from ten like he's doing compressions. You're squealing from ten."
                    },
                    {
                      "note": "At one he keeps going for another five. Then he lets go."
                    },
                    "\"Results: extremely ticklish. Asked for more.\"",
                    "You asked for more. {name}. You actually asked.",
                    {
                      "note": "She gets up to take the plates. Fraser gets up to help. In the kitchen he says something and she laughs and bumps him with her hip."
                    },
                    {
                      "note": "You lie on the couch, still giggling, toes in the air."
                    }
                  ],
                  "after": "Lucy's housemate, to the house chat: \"[video] he asked for more\" Lucy: \"im going to sleep for 14 hours\" Housemate: \"fraser's still here\" Lucy: \"he's doing the dishes\" Housemate: \"its been an hour\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Just laugh.)",
              "them": [
                {
                  "note": "You stop pulling and lie back across the couch laughing at the ceiling, cushion on your chest, toes wriggling in Fraser's hand."
                },
                "\"He's not even trying to get away,\" a housemate says, mouth full of toast.",
                "\"He loves it,\" Fraser says. \"Look at him, Luce.\"",
                {
                  "note": "It goes on and on. Arch, heel, then each toe one at a time, pressing the nail. \"Cap refill's fine.\" You're crying laughing."
                },
                {
                  "note": "Lucy's stopped laughing. She's sitting up on the floor, watching you."
                },
                "{name}? You can say stop. You know that, right?"
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 2,
                  "gaydar": 97,
                  "them": [
                    {
                      "note": "Fraser lets go on the first stop and holds both hands up."
                    },
                    "\"Two and a half minutes,\" Fraser says, checking his watch.",
                    {
                      "note": "He puts your foot back down on the ottoman, carefully. \"Great patient.\""
                    },
                    {
                      "note": "You lie there, wrecked, while Fraser stands up and stretches. \"Luce, want a lift to Kayla's later?\""
                    },
                    "Yeah. Yeah, okay.",
                    {
                      "note": "She doesn't ask if you want to come."
                    }
                  ],
                  "after": "Lucy, to Kayla: \"fraser tickled him for two and a half minutes\" \"and he was loving it\" \"like i was watching and i was just like. yeah no\" Kayla: \"and fraser\" Lucy: \"fraser's driving me to yours\""
                },
                {
                  "you": "(Can't speak. Too busy laughing.)",
                  "outcome": "kept",
                  "spark": 0,
                  "gaydar": 98,
                  "them": [
                    {
                      "note": "You can't get a word out. Fraser keeps going."
                    },
                    "Fraser. Stop. He can't breathe.",
                    {
                      "note": "It's her work voice. He stops straight away and lets go."
                    },
                    "\"He was laughing, Luce. I thought he was fine.\"",
                    "Laughing isn't fine. It's a reflex. Look at his colour.",
                    {
                      "note": "You've slid half off the couch onto the new floorboards, still giggling. A housemate is filming from the kitchen door."
                    },
                    {
                      "note": "Lucy looks at you for a while. Then up at Fraser."
                    },
                    "I'm going to bed. Fraser, can you see him out? Thanks for coming, {name}.",
                    {
                      "note": "Fraser walks you to the door. \"See you round, sweetheart,\" he says, and squeezes your shoulder. Then he goes back inside."
                    }
                  ],
                  "after": "Lucy, to Kayla, at 4pm when she wakes up: \"fraser's still here\" Kayla: \"WHAT\" Lucy: \"fell asleep on the couch\" Lucy: \"im not even upset about {name}. i watched him giggling on my floor and i was just done\" Kayla: \"and fraser\" Lucy: \"he made me toast\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "You laughed till you nearly slid off the couch. Your feet are ticklish, that's all. Lucy was already halfway to Fraser."
    },
    {
      "id": "lucy-end",
      "route": "lucy",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Hamish fixed my car door with a coat hanger in the rain. I didn't even ask him to.",
      "title": "Lucy and Hamish",
      "contact": "Lucy",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans and a black tee",
          "thinks": "Plain on purpose. Doesn't work now, everyone knows",
          "gaydar": -2,
          "intro": "Two months later. Kayla's engagement drinks at Cloudland. Jeans and a black tee, and a plan to leave early. Then Lucy walks in with a guy in brown boots and a blue checked shirt tucked into his jeans. Ag consultant, from Toowoomba. Hamish.",
          "them": [
            {
              "note": "She doesn't look at your outfit at all. She's already waving at Kayla."
            }
          ]
        },
        {
          "label": "Your going-out look: a mesh top, lashes and a little bag",
          "thinks": "mesh top and lashes. he's going somewhere full of guys after this and good, go",
          "intro": "Two months later. Kayla's engagement drinks at Cloudland. A black mesh top, lashes, gloss, your little shoulder bag. Then Lucy walks in with a guy in brown boots and a blue checked shirt tucked into his jeans. Ag consultant, from Toowoomba. Hamish.",
          "them": [
            {
              "note": "She sees the lashes and grins, the way she'd grin at Kayla's new haircut."
            }
          ]
        }
      ],
      "thinks": [
        "Hamish has three pairs of the same boot. Hamish stays over. Hamish has never once asked where my scrunchie's from",
        "So glad I stopped. We'd have been polite about it for years, polite sex once a fortnight and him gay the whole time",
        "Kayla wants him set up with half the hospital. There's a reg in ED who'd be nice to him. I'd help"
      ],
      "them": [
        {
          "note": "Lucy comes straight over and hugs you, quick, and kisses you on the cheek. It's how she says hi to Kayla."
        },
        "{name}! You look so good. Kayla said you might come. This is Hamish. Hamish, {name}. We went on a few dates. Before you.",
        "\"Hey,\" Hamish says, and shakes your hand hard. \"Lucy says you've got good taste. She said you'd tell me if my shirt's alright.\"",
        "He grew up on a cattle station. He's got three pairs of boots and they're all the same boot.",
        "My car door wouldn't shut on our second date and he fixed it with a coat hanger. In the rain. I didn't even ask.",
        {
          "if": "lucy-tickle=held",
          "text": "Fraser still talks about you, by the way. The one with no plantar reflex. He thinks it's a medical thing."
        },
        {
          "if": "lucy-tickle=cracked|begged|kept",
          "text": "\"Oh, hey,\" Hamish says. \"Fraser showed me a video of you. At breakfast. The feet one.\" He grins. \"You've got some laugh on you.\""
        },
        {
          "if": "lucy-tickle=cracked|begged|kept",
          "note": "Lucy goes pink and says \"Hamish\" in her work voice. He keeps grinning."
        },
        {
          "text": "Kayla's picked a doctor for you, by the way. Cardio reg. Lovely hands. I'm just passing it on, clinically.",
          "if": "c6e=told|broke"
        },
        {
          "text": "And you're okay? Like actually? Last time I saw you properly you were crying into the cafe napkins. I think about it. Bless.",
          "if": "c6e=cried"
        },
        {
          "text": "Kayla says the pool's still open, by the way. I told her that's not appropriate. She put in another ten.",
          "if": "c6e=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hamish. The shirt's fine. The tuck is very... rural. Lucy, he's adorable.",
          "them": [
            "The tuck is very rural 😂 I'm saying that to him every day now.",
            "Thanks. I really am happy.",
            "You look so much more relaxed than at the Story Bridge. You were so stiff in that polo."
          ],
          "replies": [
            {
              "you": "I feel more like me. Mostly. Still working stuff out.",
              "them": [
                "Kayla wants to set you up with her hairdresser, by the way.",
                "I said I'd ask. So I'm asking. He's really nice. He did her fringe."
              ]
            },
            {
              "you": "That polo was a costume. Never again.",
              "them": [
                "Promise me.",
                "Hamish, quietly, to Lucy: \"What's wrong with polos?\" She rubs his arm."
              ]
            }
          ]
        },
        {
          "you": "(Go up to Hamish.) Hamish? Hi. Sorry. Can I say something? About Lucy?",
          "them": [
            "\"Course, man,\" Hamish says, and puts a big hand on your shoulder to move you out of a waiter's way.",
            {
              "note": "He leaves it there. You can feel how warm it is through your top. Your mind goes blank."
            },
            "\"What's up?\""
          ],
          "replies": [
            {
              "you": "I still like her. I want her back. I think. Sorry. You seem really nice.",
              "them": [
                "\"You?\" Hamish laughs, a big loud one. \"Fighting me for her? Buddy. No.\"",
                "\"Tell you what. I'll get you a drink. Something pink, yeah?\"",
                {
                  "note": "He goes to the bar, still laughing."
                },
                {
                  "note": "Lucy's come over. She heard."
                },
                "Did you just tell Hamish you want me back?",
                "Oh my god. In that little voice.",
                "{name}. I kiss you on the cheek like I kiss Kayla. That's where we're at. It's not happening.",
                {
                  "note": "Hamish comes back with something pink with a little straw in it and gives you a thumbs up over her shoulder."
                }
              ],
              "after": "Kayla, in the group chat: \"update {name} went up to hamish to win lucy back\" Ruby: \"NO\" Kayla: \"hamish bought him something pink\" Lucy: \"he was so sweet about it\" Kayla: \"lucy thats not the point\" Lucy: \"hamish says he's a good guy\""
            },
            {
              "you": "...Never mind. Your shirt's really nice. Is that brushed cotton?",
              "gaydar": 100,
              "them": [
                "\"No idea,\" he says. \"Lucy bought it. You going to keep feeling it, or are we done?\"",
                {
                  "note": "You're still holding his sleeve. You let go and walk back to Kayla's table very fast, red to the ears."
                },
                {
                  "note": "Kayla gets her phone out without a word and shows you a photo of her hairdresser."
                }
              ],
              "after": "Kayla, in the group chat: \"update {name} went up to hamish to win lucy back and ended up feeling his sleeve\" Ruby: \"NO\" Lucy: \"he was so red\" Kayla: \"im sending him my hairdresser's number\" Lucy: \"pls do\""
            }
          ]
        },
        {
          "you": "He's very... tall. Isn't he.",
          "them": [
            "Six four. I have to stand on the step to kiss him.",
            "I wore flats to the Story Bridge so I wouldn't be taller than you. Did you know that?",
            {
              "note": "She laughs about it."
            },
            "\"What are we talking about?\" Hamish says.",
            "Nothing. {name}'s just saying you're tall."
          ]
        },
        {
          "you": "Hi Hamish. Nice to meet you. Excuse me, I need to find Kayla.",
          "them": [
            "\"Nice to meet you, man!\"",
            "Lucy, quietly, as you go: \"Hey. Thanks for being nice about this.\"",
            {
              "note": "You find Kayla. She's already got her phone out."
            }
          ]
        }
      ],
      "after": "Kayla, in the group chat: \"{name} came!!\" Ruby: \"and hamish?\" Kayla: \"hamish loved him\" Lucy: \"he said {name} was a good guy\"",
      "debrief": "She's with a guy who fixes car doors with a coat hanger. You were never going to be that guy, and you didn't want to be."
    },
    {
      "id": "jade-1",
      "route": "jade",
      "gaydar": 15,
      "gaydarSays": "He ordered a dirty martini and asked the bartender to make it pretty. Fun guy?",
      "title": "Howard Smith Wharves",
      "contact": "Jade",
      "outfits": [
        {
          "label": "Boy clothes: board shorts, a tee and flip-flops",
          "thinks": "board shorts and flip flops. normal guy. then the martini",
          "masc": true,
          "spark": 10,
          "gaydar": -5,
          "intro": "Jade from Hinge, with a very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. You wore board shorts, a tee and your old flip-flops. She wore a white sundress, looked down at your feet once and said \"flip-flops to a date, very Queensland\"."
        },
        {
          "label": "Linen shorts, a nice shirt and your good slides",
          "thinks": "buffed feet. i look at feet first. never seen a guy with buffed feet ever",
          "intro": "Jade from Hinge, with a very funny bio. First date: drinks at Howard Smith Wharves on a Friday afternoon. Linen shorts, a nice short-sleeve shirt and your good slides. You had a pedicure on Tuesday, nothing on them, just buffed. Jade looked down at your feet once and didn't say anything.",
          "them": [
            "also your slides were nicer than mine lol. lowkey i noticed your feet before your face which is a first"
          ]
        }
      ],
      "thinks": [
        "he asked the bartender to make his martini pretty. pretty. i keep saying it in my head",
        "he didnt try anything at the end. like at all. just a hug and omg this was so fun. which is fine? lowkey relieved i didnt have to decide"
      ],
      "them": [
        "hey!! that was so fun",
        "ok ive never seen a guy order a dirty martini extra dirty, three olives, and can you make it pretty",
        "the bartender LOVED you lol",
        "second date? somewhere outside, its too nice to be inside"
      ],
      "replies": [
        {
          "you": "Ha, I like a drink that looks good. Yes! What were you thinking?",
          "them": [
            "picnic? new farm park? ill bring cheese and you bring drinks. make them pretty",
            "saturday afternoon?"
          ],
          "replies": [
            {
              "you": "Picnic! I'll bring my good blanket. It's got little lemons on it.",
              "gaydar": 20,
              "them": [
                "little lemons 😭",
                "ok perfect. saturday 3. its going to be hot so wear something cool"
              ]
            },
            {
              "you": "Saturday works. Spritz okay?",
              "them": [
                "spritz is perfect 😊"
              ]
            }
          ]
        },
        {
          "you": "The bartender was cute. I mean nice. He was nice. Yes to a second date.",
          "gaydar": 20,
          "them": [
            "lol he was cute",
            "ok picnic. new farm park. saturday",
            "its going to be 33 so dress for it"
          ]
        },
        {
          "you": "Your bio said must love a picnic. I read it.",
          "them": [
            "you read the bio??",
            "nobody reads the bio",
            "ok picnic then. new farm park saturday. bring the pretty drinks"
          ]
        }
      ],
      "after": "Jade, to her friend Mel: \"date was fun!! he got the bartender to make his martini pretty\" Mel: \"pretty??\" Jade: \"pretty\" Mel: \"ok\""
    },
    {
      "route": "jade",
      "path": "masc",
      "id": "jade-m2",
      "title": "Picnic, toes bare",
      "contact": "Jade",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "Bare toes. Normal toes. Boy toes. Weirdly into it.",
      "intro": "Second date. A picnic at Kangaroo Point cliffs. Shorts, a tee and your old slides, toenails bare and a bit rough. Jade brought a cheese board and a little speaker. She kicks her sandals off straight away.",
      "them": [
        "Okay, I got brie, I got quince, I got the little crackers. Sit sit sit.",
        {
          "note": "She glances down at your feet. Bare, plain, a bit of a callus on one heel."
        },
        "Your feet are so normal. Sorry. I notice feet. It's a thing. Most guys' feet are horrible. Yours are just... feet."
      ],
      "replies": [
        {
          "you": "Thanks? I think?",
          "masc": true,
          "them": [
            "It's a compliment. I swear.",
            {
              "note": "She leans back on her elbows. Her own toes are painted coral."
            },
            "Do you like mine? Be honest."
          ],
          "replies": [
            {
              "you": "I like the rest of you more.",
              "masc": true,
              "spark": 88,
              "outcome": "kept",
              "them": [
                "Oh. Okay. Smooth.",
                {
                  "note": "She goes red and puts a whole cracker in her mouth so she doesn't have to talk."
                }
              ],
              "after": "Jade, to Mel: \"he said he likes the rest of me more than my feet\" Mel: \"is that good\" Jade: \"its SO good mel\""
            },
            {
              "you": "Honestly the coral is perfect on you. What brand is it?",
              "spark": 58,
              "outcome": "slipped",
              "them": [
                "What brand?",
                "\"I'm just asking. For... a friend.\"",
                "Ha. Right. A friend."
              ],
              "after": "Jade, to Mel: \"he asked what brand my polish was\" Mel: \"for who\" Jade: \"'a friend'\" Mel: \"oh jade\""
            }
          ]
        },
        {
          "you": "I got a pedicure on Tuesday. Just buffed.",
          "them": [
            "You got a pedicure?",
            "On purpose?",
            "Okay that's actually so cute."
          ],
          "replies": [
            {
              "you": "My friend Dani made me. Never again.",
              "masc": true,
              "spark": 72,
              "outcome": "kept",
              "them": [
                "Ha. Okay. Dani.",
                {
                  "note": "She nudges your foot with hers and leaves it there."
                }
              ],
              "after": "Jade, to Mel: \"his friend dani made him get a pedicure\" Mel: \"whos dani\" Jade: \"i didnt ask. vibes were good tho\""
            },
            {
              "you": "I go every three weeks. You should come.",
              "spark": 50,
              "outcome": "slipped",
              "them": [
                "Every three weeks?",
                "That's more than me.",
                {
                  "note": "She looks at her own feet, then at yours."
                },
                "Yeah, maybe. Sure."
              ],
              "after": "Jade, to Mel: \"he gets pedicures more than me\" Mel: \"so he's gay\" Jade: \"he's on a date with me mel\""
            }
          ]
        }
      ],
      "debrief": "Jade notices feet. Whatever yours looked like, she was always going to say something."
    },
    {
      "route": "jade",
      "path": "masc",
      "id": "jade-m3",
      "title": "Mel's birthday, slides on",
      "contact": "Jade",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He sat in the hot tub like a normal man. Didn't let Sean near his feet. Mel's impressed.",
      "intro": "Two months in. Mel's birthday, in Mel's hot tub. Bare toes, board shorts. Mel's brother Sean is here. He's had a thing for Jade for years.",
      "them": [
        {
          "note": "Sean looks at your feet in the water and loses interest.",
          "if": "jade-m2=kept"
        },
        {
          "note": "Sean looks at your feet in the water. Fresh pedicure, buffed and shiny. He grins.",
          "if": "jade-m2=slipped"
        },
        "\"So is he your boyfriend or what?\" Sean says. \"Mel wants to know. I want to know.\"",
        {
          "note": "Jade looks at you. She's waiting too."
        }
      ],
      "replies": [
        {
          "you": "Yeah, Sean. I'm her boyfriend.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "\"Fair enough,\" Sean says, and gets out of the hot tub.",
            {
              "note": "Jade slides along the edge till she's right against you."
            },
            "you said it to SEAN. thats basically telling mel. which is telling everyone"
          ],
          "after": "You're Jade's boyfriend. Mel tells everyone everything, so within an hour her whole group chat knows. Sean shakes your hand at Mel's next birthday and doesn't look at your feet once."
        },
        {
          "you": "Ask her. She's the one who decides.",
          "spark": 60,
          "outcome": "drift",
          "them": [
            "\"Jade?\" Sean says.",
            "i dont know. i guess we never said",
            {
              "note": "She looks at you for a long second. You don't say anything."
            }
          ],
          "after": "Jade decides, eventually, by not deciding. A month later she's seeing a plumber called Riley. Mel tells you before Jade does."
        },
        {
          "you": "Why, Sean? Jealous? Want to get in line?",
          "them": [
            {
              "note": "You flutter your lashes at him. Sean bursts out laughing. So does Mel."
            },
            "\"Man,\" Sean says. \"Are you hitting on me?\"",
            "{name}. oh my god.",
            "ok thats it. youre officially the gay friend. sean, take him on a date"
          ],
          "spark": 25,
          "outcome": "drift",
          "after": "Sean doesn't take you on a date. But Jade does set you up with Mel's cousin, who \"does his toes too\". You match. Jade takes full credit."
        }
      ],
      "debrief": "Sean put you on the spot in a hot tub. You didn't owe him an answer."
    },
    {
      "id": "jade-2",
      "route": "jade",
      "gaydar": 45,
      "gaydarSays": "Clear polish on his toes. For the health of the nail, apparently. Sure.",
      "title": "Second picnic",
      "contact": "Jade",
      "irl": true,
      "outfits": [
        {
          "label": "Shorts, a tee and slides, just a clear coat on your toes",
          "thinks": "clear coat on his toes. small thing. gay thing",
          "gaydar": -5,
          "intro": "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a tee, slides, and a clear coat on your toenails that you told yourself nobody would notice. Jade brought a cheese board and a little speaker. She kicks her sandals off straight away. You keep yours on.",
          "them": [
            {
              "note": "She looks at your shiny toes, then out at the river, for a while."
            }
          ]
        },
        {
          "label": "Shorts, a nice shirt and slides, toes with a clear gloss coat",
          "thinks": "his toes were glossier than mine. mine were a week old and looked so tired",
          "intro": "Second date. A smaller picnic, just the two of you, at Kangaroo Point cliffs. Shorts, a nice shirt, slides, and a clear gloss coat on your toenails that you did last night, very carefully, with your tongue out. Jade brought a cheese board. She kicks her sandals off straight away.",
          "them": [
            {
              "note": "She sees the gloss on your toes and tucks her own feet back under her skirt."
            }
          ]
        }
      ],
      "thinks": [
        "i keep looking at his feet how i look at mels after shes had them done. idk what that means. i do",
        "we lay on the blanket for three hours and he didnt even try and hold my hand. i shaved my legs for a picnic. in this heat",
        "the brie was good"
      ],
      "them": [
        "Okay, I got brie, I got quince, I got the little crackers. Sit sit sit.",
        {
          "note": "She glances down at your slides."
        },
        "Wait. Are your toenails shiny? Are they... are they painted?"
      ],
      "replies": [
        {
          "you": "It's just a clear coat! For the health of the nail. My nail lady says it strengthens them.",
          "them": [
            "Your nail lady.",
            "You have a nail lady?",
            {
              "note": "She looks at your toes, then at hers, chipped coral from two weeks ago, then back at yours."
            },
            "Okay. Mine look terrible next to yours. Don't look at them."
          ],
          "replies": [
            {
              "you": "Yours are cute! But you need a fresh coat. I'll book you in with my lady. She's in the Valley.",
              "gaydar": 50,
              "them": [
                "You're booking me a pedicure. On our second date.",
                "That's so nice? And so weird?",
                {
                  "note": "She laughs. Then she tucks her feet under her dress."
                }
              ],
              "after": "Jade, to Mel: \"he has a nail lady\" Mel: \"what\" Jade: \"for his TOES. he tried to book me in\" Mel: \"jade\" Jade: \"dont\""
            },
            {
              "you": "I won't look. Promise. Brie?",
              "them": [
                "\"Brie,\" she says, and passes it over. \"You're a weird guy. I like it. I think.\""
              ]
            }
          ]
        },
        {
          "you": "Yeah, they're painted. Clear. I like how it looks. I might do a colour next time. Maybe coral.",
          "gaydar": 55,
          "them": [
            "Coral. Like mine.",
            {
              "note": "She wiggles her toes. Then stops."
            },
            "Yeah, you'd suit coral. You've got nice feet. That's a weird thing to say to a guy."
          ],
          "replies": [
            {
              "you": "Thanks! I moisturise them every night. Shea butter, then socks.",
              "gaydar": 55,
              "them": [
                "Socks? To bed?",
                "I don't do anything to mine. I just let them suffer.",
                {
                  "note": "She hands you a cracker. She's smiling, but she's quieter for the rest of the afternoon."
                }
              ],
              "after": "Jade, to Mel: \"he puts shea butter on his feet and wears socks to bed\" Mel: \"what\" Jade: \"and he wants to do coral next\" Mel: \"like yours?\" Jade: \"like mine\""
            },
            {
              "you": "Nobody's ever said that to me. I'll take it.",
              "them": [
                "Take it.",
                "It's a weird compliment. But take it."
              ]
            }
          ]
        },
        {
          "you": "They're not painted. That's just how my nails are.",
          "them": [
            "{name}. They're shinier than my phone screen.",
            {
              "note": "She taps one of your toes with a cracker."
            },
            "I don't care. I just want to know if I'm going out with a guy who has nicer feet than me.",
            {
              "note": "She looks at her chipped coral, then at yours."
            },
            "I am, aren't I."
          ]
        }
      ],
      "after": "Jade, to Mel: \"his toenails are painted\" Mel: \"what colour\" Jade: \"clear\" Mel: \"ok thats fine\" Jade: \"they were nicer than mine mel\""
    },
    {
      "id": "jade-pedi",
      "route": "jade",
      "title": "Pedicure date",
      "contact": "Jade",
      "irl": true,
      "gaydar": 62,
      "spark": 36,
      "gaydarSays": "I took him for a pedicure as a joke. He picked a colour in under a second. I'm not joking anymore.",
      "intro": "Jade's idea. \"Pedicures, as a date, as a joke. You'll hate it.\" A nail place on James St. Two big chairs side by side, feet in warm water.",
      "thinks": [
        "picked coral before the tray was even up. that was not a joke for him",
        "feet in the bubbles next to him and it was exactly the same as sitting next to mel. tried to feel something else. couldnt",
        "is it bad im relieved. no pressure to hook up when your date is that into his cuticles"
      ],
      "them": [
        "Okay, you have to pick a colour. It's the rule. You don't have to keep it.",
        {
          "note": "The nail lady holds up a tray. You point at a soft coral before she's finished holding it up."
        },
        "That was so fast. Oh my god.",
        {
          "note": "She laughs, but she slides her own foot back into the water, under the bubbles."
        }
      ],
      "replies": [
        {
          "you": "It's the first one I saw.",
          "them": [
            "It was the fourth one in. I watched you.",
            {
              "note": "The nail lady holds your foot up. \"Very small,\" she says to Jade. \"Smaller than yours.\""
            },
            "I know. I have man feet next to him. It's actually so annoying."
          ],
          "replies": [
            {
              "you": "Your feet are fine.",
              "spark": 40,
              "them": [
                "Yeah, mine are fine. Yours are cute.",
                "Cute isn't the vibe I want on a date, {name}. Just so you know."
              ],
              "after": "Jade, to Mel: \"took him for a pedicure\" Mel: \"and\" Jade: \"he has the cutest little feet ive ever seen and i dont want to kiss them\" Mel: \"jade\" Jade: \"i mean him. i dont want to kiss him\""
            },
            {
              "you": "They're not small. They're... compact.",
              "spark": 34,
              "them": [
                "Compact.",
                {
                  "note": "Jade and the nail lady both laugh at the same time."
                },
                "Babe, they're a six. I've seen the flip-flops."
              ],
              "after": "Jade, to Mel: \"he called his feet compact\" Mel: \"lol\" Jade: \"the nail lady laughed. i laughed. he went pink. his toes went coral\""
            }
          ]
        },
        {
          "you": "I'll take it off tomorrow. Probably.",
          "them": [
            "You won't.",
            {
              "note": "Twenty minutes later your toes are a perfect soft coral. You look at them for a long time."
            },
            "You're not taking that off."
          ],
          "replies": [
            {
              "you": "No. I'm not.",
              "spark": 30,
              "them": [
                "Ha. I knew it.",
                "They're nicer than mine. That's not hot, by the way. It's just a fact."
              ],
              "after": "Jade, to Mel: \"he's keeping the coral\" Mel: \"called it\" Jade: \"everyone keeps saying that\""
            },
            {
              "you": "I'll take it off. Definitely.",
              "spark": 42,
              "them": [
                "Okay.",
                {
                  "note": "Two days later he sends her a photo of his feet at the beach. Still coral."
                },
                "lol definitely"
              ],
              "after": "Jade, to Mel: \"he said he'd take it off. he didnt\" Mel: \"of course he didnt\""
            }
          ]
        }
      ],
      "debrief": "You pointed at the coral before the tray was all the way up. You knew what you wanted."
    },
    {
      "id": "jade-couch",
      "route": "jade",
      "title": "Lowkey checking",
      "contact": "Jade",
      "irl": true,
      "gaydar": 66,
      "gaydarSays": "The nail lady said he jumps. The nail lady was right. Anyway.",
      "intro": "A Tuesday night at Jade's flat in Woolloongabba. Netflix, a bag of salt and vinegar chips, and your feet in her lap because she pulled them there. Your toes are still coral from the nail place. When the nail lady did the scrub, she told Jade you jumped every time.",
      "thinks": [
        "i put a cushion between his feet and my legs. on a date. me",
        "every time his foot went i was laughing but i wasnt into it. he was on my couch at ten at night and nothing was going to happen and we both knew it",
        "no thoughts. hes gay"
      ],
      "them": [
        {
          "note": "She pulls your feet into her lap, then puts a cushion between them and her legs and rests the chips on it."
        },
        "So the nail lady said you jumped.",
        "Like every time. She said, he jumps, very funny man.",
        {
          "note": "She eats a chip. She doesn't look at you. One fingernail goes, very slowly, from your heel to your toes."
        },
        "Lowkey just checking."
      ],
      "replies": [
        {
          "you": "(Don't react. Watch the show.)",
          "them": [
            {
              "note": "You don't react. She eats another chip. The nail goes again, slower, under the toes this time."
            },
            "Hm.",
            {
              "note": "Then along the side of your foot, where you didn't know you had a side."
            }
          ],
          "replies": [
            {
              "you": "(Keep watching the show. Somehow.)",
              "them": [
                {
                  "note": "You watch a whole scene. You couldn't say what happened in it. She gives up and puts her chin on her knee."
                },
                "Okay, the nail lady lied. Or you're like, a monk.",
                "Your feet are smaller than my hand though. Look. Kind of rude."
              ],
              "gaydar": 63,
              "spark": 56
            },
            {
              "you": "(Break. A laugh comes out of your nose.)",
              "them": [
                {
                  "note": "It comes out of your nose. Jade puts the chips down, very calm."
                },
                "There it is.",
                {
                  "note": "Both hands now, not slow any more. You're laughing and trying to pull your feet back, and she just holds on, totally relaxed, a chip still in her mouth."
                }
              ],
              "replies": [
                {
                  "you": "Jade! Stop! Okay! Stop!",
                  "them": [
                    {
                      "note": "She stops straight away and goes back to the chips like nothing happened."
                    },
                    "Okay. Nail lady was right. Vibes confirmed."
                  ],
                  "gaydar": 69,
                  "spark": 36
                },
                {
                  "you": "(Laughing too hard to say anything.)",
                  "them": [
                    {
                      "note": "You can't get a word out. She keeps going a couple more seconds, then looks at your face and stops by herself."
                    },
                    "You okay? You've gone the colour of your toes.",
                    "...Anyway. I'm not telling Mel. I'm telling Mel."
                  ],
                  "gaydar": 73,
                  "spark": 24
                }
              ]
            }
          ]
        },
        {
          "you": "Jade. Don't you dare.",
          "them": [
            "Dare what. I'm watching my show.",
            {
              "note": "She is not watching her show. Her nail goes up the middle of your sole, very slowly."
            }
          ],
          "replies": [
            {
              "you": "(Pull your feet back and sit on them.)",
              "them": [
                {
                  "note": "You sit on them. She looks at you, sitting on your own feet on her couch."
                },
                "Okay that's lowkey the cutest thing you've ever done.",
                "They'll come out eventually. I can wait. I've got chips.",
                {
                  "note": "They do come out eventually. She waits until you've forgotten, pokes one heel, says \"boop\", and goes back to the show."
                }
              ],
              "gaydar": 66,
              "spark": 46
            },
            {
              "you": "(Squirm and giggle. Don't pull away.)",
              "them": [
                {
                  "note": "You don't pull away. She notices. She puts the chips on the floor."
                },
                "Okay so you like it. That's fine. No judgement.",
                {
                  "note": "She keeps going, light and lazy, for ages. You giggle into a cushion. Every so often she says \"say stop whenever\". When you finally say it, she stops straight away."
                },
                "That was like forty minutes. We missed the whole episode. Worth it."
              ],
              "gaydar": 75,
              "spark": 16
            }
          ]
        }
      ]
    },
    {
      "id": "jade-feet",
      "route": "jade",
      "gaydar": 70,
      "spark": 35,
      "gaydarSays": "Sean saw the coral and grabbed his foot in front of everyone. I'd have done the same tbh.",
      "title": "Hot tub",
      "contact": "Jade",
      "irl": true,
      "intro": "Mel's birthday. Mel has a hot tub, and that's the whole party. You came in slides with your toes painted a soft coral, your first real colour, and the slides came off at the deck. Mel's brother Sean is here. According to Mel, who tells everyone everything, he's been trying with Jade for years.",
      "thinks": [
        "sean had his foot up on his knee and i watched sean. {name} watched sean. we were both just watching sean",
        "coral was his first real colour and he was so proud of it. its cute. i dont want cute",
        "i wore the good bikini. for him. he looked at seans arms the whole time so. bikini wasted"
      ],
      "them": [
        {
          "note": "You sit on the edge of the hot tub with your feet in the water. Jade looks at your toes under the water for a long time."
        },
        "coral. ok. thats new",
        "and your feet are tiny. like actually. i have man feet next to you",
        {
          "note": "Sean's sitting on the edge across from you. He pulls your foot out of the water and props it on his knee."
        },
        "\"Coral,\" he says. \"Jade, he's matching you.\"",
        "he is not matching me",
        "\"He kind of is.\" He runs one finger down the arch of your wet foot."
      ],
      "replies": [
        {
          "you": "(Tense up. Don't give him anything.)",
          "them": [
            {
              "note": "You grip the edge of the tub. Sean grins and goes under your toes, slowly."
            },
            "\"Ooh, he's trying so hard,\" Mel says.",
            {
              "note": "Jade's watching your face."
            }
          ],
          "replies": [
            {
              "you": "(Hold it.) You done?",
              "spark": 40,
              "them": [
                "\"Huh,\" Sean says, and drops your foot back in the water. \"Thought you'd be a screamer.\"",
                {
                  "note": "Jade slides along the edge until her shoulder's against yours."
                },
                "how did you not laugh",
                "i would have died",
                "\"I nearly did,\" you say."
              ],
              "after": "Jade, to Mel, after: \"he didnt even laugh\" Mel: \"sean's devastated\" Jade: \"good\" Jade: \"the coral though\" Mel: \"jade\" Jade: \"i know\""
            },
            {
              "you": "(Lose it. Laugh so hard you slip into the water.)",
              "spark": 22,
              "them": [
                {
                  "note": "You burst out laughing, try to pull away and slide right off the edge into the tub. Sean's still got your ankle."
                },
                "\"Man overboard,\" Sean says, still going on your foot above the water.",
                "\"Okay! Stop! I give up!\"",
                {
                  "note": "He lets go. You come up spluttering, hair flat, still giggling. Mel's filming. Jade's laughing so hard she's hanging on to Sean's arm."
                }
              ],
              "after": "Mel, to the group chat: \"[video] sean made jade's date laugh so hard he fell in the hot tub\" Jade: \"stop posting it\" Mel: \"you held sean's arm\" Jade: \"i was SLIPPING\""
            }
          ]
        },
        {
          "you": "(Give in. You're laughing already.)",
          "them": [
            {
              "note": "You're giggling straight away, high and squeaky, kicking water everywhere. Sean holds on with both hands."
            },
            "\"Jade, he's so ticklish it's not even fair,\" Sean says.",
            {
              "note": "Jade wipes water off her face. She's laughing. Then she mostly isn't."
            }
          ],
          "replies": [
            {
              "you": "(Giggling) Sean! Please! Pleeease stop!",
              "spark": 18,
              "them": [
                {
                  "note": "He stops and lets your foot slide back into the water."
                },
                "\"Pleeease,\" Sean says, in your voice. Mel snorts into her drink.",
                "that was a really long please",
                {
                  "note": "Jade moves round to Sean's side of the tub to get the drinks. She stays there."
                }
              ],
              "after": "Jade, to Mel: \"pleeeeease\" Mel: \"i KNOW\" Jade: \"my date said pleeeease to your brother\" Mel: \"sean's so pleased with himself\""
            },
            {
              "you": "(Lie back on the deck and let him keep going.)",
              "spark": 8,
              "gaydar": 78,
              "them": [
                {
                  "note": "You lean all the way back on the warm deck and laugh. Sean goes under your toes and you squeal and wriggle and don't try to stop him."
                },
                "\"He's loving this,\" Mel says. \"Jade, your date is loving this.\"",
                {
                  "note": "You finally gasp \"stop\". He stops right away and lets your foot drop back in the water. \"Good sport.\""
                },
                {
                  "note": "When you sit up, Jade's out of the tub in a towel, on her phone. \"cute,\" she says, without looking up."
                }
              ],
              "after": "Jade, to Mel: \"he just LAY THERE\" Mel: \"he was having the best time of anyone\" Jade: \"yeah i saw\" Jade: \"sean's actually kind of funny\" Mel: \"oh my god\""
            }
          ]
        }
      ],
      "debrief": "Sean grabbed your foot in front of everyone. Whatever Jade decided that night, it wasn't about how ticklish you are."
    },
    {
      "id": "jade-barefoot",
      "route": "jade",
      "gaydar": 74,
      "spark": 30,
      "gaydarSays": "Mel's dog ate his slide and he was so weird about his feet for the rest of the night. I notice feet. I noticed.",
      "title": "One slide",
      "contact": "Jade",
      "irl": true,
      "intro": "Mel's birthday is winding down. You get out of the hot tub and go to the deck for your slides. There's one slide. Mel's dog, Biscuit, is under the table with the other one, and it's not really a slide anymore. Jade said she'd drive you home, but she wants gelato first, and the gelato place is on James Street, on a Saturday night.",
      "thinks": [
        "biscuit ate his slide and he went so shy about his toes i was basically babysitting",
        "wanted gelato more than i wanted to hold his hand. probably bad",
        "sean's lowkey been texting me. havent told {name}. i dont think hed care tbh, i think hed just want to know what sean said about him"
      ],
      "them": [
        {
          "note": "Jade looks at the chewed slide. Then at your bare feet. Coral toes, still wrinkly from the water."
        },
        "ok so youre barefoot",
        {
          "note": "You tell her you could wear one slide."
        },
        "you could not wear one slide",
        {
          "note": "Sean, drying off by the door: \"Give him one of yours, Jade.\""
        },
        "lol they'd fall off him. his feet are tiny, i saw them at the nail place",
        "and i've got these and that's it. so it's barefoot or you sit in my car"
      ],
      "replies": [
        {
          "you": "My feet aren't tiny.",
          "them": [
            "they're smaller than mine",
            {
              "note": "She puts her foot down next to yours on the deck. Hers is longer by a good inch. Sean laughs from the doorway."
            },
            {
              "note": "You decide to just go barefoot."
            },
            {
              "note": "On James Street you walk next to her with your toes curled up off the footpath. A girl at a table outside the gelato place looks at your feet and nudges her friend."
            }
          ],
          "replies": [
            {
              "you": "(Stand behind Jade so your feet are out of sight.)",
              "spark": 30,
              "them": [
                {
                  "note": "You stand right behind her in the queue, so her heels hide most of the coral."
                },
                "why are you standing so close",
                {
                  "note": "You tell her it's no reason."
                },
                "is it the toes",
                {
                  "note": "You admit it's the toes."
                }
              ],
              "after": "Jade, to Mel: \"he hid behind me in the gelato line so nobody would see his feet\" Mel: \"cute or no\" Jade: \"cute i guess\" Jade: \"i was looking at his toes the whole time though so i cant really talk\""
            },
            {
              "you": "(Say it out loud.) She's looking at my feet.",
              "spark": 22,
              "them": [
                "everyones looking at your feet",
                "theyre coral and its james st and you have no shoes on",
                {
                  "note": "You go red down to your neck. She buys you a cup of mango and doesn't say anything else."
                }
              ],
              "after": "Jade, to Mel: \"he said out loud that people were looking at his feet\" Mel: \"were they\" Jade: \"yes lol. he went so red. i bought him gelato\" Jade: \"felt like buying a kid gelato\""
            }
          ]
        },
        {
          "you": "Can we skip the gelato?",
          "them": [
            "no",
            "ive been thinking about pistachio for two hours",
            {
              "note": "So you sit in her car outside while she goes in, feet tucked up on the seat. Sean pulls up beside you on his way home, sees you, and winds his window down."
            },
            "\"You hiding, man?\""
          ],
          "replies": [
            {
              "you": "\"I'm waiting.\" (Pull your feet in further.)",
              "spark": 32,
              "them": [
                "\"With your feet on her seat. She'll love that.\"",
                {
                  "note": "Jade comes back with two cups and sees your feet on her seat."
                },
                "feet. off. my seat",
                {
                  "note": "You put them on the floor mat. She hands you your gelato without looking at you."
                }
              ],
              "after": "Jade, to Mel: \"he waited in the car so nobody would see his feet. and put them on my seat\" Mel: \"no\" Jade: \"sean drove past and texted me your boyfriends hiding lol\""
            },
            {
              "you": "(Wave. Say nothing. Die a bit.)",
              "spark": 26,
              "them": [
                "\"Classic,\" Sean says, laughing, and drives off.",
                {
                  "note": "When Jade gets back you tell her Sean saw you. She laughs, and checks her phone. He's already texted her."
                },
                "he says you looked very comfy"
              ],
              "after": "Jade, to Mel: \"sean drove past and caught him hiding in my car with no shoes on\" Mel: \"omg\" Jade: \"he texted me straight away\" Jade: \"we ended up talking for like an hour\""
            }
          ]
        },
        {
          "you": "Fine. Lend me one of your sandals. Just to the car.",
          "them": [
            {
              "note": "She hands you one sandal. Tan, with a little gold buckle. Your heel stops a good inch short of the back of it."
            },
            "omg it's huge on you",
            "it still looks better on you than me though"
          ],
          "replies": [
            {
              "you": "(Hop to the car.) I'm giving it straight back.",
              "spark": 28,
              "them": [
                {
                  "note": "You go down Mel's driveway in one gold sandal and one bare foot. Everyone on the deck watches. Sean films."
                },
                "\"Cinderella,\" he calls.",
                "sean stop",
                "ok that was funny"
              ],
              "after": "Jade, to Mel: \"the video of him hopping down your driveway in my sandal\" Mel: \"sean's sent it to everyone\" Jade: \"he looked so embarrassed\" Jade: \"i liked that he did it though\""
            },
            {
              "you": "(Take it off again.) No. Barefoot is more dignified.",
              "spark": 30,
              "them": [
                "it is not",
                {
                  "note": "You hand it back and walk down the driveway on the sides of your feet, toes curled under."
                },
                "you look like youre walking on lego"
              ],
              "after": "Jade, to Mel: \"he gave my sandal back and walked to the car like it was hot coals\" Mel: \"was it\" Jade: \"it was your driveway. at night\""
            }
          ]
        }
      ],
      "after": "Biscuit has a new chew toy. You get home with filthy feet and gelato on your shirt.",
      "debrief": "One slide, coral toes and James Street on a Saturday night. You still got your gelato."
    },
    {
      "id": "c6f",
      "route": "jade",
      "title": "Feet in a row",
      "contact": "Jade",
      "irl": true,
      "intro": "A month of Jade. A Saturday picnic at New Farm Park, 33 degrees. Jade brought Mel, and Mel brought Biscuit, the dog who ate your slide at Mel's birthday. Linen shorts, coral toes done fresh last night, and the tan strappy sandals with the little gold buckle from the women's section, the same ones as Jade's. Biscuit is lying in the only bit of shade.",
      "gaydar": 92,
      "gaydarSays": "Mel lined our feet up for her story. Guess whose won. Lowkey not mine.",
      "outfits": [
        {
          "label": "Plain shorts and a tee, the strappy sandals and coral toes",
          "thinks": "MY strappy sandals. the womens ones. better on him",
          "gaydar": -5,
          "intro": "A month of Jade. A Saturday picnic at New Farm Park, 33 degrees. Jade brought Mel, and Mel brought Biscuit, the dog who ate your slide at Mel's birthday. Plain shorts and a tee, so the rest of you is normal. Coral toes done fresh last night, and the tan strappy sandals with the little gold buckle from the women's section, the same ones as Jade's. Biscuit is lying in the only bit of shade.",
          "them": [
            {
              "note": "Jade looks at your coral toes in the strappy sandals and doesn't say anything. She shifts her own feet behind her."
            }
          ]
        },
        {
          "label": "Linen shorts, the strappy sandals and coral toes",
          "thinks": "linen shorts, those sandals, coral. me with my two week old chip being the girl with worse feet than the gay guy",
          "them": [
            {
              "note": "Jade says \"cute sandals\", exactly the way Mel says it to her."
            }
          ]
        },
        {
          "label": "A floral sundress, the strappy sandals, coral toes and a straw bag",
          "thinks": "a sundress and a straw bag. mel sat up so fast. ok hes gay",
          "gaydar": 4,
          "intro": "A month of Jade. A Saturday picnic at New Farm Park, 33 degrees. Jade brought Mel, and Mel brought Biscuit, the dog who ate your slide at Mel's birthday. A floral sundress, a straw bag, coral toes done fresh last night, and the tan strappy sandals with the little gold buckle from the women's section, the same ones as Jade's. Biscuit is lying in the only bit of shade.",
          "them": [
            {
              "note": "Mel sees the sundress and sits up so fast Biscuit slides off her legs."
            },
            {
              "note": "Jade looks at the sundress, then at the straw bag, then out at the river for a long time."
            }
          ]
        }
      ],
      "debrief": "Mel put your feet on her story without asking, on a 33 degree day. However you handled it, nobody on that blanket was laughing at you.",
      "thinks": [
        "mel posted the feet. the end ones are the prettiest and theyre the boys. anyone who sees it knows",
        "a month. we havent slept together, we havent really kissed. i used to think he was being respectful lol",
        "its fine. kind of a relief. i dont have to keep pretending i dont know"
      ],
      "them": [
        {
          "note": "Mel puts her drink down in the grass and claps twice."
        },
        {
          "from": "Mel",
          "text": "Okay. Feet. Everyone's feet on the edge of the blanket. I need it for my story."
        },
        "she does this every picnic. dont fight it",
        {
          "note": "Mel sticks her feet out first. Chipped red, a toe ring. Jade puts hers next to them. Coral, two weeks old, a chip on the big toe that she tucks under."
        },
        "ok your turn",
        {
          "note": "You slide your feet in at the end. Fresh coral, gold buckles. Biscuit puts her chin on your ankle."
        },
        {
          "from": "Mel",
          "text": "Oh no. Oh, {name}, no."
        },
        {
          "from": "Mel",
          "text": "His are the best ones. Jade. His are the best ones by miles."
        },
        {
          "from": "Mel",
          "text": "And they're the smallest! You've got year seven feet!"
        },
        "yeah. i know. ive seen them a lot",
        {
          "note": "Mel stands on the cooler bag and takes it from above. Then she types for a while with her tongue out."
        },
        {
          "from": "Mel",
          "text": "Posted. Caption: 'guess which ones are the boy's'."
        },
        "mel",
        {
          "from": "Mel",
          "text": "What? Nobody's going to guess."
        }
      ],
      "replies": [
        {
          "you": "Mel, take it down. Please.",
          "them": [
            {
              "from": "Mel",
              "text": "No way. It's got fourteen likes. Fifteen."
            },
            {
              "note": "Her phone buzzes. Then again."
            },
            {
              "from": "Mel",
              "text": "Okay, comments. 'the coral ones obviously.' That's my brother. Sean says the coral ones."
            },
            "theres two coral ones mel",
            {
              "from": "Mel",
              "text": "He means the good coral ones."
            },
            {
              "note": "Jade lies back on the blanket with her arm over her eyes."
            },
            "anyway. no thoughts. just the sun"
          ],
          "replies": [
            {
              "you": "Read me the rest. I can take it.",
              "them": [
                {
                  "from": "Mel",
                  "text": "'whose are the end ones, I need her nail lady.' That's someone from my work."
                },
                {
                  "from": "Mel",
                  "text": "'the end ones are a MAN??' Four crying faces."
                },
                {
                  "from": "Mel",
                  "text": "Oh. And this one. 'is that jade's gay friend'."
                },
                {
                  "note": "Jade takes her arm off her eyes and looks at you."
                },
                "...thats a girl from my old work. she means it nice. i think"
              ],
              "replies": [
                {
                  "you": "Reply 'yes'. Because I am. I'm gay, Jade. Sorry.",
                  "them": [
                    {
                      "from": "Mel",
                      "text": "Oh my god. Typing. Y. E. S."
                    },
                    "ok",
                    "ok thats. yeah",
                    {
                      "note": "She sits up and pulls your feet into her lap, sandals and all, and looks at them for a bit."
                    },
                    "its fine. i lowkey knew at the pedicure. you picked a colour in like one second",
                    {
                      "from": "Mel",
                      "text": "Forty likes on the reply. Jade, he's doing numbers."
                    }
                  ],
                  "gaydar": 100,
                  "spark": 4,
                  "outcome": "broke"
                },
                {
                  "you": "Reply 'he's taken'. By Jade.",
                  "them": [
                    "lol",
                    "babe",
                    {
                      "from": "Mel",
                      "text": "I'm not posting that. Nobody's going to believe it."
                    },
                    "shes not being mean. like nobody would. your feet are literally in my sandals",
                    {
                      "note": "Mel posts it anyway. Then she reads out the first reply, which is just a skull."
                    }
                  ],
                  "gaydar": 93,
                  "spark": 9,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Pull your feet off the blanket and sit on them.)",
              "them": [
                "too late. its on the internet",
                {
                  "from": "Mel",
                  "text": "Twenty-two people have seen your feet. Twenty-three."
                },
                {
                  "note": "The grass is hot. You're sitting on your sandals and one buckle digs into your leg."
                },
                {
                  "from": "Mel",
                  "text": "Sean wants to know if you get them done at the place on James St."
                }
              ],
              "replies": [
                {
                  "you": "Tell Sean to mind his business.",
                  "them": [
                    {
                      "from": "Mel",
                      "text": "Telling him."
                    },
                    {
                      "note": "Mel types. Her phone buzzes straight back. She reads it and snorts."
                    },
                    {
                      "from": "Mel",
                      "text": "He says 'tell her i said hi'. He means Jade."
                    },
                    "ok",
                    {
                      "note": "Jade picks her phone up. She's smiling at something on it. Then she puts it face down on the blanket."
                    }
                  ],
                  "gaydar": 90,
                  "spark": 11,
                  "outcome": "dodged"
                },
                {
                  "you": "Yes, James St. Tell him to book in, babe. I've seen his heels.",
                  "them": [
                    {
                      "from": "Mel",
                      "text": "OH. Telling him that word for word."
                    },
                    "lmao",
                    "ok thats so gay. sorry. it is",
                    {
                      "note": "Jade takes your hand and pulls you back onto the blanket. She puts your feet back in the row, next to hers."
                    },
                    "put them back. theyre the best ones. thats just facts"
                  ],
                  "gaydar": 95,
                  "spark": 6,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "Mel, your toe ring is working so hard right now. Who did your polish? Be honest.",
          "them": [
            {
              "from": "Mel",
              "text": "I did! Last night! In the dark!"
            },
            "she did it in the car",
            {
              "from": "Mel",
              "text": "Jade!"
            },
            {
              "note": "You pull your little kit out of your bag. Remover, a file, a coral, a clear top coat."
            },
            {
              "from": "Mel",
              "text": "Wait. You carry that?"
            },
            "he carries it. thats so... ok"
          ],
          "replies": [
            {
              "you": "Give me your foot, Mel. Five minutes. I'm not letting that ring live like this.",
              "them": [
                {
                  "note": "Mel puts her foot in your lap. You take the old red off, file the edges and start the coral. Jade watches with her chin on her knees."
                },
                {
                  "note": "A guy walking a staffy stops on the path, because Biscuit's gone over to sniff it. Running shorts, a cap, a sunburnt nose. He watches you do Mel's little toe."
                },
                {
                  "note": "\"You're really good at that,\" he says. Then, to you, going red: \"Sorry. Can I get your number? Is that weird?\""
                },
                {
                  "from": "Mel",
                  "text": "Oh my GOD."
                },
                {
                  "note": "Everyone's looking at you. Mel's foot is still in your lap. The brush is still in your hand."
                }
              ],
              "replies": [
                {
                  "you": "(Say yes. Put your number in his phone with one hand.)",
                  "them": [
                    {
                      "note": "You type it in. Your thumb is shaking a bit. He says \"cool, I'll message you\" and goes, and the staffy goes, and Biscuit watches them all the way to the river."
                    },
                    {
                      "from": "Mel",
                      "text": "A guy just picked you up while you were doing my toes."
                    },
                    "in front of me. on our date",
                    "lol. honestly fair",
                    "ok so thats. thats settled then i guess",
                    {
                      "from": "Mel",
                      "text": "I'm putting this on my story too."
                    },
                    "mel. no"
                  ],
                  "gaydar": 99,
                  "spark": 2,
                  "outcome": "dodged"
                },
                {
                  "you": "(Open your mouth to answer. Your eyes fill up instead.)",
                  "them": [
                    {
                      "note": "It just comes. Nobody's ever asked like that, in daylight, in front of people. You put the brush down and your face goes."
                    },
                    {
                      "note": "The guy goes pale. \"Oh, sorry, I didn't mean to...\""
                    },
                    "no hes ok. hes ok. give us a sec",
                    {
                      "note": "Mel holds out her arm. The guy writes his number on it in your coral, very carefully, says sorry twice more, and goes."
                    },
                    {
                      "note": "Jade pulls you over to her side of the blanket and puts your head on her shoulder. Biscuit climbs into your lap and licks your chin."
                    },
                    "no thoughts. just sit",
                    {
                      "from": "Mel",
                      "text": "Water. Cold one. Here. Here, babe. Biscuit, get off him. No, okay, stay."
                    },
                    {
                      "note": "Mel finishes her own little toe with your brush while you cry into Jade's shoulder, and holds her foot up for you to check."
                    },
                    "mels having people over next weekend. come. bring the kit, shes going to make you do everyone"
                  ],
                  "gaydar": 97,
                  "spark": 2,
                  "after": "Mel, to the group chat that night: \"[photo of a phone number in coral on her arm]\" \"he cried and we love him\" Jade: \"dont post that one\" Mel: \"i already did. biscuits in it\"",
                  "outcome": "cried",
                  "thinks": [
                    "a guy asked for his number and he cried on my blanket. i hugged him and it was the most ive ever held him. a month in. thats so sad lol",
                    "mel kept the number on her arm for three days. text him. please. one of us should be getting some"
                  ]
                }
              ]
            },
            {
              "you": "Actually, take another one. Just mine. From the side.",
              "them": [
                {
                  "from": "Mel",
                  "text": "He's using my story as a portfolio."
                },
                {
                  "note": "You cross your ankles and point your toes. Mel crouches in the grass for the angle you tell her."
                },
                {
                  "from": "Mel",
                  "text": "Posted. 'the boy's. solo.' Oh, the comments are fast."
                },
                {
                  "from": "Mel",
                  "text": "'where does he get them done.' 'is he single.' That's from a guy, Jade. Is he single, from a guy."
                },
                {
                  "note": "Jade looks at you. You're looking at Mel's phone a bit too hard."
                }
              ],
              "replies": [
                {
                  "you": "Tell him I'm... Jade. I'm gay. Tell him I'm single. Sorry.",
                  "them": [
                    "dont say sorry",
                    "i mean. a bit sorry. i did my hair for this. in this heat",
                    {
                      "from": "Mel",
                      "text": "Typing 'yes'. Jade, can I type yes?"
                    },
                    "type yes",
                    {
                      "note": "Jade puts her sunglasses on and lies back with her feet next to yours."
                    },
                    "its fine. its kind of a relief? like i can stop checking if youre looking at me"
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                },
                {
                  "you": "Tell him I'm on a date. With Jade.",
                  "them": [
                    {
                      "from": "Mel",
                      "text": "Okay. 'he's on a date. with jade.'"
                    },
                    {
                      "note": "Mel's phone buzzes."
                    },
                    {
                      "from": "Mel",
                      "text": "He says 'lol sure'."
                    },
                    "lol sure",
                    "honestly same"
                  ],
                  "gaydar": 94,
                  "spark": 7,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "It's the light. Everyone's feet look good in this light.",
          "them": [
            "mine dont",
            {
              "note": "Jade takes her foot out of the row. The chip on her big toe is very obvious in this light."
            },
            {
              "from": "Mel",
              "text": "Jade, you two have the exact same toes. That's not a couple thing. That's, like, sisters."
            },
            "mel",
            {
              "from": "Mel",
              "text": "Sorry! Sisters is a compliment!"
            }
          ],
          "replies": [
            {
              "you": "We're not the same. Mine are a shade lighter.",
              "them": [
                "you know the shade",
                {
                  "from": "Mel",
                  "text": "He knows the shade."
                }
              ],
              "replies": [
                {
                  "you": "Hers is Coral Reef. Mine's Peach Sorbet. They're totally different.",
                  "them": [
                    {
                      "from": "Mel",
                      "text": "SCREAMING."
                    },
                    "...yeah ok",
                    "you just said peach sorbet with your whole chest",
                    {
                      "note": "Mel adds 'peach sorbet' to the caption."
                    },
                    "its fine. its kind of cute. its just not a boyfriend thing"
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                },
                {
                  "you": "I don't know what it's called. I just picked one.",
                  "them": [
                    "you picked it in like one second. i was there. i watched you",
                    {
                      "from": "Mel",
                      "text": "She told me. One second."
                    },
                    {
                      "note": "Jade picks at the chip on her toe and doesn't look up."
                    },
                    "anyway"
                  ],
                  "gaydar": 92,
                  "spark": 9,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Can we just eat? Jade brought brie.",
              "them": [
                "yeah ok",
                {
                  "note": "Jade cuts the brie. Mel's phone keeps going. She reads the comments out anyway, one every couple of minutes, between crackers."
                },
                {
                  "from": "Mel",
                  "text": "'the boy's are better than mine and i had a pedicure on tuesday.' That's someone from my netball."
                },
                {
                  "from": "Mel",
                  "text": "Sean again. 'tell jade's boyfriend nice buckles'."
                },
                "hes not my... ok",
                {
                  "note": "Jade lies back with a cracker on her chest and shuts her eyes. She doesn't finish what she was going to say."
                }
              ],
              "gaydar": 90,
              "spark": 12,
              "outcome": "dodged"
            }
          ]
        }
      ]
    },
    {
      "id": "jade-end",
      "route": "jade",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Riley's a plumber and his feet are honestly wrecked. I've never been happier.",
      "title": "Jade and Riley",
      "contact": "Jade",
      "irl": true,
      "outfits": [
        {
          "label": "Shorts, a tee and slides. Toes bare.",
          "thinks": "bare toes. plain. weird on him now, hes too gay for plain",
          "gaydar": -2,
          "intro": "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket. On the next blanket over is Jade, with a guy in gym shorts and a fishing shirt, barefoot. His feet are a lot. That's Riley. He's a plumber. He catches you looking.",
          "them": [
            {
              "note": "She looks at your bare toes and says \"aw, no colour?\" and does a little pout."
            }
          ]
        },
        {
          "label": "A sundress, your strappy sandals and freshly painted pink toes",
          "thinks": "pink toes and the sandals. riley said good on you. he thinks its brave. its just what {name} wears babe",
          "gaydar": 1,
          "intro": "Two months later. You're at New Farm Park with Nicole on a hot Sunday, on your lemon picnic blanket, in a sundress, your strappy sandals and freshly painted pink toes. On the next blanket over is Jade, with a guy in gym shorts and a fishing shirt, barefoot. His feet are a lot. That's Riley. He's a plumber. He catches you looking.",
          "them": [
            {
              "note": "She looks at your pink toes next to Riley's huge feet and laughs out loud."
            }
          ]
        }
      ],
      "thinks": [
        "riley's feet are a lot and i love them. riley also actually wants to sleep with me which is honestly so nice",
        "he looks so much happier. with me i think he was holding his breath",
        "vibes are good. just not together"
      ],
      "them": [
        {
          "note": "Jade sees you, waves, and comes over pulling Riley by the hand. She gives you a quick side hug and goes straight back to his hand."
        },
        "Oh my god, hi! {name}! Nicole! This is Riley. Riley, this is {name}, we went on a few dates. I told you, remember?",
        "\"The sandals guy!\" Riley says. \"Yeah, Jade told me. Good on you. I couldn't pull that off. Look at my feet.\"",
        "He fixed Mel's hot water on a Sunday in ten minutes and wouldn't even take a beer for it.",
        "He thinks moisturiser is for when you get sunburnt. I love him so much.",
        {
          "text": "Mel's still got the feet post up btw. Your comments are like, all guys now. Vibes.",
          "if": "c6f=told|broke"
        },
        {
          "text": "Did you ever text the staffy guy? His number was on Mel's arm for like three days. It wouldn't come off. Anyway.",
          "if": "c6f=cried"
        },
        {
          "text": "Sean still comments on the feet post. Like every week. 'end ones are a man'. Anyway.",
          "if": "c6f=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hi Riley! Lovely to meet you. Babe, your feet. We need to talk about your feet. Jade, he's great.",
          "them": [
            "\"Ha! Yeah, they're cooked,\" Riley says. \"Jade wants me to go to your nail lady.\"",
            "I DO want him to go. He won't.",
            "\"Not a chance,\" Riley says. \"I'd scare her.\""
          ],
          "replies": [
            {
              "you": "She's seen worse. Probably. I'll text you her number, Jade.",
              "them": [
                "Please. Riley, you're going.",
                "\"I'm not going,\" Riley says, grinning."
              ]
            },
            {
              "you": "Honestly, Riley, I'll do them myself. Sit down. Nicole, pass me the kit.",
              "gaydar": 100,
              "them": [
                {
                  "note": "Nicole hands over your little pedicure kit from her bag without a word. She carries it now. Riley looks at Jade. Jade looks at you."
                },
                "Oh my god. Are you serious?",
                "\"Go on then,\" Riley says. He sits down on the lemon blanket and sticks his foot out.",
                {
                  "note": "You do a plumber's pedicure in New Farm Park. Jade films the whole thing."
                }
              ],
              "after": "Jade, to Mel: \"ran into {name} at the park\" Mel: \"the toes guy?\" Jade: \"he gave riley a pedicure. on a picnic blanket\" Mel: \"WHAT\" Jade: \"riley loved it. he wants to go again\""
            }
          ]
        },
        {
          "you": "(Stand up.) Riley. Can I have a quick word? Over there.",
          "them": [
            "\"Yeah, no worries,\" Riley says, and follows you barefoot over to the big fig tree.",
            {
              "note": "Up close he's got a sunburnt neck and very blue eyes. You had something ready on the walk over. It's gone."
            },
            "\"What's up, man?\""
          ],
          "replies": [
            {
              "you": "Um. I want Jade back. I'm going to ask her. I just wanted you to know. Sorry.",
              "them": [
                "\"Ha! You?\" Riley looks down at your feet, then back up, grinning. \"Good luck, man. Seriously.\"",
                {
                  "note": "He walks back, sits down next to Jade and says something in her ear, and they both look over at you. Then he opens a bag of chips."
                },
                "Did you just tell Riley you're going to win me back?",
                "You said sorry to him. He said good luck to you.",
                "No. I'm not leaving him.",
                "And you're not really my type anymore. I like that he's a bit feral. You moisturise more than me.",
                "Riley's got a friend who moisturises. I'll set you up. I'm only half joking."
              ],
              "after": "Jade, to Mel: \"{name} told riley he wants me back\" Mel: \"WHAT\" Jade: \"riley wished him luck\" Mel: \"of course he did\""
            },
            {
              "you": "...Never mind. Sorry. Do you moisturise? Your feet, I mean. Sorry.",
              "them": [
                "\"Ha. Nah,\" Riley says. \"That's more your department, eh?\"",
                {
                  "note": "You tell him about urea cream for four minutes. He nods the whole time, smirking. You're bright red and you're not sure why."
                },
                {
                  "note": "Back on the blanket Nicole is crying laughing. Jade has her head on one side."
                },
                "You went over there to fight for me and you gave him a skincare routine.",
                "Riley's going to tell everyone at work about this."
              ],
              "after": "Jade, to Mel: \"{name} went over to fight riley for me\" Mel: \"and?\" Jade: \"gave him a skincare routine\" Mel: \"riley doesnt have a skincare routine\" Jade: \"he bought the cream on the way home\""
            }
          ]
        },
        {
          "you": "(To Nicole, not quietly enough) He's very... outdoorsy.",
          "them": [
            {
              "note": "Nicole snorts into her spritz."
            },
            "He is outdoorsy. He opened our wine with a lighter.",
            "It took you and me ten minutes and a video to open a jar of olives, remember?",
            "\"It was a really tight jar,\" you say.",
            "It was not a tight jar."
          ]
        },
        {
          "you": "Hi. Nice to meet you. Enjoy your picnic.",
          "them": [
            "\"You too, man! Love the blanket. Lemons!\"",
            "Jade, quietly: \"You look really good, you know.\"",
            "\"I know,\" you say. She laughs."
          ]
        }
      ],
      "after": "Jade, to Mel: \"ran into {name} at the park\" Mel: \"the toes guy?\" Jade: \"he met riley\" Mel: \"and??\" Jade: \"riley thinks he's great\"",
      "debrief": "She's happy with a plumber whose feet are a disaster. Whatever you said to Riley, he took it fine."
    },
    {
      "id": "olivia-1",
      "route": "olivia",
      "gaydar": 15,
      "gaydarSays": "He's cute and his skin is better than mine. I need to know what he uses.",
      "title": "Coffee in Bulimba",
      "contact": "Olivia",
      "outfits": [
        {
          "label": "Boy clothes: a plain tee and jeans",
          "thinks": "plain tee and jeans. i'm telling her he's straight, he wore jeans",
          "masc": true,
          "spark": 10,
          "gaydar": -5,
          "intro": "Olivia from Bumble. Works in marketing, and she's on the phone to her sister about four times a day. First date: coffee on Oxford St in Bulimba. You wore a plain white tee and jeans. She turned up in a green dress, said \"oh, you're cute\" out loud, and went red."
        },
        {
          "label": "A white tee, a gold chain and a fresh face of skincare",
          "thinks": "he was glowing. actually glowing. i'm going to tell her he glows and she's going to say liv in that voice",
          "intro": "Olivia from Bumble. Works in marketing, and she's on the phone to her sister about four times a day. First date: coffee on Oxford St in Bulimba. A white tee, a thin gold chain and an hour of skincare. She said \"oh, you're cute\" out loud, and went red.",
          "them": [
            "also did you have a whole skincare routine on?? you were glowing. i was a bit jealous ngl"
          ]
        }
      ],
      "thinks": [
        "best first date in a year and the best bit was his skincare. i can already hear her. liv. that's a gay friend",
        "practising how i'll describe him and nice keeps coming out first. nice and good skin. he didn't even try to kiss me at the car, he waved. i'm leaving that bit out"
      ],
      "them": [
        "hi!! ok that was the best first date ive had in like a year",
        "youre so easy to talk to",
        "also your skin?? what do you use. tell me everything",
        "and second date? drinks? ill pick somewhere"
      ],
      "replies": [
        {
          "you": "Ha, thanks! It's a whole routine. Cleanser, toner, serum, moisturiser, SPF. I'll send you a list. Yes to drinks!",
          "gaydar": 20,
          "them": [
            "a LIST 😭 yes please",
            "my ex washed his face with a bar of soap. the same one he used on his feet",
            "thursday? theres a cocktail bar on james st i love"
          ],
          "replies": [
            {
              "you": "Thursday. James St. I'll wear something nice.",
              "them": [
                "yay 😊",
                "send the list!!"
              ]
            },
            {
              "you": "The same bar? For his face AND his feet? Oh no. Run.",
              "gaydar": 25,
              "them": [
                "I DID 😂",
                "ok thursday. james st"
              ]
            }
          ]
        },
        {
          "you": "Thank you! I had a really good time. Drinks sound great.",
          "them": [
            "yay!! thursday?",
            "and im still getting your skincare out of you. ask my sister, i dont give up"
          ],
          "replies": [
            {
              "you": "Thursday. And fine, I'll tell you. But it's a secret.",
              "them": [
                "i wont tell anyone",
                "except my sister"
              ]
            },
            {
              "you": "No. I'm taking it to my grave.",
              "them": [
                "rude",
                "thursday!!"
              ]
            }
          ]
        },
        {
          "you": "It's genetics and drinking water. That's all I'm saying.",
          "them": [
            "youre lying",
            "nobody's skin is just genetics",
            "drinks thursday. james st. youre telling me"
          ]
        }
      ],
      "after": "Olivia, on the phone to her sister: \"first date was so good. he's funny. and his skin is amazing\" Sister: \"his skin?\" Olivia: \"like amazing\" Sister: \"...ok\" Olivia: \"dont do that\""
    },
    {
      "route": "olivia",
      "path": "masc",
      "id": "olivia-m2",
      "title": "James St, no mascara",
      "contact": "Olivia",
      "irl": true,
      "gaydar": 15,
      "spark": 82,
      "gaydarSays": "No mascara. Ordered a beer. Paid. I texted my sister from the bathroom.",
      "intro": "Second date. A cocktail bar on James St. A black shirt, nothing on your face. Olivia's in a red top and she's already ordered you something pink.",
      "them": [
        "Okay, I got you a Pornstar Martini because you seem fun. Is that okay? Sorry, I panicked.",
        {
          "note": "She looks at your lashes, then your mouth, then picks up her drink."
        }
      ],
      "replies": [
        {
          "you": "I'll drink it. But I'm getting a beer next.",
          "masc": true,
          "them": [
            "Ha. Okay. Beer guy. Noted.",
            "My sister bet me you'd love the martini. I'm going to tell her she's wrong."
          ],
          "replies": [
            {
              "you": "Tell her I hated it.",
              "masc": true,
              "spark": 88,
              "outcome": "kept",
              "them": [
                {
                  "note": "She texts her sister under the table, grinning. She shows you: 'HE HATED IT'. Her sister replies with a skull."
                },
                "She's so annoyed. I love it."
              ],
              "after": "Olivia, to her sister: \"he got a beer after\" Sister: \"no way\" Olivia: \"and he paid. and walked me to my car\" Sister: \"marry him\""
            },
            {
              "you": "Okay, I didn't hate it. It's actually amazing. What's in it?",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                "Vanilla vodka, passionfruit, a shot of prosecco on the side.",
                "\"I'm getting another.\"",
                "Ha. Okay. My sister wins."
              ],
              "after": "Olivia, to her sister: \"you were right about the martini\" Sister: \"told you\" Olivia: \"he had two\" Sister: \"told you\""
            }
          ]
        },
        {
          "you": "I love these. Good choice.",
          "them": [
            "You do?",
            "Okay. Most guys pull a face.",
            {
              "note": "She watches you drink it. You do the little sip with your pinky out without meaning to."
            }
          ],
          "replies": [
            {
              "you": "(Put your pinky down fast.) Anyway. How's work?",
              "masc": true,
              "spark": 70,
              "outcome": "kept",
              "them": [
                "Work's fine. You did a little pinky.",
                "\"I did not.\"",
                "You did. It was cute. Okay. Work."
              ],
              "after": "Olivia, to her sister: \"he did a pinky\" Sister: \"a what\" Olivia: \"a little pinky. then pretended he didnt. i'm obsessed\""
            },
            {
              "you": "(Leave the pinky.) It's a pinky drink. Respect the drink.",
              "spark": 48,
              "outcome": "slipped",
              "them": [
                "Oh my god.",
                {
                  "note": "She laughs so hard the bartender looks over."
                },
                "You're so fun. You're like going out with my friend Jono."
              ],
              "after": "Olivia, to her sister: \"he said 'respect the drink' with his pinky out\" Sister: \"so like jono\" Olivia: \"exactly like jono\""
            }
          ]
        }
      ],
      "debrief": "She ordered you something pink and told her sister about it. However you drank it was fine."
    },
    {
      "route": "olivia",
      "path": "masc",
      "id": "olivia-m3",
      "title": "Meeting her sister",
      "contact": "Olivia",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "My sister approves. She said he 'seems straight'. She's never said that about anyone I've dated.",
      "intro": "Two months in. Dinner with Olivia's sister at a Greek place in Bulimba. Her sister has been waiting for this for weeks. You wore jeans and a navy shirt.",
      "them": [
        {
          "note": "Her sister shakes your hand and looks at your face. \"No mascara,\" she says to Olivia. \"I owe you ten bucks.\"",
          "if": "olivia-m2=kept"
        },
        {
          "note": "Her sister looks at your nails, then your face. \"Jono,\" she mouths to Olivia. Olivia kicks her under the table.",
          "if": "olivia-m2=slipped"
        },
        "Okay. My sister's going to ask, so I'll ask first. Are we official? Like boyfriend official?",
        {
          "note": "Her sister leans in with her chin on her hand."
        }
      ],
      "replies": [
        {
          "you": "Yeah. We're official.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "\"Oh thank god,\" her sister says. \"She's been unbearable.\"",
            {
              "note": "Olivia hides her face in your shoulder."
            }
          ],
          "after": "You're Olivia's boyfriend. Her sister adds you to the sisters' group chat. It's mostly photos of dogs. You reply to every one."
        },
        {
          "you": "What do you think?",
          "spark": 58,
          "outcome": "drift",
          "them": [
            "I asked you.",
            {
              "note": "Her sister looks at the ceiling."
            },
            "Okay. Never mind. Let's order."
          ],
          "after": "Olivia's texts get shorter over a month, then they're just reactions. Her sister tells you she's seeing a guy called James who \"doesn't do questions back\"."
        },
        {
          "you": "Before we get into that, your sister's eyeliner is unreal. Can you teach me that wing?",
          "them": [
            "\"Oh my god,\" her sister says. \"Yes. Liv, I like him.\"",
            "Yeah. Everyone likes him.",
            {
              "note": "Olivia watches you and her sister do wings on a napkin."
            },
            "Okay, you should date a guy, {name}. Like seriously. Look at her, she's already got her phone out."
          ],
          "spark": 25,
          "outcome": "drift",
          "after": "Olivia's sister keeps you. She sends you three guys in a week. You go out with one of them. Olivia sends you a thumbs up."
        }
      ],
      "debrief": "She asked with her sister leaning in, chin on her hand. Whatever you said, you said it with an audience."
    },
    {
      "id": "olivia-2",
      "route": "olivia",
      "gaydar": 45,
      "gaydarSays": "He wore mascara on our second date and his lashes looked better than mine. I'm fine.",
      "title": "Cocktails on James St",
      "contact": "Olivia",
      "irl": true,
      "outfits": [
        {
          "label": "A black shirt and just a bit of mascara",
          "thinks": "a tiny bit of mascara, the kind you only notice if you wear it every day, which i do. she's going to ask how much is a tiny bit",
          "gaydar": -5,
          "intro": "Second date. A cocktail bar on James St. A black shirt and just a bit of mascara, the kind you hoped nobody would notice. Olivia's in a red top and she's already ordered you something pink.",
          "them": [
            {
              "note": "She leans in to look at your lashes, then leans back further than where she started."
            }
          ]
        },
        {
          "label": "A black shirt, a bit of mascara, and a clear gloss",
          "thinks": "he out-glossed me. she's just going to say he's gay liv",
          "intro": "Second date. A cocktail bar on James St. A black shirt, a bit of mascara and a clear gloss. Olivia's in a red top and she's already ordered you something pink.",
          "them": [
            {
              "note": "She sees the gloss and turns her cheek when you lean in to say hi."
            }
          ]
        }
      ],
      "thinks": [
        "I asked if he was wearing mascara before I could stop myself. He was. It was better than mine",
        "he walked me to my car and hugged me and i was so relieved. i'm going to tell her that and she'll know exactly what it means",
        "Two dates and no spark. I keep waiting. I don't think it comes"
      ],
      "them": [
        "Okay, I got you a Pornstar Martini because you seem like a fun guy. Is that okay? Sorry, I panicked.",
        {
          "note": "She looks at your face properly. Your lashes."
        },
        "Wait. Are you wearing mascara? Sorry. That's such a weird question."
      ],
      "replies": [
        {
          "you": "Just a bit! It's a tubing one, so it doesn't smudge. My lashes are really short. Is it obvious?",
          "gaydar": 50,
          "them": [
            "A tubing one.",
            "No, it's not obvious. I just know what tubing mascara is because I own one. I didn't know guys knew.",
            {
              "note": "She sips her drink. She's still looking at your lashes."
            },
            "Okay. Tell me about your week. Not mascara. Kidding. Sort of."
          ],
          "replies": [
            {
              "you": "My week was a lot. Dani took me to a drag brunch on Sunday and I cried at the finale. Twice.",
              "gaydar": 55,
              "them": [
                "A drag brunch!",
                "Okay. Fun. Do you go to a lot of those?",
                {
                  "note": "You say \"a few\". It's been six this year."
                }
              ],
              "after": "Olivia, to her sister: \"he wore mascara. tubing mascara. he knew it was tubing\" Sister: \"olivia\" Olivia: \"and he's been to like six drag brunches this year\" Sister: \"OLIVIA\" Olivia: \"hes lovely though. im doing a third date\""
            },
            {
              "you": "Work, mostly. Boring. Tell me about yours.",
              "them": [
                "Oh my god. Okay. My boss.",
                {
                  "note": "She's funny. You laugh at everything. You also watch the bartender's arms while he shakes a martini, and she sees you do it."
                }
              ]
            }
          ]
        },
        {
          "you": "Not weird! Yeah, a little. I like how it looks. And this is perfect, by the way. Good guess.",
          "them": [
            "It was a good guess, wasn't it.",
            "Is that something you do? Like normally? Makeup?",
            "Sorry. I'm not judging. I've just never been on a date with a guy who has better lashes than me."
          ],
          "replies": [
            {
              "you": "A bit. More lately. I don't really know why. I just like it.",
              "gaydar": 55,
              "them": [
                "No, that's fine.",
                "It's just new. For me. I'll get used to it."
              ]
            },
            {
              "you": "Only for special occasions. Like dates with gorgeous women.",
              "them": [
                "Oh, stop. Okay. That was smooth.",
                {
                  "note": "She smiles. When you look away she checks your lashes again."
                }
              ]
            }
          ]
        },
        {
          "you": "No. That's just my lashes.",
          "them": [
            "{name}. There's a bit on your eyelid.",
            {
              "note": "She hands you a napkin and points to the spot on her own face."
            },
            "It's fine! It looks good. It looks better than mine, which is so annoying."
          ]
        }
      ],
      "after": "Olivia, to her sister: \"he wore mascara\" Sister: \"olivia\" Olivia: \"it looked good though\" Sister: \"OLIVIA\" Olivia: \"hes lovely. im doing a third date. stop\""
    },
    {
      "id": "olivia-facetime",
      "route": "olivia",
      "title": "Her sister on FaceTime",
      "contact": "Olivia",
      "gaydar": 55,
      "spark": 40,
      "gaydarSays": "My sister met him on FaceTime for two minutes and asked for his skincare routine. Then she asked if he's 'sure'.",
      "intro": "A Sunday. Olivia's at her sister's place. She FaceTimes you.",
      "them": [
        "Hi!! Sorry, my sister wants to meet you. She's here. She's being weird.",
        {
          "note": "Her sister's face comes into the screen, very close."
        },
        "\"Hi. Oh my god, your skin. What do you use?\""
      ],
      "replies": [
        {
          "you": "Just soap and water, honestly.",
          "them": [
            "\"Liar,\" her sister says.",
            "She's a dermal therapist, {name}. She can tell.",
            "\"There's a serum on that face,\" her sister says. \"At least one.\""
          ],
          "replies": [
            {
              "you": "Okay. Two serums. And an SPF.",
              "spark": 36,
              "them": [
                "\"I KNEW it,\" her sister says. \"Which SPF?\"",
                {
                  "note": "You and her sister talk about SPF for six minutes. Olivia's face is in the corner of the screen, eating chips."
                },
                "Okay. I'm here too. Hi."
              ],
              "after": "Olivia's sister, to Olivia: \"he's lovely\" Olivia: \"right??\" Sister: \"liv. he's lovely like your friends are lovely. is he sure about you?\""
            },
            {
              "you": "Just soap. I'm a simple guy.",
              "spark": 46,
              "them": [
                "\"Mm,\" her sister says.",
                {
                  "note": "She zooms in on your face with two fingers on her own screen."
                },
                "Okay, stop, you're freaking him out."
              ],
              "after": "Olivia's sister, to Olivia: \"he lied about his skincare\" Olivia: \"how do you know\" Sister: \"his pores told me\""
            }
          ]
        },
        {
          "you": "Oh, a few things. I'll write you a list.",
          "them": [
            "\"A list!\" her sister says. \"Liv, he's writing me a list.\"",
            {
              "note": "Olivia takes the phone back. She's smiling, but it's a bit stuck."
            },
            "You're going to be her favourite. Already. That's... nice."
          ],
          "replies": [
            {
              "you": "I'd rather be yours.",
              "spark": 48,
              "them": [
                "Ha. Okay. Smooth.",
                {
                  "note": "Behind her, her sister says \"he's still writing the list though.\""
                }
              ],
              "after": "Olivia, to her sister: \"he said he'd rather be my favourite\" Sister: \"cute\" Olivia: \"then he sent you the list\" Sister: \"it's a great list\""
            },
            {
              "you": "Tell her the list's coming tonight. With links.",
              "spark": 32,
              "them": [
                "With links.",
                "Okay. Yeah. I'll tell her.",
                {
                  "note": "She hangs up a bit quickly."
                }
              ],
              "after": "Olivia's sister, to Olivia: \"the list has links\" Olivia: \"i know\" Sister: \"liv. honestly. he'd be a great boyfriend. for a guy\""
            }
          ]
        }
      ],
      "debrief": "Her sister zoomed in on your pores on FaceTime. You came out of it with a fan."
    },
    {
      "id": "olivia-paint",
      "route": "olivia",
      "title": "For the photos",
      "contact": "Olivia",
      "irl": true,
      "gaydar": 64,
      "gaydarSays": "I was meant to be painting his toes for the boat photos. I got maybe four done.",
      "intro": "The night before the boat. Olivia's apartment in Bulimba, the coffee table covered in nail polish. She's decided your toes need doing \"for the photos\", in a soft pink, and you said yes. It's just the two of you. Your foot's on a towel in her lap.",
      "thinks": [
        "i wanted to paint his toes more than i wanted to kiss him. she'll say that's because he's gay and she'll be right",
        "his feet in my lap, on my couch, just us, and the most that happened was a pedicure. i did my legs and everything. not telling her that",
        "texted her i think he might be gay. she sent back you think?"
      ],
      "them": [
        {
          "note": "She lays a towel over her lap and folds the edges in before she puts your foot on it."
        },
        "Okay. Hold still. If you smudge this I'm starting again, and I'll tell my sister you smudged it.",
        {
          "note": "She does your big toe fine. Then she holds your foot steady, and her thumb is right on the arch, and your whole leg jumps."
        },
        "...Excuse me?",
        "Did your foot just do that on purpose?",
        {
          "note": "She looks at her thumb. She looks at you. She moves it, very slowly, about a centimetre."
        }
      ],
      "replies": [
        {
          "you": "(Hold completely still.)",
          "them": [
            {
              "note": "You hold still. Your toes curl on their own. She watches them curl and starts to grin."
            },
            "Oh my god. You're so ticklish. I'm literally texting my sister.",
            "Hold still though, I'm doing the next one.",
            {
              "note": "She paints the next toe with her thumb going in slow little circles on your arch the whole time."
            }
          ],
          "replies": [
            {
              "you": "(Breathe through it. Don't move.)",
              "them": [
                {
                  "note": "You don't move. It takes everything. She paints all five and you don't move once."
                },
                "Okay. Respect. That was like a hostage video.",
                "Other foot."
              ],
              "gaydar": 62,
              "spark": 55
            },
            {
              "you": "Liv. If you keep doing that, I'm going to kick the polish.",
              "them": [
                "Then don't kick it.",
                {
                  "note": "She caps the polish, puts it on the far end of the table, out of range, and goes for your foot with both hands."
                },
                {
                  "note": "You make a noise you didn't know you could make. She's trying to film it and she's laughing too hard to hold the phone."
                },
                "Say stop and I'll stop."
              ],
              "replies": [
                {
                  "you": "Stop! Stop!",
                  "them": [
                    {
                      "note": "She stops straight away and holds both hands up. Your big toe's smudged."
                    },
                    "Okay, that one's on you. My sister's going to see that smudge in every photo.",
                    "Also, both your feet fit on one of my placemats. I just checked. Look."
                  ],
                  "gaydar": 67,
                  "spark": 38
                },
                {
                  "you": "(Laugh until you can't breathe.)",
                  "them": [
                    {
                      "note": "You can't get a word out. After a few seconds she sees your face and lets go by herself."
                    },
                    "Okay, okay. You're done. I've got you.",
                    "I got it on video though. Sorry. It's going to my sister. She needs to hear that laugh."
                  ],
                  "gaydar": 72,
                  "spark": 26
                }
              ]
            }
          ]
        },
        {
          "you": "Don't. Liv. Don't even think about it.",
          "them": [
            "I'm not thinking about anything. I'm painting.",
            {
              "note": "She paints one toe. Then she drags the end of the brush handle down the middle of your sole, very lightly."
            },
            "Oops."
          ],
          "replies": [
            {
              "you": "(Snatch your foot back.)",
              "them": [
                {
                  "note": "You pull it back so fast the bottle wobbles. She catches it."
                },
                "Okay! Truce. Give it back. I'll be good.",
                "...I'll be mostly good.",
                {
                  "note": "She's mostly good. She does both feet. Every so often her thumb wanders, and every time you flinch she says \"sorry\" in a voice that isn't sorry at all."
                }
              ],
              "gaydar": 64,
              "spark": 45
            },
            {
              "you": "(Giggle. You can't help it.)",
              "them": [
                {
                  "note": "It comes out before you can stop it, high and silly. Olivia puts the brush down."
                },
                "Oh no. No, that's adorable. Do it again.",
                {
                  "note": "She does it again. You do it again. She's got her phone in one hand and your ankle in the other."
                }
              ],
              "replies": [
                {
                  "you": "Liv, stop! I mean it. Stop.",
                  "them": [
                    {
                      "note": "She stops the second you say it and puts your foot back on the towel, very gently."
                    },
                    "Fine. Fine! But I'm sending this to my sister. She's going to die."
                  ],
                  "gaydar": 69,
                  "spark": 33
                },
                {
                  "you": "Okay, one more. Then the polish.",
                  "them": [
                    "One more. You said it, not me.",
                    {
                      "note": "It's not one more. It's about a minute, and when you finally gasp \"stop\" she stops straight away, and you're both lying on her rug."
                    },
                    "That's the most fun I've ever had painting nails. And I do my sister's."
                  ],
                  "gaydar": 74,
                  "spark": 20
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "olivia-feet",
      "route": "olivia",
      "gaydar": 70,
      "gaydarSays": "Marcus had his foot for ages. My sister will not stop bringing it up.",
      "title": "Boat day",
      "contact": "Olivia",
      "irl": true,
      "intro": "Olivia's sister's birthday, on her friend Marcus's boat. Marcus has one rule: no shoes on board. Last night Olivia painted your toes a soft pink \"for the photos\" and you let her. Marcus went to school with Olivia. Her sister says he's been in love with her since year 10.",
      "thinks": [
        "Marcus said I've got a type and apparently my type is gay guys with smaller feet than me. telling her that word for word",
        "Marcus has looked at me like that since school and today i looked back. {name} looked at Marcus longer than i did honestly",
        "my sister's friends adopted him in about a minute. they always do that with the gay ones. nobody adopted me"
      ],
      "them": [
        {
          "note": "Marcus is on the back step taking everyone's shoes as they come on. He holds his hand out for yours."
        },
        "\"Shoes, buddy. Rules.\"",
        {
          "note": "You hand him your sneakers, then peel your socks off. He looks down."
        },
        "\"Oh, very nice,\" he says. \"Liv, did you do these?\"",
        {
          "note": "Olivia watches Marcus holding your foot, not you, and doesn't answer straight away."
        },
        "Maybe.",
        "Look how small his feet are though. I had to use the kids' toe separators.",
        "\"They match your nails.\" He grins at her, not at you. \"You've got a type, Liv. And it's not me.\""
      ],
      "replies": [
        {
          "you": "(Go and lie on the front deck in the sun. Feet up.)",
          "them": [
            {
              "note": "You lie on your front on the warm deck with your feet in the air, crossed at the ankles. Olivia and her sister are on the cushions just behind you."
            },
            {
              "note": "Marcus walks past on his way to the anchor and stops."
            },
            "\"Liv. Look. He's sunbathing his pedicure.\"",
            {
              "note": "He crouches and drags one finger along both your soles at once."
            },
            {
              "note": "You shriek and roll over so fast you nearly go off the side. He grabs your ankle so you don't. Then he doesn't let go, and goes under your toes instead."
            }
          ],
          "replies": [
            {
              "you": "Marcus! Marcus. Please. Stop!",
              "spark": 26,
              "them": [
                {
                  "note": "He stops and lets go of your ankle."
                },
                "\"Saved your life and you're yelling at me,\" he says.",
                {
                  "note": "Olivia's sister has her hand over her mouth. Olivia's laughing with her head back."
                },
                "You sounded like a seagull.",
                "\"He did,\" Marcus says, and sits down on the cushion next to her. \"Drink, Liv?\"",
                {
                  "note": "She says yes. She doesn't move over to make room for you."
                }
              ]
            },
            {
              "you": "(Laughing too hard to talk, just kick.)",
              "spark": 14,
              "gaydar": 75,
              "them": [
                {
                  "note": "You kick, but not hard, because you're laughing too much. Marcus holds on with one hand and keeps going with the other."
                },
                "\"Liv, is he kicking me or dancing?\"",
                "Let him go, he's going to wet himself!",
                {
                  "note": "He lets go. You lie on the deck trying to breathe. Her sister's filming. Olivia's leaning on Marcus to stay upright."
                },
                "\"Most ticklish guy I've ever met,\" Marcus says. \"And I've got three brothers.\""
              ]
            }
          ]
        },
        {
          "you": "(Sit with Olivia and keep your feet flat on the deck.)",
          "spark": 28,
          "them": [
            {
              "note": "You sit on the cushions with Olivia, pink toes tucked right in. Marcus drives. Every time you look up he's looking at Olivia in the mirror."
            },
            "Her sister, leaning over: \"So are you ticklish? Liv won't tell me.\"",
            "\"I'm not,\" you say.",
            "\"He's lying,\" Olivia says. \"He's so bad.\"",
            {
              "note": "Marcus cuts the engine, walks straight back and sits down at your feet."
            },
            "\"Heard you're not ticklish.\" He picks up your foot. \"Let's see.\"",
            {
              "note": "He barely touches you. You're laughing, then squealing, then begging. Her sister has her phone up. Olivia's got her face in her hands, laughing."
            },
            "\"Stop, stop, okay, I'm ticklish!\"",
            {
              "note": "He stops. \"Thought so,\" he says, and goes back to the wheel. Olivia goes and sits up the front with him."
            }
          ]
        }
      ],
      "after": "Olivia's sister, on the drive home: \"marcus had your boyfriend's foot for like five minutes\" Olivia: \"i know\" Sister: \"and you sat with marcus the whole way back\" Olivia: \"i know\" Sister: \"so which one are you dating\" Olivia: \"i dont know\"",
      "debrief": "Marcus used your feet to get closer to her. You still got a day on a boat."
    },
    {
      "id": "olivia-barefoot",
      "route": "olivia",
      "gaydar": 76,
      "spark": 28,
      "gaydarSays": "His sneakers went in the river so he did dinner with bare pink toes. Marcus was very helpful. Hmm.",
      "title": "Dinner after the boat",
      "contact": "Olivia",
      "irl": true,
      "intro": "The boat's back at the jetty in Bulimba. You reach into the shoe bucket for your sneakers and they're not there. The bucket tipped coming in, and they're somewhere at the bottom of the river. Dinner is booked at the restaurant on the water, now, and Olivia's sister is already walking up the jetty.",
      "thinks": [
        "he kept tucking his feet under the table. so embarrassed about a pedicure. marcus kept topping up my wine and i let him",
        "i wasn't embarrassed for him. i was embarrassed sitting next to him, everyone at that table knows i'm pretending he's my boyfriend",
        "she texted so? and i typed he's lovely and then he's gay and deleted both and sent a thumbs up"
      ],
      "them": [
        {
          "note": "Olivia looks at your bare feet on the jetty boards. The pink she painted is still perfect."
        },
        "Okay. That's actually so funny.",
        "\"It's not funny.\"",
        "It's a bit funny. Come on, they won't care. It's by the water.",
        "Nobody's even going to notice. They're tiny. They're like little doll feet.",
        "\"They'll care,\" Marcus says, putting his own shoes on. \"There's a sign.\""
      ],
      "replies": [
        {
          "you": "There's a sign?",
          "them": [
            {
              "note": "There's a sign. NO BARE FEET. The manager looks at you, then at Marcus, who goes to the bar and comes back with a pair of white slides from lost property."
            },
            "\"Saved you again, buddy.\"",
            {
              "note": "They're two sizes too big. They slap on the floor with every step, all the way to the table."
            }
          ],
          "replies": [
            {
              "you": "(Slap to the table with your head down.)",
              "spark": 26,
              "them": [
                {
                  "note": "You sit down, kick the slides off under the table and hide your feet behind the chair legs."
                },
                "You can't take them off. The sign.",
                "\"Nobody can see under the table.\"",
                "\"I can,\" Marcus says. He's next to you. \"Very pink down there.\""
              ],
              "after": "Olivia, to her sister: \"he took the slides off under the table\" Sister: \"marcus saw\" Olivia: \"marcus sees everything apparently\" Olivia: \"he was really nice to me all night\""
            },
            {
              "you": "Thanks, Marcus. Really. Thank you.",
              "spark": 22,
              "them": [
                "\"Anything for Liv's boyfriend.\" He says it like a joke and pulls her chair out for her.",
                {
                  "note": "Olivia sits. She looks up at him a second longer than she needs to."
                },
                "That was nice of him. That's such a boyfriend thing to do.",
                {
                  "note": "She picks up the menu."
                }
              ],
              "after": "Olivia, to her sister: \"marcus got him slides from lost property\" Sister: \"he's so sweet\" Olivia: \"i know. its annoying\""
            }
          ]
        },
        {
          "you": "I'll sit outside. On the deck. Where nobody looks at feet.",
          "them": [
            {
              "note": "The deck has no sign. It also has the whole restaurant looking out at it through the glass."
            },
            "You're literally in the window.",
            {
              "note": "You sit with your feet up on the chair and your arms round your knees, like that hides ten pink toes."
            }
          ],
          "replies": [
            {
              "you": "Does anyone have socks? Anyone?",
              "spark": 30,
              "them": [
                "Who brings socks on a boat?",
                {
                  "note": "Her sister does. Bright yellow, with BIRTHDAY GIRL on the soles."
                },
                "Put them on. Put them on right now.",
                {
                  "note": "You put them on. Olivia takes about forty photos."
                }
              ],
              "after": "Olivia, to her sister: \"he wore your birthday socks to dinner\" Sister: \"they suit him\" Olivia: \"they really do\" Olivia: \"i dont know how i feel about that\""
            },
            {
              "you": "(Stay curled up. Order without looking at anyone.)",
              "spark": 26,
              "them": [
                {
                  "note": "You order the fish and stay folded up on the chair the whole meal."
                },
                "You look so uncomfortable.",
                "\"I'm fine.\"",
                {
                  "note": "Marcus comes out with a beer and stands between your table and the glass. \"Blocking the view for you, champ.\""
                }
              ],
              "after": "Olivia, to her sister: \"he sat curled up on his chair all dinner\" Sister: \"marcus stood there blocking the window like a bouncer lol\" Olivia: \"yeah. i saw\""
            }
          ]
        },
        {
          "you": "I'll get an Uber home and meet you after.",
          "them": [
            "No. It's my sister's birthday. You're coming.",
            "\"Barefoot.\"",
            "Barefoot. Your feet look nice, I made sure of that."
          ],
          "replies": [
            {
              "you": "(Go in. Walk fast. Look at nobody.)",
              "spark": 30,
              "them": [
                {
                  "note": "You walk through the restaurant fast, barefoot on the polished concrete. People look. Nobody stops you."
                },
                {
                  "note": "At the table you hide your feet under the tablecloth. Olivia slides one foot over and taps yours."
                },
                "See? Nobody cares."
              ],
              "after": "Olivia, to her sister: \"he walked in barefoot and nobody said anything\" Sister: \"he looked like he was going to cry\" Olivia: \"he was fine. i tapped his foot under the table and he went bright red\""
            },
            {
              "you": "My feet looking nice is not the point, Olivia.",
              "spark": 24,
              "them": [
                "What's the point then?",
                "\"The point is they're PINK.\"",
                "You let me paint them!",
                {
                  "note": "Marcus walks past. \"She's got you there, buddy.\""
                }
              ],
              "after": "Olivia, to her sister: \"he yelled the point is theyre pink on the jetty\" Sister: \"everyone heard\" Olivia: \"marcus heard. he laughed the whole way up\""
            }
          ]
        }
      ],
      "after": "Marcus offers to dive for the sneakers next weekend. Olivia says that would be so sweet of him.",
      "debrief": "Your sneakers are at the bottom of the river and your toes were pink all through dinner. You stayed for her sister's birthday anyway."
    },
    {
      "id": "c6g",
      "route": "olivia",
      "title": "The next table",
      "contact": "Olivia",
      "irl": true,
      "intro": "Dinner with Olivia, just the two of you this time. The little Italian place on James St with the carbonara. A black wrap top, wide-leg linen pants, flat gold sandals from the women's section, toes painted cherry red, mascara, a bit of bronzer and gloss. She's already at the table. At the next one, close enough to touch, are three women sharing a bottle of white. One of them is her sister. You last saw her on the boat.",
      "gaydar": 90,
      "gaydarSays": "My sister was at the next table. I'm literally never telling her where I'm going again. I will though.",
      "outfits": [
        {
          "label": "Linen shirt and chinos, gold sandals, red toes, a little makeup",
          "thinks": "Gold sandals and red toes and I kept looking under the table",
          "gaydar": -5,
          "intro": "Dinner with Olivia, just the two of you this time. The little Italian place on James St with the carbonara. A linen shirt and chinos, so half of it's normal. Then flat gold sandals from the women's section, toes painted cherry red, a little mascara and gloss. She's already at the table. At the next one, close enough to touch, are three women sharing a bottle of white. One of them is her sister. You last saw her on the boat.",
          "them": [
            {
              "note": "She lets go of the hug quickly and smooths her own top down twice."
            }
          ]
        },
        {
          "label": "Black wrap top, linen pants, gold sandals, red toes, makeup",
          "thinks": "i own that wrap top. mine doesn't sit like that",
          "them": [
            {
              "note": "She takes in the wrap top and the makeup, and her smile goes tight at the edges."
            }
          ]
        },
        {
          "label": "A black slip dress, gold heeled sandals, red toes, full makeup",
          "thinks": "slip dress and heels. Freya nearly called him she. my sister didn't even blink",
          "gaydar": 5,
          "intro": "Dinner with Olivia, just the two of you this time. The little Italian place on James St with the carbonara. A black slip dress, gold heeled sandals, toes painted cherry red, mascara, bronzer and a red lip. A couple of tables turn round when you walk in. She's already at the table. At the next one, close enough to touch, are three women sharing a bottle of white. One of them is her sister. You last saw her on the boat.",
          "them": [
            {
              "note": "At the next table, one of her sister's friends says \"oh, she's stunning\" and then stops, and looks again."
            },
            {
              "note": "Olivia's face goes hot pink and she sits down very fast."
            }
          ]
        }
      ],
      "debrief": "A whole table seemed to know before you'd said anything. However you got through the carbonara was fine. That table liked you before you opened your mouth.",
      "thinks": [
        "I told her the street. Obviously. I wanted her to say gay so I didn't have to",
        "five weeks. we haven't slept together. he hugs me at the end and pats my back. she's going to ask and i'm going to say we're taking it slow and she's going to laugh at me",
        "i liked having someone that pretty want to hang out with me. that's not fair on him. i know"
      ],
      "them": [
        {
          "note": "Olivia stands up to hug you and looks down at your feet while she does it."
        },
        "Hi! Hi. Okay. Don't look to your left.",
        {
          "note": "You look to your left. Her sister waves at you with a breadstick."
        },
        "Oh my god. Okay. That's my sister. You know that. It's a total coincidence. She's here with Annika and Freya from her work.",
        "I told her the street. I didn't tell her the restaurant. There's, like, four restaurants on this street.",
        {
          "note": "Her phone buzzes on the table. She turns it over, reads it, turns it back."
        },
        "She says hi. She says your skin's even better in this lighting.",
        {
          "note": "It buzzes again. Olivia reads it and goes pink."
        },
        "And she says... she says look at his feet. Like, in capitals."
      ],
      "replies": [
        {
          "you": "(Wave back at her sister.) Hi! Obsessed with your earrings!",
          "them": [
            {
              "note": "Her sister laughs and waves the breadstick again. Annika and Freya both turn their chairs round."
            },
            {
              "from": "Freya",
              "text": "Is that him? Liv, is that him?"
            },
            "Freya, eat your bread.",
            {
              "from": "Annika",
              "text": "Oh, your sandals. Where are those from?"
            },
            "I'm literally on a date. You're literally on my date."
          ],
          "replies": [
            {
              "you": "Why don't they just join us? Push the tables together.",
              "them": [
                "On our date?",
                {
                  "note": "Freya's already dragging her table over. The waiter helps, smiling at you the whole time. Olivia watches you watch him."
                },
                {
                  "from": "Her sister",
                  "text": "Okay. Skincare. Go. You still owe me the eye cream from the list."
                },
                {
                  "note": "Ten minutes later you're telling Annika about retinol and Freya has your foot up on her chair to look at the red. Olivia is eating her carbonara at her own end of the table."
                },
                "This is so... this is like you're on a date with them. And I'm, like, visiting."
              ],
              "replies": [
                {
                  "you": "Liv. I'm sorry. I'd rather be on a date with the waiter. I'm gay.",
                  "them": [
                    {
                      "note": "The whole table goes quiet. Then Freya says \"oh, thank god\" and Annika hits her arm."
                    },
                    "Okay. Yeah. Okay.",
                    "I'm literally... I can't even text her. She's right there.",
                    {
                      "from": "Her sister",
                      "text": "I'm right here, babe."
                    },
                    "The waiter's been looking over all night, by the way. Not at me. I checked.",
                    {
                      "note": "She takes your hand on the tablecloth and keeps eating with the other one."
                    }
                  ],
                  "gaydar": 100,
                  "spark": 4,
                  "after": "Olivia, to her sister, from the back of the Uber they're sharing: \"he said it\" Sister: \"im sitting next to you\" Olivia: \"i know im just saying it\" Sister: \"the waiter heard\" Olivia: \"he did not\" Sister: \"he gave him extra tiramisu liv\"",
                  "outcome": "told"
                },
                {
                  "you": "I'm just good at skincare. I'm still straight, Liv.",
                  "them": [
                    {
                      "from": "Annika",
                      "text": "You're straight?"
                    },
                    {
                      "note": "Annika says it to Freya, not to you. Freya presses her lips together very hard."
                    },
                    "Annika. Stop.",
                    "Okay. Sure. You're straight. Can you pass the parmesan.",
                    "She's going to say the guy thing to me in the car, by the way. She already said it in the bathroom. 'He should be on dates with guys, Liv.' So. Just so you know what's coming."
                  ],
                  "gaydar": 94,
                  "spark": 9,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Can we move tables?",
              "them": [
                "It's booked out. I tried when I saw them. Like, literally.",
                {
                  "note": "Her phone buzzes. She reads it under the table and tries not to laugh."
                },
                "She says 'he sat up when the waiter came past'. She's not wrong. You did.",
                {
                  "note": "It buzzes again."
                },
                "And now she wants to know if he's single. The waiter. For you. Not for her."
              ],
              "replies": [
                {
                  "you": "Tell her he's got really nice arms.",
                  "them": [
                    "I'm literally sending that.",
                    {
                      "note": "Her sister reads it at the next table and laughs into her wine. Freya turns round and gives you a thumbs up."
                    },
                    "Okay. So that's... yeah.",
                    "Arms. Okay. You have literally never said one thing about my arms.",
                    "This is the best carbonara in Brisbane and I'm going to finish it. And you're going to tell me about his arms."
                  ],
                  "gaydar": 97,
                  "spark": 5,
                  "outcome": "dodged"
                },
                {
                  "you": "Tell her to mind her own business.",
                  "them": [
                    "She doesn't have business. I'm her business.",
                    {
                      "note": "She puts the phone in her bag. It keeps buzzing in there right through the carbonara."
                    },
                    "I'm not angry. I just wanted one dinner where I didn't ask anyone what they thought. And I couldn't even do that.",
                    "She's going to say you should be dating guys. She'll say it really nicely. She says everything nicely."
                  ],
                  "gaydar": 92,
                  "spark": 10,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(Don't look left. Look at Olivia.) So. Carbonara?",
          "them": [
            "Yes. Okay. Yes. Carbonara. Two.",
            {
              "note": "It comes. It's very good. You talk about her boss and she laughs in the right places, and every few minutes her phone lights up and she doesn't turn it over."
            },
            {
              "note": "Then her sister gets up from the next table, comes over, crouches by Olivia's chair and rests her chin on Olivia's shoulder."
            },
            {
              "from": "Her sister",
              "text": "Hi. Sorry. I'm going, I'm going. I just have to say it."
            },
            {
              "note": "She looks at your face, your lashes, down at your red toes in the gold sandals. Then she looks at Olivia, kindly."
            },
            {
              "from": "Her sister",
              "text": "He's lovely, Liv. He's just gay."
            }
          ],
          "replies": [
            {
              "you": "(Laugh.) Hi! Your earrings are amazing.",
              "them": [
                {
                  "from": "Her sister",
                  "text": "Thank you. See?"
                },
                "See what? You can't just 'see' at me.",
                {
                  "from": "Annika",
                  "text": "Liv, he complimented her earrings while she was telling you he's gay. That's a see."
                }
              ],
              "replies": [
                {
                  "you": "Okay. She's right. I'm gay, Liv.",
                  "them": [
                    "Oh my god. Okay.",
                    "I'm literally going to... no. I don't have to tell her. She's right here.",
                    {
                      "from": "Her sister",
                      "text": "I'm right here."
                    },
                    "Okay. You should be on a date with a guy. Next time. And I'm helping you pick, because you'll pick someone with no skincare and then complain to me about it.",
                    {
                      "note": "She pushes the bread basket across to you."
                    }
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                },
                {
                  "you": "I'm not gay. I'm just very moisturised.",
                  "them": [
                    {
                      "from": "Her sister",
                      "text": "Babe. You're both."
                    },
                    {
                      "note": "Annika and Freya laugh at the next table. Olivia laughs too, then stops herself."
                    },
                    "Sorry. Sorry. That was funny though.",
                    "I just want someone who doesn't know what moisturised means. She said it first but I thought it at the door, when I saw the sandals."
                  ],
                  "gaydar": 94,
                  "spark": 7,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Your eyes go hot. You look down at the carbonara.)",
              "them": [
                {
                  "note": "It's how kindly she said it. Your eyes fill and spill over, right there over the pasta, and you can't look up."
                },
                {
                  "from": "Her sister",
                  "text": "Oh no. No, no. I said it nicely!"
                },
                "You did say it nicely. Oh my god. {name}. Hey.",
                {
                  "note": "Her sister comes round to your side and crouches by your chair. She puts the tip of her ring finger under your eye, very lightly, and dabs."
                },
                {
                  "from": "Her sister",
                  "text": "Don't rub. You'll take your mascara off. Look up at the light. There you go."
                },
                {
                  "note": "Olivia hands you her napkin. Freya and Annika drag their table over without asking anyone, and Freya pours you a glass of their white."
                },
                {
                  "from": "Freya",
                  "text": "Drink that. It's terrible. It helps."
                }
              ],
              "replies": [
                {
                  "you": "(Crying, half laughing) Why did you have to say it so nicely?",
                  "them": [
                    {
                      "from": "Her sister",
                      "text": "Because you're lovely! I said that bit first!"
                    },
                    "She says everything like that. She told me I failed my driving test like that.",
                    {
                      "note": "Olivia laughs, wet, and holds your hand on the tablecloth."
                    },
                    "Okay. New deal. You come to sister brunch, you do Annika's skin, and we find you a guy. All three. Non-negotiable.",
                    {
                      "from": "Annika",
                      "text": "Please do my skin."
                    }
                  ],
                  "gaydar": 98,
                  "spark": 2,
                  "outcome": "cried"
                },
                {
                  "you": "(Crying) I am. I'm gay. I'm sorry, Liv.",
                  "them": [
                    "No. No sorry. Oh my god.",
                    {
                      "note": "Olivia gets up and hugs you round the shoulders from behind your chair, cheek on the top of your head, in the middle of the restaurant. The waiter puts a tiramisu on the table and walks off without saying anything."
                    },
                    "I'm literally going to tell everyone how... no. I'm not telling anyone. Only her. And she was here.",
                    {
                      "from": "Her sister",
                      "text": "I was here."
                    },
                    "And you're coming to brunch with us on Sunday. Don't argue. You're going to have a better time than me, I already know."
                  ],
                  "gaydar": 100,
                  "spark": 1,
                  "after": "Olivia, on the phone to her sister twenty minutes later, after they both left the same restaurant: \"he cried\" \"i know\" \"you made him cry\" \"i said lovely first\" \"you did say lovely first\" \"is he coming sunday\" \"obviously hes coming sunday\"",
                  "outcome": "broke"
                }
              ],
              "thinks": [
                "she said it so nicely and he cried into the carbonara. she was right. and i needed her to say it, which, that's on me",
                "she fixed his mascara with her ring finger and freya poured him wine and he was one of the girls by dessert. five weeks of dates with me. twenty minutes with them"
              ]
            }
          ]
        },
        {
          "you": "Is that your sister? Wow. What a coincidence.",
          "them": [
            "So weird. So, so weird.",
            {
              "note": "She picks up the menu and holds it quite high."
            },
            "Okay, it's not a coincidence. Like, at all."
          ],
          "replies": [
            {
              "you": "Did you invite her?",
              "them": [
                "I told her the street. And the time. And what you'd probably wear. And she said 'can I just look at him for one minute', and I said no, and then she booked the table next to us.",
                "I just needed someone else to see it. Because I keep telling her it's just skincare, and then I get home and I'm like, Liv. It's not just skincare."
              ],
              "replies": [
                {
                  "you": "Then let her look. (Turn your chair to face their table.)",
                  "them": [
                    {
                      "note": "You turn your chair round, cross your legs, and point one red toe at the three of them."
                    },
                    {
                      "from": "Annika",
                      "text": "Oh my GOD."
                    },
                    {
                      "note": "Freya claps. Her sister puts her hand on her heart."
                    },
                    "Oh no. She's going to tell this at her wedding. She's going to do a speech.",
                    "Okay. That's a yes. That's a 'he's gay' in my sister's language. She'll want you at her birthday now. Sorry in advance."
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                },
                {
                  "you": "That's kind of messed up, Liv.",
                  "them": [
                    "Yeah. It is. I know.",
                    {
                      "note": "She puts the menu down. Behind her, the three of them are pretending to read the wine list."
                    },
                    "But there's three of them at that table and they all think you should be dating guys. I'm not the only one. I'm just the one who has to sit here."
                  ],
                  "gaydar": 91,
                  "spark": 12,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Go to the bathroom. Stay there a while.)",
              "them": [
                {
                  "note": "You stand at the sink and look at your mascara in the mirror for six minutes."
                },
                {
                  "note": "When you come back, her sister is sitting in your chair, eating your bread. Olivia is laughing at something she said."
                },
                {
                  "from": "Her sister",
                  "text": "Oh, hi! Sorry. I'm keeping it warm."
                }
              ],
              "replies": [
                {
                  "you": "(Sit down at her sister's table instead, with Annika and Freya.)",
                  "them": [
                    {
                      "from": "Freya",
                      "text": "Oh, he's joined us."
                    },
                    {
                      "from": "Annika",
                      "text": "Okay. Sandals. Where. Now."
                    },
                    {
                      "note": "Olivia looks over at you from her own table, between her sister and your carbonara."
                    },
                    "You swapped. You literally swapped. That's the gayest thing anyone's ever done on a date with me.",
                    "It's fine. Stay there. Annika's keeping you anyway, look at her."
                  ],
                  "gaydar": 96,
                  "spark": 4,
                  "outcome": "dodged"
                },
                {
                  "you": "I think I'm going to head off. Sorry, Liv.",
                  "them": [
                    "Oh. Okay.",
                    {
                      "from": "Her sister",
                      "text": "Was it me? It was me. Sorry."
                    },
                    "It's fine. Go. I'll get the bill.",
                    {
                      "note": "On your way out you hear Olivia say \"he should just be dating guys\" to the table, not unkindly, and her sister say \"I know, babe\"."
                    }
                  ],
                  "gaydar": 90,
                  "spark": 12,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "olivia-end",
      "route": "olivia",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "James does F45 at 5am. I said tubing mascara once and he asked if we were going to the river.",
      "title": "Olivia and James",
      "contact": "Olivia",
      "irl": true,
      "outfits": [
        {
          "label": "A black tee and jeans",
          "thinks": "Black tee and jeans, trying to blend in. Doesn't work anymore",
          "gaydar": -2,
          "intro": "Two months later. Saturday night at the same cocktail bar on James St, out with Dani. You're in a black tee and jeans and just lip oil. Olivia walks in with a guy in a Lululemon quarter-zip and an Apple Watch, with the haircut every guy in finance has. James.",
          "them": [
            {
              "note": "She clocks the plain tee and does a tiny frown, then smiles too wide."
            }
          ]
        },
        {
          "label": "Your gold sandals, red toes, a slip dress and a red lip",
          "thinks": "that red lip. she's going to ask what it is and then ask if he's seeing anyone",
          "gaydar": 1,
          "intro": "Two months later. Saturday night at the same cocktail bar on James St, out with Dani, in a black slip dress, the gold sandals, red toes and a red lip. Olivia walks in with a guy in a Lululemon quarter-zip and an Apple Watch, with the haircut every guy in finance has. James.",
          "them": [
            {
              "note": "She sees the slip dress and the red lip and squeals again, louder, without letting go of James's hand."
            }
          ]
        }
      ],
      "thinks": [
        "James looks at me the whole time. {name} spent our dates looking at my outfit",
        "first word about james is hot. about {name} it was nice. we never even slept together and i didn't mind at all lol",
        "I love running into him. Never fancied him. Don't think he ever fancied me either, so"
      ],
      "them": [
        {
          "note": "Olivia spots you, squeals and comes straight over. She hugs you, then holds you at arm's length and looks you up and down, top to toe, the way she does her sister."
        },
        "{name}! Oh my god. You look AMAZING.",
        "This is James. James, this is {name}. The one I told you about. Carbonara night.",
        "\"The carbonara guy!\" James says, and shakes your hand. \"Liv says you've got the best taste in Brisbane. What's wrong with this quarter-zip? She won't tell me.\"",
        "He's in finance. He does F45 at five in the morning.",
        "He put my bed frame together in twenty minutes without the instructions. You'd have asked if it came in white.",
        {
          "text": "My sister says hi. She literally asked me to ask if you're seeing anyone. Like, a guy. She has names. I'm texting her right now, sorry.",
          "if": "c6g=told|broke"
        },
        {
          "text": "My sister still feels bad about the restaurant, by the way. She says she said it too nicely and that's why you cried. I'm literally texting her you're fine.",
          "if": "c6g=cried"
        },
        {
          "text": "My sister says hi. And that she's 'still waiting'. I don't know what that means. I do know what it means.",
          "if": "c6g=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hi James! Okay, honestly? The quarter-zip's fine, it's the colour. Navy's washing you out, babe. Try sage. Liv, he's lovely. I'm so happy for you.",
          "them": [
            "\"Sage,\" James says, nodding very seriously. \"Noted.\"",
            "Oh my god. You just styled my boyfriend in four seconds.",
            "I'm so glad we stopped. You'd have spent every date doing my outfits. James just looks at me. The whole time. It's actually a bit much. I love it."
          ],
          "replies": [
            {
              "you": "Stop. I'm so happy for you, Liv.",
              "them": [
                "Thank you.",
                "Dani's waving at you. Go. You look way happier than at carbonara, by the way."
              ]
            },
            {
              "you": "Do you ever think about what you said at carbonara? The guy thing?",
              "them": [
                "\"All the time,\" she says. \"Have you?\"",
                {
                  "note": "You don't answer. She squeezes your arm and goes back to James."
                }
              ]
            }
          ]
        },
        {
          "you": "(Step closer to James.) James. Can I say something? I don't really know how to say it.",
          "them": [
            "\"Go for it, man,\" James says, and checks his watch.",
            {
              "note": "He's very tall and very calm and he smells expensive. You look at his quarter-zip so you don't have to look at his face."
            },
            "\"You alright? You've gone a bit pink.\""
          ],
          "replies": [
            {
              "you": "I think I let Liv go too fast. I want to take her out again. I wanted to tell you. Man to man.",
              "them": [
                "\"Man to man,\" James says, grinning, and squeezes your shoulder a bit too hard. \"Love that for you.\"",
                {
                  "note": "He turns round and calls out \"babe, your friend wants to take you out again\" to Olivia. He's laughing before he gets to the end of it."
                },
                "Oh my god. {name}. Did you just ask my boyfriend if you can date me?",
                "You said man to man in that voice. You're holding your drink with both hands.",
                "No. Oh my god. No.",
                {
                  "note": "She takes your drink off you and has a sip, the way she'd take one off Dani, and gives it back."
                },
                "Sorry. You're just not my type anymore. You'd steal my sister off me in a week.",
                "Bring a guy next time. My sister's already got a list for you."
              ],
              "after": "Olivia, to her sister, from the Uber: \"saw carbonara guy\" Sister: \"and??\" Olivia: \"he asked james if he could take me out again. man to man\" Sister: \"what did james say\" Olivia: \"love that for you. then he laughed for a whole block\""
            },
            {
              "you": "...Never mind. Your arms are very F45. Okay. Bye.",
              "gaydar": 100,
              "them": [
                "\"Thanks, man!\" James says, and flexes on purpose. \"Five am. You'd die.\"",
                {
                  "note": "You go back to Dani with your face burning. Dani hands you a drink without a word."
                },
                "Olivia, later, by the bathrooms: \"You went over there to get me back and came back blushing about his arms.\" \"I don't want to talk about it,\" you say."
              ]
            }
          ]
        },
        {
          "you": "(To Olivia, quietly) Is he wearing an Apple Watch to a cocktail bar?",
          "them": [
            "He wears it to bed. It does his sleep.",
            "You used to track your skincare. In an app. With photos.",
            "\"It's a good app,\" you say.",
            "I know. You showed me. Like three times."
          ]
        },
        {
          "you": "Hi James. Lovely to meet you. Enjoy your night.",
          "them": [
            "\"You too, man! Love the outfit.\"",
            "Olivia, quietly: \"He means that, by the way. He thinks everyone's great.\"",
            "\"That's nice,\" you say."
          ]
        }
      ],
      "after": "Olivia, to her sister, from the Uber: \"saw carbonara guy\" Sister: \"and??\" Olivia: \"he looked so happy\" Sister: \"and james?\" Olivia: \"james thinks he's great. james thinks everyone's great\"",
      "debrief": "She's with a guy who does F45 at 5am and thinks everyone's great. Whatever you said to him, he thought you were great too."
    },
    {
      "id": "zoe-1",
      "route": "zoe",
      "gaydar": 20,
      "gaydarSays": "He guessed my top was H&M first try. Brooke thinks that's a red flag.",
      "title": "Trivia",
      "contact": "Zoe",
      "outfits": [
        {
          "label": "Boy clothes: a flannel and jeans",
          "thinks": "flannel. thank god. then he knew the meat dress before brooke finished the question and she kicked me so hard i've got an actual bruise",
          "masc": true,
          "spark": 10,
          "gaydar": -5,
          "intro": "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team was one short and Brooke's work friend knew you, so here you are. You wore a flannel and jeans. You got most of the pop culture round and none of the sport."
        },
        {
          "label": "A fitted shirt and a bit of brow gel",
          "thinks": "his brows were better than mine. brooke whispered is that gel and i said no idea. it was gel. whatever he's cute, i'm still going friday",
          "intro": "Zoe's a dental nurse and does a pub trivia night with her friends Brooke and Tash every Wednesday. Her team was one short and Brooke's work friend knew you, so here you are. A fitted shirt and a bit of brow gel. You got most of the pop culture round and none of the sport.",
          "them": [
            "also brooke wants to know if your brows are done. like professionally. i said probably lol"
          ]
        }
      ],
      "thinks": [
        "ok he knew my top was h&m from across the table. brooke goes zo. i said shut up. i still want to kiss him which is embarrassing for me",
        "I asked him out with Brooke literally reading over my shoulder. if he's gay I've asked a gay guy for a drink in front of my whole trivia team and I'll have to find a new pub"
      ],
      "them": [
        "hey its zoe from trivia!! brooke gave me your number hope thats ok",
        "you basically won pop culture on your own lol. the meat dress question??",
        "also how did you know my top was h&m. like how"
      ],
      "replies": [
        {
          "you": "Hi Zoe! Yeah of course it's ok. I don't know, I just recognised it. I'm in there way too much.",
          "gaydar": 25,
          "them": [
            "lol same",
            "ok random but do you want to get a drink sometime? just us not trivia",
            "brooke told me to ask. shes literally sitting next to me"
          ],
          "replies": [
            {
              "you": "Yeah, I'd like that. Somewhere quiet?",
              "them": [
                "yay ok. theres a wine bar in paddo i like",
                "friday?"
              ]
            },
            {
              "you": "Haha hi Brooke. Yes. Friday?",
              "them": [
                "she says hi",
                "ok friday 😊"
              ]
            }
          ]
        },
        {
          "you": "Ha, lucky guess! You looked great in it though.",
          "them": [
            "😊 thanks",
            "want to get a drink sometime? just us?"
          ],
          "replies": [
            {
              "you": "I'd really like that.",
              "them": [
                "friday? paddington?"
              ]
            },
            {
              "you": "Only if Brooke's not coming.",
              "them": [
                "lol she would if i let her",
                "just us. theres a place in paddington, friday?"
              ]
            }
          ]
        },
        {
          "you": "It was Franc Fernandez, by the way. And yours is the linen one from the new range. Sorry, that's a weird thing to know.",
          "gaydar": 25,
          "them": [
            "lol thats so specific",
            "brooke wants to know if youre a stylist",
            "anyway do you want to get a drink? just us. friday maybe?"
          ]
        }
      ],
      "after": "Zoe, to Brooke: \"i asked him\" Brooke: \"AND\" Zoe: \"friday\" Brooke: \"told u\" Zoe: \"is it weird he knew my top was h&m\" Brooke: \"bit weird\" Brooke: \"wait which top\""
    },
    {
      "route": "zoe",
      "path": "masc",
      "id": "zoe-m2",
      "title": "Wardrobe crisis",
      "contact": "Zoe",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "He said 'they all look nice'. Useless. Perfect. Normal boyfriend energy.",
      "intro": "A month in. Zoe's place in Toowong on a Sunday. Jeans and a tee. She's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed.",
      "them": [
        "Okay, help. I have nothing to wear. Literally nothing. Brooke's uni friends are all so pretty.",
        {
          "note": "She holds up a floral sundress and a black top."
        },
        "This one or this one?"
      ],
      "replies": [
        {
          "you": "They both look nice.",
          "masc": true,
          "them": [
            "That's such a boyfriend answer.",
            "Useless. Okay. Pick one. You have to."
          ],
          "replies": [
            {
              "you": "The black one. You look good in black.",
              "masc": true,
              "spark": 86,
              "outcome": "kept",
              "them": [
                "Really?",
                {
                  "note": "She puts it on. You say she looks good. She does."
                },
                "Okay. Black. You're not allowed to change your mind."
              ],
              "after": "Zoe, to Brooke: \"he picked the black top\" Brooke: \"good choice\" Zoe: \"he said i look good in black. just that. no essay\""
            },
            {
              "you": "Okay fine. The floral, but swap the sandals for your platforms. And a gold hoop.",
              "spark": 55,
              "outcome": "slipped",
              "them": [
                {
                  "note": "She does what you say. It's perfect. She stares at herself in the mirror."
                },
                "How do you do that.",
                "Like seriously, how."
              ],
              "after": "Zoe, to Brooke: \"he styled me in 4 seconds\" Brooke: \"thats a red flag or a green flag\" Zoe: \"i dont know brooke\""
            }
          ]
        },
        {
          "you": "Neither. Wear the jeans and my shirt.",
          "them": [
            "Your shirt?",
            {
              "note": "You hold up your flannel. She laughs, then tries it on."
            },
            "Okay, that's actually cute."
          ],
          "replies": [
            {
              "you": "It looks better on you. Keep it.",
              "masc": true,
              "spark": 84,
              "outcome": "kept",
              "them": [
                "I'm keeping it forever. You're never getting it back.",
                {
                  "note": "She kisses you, still half in the flannel."
                }
              ],
              "after": "Zoe, to Brooke: \"im wearing his flannel to yours\" Brooke: \"cute\" Zoe: \"i know\""
            },
            {
              "you": "Knot it at the waist. No. Higher. There.",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                {
                  "note": "You tie it for her. It looks great."
                },
                "Okay you're good at this. Weirdly good."
              ],
              "after": "Zoe, to Brooke: \"he knotted his own flannel on me like a stylist\" Brooke: \"lol\" Zoe: \"dont lol\""
            }
          ]
        }
      ],
      "debrief": "Not knowing what to say about clothes is fine. So is knowing exactly."
    },
    {
      "route": "zoe",
      "path": "masc",
      "id": "zoe-m3",
      "title": "Brooke's barbecue",
      "contact": "Zoe",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He stood at the barbecue with Jayden and talked about tyres. Brooke owes me twenty bucks.",
      "intro": "Brooke's barbecue. Board shorts and a tee. Zoe's in your flannel, or the black top, and she won't let go of your hand. Brooke's boyfriend Jayden is on the tongs.",
      "them": [
        {
          "note": "Jayden hands you a beer and talks to you about tyres for ten minutes. You nod in the right places.",
          "if": "zoe-m2=kept"
        },
        {
          "note": "Brooke looks at Zoe's outfit, then at you, and says \"did HE do that?\" Zoe says nothing.",
          "if": "zoe-m2=slipped"
        },
        "\"So,\" Brooke says, sitting down with her plate. \"Are you two official yet or what? Zo won't tell me.\"",
        {
          "note": "Zoe looks at you."
        }
      ],
      "replies": [
        {
          "you": "Yeah. We're official.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "\"Finally,\" Brooke says. \"Jayden, they're official.\"",
            "\"Nice one,\" Jayden says, flipping a sausage.",
            {
              "note": "Zoe sits on your lap for the rest of the afternoon."
            }
          ],
          "after": "You're Zoe's boyfriend. You go to trivia every Wednesday. You still win pop culture and lose sport. Nobody minds."
        },
        {
          "you": "(Shrug.) We're having fun.",
          "spark": 55,
          "outcome": "drift",
          "them": [
            "\"Fun,\" Brooke says. \"Cool.\"",
            {
              "note": "Zoe gets up to get more salad and stays in the kitchen with Brooke for a long time."
            }
          ],
          "after": "Zoe breaks up with you in the car a week later. \"I want someone who says yes when Brooke asks.\" Two months later she's with a mechanic called Kyle. He says yes to everything."
        },
        {
          "you": "Brooke, before that, where is that dress from? I need to know.",
          "them": [
            "\"Oh my god,\" Brooke says. \"Zo. He's...\"",
            "Don't, Brooke.",
            "\"I'm just saying! It's a good dress!\"",
            {
              "note": "Zoe laughs, a bit tired. She pats your knee like you're a friend."
            },
            "Babe, you'd be so much happier with a boyfriend. Like a boy. Brooke knows like four."
          ],
          "spark": 25,
          "outcome": "drift",
          "after": "Brooke really does know four. You go out with the second one. Zoe and Brooke want updates after every date."
        }
      ],
      "debrief": "Brooke asked because Zoe wouldn't. The only person you owe an answer is the one you're seeing."
    },
    {
      "id": "zoe-2",
      "route": "zoe",
      "gaydar": 55,
      "gaydarSays": "He went through my whole wardrobe and I just let him. Brooke says that's not a normal fourth date.",
      "title": "Her wardrobe",
      "contact": "Zoe",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans, a tee and a little lip balm",
          "thinks": "tinted balm on a sunday at mine. pinker than his lips. brooke's going to ask and i'm going to lie",
          "gaydar": -5,
          "intro": "A month in. Zoe's place in Toowong on a Sunday. Jeans, a tee, a bit of tinted balm. She's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed.",
          "them": [
            {
              "note": "She sees the lip balm and laughs once, through her nose, at nothing."
            }
          ]
        },
        {
          "label": "Shorts, a crop tee and your toenails painted lilac",
          "thinks": "lilac toes and shorts shorter than mine and I moved right down the end of the bed. he didn't notice, he was already in my wardrobe",
          "gaydar": 5,
          "intro": "A month in. Zoe's place in Toowong on a Sunday. Short shorts, a crop tee, and lilac toenails you painted last night \"just to see\". Zoe's trying to decide what to wear to Brooke's barbecue next week and she's thrown half her wardrobe on the bed. She sees your toes and stops.",
          "them": [
            {
              "note": "\"Are your toes... lilac?\" she says. \"Since when?\" \"Since last night,\" you say. She says \"cute\" in a very small voice."
            },
            {
              "note": "She sits on the far edge of the bed, as far from you as the bed goes."
            }
          ]
        }
      ],
      "thinks": [
        "We were in my room with the door shut for two hours and he spent it in my wardrobe. Brooke's going to ask if anything happened. Nothing happened, he picked my hoops",
        "yeah he's gay. fuck",
        "I shaved my legs for today. Properly, the backs of the knees and everything. He was off the chair before I'd finished saying barbecue and he looked at the hem of that dress more than he's ever looked at my legs"
      ],
      "them": [
        "Okay, help. I have nothing to wear. Literally nothing. Brooke's barbecue is going to be all her uni friends and they're all so pretty.",
        {
          "note": "Before she's finished the sentence you're off the chair and holding up a floral sundress."
        },
        "Oh. Okay. You're really into this."
      ],
      "replies": [
        {
          "you": "This one, with your white platforms and the little gold hoops. Trust me. It's giving effortless but you tried.",
          "gaydar": 60,
          "them": [
            "It's giving what?",
            {
              "note": "She tries it on and turns side to side in the mirror for a long time."
            },
            "Okay yeah. That's actually really good. How do you even know that?",
            "Actually don't answer that. Um. Do you want to try something on? Like as a joke?"
          ],
          "replies": [
            {
              "you": "As a joke? Hand me the platforms. I want to see if I can walk in them.",
              "gaydar": 70,
              "them": [
                {
                  "note": "You can walk in them. Pretty well, actually. Zoe watches you go to the door and back."
                },
                "Okay, that's annoying. You're better in them than me.",
                "I don't know how I feel about that. Wear them to Brooke's. I'm kidding. I think."
              ]
            },
            {
              "you": "Ha, nah, I'm alright. You look really good though.",
              "them": [
                "Thanks. You're so good at this. Brooke usually does this for me.",
                {
                  "note": "She kisses you on the cheek and goes to look for her hoops."
                }
              ]
            }
          ]
        },
        {
          "you": "Wait, where'd you get this skirt? I've been looking for this one for ages.",
          "gaydar": 65,
          "them": [
            "For who?",
            {
              "note": "Neither of you says anything for a second."
            },
            "No, that's fine! That's fine. You can borrow it if you want? Is that weird. Sorry. I'll stop."
          ],
          "replies": [
            {
              "you": "For you. I meant for you. Like, I saw it and thought of you.",
              "them": [
                "Right. For me.",
                "Okay.",
                {
                  "note": "She hangs it back up and doesn't look at you for a bit."
                }
              ]
            },
            {
              "you": "...Can I actually borrow it?",
              "gaydar": 75,
              "them": [
                {
                  "note": "She hands it to you. She doesn't say anything. She just watches you hold it up against yourself in the mirror."
                },
                "\"It suits you,\" she says eventually. \"Like, really suits you.\"",
                "\"Don't tell Brooke.\""
              ]
            }
          ]
        },
        {
          "you": "I'm just helping. You were going to wear the jumpsuit.",
          "them": [
            "What's wrong with the jumpsuit?",
            {
              "note": "You don't say anything."
            },
            "Okay. Brooke said it was bad too.",
            "You sound exactly like her right now. Like exactly. It's freaking me out a bit."
          ]
        }
      ],
      "after": "Zoe, to Brooke: \"he went through my wardrobe today\" Brooke: \"cute??\" Zoe: \"he picked my whole outfit for saturday. its really good\" Brooke: \"so whats the problem\" Zoe: \"idk\" Zoe: \"nothing. its fine\""
    },
    {
      "id": "zoe-quiz",
      "route": "zoe",
      "title": "Trivia night",
      "contact": "Zoe",
      "irl": true,
      "gaydar": 60,
      "spark": 38,
      "gaydarSays": "He got every pop culture question and none of the sport. Again. Tash wants him on the team permanently. For the pop culture.",
      "intro": "Wednesday trivia at the pub with Zoe, Brooke and Tash. You're on the team now. You wore a fitted shirt and a bit of brow gel. Round four is sport.",
      "thinks": [
        "tash said you're the boy and we all looked at him and he had NOTHING. and i've been telling brooke for weeks he's just shy",
        "brooke says no sport plus every pop culture answer means gay and i said that's so offensive brooke. then i sat there for three rounds going yeah ok",
        "honestly I don't want him staying over anymore. I keep saying I've got an early shift. I don't have an early shift, the clinic doesn't open till nine"
      ],
      "them": [
        "\"Okay,\" Tash says. \"Sport. {name}, it's on you, you're the boy.\"",
        {
          "note": "Everyone looks at you. The question is about a rugby league grand final."
        },
        "Babe? Any idea?",
        {
          "note": "When you don't know, Zoe says \"it's fine\" and turns to Tash, and doesn't turn back."
        }
      ],
      "replies": [
        {
          "you": "...The one with the horses?",
          "them": [
            "\"It was a cricket question,\" Brooke says gently.",
            {
              "note": "Tash laughs so hard she has to put her drink down."
            },
            "It's okay. You got all of pop culture. You're like our gay best friend at trivia."
          ],
          "replies": [
            {
              "you": "I'm right here, Zoe.",
              "spark": 40,
              "them": [
                "I know! I didn't mean it like that.",
                "\"She did a bit,\" Brooke says.",
                {
                  "note": "Zoe holds your hand under the table and pats the back of it twice."
                }
              ],
              "after": "Zoe, to Brooke: \"why did i say gay best friend\" Brooke: \"because it's true\" Zoe: \"brooke\" Brooke: \"he didn't even know it was cricket zo\""
            },
            {
              "you": "Gay best friend? I'll take it. Next round's music.",
              "spark": 30,
              "them": [
                "\"YES,\" Tash says. \"Music round. He's going to destroy it.\"",
                {
                  "note": "You destroy it. Zoe high-fives you across the table and goes back to her drink."
                }
              ],
              "after": "Zoe, to Brooke: \"he took the gay best friend thing really well\" Brooke: \"too well\" Zoe: \"i know brooke\""
            }
          ]
        },
        {
          "you": "No idea. I'm useless at sport. Ask me about the Met Gala.",
          "them": [
            "\"That's literally the next round,\" Tash says.",
            {
              "note": "The next round is fashion. You get ten out of ten. A guy at the next table claps."
            },
            "Okay, a guy just clapped for you."
          ],
          "replies": [
            {
              "you": "(Wave at him.)",
              "spark": 28,
              "them": [
                {
                  "note": "He waves back. Brooke and Tash look at each other."
                },
                "{name}. You just waved at a guy. On a date with me.",
                "\"Zo,\" Brooke says. \"He's waving at him again.\""
              ],
              "after": "Zoe, to Brooke: \"he waved at the guy at the next table\" Brooke: \"the guy was cute\" Zoe: \"thats not helpful brooke\""
            },
            {
              "you": "(Don't look.) Who's getting the next round?",
              "spark": 42,
              "them": [
                "Me. Stay there, superstar.",
                {
                  "note": "She kisses the top of your head on the way to the bar."
                }
              ],
              "after": "Zoe, to Brooke: \"he got 10 out of 10 on fashion\" Brooke: \"of course he did\" Zoe: \"i kissed him on the head like he's 12\""
            }
          ]
        }
      ],
      "debrief": "Being good at one round and bad at another is what trivia is for."
    },
    {
      "id": "zoe-lightning",
      "route": "zoe",
      "title": "Lightning round",
      "contact": "Zoe",
      "irl": true,
      "gaydar": 63,
      "gaydarSays": "Brooke said tickle the sport answers out of him. He doesn't know any sport answers.",
      "intro": "Saturday night at Zoe's place in Toowong, just the two of you. She's downloaded a trivia app \"to train you on sport\". You're on her couch with your feet in her lap. Your toes are still lilac from the weekend.",
      "thinks": [
        "his feet were in my lap for like an hour. that's the closest we've been all week and it was his feet",
        "Saturday night, just us, my place, and he didn't try anything. Six weeks and he's never tried anything, not once. I'm not complaining exactly. I don't know what I'm doing",
        "brooke texted how was it and i typed it was like a sleepover with my gay friend and deleted it and put good x. she sent the eyes. i put my phone face down"
      ],
      "them": [
        {
          "note": "She sits cross-legged facing you with a cushion in her lap, not leaning on you."
        },
        "Okay. Brooke says you're our weak link on sport. So. Lightning round. Ten questions.",
        "You get one wrong, I get five seconds on your feet.",
        "Brooke's idea. I'm like, the messenger.",
        {
          "note": "She wiggles her fingers an inch from your soles."
        }
      ],
      "replies": [
        {
          "you": "Deal. I'll get them all right.",
          "them": [
            "You won't.",
            "Question one. How many players in a rugby union team?"
          ],
          "replies": [
            {
              "you": "Eleven? No. Fifteen. Fifteen.",
              "them": [
                "Correct?? Brooke said you'd say eleven.",
                "Question two. What colour jersey does the leader of the Tour de France wear?",
                {
                  "note": "You say pink. It's yellow. Her fingers go straight for your arches."
                }
              ],
              "replies": [
                {
                  "you": "(Hold it for the five seconds.)",
                  "them": [
                    {
                      "note": "One. Two. You get to four before your toes curl. You don't make a sound. She's impressed, and a bit annoyed."
                    },
                    "Brooke said you'd crack on question two. I'm telling her she was wrong. She's going to be so mad.",
                    "Brooke's going to ask what size your feet are, by the way, and I'm going to have to say smaller than her."
                  ],
                  "gaydar": 62,
                  "spark": 50
                },
                {
                  "you": "(Squeal at 'two'.)",
                  "them": [
                    {
                      "note": "You squeal at two. She does all five anyway, counting out loud, and lets go exactly on five."
                    },
                    "Rules are rules. And you're already getting question three wrong in your head, I can see it.",
                    {
                      "note": "You get eight out of ten wrong. By the end she's barely reading the questions."
                    }
                  ],
                  "gaydar": 68,
                  "spark": 30
                }
              ]
            },
            {
              "you": "Thirteen?",
              "them": [
                "Wrong! Fifteen. Brooke's going to love this.",
                {
                  "note": "Five seconds. She counts out loud, does every one of them, and lets go on five like it's the law."
                },
                "Question two."
              ],
              "replies": [
                {
                  "you": "Zo, wait. Can I have a break? Just one.",
                  "them": [
                    "Brooke says no breaks. I'm Brooke tonight.",
                    "Okay fine. One break.",
                    {
                      "note": "She lets go and just holds your feet, thumbs on the lilac."
                    },
                    "You're actually so cute when you're losing."
                  ],
                  "gaydar": 64,
                  "spark": 44
                },
                {
                  "you": "Forget the questions. Just do it.",
                  "them": [
                    "...What?",
                    "Are you asking me to tickle you? Like, with no trivia?",
                    {
                      "note": "You nod. She texts Brooke \"he asked for it without trivia\", puts the phone down, and does it until you're crying laughing and gasp stop. She stops straight away."
                    },
                    "Brooke says oh no. And I'm like why oh no, and she's like you know why."
                  ],
                  "gaydar": 76,
                  "spark": 18
                }
              ]
            }
          ]
        },
        {
          "you": "No way. Brooke doesn't get to decide what happens to my feet.",
          "them": [
            "Okay so Brooke said you'd say that. Like word for word.",
            "She said if he says that, just go.",
            {
              "note": "She just goes."
            }
          ],
          "replies": [
            {
              "you": "Zo! Stop! Stop!",
              "them": [
                {
                  "note": "She stops the second you say it and holds her hands up."
                },
                "I'm sorry! Brooke made me! I mean she didn't. I wanted to.",
                "Okay but you still have to do the quiz. That was the warm-up."
              ],
              "gaydar": 64,
              "spark": 40
            },
            {
              "you": "(Grab her ankle and do it back.)",
              "them": [
                {
                  "note": "You grab her foot. She's ticklish too, and she shrieks, and for about a minute it's a war on the couch with cushions everywhere."
                },
                {
                  "note": "She wins. She's stronger than you. She's sitting on your shins and you're laughing too hard to talk, and she looks at your face and stops by herself."
                },
                "Okay. I win. I'm telling Brooke I won.",
                "You fight like Tash, by the way. All slaps."
              ],
              "gaydar": 62,
              "spark": 46
            }
          ]
        }
      ]
    },
{
  "id": "zoe-feet",
  "route": "zoe",
  "gaydar": 75,
  "gaydarSays": "We came fourth. Brooke blames your feet. I sort of do too.",
  "title": "Trivia at Brooke's",
  "contact": "Zoe",
  "irl": true,
  "intro": "Five weeks in. Zoe's trivia team is practising at Brooke's place, because it's a shoes-off house and Brooke's very serious about trivia. You're still wearing the lilac from the weekend. Brooke's brother Tyler is here. He's been texting Zoe \"u up\" since before you were on the scene.",
  "thinks": [
    "he did the lilac himself and it's neater than mine. whatever, i'm not thinking about it",
    "tyler's arms. sorry. that's all i've got from tonight",
    "the noise he made. I've never got a noise like that out of him and I've tried. he just says night Zo and rolls over to face the wall"
  ],
  "them": [
    {
      "note": "You leave your sneakers by the door with everyone else's. Brooke looks at your toes and raises both eyebrows at Zoe."
    },
    "He did them himself. They're good, right?",
    "And look how small they are. Brooke, they're smaller than yours.",
    {
      "note": "Tyler's on the floor with his back against the couch. You sit on the couch above him. Your feet end up right next to his shoulder."
    },
    "\"Zo,\" he says, without turning round. \"Your boyfriend's feet are in my ear.\"",
    "Then move, Tyler.",
    "\"Nah. I like it here.\" Brooke reads out the first music question. Tyler reaches up and gets hold of your foot."
  ],
  "replies": [
    {
      "you": "(Try to answer the question anyway.) It's... it's Dua... Lipa... HA. Stop it!",
      "spark": 20,
      "them": [
        {
          "note": "He's running his thumb up and down your sole. You can't get the name out. You're laughing and trying to pull your foot back and he just holds on."
        },
        "\"Dua what?\" Tyler says. \"Come on, buddy, we need the points.\"",
        "\"Time's up,\" Brooke says. \"Zero. Tyler, give him his foot back.\"",
        {
          "note": "He does it once more, right under your toes, and you squeal so loudly Brooke's dog leaves the room."
        },
        "\"STOP. Stop. Please.\"",
        {
          "note": "He stops and lets go. \"Only because you said please,\" he says."
        },
        {
          "note": "Tash is laughing so hard she's lying on the rug. Zoe's laughing too, but she's also looking at Tyler for a bit too long."
        }
      ]
    },
    {
      "you": "(Yank your foot back and sit on it.)",
      "spark": 26,
      "gaydar": 72,
      "them": [
        {
          "note": "You sit on both feet. Now you're cross-legged on Brooke's couch with a cushion on your lap."
        },
        "\"Aw,\" Tyler says. \"He's hiding them.\"",
        "\"Tyler, leave him alone,\" Tash says, grinning.",
        {
          "note": "He waits. Two questions later your leg's gone dead and you have to stretch it out. He grabs it before it even touches the floor."
        },
        "\"Gotcha.\"",
        {
          "note": "You're laughing and squirming and saying \"no no no\" all the way through the sport round. Zoe's trying to write answers down and keeps missing because she's laughing."
        },
        "\"Stop,\" you finally say, properly. He stops straight away.",
        "\"You're no fun,\" he says. Then to Zoe: \"Your boyfriend's no fun, Zo. I'm fun.\""
      ]
    },
    {
      "you": "Tyler. If you tickle me, I'll scream. I mean it.",
      "spark": 14,
      "gaydar": 78,
      "them": [
        "\"Deal,\" Tyler says.",
        {
          "note": "He tickles you. You scream, really high, and Brooke's neighbour bangs on the wall."
        },
        "\"Okay, he wasn't joking,\" Tyler says, and lets go, laughing. \"Brooke, your neighbour hates me.\"",
        "\"Everyone hates you,\" Brooke says. \"Next question.\"",
        {
          "note": "Zoe's squeezing your hand. When you look over, she's still smiling at Tyler."
        }
      ]
    }
  ],
  "after": "Tash, to Brooke, after: \"did u hear the noise he made\" Brooke: \"my neighbour heard it\" Tash: \"lmao\" Brooke: \"also tyler walked zoe to her car\" Brooke: \"took 20 min. she was parked out the front\"",
  "debrief": "You said stop and he stopped. The embarrassment goes quicker than it feels like it will."
},
    {
      "id": "zoe-ambush",
      "route": "zoe",
      "gaydar": 78,
      "irl": true,
      "title": "Tash's picnic",
      "contact": "Zoe",
      "gaydarSays": "Tyler had your shoes off before I'd put my drink down. In New Farm Park, {name}.",
      "intro": "A week after trivia at Brooke's. Tash's birthday picnic in New Farm Park, on a big rug under the fig trees. You wore white sneakers and ankle socks and you're keeping them on. Tyler's here, lying on the rug in a singlet. He's been looking at your sneakers since you sat down.",
      "thinks": [
        "ankle socks at a picnic so nobody'd see the lilac and then he lied about it on brooke's rug. babe",
        "his feet are smaller than mine. I'm a 39. what am I meant to do with that",
        "brooke goes so that's it then and i said yeah he's gay. out loud. i thought i'd cry and i didn't, i just wanted more cake"
      ],
      "them": [
        {
          "note": "Zoe's next to you, leaning on your shoulder. Brooke's cutting the cake. Tash is opening presents."
        },
        "\"Zo,\" Tyler says. \"He's wearing shoes on the rug.\"",
        "It's a picnic rug, Tyler. You're allowed shoes on a picnic rug.",
        "He's shy about his feet. They're so small. He hates it when I say that.",
        "\"Brooke's rug. Brooke's rules. Right, Brooke?\"",
        "\"Shoes off on my rug,\" Brooke says, not looking up from the cake. \"Always.\"",
        "\"I'm fine,\" you say. \"They're clean. I'm keeping them on.\"",
        "\"Is it still lilac under there?\"",
        "\"No.\"",
        "\"Liar.\"",
        {
          "note": "He rolls over and grabs your ankle. You try to tuck your foot under you. He's already got it in his lap and he's pulling the laces like he does this every day."
        },
        "\"Tyler! No! I said I'm keeping them on!\"",
        "\"Brooke, grab the other one.\"",
        {
          "note": "Brooke puts the cake knife down, sits on your other ankle and starts on the laces. You kick. Tash grabs your shoulders from behind and holds you back on the rug, laughing into your hair. Zoe's moved out of the way. She's watching with her hand over her mouth."
        },
        {
          "note": "Both sneakers come off. Then Tyler peels your sock off from the toe end, slowly. Lilac. Then the other one. Lilac."
        },
        "\"LIAR!\" Brooke says. \"Zo, he lied on my rug.\"",
        "\"Penalty,\" Tyler says. \"Brooke, you take that one.\"",
        {
          "note": "They both start at once."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at the fig tree. Do not laugh in a public park.)",
          "them": [
            {
              "note": "You stare up into the fig tree. Tyler's thumbs go up the arch. Brooke goes straight under the toes, quick and light. Your legs go rigid."
            },
            "\"He's doing the face,\" Tash says above you. \"He's doing the trying face.\"",
            "\"Tash, get in on it,\" Tyler says.",
            {
              "note": "Tash lets go of your shoulders and takes half of Brooke's foot. A family on the next rug has stopped eating to watch."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. Hold it. Hold it.)",
              "them": [
                {
                  "note": "You hold it. You don't know how. Your eyes water and the lilac toes curl so hard they cramp, but nothing comes out of your mouth."
                },
                "\"How is he not laughing,\" Brooke says. \"Tyler you're doing it wrong.\"",
                "\"Zo,\" Tyler says. \"Your turn. You know him best. Find a spot.\"",
                {
                  "note": "Zoe looks at your foot. She looks at you. She's biting her lip."
                }
              ],
              "replies": [
                {
                  "you": "(Look at her.) Zo. Don't. Please.",
                  "outcome": "held",
                  "spark": 30,
                  "them": [
                    {
                      "note": "She looks at you for a second. Then she reaches over and pushes Tyler's hands off."
                    },
                    "Okay, that's enough. He won. Give him his shoes.",
                    "\"He didn't win, Zo, he just...\"",
                    "Tyler. Shoes.",
                    {
                      "note": "He gives them back. Zoe brushes the grass off your feet and helps you put your socks on, one then the other. Brooke watches her do it with her eyebrows right up."
                    },
                    "\"Whatever,\" Tyler says, and goes to get a beer. He sits on the other side of the rug for the rest of the afternoon."
                  ],
                  "after": "Brooke, to Tash: \"zoe put his SOCKS on for him\" Tash: \"aww\" Brooke: \"and he didnt even laugh\" Brooke: \"tyler's been sulking at the esky for an hour\""
                },
                {
                  "you": "(Don't say anything. Keep holding.)",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "Zoe crawls round and goes for the back of your heel, just above the ankle."
                    },
                    {
                      "note": "You last about a second. Then you shriek, loud enough that the family next to you look over, and you're giggling with all four of them going at once."
                    },
                    "\"ZO!\" Brooke screams. \"You killed him!\"",
                    "I found it in the car once. When he had his feet on the dash.",
                    {
                      "note": "They stop when you finally get \"stop\" out. Zoe high-fives Tyler."
                    }
                  ],
                  "after": "Tash, to the group chat: \"[video] zoe found his spot\" Brooke: \"the SHRIEK\" Tyler: \"zo knew the whole time\" Brooke: \"u high fived tyler\" Zoe: \"so?\""
                }
              ]
            },
            {
              "you": "(It's too much. You shriek.)",
              "them": [
                {
                  "note": "You break. A shriek, then giggles, and you're rolling round the rug trying to get your feet back and getting nowhere."
                },
                "\"There it is!\" Tyler says.",
                {
                  "note": "The family on the next rug is laughing now too. Their little girl is copying the noise you're making. Brooke's filming with one hand."
                },
                "Oh my god. Oh my god, {name}."
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I lied! It's lilac! It's lilac!",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "They stop and let go. Tyler holds his hands up."
                    },
                    "\"Thank you,\" Tyler says. \"Was that so hard?\"",
                    {
                      "note": "You curl up with your feet under Zoe's cardigan. You're red to your ears. The little girl on the next rug waves at you."
                    },
                    "You lied on Brooke's rug. She's never going to let that go.",
                    {
                      "note": "She's still giggling. Tyler passes her a beer without asking what she wants. It's the one she likes."
                    }
                  ],
                  "after": "Brooke, to Tash: \"IT'S LILAC IT'S LILAC\" Tash: \"that little girl did the noise for an hour\" Tash: \"did u see tyler got zoe the right beer\" Brooke: \"yep\""
                },
                {
                  "you": "(Red, giggling) Stop! Stop it! All of you!",
                  "outcome": "cracked",
                  "spark": 16,
                  "them": [
                    {
                      "note": "Tash lets go of your shoulders first. Everyone else lets go a second later."
                    },
                    "\"Okay! Hands off!\" Tyler says.",
                    {
                      "note": "You pull your feet under you and hug your knees. There's grass in your hair."
                    },
                    "Are you okay? You went really, really high.",
                    {
                      "note": "Then Brooke does the noise, and Zoe laughs so hard she puts her head on Tyler's shoulder for a second. She takes it off again quickly."
                    }
                  ],
                  "after": "Zoe, to Brooke, that night: \"i feel bad\" Brooke: \"you laughed into tyler\" Zoe: \"for ONE SECOND\" Brooke: \"for like five\" Zoe: \"ok whatever\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they've even started.)",
          "them": [
            {
              "note": "You're gone straight away. You squeal, you kick, you giggle into Tash's knees while she holds your shoulders down."
            },
            "\"Oh, he's SO bad!\" Brooke says. \"I barely touched him!\"",
            "\"Everyone in,\" Tyler says. \"Tash. Zo. Come on.\"",
            {
              "note": "Tash takes a foot. Then Zoe, laughing, kneels down and takes the toes on the other one. Four of them. The family next door has given up on their lunch entirely."
            },
            "You're so ticklish! How did I not know you were this ticklish?"
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please stop! Please!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie on the rug panting, arms over your face."
                },
                "\"He said please,\" Tyler says. \"Three times. Brooke, did you get that?\"",
                "\"I got all three.\"",
                {
                  "note": "Then Zoe picks your foot up again, gently. Just holding it. Grinning at you over it."
                },
                "Can I have one more go? Just me. Ten seconds, I'll count."
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! Zo, no. I'm done.",
                  "outcome": "begged",
                  "spark": 12,
                  "them": [
                    "Okay! Okay. Fine.",
                    {
                      "note": "You sit cross-legged with both feet tucked under you for the rest of the picnic. Tyler's sitting on your socks."
                    },
                    "\"Want them back? Come and get them, princess.\"",
                    {
                      "note": "You don't go and get them. Zoe goes and gets them. It turns into a whole thing with Tyler, rolling on the rug. She's laughing the whole time. You hold your sneakers and wait."
                    }
                  ],
                  "after": "Tash, to Brooke: \"he begged three times\" Brooke: \"and then zoe wrestled tyler for the socks\" Tash: \"for ages\" Brooke: \"who won\" Tash: \"zoe was on top at the end\" Brooke: \"TASH\""
                },
                {
                  "you": "(Still giggling) ...Fine. Ten. And you count properly, Zo.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 82,
                  "them": [
                    {
                      "note": "The whole rug counts down from ten. Zoe goes for the back of your heel. You scream laughing from 'ten'."
                    },
                    {
                      "note": "At 'one' Tyler and Brooke and Tash all pile back in for a bonus round. You're laughing too hard to complain. They stop when you finally squeak \"stop\"."
                    },
                    "\"He asked for it!\" Tyler says. \"Literally asked!\"",
                    "Your face is so red.",
                    {
                      "note": "She's sitting back on her heels, looking at you lying there with lilac toes in the air. Tyler sits down next to her and offers her the last bit of cake. She eats it off his fork."
                    }
                  ],
                  "after": "Brooke, to Tash: \"[video] HE ASKED FOR MORE\" Tash: \"zoe ate cake off tyler's fork\" Brooke: \"i saw\" Tash: \"like right in front of him\" Brooke: \"he was upside down on the rug he didnt see anything\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let them.)",
              "them": [
                {
                  "note": "You stop struggling. You lie flat on the rug, laughing up into the fig tree, lilac toes wriggling in four people's hands."
                },
                "\"He's given up!\" Tash says. \"He's just lying there!\"",
                "\"He loves it,\" Tyler says. \"Zo. He loves this.\"",
                {
                  "note": "It goes on. They take turns. Tyler pulls up a bit of grass and does it between your toes. You're crying laughing."
                },
                {
                  "note": "After a while Zoe stops. She sits back on her heels and just watches you."
                },
                "{name}. You can say stop, you know."
              ],
              "replies": [
                {
                  "you": "(Gasping) Stop! Stop. Okay. Stop.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 82,
                  "them": [
                    {
                      "note": "Every hand comes off at once. Brooke's is last, by about half a second."
                    },
                    "\"Three minutes,\" Brooke says. \"I timed it for the group chat.\"",
                    {
                      "note": "Tyler pats your bare foot twice. \"Good effort, champ.\""
                    },
                    {
                      "note": "Then he gets up and stretches. \"Zo, ice cream? Van's over there.\""
                    },
                    {
                      "note": "She looks at you, lying there. Then she goes with him. They're gone a while."
                    }
                  ],
                  "after": "Zoe, to Brooke, that night: \"he was so happy brooke\" \"like just lying there laughing\" \"idk. it was weird to watch\" Brooke: \"and tyler?\" Zoe: \"we got ice cream\" Brooke: \"for 40 minutes\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "spark": 4,
                  "gaydar": 84,
                  "them": [
                    {
                      "note": "You try to say it and it comes out as a squeak. They think it's more laughing. They keep going."
                    },
                    "Okay. Stop. Everyone stop. He can't breathe.",
                    {
                      "note": "Brooke and Tash let go like they've been caught. Tyler lets go too."
                    },
                    "\"He was laughing,\" Tyler says. \"I took that as a yes.\"",
                    "It's not a yes if he can't talk, Ty.",
                    {
                      "note": "You're lying half off the rug in the grass, socks gone, cake on your foot, still giggling at nothing. The little girl from the next rug has come over to look at your toes."
                    },
                    {
                      "note": "Zoe looks at you for a long time. Then she gets up and brushes off her dress."
                    },
                    "Tyler, you driving? Can you drop me home?",
                    "\"I was going to offer.\""
                  ],
                  "after": "Tash, to the group chat: \"[video] four minutes\" Zoe: \"please stop\" Brooke: \"zo left with tyler\" Zoe: \"he dropped me home\" Tash: \"he dropped you home at 11pm\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "Being that ticklish in front of people is embarrassing, and that's all it is. They stopped when you said stop, or when you couldn't."
    },
    {
      "id": "c6h",
      "route": "zoe",
      "title": "Brooke asks",
      "contact": "Zoe",
      "irl": true,
      "intro": "Six weeks with Zoe. Brooke's barbecue in Ashgrove, a hot Sunday, everyone round the pool. Floral shorts, a pastel cropped tee, Zoe's white platform sandals, lilac toes and a bit of gloss. Jayden's on the tongs. Tash is in the pool on a pink flamingo. Brooke has been looking at you over her sunglasses since you got here.",
      "gaydar": 97,
      "gaydarSays": "Brooke asked all my questions for me. She said she'd do it nicely. She sort of did.",
      "outfits": [
        {
          "label": "Board shorts and a tee, but her platforms and lilac toes",
          "thinks": "board shorts and MY platforms. babe pick one",
          "gaydar": -3,
          "intro": "Six weeks with Zoe. Brooke's barbecue in Ashgrove, a hot Sunday, everyone round the pool. Board shorts and a plain tee, like Jayden. Then Zoe's white platform sandals and lilac toes, which is all anyone's looked at. Jayden's on the tongs. Tash is in the pool on a pink flamingo. Brooke has been looking at you over her sunglasses since you got here.",
          "them": [
            {
              "note": "Zoe looks at her own platforms on your feet, then at your board shorts, then back at the platforms."
            }
          ]
        },
        {
          "label": "Floral shorts, a cropped tee, her platforms, lilac toes, gloss",
          "thinks": "I spent all week stressing about Brooke's pretty uni friends and then he turned up prettier than all of them, in my shoes, standing next to me, and I'm meant to be the girlfriend",
          "them": [
            {
              "note": "Zoe's eyes go to the gloss and then down to the drink in her hand, and stay there."
            }
          ]
        },
        {
          "label": "Her floral sundress, her platforms, lilac toes, gloss and lashes",
          "thinks": "he's wearing my sundress. my actual sundress, with lashes. tash said it out loud and i just looked at the pavers",
          "gaydar": 2,
          "intro": "Six weeks with Zoe. Brooke's barbecue in Ashgrove, a hot Sunday, everyone round the pool. Zoe's floral sundress, her white platform sandals, lilac toes, gloss and lashes. Jayden's on the tongs. Tash is in the pool on a pink flamingo. Brooke has been looking at you over her sunglasses since you got here.",
          "them": [
            {
              "note": "Tash, on the flamingo, sees the sundress and says \"Zo, isn't that yours?\" Zoe says \"yep\" and doesn't look up from her drink."
            },
            {
              "note": "Zoe pulls her towel up over her knees."
            }
          ]
        }
      ],
      "debrief": "Getting asked about yourself in front of a whole barbecue is hard, and harder when the person you're with can't ask it herself. You didn't owe them an answer. Crying at someone's barbecue is allowed too. Once it was out, that whole pool was on your side.",
      "thinks": [
        "two pats. TWO PATS. six weeks of two pats on the back",
        "Six weeks and he's never once tried to get my top off. He's borrowed four of them. I kept telling Brooke he was being respectful lol",
        "brooke said you knew zo and yeah. trivia probably. i just really wanted a boyfriend for summer and he was right there and he was nice"
      ],
      "them": [
        {
          "note": "Brooke sits down on the end of your sun lounger with her drink. Zoe sits on the end of the next one, right beside Brooke, knees together."
        },
        {
          "from": "Brooke",
          "text": "Okay. Zo has some questions. She's too nice to ask them, so I'm asking. It's like trivia. I read, you answer."
        },
        "Brooke said she'd do it. I didn't ask her to. I sort of asked her to.",
        {
          "from": "Jayden",
          "text": "Brooke. Leave him alone."
        },
        {
          "from": "Brooke",
          "text": "Jayden. Sausages. Question one."
        },
        {
          "note": "Zoe leans over and whispers in Brooke's ear. Brooke nods along like a quiz host."
        },
        {
          "from": "Brooke",
          "text": "Zo wants to know why you hug her the way I hug her. Two pats on the back. Her words."
        },
        "Brooke said it first. I just agreed. Two pats. Every time."
      ],
      "replies": [
        {
          "you": "Because I'm a great hugger, Brooke. Next question.",
          "them": [
            {
              "from": "Brooke",
              "text": "Not an answer. But fine. Question two."
            },
            {
              "note": "Zoe whispers. Brooke listens with her eyes shut."
            },
            {
              "from": "Brooke",
              "text": "Zo says you've borrowed four of her tops and never once tried to take one off her. She wants to know why."
            },
            {
              "from": "Tash",
              "text": "OH."
            },
            {
              "note": "Tash nearly goes off the flamingo."
            },
            "Brooke said it like that. I said it nicer in the car."
          ],
          "replies": [
            {
              "you": "Because I'm gay, Brooke. You can tell her. She's right there.",
              "them": [
                {
                  "from": "Brooke",
                  "text": "I'm not telling her. She's right there."
                },
                {
                  "note": "Zoe isn't whispering anymore. She's looking at you, and her mouth has gone a bit wobbly."
                },
                "Brooke said you'd say it if she asked properly. She said that, like, an hour ago.",
                {
                  "from": "Brooke",
                  "text": "I did say that. Tash, you owe me fifty."
                },
                {
                  "from": "Tash",
                  "text": "I'm in a pool, Brooke!"
                }
              ],
              "replies": [
                {
                  "you": "Zo. Sorry it took a barbecue.",
                  "them": [
                    "It's okay. It's actually okay?",
                    {
                      "note": "She gets up off her lounger and sits on yours, right next to you, and leans her head on your shoulder. Your platforms and her bare feet side by side on the pavers."
                    },
                    "Brooke said I'd be sad. I'm a bit sad. I'm mostly just, like, oh. Okay. Finally.",
                    {
                      "from": "Brooke",
                      "text": "I did say that."
                    },
                    "You're still coming to trivia though. Brooke said you have to."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                },
                {
                  "you": "Can I keep the platforms?",
                  "them": [
                    {
                      "note": "Zoe laughs, the wobbly kind."
                    },
                    "Brooke, tell him he can keep them.",
                    {
                      "from": "Brooke",
                      "text": "She says keep them. And she says they look better on you, which, yeah. Sorry Zo."
                    },
                    "I said that in the car too.",
                    {
                      "from": "Jayden",
                      "text": "Is it done? Can I bring the sausages over now?"
                    }
                  ],
                  "gaydar": 100,
                  "spark": 4,
                  "outcome": "told"
                }
              ]
            },
            {
              "you": "Next question.",
              "them": [
                {
                  "from": "Brooke",
                  "text": "Oh, he's good. Fine."
                },
                {
                  "note": "Zoe whispers. Brooke's eyebrows go up over her sunglasses."
                },
                {
                  "from": "Brooke",
                  "text": "Zo wants to know who's hotter. Her, or Jayden."
                },
                {
                  "from": "Jayden",
                  "text": "Do not drag me into this."
                },
                {
                  "note": "Jayden is standing at the barbecue in a singlet with the tongs. He turns round, which doesn't help."
                }
              ],
              "replies": [
                {
                  "you": "Jayden. Sorry, Zo. Jayden, sorry to you too.",
                  "them": [
                    {
                      "from": "Jayden",
                      "text": "Ha! Cheers, buddy."
                    },
                    {
                      "note": "He points the tongs at you and goes back to the sausages. The back of his neck has gone red."
                    },
                    {
                      "from": "Brooke",
                      "text": "Correct answer. Zo, that's game."
                    },
                    "Brooke said you'd say Jayden. She said it in the car. Everyone says Jayden.",
                    {
                      "from": "Brooke",
                      "text": "Everyone does say Jayden."
                    }
                  ],
                  "gaydar": 98,
                  "spark": 3,
                  "outcome": "dodged"
                },
                {
                  "you": "Zoe. Obviously.",
                  "them": [
                    {
                      "note": "Zoe whispers again. Brooke shakes her head slowly."
                    },
                    {
                      "from": "Brooke",
                      "text": "Zo says you looked at Jayden first. Before you answered. She says you looked at his arms."
                    },
                    "I did say that. Sorry. You did though.",
                    {
                      "from": "Tash",
                      "text": "He really did."
                    }
                  ],
                  "gaydar": 94,
                  "spark": 8,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "I'm not doing a quiz about us, Brooke.",
          "them": [
            {
              "from": "Brooke",
              "text": "It's not a quiz, it's an intervention. There's a difference."
            },
            {
              "from": "Tash",
              "text": "It's a bit of a quiz."
            },
            "Brooke said you'd say that. And I said, then I'll just ask him. And then I didn't."
          ],
          "replies": [
            {
              "you": "Zo. If you want to ask me something, ask me. Not Brooke.",
              "them": [
                {
                  "note": "Zoe looks at Brooke. Brooke looks at the pool."
                },
                "Okay. Um.",
                "Are you gay? Brooke said I'd say it wrong.",
                {
                  "from": "Brooke",
                  "text": "You said it fine, babe."
                }
              ],
              "replies": [
                {
                  "you": "No. I'm not.",
                  "them": [
                    "Okay.",
                    {
                      "note": "She gets up and goes inside. After a minute Tash gets off the flamingo, dripping, and goes in after her."
                    },
                    {
                      "from": "Brooke",
                      "text": "Cool. Okay. Cool."
                    },
                    {
                      "note": "Brooke sits on the end of your lounger for a while without saying anything. Then she goes in too."
                    },
                    {
                      "from": "Brooke",
                      "text": "I'm out of questions. That's never happened to me."
                    }
                  ],
                  "gaydar": 92,
                  "spark": 10,
                  "after": "Zoe, to Brooke, at 11pm, from Brooke's couch, with Brooke next to her: \"he said no\" Brooke: \"i know babe\" Zoe: \"im going to end it\" Brooke: \"i know\" Zoe: \"can u do it\" Brooke: \"no\"",
                  "outcome": "dodged"
                },
                {
                  "you": "...Yeah. I think I am.",
                  "them": [
                    "Okay.",
                    "Okay. Brooke said it'd feel weird. It feels... yeah. It's fine. It's kind of fine?",
                    {
                      "from": "Brooke",
                      "text": "Oh, babe."
                    },
                    {
                      "note": "Brooke pulls you both into a hug on the lounger, her sunglasses squashed against your ear. Zoe's laughing into your shoulder, and she's crying a bit too."
                    },
                    "I think we're better as friends? Brooke says that about literally every guy. Ugh. Don't look at me, my mascara's going."
                  ],
                  "gaydar": 100,
                  "spark": 5,
                  "outcome": "broke"
                }
              ]
            },
            {
              "you": "(Get up. Go and stand with Jayden at the barbecue.)",
              "them": [
                {
                  "note": "You walk round the pool in Zoe's platforms. Jayden hands you a beer without looking, then a spare pair of tongs."
                },
                {
                  "from": "Jayden",
                  "text": "Brooke doing her questions?"
                },
                {
                  "from": "Jayden",
                  "text": "She did me on our second date. Fourteen of them. I failed most."
                },
                {
                  "note": "He turns a sausage. Then another one."
                },
                {
                  "from": "Jayden",
                  "text": "For the record, you're alright. Those shoes, I couldn't get to the letterbox in those. You've done the whole pool in them."
                },
                {
                  "from": "Jayden",
                  "text": "Whatever you are, you're alright. That's all."
                }
              ],
              "replies": [
                {
                  "you": "(Your eyes go. You can't stop it.)",
                  "them": [
                    {
                      "note": "It's the letterbox. Nobody's been nice about it in a plain way all day. Your face goes before you can turn round."
                    },
                    {
                      "from": "Jayden",
                      "text": "Oh. Oh, no. Hey. BROOKE."
                    },
                    {
                      "note": "He takes the tongs off you and gives you the clean tea towel off his shoulder."
                    },
                    {
                      "from": "Brooke",
                      "text": "What did you SAY to him?"
                    },
                    {
                      "from": "Jayden",
                      "text": "I said he's alright!"
                    },
                    {
                      "note": "Brooke gets there first and wraps you in a pool towel with flamingos on it. Tash comes dripping out of the pool with a cold can. Zoe sits you down on the pool step with your lilac toes in the water and holds your hand."
                    },
                    {
                      "from": "Brooke",
                      "text": "No more questions. Ever. I'm retiring."
                    },
                    "Brooke said that. I'm saying it too. No more questions.",
                    "You're still on the team. Wednesdays. As you, not as, like, my boyfriend. Brooke's already changed your name on the team sheet. I don't know to what. She won't show me.",
                    {
                      "from": "Jayden",
                      "text": "Sausage? No onion. You said no onion before."
                    }
                  ],
                  "gaydar": 97,
                  "spark": 2,
                  "after": "Brooke posts a photo that night: you in a flamingo towel on the pool step, Zoe's head on your shoulder, Jayden holding up a plate of sausages behind you. Caption: \"the team 💕\". Tash comments: \"best toes in ashgrove and its not close\".",
                  "outcome": "cried",
                  "thinks": [
                    "he cried because jayden said he's alright. jayden. i've told him he's hot about fifty times and got thanks zo",
                    "the three of us round him on the pool step in that flamingo towel and I liked him more right then than any night he's stayed over. that's bad. I think he's been gay the whole time and I kept saying shy"
                  ]
                },
                {
                  "you": "Thanks, Jayden. (Take the tongs. Stay at the barbecue.)",
                  "them": [
                    {
                      "from": "Jayden",
                      "text": "Good man. Flip those three."
                    },
                    {
                      "note": "You flip those three. Across the pool Brooke is talking to Zoe, very close, and Zoe's nodding."
                    },
                    {
                      "from": "Brooke",
                      "text": "Jayden! Is he okay?"
                    },
                    {
                      "from": "Jayden",
                      "text": "He's on sausages!"
                    },
                    {
                      "note": "After a while Brooke calls across the water."
                    },
                    {
                      "from": "Brooke",
                      "text": "Zo says she thinks you're better as friends! She says sorry! She says the sausages look good!"
                    },
                    {
                      "note": "Zoe waves. A small one."
                    }
                  ],
                  "gaydar": 93,
                  "spark": 7,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(Look at Zoe.) Zo. You can just ask me yourself.",
          "them": [
            {
              "note": "Zoe looks at Brooke."
            },
            {
              "from": "Brooke",
              "text": "She can't. She's tried three times in the car. I timed them."
            },
            {
              "note": "Zoe whispers. It's a long one. Brooke's face goes soft halfway through."
            },
            {
              "from": "Brooke",
              "text": "Zo says she doesn't think you fancy her. And she says it's fine. And she says she's not crying, it's the chlorine."
            },
            "It is the chlorine. Brooke puts so much in."
          ],
          "replies": [
            {
              "you": "I do fancy you, Zo.",
              "them": [
                {
                  "note": "Zoe whispers."
                },
                {
                  "from": "Brooke",
                  "text": "Zo says name one time."
                }
              ],
              "replies": [
                {
                  "you": "Trivia. The first night.",
                  "them": [
                    "You were looking at the meat dress question.",
                    {
                      "from": "Brooke",
                      "text": "He was. I was there."
                    },
                    "Brooke said you'd say trivia.",
                    {
                      "note": "Zoe picks at the edge of the lounger cushion and doesn't look up."
                    },
                    {
                      "from": "Brooke",
                      "text": "That's a no, babe. Sorry. That's a no."
                    }
                  ],
                  "gaydar": 91,
                  "spark": 11,
                  "outcome": "dodged"
                },
                {
                  "you": "(You can't think of one.)",
                  "them": [
                    {
                      "from": "Brooke",
                      "text": "Yeah."
                    },
                    "It's okay. Like, it's okay.",
                    {
                      "from": "Jayden",
                      "text": "Gay best friend then!"
                    },
                    {
                      "from": "Brooke",
                      "text": "JAYDEN."
                    },
                    {
                      "from": "Jayden",
                      "text": "What? It's nice! Everyone wants one!"
                    },
                    {
                      "note": "Zoe laughs, properly. She puts her bare foot next to your platform on the pavers."
                    },
                    "Brooke said that's what you are. She said it at trivia. I'm just saying she said it."
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "You're right. I don't. I'm really sorry, Zo.",
              "them": [
                {
                  "note": "Zoe stops whispering. She just says it herself."
                },
                "Okay. Thank you. Brooke said you'd lie.",
                {
                  "from": "Brooke",
                  "text": "I said he MIGHT lie."
                },
                "Is it... is it me? Or is it, like, girls?"
              ],
              "replies": [
                {
                  "you": "It's guys, Zo. It's guys. I'm gay.",
                  "them": [
                    "Okay.",
                    {
                      "note": "She breathes out for a long time."
                    },
                    "Okay. Yeah. Brooke said it at trivia and I told her to stop, and she was right. She's always right. It's so annoying.",
                    {
                      "from": "Brooke",
                      "text": "I'm always right."
                    },
                    {
                      "note": "Zoe reaches over and holds your hand, fingers through yours, and swings it a bit."
                    },
                    "We're friends, yeah? Brooke says we have to be. I want to anyway."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "broke"
                },
                {
                  "you": "It's not you. Can we stay friends?",
                  "them": [
                    "Brooke? Can we?",
                    {
                      "from": "Brooke",
                      "text": "Don't ask me! Yes. Obviously."
                    },
                    "Yeah. Brooke says yes. I say yes.",
                    {
                      "note": "Tash paddles the flamingo over to the edge and holds her drink up at you. Jayden holds up the tongs."
                    }
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "(Stand up, take the platforms off, and jump in the pool.)",
          "them": [
            {
              "note": "You put Zoe's platforms side by side on the pavers and jump. The water's warm. When you come up, Tash is laughing so hard the flamingo tips over."
            },
            {
              "from": "Brooke",
              "text": "He's avoiding the question! In my pool!"
            },
            "Brooke said you'd do something like this. She didn't say the pool."
          ],
          "replies": [
            {
              "you": "(Float on your back.) Ask me in here, Brooke.",
              "them": [
                {
                  "note": "Brooke takes her sunglasses off, kicks her slides off and gets in, fully dressed. She swims over."
                },
                {
                  "from": "Brooke",
                  "text": "Fine. Question. Are you gay?"
                },
                {
                  "note": "Your lilac toes are sticking out of the water."
                }
              ],
              "replies": [
                {
                  "you": "Yes, Brooke. Tell Zo.",
                  "them": [
                    {
                      "from": "Brooke",
                      "text": "ZO. HE SAYS YES."
                    },
                    "I HEARD.",
                    {
                      "note": "Zoe jumps in too, in her dress. Then Tash, off the flamingo. Jayden stays with the sausages and films."
                    },
                    "Brooke said I'd cry. I'm not crying, I'm wet."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "broke"
                },
                {
                  "you": "(Duck under the water.)",
                  "them": [
                    {
                      "note": "You stay under as long as you can. When you come up, Brooke is still there, treading water, waiting."
                    },
                    {
                      "from": "Brooke",
                      "text": "That's a yes. Under water is a yes."
                    },
                    {
                      "note": "Zoe's at the edge with your platforms in her hand, looking at you."
                    },
                    "Brooke says that's a yes. I think it's a yes too."
                  ],
                  "gaydar": 97,
                  "spark": 4,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "(Swim to the deep end. Stay there.)",
              "them": [
                {
                  "note": "You hang on the edge at the deep end with just your head out. Nobody comes over for a long time."
                },
                {
                  "from": "Brooke",
                  "text": "Zo says come out when you're ready! She says she's not mad! She says she's staying at mine tonight!"
                },
                "I am, though. Staying at Brooke's."
              ],
              "gaydar": 93,
              "spark": 7,
              "outcome": "dodged"
            }
          ]
        }
      ]
    },
    {
      "id": "zoe-end",
      "route": "zoe",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Kyle calls my platforms \"the tall shoes\". I've never been happier.",
      "title": "Zoe and Kyle",
      "contact": "Zoe",
      "irl": true,
      "outfits": [
        {
          "label": "Board shorts and a tee",
          "thinks": "board shorts and a tee. who are those for babe, everyone here has seen you in my dress",
          "gaydar": -2,
          "intro": "Two months later. Brooke's next barbecue. Brooke invited you herself (\"we're friends now, deal with it\"). Board shorts, a tee. Zoe's there with a guy in a trucker cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic.",
          "them": [
            {
              "note": "She looks at the board shorts and says \"oh, you went normal\", like it's a shame."
            }
          ]
        },
        {
          "label": "Your own floral sundress, platforms and lilac toes",
          "thinks": "he bought his OWN sundress. and platforms. brooke said she's proud of him and i was too, kind of, and mostly i was glad kyle was holding my hand",
          "gaydar": 1,
          "intro": "Two months later. Brooke's next barbecue. You came in your OWN floral sundress this time, your own platforms and lilac toes. Zoe's there with a guy in a trucker cap and a grease-stained tank top who's already manning the grill. Kyle. Mechanic.",
          "them": [
            {
              "note": "Zoe sees your sundress and laughs out loud. \"You got your OWN,\" she says."
            },
            {
              "note": "She shows Kyle. Kyle says \"nice\" and goes back to the sausages."
            }
          ]
        }
      ],
      "thinks": [
        "kyle said yeah about my top. just yeah. then he checked out my bum when i bent down to the esky and i don't know, it was nice, it's been a while",
        "Kyle stays over and I don't have to invent an early shift. I keep checking for anything left for {name} and there's nothing, not even a bit, he's so gay it's not a question",
        "brooke's got a guy from her work for him. good arms. i said yes before she finished, i want to double date SO bad"
      ],
      "them": [
        "Hi. Oh my god, hi. You came.",
        {
          "note": "She hugs you with one arm. The other one's holding Kyle's beer."
        },
        "This is Kyle. Kyle, this is {name}. We... you know. Before.",
        "\"Hey man,\" Kyle says, flipping a hot dog. \"Hot dog?\" He hasn't looked at your outfit once. He's looking at the sausages.",
        "He's a mechanic. He has zero opinions about anything I wear, it's amazing.",
        "Like I asked him if this top was okay and he said \"yeah\". Just yeah. That's it.",
        {
          "if": "zoe-ambush=held",
          "text": "Brooke still talks about the picnic, by the way. How Tyler couldn't make you laugh. It's her favourite story."
        },
        {
          "if": "zoe-ambush=cracked|begged|kept",
          "text": "\"Oh, wait,\" Kyle says, looking up from the hot dogs. \"Are you the guy from the park video? Brooke showed me. With the little girl doing the noise.\""
        },
        {
          "if": "zoe-ambush=cracked|begged|kept",
          "note": "Zoe goes red and says \"Kyle\". Kyle says \"what? it was funny\" and goes back to the sausages."
        },
        {
          "text": "Brooke says you're coming to everything now. She said it's not up for discussion. And I was like okay, and she was like good.",
          "if": "c6h=told|broke"
        },
        {
          "text": "Brooke still has the flamingo towel. She's like, it's his now, and I was like Brooke that's gross, and she's like no, it's sweet.",
          "if": "c6h=cried"
        },
        {
          "text": "Brooke says she's still got one more trivia question for you. I said leave it. She said she's 'just holding it'.",
          "if": "c6h=dodged"
        }
      ],
      "replies": [
        {
          "you": "Hi Kyle! Yes please, thanks babe. Zo, he's lovely. I'm really happy for you.",
          "them": [
            "\"Babe,\" Kyle repeats, cheerfully, and hands you a hot dog with ketchup. \"Here you go.\"",
            "He didn't even notice you called him babe. He never notices anything.",
            "You look good, {name}. Really."
          ],
          "replies": [
            {
              "you": "Thanks. I feel good actually.",
              "them": [
                "Good.",
                "Brooke wants a photo of you. She's posting it. She says you're her 'favourite plus one'."
              ]
            },
            {
              "you": "Thanks, Zo. I'm glad you've got someone who doesn't steal your platforms.",
              "them": [
                "\"Me too,\" she says. Then: \"I do miss someone doing my eyeliner though.\"",
                "\"I'm right here,\" you say. She laughs."
              ]
            }
          ]
        },
        {
          "you": "(Walk up to the grill.) Kyle. Hi. Can we talk? About Zoe.",
          "them": [
            "\"Yeah, go for it man,\" Kyle says, not looking up from the grill.",
            {
              "note": "He's got grease on his forearms. He glances over and smiles at you sideways, and your stomach does a thing. You stand there with your hands clasped in front of you like you're waiting to order."
            },
            "\"Hold these for us?\" He hands you the tongs. \"Gotta grab more onions. Try not to break a nail.\""
          ],
          "replies": [
            {
              "you": "(Wait for him. Holding the tongs.)",
              "them": [
                {
                  "note": "He comes back. You've had four minutes to practise."
                },
                "\"Right. Zoe,\" Kyle says. \"Go.\"",
                "\"I want her back,\" you say. It comes out very small. \"Sorry.\"",
                "\"Ha! Okay,\" Kyle says, and takes the tongs back. \"Good luck with that, man. Hot dog?\"",
                "\"Sauce is on the table, sweetheart.\"",
                {
                  "note": "He goes back to the onions, still laughing. That's the whole conversation for him."
                },
                "Zoe, from the deck: \"Did you just ask Kyle for me back and he gave you a hot dog?\"",
                "\"Yes,\" you say.",
                "She covers her face. \"You're so cute. I hate it. You're so cute.\"",
                {
                  "note": "Later she comes and pats your cheek on her way past with the salad."
                },
                "\"You know you're not really my type anymore, right? You're more like my Brooke.\""
              ]
            },
            {
              "you": "(Hand the tongs to Jayden and walk away very fast.)",
              "them": [
                "\"Good chat, man!\" Kyle yells after you.",
                {
                  "note": "Jayden, Brooke's boyfriend, takes the tongs and looks over at Kyle, then at you. \"Yeah, he does that to people,\" he says, and turns a sausage."
                }
              ]
            }
          ]
        },
        {
          "you": "(To Zoe) A trucker cap, Zo. You used to make fun of trucker caps.",
          "them": [
            "I know. Shut up.",
            "He wears it backwards when he's under the car. It's actually really hot.",
            "And he's taller than me in my platforms. You and me were the same height in them, that was so weird."
          ]
        },
        {
          "you": "Hi. I'm just going to go find Brooke.",
          "them": [
            "\"No problem man. Hot dog's here when you want one.\"",
            "Zoe, quietly: \"Thanks for coming. Really.\"",
            "\"Brooke made me,\" you say. \"I know,\" she says. \"I'm still glad.\""
          ]
        }
      ],
      "after": "Brooke posts a photo that night: you doing Zoe's eyeliner on the deck while Kyle holds a sausage in the background. Caption: \"the ex, the new bf and the gay best friend 💕\". Zoe comments: \"the ex and the gay best friend are the same person brooke\". Brooke replies: \"yeah??\".",
      "debrief": "You went to a barbecue and watched your ex with someone new. That's hard, and you stayed."
    },
    {
      "id": "sophie-1",
      "route": "sophie",
      "gaydar": 15,
      "gaydarSays": "He's sweet. He has a lot of opinions about Taylor Swift. A lot.",
      "title": "Riverside",
      "contact": "Sophie",
      "outfits": [
        {
          "label": "Boy clothes: a navy shirt and chinos",
          "thinks": "Navy shirt, chinos. Very lawyer. Good, I can work with that",
          "masc": true,
          "spark": 10,
          "gaydar": -5,
          "intro": "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. You wore a navy shirt and chinos. She wore a black jumpsuit and gold earrings and you knocked your water over before the entrees came."
        },
        {
          "label": "A cream shirt, your rings and a bit of tinted balm",
          "thinks": "Tinted balm. I clocked it before we'd sat down, clocking things is literally my job. Still cute. Annoyingly",
          "intro": "Sophie: a paralegal, calm, funny in a dry way. You met through Dani's work. First date: dinner at Riverbar at Eagle St. A cream shirt, your rings and a bit of tinted balm. She wore a black jumpsuit and gold earrings and noticed your rings first thing.",
          "them": [
            "also your balm was tinted. i noticed. i notice everything, it's literally my job lol"
          ]
        }
      ],
      "thinks": [
        "Forty minutes on Taylor eras. With dates. And I still want him on my couch Friday, which is honestly so embarrassing for me",
        "Kirra's going to ask did he kiss you and the answer is no. I stood there at the end for ages. Nothing. He said this was fun and hugged me"
      ],
      "them": [
        "Hi, thanks for tonight. I normally make people wait three days for this text but whatever. I'd like to do it again.",
        "Also no guy has ever asked me my favourite Taylor era before. Or had that many feelings about it.",
        "Folklore btw. In case you were still wondering."
      ],
      "replies": [
        {
          "you": "Folklore's a good answer. Still wrong though, it's Reputation. And yes, I'd love to.",
          "gaydar": 20,
          "them": [
            "Of course it's Reputation.",
            "Ok. I'll cook. Friday?",
            "Bring wine. Not a sweet one please."
          ],
          "replies": [
            {
              "you": "Friday's good. Dry, I promise.",
              "them": [
                "Good."
              ]
            },
            {
              "you": "What are you cooking? So I get the right one.",
              "them": [
                "Pasta probably.",
                "Don't stress about the wine."
              ]
            }
          ]
        },
        {
          "you": "I had a really good time. Second date, definitely.",
          "them": [
            "Good.",
            "Friday? I'll cook. You're on dessert.",
            "Don't stress about it. I can tell you're going to stress about it."
          ],
          "replies": [
            {
              "you": "I'm already stressing. Friday's good.",
              "them": [
                "Ha. Ok."
              ]
            },
            {
              "you": "I'm not overthinking. I've just been writing this text for twenty minutes.",
              "them": [
                "That's overthinking.",
                "Friday."
              ]
            }
          ]
        },
        {
          "you": "Hang on. Folklore? Over 1989?",
          "gaydar": 20,
          "them": [
            "Yes. And I'm not doing this over text.",
            "Come over Friday, I'll cook, you can argue with me in person."
          ]
        }
      ],
      "after": "Sophie, to her friend Kirra: \"first date was good. hes sweet\" Kirra: \"just sweet?\" Sophie: \"no. good sweet\" Sophie: \"i think\" Kirra: \"send a pic\""
    },
    {
      "route": "sophie",
      "path": "masc",
      "id": "sophie-m2",
      "title": "Movie night, nails bare",
      "contact": "Sophie",
      "irl": true,
      "gaydar": 15,
      "spark": 80,
      "gaydarSays": "I offered to do his nails. He said no. I didn't know I'd be relieved.",
      "intro": "Six weeks in. Movie night at Sophie's flat in Paddington. Sweatpants and a hoodie. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table.",
      "them": [
        "Okay. Mamma Mia or The Devil Wears Prada. You pick.",
        {
          "note": "She's painting her own nails. She's not very good at it."
        },
        "Actually, while you pick. Do you want me to do yours? As a joke. I bought this pink and I'm never going to wear it."
      ],
      "replies": [
        {
          "you": "Ha. No thanks. I'll pick the movie.",
          "masc": true,
          "them": [
            "Fair. What are we watching?"
          ],
          "replies": [
            {
              "you": "Neither. Something with car chases.",
              "masc": true,
              "spark": 86,
              "outcome": "kept",
              "them": [
                "Oh thank god. I was testing you.",
                {
                  "note": "She puts on a car chase movie and falls asleep on you twenty minutes in."
                }
              ],
              "after": "Sophie, to Kirra: \"he picked a car chase movie\" Kirra: \"over mamma mia??\" Sophie: \"over mamma mia\" Kirra: \"huh\""
            },
            {
              "you": "Mamma Mia. Obviously. I know all the words.",
              "spark": 60,
              "outcome": "slipped",
              "them": [
                {
                  "note": "You know all the words. You do the harmonies. She stops painting her nails to watch you."
                },
                "You know the harmonies.",
                "\"Everyone knows the harmonies.\"",
                "No they don't."
              ],
              "after": "Sophie, to Kirra: \"he did the harmonies to dancing queen\" Kirra: \"oh soph\" Sophie: \"i know\""
            }
          ]
        },
        {
          "you": "Here, give me the brush. You're doing it wrong.",
          "them": [
            {
              "note": "You take the brush and do her nails. Three thin coats. Perfect."
            },
            "...Okay. Where did you learn that?"
          ],
          "replies": [
            {
              "you": "My ex. She made me do hers. Never again.",
              "masc": true,
              "spark": 70,
              "outcome": "kept",
              "them": [
                "Ha. Okay. She trained you well.",
                {
                  "note": "She blows on her nails and leans on you."
                }
              ],
              "after": "Sophie, to Kirra: \"he did my nails. his ex trained him\" Kirra: \"sure\" Sophie: \"it's believable\" Kirra: \"is it\""
            },
            {
              "you": "YouTube. And practice. Lots of practice.",
              "spark": 50,
              "outcome": "slipped",
              "them": [
                "On who?",
                {
                  "note": "You don't answer. She looks at your nails. Bare, but there's a tiny bit of pink in the corner of one."
                },
                "Okay."
              ],
              "after": "Sophie, to Kirra: \"he does nails. he practises\" Kirra: \"on who\" Sophie: \"himself kirra\""
            }
          ]
        }
      ],
      "debrief": "You can say no to the pink. You can also say yes. Neither one is a test you have to pass."
    },
    {
      "route": "sophie",
      "path": "masc",
      "id": "sophie-m3",
      "title": "Kirra's game night",
      "contact": "Sophie",
      "irl": true,
      "gaydar": 20,
      "spark": 75,
      "gaydarSays": "He beat Ethan at Mario Kart and didn't take his socks off. Kirra's been quiet all night.",
      "intro": "Three months in. Game night at Kirra's. Socks on, sweatpants, the hoodie Sophie keeps stealing. Kirra's friend Ethan is on the couch.",
      "them": [
        {
          "note": "You beat Ethan at Mario Kart three times. He wants a rematch. You say no.",
          "if": "sophie-m2=kept"
        },
        {
          "note": "Kirra looks at your socks. \"House rule,\" she says. You leave them on. She films them anyway.",
          "if": "sophie-m2=slipped"
        },
        "\"Okay, question,\" Kirra says. \"Soph won't tell me. Are you two exclusive?\"",
        {
          "note": "Sophie raises an eyebrow at you. Dry. Waiting."
        }
      ],
      "replies": [
        {
          "you": "Yeah. She's my girlfriend.",
          "masc": true,
          "spark": 90,
          "outcome": "together",
          "them": [
            "\"Huh,\" Kirra says. \"Okay. I was wrong.\"",
            "You were very wrong.",
            {
              "note": "Sophie takes your hand on the couch and doesn't let go till you leave."
            }
          ],
          "after": "You're Sophie's boyfriend. Kirra apologises, sort of, at her next birthday. \"I had you down as something else.\" Sophie says \"we know, Kirra.\""
        },
        {
          "you": "We haven't really talked about it.",
          "spark": 58,
          "outcome": "drift",
          "them": [
            "\"Oh,\" Kirra says. \"Awkward.\"",
            "It's not awkward. We just haven't.",
            {
              "note": "On the drive home she doesn't put music on."
            }
          ],
          "after": "Sophie ends it calmly, the way she does everything. \"I think I want someone who already knows.\" Six months later she's with a physio called Nathan. Kirra says he's \"restful\"."
        },
        {
          "you": "Kirra, is that a new lip colour? It's gorgeous.",
          "them": [
            "\"...It's new,\" Kirra says. \"Thanks?\"",
            "Okay. I think that's my answer.",
            {
              "note": "Sophie laughs, properly, and shakes her head."
            },
            "You're the sweetest. You also just asked Kirra about her lipstick in the middle of our 'are we official' moment. Ethan, you know gay guys, don't you? Anyone?",
            "\"I know a few,\" Ethan says."
          ],
          "spark": 25,
          "outcome": "drift",
          "after": "Ethan really does know a few. Sophie and Kirra want a full debrief after every one."
        }
      ],
      "debrief": "Kirra had you down as something. You get to say what you are, and when."
    },
    {
      "id": "sophie-2",
      "route": "sophie",
      "gaydar": 50,
      "gaydarSays": "I got the nail polish out as a joke. He didn't take it as one.",
      "title": "Movie night",
      "contact": "Sophie",
      "irl": true,
      "outfits": [
        {
          "label": "Sweatpants and a hoodie. Cosy.",
          "thinks": "Sweatpants and a hoodie. Finally a normal man on my couch. Then he tucked his legs under him and went straight for my polish",
          "gaydar": -5,
          "intro": "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants and a hoodie. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something.",
          "them": [
            {
              "note": "She looks at you curled up on her couch in your hoodie, smiles, and tucks her feet up on her own end."
            }
          ]
        },
        {
          "label": "Sweatpants, a cropped hoodie and a lip oil",
          "thinks": "Lip oil. To movie night. I had a sheet mask on and he had lip oil, who's the girlfriend here. Stop",
          "intro": "Six weeks in. Movie night at Sophie's flat in Paddington. You came in sweatpants, a cropped hoodie and a lip oil. She's got a face mask on, a bottle of wine open and her nail polish laid out on the coffee table like she's planning something.",
          "them": [
            {
              "note": "She sees the lip oil and the cropped hoodie and moves her wine glass so it's sitting between you."
            }
          ]
        }
      ],
      "thinks": [
        "Six weeks and he still goes home after the movie. Every time. I put the good sheets on tonight, Kirra made me",
        "he looked at that pink more than he's ever looked at me in my underwear. stop. I'm not thinking about that",
        "Gay. He's gay. I'm doing his toes next week anyway"
      ],
      "them": [
        "Okay. Mamma Mia or The Devil Wears Prada. You choose.",
        {
          "note": "She's painting her own nails. She's not very good at it."
        },
        "Actually, while you pick. Do you want me to do yours? As a joke. I bought this pink and I'm never going to wear it."
      ],
      "replies": [
        {
          "you": "Yes. Do my toes too. And Devil Wears Prada, obviously, I've seen it like eleven times.",
          "gaydar": 60,
          "them": [
            "Eleven.",
            {
              "note": "She does your nails, then your toes. When the cerulean bit comes on you say the whole thing along with Meryl, with the hands."
            },
            "You know it word for word.",
            "I was kidding about the nails, by the way."
          ],
          "replies": [
            {
              "you": "Was I supposed to be joking? They look amazing. Look at them. Soph. LOOK.",
              "them": [
                "Yeah. They're better than mine.",
                {
                  "note": "She smiles, but she watches you admire your toes for a very long time."
                }
              ]
            },
            {
              "you": "Sorry, I got carried away. Do you want me to take it off?",
              "them": [
                "No, leave it. It's nice on you.",
                "Nicer than on me, which is annoying."
              ]
            }
          ]
        },
        {
          "you": "Ha, okay. One nail. And Mamma Mia.",
          "them": [
            "One nail. Okay.",
            {
              "note": "She paints your pinky hot pink. You look at it all through Mamma Mia. At 'Dancing Queen' you hold your hand up to the light."
            },
            "You've looked at that nail more than you've looked at me tonight.",
            "It's fine. It's a good pink."
          ],
          "replies": [
            {
              "you": "It's a really good pink. Can you do the rest?",
              "gaydar": 60,
              "them": [
                {
                  "note": "She does the rest without saying anything. You watch the rest of the movie with your hands flat on your knees so they dry."
                }
              ]
            },
            {
              "you": "Sorry. I'm looking at you now.",
              "them": [
                "Mm.",
                {
                  "note": "She leans her head on your shoulder. You look at your nail again when she's not watching."
                }
              ]
            }
          ]
        },
        {
          "you": "As a joke? Soph. I'm not a ten-year-old at a sleepover.",
          "them": [
            "Okay.",
            {
              "note": "She holds the hot pink up and waits."
            },
            "You're looking at it. You've been looking at it since you sat down."
          ],
          "replies": [
            {
              "you": "...Fine. One hand.",
              "gaydar": 58,
              "them": [
                {
                  "note": "She does one hand. You hold it up to the lamp before she's finished the second coat."
                },
                "Mm."
              ]
            },
            {
              "you": "(Put it down.) Devil Wears Prada.",
              "them": [
                {
                  "note": "Halfway through, you mouth the whole cerulean speech along with Meryl. Sophie pauses it and looks at you."
                },
                "You know this word for word, don't you."
              ]
            }
          ]
        }
      ],
      "after": "Sophie, to Kirra: \"ok so i got my nail polish out as a joke\" Kirra: \"and\" Sophie: \"he didnt think it was a joke\" Kirra: \"soph\" Sophie: \"i know\""
    },
    {
      "id": "sophie-kirra",
      "route": "sophie",
      "title": "Kirra gets the phone",
      "contact": "Sophie",
      "gaydar": 55,
      "spark": 40,
      "gaydarSays": "Kirra stole my phone and asked him three questions. He failed two. She's been insufferable since.",
      "intro": "Friday night. Sophie's at Kirra's place. You're home.",
      "them": [
        "Hi. I'm at Kirra's. She's being annoying.",
        {
          "from": "Kirra",
          "text": "hi its kirra. i have sophies phone"
        },
        {
          "from": "Kirra",
          "text": "quick quiz. favourite movie. go"
        }
      ],
      "replies": [
        {
          "you": "Mamma Mia. Obviously.",
          "them": [
            {
              "from": "Kirra",
              "text": "ok"
            },
            {
              "from": "Kirra",
              "text": "question 2. what's sophie's best feature"
            }
          ],
          "replies": [
            {
              "you": "Her eyeliner. She's got a great wing.",
              "spark": 30,
              "them": [
                {
                  "from": "Kirra",
                  "text": "her EYELINER"
                },
                {
                  "from": "Kirra",
                  "text": "not her eyes. not her smile. her eyeliner"
                },
                "Kirra give it back.",
                "Sorry. She's gone. You can say the eyeliner. It is good. That's just what my friends say about it, not boys."
              ],
              "after": "Kirra, to Sophie, in person: \"his favourite thing about you is your eyeliner\" Sophie: \"it's a good wing\" Kirra: \"soph. boys say eyes. thats literally the one thing they know to say. he said eyeliner\""
            },
            {
              "you": "Her laugh. And she's smarter than me.",
              "spark": 48,
              "them": [
                {
                  "from": "Kirra",
                  "text": "hm"
                },
                {
                  "from": "Kirra",
                  "text": "ok thats actually good"
                },
                {
                  "from": "Kirra",
                  "text": "but you said mamma mia"
                },
                "Okay I've got it back. Thank you. That was nice."
              ],
              "after": "Sophie, to Kirra: \"see. he's sweet\" Kirra: \"he's sweet. he also said mamma mia in 2 seconds\""
            }
          ]
        },
        {
          "you": "Fast and Furious. The fourth one.",
          "them": [
            {
              "from": "Kirra",
              "text": "liar"
            },
            {
              "from": "Kirra",
              "text": "sophie says you cried at the devil wears prada"
            },
            "I did say that. Sorry. It's true."
          ],
          "replies": [
            {
              "you": "Once. It was a sad scene.",
              "spark": 38,
              "them": [
                {
                  "from": "Kirra",
                  "text": "which scene"
                },
                {
                  "note": "You tell her. In detail. With the outfit."
                },
                {
                  "from": "Kirra",
                  "text": "ok soph come get your phone. hes one of us"
                }
              ],
              "after": "Kirra, to Sophie: \"he described the paris outfit in full\" Sophie: \"he loves that outfit\" Kirra: \"babe\""
            },
            {
              "you": "Never. Give Sophie her phone back.",
              "spark": 46,
              "them": [
                {
                  "from": "Kirra",
                  "text": "fine"
                },
                "Hi. She's gone. You did cry though.",
                "It was cute. Kirra cried at it too, if that helps. It doesn't help, does it."
              ],
              "after": "Sophie, to Kirra: \"you scared him\" Kirra: \"he lied about fast and furious\" Sophie: \"he's allowed to lie about fast and furious\""
            }
          ]
        }
      ],
      "debrief": "Your favourite movie doesn't have to pass anyone's quiz."
    },
    {
      "id": "sophie-file",
      "route": "sophie",
      "title": "Cross-examination",
      "contact": "Sophie",
      "irl": true,
      "gaydar": 64,
      "gaydarSays": "I cross-examined his feet. His feet answered every question.",
      "intro": "The week after movie night. Sophie said she'd do your toes properly this time, so it's Sunday at her flat in Paddington: a towel on the coffee table, a foot file, cuticle oil and a bottle of hot pink. Just you two. Your foot's in her lap.",
      "thinks": [
        "Seven weeks. We've had sex twice and both times he wanted the lights off and then wanted to talk about my cuticles after. I'm not stupid",
        "he had an opinion on the file. the FILE. my ex used to cut his toenails in the shower and leave them there and I sort of miss it",
        "hot pink and he was SO excited. his feet are nicer than mine. I'm going to bed"
      ],
      "them": [
        {
          "note": "She sits at the far end of the couch with your foot stretched across the gap between you, on a towel."
        },
        "Right. Before I start, I have some questions.",
        "Every time you dodge one, the file goes somewhere you won't like. Totes fair. I'm a paralegal, this is basically my job.",
        {
          "note": "She runs the foot file once, very lightly, across your arch, as a demonstration. Your knee nearly goes through the coffee table."
        },
        "Exhibit A. Okay. Question one. Who taught you what cuticle oil is?"
      ],
      "replies": [
        {
          "you": "Dani.",
          "them": [
            "True. Good. Question two.",
            "On movie night you said the polish was 'a bit much'. Then you picked the exact pink I would've picked. Explain."
          ],
          "replies": [
            {
              "you": "I just like pink. Lots of guys like pink.",
              "them": [
                {
                  "note": "The file goes under your toes. You make a noise like a kettle."
                },
                "Lots of guys like pink. Okay.",
                "Name three."
              ],
              "replies": [
                {
                  "you": "Sophie! Stop! Stop!",
                  "them": [
                    {
                      "note": "She stops straight away and taps your foot with the file like it's a gavel."
                    },
                    "Objection sustained. But I'm writing that down.",
                    "Also I've got bigger feet than you and I'm five foot four. Stop. I'm screaming."
                  ],
                  "gaydar": 68,
                  "spark": 34
                },
                {
                  "you": "(Laugh. Try to name three. You can't.)",
                  "them": [
                    {
                      "note": "You get as far as \"Harry Styles\" and then you can't talk at all. She sees it and stops by herself."
                    },
                    "One. You got one. And he wears skirts, so he doesn't count.",
                    "The court finds the witness extremely ticklish."
                  ],
                  "gaydar": 74,
                  "spark": 22
                }
              ]
            },
            {
              "you": "(Don't answer. Hold still.)",
              "them": [
                {
                  "note": "She files slowly along your arch, back and forth, watching your face. Your jaw is so tight it clicks. You don't make a sound."
                },
                "Witness declines to answer. Noted. Very noted.",
                "I'm still painting them hot pink though. That's not a question."
              ],
              "gaydar": 62,
              "spark": 55
            }
          ]
        },
        {
          "you": "Soph, put the file down. I'm not doing this.",
          "them": [
            "You're absolutely doing this. You came for a pedicure. This comes with the pedicure.",
            {
              "note": "She tucks your ankle under her arm and taps the file on her palm."
            }
          ],
          "replies": [
            {
              "you": "Okay. Fine. One question.",
              "them": [
                "Did you watch Selling Sunset before you met me, or because of me?",
                "...Before.",
                {
                  "note": "She narrows her eyes and does the file anyway, just for a second, as a warning. You squeak. She lets go."
                },
                "Perjury. But I'll allow it."
              ],
              "gaydar": 64,
              "spark": 45
            },
            {
              "you": "(Kick free and run for the kitchen.)",
              "them": [
                {
                  "note": "You get as far as the kitchen bench. She follows you with the file and the hot pink, very calm."
                },
                "Sit down. I'm still doing them. No file. Promise.",
                {
                  "note": "She keeps the promise. No file. She uses her fingers once, right at the end, and says \"that wasn't the file\"."
                }
              ],
              "gaydar": 63,
              "spark": 48
            }
          ]
        }
      ]
    },
{
  "id": "sophie-feet",
  "route": "sophie",
  "gaydar": 76,
  "gaydarSays": "Kirra posted it. My boss has seen it, {name}. My boss.",
  "title": "Game night",
  "contact": "Sophie",
  "irl": true,
  "intro": "Two months in. Game night at Kirra's flat. Socks off at the door, Kirra's rule, because of the rug. Your toes are hot pink. Sophie did them properly the week after movie night. Kirra's flatmate Ethan is a personal trainer, and Sophie mentioned twice in the car that he's \"just a friend\". Kirra has her phone out. Kirra always has her phone out.",
  "thinks": [
    "Ethan. Sorry. Ethan though",
    "Kirra's going to post it and everyone at work is going to see my boyfriend screaming on a rug and someone's going to ask me if he's gay and I'll say totes no, totes not, and they'll know",
    "I wore the good bra to game night. For {name}. Ethan sat up on that couch and I felt more than I have in two months and shit, that's so embarrassing now"
  ],
  "them": [
    {
      "note": "You peel your socks off at the door. Kirra's phone swings round to your feet straight away."
    },
    "\"Hot pink! Soph, did you do these?\"",
    "I did. He picked the colour.",
    "Look how small they are, though. I did his and then mine and his took half the time.",
    {
      "note": "Sophie glances over at Ethan on the couch and sits up a bit straighter. She doesn't do that for you."
    },
    {
      "note": "Ethan's lying on the couch. He sits up to have a look."
    },
    "\"Nice,\" he says. \"Bet he's ticklish.\"",
    "\"I'm not,\" you say. Kirra hits record."
  ],
  "replies": [
    {
      "you": "(Sit on the rug and play it cool.)",
      "them": [
        {
          "note": "You sit on the rug with your legs out. Ethan slides off the couch and sits at your feet, cross-legged."
        },
        "\"Cool. So you won't mind.\"",
        {
          "note": "He takes your ankle and digs his fingers in under your toes. You go straight over backwards on the rug, laughing, flapping your arms."
        },
        "\"NOT THE TOES. NOT THE TOES!\"",
        "\"Kirra, are you getting this?\" \"I'm getting ALL of this.\"",
        {
          "note": "Sophie's on the couch, laughing, with her feet tucked up. Ethan glances up at her while he's doing it, like he's checking she's watching."
        }
      ],
      "replies": [
        {
          "you": "Okay! Stop! Red! Red!",
          "spark": 22,
          "them": [
            {
              "note": "He stops and lets go and puts his hands up."
            },
            "\"Red's red,\" he says. \"Fair.\" He gets up and sits on the couch. Next to Sophie.",
            {
              "note": "You're lying on Kirra's rug, red-faced, pulling your hair off your forehead."
            },
            "\"Posting it,\" Kirra says.",
            "Kirra, no.",
            "\"Posting it with a little crown on his head,\" Kirra says, and does."
          ]
        },
        {
          "you": "(Laughing) Sophie! Help me! Get him off!",
          "spark": 12,
          "gaydar": 80,
          "them": [
            "\"Ethan, stop,\" Sophie says. She's laughing too hard for it to work.",
            {
              "note": "He keeps going for about three more seconds, then lets go."
            },
            "\"She said stop, so I stopped,\" he says, and looks at her. \"I always do what Soph says.\"",
            {
              "note": "Sophie goes a bit pink. She throws a cushion at him. He catches it and keeps it."
            },
            "\"You yelled for your girlfriend to save you,\" Kirra says. \"From being tickled. I'm putting that in the caption.\""
          ]
        }
      ]
    },
    {
      "you": "(Keep your feet under the coffee table the whole night.)",
      "spark": 24,
      "after": "Kirra, to Sophie, the next morning: \"[video] 'I'M GOING TO DIE'\" \"2400 views\" Sophie: \"delete it\" Kirra: \"no\" Kirra: \"ethan sat on your chair all night\" Sophie: \"on the ARM of my chair\"",
      "gaydar": 74,
      "them": [
        {
          "note": "You play three rounds of Codenames with your feet hidden under the coffee table. It works until you get up for a drink."
        },
        {
          "note": "Ethan's waiting. He catches your ankle as you step over his legs, you topple onto the couch, and he sits on the end with your ankles in his lap."
        },
        "\"Got you.\"",
        {
          "note": "You're laughing before he even starts. When he does start, you're kicking, howling, grabbing a cushion over your face. Kirra's phone is right there. Sophie's crying laughing."
        },
        "\"Stop! Stop! I'm going to die!\"",
        {
          "note": "He stops and lets your feet go."
        },
        "\"You're fine,\" he says, and messes up your hair. Then he sits on the arm of Sophie's chair for the rest of the night."
      ]
    }
  ],
  "after": "Kirra, to Sophie, the next morning: \"2400 views\" Sophie: \"delete it\" Kirra: \"no. top comment is 'the way he screamed NOT THE TOES'\" Kirra: \"ethan commented 'ticklish AND a pushover'\" Sophie: \"hes not a pushover\" Kirra: \"ok\" Kirra: \"you liked ethans comment btw\"",
  "debrief": "A video of you online feels huge for about a day, then people scroll past. It stopped when someone said stop."
},
    {
      "id": "sophie-ambush",
      "route": "sophie",
      "gaydar": 79,
      "irl": true,
      "title": "The rematch",
      "contact": "Sophie",
      "gaydarSays": "You double-knotted them. Ethan still had them off in about ten seconds.",
      "intro": "Two weeks after game night. Kirra invited you back, \"for a rematch\", and you know what that means. So you've kept your sneakers on and double-knotted them. Ethan's on the couch in his gym gear. Kirra's phone is already out.",
      "thinks": [
        "double knots. so nobody'd see the pink. babe Kirra POSTED the pink",
        "I held his arms down and I was looking at Ethan the whole time and I'm pretty sure {name} was too. Me and my boyfriend, both just looking at Ethan. Stop",
        "Kirra asked when we last had sex and I said last week. It wasn't last week. I don't actually know when it was"
      ],
      "them": [
        {
          "note": "You sit down on the rug with your knees up and your sneakers firmly on. Kirra looks at your feet. Then at Ethan."
        },
        "\"Socks off at the door, {name}. House rule.\"",
        "\"Not tonight,\" you say. \"I'm keeping them on. I know what you two are doing.\"",
        "\"We're not doing anything,\" Ethan says. \"Are we, Kirra?\"",
        "\"Nothing at all,\" Kirra says, and hits record.",
        {
          "note": "Ethan gets off the couch, sits on the rug and gets hold of your ankle like he's about to stretch out a client's hamstring."
        },
        "\"No. Ethan. No! I said they're staying on!\"",
        "\"Double knots,\" he says, working on them anyway. \"Cute.\"",
        {
          "note": "You kick. He just holds the ankle tighter. Kirra puts her phone in her teeth and grabs your other foot. Sophie, laughing, sits behind you and holds your arms. \"Sorry,\" she says. She doesn't sound sorry."
        },
        {
          "note": "Both sneakers off. Then the socks, pulled off by the toe, slowly. Still hot pink."
        },
        "\"Pink!\" Kirra says round the phone. \"Soph, your pink!\"",
        "I know. I did a good job.",
        "\"Right,\" Ethan says. \"Rematch. Three, two...\"",
        {
          "note": "He starts. Kirra starts too, phone in one hand, tickling with the other."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at the ceiling fan. Do not give Kirra the video.)",
          "them": [
            {
              "note": "You stare at the ceiling fan. Ethan's knuckles go up the arch, slow and firm. Kirra's nails go fast under the toes. Your whole body goes rigid."
            },
            "\"He's resisting!\" Kirra says. \"He's been training!\"",
            "\"Soph,\" Ethan says. \"Let go of his arms. Take a foot.\"",
            {
              "note": "Sophie lets go of your arms and takes over the other foot from Kirra, who sits back to film properly. Now it's Ethan and Sophie."
            }
          ],
          "replies": [
            {
              "you": "(Bite your lip. Not a sound.)",
              "them": [
                {
                  "note": "You hold it. Nothing comes out. Your eyes stream. The pink toes curl and cramp."
                },
                "\"This is not the same man as last time,\" Kirra says. \"This is not the same man.\"",
                "\"Soph,\" Ethan says, \"you must know a spot.\"",
                {
                  "note": "Sophie looks at your foot, then at you. She's got a little smile."
                }
              ],
              "replies": [
                {
                  "you": "(Look at her.) Soph. You wouldn't.",
                  "outcome": "held",
                  "spark": 30,
                  "them": [
                    {
                      "note": "She holds your eye for a second. Then she lets go of your foot and pushes Ethan's hands off the other one."
                    },
                    "Okay, that's enough. Kirra, you can stop, he's not going to do it.",
                    "\"He's so close though...\"",
                    "He's not. Look at him.",
                    {
                      "note": "Ethan lets go. Sophie hands you your socks and sits next to you while you put them on, her knee against yours. Kirra films that instead."
                    },
                    "\"Okay,\" Ethan says, a bit flat, and goes to the kitchen. He's in there a while."
                  ],
                  "after": "Kirra, to Sophie: \"[video] he didnt laugh\" Sophie: \"dont post that\" Kirra: \"why its a good one\" Sophie: \"because he'll hate it\" Kirra: \"ethans been in the kitchen for 20 min\""
                },
                {
                  "you": "(Say nothing. Keep holding.)",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "Sophie shuffles down and goes for your little toe, the one she always has to paint twice."
                    },
                    {
                      "note": "You last half a second. Then you shriek, loud, and you're giggling helplessly, and Ethan and Kirra pile back in."
                    },
                    "\"SOPHIE!\" Kirra screams. \"Soph broke him!\"",
                    "I've done your nails, {name}. I know where everything is.",
                    {
                      "note": "They stop when you finally gasp \"stop\". Sophie fist-bumps Ethan. Kirra gets that on video too."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"[video] soph found it\" Sophie: \"im a bit proud tbh\" Kirra: \"u fist bumped ethan\" Sophie: \"everyone fist bumps ethan\" Kirra: \"mm\""
                }
              ]
            },
            {
              "you": "(You can't. It comes out as a shriek.)",
              "them": [
                {
                  "note": "You break. You shriek, then giggle, high and helpless, and then you're twisting all over the rug trying to get your feet back. Not a chance."
                },
                "\"YES!\" Kirra says. \"Rematch to us!\"",
                "\"Same as last time,\" Ethan says, not stopping. \"Ticklish and a pushover.\"",
                {
                  "note": "Sophie's laughing so hard she's lying on the rug with you. Kirra's phone is right up close to your face."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! You win! You win, you win!",
                  "outcome": "cracked",
                  "spark": 18,
                  "them": [
                    {
                      "note": "They stop and let go. Ethan holds his hands up like he's racked a bar."
                    },
                    "\"Two nil.\"",
                    {
                      "note": "You curl up with your pink toes tucked under Sophie's leg. You're red to your ears. Kirra's already typing a caption."
                    },
                    "That was so loud.",
                    {
                      "note": "She's still giggling. Ethan sits down right next to her and she doesn't move over."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"posting it\" Sophie: \"don't\" Kirra: \"caption: 'rematch: still ticklish, still a pushover'\" Sophie: \"KIRRA\" Kirra: \"ethan already liked it\""
                },
                {
                  "you": "(Red, giggling) Kirra, put the phone down! Stop!",
                  "outcome": "cracked",
                  "spark": 16,
                  "them": [
                    {
                      "note": "Ethan lets go first. Kirra lowers the phone, but not all the way."
                    },
                    "\"Stopped! Hands off!\" Ethan says.",
                    {
                      "note": "You hug your knees with your feet hidden under you. Your hair's everywhere. Kirra's still filming your face."
                    },
                    "Are you okay? You did a full scream.",
                    {
                      "note": "Then Kirra plays the scream back on her phone and Sophie loses it. Ethan's laughing too, and every time they look at each other they set each other off again."
                    }
                  ],
                  "after": "Sophie, to Kirra: \"i feel bad\" Kirra: \"u laughed the hardest\" Sophie: \"i KNOW\" Kirra: \"you and ethan couldnt even look at each other\" Sophie: \"it was a funny noise kirra\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they even start.)",
          "them": [
            {
              "note": "You're gone straight away. Giggling, squealing, kicking at nothing, before Ethan's even properly started."
            },
            "\"Oh, he's WORSE!\" Kirra says. \"He's worse than last time!\"",
            "\"Soph, get in,\" Ethan says. \"Everyone on a foot.\"",
            {
              "note": "Sophie, laughing, lets go of your arms and takes the toes on one foot. Kirra props her phone against the couch so she can use both hands. Three of them."
            },
            "You said you weren't ticklish! At game night! You literally said it!"
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please, please stop!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie on the rug panting, arm over your eyes."
                },
                "\"That's a please,\" Ethan says. \"Fine.\"",
                "\"Got it,\" Kirra says.",
                {
                  "note": "Then Sophie pulls your foot back into her lap and taps the little toe."
                },
                "Ten more seconds? Just me. I'll be nice."
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! I'm done, Soph. Done.",
                  "outcome": "begged",
                  "spark": 12,
                  "them": [
                    "Fine. Spoilsport.",
                    {
                      "note": "You sit with your feet tucked under a cushion for the rest of the night. Ethan's put your sneakers on top of the fridge."
                    },
                    "\"Want them, sweetheart? Reach.\"",
                    {
                      "note": "You can't reach. Sophie can't either. Ethan picks her up round the waist so she can get them, and she shrieks, and Kirra films all of it."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"he begged lol\" Kirra: \"and then ethan picked u up\" Sophie: \"to get his SHOES\" Kirra: \"u didnt have to hold on that long\""
                },
                {
                  "you": "(Still giggling) ...Fine. Ten. Only you.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 83,
                  "them": [
                    {
                      "note": "Kirra counts down from ten. Sophie goes straight for the little toe. You scream laughing from 'ten'."
                    },
                    {
                      "note": "At 'one' Ethan and Kirra pile back in. You're laughing too hard to protest. They stop when you finally squeak \"stop\"."
                    },
                    "\"He asked!\" Kirra says. \"On camera! He asked for it!\"",
                    "I said ten seconds. You're the one who said yes.",
                    {
                      "note": "She's sitting back on her heels, looking at you. Ethan sits down beside her and bumps her shoulder. She bumps it back."
                    }
                  ],
                  "after": "Kirra, to Sophie: \"[video] he ASKED\" Kirra: \"4000 views\" Kirra: \"also u and ethan were doing the shoulder thing for an hour\" Sophie: \"what shoulder thing\" Kirra: \"soph\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back on the rug and let them.)",
              "them": [
                {
                  "note": "You stop fighting. You lie flat on Kirra's rug, laughing at the ceiling fan, pink toes wriggling in three people's hands."
                },
                "\"He's given up!\" Kirra says. \"He's just letting us!\"",
                "\"Look at him, Soph,\" Ethan says. \"Best night of his life.\"",
                {
                  "note": "It goes on. They take turns. Ethan does each toe one at a time, counting reps out loud. You're crying from laughing."
                },
                {
                  "note": "After a while Sophie stops. She sits back and watches your face."
                },
                "You know you can tell them to stop, right?"
              ],
              "replies": [
                {
                  "you": "(Gasping) Okay, stop. Stop! I mean it.",
                  "outcome": "kept",
                  "spark": 6,
                  "gaydar": 83,
                  "them": [
                    {
                      "note": "They let go the second you say it. Ethan wipes his hands on his shorts like he's finished a job."
                    },
                    "\"Three minutes ten,\" Kirra says. \"New record. Posting.\"",
                    {
                      "note": "Ethan slaps the sole of your foot, once. \"Good set.\""
                    },
                    {
                      "note": "Then he gets up and stretches. \"Soph, want to walk down to get gelato?\""
                    },
                    {
                      "note": "She looks at you on the rug. Then she gets her bag. They're gone for over an hour. Kirra keeps filming you in case you do anything else."
                    }
                  ],
                  "after": "Sophie, to Kirra: \"is he still on your rug\" Kirra: \"yes. hes eating your chips\" Kirra: \"where are u\" Sophie: \"still at the gelato place\" Kirra: \"its been an hour\" Sophie: \"its open late\""
                },
                {
                  "you": "(You can't get a word out.)",
                  "outcome": "kept",
                  "spark": 4,
                  "gaydar": 85,
                  "them": [
                    {
                      "note": "You open your mouth to say stop and only a wheeze comes out. They keep going."
                    },
                    "Ethan. Ethan, stop, he's gone purple.",
                    {
                      "note": "Ethan drops your foot. Kirra lets go of your shoulders."
                    },
                    "\"In my defence, he was smiling.\"",
                    "Because he can't talk, Ethan.",
                    {
                      "note": "You're lying across Kirra's rug with your hair stuck to your face, still giggling at nothing. Kirra's phone is still going."
                    },
                    {
                      "note": "Sophie looks at you for a long time. Then she picks up her keys."
                    },
                    "I'm going to head off. Ethan, are you going?",
                    "\"I live here.\"",
                    "Right. Yeah. Can you walk me down then?"
                  ],
                  "after": "Kirra, to Sophie: \"ur car is literally out the front\" Kirra: \"its been 40 min\" Sophie: \"we're talking\" Kirra: \"about {name}?\" Sophie: \"at first\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "You said no to the shoes and they took them anyway. You're allowed to be annoyed about that. They stopped when you said stop, and when you couldn't, Sophie said it."
    },
    {
      "id": "c6i",
      "route": "sophie",
      "title": "On Kirra's TV",
      "contact": "Sophie",
      "irl": true,
      "intro": "Three months with Sophie. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, and danced with a guy at the Wickham until 1am. Now it's Saturday brunch at Kirra's flat, with Sophie and two girls from Sophie's work. Ethan's at the gym. Socks off at the door, Kirra's rule. Linen shorts, a cropped tee, last night's hot pink toes, and some glitter on your neck you didn't see in the mirror. Kirra keeps smiling at you over the hollandaise.",
      "gaydar": 98,
      "gaydarSays": "Kirra put it on the actual TV. Stop. I'm still screaming about it.",
      "outfits": [
        {
          "label": "Jeans and a tee, last night's hot pink toes",
          "thinks": "jeans to brunch so he'd look straight. babe the toes. I DID the toes. they're in the video",
          "gaydar": -2,
          "intro": "Three months with Sophie. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, and danced with a guy at the Wickham until 1am. Now it's Saturday brunch at Kirra's flat, with Sophie and two girls from Sophie's work. Ethan's at the gym. Socks off at the door, Kirra's rule. Jeans and a plain tee, and last night's hot pink toes. Kirra keeps smiling at you over the hollandaise.",
          "them": [
            {
              "note": "Sophie looks at your pink toes on Kirra's rug and folds her arms."
            }
          ]
        },
        {
          "label": "Linen shorts, a cropped tee, pink toes and glitter you missed",
          "thinks": "There's glitter on his cheekbone. Quiet one",
          "them": [
            {
              "note": "Sophie spots the glitter on your cheek and goes very still."
            }
          ]
        },
        {
          "label": "The mini skirt from last night, a cardigan, pink toes",
          "thinks": "he wore the skirt from the video. to brunch. didn't even think to change. ok",
          "gaydar": 1,
          "intro": "Three months with Sophie. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, and danced with a guy at the Wickham until 1am. Now it's Saturday brunch at Kirra's flat, with Sophie and two girls from Sophie's work. Ethan's at the gym. Socks off at the door, Kirra's rule. The same mini skirt from last night with a cardigan over a tee, and last night's hot pink toes. Kirra keeps smiling at you over the hollandaise.",
          "them": [
            {
              "note": "Kirra sees the skirt, puts her fork down and says \"oh, he's wearing it\" to nobody."
            },
            {
              "note": "Sophie closes her eyes for a second and breathes out through her nose."
            }
          ]
        }
      ],
      "debrief": "Getting found out on a TV in front of a room is about as public as it gets, and you're allowed to hate it. Crying at brunch in front of people is allowed too. For Sophie the hard bit was the lying, not the skirt.",
      "thinks": [
        "quiet one tonight x. with the x. and then he's up on his toes in a skirt with his arms round a guy with a moustache. honestly I'm more annoyed about the x than the guy",
        "He's never looked at me like that. Three months. Not even in bed",
        "I knew at movie night. I painted his toes hot pink and kept sleeping with him anyway, so. Totes my fault"
      ],
      "them": [
        {
          "note": "Kirra stands up with her phone and the remote, and the TV goes blue."
        },
        {
          "from": "Kirra",
          "text": "Okay. Before the eggs get cold. I have content."
        },
        "Kirra, no. Is this Ethan at the gym again? Not at brunch.",
        {
          "from": "Kirra",
          "text": "It's not Ethan. So I was at the Wickham last night."
        },
        {
          "note": "It's dark and pink and shaky. A crowd, a disco ball. Then it's you, in the crop top and the skirt and the heels, up on your toes with your arms round the neck of a guy with a moustache."
        },
        {
          "note": "The two girls from Sophie's work stop chewing."
        },
        "Wait.",
        "Wait, that's... why is the sound off?",
        {
          "from": "Kirra",
          "text": "I'm building up to the sound."
        },
        {
          "note": "Sophie looks at the TV. Then down at your feet on Kirra's rug. Hot pink. She did them."
        },
        "You said quiet one. You literally texted me 'quiet one tonight x'. With a kiss."
      ],
      "replies": [
        {
          "you": "Kirra. Turn it off. Please.",
          "them": [
            {
              "from": "Kirra",
              "text": "No! It's the best bit!"
            },
            "Leave it on.",
            {
              "note": "Sophie doesn't look away from the screen. On the TV you're laughing with your head back."
            },
            "I want to see it. I want to see what a quiet one looks like."
          ],
          "replies": [
            {
              "you": "(Reach for the remote.)",
              "them": [
                {
                  "note": "Kirra holds the remote up over her head. You grab for it. Your thumb hits a button."
                },
                {
                  "note": "The sound comes on, loud. The song, the crowd, and then your own voice, right up close to Kirra's phone, high and happy and a bit drunk."
                },
                {
                  "note": "\"I'm having the best night of my LIFE,\" you scream on the TV. \"He's so pretty! Dani! He's SO pretty!\""
                },
                {
                  "note": "Your voice goes all the way up at the end. It fills Kirra's lounge room."
                }
              ],
              "replies": [
                {
                  "you": "(Hear yourself. Your face crumples.)",
                  "them": [
                    {
                      "note": "You've never heard yourself sound like that. That happy. It hits all at once and you're crying on Kirra's rug before you can stop it."
                    },
                    {
                      "from": "Kirra",
                      "text": "Oh no. Oh no, no, no. I broke him. Soph, I broke him."
                    },
                    {
                      "note": "Kirra kills the TV, drops down next to you on the rug and hugs you hard, sideways, half on top of you."
                    },
                    {
                      "from": "Kirra",
                      "text": "I'm sorry. I'm so sorry. You sounded so cute. That's why I wanted everyone to hear it."
                    },
                    {
                      "note": "One of the girls from Sophie's work gets the tissues off the bathroom shelf. The other one tops up your mimosa without asking."
                    },
                    {
                      "note": "Sophie sits down on your other side and pushes your fringe off your face with two fingers, like she does before photos."
                    },
                    "Stop. Stop crying, you'll set me off, and I've got my good mascara on.",
                    "I'm not even mad about the skirt. I'm mad you didn't take me. Not as your girlfriend. Obviously not as your girlfriend now.",
                    {
                      "from": "Kirra",
                      "text": "Next Friday. All of us. The Wickham. He's coming. He's ours now."
                    }
                  ],
                  "gaydar": 98,
                  "spark": 2,
                  "after": "Kirra, to Sophie, that night: \"is he ok\" Sophie: \"hes at mine. we're doing face masks\" Kirra: \"is that weird\" Sophie: \"no. its actually so nice\" Kirra: \"im deleting the video\" Kirra: \"im keeping the bit where he says pretty\"",
                  "outcome": "cried",
                  "thinks": [
                    "he heard himself go he's SO pretty on the TV and just broke. I've literally been naked in front of him and got a you look nice",
                    "I fixed his fringe and told him to stop crying and I was nicer to him than I've been in weeks. It's so much easier when I don't have to sleep with him"
                  ]
                },
                {
                  "you": "(Laugh, louder than the TV.) Oh my god. Who let me talk?",
                  "them": [
                    {
                      "from": "Kirra",
                      "text": "Dani! Dani let you talk!"
                    },
                    {
                      "note": "The girls from Sophie's work are both laughing now. One of them has her hand over her mouth."
                    },
                    "He's so pretty. You said he's so pretty. About a moustache.",
                    "Stop. Not me sitting here, at brunch, with my boyfriend... no. You're not my boyfriend. Are you. Like, you can't be.",
                    "I'm screaming. I'm actually screaming inside."
                  ],
                  "gaydar": 97,
                  "spark": 4,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Soph. I can explain.",
              "them": [
                "Stop. I'm watching.",
                {
                  "note": "She watches the whole thing, all two minutes of it, with her mimosa halfway to her mouth. At the end the guy with the moustache kisses your cheek and it cuts off."
                },
                "Okay.",
                "Okay. Now explain."
              ],
              "replies": [
                {
                  "you": "I said I was staying in. I went out with Dani. I'm sorry I lied.",
                  "them": [
                    "You lied. On a Friday. With a kiss.",
                    {
                      "note": "She puts her glass down. The girls from her work look at their eggs."
                    },
                    "Not me finding out on Kirra's TV in front of half of property law.",
                    "I don't care about the skirt. I'd have helped you pick the skirt. I care that I was home doing a face mask thinking you were tired.",
                    "So. Yeah. We're done. Obviously."
                  ],
                  "gaydar": 95,
                  "spark": 6,
                  "outcome": "dodged"
                },
                {
                  "you": "It's me. In a skirt. With a guy. Soph, I'm gay.",
                  "them": [
                    {
                      "note": "Nobody says anything. Kirra puts the remote down very slowly."
                    },
                    "Yeah.",
                    "Yeah. Okay. I think I knew. Like, I think I knew at Devil Wears Prada.",
                    {
                      "from": "Kirra",
                      "text": "I knew at the quiz."
                    },
                    "Kirra. Not now.",
                    {
                      "note": "Sophie gets up, comes round the coffee table and hugs you, quick and tight, and sits down next to you instead of across."
                    },
                    "You should've told me. I'd have come. I'm a really good wing woman."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                }
              ]
            }
          ]
        },
        {
          "you": "Pause it. Pause it there. Kirra, look at my calves in those heels.",
          "them": [
            {
              "from": "Kirra",
              "text": "STOP."
            },
            {
              "note": "Kirra pauses it. You, mid-spin, one heel up, skirt flared out. One of the girls from Sophie's work says \"oh. Actually, yeah.\""
            },
            "Stop. Stop it. I'm screaming.",
            "Your calves are better than mine. At my brunch. In front of work."
          ],
          "replies": [
            {
              "you": "Kirra, is it posted? Caption it 'quiet one'.",
              "them": [
                {
                  "from": "Kirra",
                  "text": "It's been up since 1am. 'his quiet night in'. Two thousand views."
                },
                "Two thousand?",
                {
                  "from": "Kirra",
                  "text": "Ethan liked it from the gym."
                },
                "You said quiet one, {name}. To me. With a kiss."
              ],
              "replies": [
                {
                  "you": "I know. It was a really loud one. I'm sorry, Soph.",
                  "them": [
                    "You're sorry.",
                    {
                      "note": "She looks at the paused screen for a long time. You, mid-spin."
                    },
                    "Okay. I believe you're sorry. Totes. I just don't think you're sorry about the right thing.",
                    "You're sorry you lied. You're not sorry you went.",
                    {
                      "from": "Kirra",
                      "text": "Why would he be sorry he went? Look at him."
                    }
                  ],
                  "gaydar": 96,
                  "spark": 5,
                  "outcome": "dodged"
                },
                {
                  "you": "Soph. You know, right? I'm gay.",
                  "them": [
                    "I mean. I do now. I'm looking at it.",
                    {
                      "note": "Then she laughs, one big surprised laugh, and puts her face in her hands."
                    },
                    "Stop. Oh my god. Not me finding out on a forty-inch TV. Kirra, I'm going to kill you.",
                    {
                      "from": "Kirra",
                      "text": "You're welcome."
                    },
                    "We're friends. Okay? We're friends. And I'm doing your toes again, that pink's chipped."
                  ],
                  "gaydar": 100,
                  "spark": 3,
                  "outcome": "told"
                }
              ]
            },
            {
              "you": "Who is he, though? Kirra, did you get his name?",
              "them": [
                {
                  "from": "Kirra",
                  "text": "I got his NAME and his Instagram and his star sign."
                },
                {
                  "note": "Sophie turns and looks at you. Slowly."
                },
                "You're asking for his name. At brunch. In front of me."
              ],
              "replies": [
                {
                  "you": "...Sorry. Yes. I'd like his name.",
                  "them": [
                    {
                      "note": "Kirra screams. One of the girls from Sophie's work starts clapping, and stops when Sophie looks at her."
                    },
                    "Totes fine. Totes. Kirra, send it to him.",
                    {
                      "from": "Kirra",
                      "text": "Sent."
                    },
                    "Not me helping my boyfriend get a guy's number. Ex. My ex.",
                    "He'd better be nice to you. He'd better have a job."
                  ],
                  "gaydar": 99,
                  "spark": 2,
                  "outcome": "dodged"
                },
                {
                  "you": "I'm joking. Obviously I'm joking.",
                  "them": [
                    "You're not.",
                    {
                      "from": "Kirra",
                      "text": "You're really not."
                    },
                    {
                      "note": "Sophie takes her plate into the kitchen and doesn't come back for a while. You can hear the tap running."
                    },
                    {
                      "from": "Kirra",
                      "text": "She'll be okay. I'm still sending you his name."
                    }
                  ],
                  "gaydar": 95,
                  "spark": 6,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        },
        {
          "you": "That's not me. That's someone who looks like me.",
          "them": [
            {
              "from": "Kirra",
              "text": "Oh, okay. Hang on."
            },
            {
              "note": "Kirra pinches the video bigger on her phone. The TV zooms with it. Your feet, in the heels. Hot pink."
            },
            {
              "note": "Everyone looks down at your feet on the rug. Hot pink."
            },
            "I painted those, {name}. On Wednesday. On my couch."
          ],
          "replies": [
            {
              "you": "Lots of people wear hot pink.",
              "them": [
                {
                  "from": "Kirra",
                  "text": "Okay. Let's ask the guy."
                },
                {
                  "note": "She's already on his Instagram, typing with both thumbs."
                },
                {
                  "from": "Kirra",
                  "text": "'hi did you dance with a guy in a skirt and pink toes at the wickham last night. asking for his girlfriend.'"
                }
              ],
              "replies": [
                {
                  "you": "Kirra. Don't you dare.",
                  "them": [
                    {
                      "from": "Kirra",
                      "text": "Sent."
                    },
                    {
                      "note": "Her phone buzzes almost straight away. She reads it and turns the screen round so Sophie can see."
                    },
                    {
                      "from": "Kirra",
                      "text": "He says 'yes!! he was so fun. tell him to message me'."
                    },
                    "Stop.",
                    "Okay. I'm going to go. Kirra, can you drive me? I can't be in here."
                  ],
                  "gaydar": 94,
                  "spark": 7,
                  "outcome": "dodged"
                },
                {
                  "you": "(Stop talking. Eat your eggs.)",
                  "them": [
                    {
                      "note": "You eat your eggs. Nobody else eats. Kirra's phone buzzes and she doesn't read it out."
                    },
                    "It's fine. We're done. Can someone pass the hollandaise?",
                    {
                      "note": "One of the girls from her work passes it. Sophie puts some on her plate and doesn't eat it."
                    }
                  ],
                  "gaydar": 92,
                  "spark": 9,
                  "outcome": "dodged"
                }
              ]
            },
            {
              "you": "Okay. It's me. It was a dare.",
              "them": [
                "A dare. From who?"
              ],
              "replies": [
                {
                  "you": "Dani.",
                  "them": [
                    {
                      "from": "Kirra",
                      "text": "Dani's in the video. She's holding your bag. She's crying laughing."
                    },
                    "So Dani dared you to have the best night of your life?",
                    {
                      "note": "Sophie looks at the TV for a while, at you up on your toes."
                    },
                    "You've never once gone up on your toes for me. And I'm not even jealous. It's like watching Kirra have a good night."
                  ],
                  "gaydar": 95,
                  "spark": 6,
                  "outcome": "cried"
                },
                {
                  "you": "...Myself.",
                  "them": [
                    {
                      "note": "Sophie laughs once, without meaning to."
                    },
                    "Okay. That's the most honest thing you've said all week.",
                    "So, like, dare yourself to tell me.",
                    {
                      "note": "She waits. Kirra turns the TV off. It's very quiet."
                    },
                    "You don't have to. I know. I just wanted you to get to say it before Kirra posts it.",
                    {
                      "from": "Kirra",
                      "text": "I posted it at 1am."
                    },
                    "Kirra."
                  ],
                  "gaydar": 97,
                  "spark": 4,
                  "outcome": "dodged"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "sophie-end",
      "route": "sophie",
      "gaydar": 99,
      "spark": 0,
      "gaydarSays": "Nathan has three polos and wears them in order. Kirra calls him restful. She means it nicely.",
      "title": "Sophie and Nathan",
      "contact": "Sophie",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans and a black tee",
          "thinks": "black tee at the Wickham like that's blending in. babe it's a gay bar, you're the only plain tee here",
          "gaydar": -2,
          "intro": "Three months later. You're at the Wickham with Dani on a Friday. Jeans and a black tee. Then Sophie walks in with Kirra and a guy in a navy polo, chinos and boat shoes, holding Sophie's hand. He looks a bit lost. Nathan.",
          "them": [
            {
              "note": "Sophie looks at the plain tee for a second, then at Nathan's polo, and laughs a bit to herself."
            }
          ]
        },
        {
          "label": "The mini skirt, heeled sandals, hot pink toes and glitter",
          "thinks": "Skirt from the video, heels, glitter. He looks so happy. I don't feel bad about any of it, I checked",
          "gaydar": 1,
          "intro": "Three months later. You're at the Wickham with Dani on a Friday, in the mini skirt, heeled sandals, hot pink toes and glitter. Then Sophie walks in with Kirra and a guy in a navy polo, chinos and boat shoes, holding Sophie's hand. He looks a bit lost. Nathan.",
          "them": [
            {
              "note": "Kirra sees your skirt and screams \"THE VIDEO\" across the bar."
            },
            {
              "note": "Sophie laughs, puts her head on Nathan's shoulder, and leaves it there."
            }
          ]
        }
      ],
      "thinks": [
        "Nathan's never been in a gay bar in his life and {name} was already here with Dani. Obviously he was. It's Friday",
        "Nathan stays over and doesn't want to talk about my cuticles after. Sorry, that's mean. True though",
        "Kirra's already picking a man for him. I said I'd do his toes for the date. Hot pink, obviously"
      ],
      "them": [
        {
          "note": "Sophie walks over, smiling, and gives you a quick side-on hug."
        },
        "Hi. Kirra's birthday. She wanted to come here. Of course she did.",
        "This is Nathan. Nathan, this is {name}. We used to see each other.",
        "\"Hey man,\" Nathan says, and shakes your hand. \"First time in a gay bar. Everything's really pink.\"",
        "He's a physio. Kirra says he's so straight it's restful. I've stopped arguing with her.",
        {
          "if": "sophie-ambush=held",
          "text": "Kirra still has the video of you not laughing. Ethan still won't watch it."
        },
        {
          "if": "sophie-ambush=cracked|begged|kept",
          "text": "\"Wait,\" Nathan says. \"Kirra's video. The rematch. That's you?\" He laughs. \"She shows it to everyone. Very reactive feet, man.\""
        },
        {
          "if": "sophie-ambush=cracked|begged|kept",
          "note": "Sophie puts her hand over her face. Kirra, somewhere behind you, is already filming."
        },
        {
          "text": "Kirra's been trying to find the guy from the video, by the way. For you. She's totes obsessed. I'm screaming.",
          "if": "c6i=told"
        },
        {
          "text": "And I'm still sorry about brunch. The sound. Kirra says she broke you and she's never casting anything again. She's cast like four things since.",
          "if": "c6i=cried"
        },
        {
          "text": "Kirra still says it was a dare. In the air quotes voice. Every time, babe.",
          "if": "c6i=dodged"
        }
      ],
      "replies": [
        {
          "you": "Nathan! Welcome, babe. They're meant to be pink, that's the point. Soph, he's cute. Good job.",
          "them": [
            "He is cute.",
            "You look really good, {name}.",
            "Are you seeing anyone?"
          ],
          "replies": [
            {
              "you": "Not yet. Dani keeps introducing me to guys. Strictly for dancing.",
              "them": [
                "\"Strictly for dancing,\" Sophie says, very dry. \"Sure.\"",
                "Kirra, behind her: \"he's GAY, Soph\" Sophie: \"I know, Kirra.\""
              ]
            },
            {
              "you": "Not really. I'm just figuring stuff out.",
              "them": [
                "Mm. Okay.",
                "Kirra says you've been here every Friday for three months, but okay."
              ]
            }
          ]
        },
        {
          "you": "(Turn to Nathan.) Nathan. Can we go outside for a minute? I need to say something.",
          "them": [
            "\"Yeah, sure man,\" Nathan says, and follows you out to the street.",
            {
              "note": "Out of the noise it's suddenly very quiet. He stands close with his hands in his pockets, waiting. He's got really nice eyelashes."
            },
            "\"What's up?\""
          ],
          "replies": [
            {
              "you": "I want Sophie back. I know that's... I just wanted to be honest with you.",
              "them": [
                "\"Oh. Okay,\" Nathan says. His mouth twitches. He's trying very hard not to laugh. \"That's... brave, man.\"",
                {
                  "note": "Then he asks if you want a water, the way he'd ask a patient who's about to faint."
                },
                {
                  "note": "Sophie's at the door. She's been there the whole time."
                },
                "\"You went outside to win me back and he's offering you a water.\"",
                "\"You said it so quietly, {name}. You looked like you were about to cry. It was very cute.\"",
                {
                  "note": "She licks her thumb and fixes your fringe. You let her."
                },
                "\"No, {name}. Come inside. Kirra's buying shots and she wants you in the photo.\"",
                "\"And the guy at the bar in the white shirt has looked at you three times. Kirra's already gone to get his name.\""
              ]
            },
            {
              "you": "Your hands are very... professional. Sorry. Never mind. Bye.",
              "gaydar": 100,
              "them": [
                "\"Thanks, I'm a physio,\" he says, smirking. \"You're not the first guy to notice.\"",
                {
                  "note": "You go red so fast you feel it in your ears. Dani appears, takes your arm and walks you back inside without a word. She's shaking with silent laughter."
                }
              ]
            }
          ]
        },
        {
          "you": "(To Kirra) Boat shoes. At the Wickham.",
          "them": [
            "Kirra: \"I KNOW.\"",
            "He likes his boat shoes, okay.",
            "And he's never once asked to borrow my concealer. So."
          ]
        },
        {
          "you": "Hi Nathan. Have fun. The pink ones are the best ones.",
          "them": [
            "\"Thanks, man! Will do.\"",
            "Sophie, quietly: \"Thanks for being nice. After everything.\"",
            "\"You too,\" you say. She nods and goes back to Nathan."
          ]
        }
      ],
      "after": "Kirra posts a story: Nathan holding a pink cocktail, looking baffled, and you in the background, being spun round by Dani. Caption: \"soph's new man and soph's old man at the same gay bar. happy birthday to me\". Sophie reposts it with three heart emojis.",
      "debrief": "Running into your ex and her new boyfriend is awkward for everyone. You don't have to come out of it looking good."
    },
    {
      "id": "c6j",
      "route": "bianca",
      "gaydar": 25,
      "gaydarSays": "He smelled so good. Like, really good. I'm not overthinking it.",
      "title": "Rooftop",
      "contact": "Bianca",
      "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. You wore a fitted black shirt, clear gloss, a clear coat on your nails, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere.",
      "outfits": [
        {
          "label": "A black shirt, the women's perfume and a tiny bit of clear gloss",
          "thinks": "black shirt and he smells like MY perfume. nearly. i kept leaning in to work it out. ok kind of hot",
          "gaydar": -5,
          "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A plain black shirt, the tiniest bit of clear gloss, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere.",
          "them": [
            "and the gloss?? i noticed. im not mad. im intrigued"
          ]
        },
        {
          "label": "A fitted black shirt, clear gloss and nails, the women's perfume",
          "thinks": "his nails were done. on a first date. better than mine babe. i was jealous for the whole first drink and then i got over it, mostly",
          "them": [
            "also your nails were done?? better than mine?? i was weirdly jealous and also like. hmm"
          ]
        },
        {
          "label": "A silky shirt half undone, perfume, gloss, nails and a gold necklace",
          "thinks": "his shirt was more undone than my top and half the rooftop was looking at him. the guys mostly. he knew",
          "gaydar": 5,
          "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A silky black shirt with three buttons undone, a delicate gold necklace, clear gloss, clear nails, and the perfume from the women's counter.",
          "them": [
            "also the necklace?? cute",
            "you had more of your shirt undone than me. i was like wait whos the girl here lol"
          ]
        }
      ],
      "thinks": [
        "he smelled SO good. was he flirting with me or my outfit. idk. i'd still have let him come up",
        "girl perfume on a first date, I know what that means, I'm not dumb. don't care. he's fun. if he doesn't kiss me on date two I'm asking Shay what's wrong with me"
      ],
      "them": [
        "home 🥰",
        "that was so fun",
        "ok random but you smelled SO good. what is that, i need it for myself"
      ],
      "replies": [
        {
          "you": "Ha. It's actually a women's perfume.",
          "gaydar": 35,
          "them": [
            "wait really",
            "ok honestly that's kind of hot? like confident",
            "most guys i date smell like the gym lol"
          ],
          "replies": [
            {
              "you": "I wore a bit of gloss too. Did you notice?",
              "gaydar": 40,
              "them": [
                "omg yes i did",
                "i wasn't going to say anything in case you were embarrassed",
                "it looked good though!! you should try a tinted one next time. like a pinky nude. it'd suit you"
              ],
              "replies": [
                {
                  "you": "You think?",
                  "them": [
                    "100%",
                    "i'll send you the one i use",
                    "wait this is turning into a makeup chat lol",
                    "anyway. second date? 😊"
                  ]
                },
                {
                  "you": "Maybe I'll leave the makeup to you.",
                  "gaydar": 35,
                  "them": [
                    "haha ok",
                    "im still sending it",
                    "are we doing this again or what"
                  ]
                }
              ]
            },
            {
              "you": "Is that weird?",
              "them": [
                "no?? who cares where its from",
                "i'd wear your cologne if it smelled nice. same thing",
                "anyway i want to see you again. like soon"
              ]
            }
          ]
        },
        {
          "you": "Just something I picked up. Glad you liked it.",
          "them": [
            "liked it is an understatement",
            "i kept leaning in. i hope that wasn't obvious lol",
            "can i see you again?"
          ],
          "replies": [
            {
              "you": "It was a bit obvious. I liked it.",
              "them": [
                "😳",
                "ok good",
                "next weekend? you pick"
              ]
            },
            {
              "you": "Yeah. Next weekend?",
              "them": [
                "yes!! 🥰",
                "wear the perfume again pls"
              ]
            }
          ]
        },
        {
          "you": "It's my secret.",
          "them": [
            "ugh fine. mysterious",
            "i'll get it out of you on date two",
            "there is a date two right? 😏"
          ],
          "replies": [
            {
              "you": "There's a date two.",
              "them": [
                "good 😊 night {name} x"
              ]
            },
            {
              "you": "I'll trade you. Perfume for where your earrings are from.",
              "gaydar": 30,
              "them": [
                "lol why do you want my earrings",
                "ok deal",
                "night x"
              ]
            }
          ]
        },
        {
          "you": "Thanks! You smelled good too. Vanilla? Is it vanilla? Sorry. I'm bad at this.",
          "gaydar": 30,
          "them": [
            "its vanilla and tonka lol",
            "how did u know that",
            "anyway yes to date two. before you ask"
          ]
        }
      ],
      "after": "Bianca, to her friend Shay: \"date was SO good. hes funny. and he smelled amazing\" Shay: \"what did he smell like\" Bianca: \"honestly kind of like me\" Bianca: \"like a girl perfume. not mine. but like\" Shay: \"?\" Bianca: \"idk it was nice\""
    },
    {
      "id": "c6k",
      "route": "bianca",
      "gaydar": 60,
      "gaydarSays": "He took my advice about the gloss. Then he kept going. I'm not mad. I don't know what I am.",
      "title": "Gelato",
      "contact": "Bianca",
      "irl": true,
      "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink and wore a cream cropped knit with your high-waisted jeans. On the walk over you saw yourself in a shop window and liked what you saw.",
      "outfits": [
        {
          "label": "Tinted gloss and pink nails, with a plain tee",
          "thinks": "gloss and pink nails and then a plain tee like that cancels it out. babe i could see the pink from the gelato counter",
          "gaydar": -5,
          "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink. You kept the rest plain, a white tee and jeans, just in case.",
          "them": [
            {
              "note": "She looks at your plain tee and does a tiny pout, like you've only done half your homework."
            }
          ]
        },
        {
          "label": "Tinted gloss, pink nails, a cream cropped knit",
          "thinks": "cream crop knit. he took the gloss thing and RAN. I clapped. I didn't kiss him hello, didn't even think about it till after",
          "them": [
            {
              "note": "She sees the cropped knit and claps, and doesn't kiss you hello."
            }
          ]
        },
        {
          "label": "Tinted gloss, pink nails, cropped knit, hoops and mascara",
          "thinks": "Hoops and mascara. He looked beautiful. I took a step back to look and then I just stayed back there the whole night",
          "gaydar": 5,
          "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice and then some: tinted gloss, soft pink nails, a cream cropped knit with high-waisted jeans, little gold hoops and mascara. On the walk over you saw yourself in a shop window and liked what you saw.",
          "at": 2,
          "them": [
            "Wait. Mascara too? And HOOPS?",
            {
              "note": "She takes a step back to look at you properly, and doesn't step back in."
            }
          ]
        }
      ],
      "thinks": [
        "I said try a tinted gloss and he did the gloss AND the nails. yesss. it's so cute. it's just cute on a gay guy and I kind of did that",
        "i hugged him shorter. didn't mean to. only noticed after",
        "I grabbed his hand and it was to look at the Essie. I'd rather take him shopping than take him home, which, ok, that's new for me"
      ],
      "them": [
        {
          "note": "She hugs you hello. It's a nice hug. It's a shorter hug than last time."
        },
        "Oh my god. The gloss. You actually did it!",
        {
          "note": "She grabs your hand, but only to turn it over and look at your nails."
        },
        "And your NAILS. Okay, who are you? This colour is so good on you. Is that the Essie one? It is, isn't it."
      ],
      "replies": [
        {
          "you": "It is. I picked it because of you.",
          "gaydar": 65,
          "them": [
            "Stop. Me?",
            "Okay can I be honest? You suit this so much more than the black shirt. Like the black shirt was fine. But you look way more relaxed.",
            "You know what you'd look amazing in? A little skirt. Like a pleated one. With those legs? Babe."
          ],
          "replies": [
            {
              "you": "A skirt? Really?",
              "gaydar": 70,
              "them": [
                "Yes! Don't look at me like that. Guys wear skirts. Harry Styles wears dresses on magazine covers.",
                "We should go shopping. Like next weekend. I know exactly which shop in the city.",
                {
                  "note": "She's already got her phone out, showing you skirts. She hasn't looked at your face in a minute."
                },
                "This one. Or this one. Ooh. Or this one in lilac."
              ],
              "replies": [
                {
                  "you": "The lilac one.",
                  "gaydar": 75,
                  "them": [
                    "I KNEW you'd say lilac",
                    "Okay, it's a date. A shopping date. That's still a date. Right?",
                    {
                      "note": "She goes back to scrolling."
                    }
                  ]
                },
                {
                  "you": "Isn't this meant to be a date, not a shopping trip?",
                  "them": [
                    {
                      "note": "She laughs, then stops."
                    },
                    "Oh. Yeah. Sorry. I got carried away.",
                    "It is a date. Totally. Do you want to... walk along the river or something?",
                    {
                      "note": "She puts her phone away. She doesn't take your hand."
                    }
                  ]
                }
              ]
            },
            {
              "you": "Let's not get carried away.",
              "them": [
                "Okay okay. Baby steps.",
                "But I'm putting it on the list.",
                "There's a list now. Sorry."
              ]
            }
          ]
        },
        {
          "you": "It was just a dare from Dani.",
          "gaydar": 55,
          "them": [
            "Dani dared you to match your gloss to your nails?",
            {
              "note": "She raises an eyebrow and licks her gelato."
            },
            "Okay. Well tell Dani she has good taste.",
            "Honestly, you look really good. Like, better than me, which is rude."
          ],
          "replies": [
            {
              "you": "You look great too.",
              "them": [
                "Thanks babe",
                {
                  "note": "She's never called you babe before. It's how she says it to Shay on the phone."
                }
              ]
            },
            {
              "you": "Okay, it wasn't a dare. I just like it.",
              "gaydar": 65,
              "them": [
                "I know 😊",
                "Then wear more of it. Seriously. You did this little smile when I clocked the nails. I saw it."
              ]
            }
          ]
        },
        {
          "you": "(Lean in to kiss her.)",
          "gaydar": 65,
          "them": [
            {
              "note": "She turns at the last second and you get her cheek."
            },
            "Sorry. Sorry, I don't know why I did that.",
            "It's not you. Well. I don't know. It felt a bit like kissing one of my friends? Which sounds so bad.",
            "Can we just... have gelato and walk? I really like hanging out with you. I just don't know what this is anymore."
          ],
          "replies": [
            {
              "you": "Yeah. Gelato and a walk.",
              "them": [
                "Okay. Good.",
                "The gloss is really good, by the way. I'm stealing it.",
                {
                  "note": "On the walk she links her arm through yours and talks about Shay's birthday the whole way."
                }
              ]
            },
            {
              "you": "Was it the nails?",
              "them": [
                "No! The nails are cute.",
                "It's like... I don't know. I'd go dancing with you in a second. I just can't picture, like. The rest of it. Sorry. Does that make sense?"
              ]
            }
          ]
        },
        {
          "you": "Okay, who are YOU? You haven't looked at my face once.",
          "them": [
            "I have!",
            {
              "note": "She looks at your face. Then at your mouth."
            },
            "Okay, I've looked at your mouth. At the gloss. Not like that.",
            "That's bad, isn't it. I'm a terrible date. Gelato's on me."
          ]
        }
      ],
      "after": "Bianca, to Shay: \"second date was fun\" Shay: \"just fun?\" Bianca: \"he did his nails pink. and the gloss i told him about\" Shay: \"so is he gay\" Bianca: \"idk\" Bianca: \"i want to take him shopping more than i want to kiss him if thats what ur asking\" Shay: \"bianca\""
    },
    {
      "id": "bianca-sephora",
      "route": "bianca",
      "title": "Shopping with Bianca",
      "contact": "Bianca",
      "irl": true,
      "gaydar": 70,
      "spark": 25,
      "gaydarSays": "Took him to the beauty store. He swatched more than me. I'm not even mad, I'm proud.",
      "intro": "A Saturday between dates. Bianca takes you to the big beauty store in the Queen St Mall. \"Just to look,\" she says. She's holding a basket already.",
      "thinks": [
        "the tester was better on him. on HIM. I put mine back on the shelf",
        "a month. we haven't even kissed. Shay thinks that's romantic and I'm like Shay he's at the lip wall asking about finishes",
        "bit sad tbh. mostly excited. I've always wanted a gay best friend and I think I've got one, I just wanted the boyfriend first"
      ],
      "them": [
        "Okay. Rules. You're allowed one lip, one blush, and one thing you didn't know you needed.",
        {
          "note": "She pulls you to the lip wall and holds a tester up to your face."
        },
        "This. This is your colour. Don't argue.",
        {
          "note": "She holds the tester up to her own lips, then back to yours, and puts her own one back on the shelf."
        }
      ],
      "replies": [
        {
          "you": "Bianca, people are looking.",
          "them": [
            "Nobody's looking. And if they are they're thinking 'that boy has great taste in friends'.",
            {
              "note": "The girl at the counter says \"that's so your colour\" to you, not to Bianca."
            },
            "See? She agrees."
          ],
          "replies": [
            {
              "you": "Friends? I thought this was a date.",
              "spark": 30,
              "them": [
                "It is! It's a... shopping date.",
                {
                  "note": "She swatches a blush on your wrist, then on hers, and compares them."
                },
                "Yours looks better. That's a bit rude, babe."
              ],
              "after": "Bianca, to Shay: \"took him shopping\" Shay: \"was it a date\" Bianca: \"idk. it felt like taking you shopping. but with a boy who looks better in my blush\""
            },
            {
              "you": "Okay. One lip. And this blush.",
              "spark": 22,
              "them": [
                "Yes! And the thing you didn't know you needed.",
                {
                  "note": "She drops a little pot of glitter in the basket."
                },
                "Wear it on Saturday. I want to see it on you."
              ],
              "after": "Bianca, to Shay: \"he's wearing glitter on saturday\" Shay: \"for you?\" Bianca: \"for HIM. that's the point\""
            }
          ]
        },
        {
          "you": "(Lean in.) Do the other side too.",
          "them": [
            {
              "note": "She does your other cheek. Then your lip. The shop girl comes over to help. You stand there with two women doing your face and it feels great."
            },
            "Oh my god. Look at you.",
            "Okay I have to be honest. I don't want to kiss you even a tiny bit right now. But babe. BABE. Look at your cheekbones."
          ],
          "replies": [
            {
              "you": "Thanks? I think?",
              "spark": 18,
              "them": [
                "It's not mean! It's a compliment. You're so pretty.",
                "Too pretty for me. Shay's going to agree, watch."
              ],
              "after": "Bianca, to Shay: \"he let me and the shop girl do his whole face\" Shay: \"and?\" Bianca: \"and he's prettier than me now. so i guess we're friends\""
            },
            {
              "you": "Can we still go to dinner? Like a date?",
              "spark": 26,
              "them": [
                "Yes. Obviously. Dinner.",
                {
                  "note": "At dinner she spends the whole time looking at your lip colour in the light."
                },
                "Sorry. It's just really good on you."
              ],
              "after": "Bianca, to Shay: \"we had dinner\" Shay: \"date dinner?\" Bianca: \"girls dinner. i think. he didn't notice\""
            }
          ]
        }
      ],
      "debrief": "Letting someone hype you up can feel great. You get to keep what you liked."
    },
    {
      "id": "c6l",
      "route": "bianca",
      "gaydar": 85,
      "gaydarSays": "I did his makeup for Shay's birthday. Halfway through I realised I wasn't on a date.",
      "title": "Getting ready at hers",
      "contact": "Bianca",
      "irl": true,
      "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee and your pink nails. She opened the door and screamed.",
      "outfits": [
        {
          "label": "The lilac skirt with a hoodie over it, and sneakers",
          "thinks": "hoodie over the skirt like that hides it. babe I could see the pleats from the door",
          "gaydar": -5,
          "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, but with a big hoodie over the top and your sneakers, just for the walk. She opened the door and screamed anyway.",
          "them": [
            {
              "note": "She tugs the hoodie off over your head before you're through the door. \"No hiding,\" she says, like she's talking to Imogen."
            }
          ]
        },
        {
          "label": "The lilac skirt, a white baby tee and pink nails",
          "thinks": "lilac skirt, baby tee. exactly how I pictured it in the shop. no butterflies. none. I was just proud",
          "them": [
            {
              "note": "She looks at you in the skirt and says \"oh, babe\" in exactly the voice she uses for her girls."
            }
          ]
        },
        {
          "label": "The lilac skirt, a baby tee, pink nails and a pearl clip in your hair",
          "thinks": "a pearl clip. omg. I took like forty photos and none of them were of us",
          "gaydar": 3,
          "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee, your pink nails, and a pearl clip in your hair. She opened the door and screamed.",
          "them": [
            "Is that a PEARL CLIP. I'm going to cry.",
            {
              "note": "She doesn't flirt. Not even a bit. She goes straight for her makeup bag."
            }
          ]
        }
      ],
      "thinks": [
        "I spun him round and the skirt went out and I thought ok I'm never sleeping with this boy. and I was fine?? I was so fine",
        "his face when I said lashes. it's never done that for me. not even on the rooftop when I was basically on his lap",
        "Shay's cousin Jake. single. rugby. telling Shay tomorrow first thing"
      ],
      "them": [
        "OH MY GOD. You wore it. You actually wore it.",
        {
          "note": "She pulls you inside by both hands and spins you round under her arm."
        },
        "Okay, sit. Sit down. I'm doing your makeup. Don't argue. I've been wanting to do this since the rooftop.",
        "Lashes? I'm thinking lashes. And a bit of blush. And maybe a liner, just a tiny wing."
      ],
      "replies": [
        {
          "you": "Go for it. Full glam.",
          "gaydar": 90,
          "them": [
            "Full glam. Okay. Okay okay okay.",
            {
              "note": "She's already got the ring light on. She's humming."
            },
            "Close your eyes. Don't blink. Okay, open. Oh my god. {name}. Look.",
            {
              "note": "She turns you to the mirror. You don't say anything for a long time."
            },
            "You look incredible. Like, I'm actually a bit annoyed. Now shoes. You can't wear sneakers with that. What size are you? I've got heels."
          ],
          "replies": [
            {
              "you": "Give me the heels.",
              "gaydar": 95,
              "them": [
                "YES. Okay, these. Block heel, you'll survive.",
                {
                  "note": "She kneels down and does up the strap for you."
                },
                "Babe, I have to say something and you can't be weird about it.",
                "This doesn't feel like a date. Like at all. It feels like getting ready with Shay.",
                "And I kind of love it? Is that bad?"
              ],
              "replies": [
                {
                  "you": "I think I love this more too.",
                  "gaydar": 100,
                  "them": [
                    "I know. I can tell",
                    "So can we just do this? Like, be this?",
                    "And find you a guy who loses it when he sees you in those heels"
                  ]
                },
                {
                  "you": "But I thought you liked me.",
                  "them": [
                    "I do! I like you so much.",
                    "I just kind of stopped fancying you at some point and didn't notice till like now",
                    "Is that horrible? That's horrible. I'm sorry."
                  ]
                }
              ]
            },
            {
              "you": "Maybe not the heels. My ankles.",
              "them": [
                "Fine. Flats. These gold ones",
                "Next time heels though. I'm teaching you"
              ]
            }
          ]
        },
        {
          "you": "Just a bit. I don't want to look too much.",
          "them": [
            "Too much for who?",
            "Babe, you're in a lilac skirt. I think we're past that. And it looks so good.",
            {
              "note": "She does a little mascara, a bit of blush. Then she sits back and looks at you for a long time."
            },
            "Can I ask you something? You can tell me to shut up."
          ],
          "replies": [
            {
              "you": "Ask.",
              "them": [
                "Do you want to be dating me? Or do you want to be... this? With a guy?",
                "Because I keep hyping you up and you keep getting happier and, like. Less into me. And I'm less into you. And I don't even mind, which is weird."
              ],
              "replies": [
                {
                  "you": "I don't know.",
                  "gaydar": 85,
                  "them": [
                    "Okay. That's okay",
                    "You can not know. I'll still do your lashes"
                  ]
                },
                {
                  "you": "With a guy. I think.",
                  "gaydar": 100,
                  "them": [
                    {
                      "note": "She grins and hugs you so hard the mascara wand ends up in your hair."
                    },
                    "I KNEW IT. Sorry. I mean. Okay. Wow.",
                    "Okay. Lashes. Sit still, my hands are shaking"
                  ]
                }
              ]
            },
            {
              "you": "Shut up.",
              "them": [
                "Rude. Okay. Lashes."
              ]
            }
          ]
        },
        {
          "you": "I thought this was a date.",
          "them": [
            {
              "note": "She stops with the lash glue in her hand."
            },
            "It... is? Isn't it?",
            "Honestly? I kind of stopped thinking of it like that at the gelato. I didn't say anything because I didn't want it to be weird.",
            "Do you still fancy me? Like, actually? Be honest."
          ],
          "replies": [
            {
              "you": "Yes.",
              "them": [
                "Okay.",
                {
                  "note": "She goes back to the lash glue."
                },
                "You got way more excited about the lashes than you just did about me, though."
              ]
            },
            {
              "you": "...not really.",
              "gaydar": 90,
              "them": [
                "Yeah. Me neither. Not like that.",
                "But I REALLY like you. Just as, like, my person to get ready with. Is that okay?"
              ]
            }
          ]
        },
        {
          "you": "Can I do yours first? Your wing's a bit wonky.",
          "gaydar": 90,
          "them": [
            {
              "note": "Her hand goes to her eye."
            },
            "It is NOT wonky.",
            {
              "note": "She checks the mirror. It's wonky."
            },
            "Oh my god. Fine. Do mine.",
            {
              "note": "You fix her wing. She sits with her eyes shut and one hand on your knee, the way she'd lean on Shay."
            },
            "Babe. That's better than mine. You're doing it every Saturday now, I'm not even joking."
          ]
        }
      ],
      "after": "At Shay's birthday, two girls ask where you got your skirt. One of them asks Bianca if you're single. Bianca says \"he's single, but you're not his type.\" She winks at you across the bar."
    },
    {
      id: "c6m", route: "bianca", gaydar: 95, gaydarSays: "Four dates and now he's in the group chat. I don't know how it happened either.", title: "Bianca's girls 💅", contact: "Bianca's girls 💅", gaydarWho: "Bianca",
      intro: "The morning after Shay's birthday. Bianca has added you to her group chat with Shay and Imogen.",
      them: [{ from: "Bianca", text: "ok everyone say hi to {name} 💅" }, { from: "Shay", text: "HI the skirt king" }, { from: "Imogen", text: "the lashes were insane last night. who did them" }, { from: "Bianca", text: "me obviously. hes a natural tho" }, { from: "Shay", text: "so are you two like. still dating??" }, { from: "Bianca", text: "lol" }, { from: "Bianca", text: "{name} you answer" }],
      replies: [
        { you: "I think we're more friends now? Like. This. The chat.", gaydar: 100,
          them: [{ from: "Bianca", text: "THANK YOU. that's what i've been saying" }, { from: "Bianca", text: "babe i'm not even sad. i was into you on the rooftop. then you turned up to gelato in a crop knit and i was like. oh. ok. hes going to be my favourite person to go dancing with" }, { from: "Imogen", text: "so we're allowed to set him up now?" }, { from: "Shay", text: "my cousin's gay and he's SO nice. jake. plays rugby. would die for a man in a pleated skirt" }],
          replies: [
            { you: "...Show me a photo of Jake.", them: [{ from: "Shay", text: "OMG" }, { from: "Bianca", text: "WE ARE DOING THIS" }, { from: "Imogen", text: "wear the lilac skirt. jake needs to see the lilac skirt" }] },
            { you: "Slow down. I just got here.", them: [{ from: "Bianca", text: "ok fair" }, { from: "Bianca", text: "but wickham next weekend. heels this time. non negotiable" }] }
          ] },
        { you: "We're still dating. I think.",
          them: [{ from: "Shay", text: "bianca??" }, { from: "Bianca", text: "babe 😭 i love you" }, { from: "Bianca", text: "but last night you spent forty minutes in the bathroom doing imogen's contour and zero minutes trying to kiss me" }, { from: "Imogen", text: "the contour was very good though" }, { from: "Bianca", text: "im not breaking up with you. i just dont think we were ever really. you know" }, { from: "Bianca", text: "ur literally in the girls chat" }],
          replies: [
            { you: "Did I just get friend-zoned in a group chat?", them: [{ from: "Bianca", text: "lol yes" }, { from: "Bianca", text: "we do brunch on sundays. you're on mimosas" }, { from: "Shay", text: "and you're doing my brows before" }] },
            { you: "Okay. Fair. That's fair.", gaydar: 100, them: [{ from: "Bianca", text: "ok good" }, { from: "Shay", text: "so can we set him up with my cousin now" }] }
          ] },
        { you: "Shay, who's asking? Are you setting me up already?",
          them: [{ from: "Shay", text: "maybe" }, { from: "Bianca", text: "lol she is" }, { from: "Bianca", text: "we're not dating. i love him but i'd rather borrow his lip oil than kiss him" }, { from: "Imogen", text: "so that's a yes he's single" }, { from: "Shay", text: "my cousin jake?? hes gay. plays rugby. very tall" }],
          replies: [
            { you: "...What's Jake's Instagram?", gaydar: 100, them: [{ from: "Bianca", text: "OMG" }, { from: "Shay", text: "sending it now" }, { from: "Imogen", text: "he didn't even pretend" }] },
            { you: "Bianca. You'd rather borrow my lip oil?", them: [{ from: "Bianca", text: "its the good one!!" }, { from: "Bianca", text: "dont act like you havent been in my heels" }] }
          ] },
        { you: "Are you saying I'm gay?",
          them: [{ from: "Imogen", text: "👀" }, { from: "Shay", text: "i'm not saying anything i'm just eating toast" }, { from: "Bianca", text: "i'm saying you went from gloss to a skirt and lashes in four weeks and you never once tried to kiss me in any of it" }, { from: "Bianca", text: "and im saying it as ur friend ok. not being mean" }],
          replies: [
            { you: "I'm not gay.", them: [{ from: "Bianca", text: "ok babe" }, { from: "Shay", text: "ok babe" }, { from: "Imogen", text: "ok babe" }, { from: "Bianca", text: "wickham saturday. wear the heels" }] },
            { you: "...yeah. I think I am.", gaydar: 100, them: [{ from: "Bianca", text: "🥹🥹🥹" }, { from: "Shay", text: "WELCOME" }, { from: "Imogen", text: "im crying on the bus" }, { from: "Bianca", text: "ok im calling you. pick up" }] }
          ] }
      ],
      after: "Bianca, privately, to you: \"the rooftop was real btw. i did fancy you\" \"idk what happened. the nails i think lol\" \"anyway ur coming saturday x\"",
      debrief: "You lost a date and got added to a group chat. It can sting a bit and still be nice."
    },
{
  "id": "bianca-feet",
  "route": "bianca",
  "gaydar": 97,
  "friend": true,
  "gaydarSays": "Jake went straight for his feet. Imogen says that's flirting. I'm choosing to believe her.",
  "title": "Pedi night",
  "contact": "Bianca",
  "irl": true,
  "intro": "A week after Shay's birthday. Bianca's place, pedicure night with the girls: Shay, Imogen, and you, all barefoot on the floor with the polishes out. Then the doorbell goes. It's Shay's cousin Jake, the one Bianca keeps saying you'd be perfect with. \"He was in the area,\" Bianca says, not looking at you.",
  "thinks": [
    "Jake sat next to him instead of me and {name} didn't move over. yesss",
    "he went so red when Jake touched his ankle. I spent every date trying to get him that red, I wore the dress with the slit to the rooftop, for nothing",
    "officially done fancying him. Shay's already sick of me"
  ],
  "them": [
    {
      "note": "Jake's tall, in a cap and a hoodie. He looks at the four of you on the floor with your toes in separators, and laughs."
    },
    "\"Oh, this is a whole thing.\"",
    "Sit down, Jake. {name}'s doing my top coat and then it's his turn.",
    {
      "note": "Jake sits down on the floor right next to you. He looks at your feet, half done in a glossy pink."
    },
    "\"You're doing your own?\"",
    "\"Bianca's doing them,\" you say. \"I'm... yeah. Pink.\"",
    "Look at them, Jake. Tiny. He's a seven. My feet are bigger than his and I'm in heels half the time."
  ],
  "replies": [
    {
      "you": "(Hold your foot out for Bianca.)",
      "them": [
        {
          "note": "Bianca starts on your big toe. Jake watches, then reaches over and holds your ankle still for her."
        },
        "\"I'll help. Keep him steady.\"",
        {
          "note": "Then he runs his finger down your sole, right as Bianca's brush is on your nail. You yelp and kick, and pink goes all over your toe."
        },
        "\"JAKE,\" Bianca says. \"Now I have to start again!\"",
        "\"My bad,\" he says, and does it again. You're laughing, squirming against the couch, trying to keep your other foot away from him too. Shay and Imogen are howling.",
        "\"Jake! Stop! Please! The polish!\""
      ],
      "replies": [
        {
          "you": "(Laughing, pull your foot back.) Okay. Okay. You're banned from my feet.",
          "them": [
            {
              "note": "He lets go when you pull. \"Banned,\" he says. \"Harsh.\""
            },
            "\"You're both bright red,\" Imogen says. \"Both of you.\"",
            "\"Shut up, Imogen,\" Jake says.",
            "Bianca, cleaning your toe with remover: \"I'm not saying anything. I'm just saying I knew it.\"",
            {
              "note": "He stays for two hours and holds your ankle for every coat after that. He only tickles you once more."
            }
          ]
        },
        {
          "you": "(Giggling) If you're going to hold my foot, at least do the top coat.",
          "gaydar": 99,
          "them": [
            "\"Me?\" He looks at Bianca. She hands him the bottle immediately.",
            {
              "note": "He paints your big toe with his tongue sticking out a bit. It's messy. Imogen films. Shay keeps saying \"oh my GOD\" under her breath."
            },
            "\"How's that?\"",
            "\"Terrible,\" you say. \"I love it.\"",
            {
              "note": "He goes to blow on it and tickles under your toes instead. You shriek and grab his arm. He stops, laughing."
            },
            "\"Sorry. Couldn't help it.\" He doesn't let go of your foot."
          ]
        }
      ]
    },
    {
      "you": "Don't even think about it. I know that look.",
      "them": [
        "\"What look?\" Jake says, and wiggles his fingers at you.",
        {
          "note": "You scramble backwards. The girls grab you, Shay on one arm, Imogen on the other, laughing so hard they can barely hold on."
        },
        "\"Hold him!\" Bianca yells.",
        {
          "note": "Jake takes one foot very carefully, avoiding the wet polish, and tickles under your toes. You laugh until your eyes stream. Your mascara's gone."
        },
        "\"Stop! Okay! Stop!\"",
        {
          "note": "Everyone lets go at once. You lie on Bianca's floor, wrecked, with pink toes and mascara down your face."
        },
        "\"Sorry,\" Jake says, and hands you a tissue. \"You've got a great laugh.\"",
        "Bianca, very quietly: \"Babe. He likes you.\""
      ]
    }
  ],
  "after": "Bianca, to Shay and Imogen, after: \"WELL\" Shay: \"jake just texted me 'is he single'\" Imogen: \"he would not let go of his foot\" Bianca: \"told u\" Bianca: \"{name} i know ur reading this say something\"",
  "debrief": "Someone you like teasing you in front of your friends is embarrassing. It can also just be nice."
},
    {
      "id": "bianca-ambush",
      "route": "bianca",
      "gaydar": 98,
      "friend": true,
      "irl": true,
      "title": "The new boots",
      "contact": "Bianca",
      "gaydarSays": "Jake had your boots off in about a second. I'm not sorry. I'd do it again.",
      "intro": "Two weeks after pedi night. Bianca made you buy heeled ankle boots, and tonight's the first time you've worn them out: drinks at hers before Shay's thing. You're keeping them on all night. You've decided. Then Jake turns up. \"In the area\" again, apparently.",
      "thinks": [
        "I made him buy heeled ankle boots and he LOVES them, he wore them here, pink toes under them. I'm obsessed with him. not like that",
        "jake said pretty and he went pink. i've said pretty like a hundred times. nothing. fine",
        "Honestly thank god I never slept with him. Can you imagine. Jake would never let me hear the end of it, or {name} wouldn't, idk, both"
      ],
      "them": [
        {
          "note": "You're on the couch between Shay and Imogen, boots on, legs crossed, very aware of the boots. Jake sits on the floor in front of you with his drink."
        },
        "\"Nice boots,\" he says. \"Bet your toes are still pink under there.\"",
        "Obviously they are. I did a top coat.",
        "On his tiny little feet. They're the cutest thing about him. Don't tell him I said that.",
        "\"They're not,\" you say. \"And I'm not taking these off. I just got them on. There's a zip and a whole system.\"",
        "\"I know how a zip works,\" Jake says.",
        {
          "note": "He puts his drink down, takes hold of your ankle, and finds the zip on the inside of the boot."
        },
        "\"Jake. No! Jake, I said no! They're staying on!\"",
        "Shay, Imogen. Arms.",
        {
          "note": "Shay and Imogen each grab an arm and pull you back into the couch, shrieking with laughter. You kick. Jake catches the kicking foot and unzips that one too. Both boots off. Then the socks, slowly, toe end first."
        },
        {
          "note": "Still pink. Still shiny."
        },
        "Told you. Look at that shine. That's my work.",
        "\"Pretty,\" Jake says. He's still holding your foot. He looks up at you. \"Remember pedi night?\"",
        {
          "note": "He starts. Bianca, cackling, gets down on the floor and takes the other foot."
        }
      ],
      "replies": [
        {
          "you": "(Lock up. Stare at Bianca's fairy lights. Not a sound.)",
          "them": [
            {
              "note": "You stare at the fairy lights. Jake's thumbs go up your arch, slow. Bianca goes for your toes, fast, with her long nails. You go rigid all over."
            },
            "Oh, he's FIGHTING it. Babe. You're fighting it?",
            "\"Shay, Imogen, you want in?\" Jake says.",
            {
              "note": "They let go of your arms and each take a bit of a foot. Four of them now."
            }
          ],
          "replies": [
            {
              "you": "(Hold it. All the way.)",
              "them": [
                {
                  "note": "You hold it. Somehow. Your eyes water and your pink toes curl right up, but nothing comes out of you. Not one sound."
                },
                "\"Okay, that's impressive,\" Jake says, and lets go first. \"Respect.\"",
                "Who ARE you? On pedi night you screamed the house down.",
                {
                  "note": "Jake's looking at you. He doesn't say anything."
                }
              ],
              "replies": [
                {
                  "you": "(Hold your foot out to Jake.) Can I have my socks back, please?",
                  "outcome": "held",
                  "them": [
                    {
                      "note": "He picks up your sock and, without asking, puts it back on your foot for you. Then the other one. Then he zips your boots back up, slowly, one after the other."
                    },
                    {
                      "note": "Shay makes a high noise into her hand. Imogen grabs Bianca's arm."
                    },
                    "Oh my god. Oh my GOD. He did your boots up. Jake did your boots up.",
                    "\"He asked nicely,\" Jake says, and doesn't move away from your feet."
                  ],
                  "after": "Bianca, to Shay and Imogen: \"jake did his BOOTS UP\" Shay: \"he texted me 'is he always that calm'\" Imogen: \"jake is GONE\" Bianca: \"im a genius\""
                },
                {
                  "you": "(Wiggle your toes at Bianca.) Go on then. You know where.",
                  "outcome": "cracked",
                  "them": [
                    "Oh, you're asking for it.",
                    {
                      "note": "She goes straight for the gap between your second and third toe, the one she always has to put the separator in carefully. You last a second. Then you shriek and fold in half, giggling, and all four of them pile back in."
                    },
                    "I KNEW it. I've had my hands on these feet every week for a month.",
                    {
                      "note": "They stop when you get \"stop\" out. Jake's laughing harder than anyone. He hasn't let go of your ankle."
                    }
                  ],
                  "after": "Imogen, to the girls: \"[video] bianca found it\" Shay: \"jakes laugh tho\" Bianca: \"he didnt let go of his ankle for like 20 min after\" Imogen: \"u timed it??\" Bianca: \"obviously\""
                }
              ]
            },
            {
              "you": "(Too much. You lose it.)",
              "them": [
                {
                  "note": "You break. You're laughing so hard you slide off the couch onto the rug."
                },
                "THERE he is! There's my baby!",
                "\"Same as pedi night,\" Jake says, grinning, not stopping. \"Even louder.\"",
                {
                  "note": "Imogen's filming. Shay's crying with laughter."
                }
              ],
              "replies": [
                {
                  "you": "(Giggling) Okay! Okay, I'm ticklish! I'm SO ticklish!",
                  "outcome": "cracked",
                  "them": [
                    {
                      "note": "They stop and let go. You lie on the rug with your pink toes in the air, panting."
                    },
                    "\"I know you are,\" Jake says. \"I've known since pedi night.\"",
                    {
                      "note": "He lies down on the rug next to you, propped on an elbow, and looks at your face. Bianca turns the music up and pulls Shay and Imogen into the kitchen. Very obviously."
                    },
                    {
                      "note": "From the kitchen: \"LEAVE THEM ALONE, Imogen.\""
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen, from the kitchen: \"DON'T go back in there\" Shay: \"what are they doing\" Bianca: \"talking. lying on my rug. talking.\" Imogen: \"jake's holding his foot again\" Bianca: \"of course he is\""
                },
                {
                  "you": "(Red, giggling) Stop! Stop it, all of you!",
                  "outcome": "cracked",
                  "them": [
                    {
                      "note": "Everyone's hands come off at once. Shay actually puts hers behind her back."
                    },
                    "Okay! Okay, hands off, everyone.",
                    {
                      "note": "You curl up on the rug, red to your ears, feet tucked under you. Jake picks up your boot and holds it out to you."
                    },
                    "\"Sorry,\" he says. He actually sounds a bit sorry. \"Got carried away. Your laugh's good.\"",
                    {
                      "note": "You take the boot. Your hand touches his. You both look at it for slightly too long. Bianca makes a tiny squeak."
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen: \"'your laugh's good'\" \"he said YOUR LAUGH'S GOOD\" Shay: \"he's never said that to anyone\" Imogen: \"he said it to me once\" Shay: \"he did not\""
                }
              ]
            }
          ]
        },
        {
          "you": "(Give in. You're giggling before they've even started.)",
          "them": [
            {
              "note": "You're gone instantly. Squealing, giggling, wriggling into the couch cushions, before Jake's even properly started."
            },
            "Oh, BABE. You're hopeless!",
            "\"Shay, Imogen, get in here,\" Jake says.",
            {
              "note": "Four of them. Jake and Bianca on one foot, Shay and Imogen on the other. Imogen's got a makeup brush."
            },
            "This is the best night of my LIFE."
          ],
          "replies": [
            {
              "you": "(Giggling) Please! Please, please stop!",
              "them": [
                {
                  "note": "They stop and let go straight away. You lie back on the couch, panting, arm over your eyes."
                },
                "\"Okay, okay,\" Jake says.",
                "He's very polite. I raised him right.",
                {
                  "note": "Then Jake picks your foot up again. He's not tickling, just holding it, thumb on your arch."
                },
                "\"Can I have ten more seconds?\""
              ],
              "replies": [
                {
                  "you": "(Pull it back.) No! No more. Not even you.",
                  "outcome": "begged",
                  "them": [
                    "\"Fair enough,\" he says, and lets go. \"Not even me. Noted.\"",
                    {
                      "note": "He gives you your socks back. Then he picks up your boots and holds them, and doesn't give those back."
                    },
                    "\"You can have these back when you come to dinner with me.\"",
                    {
                      "note": "Bianca screams. Actually screams. Shay drops her drink."
                    }
                  ],
                  "after": "Bianca, to Shay and Imogen: \"HE HELD HIS BOOTS HOSTAGE FOR A DATE\" Shay: \"jake did that??\" Imogen: \"did {name} say yes\" Bianca: \"he said 'they're new boots'\" Bianca: \"which is a yes\""
                },
                {
                  "you": "(Still giggling) ...Go on then. Ten.",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "The girls count down from ten. Jake goes slow, then fast, then slow again. You're squealing from 'ten'."
                    },
                    {
                      "note": "At 'one' he stops, right on one, and lets go."
                    },
                    "\"I keep my word,\" he says.",
                    {
                      "note": "You lie there giggling with your pink toes in the air. He's still sitting at your feet. He doesn't move."
                    },
                    "Oh my god. Oh my god, look at them. Shay. LOOK AT THEM."
                  ],
                  "after": "Bianca, to the girls: \"he asked for more\" \"from JAKE\" \"and jake stopped at exactly ten\" Shay: \"jake's never stopped at anything\" Imogen: \"theyre getting married\" Bianca: \"obviously\""
                }
              ]
            },
            {
              "you": "(Stop fighting. Lie back and let them.)",
              "them": [
                {
                  "note": "You stop struggling. You flop back across the couch, laughing at the ceiling, pink toes wriggling in four people's hands."
                },
                "He's given UP! Babe, you've given up!",
                "\"Look at his face,\" Jake says.",
                {
                  "note": "It goes on and on. They take turns. Imogen's still got the makeup brush. You're crying laughing."
                },
                {
                  "note": "After a while Jake stops and just watches you."
                },
                "\"You can say stop, you know,\" he says."
              ],
              "replies": [
                {
                  "you": "(Gasping) Okay! Okay, stop now. Stop.",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "Jake lets go the second you say it. The girls take a beat longer, then let go too."
                    },
                    "Three minutes! THREE minutes!",
                    {
                      "note": "Jake rests your foot on his knee and leaves it there."
                    },
                    "\"Shay's thing starts in an hour,\" he says. \"You coming? I'll carry your boots.\"",
                    {
                      "note": "Bianca grabs Imogen's arm so hard Imogen yelps."
                    }
                  ],
                  "after": "Bianca, to the group: \"three minutes and then jake said 'i'll carry your boots'\" Shay: \"did he carry them\" Bianca: \"the whole way to the bar\" Imogen: \"on his shoulder\" Bianca: \"i cant\""
                },
                {
                  "you": "(Can't speak. Just keep laughing.)",
                  "outcome": "kept",
                  "gaydar": 99,
                  "them": [
                    {
                      "note": "You can't get a word out. You're laughing too hard. Shay and Imogen keep going. Bianca keeps going."
                    },
                    "\"Hey. Hey, stop,\" Jake says. \"He can't breathe.\"",
                    {
                      "note": "Shay and Imogen let go. Bianca lets go a second after them, looking guilty."
                    },
                    "He was having fun!",
                    "\"Bee. He was crying.\"",
                    {
                      "note": "You're half off the couch, still giggling. Jake sits down next to you and waits until you've got your breath back."
                    },
                    "Okay. Okay, I'm in love with this. I'm in love with the two of you."
                  ],
                  "after": "Bianca, to the girls: \"jake made us stop because he was worried\" Imogen: \"and then he just sat with him\" Shay: \"for twenty minutes\" Bianca: \"told u all\""
                }
              ]
            }
          ]
        }
      ],
      "debrief": "They took your boots off after you said no, which is a bit much. They stopped when you said stop. It's fine if you liked it, and fine if you didn't."
    },
    {
      "id": "bianca-end",
      "route": "bianca",
      "gaydar": 100,
      "spark": 0,
      "gaydarSays": "Liam made me a bedside table for my birthday. I'm never letting him go.",
      "title": "Bianca and Liam",
      "contact": "Bianca",
      "irl": true,
      "outfits": [
        {
          "label": "Jeans and a tee, just lip oil",
          "thinks": "jeans and lip oil to my BIRTHDAY. babe you're the gayest person I know, why are you dressed like Liam",
          "gaydar": 0,
          "intro": "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore jeans and a tee and lip oil. She's brought a guy: a carpenter, still in his work boots, with sawdust on his jeans. Liam.",
          "them": [
            {
              "note": "She looks at the jeans and tee and pouts. \"Babe. On my birthday?\""
            }
          ]
        },
        {
          "label": "The lilac skirt, heels and full glam. She'd want that.",
          "thinks": "full glam for my birthday. the lilac skirt. I cried into my drink a bit already, don't tell Liam",
          "intro": "A month later. Bianca's birthday drinks at a rooftop in the Valley, the same one where you had your first date. You wore the lilac skirt, heels and full glam, because she'd never forgive you otherwise. She's brought a guy: a carpenter, still in his work boots, with sawdust on his jeans. Liam.",
          "them": [
            "THE LILAC SKIRT. ON MY BIRTHDAY. I'm crying. I'm actually crying.",
            {
              "note": "She grabs Liam's arm with one hand and yours with the other and won't let go of either."
            }
          ]
        }
      ],
      "thinks": [
        "Liam made me a bedside table and he doesn't own a mirror and he's at mine most nights now. {name} used to go home at ten to do his skincare",
        "Liam called him the contour guy and he LOVED it. ok I'm a little jealous. idk of what",
        "Jake's been looking at him from the bar all night. by Christmas. I've decided"
      ],
      "them": [
        "Babe!! You came! Okay, this is Liam. Liam, this is {name}, my best friend. He's the one who did my contour.",
        "\"Hey,\" Liam says. \"The contour guy. Good work, man. I can't even tell what it is, but it looks good.\"",
        "He made me a bedside table for my birthday. Like, made it. I'm so in love I could scream.",
        {
          "note": "She leans in and whispers: \"Be nice. Be nice! He's straight. He's so straight. Like, actually.\""
        },
        {
          "if": "bianca-ambush=held",
          "note": "Over by the bar, Jake raises his glass at you. He's still never seen you laugh when he wants you to. Bianca says it's driving him mad."
        },
        {
          "if": "bianca-ambush=cracked|begged|kept",
          "note": "Over by the bar, Jake catches your eye and wiggles his fingers at you. You go red. Bianca nearly drops her drink."
        }
      ],
      "replies": [
        {
          "you": "Liam! Hi! You MADE her a table? Okay. Okay, B, I approve.",
          "them": [
            "Right?? He's perfect.",
            "And you came! My best friend. My gay best friend. Sorry. Best friend.",
            "You are though, right? You don't have to say. I'm just saying. The vibes."
          ],
          "replies": [
            {
              "you": "Let's just say best friend.",
              "them": [
                "Fine. For now.",
                "Jake's here by the way. Just so you know. No reason."
              ]
            },
            {
              "you": "Best friend. Gay or otherwise. Happy birthday, B.",
              "them": [
                {
                  "note": "She hugs you so hard she spills some of her drink down your back."
                },
                "Gay or otherwise. Okay. I love you. Go get a drink.",
                "Jake asked if you were coming, by the way."
              ]
            }
          ]
        },
        {
          "you": "(Pull Liam aside.) Liam. Sorry. Can I tell you something? It's about B.",
          "them": [
            "\"Yeah, course,\" Liam says, and bends down a bit to hear you.",
            {
              "note": "He's got sawdust in one eyebrow. You nearly reach up and brush it out. You don't. Your heart's going stupidly fast."
            },
            "\"What's up?\""
          ],
          "replies": [
            {
              "you": "I think I still want to be with her. Like, properly. I'm sorry. I had to say it.",
              "them": [
                "\"Ha. Fair enough, man,\" Liam says. He's not worried. \"Want a drink? I'll get you a spritz. With a little straw.\"",
                "Bianca, from across the bar, yelling: \"WHAT ARE YOU TWO TALKING ABOUT\"",
                "Liam, calling back: \"He wants you back, babe! I'm terrified!\"",
                {
                  "note": "Bianca comes over and takes your face in both hands."
                },
                "Babe. You told my boyfriend you want me back? To his face? In that little voice?",
                "That's the cutest thing anyone's ever done on my birthday. And no. Obviously no.",
                "You're my girlfriend, babe. Like my girl friend. Not my boyfriend. I love you though."
              ]
            },
            {
              "you": "...Never mind. Do you, um. Do you work out? Sorry. Happy birthday to Bianca. Bye.",
              "gaydar": 100,
              "them": [
                "\"Just work, man,\" Liam says, delighted. \"Want me to make you a shelf? For all your, um. Products.\"",
                {
                  "note": "Your face is on fire. Bianca has her face in Shay's shoulder and is shaking. Imogen is filming. Shay's cousin Jake is watching from the bar with a little smile."
                }
              ]
            }
          ]
        },
        {
          "you": "(To Bianca) B. He's got sawdust on him. At your birthday.",
          "them": [
            "I KNOW. Isn't it hot?",
            "He came straight from work. I don't think he owns a mirror.",
            "That's what you're for, babe.",
            {
              "note": "She grabs your hand and drags you off to the bathroom to check her teeth, and leaves Liam at the bar."
            }
          ]
        },
        {
          "you": "Hi Liam. Happy birthday, B. I'm going to the bar.",
          "them": [
            "\"Grab us a beer, man?\" Liam asks. \"Actually, I'll come with you.\"",
            {
              "note": "He walks you to the bar and orders you a spritz without asking. Bianca told him that's what you drink."
            }
          ]
        }
      ],
      "after": "Bianca, in the group chat at 2am: \"best birthday ever\" Bianca: \"also jake asked for {name}'s number\" Shay: \"DID HE GIVE IT\" Bianca: \"he said he'd think about it\" Imogen: \"hes been looking at jake all night\" Bianca: \"hes thinking about it SO hard\"",
      "debrief": "She's got Liam now, and she still wanted you there on her birthday. That's a good friend to have."
    },
    {
      id: "c7", route: "jess", title: "The group chat", contact: "Jess",
      them: ["ok i need to tell you something and i don't want you to be upset", "hannah's in a group chat with my friend kate and kate screenshotted this to me", "\"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\"", "and sam said mia rang her basically saying the same thing", "and something about a group chat with the netball girls??", "and a girl i know from uni says her friend ella went to brunch with a guy in a dress and im like. was that you", "also someone called lucy follows me now?? and zoe's friend brooke liked my post from 2019 lol. its like a whole investigation", "anyway. are you ok?"],
      replies: [
        { you: "Great. So everyone's talking about me.",
          them: ["two people are talking about you and they're being dicks about it", "ok more than two. but the point stands", "i told kate to drop it", "but {name}. are they wrong?"],
          replies: [
            { you: "No. I'm gay.",
              them: ["ok", "ok. hi. hello", "sorry i kept setting you up with girls lol", "wait i have a guy from work. like right now. do you want him"],
              replies: [
                { you: "Not yet. I need a minute.", them: ["fair", "hes a really good cook though. just saying"] },
                { you: "...what's his name?", them: ["oh we're DOING this", "alex. hes lovely. a bit too into running"] },
                { you: "Are you upset I didn't tell you?", them: ["a tiny bit", "mostly im just glad youre ok", "and that i can stop pretending i didnt notice the lip tint"] }
              ] },
            { you: "I don't want to talk about it.", them: ["ok. i'm not going anywhere. text me whenever"],
              after: "You don't text her that night. You text her three days later: \"they weren't wrong.\" She replies in under a minute. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
            { you: "What exactly are they saying?",
              them: ["you don't want to know", "ok fine. mostly 'why is he dating girls'. some 'his makeup was better than mine'. one 'he's so obviously gay i feel stupid'", "mia told sam it was like going out with her friend hayley lol. georgie said 'nice guy. not a boyfriend'. thats the whole review from georgie", "honestly the makeup one is a compliment", "the rest is just them being salty they didnt clock it before the second drink"],
              replies: [
                { you: "They're not wrong though.", them: ["yeah i figured", "thats fine obviously", "you ok?"] },
                { you: "I feel sick.", them: ["coming over", "don't argue. i'm bringing chips and the bad wine"] },
                { you: "Which one said my makeup was better than hers? I want a name.", them: ["lol hannah", "she also said your lashes were 'unfair'", "she's not wrong. now are you ok or not"] }
              ] }
          ] },
        { you: "They're not wrong.",
          them: ["yeah i kind of figured", "i'm sorry it came out like that. that's shit", "you ok?"],
          replies: [
            { you: "Not really. But kind of relieved?", them: ["that makes sense", "drinks friday. my shout", "and wear whatever you want. like the dress if you want. i mean it"] },
            { you: "I feel like an idiot for dating all of them.", them: ["youre not an idiot", "you thought thats what you were supposed to do. two guys from my uni did the exact same thing and theyre married to men now", "maybe stop letting me set you up for a bit lol"] }
          ] },
        { you: "It was just makeup, Jess.",
          them: ["ok. that's fine", "but you know you can tell me stuff right", "like actual stuff. not just makeup stuff"],
          replies: [{ you: "I know.", them: ["ok good"],
          after: "It takes you another two weeks to tell her. She says \"I know, babe\" and orders you a drink. A month after that, Dani sets you up on a dating app. This time you tick 'men'." }, { you: "Okay. It's not just makeup.", them: ["i know", "i knew when you asked if my eyeliner was a wing or a kitten lol"] }] },
        { you: "Who's Lucy?? Why is she following you?",
          them: ["THAT'S your question??", "idk she found me through sam or something. she liked three of my photos and one of them was of you", "ok i'm asking again. are you ok"],
          replies: [
            { you: "Yeah. And yeah, they're right. I'm gay.", them: ["ok", "ok. i love you", "and i'm blocking lucy"] },
            { you: "I'm fine. Can we talk about Lucy more though?", them: ["no", "ok ten seconds of lucy. shes a nurse. her cat is called paracetamol", "times up. you're not fine. im calling you in five min and you're picking up"] }
          ] }
      ],
      after: "A month later, Dani sets you up on a dating app. This time you tick 'men'.",
      debrief: "Being talked about like that is horrible. You still get to say it yourself, when and how you want."
    },
    {
      id: "jess-2", route: "jess", title: "Drinks Friday", contact: "Jess", irl: true,
      outfits: [
        { label: "Jeans and your nicest shirt", intro: "Friday, a bar on Boundary Street. Jess's shout, like she said. Jeans and your nicest shirt. She's already got two drinks and the good stool.", them: ["Nice shirt. Very 'meeting someone's boss'."] },
        { label: "Your blue shirt, the lip tint and your rings", intro: "Friday, a bar on Boundary Street. Jess's shout, like she said. The blue shirt, all your rings and the lip tint everyone apparently had so much to say about. She's already got two drinks and the good stool.", them: ["Is that the lip tint? The famous one? Good. Kate can look at it all night."] },
        { label: "The black slip dress, with sneakers and a denim jacket", intro: "Friday, a bar on Boundary Street. Jess's shout, like she said. You wore the dress. Black slip dress, white sneakers, and a denim jacket over it, because you lost your nerve halfway down the street and went back for the jacket. She's already got two drinks and the good stool.", them: ["You wore it.", { note: "She doesn't make a big thing of it. She hooks the other stool out with her foot and keeps grinning at you." }, "Jacket's a good call. On or off, whatever you want."] }
      ],
      them: [
        "There he is. Sit. That one's yours, it's an Aperol, don't argue.",
        "Okay. Two things. One, I'm sorry again about the group chat stuff. I set you up with every single one of those girls. That bit's on me.",
        "Two. Kate's here.",
        { note: "She tips her head at the booth by the window. Kate, Hannah's best friend, the one who sent the screenshot. She's seen you. She's pretending she hasn't." },
        "I didn't know she'd be here, I swear. We can go somewhere else."
      ],
      replies: [
        { you: "We're not going anywhere. I like this stool.",
          them: [
            "Good.",
            { note: "She clinks your glass a bit too hard." },
            "Then I'm going to ignore her really loudly.",
            { note: "It lasts about ten minutes. Then Kate leaves her friends in the booth and comes over." },
            "\"Hey. {name}. Hi.\" She looks at Jess, then back at you. \"So, the screenshot. I didn't write it. I just sent it on. Which I know is still bad.\"",
            "\"Hannah was just venting. She felt stupid. I don't think she meant it to go anywhere.\""
          ],
          replies: [
            { you: "It's fine, Kate. She wasn't wrong. I'm gay.",
              them: [
                "\"Oh.\" Kate goes pink. \"Okay. Cool. That's cool.\"",
                { note: "She stands there a second longer, like she's waiting to be told she can go." },
                "\"Can I tell Hannah? Or. No. I won't tell Hannah.\"",
                "Kate. Maybe don't send anything to anyone for a bit.",
                { note: "Kate nods and goes back to her booth. Jess waits until she's sat down, then grabs your arm with both hands." },
                "You just said it to KATE. In a bar. Before you've even said it to the bartender. Drink that, I'm getting you another one."
              ],
              after: "Kate leaves early. On her way out she says \"bye {name}\" really politely, like you're someone's teacher. Jess does an impression of it for the rest of the night." },
            { you: "You sent it to Jess, Kate. You knew she'd show me.",
              them: [
                "\"I didn't think she'd show you. I thought she'd just, like, know.\"",
                "That's worse, Kate.",
                { note: "Kate looks at her drink." },
                "\"Yeah. Okay. Sorry.\"",
                { note: "She goes back to her booth. Her friends lean in. She shakes her head at them and doesn't look over again." }
              ],
              after: "Kate's lot leave twenty minutes later. Jess orders chips to celebrate and eats most of them." },
            { you: "(Say nothing. Let Jess handle it.)",
              them: [
                { note: "Jess smiles at Kate. It's not a nice smile." },
                "Hi Kate. We're good, thanks. Night.",
                "\"...Right. Okay. Night.\"",
                { note: "Kate goes. Jess turns back to you like nothing happened." },
                "So. Do you want to talk about it or do you want to talk about literally anything else?"
              ],
              replies: [
                { you: "Anything else. Please.", them: ["Great. Priya's started a sourdough. It's called Kevin Bacon. I hate it. I need you to hate it with me."] },
                { you: "A bit. It felt horrible, Jess.",
                  them: [
                    "Yeah. It was horrible.",
                    "Hannah sat through one coffee with you and turned it into a group chat thing. That's on her. You even paid.",
                    { note: "She leans her shoulder on yours and leaves it there." },
                    "Also Kate's lipstick is on her teeth and I'm not telling her."
                  ] }
              ] }
          ] },
        { you: "Yeah, let's go. I can't sit here with her looking at me.",
          them: [
            "Done.",
            { note: "She drinks half her drink, leaves the rest and has your arm before you've stood up." },
            { note: "Outside, she walks you two doors down to the dumpling place and orders for both of you without asking." },
            "Better?"
          ],
          replies: [
            { you: "Better. Sorry for making us leave.", them: ["You didn't make us do anything. I hate that bar. The stools are too high and the Aperol's warm."] },
            { you: "Do you think everyone knows? Like, people I've never even met?",
              them: [
                "Probably a lot of people, yeah.",
                "Hannah's lot. Mia's lot. Tayla's whole netball team. So maybe thirty people.",
                "And none of them are thinking about it tonight. Kate maybe. Kate's not got a lot going on.",
                { note: "She pushes the last pork dumpling onto your plate." }
              ] }
          ] },
        { you: "Kate's here? Good. I want to talk to her.",
          them: [
            "Oh no.",
            "Okay. I'm coming with you.",
            { note: "You walk over. Kate sees you coming and sits up straight." },
            "\"{name}. Hi. Um. Hi.\""
          ],
          replies: [
            { you: "Can you tell Hannah something for me? Tell her I'm sorry I wasted her Fridays.",
              them: [
                "\"Oh. Yeah. Okay. I will.\"",
                "\"She'll probably be weird about it. She's weird about stuff.\"",
                { note: "Walking back, Jess bumps your shoulder with hers." },
                "That was nicer than I would've been. I was going to say something about her fringe."
              ] },
            { you: "Just so you know, next time screenshot the good bits. 'His makeup was better than mine.' Lead with that.",
              them: [
                { note: "Kate laughs before she can stop herself." },
                "\"Yeah. Okay. That's fair.\"",
                "\"It was, though. Better than hers. She said it twice.\"",
                { note: "Jess is already walking you back to the stools, shaking with laughter." }
              ] }
          ] }
      ],
      after: "In the Uber home your phone goes. Jess, with a photo of a guy in running gear and no other message. Then: \"alex. from my work. not now. just putting it on file\"",
      debrief: "Running into someone who passed you around a group chat is awful. Staying, leaving or having a go at her were all fair, and Jess was coming with you either way."
    },
    {
      id: "s1", route: "bf", title: "Hey there",
      them: ["hey! ok i have to ask about your third pic", "is that your dog or are you just really good at borrowing dogs"],
      replies: [
        { you: "She's mine! Her name's Biscuit.",
          them: ["BISCUIT", "ok im invested", "what is she?? she looks like a kelpie that fell in a bag of flour", "oh im {bf} btw"],
          replies: [
            { you: "Kelpie cross something. The vet literally shrugged.",
              them: ["the vet shrugged lol", "ok can i ask. is this your first time on here? you've got very just-downloaded-it energy. in a good way"],
              replies: [
                { you: "Is it that obvious?",
                  them: ["a bit lol", "your bio says 'new to this, be nice'", "which is either really honest or a trap"],
                  replies: [
                    { you: "It's not a trap. I only came out a couple of months ago.",
                      them: ["oh wow ok. thats big. congrats 🏳️‍🌈", "no rush on anything btw", "we can just talk about biscuit for a week if you want", "or coffee whenever. theres a good place in paddington"],
                      replies: [
                        { you: "Coffee sounds good. Saturday?", them: ["saturday 😊 ill send you the place", "warning im taller than i look in my pics and i knock stuff over a lot"] },
                        { you: "Can we just talk for a bit first?", them: ["course", "ok tell me the worst thing biscuit has ever done"] }
                      ] },
                    { you: "It's a trap. Biscuit runs the account.", them: ["lol", "tell biscuit id like to take her owner for coffee"] }
                  ] },
                { you: "I've been on here a while, thanks very much.", them: ["sure 😏", "ok pro. whats your go-to first date"],
                  replies: [{ you: "Coffee. Easy to leave if it's bad.", them: ["wow ok brutal", "coffee saturday then. ill try not to be bad"] }] }
              ] },
            { you: "She ate a whole birthday cake once. Candles and all.",
              them: ["wait CANDLES?", "is she ok", "i need to meet her. and you i guess 😏"] }
          ] },
        { you: "Borrowed. I have a whole dog-borrowing operation.",
          them: ["lol i knew it", "do you rent them out? asking for me", "im {bf}. coffee sometime? bring a borrowed one"],
          replies: [
            { you: "Only if you bring a borrowed dog too.", them: ["my housemate has a really fat sausage dog called kevin", "so thats sorted"] },
            { you: "Okay, she's mine. I panicked.", them: ["you panicked over a dog question 😂", "ok coffee saturday. bring the real one"] }
          ] },
        { you: "Hi. Sorry, I'm really nervous. I've never messaged a guy before.",
          them: ["hey dont be sorry", "like never ever or never on here?"],
          replies: [
            { you: "Ever. I've only ever dated girls.",
              them: ["ok well youre doing fine so far", "my first ever message to a guy was 'hello there'. like obi wan. he didnt reply", "so honestly youre ahead"],
              replies: [
                { you: "Oh no. That's so bad.", them: ["i know. i still think about it at 3am", "coffee sometime? no pressure. less star wars i promise"] },
                { you: "That actually helps. Thanks.", them: ["good", "im {bf} btw. tell me about the dog"] }
              ] },
            { you: "On here. I'm a bit new.", them: ["everyone's new at some point", "im {bf}. whats the dogs name"] }
          ] }
      ]
    },
    {
      id: "s2", route: "bf", title: "After the first date",
      them: ["home 🙂", "that was fun. sorry i talked about my housemates bin roster for like ten minutes", "also sorry about your flat white. i did warn you"],
      replies: [
        { you: "Me too. I was so nervous but it was easy?",
          them: ["you hid it well!", "i changed my shirt three times and then wore the first one", "can i see you again"],
          replies: [
            { you: "Yes, definitely.", them: ["good 😊", "ill think of something with less stuff to spill"],
              replies: [
                { you: "Can I pick? I want to go somewhere I've never been with a guy.", them: ["ooh yes", "where"],
                  replies: [
                    { you: "The Valley. Somewhere gay.", them: ["yes. ill take you to my favourite bar", "they play a lot of kylie. like a LOT. just so you know"] },
                    { you: "Honestly? Just a walk. Somewhere quiet.", them: ["new farm park on sunday?", "we can hold hands or not, whatever"] }
                  ] },
                { you: "Surprise me.", them: ["oh no pressure", "ok i have an idea. wear comfy shoes"] }
              ] },
            { you: "Can I be honest? I didn't know if I'd like it. But I did.",
              them: ["oh good lol", "wait what did you think you wouldnt like"],
              replies: [
                { you: "Being out in public with a guy. Like, on a date.", them: ["yeah that makes sense", "nobody in there cared btw. the barista only cared that i spilled your coffee", "next time somewhere more chill"] },
                { you: "I don't know. Liking a guy, I guess. It's still new.", them: ["yeah of course", "you dont have to have it all sorted by coffee number one lol. or ten"] }
              ] }
          ] },
        { you: "I had fun. Same time next week?",
          them: ["already in my calendar", "i actually put 'coffee w biscuit guy' in my work calendar and my manager saw it", "so now i have to see you again. for HR reasons"],
          replies: [
            { you: "Well, we can't upset HR.", them: ["exactly", "next saturday. ill bring napkins"] },
            { you: "Your manager knows about me already?", them: ["she knows i had coffee with a cute guy with a dog", "she asked if you were the one. linda it was one coffee"] }
          ] },
        { you: "Was it okay that I didn't kiss you goodbye?",
          them: ["yes!! totally", "it was your first date with a guy, i wasnt going to make it weird", "was the hug ok? im a hugger sorry"],
          replies: [
            { you: "The hug was nice.", them: ["good 😊", "more hugs then", "can i see you again"] },
            { you: "Next time maybe you can kiss me.", them: ["oh", "ok. yes. noted", "very noted", "next saturday??"] }
          ] }
      ]
    },
    {
      id: "s3", route: "bf", title: "Good morning",
      them: ["morning ☀️", "[photo] this is my coffee instead of brunch with you", "its from the work machine. tastes like a coin", "hope work's ok today"],
      replies: [
        { you: "Morning! That is a tragic coffee.",
          them: ["i know 😔", "dinner tonight to make up for it?"],
          replies: [
            { you: "Yes. Where?", them: ["theres a thai place in west end that does the best pad see ew", "its also really dark in there so you wont see how much i eat"] },
            { you: "Can't tonight. Tomorrow?", them: ["tomorrow works", "ill survive on coin coffee"] }
          ] },
        { you: "Good morning to you too 😊",
          them: ["oh i like getting one back", "is this a thing now? good morning texts?", "bc im into it"],
          replies: [
            { you: "It's a thing now.", them: ["great. im going to be so annoying about it", "have a good day x"] },
            { you: "I've never had someone text me good morning before.", them: ["never??", "ok well now you do. every day. sorry in advance"] }
          ] },
        { you: "I told someone at work about you.",
          them: ["wait what", "who?? what did you say"],
          replies: [
            { you: "Sam. I said I'm seeing a guy.", them: ["{name} thats big", "what did she say"],
              replies: [
                { you: "She said 'finally' and asked to see a photo.", them: ["finally lol i like her already", "which photo. please not the squinting one"] },
                { you: "She was really nice about it.", them: ["good", "ok my morning just got way better"] }
              ] },
            { you: "Just that I had a good weekend. Baby steps.", them: ["still counts", "one day youll tell them about me and my coin coffee"] }
          ] }
      ]
    },
    {
      id: "s4", route: "bf", title: "So... are we?",
      them: ["ok can i ask something kind of forward", "i deleted the app last night. i dont really want to see anyone else", "do you want to be my boyfriend?"],
      replies: [
        { you: "Yes. I'd really like that.",
          them: ["😊😊😊", "ok im grinning at my phone like an idiot", "my housemate just asked who died"],
          replies: [
            { you: "I have a boyfriend. That's so weird to say.", them: ["good weird or bad weird"],
              replies: [
                { you: "Good weird. Really good weird.", them: ["say it out loud", "like in your kitchen. go on"] },
                { you: "Scary weird. But I want it.", them: ["scary's ok", "ill be scared with you. well im not scared. but you know what i mean"] }
              ] },
            { you: "Did you just tell your housemate?", them: ["i told my housemate, the group chat and kevin", "kevin wants to meet biscuit"] }
          ] },
        { you: "I want to, I'm just nervous about the word.",
          them: ["thats ok", "we can just keep doing what we're doing and you can use the word whenever", "im not going anywhere lol. i deleted the app"],
          replies: [
            { you: "Okay. Boyfriend. Yes. Boyfriend.", them: ["💙", "you said it!!"] },
            { you: "Can I tell people I'm seeing someone first?", them: ["yeah of course", "seeing someone, dating, hanging out with a tall guy who spills things. whatever you want", "i know what it is"] }
          ] },
        { you: "Wait, you deleted the app before asking me?",
          them: ["...yes", "bold i know", "if you say no im redownloading it and we never speak of this"],
          replies: [
            { you: "Don't redownload it. Yes.", them: ["oh thank god", "boyfriend 😭"] },
            { you: "I deleted mine last week.", them: ["LAST WEEK??", "and you let me sweat like this", "ok. boyfriends. both of us"] }
          ] }
      ]
    },
    {
      id: "s5", route: "bf", title: "Meeting your friends",
      them: ["trivia with jess and priya tonight!! should i be scared", "whats the dress code for meeting the friends"],
      replies: [
        { you: "Jess will grill you. Priya will love you.",
          them: ["ok. ill do the sport questions so jess likes me", "what does she grill people on. is it like a quiz. do i study"],
          replies: [
            { you: "Your intentions.", them: ["my intentions are trivia and you", "wait. you then trivia. then chips"] },
            { you: "Whether you're good enough for me.", them: ["fair. probably not", "but i know a scary amount about 2000s pop so"] }
          ] },
        { you: "I'm a bit nervous introducing you.",
          them: ["yeah thats fair", "is it them knowing or me being there"],
          replies: [
            { you: "The friends seeing me with a guy. For real.", them: ["yeah. thats a big one", "if it gets too much just squeeze my hand and we'll go outside for a bit. deal?"],
              replies: [{ you: "Deal.", them: ["see you at 7 💙"] }, { you: "Can we not hold hands in front of them yet?", them: ["course. no hands", "just two guys who are very good at trivia"] }] },
            { you: "What if they don't like you?", them: ["then ill win them over with trivia", "and if that doesnt work ill sulk a bit. but ill still like you"] }
          ] },
        { you: "Wear something cute. They'll judge.",
          them: ["cute how", "like nice shirt cute or like your kind of cute? bc i cant do what you do. id look like a lampshade"],
          replies: [
            { you: "Nice shirt. I'll do enough cute for both of us.", them: ["ok deal", "what are you wearing"],
              replies: [{ you: "The pink shirt. And gloss.", them: ["oh i love that shirt", "ok now im nervous. youre going to look way better than me"] }] },
            { you: "Lampshade could work.", them: ["rude", "...probably true though"] }
          ] }
      ],
      after: "Jess texts you at 10pm: \"ok i LIKE him\" Priya texts at 10:02: \"he knew every spice girls answer\" Priya: \"like every single one\""
    },
    {
      id: "s6", route: "bf", title: "Holding hands",
      them: ["can i hold your hand tomorrow? on the walk at south bank", "totally fine if not", "i just thought id ask instead of doing the weird hand brush thing"],
      replies: [
        { you: "Yes. I'd like that.",
          them: ["ok 🙂", "can i ask. have you held a guy's hand in public before"],
          replies: [
            { you: "No. Never.", them: ["oh ok. big one then", "if you want to let go just let go. i wont be weird about it"],
              replies: [
                { you: "What if someone says something?", them: ["then we keep walking", "and ill probably say something back and you'll be embarrassed", "but its south bank on a sunday. everyone's looking at the ibises"] },
                { you: "Okay. I'm excited.", them: ["me too. way more than a normal person should be about a walk"] }
              ] },
            { you: "Once, at Pride. But that doesn't count.", them: ["it counts!", "but yeah tomorrow's just a normal sunday. thats harder"] }
          ] },
        { you: "Maybe not in public yet. Is that okay?",
          them: ["yeah of course", "can i hold it in the car though? nobody sees that"],
          replies: [
            { you: "Yeah. The car's fine.", them: ["car hand holding. very romantic", "one day south bank. no rush"] },
            { you: "Sorry. I feel like I'm letting you down.", them: ["youre not", "i came out at 19 and didnt hold a guys hand in public till i was like 23. i get it"] }
          ] },
        { you: "I'll try. I might let go if I get nervous.",
          them: ["thats fine", "if you let go ill just walk really close to you. like annoyingly close"],
          replies: [{ you: "Deal.", them: ["deal 💙"] }] }
      ],
      after: "On the walk he keeps bumping his shoulder into yours. After a while you start bumping back."
    },
    {
      id: "s6b", route: "bf", title: "Summer feet",
      them: ["davies park markets tomorrow?", "its meant to be 33. wear something cool"],
      replies: [
        { you: "I was thinking the flip-flops. And painted toes.",
          them: ["the pink ones from the women's section? yes", "what colour toes"],
          replies: [
            { you: "Pink, to match.", them: ["obviously", "im buying you a mango smoothie"] },
            { you: "Rainbow. A different colour each toe.", them: ["ok amazing", "im going to be so smug holding your hand all morning"] }
          ] },
        { you: "My toes are painted but I'll wear sneakers.",
          them: ["you can!", "but you painted them for a reason right", "nobody looks at feet at the markets. and if they do theyre thinking nice colour"],
          replies: [
            { you: "Okay. Sandals it is.", them: ["😊 see you at 8"] },
            { you: "Sneakers this time. Sandals next time.", them: ["deal"],
              after: "You wear the sneakers. The next Saturday you wear the sandals, and he notices before you say anything." }
          ] },
        { you: "Can I borrow your flip-flops? Mine are too manly.", them: ["mine are worse lol. theyre from a petrol station", "shops after breakfast? we'll find you some cute ones"] }
      ],
      after: "At the markets the lady at the plant stall looks down and says \"ooh, love that colour on you.\" You say thanks. You barely even go red.",
      debrief: "Painted toes at the markets counts. It isn't a small thing."
    },
    {
      id: "s7b", route: "bf", title: "Lazy Sunday",
      intro: "Sunday afternoon at his place in New Farm. The game's on mute, you've got your feet up on the couch, and he's been eyeing your socks for ten minutes.",
      them: ["ok so you know how you said youre not ticklish", "you squirmed when my hand brushed your foot before. i saw it", "socks off. i'm testing this"],
      replies: [
        { you: "Don't you dare.",
          them: ["too late, one sock down 😈", "omg you ARE ticklish. you kicked the remote across the room", "say stop and i'll stop"],
          replies: [
            { you: "Okay okay STOP 😂", them: ["stopping. hands up", "you've gone bright red lol", "come here, i'll make you a tea as an apology"] },
            { you: "...fine. Five more seconds.", them: ["five more seconds, he says 😂", "you lasted two", "officially the most ticklish man in brisbane. im telling jess"] }
          ] },
        { you: "I'm not ticklish. Go on, try.",
          them: ["big words", "socks off then", "ok you lasted about one second before you yelped. the neighbours probably heard"],
          replies: [
            { you: "That was a cough.", them: ["a cough. sure", "do you want me to stop or are you still 'not ticklish'"],
              replies: [
                { you: "Stop! I give up 😂", them: ["stopped 🙂", "your feet are freezing btw. blanket?"] },
                { you: "Revenge is coming.", them: ["i'm not ticklish", "(i am extremely ticklish, please don't)"] }
              ] },
            { you: "Okay fine, I'm a bit ticklish.", them: ["a bit 😂", "i'll leave them alone. for today"] }
          ] },
        { you: "Only if I get to do yours after.", them: ["deal", "wait no. i didn't think that through", "ok truce, nobody's feet get touched", "(for now)"] }
      ],
      after: "Later he pulls the blanket over both of you and keeps one hand resting on your ankle for the rest of the game. You don't move it.",
      debrief: "Mucking around on the couch with your boyfriend is part of it too. And stop means stop."
    },
    {
      id: "s8", route: "bf", title: "A wobble",
      them: ["hey can we talk about the work drinks", "when your boss came over you introduced me as your friend", "it stung a bit ngl. ive been thinking about it all night and id rather just say it"],
      replies: [
        { you: "I'm sorry. I panicked.",
          them: ["i know. ive done it too", "i just. i like being with you and i want people to know. one day"],
          replies: [
            { you: "I want that too. I'm just not there yet.", them: ["i know. we're ok 💙"] },
            { you: "Can we work out together how I tell work?", them: ["yes. pancakes saturday and we make a plan", "on a napkin. very professional"] },
            { you: "I don't know why I did it.",
              them: ["i think you do lol", "youre not out at work, your boss walked over, your brain went nope", "doesnt make you a bad boyfriend"],
              replies: [{ you: "Thanks for getting it.", them: ["always. still bringing it up again in a month though 😏"] }] }
          ] },
        { you: "I'm not out at work yet. I should have told you that.",
          them: ["oh. ok that makes sense", "ill follow your lead at work stuff. just tell me, yeah?", "like before the drinks not after lol"],
          replies: [
            { you: "Sam knows. Nobody else.", them: ["ok so sam's safe", "so no holding hands under the table at work drinks then 😂"] },
            { you: "I want to be out at work. I'm just scared.", them: ["yeah. people can be weird", "when youre ready ill come to the next one and be extremely obviously your boyfriend"] }
          ] },
        { you: "It's not a big deal. You're overreacting.",
          them: ["ok maybe its not a big deal to you", "but i spent a long time being someone's 'friend' when i wasnt. im not doing that again", "im not saying come out at work tomorrow. just dont tell me its nothing"],
          replies: [
            { you: "You're right. I'm sorry.", them: ["thank you", "we're ok. i just needed to say it"] },
            { you: "I didn't know that about you.", them: ["yeah. my first boyfriend kept me a secret for a year", "so its a bit of a sore spot. i should have told you"] }
          ] }
      ],
      debrief: "Couples have wobbles. You talked about it, which is most of it."
    },
    {
      id: "s9", route: "bf", title: "Three words",
      them: ["cant sleep", "been thinking about you. and biscuit a bit", "i love you. you dont have to say it back. i just wanted to say it"],
      replies: [
        { you: "I love you too.",
          them: ["💙💙💙", "ok now im definitely not sleeping", "have you said that to a guy before?"],
          replies: [
            { you: "No. You're the first.", them: ["oh", "ok im screenshotting this", "sorry. not sorry"] },
            { you: "Come over. I don't want to say it over text.", them: ["its 1am", "...im putting my shoes on"] }
          ] },
        { you: "I'm not quite there yet, but I'm really happy with you.",
          them: ["honestly thats a good text to get at 1am", "no rush. i meant it either way", "im not counting or anything"],
          replies: [
            { you: "I think I'm close.", them: ["ill take close", "go to sleep"] },
            { you: "Thank you for not making it weird.", them: ["im the one texting i love you at 1am lol", "if anyones making it weird its me"] }
          ] },
        { you: "Did you mean to send that?",
          them: ["yes", "ok i was going to say it at dinner on saturday and i couldnt wait", "do you want me to unsend it. i wont. but do you"],
          replies: [
            { you: "Don't you dare unsend it.", them: ["ok 😊", "i love you. going to sleep now. im not going to sleep"] },
            { you: "Say it again on Saturday. Out loud.", them: ["deal", "out loud. over dumplings"] }
          ] }
      ]
    },
    {
      id: "s10", route: "bf", title: "Six months",
      them: ["happy six months 🥂", "remember when you were scared of the word boyfriend", "and last week you introduced me to your boss and i didnt even ask"],
      replies: [
        { you: "I know. Who even am I.",
          them: ["heres to six more. biscuit gets a whole sausage tonight to celebrate", "whats your favourite bit so far"],
          replies: [
            { you: "The first time we held hands at South Bank.", them: ["you let go after like 30 seconds", "then grabbed it back. i think about that a lot"] },
            { you: "When you spilt my coffee.", them: ["of course you'd pick that", "mine's when you told your boss 'this is my boyfriend'. you went so red. i nearly cried at the bar"] },
            { you: "Lazy Sundays on the couch.", them: ["even when i steal your socks?", "dont answer that"] }
          ] },
        { you: "Thank you for being so patient with me.",
          them: ["patient?? you made me wait three dates for a kiss. thats not that patient", "and the scary stuff was all you. i mostly ate dumplings and spilled things", "love you"],
          replies: [
            { you: "I love you too.", them: ["💙", "thai place tonight then dancing in the valley? wear the gold sandals"] },
            { you: "Six months ago I couldn't say the word gay.", them: ["and now?"],
              replies: [{ you: "Now I'm gay and I've got a boyfriend and a very spoiled dog.", them: ["best text ive ever got", "happy six months x"] }] }
          ] }
      ],
      debrief: "This is the end of the story for now. Replay any chapter whenever you like."
    }
  ]
};
