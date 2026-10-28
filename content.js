// All app content. {name} is replaced with the name set in Settings (or "Calum"),
// {bf} with the boyfriend's name from Settings (or "Matt").
// Conversation nodes: { them: [messages], replies: [{ you, ...node }], debrief }.
// A message is a string, or { from, text } in group chats.
// Every reply is a fine reply - there is no wrong answer anywhere in here.

window.CONTENT = {
  affirmations: [
    "Being gay isn't something that happened to you. It's just part of who you are, like your laugh or the way you take your coffee.",
    "You don't owe anyone a timeline. Getting comfortable with this at your own pace still counts.",
    "There's nothing to fix. You're working on feeling at home in yourself, and you're doing that.",
    "Liking guys is ordinary. Millions of people live it every day without a second thought, and you can too.",
    "Feeling awkward about it is normal. The awkward feeling fades a bit every time you hear the words.",
    "You get to decide who knows, when, and how. Privacy isn't hiding. It's choosing.",
    "The people who matter will want to know the real you. You can let them find out at your pace.",
    "Fancying someone, dating, falling for a guy: you're allowed all of it, the same as anyone else.",
    "Whatever you were taught growing up, you can keep what was kind and put down the rest.",
    "You're not late. Plenty of gay men only get comfortable in their 30s, 40s or later, and they still get the good stuff.",
    "Saying 'I'm gay' out loud, even just to yourself, is a real step. It's allowed to feel big.",
    "Some days will feel easy and some won't. Both are part of it.",
    "You can be gay and still be exactly as into footy, code, gardening or anything else as you were yesterday.",
    "There are gay men in every job, every suburb and every family. You've got more company than you think.",
    "Being gentle with yourself about this is the right call, not the soft option."
  ],

  prompts: [
    "When did you first notice you liked guys? What do you remember feeling?",
    "Write the sentence 'I'm gay' and then write the first thing your mind said back. Is that thought yours, or one you picked up somewhere?",
    "Who in your life do you think would take it best? What makes you think that?",
    "What's one thing you'd do, wear or say if you weren't worried about being read as gay?",
    "Describe a moment this week when you felt fully like yourself.",
    "What does a good life as a gay man look like to you, ten years from now?",
    "What's the worst-case reaction you're scared of? What would you actually do if it happened?",
    "Is there a gay person (real, famous or fictional) you look up to? What do you like about them?",
    "What would you say to a younger you who was just starting to work this out?",
    "Which word feels most comfortable right now: gay, queer, into guys, something else? Why?",
    "What's one small thing you could do this week that's a bit more 'out' than last week?",
    "What has hiding cost you, and what has it protected you from?",
    "Write about a guy you've had a crush on. Let yourself enjoy it.",
    "How do you want to feel when someone calls you gay in passing? What would help you get there?"
  ],

  // Casual everyday messages. People just know, and it's no big deal.
  chats: [
    {
      id: "jess-weekend",
      contact: "Jess", role: "mate", avatar: "J",
      them: ["Oi {name} 👋", "Did you end up going on that date Saturday?? I need details. What's he like?"],
      replies: [
        { you: "Yeah, it was good! He's really easy to talk to.",
          them: ["Love that for you 😊", "Easy to talk to is underrated. Seeing him again?"],
          replies: [
            { you: "Maybe, we'll see.", them: ["No pressure. Just glad you had a nice night 💛"] },
            { you: "Yeah, he asked about next weekend.", them: ["Ahhh {name}!! Okay you have to bring him to trivia at some point"] }
          ] },
        { you: "Bit awkward honestly, not sure there was a spark.",
          them: ["Fair enough, not every guy's going to be the one", "Good on you for putting yourself out there though"] },
        { you: "Haha I'm not ready to talk about it yet",
          them: ["All good! Tell me whenever, or never 😄", "Brunch Sunday still?"] }
      ]
    },
    {
      id: "sam-work",
      contact: "Sam", role: "coworker", avatar: "S", // she
      them: ["Hey {name}, for the end-of-year thing, partners are invited", "Are you bringing your boyfriend or flying solo? Need numbers for catering"],
      replies: [
        { you: "Solo this year!", them: ["No worries, put you down as one 👍"] },
        { you: "Not seeing anyone at the moment.", them: ["Easy, one it is. Plenty of us going stag anyway 😂"] },
        { you: "Plus one, thanks.", them: ["Great, can't wait to meet him 🙂", "Any dietaries?"] }
      ]
    },
    {
      id: "dan-gym",
      contact: "Dani", role: "gym friend", avatar: "D",
      them: ["{name}!! The new guy at the gym asked if you were single 👀", "Said he thought you were cute"],
      replies: [
        { you: "Wait what 😳",
          them: ["Hahaha yep. Tall one, does the 6am classes", "Want me to tell him you said hi?"],
          replies: [
            { you: "Go on then", them: ["Legend. Wingman duties accepted 🫡"] },
            { you: "Let me think about it", them: ["Fair. Offer stands"] }
          ] },
        { you: "Ha, flattering. Not really looking right now.", them: ["All good, I'll let him down gently 😄"] },
        { you: "Which one??", them: ["Curly hair, always wipes down the bench. A gentleman"] }
      ]
    },
    {
      id: "priya-show",
      contact: "Priya", role: "mate", avatar: "P",
      them: ["{name}, have you watched Heartstopper yet?", "I keep thinking you'd love it. Also the gay bar on James St is doing a trivia night, want to come?"],
      replies: [
        { you: "Not yet! Is it worth it?", them: ["It's adorable. Bring tissues. And snacks"] },
        { you: "Trivia sounds fun, count me in.", them: ["Yesss. I'm terrible at sport questions so you're on those"] },
        { you: "Maybe, I get a bit nervous in those places.", them: ["Totally get it. We'll go early when it's quiet and leave whenever you want 💜"] }
      ]
    },
    {
      id: "chris-flat",
      contact: "Chloe", role: "flatmate", avatar: "C",
      them: ["Heads up {name}, I'm having a few people over Friday", "Feel free to invite whoever, your guy included if you like"],
      replies: [
        { you: "Cheers, I'll ask him.", them: ["Sweet. I'll grab extra chips"] },
        { you: "Not sure there's a 'guy' yet haha", them: ["Ha fair. Well, the offer's there whenever"] },
        { you: "Thanks for being chill about it.", them: ["Hun, of course. It's your home too"] }
      ]
    },
    {
      id: "alex-match",
      contact: "Alex", role: "dating app", avatar: "A",
      them: ["Hey! Your profile made me laugh, the bit about the dog 😂", "First time on here or are you a seasoned pro?"],
      replies: [
        { you: "Pretty new to all this honestly.",
          them: ["Ah that's cool, everyone starts somewhere", "No rush. Coffee sometime, if you're keen?"],
          replies: [
            { you: "Coffee sounds good.", them: ["Great. Somewhere in the CBD? I know a good spot near Queen St"] },
            { you: "Maybe chat a bit more first?", them: ["Yeah of course! So tell me more about this dog"] }
          ] },
        { you: "Seasoned pro, obviously 😎", them: ["Haha sure 😏 Okay pro, what's your go-to first date?"] }
      ]
    },
    {
      id: "alex-beach", tier: 1,
      contact: "Alex", role: "dating app", avatar: "A",
      them: ["home and still finding sand everywhere", "had a really good time today", "also sorry not sorry about the sandals thing 😂"],
      replies: [
        { you: "You stole my sandals and tickled my feet in front of half of Streets Beach.",
          them: ["i 'borrowed' them. you were the one who put your feet in my lap", "and in my defence i didnt know anyone could laugh that loud", "the lady with the pram looked over twice"],
          replies: [
            { you: "I'm never showing my face at South Bank again.", them: ["nah she was smiling", "you stopped me after like 10 sec anyway, very fair", "second date? i'll keep my hands to myself. mostly"],
              replies: [
                { you: "Mostly 😂 Okay, yes.", them: ["sweet. thursday? i'll pick somewhere with no sand"] },
                { you: "Yes, but I'm wearing boots.", them: ["boots lol. smart", "thursday then"] }
              ] },
            { you: "Payback is coming, just so you know.", them: ["i'll be wearing socks. two pairs", "so that's a yes to a second date?"],
              replies: [{ you: "That's a yes.", them: ["😊 good"] }] }
          ] },
        { you: "I had a good time too. Even the sandals bit.",
          them: ["even the sandals bit 😏", "noted", "you've got a good laugh. you should do it more"],
          replies: [
            { you: "Only if you stop tickling me.", them: ["cant promise that", "but i'll stop when you say. always"] },
            { you: "Thanks. That's nice to hear.", them: ["just saying it how it is", "thursday?"] }
          ] },
        { you: "I'm still recovering tbh.", them: ["lol fair", "next time i'll ask before i grab your feet", "there is going to be a next time right"],
          replies: [{ you: "Yeah. There is.", them: ["good 🙂"] }] }
      ],
      after: "You realise you spent the whole afternoon holding hands on the boardwalk and didn't once check who was watching."
    },
    {
      id: "rachel-ex",
      contact: "Rachel", role: "ex", avatar: "R",
      // Korean, English is her second language: keep it natural and warm, never a caricature.
      them: [
        "Hi {name}! Long time no see 😊",
        "I hear your news from Jess. I want to say first: I am really happy for you. Really really.",
        "I think about it a lot since she told me. When we were dating, sometimes I feel like you are somewhere far away, even when you are sitting right next to me. I thought maybe it is because of my English, or because I am too different, or not interesting enough for you. Now I understand it was never about me at all."
      ],
      replies: [
        { you: "Rach, I'm so sorry I made you feel like that.",
          them: [
            "Aigoo, no, please don't say sorry. You were never unkind to me, not one time. You always walk me home, you learn how to say 'I miss you' in Korean, you even eat the spicy tteokbokki even though you are crying the whole time 😂",
            "I just wish you did not have to carry that secret alone. It must be so heavy. When I think about it now, I feel a little bit sad for young you, more than I feel sad for me.",
            "And honestly? I am happy we did not end up together forever. You would be a very kind boyfriend but a secretly sad one, and I never want that for you. Now in your photos your smile is different. Bigger. This is a much better ending for both of us."
          ],
          replies: [
            { you: "Your English was never the problem. You were wonderful.",
              them: [
                "Ah, you will make me cry at work 😭",
                "Thank you, really. For a long time I think maybe it was my fault. Now I can put that worry down. You give me a gift by telling the truth, you know? Even if it is a few years late 😂",
                "Next time you come northside we get coffee, ok? I want to hear everything. Especially about the boys. I have opinions 👀"
              ] },
            { you: "How do I seem different to you now?",
              them: [
                "Before, you are very quiet, very careful. Like you always check first if it is okay to laugh.",
                "Now in your photos you are wearing colours! Pink shirt! Sunglasses like a celebrity! And you look like you are not checking anymore. You are just enjoying your life.",
                "I am really proud of you, {name}. 대박. Truly."
              ] }
          ] },
        { you: "Did you ever guess?",
          them: [
            "Maybe a little bit 😅",
            "One time we watch a movie and you say the actor is very handsome, very nice jawline, and I think 'hmm'. But I did not want to guess something so private. It is your story to tell, not mine to decide.",
            "I'm glad you tell it now, and that you are not pretending forever with me. You deserve someone who makes you feel like you are home, and I think that person is a man, not me. That's okay! It's really, really okay 💛"
          ] }
      ]
    },
    {
      id: "archie-ex",
      contact: "Archie", role: "ex", avatar: "A",
      them: [
        "Hey {name}. Can I ask you something kind of personal?",
        "I've been going back and forth on whether to even send this. It's been sitting in my chest for months.",
        "Did you know you were gay when we were together?"
      ],
      replies: [
        { you: "Honestly, I was still working it out.",
          them: [
            "Okay. I think I needed to hear that.",
            "For a long time after we broke up I kept replaying everything. Every time you said you were tired, every time you went quiet when I talked about moving in together. I made it into this whole story where I wasn't enough, where if I'd been prettier or funnier or less needy you'd have stayed.",
            "So it wasn't about me?"
          ],
          replies: [
            { you: "It was never about you. I really cared about you.",
              them: [
                "Yeah. I know you did. I think deep down I always knew that, I just needed you to say it out loud.",
                "And honestly, seeing you now, I get it. You're so much more you. You post things, you laugh in videos, you wear that pink shirt like you've been wearing it your whole life. I never got to meet that guy when we were together, and that's not your fault. He wasn't allowed out yet.",
                "I'm glad he's out now. I really am."
              ] },
            { you: "No. You didn't do anything wrong.",
              them: [
                "Okay. That actually helps a lot more than you'd think.",
                "I'm still a bit sad, if I'm honest. Not about you being gay, that part I'm genuinely fine with. Sad about the time. But I'd rather have the truth and be a bit sad than keep living in the version where I thought I'd broken something.",
                "Maybe one day we can grab a drink and actually laugh about it. Not yet. But one day."
              ] }
          ] },
        { you: "Part of me did. I'm sorry I couldn't say it then.",
          them: [
            "I'm not angry. I was for a while, I won't pretend I wasn't. But I'm not now.",
            "It's not an easy thing to say. I've watched friends try and it took them years. And I remember how people around us talked back then, the jokes at parties, all of it. If I'm honest, I'd have been scared too.",
            "Mostly now I'm just glad you can say it. You seem lighter. You deserve that."
          ] },
        { you: "I'd rather not get into that, if that's okay.",
          them: [
            "That's fair. I'm not trying to make it about me.",
            "I just want you to know I'm cool with it. Really. If anything I'm happy you're finally living the life that actually fits you."
          ] }
      ]
    },
    {
      id: "uni-girls",
      contact: "Uni girls 💅", role: "group chat", avatar: "U",
      them: [
        { from: "Nicole", text: "OMG {name} I just heard!!!" },
        { from: "Ailisha", text: "Nic you can't just open with 'I heard' 😂 Hi {name} 💕" },
        { from: "Jemima", text: "We love you {name}. Obviously. But also: is there a man, where did you meet him, and does he have a brother" }
      ],
      replies: [
        { you: "Haha thanks girls 😂 There might be a man.",
          them: [
            { from: "Nicole", text: "MIGHT?? Reunion drinks Friday, you're coming" },
            { from: "Ailisha", text: "Bring him or we'll assume he's made up" },
            { from: "Jemima", text: "And the brother question still stands" }
          ] },
        { you: "No man yet!",
          them: [
            { from: "Jemima", text: "Then we're setting you up. I know someone." },
            { from: "Ailisha", text: "Jemima no." },
            { from: "Nicole", text: "Jemima YES" }
          ],
          replies: [
            { you: "Okay... who is he?", them: [{ from: "Jemima", text: "My cousin's flatmate. Tall, kind, makes sourdough. I'll send his insta 😌" }] },
            { you: "Maybe let me settle in first 😅", them: [{ from: "Ailisha", text: "Totally fair. No pressure from us" }, { from: "Nicole", text: "(some pressure from me) (it's love)" }] }
          ] },
        { you: "Was it obvious back at uni?",
          them: [
            { from: "Nicole", text: "Babe you made us watch Mamma Mia four times in one semester" },
            { from: "Ailisha", text: "Nicole 😂 Not obvious. You were just you. We liked you then and we like you now" },
            { from: "Jemima", text: "Honestly we just always wanted you happy 💗" }
          ] }
      ]
    },
    {
      id: "nicole-dm",
      contact: "Nicole", role: "uni friend", avatar: "N",
      them: ["Sorry for the group chat chaos 😂", "Real talk though {name}, how are you going with it all? Must've been a lot."],
      replies: [
        { you: "Honestly, still getting used to it.",
          them: ["That makes total sense. You don't have to have it all figured out.", "I'm always up for a chat. Or a walk and a gelato, no talking required"] },
        { you: "Pretty good actually! Lighter.",
          them: ["Love that. You seem lighter 💛"] }
      ]
    },

    // ---- Unlocked by "your voice" tier (0 Just out, 1 Finding your voice, 2 Out & proud, 3 Full flamboyance).
    // His replies get camper and the girls treat him more and more like their gay best friend.
    {
      id: "jemima-crush", tier: 1,
      contact: "Jemima", role: "uni friend", avatar: "J",
      them: [
        "Okay. Confession time, since apparently we're all being honest now and I've had two glasses of wine 🍷",
        "I had the BIGGEST crush on you in first year. Like, embarrassingly big. I picked my seat in stats every single week based on where you were sitting, and I hate stats, {name}. I still don't know what a p-value is because I spent that entire semester staring at the back of your head."
      ],
      replies: [
        { you: "Wait WHAT 😂 Jem, I had no idea.",
          them: [
            "Of course you had no idea, you were completely oblivious, and honestly now I know why 😂",
            "I used to get so in my head about it. I'd think 'maybe he's just shy' or 'maybe he's not into girls who talk this much'. Turns out it was option three: not into girls, full stop. Which, looking back, explains SO much. The way you lit up talking about that guy from the footy team? I genuinely thought you just really loved footy.",
            "But I need you to know I'm not sad about it. At all. If we'd actually got together, I'd have been dating someone who was quietly pretending the whole time, and you'd have been miserable and too kind to say so. That's not a love story, that's a slow-motion car crash."
          ],
          replies: [
            { you: "That's a lot to carry. I'm sorry you went through that.",
              them: [
                "Don't you dare apologise. I'd do it all again, honestly, because it got me here.",
                "What I've got with you now is so much better than whatever first-year crush thing I had. I get the real you. The one who sends me voice notes rating strangers' outfits, the one who cried at the Mamma Mia sequel, the one who finally looks comfortable in his own skin. I wouldn't trade that for a hundred awkward stats-class dates.",
                "The universe knew exactly what it was doing with us. I'm just glad it let me keep you 💗"
              ] },
            { you: "So how do you see me now?",
              them: [
                "Honestly? Like I'm finally seeing you properly for the first time.",
                "Back then you were lovely, but there was always this wall. Like you were acting out a version of yourself you'd read about somewhere. Now you laugh louder, you dress like you actually enjoy it, you tell me who you think is cute without checking the room first. You take up space, {name}. It's the best thing.",
                "First-year me had great taste. She just had the wrong job in mind for you. You were never meant to be my boyfriend. You were meant to be my person 💅"
              ] }
          ] },
        { you: "Aw, Jem 🥹",
          them: [
            "Don't 'aw' me, I'll cry and ruin my mascara 😂",
            "Seriously though. I spent a whole year wondering what was wrong with me, and it turns out nothing was wrong with either of us. You just weren't mine to have, and that's honestly the best plot twist.",
            "Because now I get you AND I get to hear about every single one of your boys in excruciating detail. That's clearly the better deal. I'd sign up for it again tomorrow."
          ] }
      ]
    },
    {
      id: "nicole-crush", tier: 1,
      contact: "Nicole", role: "uni friend", avatar: "N",
      them: [
        "Can I tell you something funny? Well, funny now. It was not funny at seventeen.",
        "Year 12 formal. I was SO sure you were going to ask me. I planned my whole dress around it, {name}. Emerald green, because you once said green was a nice colour on me and I took that as basically a marriage proposal 😩"
      ],
      replies: [
        { you: "Nic I'm so sorry 😂 I remember that dress, you looked amazing.",
          them: [
            "See, that's exactly it! You noticed the DRESS. You always noticed the dress. You never once noticed me trying to hold your hand in the cinema 😂",
            "I was gutted at the time, I won't lie. I went home, ate an entire tub of cookies and cream and wrote a very dramatic diary entry about it. But when you told us you were gay, it was like a puzzle piece clicking into place, and honestly all I felt was relief. A bit for me, but mostly for you, because I could suddenly see how hard you'd been holding yourself together all those years.",
            "Imagine if you HAD asked me. One very stiff slow dance, a couple of years of me wondering why you never wanted to stay over, and we probably wouldn't even be friends now. Instead I've got you properly. I definitely came out of this one winning."
          ],
          replies: [
            { you: "You deserved better than that.",
              them: [
                "I did. And so did you. And look, we both got it.",
                "You're honest now. You're funny in this really unfiltered way you never were at school. When you walked into Jemima's birthday in those sandals and that little shirt, I genuinely teared up a bit, because that's the boy I always felt was in there somewhere.",
                "I'm so proud of you, {name}. Seventeen-year-old me would be confused. Current me is thrilled."
              ] },
            { you: "Did it make things weird when I came out?",
              them: [
                "Weird? No. Clearer, if anything.",
                "For a while after school I'd still have these little moments of 'what if', you know? And when you told me, they just stopped. Not in a sad way. More like a door closing quietly on a room I didn't need anymore.",
                "What's left is this really easy friendship where I don't have to wonder about anything. I can just love you, as my friend, completely. That's honestly rarer than a formal date."
              ] }
          ] },
        { you: "Was I that oblivious?",
          them: [
            "Babe. You were oblivious to ALL the girls. Every single one of us 😂",
            "Kayla left a note in your locker in Year 11. Steph asked you to the movies TWICE. I made you a playlist, {name}. A whole playlist! And you just said 'thanks, these are bangers' and went back to talking about Troye Sivan. In hindsight, the signs were glowing in neon.",
            "But I'm genuinely so happy it worked out this way. I'd much rather have you as the friend who tells me the truth about my outfits than the boyfriend who was never really there. That version of you was polite and lovely and sort of switched off. This version is switched ALL the way on, and he's an upgrade in every possible way."
          ] }
      ]
    },
    {
      id: "priya-crush", tier: 1,
      contact: "Priya", role: "mate", avatar: "P",
      them: [
        "Jess just told me you KNEW I liked you at uni?? I am MORTIFIED. I'm hiding under my doona and I'm never coming out.",
        "Okay, I'm coming out a little bit. Just to say: in my defence, you were very sweet. You always remembered my coffee order, and you once carried my bag up four flights of stairs because the lift was broken. That's practically a romcom, {name}. Any girl would have fallen for that."
      ],
      replies: [
        { you: "Your coffee order is easy. Large oat flat white, extra hot.",
          them: [
            "SEE. THIS IS THE PROBLEM. You can't just SAY things like that 😂",
            "Honestly though, plot twist of the century, but I'm so glad it went this way. If we'd dated I'd have spent two years trying to work out why you'd rather go shopping with me than kiss me, and I'd have decided it was my fault. That would have wrecked me a bit.",
            "Instead I get the version of you who drags me into Cotton On and tells me which jeans actually suit me, and who means it when he says I look nice. That's worth way more than a boyfriend. Boyfriends come and go. You're stuck with me now."
          ],
          replies: [
            { you: "I'm not going anywhere, Pri.",
              them: [
                "Good. Because I've already told my mum you're coming to Diwali this year and she's making extra.",
                "And for the record, I'd take best-friend you over boyfriend you every day of the week. You're more yourself, you're more fun, and you're SO much better dressed than you were in second year.",
                "Whoever ends up with you is very lucky. I'll be giving him a full interview first 💕"
              ] },
            { you: "How do you see me now?",
              them: [
                "Like a guy who finally stopped apologising for existing.",
                "At uni you were always shrinking a bit. Laughing a second after everyone else, checking if it was okay. Now you walk into a room and you're just there. Bright. Sometimes literally, that shirt last weekend was very bright 😂",
                "I'm proud of you. I hope you know that."
              ] }
          ] },
        { you: "I'm flattered, honestly.",
          them: [
            "You should be, I have excellent taste in men.",
            "Just, apparently, in men who also have excellent taste in men 😂",
            "I'm serious though, I'm glad. There's something really lovely about the person you had a crush on turning out to be someone you can just love properly, as a mate, with nothing weird underneath. You get the best bits of each other that way. I'll take that trade every time."
          ] }
      ]
    },
    {
      id: "ailisha-crush", tier: 1,
      contact: "Ailisha", role: "uni friend", avatar: "A",
      them: [
        "Right. Everyone else has done their little confession, so I suppose it's my turn 🙄",
        "I never had a crush on you. Let's be very clear about that.",
        "...Okay, I had a small one. In third year. For about a month. Microscopic. You were helping me with my thesis in the library and you made me a cup of tea without asking how I take it and got it exactly right, and something in my brain went 'oh no'."
      ],
      replies: [
        { you: "Ailisha. I'm honoured.",
          them: [
            "Don't be smug, it doesn't suit you. Actually it does, a bit. Annoying.",
            "But here's what I've realised. We'd have been a complete disaster together. You'd have spent every date looking past me at the waiter, and I'd have spent every date trying to work out what I was doing wrong. Two perfectly nice people being slowly confused at each other over pasta.",
            "What I've got now is a friend who'll sit with me in the library at 11pm and also tell me, honestly, when a guy I'm seeing is a red flag. You've got a really good eye for men, {name}. Better than mine, clearly. That's a much better arrangement for both of us."
          ] },
        { you: "Was it the tea?",
          them: [
            "It was entirely the tea. Milk, no sugar, bag left in for ages. Perfect.",
            "Look, I'm not someone who gushes, you know that. But since you came out, it's like talking to a different person, and I mean that in the best way. You used to be so careful with every sentence. Now you just say things. You tell me when you're scared, you tell me when you're happy, you told me last week about that guy who smiled at you on the train for a full five minutes. Old you would never.",
            "I'm really glad it never went anywhere. I didn't want a boyfriend who was hiding. I wanted a friend who isn't. Got one."
          ] }
      ]
    },
    {
      id: "jess-brunch", tier: 2,
      contact: "Jess", role: "mate", avatar: "J",
      them: ["Brunch Sunday? I need a full debrief on {bf}"],
      replies: [
        { you: "Babe. BABE. Clear your schedule, there is SO much tea ☕💅",
          them: ["Oh he's GAY gay now 😂", "I love this for you. Booking a table for three hours."] },
        { you: "Only if it's bottomless 🥂",
          them: ["Obviously. Who do you think I am"] }
      ]
    },
    {
      id: "chloe-woolies", tier: 2,
      contact: "Chloe", role: "flatmate", avatar: "C",
      them: ["Are you seriously wearing the lilac shorts to Woolies 😂"],
      replies: [
        { you: "Woolies is my runway, hun 💅",
          them: ["Honestly? Iconic.", "Grab milk while you're strutting"] },
        { you: "Too much?",
          them: ["Never. You look happy. That's the whole point 💛"] }
      ]
    },
    {
      id: "sam-lunch", tier: 2,
      contact: "Sam", role: "coworker", avatar: "S",
      them: ["Team lunch Friday: Thai or Mexican?"],
      replies: [
        { you: "Whichever place has the cutest waiter tbh 💁‍♂️",
          them: ["😂😂 I can't believe we used to think you were shy", "Mexican it is. I've seen the waiter. You're welcome."] },
        { you: "Thai, and I'm choosing everyone's drinks.",
          them: ["Bossy. I love it. Pick me something pink"] }
      ]
    },
    {
      id: "rachel-fab", tier: 2,
      contact: "Rachel", role: "ex", avatar: "R",
      them: ["{name}! I see your story with the sunnies and crop top 😳", "Who are you?? So fabulous, 대박"],
      replies: [
        { you: "Darling, I was always fabulous. I was just hiding it 💅",
          them: [
            "Hahaha yes!! I believe it. Old {name} so quiet, wear only grey and navy like a bank manager. New {name}, crop top and sunglasses at the beach like a K-pop idol 😂",
            "I show my friend your photo and she says 'this is the boy you dated??' and I say yes, but he was in disguise back then.",
            "Honestly I love this version so much more. Not because of the clothes. Because you look free. Free is the best look on anybody."
          ] },
        { you: "Thank you Rach 🥹",
          them: [
            "You look so happy now. That is the best part 💛",
            "When we were together I never once saw you smile like in that photo. It makes me really happy that somebody, even if it is just you yourself, finally made you smile like that."
          ] }
      ]
    },
    {
      id: "uni-pride", tier: 3,
      contact: "Uni girls 💅", role: "group chat", avatar: "U",
      them: [
        { from: "Nicole", text: "PRIDE MARCH. Who's coming" },
        { from: "Jemima", text: "{name} obviously. He's been planning his outfit since March" },
        { from: "Ailisha", text: "Is it true there's glitter involved" }
      ],
      replies: [
        { you: "There is SO much glitter. Prepare yourselves ✨🏳️‍🌈",
          them: [
            { from: "Nicole", text: "We are not worthy" },
            { from: "Jemima", text: "I'm making a sign that says I'M WITH HIM 👉" },
            { from: "Ailisha", text: "Remember when half of us were secretly in love with him? And now he's out here with more glitter than all of us combined. Iconic." }
          ] },
        { you: "I've got a spare rainbow flag for each of you, hunties 💅",
          them: [
            { from: "Ailisha", text: "Hunties 😂😂 I've never felt so included 🥹" },
            { from: "Nicole", text: "He's gone full gay and I've never been prouder" }
          ] }
      ]
    },
    {
      id: "dani-valley", tier: 3,
      contact: "Dani", role: "gym friend", avatar: "D",
      them: ["Valley Saturday? The girls want to see you work the dance floor", "Fair warning, Jemima's already told the bartender you're single"],
      replies: [
        { you: "Hun, I was BORN for that dance floor 🪩",
          them: ["Remember when you wouldn't even dance at Jess's 30th 😂", "Look at you now. Proud of you, {name}"] },
        { you: "Wear something sparkly, we're matching ✨",
          them: ["Matching?! Okay. OKAY. I'm in 💃"] }
      ]
    }
  ],

  // The storyline: in the closet with Archie, coming out, then meeting {bf}.
  // One chapter unlocks per day after you finish the previous one.
  // A chapter's contact defaults to {bf}.
  story: [
    {
      id: "c1", gaydar: 10, gaydarSays: "He's just sensitive. Right? ...Right?", title: "Date night", contact: "Archie", part: "Part 1: Before",
      intro: "You and Archie have been together three years. Her sister has a Pinterest board for your wedding. You've never told anyone that the board makes your chest go tight.",
      them: ["{name}, dinner at that Italian place on Friday? I booked us a table 🍝", "My sister keeps asking when we're getting engaged 😂", "She asked me at lunch today. In front of the whole café. I nearly died"],
      replies: [
        { you: "Sounds good! Haha tell her to relax.",
          them: ["Already did. She never listens 🙄", "She's also decided you're wearing the navy suit to her wedding so. Good luck with that", "Love you x"],
          replies: [
            { you: "Love you too x",
              them: ["😘", "Oh and wear something nice Friday. Not the footy polo. I'm begging"],
              replies: [
                { you: "I was thinking of trying something a bit different actually.", gaydar: 15, them: ["Ooh different how?", "Like a nice shirt? Yes please. You've got that cream one with the tags still on"] },
                { you: "No promises.", them: ["{name} 😐", "Fine. But if you wear the polo I'm ordering the most expensive thing on the menu"] }
              ] },
            { you: "Do we have to talk about weddings?",
              them: ["Haha ok calm down, it's my sister's wedding not ours", "...unless you're trying to tell me something lol", "You're not are you"],
              replies: [
                { you: "No, no. Just a long day.", them: ["Ok. You've had a lot of long days lately", "Friday. Carbs. Wine. You'll be fine x"] },
                { you: "I don't know.", gaydar: 20, them: ["You don't know what?", "{name}?", "Ok you're being weird. We'll talk Friday"] }
              ] }
          ] },
        { you: "Ha. Yeah. Friday's good.",
          them: ["You okay? You've seemed a bit far away lately.", "Like you're here but you're not. I don't know how else to say it", "I'm here if something's up x"],
          replies: [
            { you: "Just tired. Work stuff.",
              them: ["Okay. You've said that a lot", "I'm not having a go. I just miss you, even when you're sitting next to me", "Get some sleep xx"] },
            { you: "Can I ask you something weird?",
              them: ["Always", "Is it about the wedding? Because I promise I'm not expecting a ring"],
              replies: [
                { you: "Do you ever feel like you're playing a part?", gaydar: 20,
                  them: ["Like at work? All the time", "Like with us? No. Never.", "Do you?"],
                  replies: [
                    { you: "Sometimes.", them: ["Oh", "Ok", "That's kind of a big thing to say over text {name}", "Let's talk properly Friday. Ok? I love you"] },
                    { you: "No. Forget it. I'm being dramatic.", them: ["You're allowed to be dramatic with me", "But ok. Friday x"] }
                  ] },
                { you: "Never mind. It's nothing.", them: ["It's never nothing when you say it's nothing", "But ok. Friday x"] }
              ] }
          ] },
        { you: "Can we go somewhere else this time?",
          them: ["Why? You love that place", "You literally said their tiramisu was a religious experience"],
          replies: [
            { you: "The waiter there keeps staring at me.", gaydar: 15, them: ["The cute one? Lol he's probably just bored", "Or he thinks you're cute. Should I be worried 😂", "Kidding. We're going. Wear something nice"] },
            { you: "Fine, Italian.", them: ["Yay. Friday 7. Love you x"] }
          ] }
      ],
      after: "You put the phone down and feel like you're playing a part. You've felt that for a while. On Friday you open your wardrobe and look at the cream shirt with the tags on, and the little bottle of lilac nail polish you bought \"for a friend\".",
      debrief: "That far-away feeling is common before people come out. It's not you being a bad partner. It's a part of you asking to be seen."
    },
    {
      id: "c1b", gaydar: 40, gaydarSays: "Since when does my boyfriend own lip gloss??", title: "The Italian place", contact: "Archie", part: "Part 1: Before",
      intro: "Friday. You wore clear gloss, a bit of mascara, the cream silky shirt that's been in your wardrobe with the tags on, and your nails painted lilac. Archie looked at you for a second too long when you picked her up and didn't say anything all the way there.",
      outfits: [{"label": "A plain shirt, but clear gloss and lilac nails", "gaydar": -10, "intro": "Friday. You kept it simple: a plain white shirt and your good jeans. But you put on clear gloss and painted your nails lilac, and you didn't take either off. Archie noticed in the car. She didn't say anything all the way there."}, {"label": "The cream silky shirt, gloss, mascara and lilac nails"}, {"label": "Silky shirt, gloss, mascara, lilac nails and gold hoops", "gaydar": 5, "intro": "Friday. Clear gloss, a bit of mascara, the cream silky shirt that's had the tags on for months, lilac nails, and the little gold hoops you bought online and hid in your sock drawer. Archie looked at the hoops for a long time at the first red light. She didn't say anything all the way there.", "them": ["and EARRINGS??"]}],
      them: ["home", "what was that tonight", "the lip gloss {name}. and your nails"],
      replies: [
        { you: "What do you mean?",
          them: ["dont do that", "you know exactly what i mean", "you just turned up in it like it was normal", "the waiter kept looking at your hands and i wanted to die"],
          replies: [
            { you: "I just wanted to try it.",
              them: ["at dinner?? with me??", "my sister's friend was two tables over", "she's already messaged my sister asking if you're ok"],
              replies: [
                { you: "Why wouldn't I be okay?",
                  them: ["because guys dont just start wearing lip gloss out of nowhere", "is something going on. like actually. tell me"],
                  replies: [
                    { you: "Nothing's going on. I liked how it looked.", them: ["well i didnt", "i felt like an idiot sitting there", "dont do it again when we're out. please"] },
                    { you: "Maybe. I don't know yet.", gaydar: 60, them: ["what does that even mean", "no actually i cant do this tonight", "im going to bed"] }
                  ] },
                { you: "I'm sorry you were embarrassed.",
                  them: ["i was", "i told her you lost a bet", "thats what i had to say about my own boyfriend"],
                  replies: [
                    { you: "I didn't lose a bet.", them: ["yeah i know {name}", "thats kind of the problem"] },
                    { you: "Okay.", them: ["ok?", "thats it?", "whatever. night"] }
                  ] }
              ] },
            { you: "Do you not like it?",
              them: ["no", "i dont", "its not you. or its not the you i know"],
              replies: [
                { you: "Maybe it is me.", gaydar: 60,
                  them: ["what does that mean", "{name} you're freaking me out"],
                  replies: [
                    { you: "Forget I said that.", them: ["you cant just say that and then go forget it", "fine. night"] },
                    { you: "I don't know yet. I'm trying to work it out.", gaydar: 65, them: ["work WHAT out", "we've been together three years", "im not doing this over text"] }
                  ] },
                { you: "That's fair.", them: ["im not trying to be mean", "i just want my boyfriend back. not whoever that was tonight"],
                  replies: [{ you: "Okay.", them: ["night"] }] }
              ] }
          ] },
        { you: "Did you not like it?",
          them: ["honestly? no", "it was really embarrassing", "and dont wear it saturday. my friends will be there"],
          replies: [
            { you: "Yeah, okay.", them: ["thanks", "night"] },
            { you: "I'm going to wear what I want.",
              them: ["wow ok", "then dont be surprised when people say stuff", "and dont expect me to stick up for you"],
              replies: [
                { you: "I wasn't asking you to.", them: ["good", "night"] },
                { you: "Night, Archie.", them: ["night"] }
              ] }
          ] }
      ],
      after: "You take the gloss off with toilet paper in the bathroom. Your nails you leave. You look at them a lot over the weekend.",
      debrief: "Wanting to look a certain way before you can explain why is really common. Someone being uncomfortable with it doesn't make it wrong, and you don't owe anyone a reason yet."
    },
    {
      id: "c2", title: "Saying it to someone", contact: "Nicole", part: "Part 1: Before",
      intro: "Friday drinks at the Regatta with the uni girls. You said about nine words all night and left before the second round. Nicole noticed. Nicole always notices.",
      them: ["Hey {name}, you were quiet at drinks. Everything okay with you?", "You left your schooner half full. Which is how I know something's actually wrong lol", "No pressure. Just checking."],
      replies: [
        { you: "Can I tell you something and you won't tell anyone?",
          them: ["Of course. Always.", "Not even Ailisha. And you know how hard that is for me", "Take your time, I'm just on the couch"],
          replies: [
            { you: "I think I'm gay.",
              them: [
                "Oh, {name}.",
                "Okay. First thing: I love you, and that doesn't change a single thing about how I see you. Not one thing.",
                "Second thing: how long have you been carrying this around on your own? Because you've been quiet for months and I kept putting it down to work."
              ],
              replies: [
                { you: "Years, kind of. But it's been getting louder.",
                  them: [
                    "That sounds exhausting. Like, genuinely, I don't know how you've been getting through dinners with Archie.",
                    "You don't have to work it all out tonight. You've said it to one person. That's huge.",
                    "Can I ask, is it a 'think' or is it a 'know'? You can say think. Think is allowed."
                  ],
                  replies: [
                    { you: "It's a know. I just haven't said it out loud.",
                      them: ["Then say it to me. Right now. Type it.", "No pressure. But it might feel good."],
                      replies: [
                        { you: "I'm gay.", them: ["There it is 🥹", "How does that feel?", "And before you answer: I'm so proud of you I could cry. I might be crying. Don't tell anyone that either"] },
                        { you: "I can't yet.", them: ["That's okay. You already did, sort of. I'll take 'I think' for now 💛"] }
                      ] },
                    { you: "It's a think. A really big think.", them: ["Big thinks count", "You don't need a certificate. You get to figure it out as you go"] }
                  ] },
                { you: "I don't know what to do about Archie.",
                  them: [
                    "Yeah. That's the hard bit, isn't it.",
                    "You care about her. That's obvious. Everyone can see you care about her. But caring about someone and wanting to marry them are different things, and I think you know that.",
                    "Whatever you decide, you don't have to do it alone. I'll be on the other end of the phone, or on your couch with Tim Tams."
                  ],
                  replies: [
                    { you: "Do you think I have to tell her?",
                      them: ["Eventually, yeah. I think you'd want to.", "Not tonight. Not because I said so. When you're ready, and when it's fair on both of you", "She deserves the truth. And honestly so do you"] },
                    { you: "I feel like such a bad person.",
                      them: ["You're not. A bad person wouldn't be lying awake about it.", "You're a scared person. That's different. Scared people get to be gentle with themselves"] }
                  ] },
                { you: "Please don't make it a big thing.",
                  them: ["Okay. Small thing. Tiny thing.", "Well. It's a big thing for you, and I'll treat it like that. But I won't make a fuss or tell the girls or cry at you. Much.", "Gelato tomorrow? We don't have to talk about it unless you want to"] }
              ] },
            { you: "I think I'm bi. Maybe. I don't know.",
              them: ["Okay. That's okay too.", "You don't need to have the label sorted right now, {name}. Lots of people take ages.", "Can I ask what made you start thinking about it?"],
              replies: [
                { you: "There's a guy at the gym. I can't stop thinking about him.", them: ["Ohhh. Okay. The gym. Classic", "And how do you feel about Archie, if you're being really honest?"],
                  replies: [
                    { you: "Like she's my best mate.", them: ["Yeah", "That's a lot to sit with. I'm here while you sit with it"] },
                    { you: "I don't want to answer that.", them: ["That's an answer too, babe. But okay. No more questions tonight 💛"] }
                  ] },
                { you: "I don't know. It's just been building.", them: ["That makes sense. Stuff like this usually builds", "You can take as long as you need. I'm not going anywhere"] }
              ] },
            { you: "Actually, never mind. I'm just tired.",
              them: ["Okay.", "Offer stands, any time, about anything 💛", "And {name}? Whatever it is, I'm not going to think differently of you. I promise."],
              after: "You type \"I think I'm gay\" four times and delete it four times. The next week you send it at 11pm. She calls you before you can put the phone down." }
          ] },
        { you: "Yeah all good, just a long week.",
          them: ["Fair.", "Gelato soon? My shout", "Also you looked at the bartender like he owed you money. Just saying 👀"],
          replies: [
            { you: "I did not.", them: ["You did lol. It's fine. He was cute"] },
            { you: "...okay, can I talk to you about something?", them: ["Yes. Calling you now. Pick up"],
              after: "You pick up. You don't say it on the phone. But you say enough that Nicole goes quiet, then says, \"okay, babe. Okay. I'm here.\"" }
          ] }
      ],
      debrief: "Telling one safe person first is how a lot of people start. It makes the next step feel less lonely."
    },
    {
      id: "c3", title: "The honest talk", contact: "Archie", part: "Part 1: Before", irl: true,
      intro: "Archie's place in Paddington. You asked if you could come over to talk, and she's put the kettle on twice without making anything. She sits on the other end of the couch with her knees pulled up.",
      them: [
        "You said you wanted to talk.",
        "You've got me a bit worried, not going to lie. You never want to talk. You want to watch MasterChef and fall asleep at nine.",
        { note: "She laughs, but it doesn't really come out." },
        "Just say it. Whatever it is. I'd rather know."
      ],
      replies: [
        { you: "I care about you a lot, and you deserve the truth. I'm gay.",
          them: [
            { note: "She doesn't move for a long moment." },
            "Oh.",
            "...okay. I need a minute."
          ],
          replies: [
            { you: "Take all the time you need. I'm so sorry.",
              them: [
                { note: "She wipes her eyes with her sleeve. She's not sobbing. She's just leaking." },
                "I'm sad. I'm not angry. I don't think I'm angry. Ask me tomorrow.",
                "Thank you for telling me instead of letting it drag on. That's actually kind, even though it really, really hurts.",
                "Can I ask you stuff? Is that allowed?"
              ],
              replies: [
                { you: "Ask me anything.",
                  them: ["When did you know?", "Like, properly know. Was it before me?"],
                  replies: [
                    { you: "I think part of me always knew. I didn't want to.", them: ["Yeah.", "Yeah, I think part of me knew too. The lip gloss night. The way you went quiet when my sister talked about the wedding.", "I just didn't want to either."] },
                    { you: "Not before you. It got louder while we were together.", them: ["That's almost worse. Like I wasn't enough to keep it quiet.", { note: "She shakes her head before you can answer." }, "No. That's not fair. That's not how it works. I know that's not how it works."] }
                  ] },
                { you: "Maybe not tonight.", them: ["Yeah. Okay.", "Can you just stay till the kettle boils? Then you can go."] }
              ] },
            { you: "None of this is because of you.",
              them: [
                "I think I need to hear that a few more times.",
                "But I believe you. I do.",
                "I want you to be happy. Even if it's not with me. I'm going to be really annoyed about that for a while, but I do."
              ],
              replies: [
                { you: "You were the best part of the last three years.", them: [{ note: "She laughs and cries at the same time." }, "Don't. You'll make me want to keep you.", "Go home, {name}. Text me when you're there."] },
                { you: "Can we still be friends one day?", them: ["One day. Not yet.", "Ask me in a few weeks. And don't bring a boyfriend to my sister's wedding, I'm not that evolved."] }
              ] }
          ] },
        { you: "I don't think I can keep being your boyfriend. I think I'm into guys.",
          them: [
            "Wow. Okay.",
            "I kind of knew something was wrong. I thought you were going to tell me you'd met someone. Or that you were moving to Melbourne.",
            "I didn't know it was this.",
            { note: "She puts her mug down on the carpet very carefully." },
            "Can I have a few days before we talk more?"
          ],
          replies: [
            { you: "Of course. I'm here when you're ready.", them: ["Okay.", "Thank you for being honest. Even if your timing is terrible. It's a Tuesday, {name}. Who breaks up on a Tuesday."] },
            { you: "Please don't hate me.", them: ["I don't hate you.", "I'm just really, really sad. And I don't know what to do with my hands. Can you go so I can cry properly?"] }
          ] },
        { you: "I've been lying to you, and to myself. I'm gay.",
          them: [
            "Are you serious right now?",
            { note: "She stands up. The blanket falls on the floor." },
            "Three years. I wasted three years on someone who didn't even want me.",
            "Was any of it real, or was I just your cover story? Did all your mates know before me? Is that why Nicole looks at me like that?"
          ],
          replies: [
            { you: "It was real. I loved you, just not the way you deserved.",
              them: ["Don't. I can't hear that right now.", "Just go."] },
            { you: "Nobody knew. Nicole worked it out. I'm not going to argue with you.",
              them: ["Oh great, very brave of you.", "So Nicole knew. Before me. Your girlfriend.", "Get out. I mean it."] },
            { you: "You're allowed to be angry. I'm still not sorry for being gay.",
              them: ["I don't care that you're gay. I care that you lied to me.", "I need you to leave."] },
            { you: "(Start crying.)",
              them: [
                { note: "She watches you cry for a second, arms folded. Then she sits back down, further away than before." },
                "You don't get to cry first. That's not fair.",
                "...God. Okay. Fine. Here.",
                { note: "She hands you the tissue box without looking at you." },
                "I'm still angry. I'm just also not a monster."
              ] }
          ],
          after: "You walk home shaking. Then, slowly, something else arrives: you said it, out loud, to the hardest person. And you're still standing." }
      ],
      debrief: "Ending a relationship honestly is hard and kind at the same time. Her feelings are real, and so are yours. If she's angry or cruel, that's her hurt talking. It still doesn't make you wrong for telling the truth, and you can leave a conversation that's turned on you."
    },
    {
      id: "c4", title: "A few weeks later", contact: "Archie", part: "Part 1: Before",
      them: ["Hey {name}. Just wanted to say I'm doing okay.", "I kept starting this message and deleting it. Then my sister said 'just send it' and took my phone off me. So she's sending it. Hi.", "I hope you're okay too. I mean that."],
      replies: [
        { you: "Thank you. I'm doing better than I have in years.",
          them: ["I can hear it. I'm glad.", "That stings a tiny bit, ngl. But I'm glad.", "Maybe one day we can be proper friends. When it stings less."],
          replies: [
            { you: "I'd really like that.", them: ["Me too", "Also I found your lilac nail polish in my bathroom. Do you want it back or should I keep it as a trophy"],
              replies: [
                { you: "Keep it. It suits you more.", them: ["It really doesn't but thank you 😂"] },
                { you: "I want it back, please.", them: ["Ha. Of course you do", "I'll leave it with Nicole"] }
              ] },
            { you: "How are you actually doing?", them: ["Honestly? Up and down", "I went on a date last week. He talked about crypto for an hour. I missed you a bit. As a person, not a boyfriend. Is that weird", "Anyway. I'm getting there"] }
          ] },
        { you: "I'm okay. I miss you as a friend.",
          them: ["Me too, a bit.", "Give it time. I'm not going anywhere for good.", "Have you told anyone else yet? You don't have to tell me. I'm just nosy"],
          replies: [
            { you: "Just Nicole.", them: ["Thought so. She sent me a really nice message actually. Don't tell her I told you"] },
            { you: "Not yet. I'm still scared.", them: ["You told me. I was the scariest one. Everyone else is easy mode", "That's not me being nice. That's just true"] }
          ] },
        { you: "I'm sorry. Again.",
          them: ["Stop saying sorry", "You told me the truth. It hurt. I'm allowed to be sad and you're allowed to be gay. Both things", "Go live your life, {name}. Properly this time"] }
      ],
      after: "Jess has a friend she wants you to meet. 'Just a drink, no pressure.' You say yes, half to prove something to yourself. You still haven't said the word to anyone but Archie and Nicole."
    },
    {
      id: "c5", gaydar: 80, gaydarSays: "Lip tint and eyes on the bartender all night. Do the maths.", title: "Jess's friend", contact: "Hannah", part: "Part 1: Before",
      intro: "Drinks with Hannah at a wine bar in New Farm. You wore a pink knit, a berry lip tint, mascara, your rings and fresh nail polish. She clocked it the second she sat down. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket.",
      outfits: [{"label": "A plain tee and just a berry lip tint", "gaydar": -10, "intro": "Drinks with Hannah at a wine bar in New Farm. You played it safe: a navy tee, jeans, and just a berry lip tint. It's barely anything. She clocked it the second she sat down anyway. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket."}, {"label": "Pink knit, lip tint, mascara, rings, fresh nails"}, {"label": "Pink knit, lip tint, mascara, rings, pearls and little heeled boots", "gaydar": 5, "intro": "Drinks with Hannah at a wine bar in New Farm. A pink knit, a berry lip tint, mascara, your rings, fresh nail polish, a string of pearls and little heeled ankle boots that made you taller than her. She looked at the boots, then the pearls, then the lip tint, in that order. The conversation was fine. Polite. She checked her phone a lot. You spent more time than you meant to talking to the bartender about his jacket.", "them": ["also the pearls were a lot ngl"]}],
      them: ["hey", "can i ask you something"],
      replies: [
        { you: "Sure.",
          them: ["did jess actually tell you this was a date", "because i got dressed up and paid $18 for parking and you turned up in more makeup than me", "and then spent half the night talking to the bartender"],
          replies: [
            { you: "It was a date. Sorry if it was weird.",
              them: ["it was weird yeah", "you asked me literally nothing about myself", "but you knew where the bartender's jacket was from"],
              replies: [
                { you: "That's fair. I'm sorry.", them: ["ok", "i dont think its a thing. good luck"] },
                { you: "It was a really good jacket.", them: ["are you serious", "ok wow. bye"] },
                { you: "What do you do again?", them: ["physio", "i told you twice", "yeah im done"] }
              ] },
            { you: "Honestly? I don't know.", gaydar: 85,
              them: ["well i do", "im 31. i dont have time to be someone's experiment", "and jess should've known better"],
              replies: [
                { you: "I'm not experimenting on you.", them: ["felt like it", "anyway. take care"] },
                { you: "Take care.", after: "She leaves it on read." }
              ] }
          ] },
        { you: "Is this about the makeup?",
          them: ["yes obviously", "its fine if thats your thing but im not dating a guy who wears more lip than me", "sorry but im not"],
          replies: [
            { you: "Fair enough.", them: ["yeah"] },
            { you: "There's nothing wrong with it.",
              them: ["i didnt say there was", "i said im not into it", "theres a difference"],
              replies: [
                { you: "Okay.", them: ["ok"] },
                { you: "(Leave it there)",
                  after: "You leave it on read. Then you open Jess's chat, type \"your friend hates me\", delete it, and put the phone face down." }
              ] }
          ] },
        { you: "Before you ask: I wasn't sure it was a date either.",
          them: ["are you kidding me", "so i got dressed up and drove to new farm for nothing", "great. thanks jess"],
          replies: [
            { you: "Sorry. That's on me.", them: ["yeah it is"] },
            { you: "I'm still working some things out.", gaydar: 85, them: ["ok well work them out without dragging me into it", "night"] }
          ] }
      ],
      after: "You read her last message a few times. It stings, but not the way getting dumped is supposed to. Mostly because she wasn't wrong about the bartender.",
      debrief: "Getting knocked back on a date is normal. Getting knocked back because someone read you right can feel worse, because it's true. It still isn't anything to be ashamed of."
    },
    {
      id: "c6", gaydar: 85, gaydarSays: "Asked if my top was from Sportsgirl. Mid-putt.", title: "Mini golf", contact: "Mia", part: "Part 1: Before",
      intro: "Sam from work set you up with her cousin Mia. Mini golf at South Bank. You went further this time: wide-leg trousers, a cropped cardigan, gold hoops, a proper rosy lipstick. You felt good walking out the door. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes.",
      outfits: [{"label": "Jeans, a cropped cardigan, small hoops, rosy lipstick", "gaydar": -5, "intro": "Sam from work set you up with her cousin Mia. Mini golf at South Bank. Jeans and sneakers so it's \"normal\", but a cropped cardigan, small gold hoops and a proper rosy lipstick on top. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes."}, {"label": "Wide-leg trousers, cropped cardigan, gold hoops, rosy lipstick"}, {"label": "A pleated skirt, cropped cardigan, gold hoops, lipstick and a handbag", "gaydar": 5, "intro": "Sam from work set you up with her cousin Mia. Mini golf at South Bank. You went all in: a short pleated skirt, a cropped cardigan, gold hoops, a proper rosy lipstick and a little shoulder bag you kept putting down to putt. Mia said \"oh\" when she saw you, then \"hi\". She left after nine holes.", "them": ["also ive never seen a guy bring a handbag to mini golf"]}],
      them: ["hey", "sorry i left early. early start"],
      replies: [
        { you: "No worries! I had fun.",
          them: ["yeah", "ok can i be honest", "i thought the lipstick was a joke. like a dare", "and then you just kept wearing it and i didnt know where to look"],
          replies: [
            { you: "It wasn't a joke. I like wearing it.",
              them: ["ok", "i dont really get it", "sam didnt say anything about this"],
              replies: [
                { you: "Sam doesn't know.", them: ["well she's going to", "sorry but im telling her. she set this up"] },
                { you: "Does it matter?", them: ["kind of", "i thought i was going on a date with a guy"],
                  replies: [{ you: "I am a guy.", them: ["you know what i mean"] }] }
              ] },
            { you: "Sorry, I should've warned you.",
              them: ["yeah you should have", "i dont think we're a match"],
              replies: [
                { you: "Fair. Thanks for coming anyway.", them: ["ok"] },
                { you: "I'm not sorry I wore it, though.", them: ["ok then why'd you say sorry", "whatever. bye"] }
              ] }
          ] },
        { you: "Did you actually have an early start?",
          them: ["no", "sorry", "i just wasnt expecting a guy to show up like that and i didnt know what to do"],
          replies: [
            { you: "Like what?",
              them: ["you know what i mean", "lipstick. earrings. the cardigan", "i dont date guys who are more done up than me. sorry"],
              replies: [
                { you: "That's honest, at least.", them: ["yeah"] },
                { you: "You could've just said that at hole nine.", them: ["in front of everyone? no thanks"] }
              ] },
            { you: "That's okay. I get it.",
              them: ["ok", "pls dont tell sam i bailed"],
              replies: [
                { you: "I won't.", them: ["thanks"] },
                { you: "She'll hear about it anyway.", them: ["ugh. yeah"] }
              ] }
          ] }
      ],
      after: "Mia rings Sam on the drive home. \"Your work mate's gay.\" \"What? How do you know?\" \"Sam. He wore lipstick to mini golf. He asked if my top was from Sportsgirl.\" \"Maybe he just likes makeup?\" \"Then why is he going on dates with me?\" Sam doesn't have an answer for that.",
      debrief: "Some people won't get it, and some will talk about it. That's about them. You got dressed as yourself and walked out the door, and that part was yours."
    },
    {
      id: "c6b", gaydar: 90, gaydarSays: "His lashes were better than mine. At BRUNCH.", title: "Brunch", contact: "Ella", part: "Part 1: Before",
      intro: "You matched with Ella on Hinge. Brunch in Paddington. You'd bought the dress weeks ago and never worn it out of the flat: pale blue, floral, little buttons down the front. Nails done, foundation, blush, lashes, a pink lip. You nearly changed three times. You didn't. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"",
      outfits: [{"label": "The dress, white sneakers and light makeup", "gaydar": -5, "intro": "You matched with Ella on Hinge. Brunch in Paddington. The pale blue floral dress, but with white sneakers so it felt less scary, and light makeup: a bit of foundation, lashes, a pink lip. When you walked up she looked at you, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\""}, {"label": "The dress, nails, foundation, blush, lashes, a pink lip"}, {"label": "The dress, strappy heels, painted toes, full glam and a handbag", "gaydar": 5, "intro": "You matched with Ella on Hinge. Brunch in Paddington. The pale blue floral dress, strappy heeled sandals, toes painted pink, full glam (foundation, contour, blush, lashes, a pink lip) and a little white handbag. You nearly changed three times. You didn't. When you walked up she looked at your heels, then at her phone, then back at you. \"Sorry. I thought I had the wrong guy.\"", "them": ["and HEELS. you were taller than me"]}],
      them: ["hey", "ok i have to ask. why did you wear a dress"],
      replies: [
        { you: "Because I wanted to.",
          them: ["ok but you didnt say anything on here", "your pics are literally you in a polo shirt at a wedding", "i felt really blindsided tbh"],
          replies: [
            { you: "I didn't think I needed to warn you.",
              them: ["you didnt NEED to. it would've been nice", "people were staring the whole time", "the lady with the pram actually stopped walking"],
              replies: [
                { you: "I noticed. I was trying to ignore it.", them: ["well i couldnt", "it was really uncomfortable for me"] },
                { you: "Were they staring at me or at us?", them: ["at you", "and then at me like what's she doing with him"],
                  replies: [{ you: "Sorry.", them: ["its ok", "i just dont think this is for me"] }] }
              ] },
            { you: "That's fair. Sorry.",
              them: ["its fine", "i just dont think we want the same thing"],
              replies: [{ you: "As in you're not into it?", them: ["as in i want a guy who's into me", "and i dont think you are. i think you were into the waiter"] }] }
          ] },
        { you: "Did you hate it?",
          them: ["kind of yeah", "sorry", "i spent the whole time trying to work out if you were into me or the waiter", "are you gay?"],
          replies: [
            { you: "I think so, yeah.", gaydar: 100,
              them: ["ok", "then why are you on here matching with girls", "like genuinely"],
              replies: [
                { you: "I'm still working it out.", them: ["ok but dont work it out on me", "that was $40 and my whole sunday morning"] },
                { you: "I'll pay you back for the eggs.", them: ["dont bother", "just sort your profile out"] }
              ] },
            { you: "No.",
              them: ["ok", "sure"],
              replies: [{ you: "I'm not.", them: ["ok {name}"],
                after: "You look at \"No.\" on the screen for a long time. It felt heavier to say than the dress felt to wear." }] },
            { you: "Does it matter?",
              them: ["yes?? it was a date"],
              replies: [{ you: "Fair. Yeah, probably.", gaydar: 100, them: ["right", "ok well good luck"] }] }
          ] }
      ],
      after: "Ella, to her sister: \"brunch guy turned up in a dress.\" \"WHAT. like a costume?\" \"no like. a nice one. with lashes.\" \"is he gay\" \"obviously he's gay\" \"then why did he match with you\" \"THAT'S WHAT I SAID\"",
      debrief: "Wearing the thing you've been too scared to wear out is a big step, whatever the date thinks. You didn't go home and change. That's the bit to keep."
    },
    {
      id: "c6c", gaydar: 90, gaydarSays: "Did Bec's eyeliner better than Bec does.", gaydarWho: "Tayla", title: "Wrong chat", contact: "Bec's 30th 🎂", part: "Part 1: Before",
      intro: "Tayla from Sam's netball team asked you to her friend Bec's 30th in the Valley, as a sort-of date. You wore a satin top, a skirt, eyeliner and a bit of glitter. Bec added you to the group chat to sort out Ubers. The next morning:",
      outfits: [{"label": "Satin top, jeans and a flick of eyeliner", "gaydar": -5, "intro": "Tayla from Sam's netball team asked you to her friend Bec's 30th in the Valley, as a sort-of date. You wore a satin top with jeans and a little flick of eyeliner. Bec added you to the group chat to sort out Ubers. The next morning:"}, {"label": "Satin top, a skirt, eyeliner and glitter"}, {"label": "A satin slip dress, heels, eyeliner and a lot of glitter", "gaydar": 5, "intro": "Tayla from Sam's netball team asked you to her friend Bec's 30th in the Valley, as a sort-of date. You wore a satin slip dress, heels, sharp eyeliner and glitter on your cheekbones. Bec added you to the group chat to sort out Ubers. The next morning:", "them": [{"from": "Bec", "text": "also {name} you walked in heels better than me. rude"}]}],
      them: [{ from: "Bec", text: "thanks for coming everyone!! 🥳 still hungover" }, { from: "Steph", text: "ok be honest is tayla's guy gay or" }, { from: "Steph", text: "WRONG CHAT" }, { from: "Steph", text: "omg sorry {name} that was meant for bec" }, { from: "Tayla", text: "steph 😐" }],
      replies: [
        { you: "Ha. All good.",
          them: [{ from: "Steph", text: "im so sorry" }, { from: "Bec", text: "to be fair he did do my eyeliner in the bathroom" }, { from: "Tayla", text: "can everyone stop" }],
          replies: [
            { you: "Bec, your eyeliner did look great.",
              them: [{ from: "Bec", text: "it did tbh" }, { from: "Tayla", text: "oh my god" }, { from: "Tayla", text: "muting this" }] },
            { you: "(Say nothing else)" }
          ],
          after: "An hour later Tayla messages you on her own: \"honestly that was so embarrassing. everyone was asking me if you were gay all night and i didnt know what to say. i dont think this is going anywhere\"" },
        { you: "To answer your question, Steph: yeah, probably.", gaydar: 100,
          them: [{ from: "Steph", text: "oh" }, { from: "Bec", text: "😳" }, { from: "Tayla", text: "are you serious" }, { from: "Tayla", text: "you couldnt have told me that BEFORE i brought you to my friend's 30th?" }],
          replies: [
            { you: "Sorry, Tayla. I'm still working it out.", them: [{ from: "Tayla", text: "yeah well i looked like an idiot" }, { from: "Steph", text: "in my defence bec's cousin is single so" }, { from: "Tayla", text: "STEPH" }] },
            { you: "Tayla, can we talk on our own?", them: [{ from: "Tayla", text: "not really no" }, { from: "Bec", text: "ok maybe take this somewhere else guys" }],
              after: "Tayla doesn't reply to your DM. Two days later Sam mentions, carefully, that netball was \"a bit awkward\"." }
          ] },
        { you: "(Leave the group)",
          after: "You leave the group. Your phone buzzes twice more with Tayla's name and you don't open it until lunch." }
      ],
      debrief: "Finding out people are talking about you is awful, especially when it happens right in front of you. You can laugh it off, say it straight, or step out. All three are fine."
    },
    {
      id: "c6d", gaydar: 95, gaydarSays: "Looked at the waiter's arms eight times. I counted.", title: "Straight up", contact: "Georgie", part: "Part 1: Before",
      intro: "Georgie from the climbing gym. Thai in West End. You wore a lilac slip dress with a cardigan over it, your nails painted, gloss and lashes. She didn't say one word about it the whole dinner, which was somehow worse.",
      outfits: [{"label": "The slip dress with a cardigan buttoned right up", "gaydar": -5, "intro": "Georgie from the climbing gym. Thai in West End. You wore the lilac slip dress but buttoned a big cardigan right up over it, and kept your makeup to gloss. She didn't say one word about it the whole dinner, which was somehow worse."}, {"label": "Lilac slip dress, a cardigan, nails, gloss and lashes"}, {"label": "Lilac slip dress, strappy sandals, painted toes, lashes, no cardigan", "gaydar": 4, "intro": "Georgie from the climbing gym. Thai in West End. The lilac slip dress, no cardigan, strappy sandals, toes painted to match, gloss and lashes. She didn't say one word about it the whole dinner, which was somehow worse.", "them": ["the sandals too. dont think i didnt see the toes"]}],
      them: ["hey", "im just going to ask bc i hate games", "are you gay"],
      replies: [
        { you: "Yeah. I think I am.", gaydar: 100,
          them: ["ok", "would've been good to know before tonight", "kind of annoyed ngl"],
          replies: [
            { you: "Sorry. I should've said.", them: ["yeah you should have", "anyway. see you at the gym i guess"] },
            { you: "I didn't fully know until tonight.", them: ["ok", "still", "id rather not be the person you figure it out on"] }
          ] },
        { you: "Why does everyone keep asking me that?",
          them: ["um", "you wore a dress to dinner", "and you didnt look at me once. you looked at the waiter"],
          replies: [
            { you: "Fair.", them: ["yeah"] },
            { you: "I can wear a dress and be straight.", them: ["sure. are you?"],
              replies: [{ you: "...no.", gaydar: 100, them: ["right", "ok well. good luck"] }] }
          ] },
        { you: "No.",
          them: ["ok", "you looked at the waiters arms like 8 times but ok"],
          replies: [
            { you: "I didn't.", them: ["you did", "whatever. im not doing this"] },
            { you: "I'm not having this conversation.", them: ["fine", "neither am i"] }
          ] }
      ],
      after: "Georgie, to her housemate: \"he's gay.\" \"the dress guy?\" \"the dress guy.\" \"did he say\" \"eventually.\"",
      debrief: "When someone asks you straight out, you can answer straight out, or not at all. Notice which answer felt lighter to say."
    },
    {
      id: "c6e", gaydar: 90, gaydarSays: "Gayer every date. By date five he'll be borrowing my dress.", title: "Getting gayer", contact: "Lucy", part: "Part 1: Before",
      intro: "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, lashes and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her.",
      outfits: [{"label": "Cropped knit, a bit of mascara and blush", "gaydar": -5, "intro": "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, a bit of mascara and blush. Her friend Kayla happened to be at the next table. Lucy kept looking over at her."}, {"label": "Cropped knit, lashes and blush"}, {"label": "Cropped knit, lashes, blush, gloss and a mini skirt", "gaydar": 5, "intro": "You've been seeing Lucy for three weeks. Date one you wore a polo. Date two your nails were painted. Date three: little silver hoops and a bit of gloss. Today, coffee in Teneriffe, you wore a cropped knit, lashes, blush, gloss and a mini skirt. Her friend Kayla happened to be at the next table and nearly dropped her latte. Lucy kept looking over at her.", "them": ["also a SKIRT. to coffee. with me"]}],
      them: ["hey so", "dont take this the wrong way", "but you get gayer every single time i see you lol"],
      replies: [
        { you: "Is that a bad thing?",
          them: ["idk", "its just a lot of change in three weeks", "first date you were like normal guy. today you had better lashes than me"],
          replies: [
            { you: "I'm just wearing what I like now.",
              them: ["yeah i can see that", "kayla literally texted me under the table", "\"is he gay or is he just really into fashion\"", "and i didnt know what to say"],
              replies: [
                { you: "What did you say?", them: ["i said i dont know", "which is kind of embarrassing when im the one dating you", "so. are you?"],
                  replies: [
                    { you: "Yeah. I think I am.", gaydar: 100, them: ["ok", "i mean. i kind of knew by date three", "the girls are going to be insufferable about this"] },
                    { you: "I don't know yet.", them: ["ok", "well can you work it out before date five", "bc i'm not doing another coffee with kayla watching"] }
                  ] },
                { you: "Kayla could've just asked me.", them: ["oh she wants to trust me", "she asked me three times in the car park"] }
              ] },
            { you: "Normal guy?", them: ["you know what i mean", "like straight looking", "ok that came out bad. but you know"] }
          ] },
        { you: "Gayer how?",
          them: ["um", "the nails. the earrings. the lip stuff", "today you asked the barista where she got her eyeliner done", "and you were way more interested in her answer than anything i said"],
          replies: [
            { you: "That's not fair.", them: ["isnt it", "i asked about your weekend and you said 'good'", "you asked her about eyeliner for five minutes"] },
            { you: "Okay. That's fair.", them: ["yeah", "can i just ask you straight", "are you gay"],
              replies: [
                { you: "Yeah.", gaydar: 100, them: ["ok", "thank you for saying it", "kind of wish it wasnt three weeks in but ok"] },
                { you: "Why does it matter?", them: ["because were dating??", "or i thought we were"] }
              ] }
          ] },
        { you: "Your friends have been talking about me, haven't they.",
          them: ["...a bit", "ok a lot", "hang on"],
          replies: [
            { you: "Show me.",
              them: ["ok dont be mad", "[screenshot] Kayla: ok i saw him. lucy hes gay", "[screenshot] Ruby: the earrings or the lashes", "[screenshot] Kayla: BOTH. and he complimented the barista's nails", "[screenshot] Ruby: lucy babe ask him", "[screenshot] Lucy: i cant just ASK him", "so. im asking"],
              replies: [
                { you: "Tell Ruby yes.", gaydar: 100, them: ["omg", "ok", "honestly kind of relieved. i thought i was doing something wrong", "dont tell kayla i said that"] },
                { you: "I'm not answering a group chat.", them: ["fair", "im not asking for them though", "im asking for me"],
                  replies: [{ you: "Yeah. I am.", gaydar: 100, them: ["ok", "thanks"] }, { you: "Can I tell you in person?", them: ["yeah ok", "not with kayla there though"] }] }
              ] },
            { you: "I don't want to know.", them: ["ok fair", "they just keep asking me if youre gay and i dont know what to tell them"] }
          ] }
      ],
      after: "Lucy's group chat that night. Kayla: \"so??\" Lucy: \"dont\" Ruby: \"thats a yes then\" Lucy: \"im not saying anything\" Kayla: \"thats DEFINITELY a yes\" Kayla: \"ask him where he gets his lashes done\"",
      debrief: "Changing how you look bit by bit is a real way to come out. People notice, and they talk. Nobody gets to decide when you say it, even when they've already guessed."
    },
    {
      id: "c6f", gaydar: 92, gaydarSays: "Same sandals as me. Neater toes. Next.", title: "Painted toes", contact: "Jade", part: "Part 1: Before",
      intro: "Jade from Hinge. A picnic at New Farm Park on a 33-degree Saturday. You painted your toenails the night before, a glossy coral, and bought tan strappy sandals from the women's section at Myer, the ones with the little gold buckle and a bit of a heel. You checked your feet about forty times on the bus. Jade looked down at them before she looked at your face.",
      outfits: [{"label": "Plain shorts and a tee, with the strappy sandals and coral toes", "gaydar": -5, "intro": "Jade from Hinge. A picnic at New Farm Park on a 33-degree Saturday. Plain shorts and a tee, so the rest of you is normal. But you painted your toenails glossy coral the night before and wore the tan strappy sandals from the women's section at Myer, the ones with the little gold buckle and a bit of a heel. Jade looked down at them before she looked at your face."}, {"label": "Linen shorts, the strappy women's sandals and coral toes"}, {"label": "A floral sundress, the strappy sandals, coral toes and a straw bag", "gaydar": 4, "intro": "Jade from Hinge. A picnic at New Farm Park on a 33-degree Saturday. A floral sundress, a straw bag, toes painted glossy coral, and the tan strappy sandals from the women's section at Myer with the little gold buckle and a bit of a heel. You checked your feet about forty times on the bus. Jade looked at the dress, then down at your feet, before she looked at your face.", "them": ["and a sundress. to a picnic. with me"]}],
      them: ["hey thanks for today", "random q", "were those womens sandals"],
      replies: [
        { you: "Yeah. From Myer.",
          them: ["lol ok", "i have the exact same ones", "like the exact same. same colour", "it was so weird looking down and seeing my feet on you"],
          replies: [
            { you: "Great minds?",
              them: ["haha", "ok and the toes. did you do those yourself"],
              replies: [
                { you: "Yeah, last night.", them: ["they were neater than mine tbh", "ngl i spent half the picnic looking at your feet instead of at you", "i dont think im what youre looking for"] },
                { you: "A friend did them.", them: ["which friend", "actually dont answer that", "i just dont think this is a date thing for you"] }
              ] },
            { you: "Do you want me to not wear them?",
              them: ["no?? wear what you want", "just maybe not on dates with girls", "you know what i mean"],
              replies: [
                { you: "Not really.", them: ["ok well", "i do", "good luck"] },
                { you: "Yeah. I do.", them: ["yeah"] }
              ] }
          ] },
        { you: "Is that a problem?",
          them: ["not a problem", "just surprising", "mel asked me to send her a pic of you and i accidentally sent one of your feet", "she replied 'jade hes gay'"],
          replies: [
            { you: "Did you agree with her?",
              them: ["kind of", "the coral was a dead giveaway lol", "are you?"],
              replies: [
                { you: "Yeah.", gaydar: 100, them: ["ok", "fair enough", "your pedicure was better than half my friends' tbh"] },
                { you: "I don't know.", them: ["ok", "you might want to work that out before the next picnic"] }
              ] },
            { you: "You sent her a photo of my feet??",
              them: ["it was an accident!!", "i was trying to get your face and you moved", "anyway she thinks youre gay"],
              replies: [
                { you: "She's probably right.", gaydar: 100, them: ["yeah", "ok well. thanks for the picnic i guess"] },
                { you: "Tell Mel to mind her business.", them: ["lol good luck with that", "shes already told our whole group chat"] }
              ] }
          ] },
        { you: "No, they're men's.",
          them: ["they had a gold buckle", "and a heel", "come on {name}"],
          replies: [
            { you: "Okay fine. They're women's.", them: ["lol yeah", "its fine. they looked good", "just not really a first date thing for me"] },
            { you: "(Leave it on read)", after: "You leave it on read. Your feet look great in the photo you take of them that night. You don't send it to anyone." }
          ] }
      ],
      after: "Jade, to Mel: \"ok you were right.\" Mel: \"the toes told me everything\" Jade: \"they were neater than mine\" Mel: \"jade.\" Jade: \"I KNOW\"",
      debrief: "Painted toes and women's sandals are small details, but you wore them on a date in broad daylight. People notice small things, and they talk. You still got to wear them."
    },
    {
      id: "c6g", gaydar: 90, gaydarSays: "Red toes, gold sandals, eyes on the waiter. Babe.", title: "Across the table", contact: "Olivia", part: "Part 1: Before", irl: true,
      intro: "Olivia from Bumble. First date, dinner at a little Italian place on James St. You wore a black wrap top, wide-leg linen pants and flat gold sandals from the women's section, toes painted cherry red. Mascara, a bit of bronzer, gloss. She's already at the table when you walk in.",
      outfits: [{"label": "Linen shirt and chinos, gold sandals, red toes, a little makeup", "gaydar": -5, "intro": "Olivia from Bumble. First date, dinner at a little Italian place on James St. A linen shirt and chinos, so it's half normal. Then flat gold sandals from the women's section, toes painted cherry red, a little mascara and gloss. She's already at the table when you walk in."}, {"label": "Black wrap top, linen pants, gold sandals, red toes, makeup"}, {"label": "A black slip dress, gold heeled sandals, red toes, full makeup", "gaydar": 5, "intro": "Olivia from Bumble. First date, dinner at a little Italian place on James St. A black slip dress, gold heeled sandals, toes painted cherry red, mascara, bronzer, a red lip to match your toes. Two tables turn when you walk in. She's already at the table.", "them": [{"note": "Her eyes go from your heels to your dress to your red lip, and back down to your feet."}]}],
      them: [
        { note: "She stands up to hug you, then glances down. Then at your face. Then down again." },
        "Hi! Sorry. Hi. You look... wow. Okay. Sit, sit.",
        "I'm just going to say it, because otherwise I'll be thinking about it all night. Your toes are painted. Red. Like, properly done. Did you get them done at a salon?"
      ],
      replies: [
        { you: "Yeah, at the nail place on Brunswick St.",
          them: [
            "Oh my god, the one next to the dumpling place? I go there!",
            "So we've possibly sat next to each other getting pedicures and not known it. That's such a weird thought.",
            { note: "She laughs, but her eyes keep drifting under the table." },
            "Sorry, I'm being weird. It's just I've never been on a date with a guy whose feet look nicer than mine. I genuinely don't know what to do with that."
          ],
          replies: [
            { you: "Is that a problem?",
              them: [
                "No! No. I don't think so. I don't know.",
                "It's not that it's a problem. It's that my brain keeps trying to put you in a box and you won't go in it.",
                "You've got the mascara and the gloss and the sandals, and you walked in here like you were meeting the girls for a wine. And I'm sitting here in the dress I bought for tonight, thinking, is he even looking at me?"
              ],
              replies: [
                { you: "I am looking at you.",
                  them: [
                    { note: "She tilts her head and watches you for a second." },
                    "You're looking at me the way my friends look at me when I've got a new top on. Like, cute dress babe. Which is nice! It's just not a date look.",
                    "And when the waiter came over you sat up straighter. I saw it."
                  ],
                  replies: [
                    { you: "I didn't.",
                      them: [
                        "You did. It's fine, he's very good-looking. I'd sit up straighter too.",
                        "I just don't want to be the girl who pretends she didn't notice. I've been that girl. It took me two years to stop being her."
                      ] },
                    { you: "...okay. I did.", gaydar: 95,
                      them: [
                        "Ha. Thank you.",
                        "Look, I'm going to finish my pasta because it's the best carbonara in Brisbane, and then I think we call it. Not in a horrible way. You're fun. You're just not into me, and I think we both know why."
                      ] },
                    { you: "Can we just start again? Pretend I walked in normal?",
                      them: [
                        "Walked in normal? {name}, this is normal for you. You're more comfortable in those sandals than I am in mine.",
                        "I don't want to pretend. I'd rather have a nice dinner with you as whatever this is than a fake date."
                      ] }
                  ] },
                { you: "Honestly? I'm not sure if I am.",
                  them: [
                    "Okay. That's actually a really honest answer.",
                    "Can I ask you something? You don't have to answer. Have you ever been on a date with a guy?"
                  ],
                  replies: [
                    { you: "No.",
                      them: [
                        "Maybe you should. I'm serious. Not to get rid of you.",
                        "I just think you'd have a better night than this one. You'd be sitting there in your red toes and he'd think they were the best thing about you, instead of me spending the whole entree trying not to look at them."
                      ] },
                    { you: "Once. Sort of.", gaydar: 95,
                      them: [
                        "Sort of! Okay. And how did that feel, compared to this?",
                        { note: "You don't answer. You don't really need to. She nods slowly." },
                        "Yeah. That's what I thought."
                      ] }
                  ] }
              ] },
            { you: "I like having them done. It makes me feel good.",
              them: [
                "That's fair. It's the best hour of my month, honestly.",
                "I guess I just don't know any straight guys who do it. My brother wouldn't let someone touch his feet if you paid him. He wears socks to the beach.",
                "Are you straight? Sorry. That is such a rude question for a first date. Ignore me. Eat a breadstick."
              ],
              replies: [
                { you: "Yeah, I'm straight.",
                  them: [
                    { note: "She says \"okay\" in the voice people use when they don't believe you." },
                    "Okay. Then I'm sorry, that was rude of me.",
                    "But can I be honest? Even if you are, I don't think I'm the right person for you. I want someone who'd feel a bit awkward walking into a nail salon. That's just my thing. It's not a dig."
                  ],
                  replies: [
                    { you: "So that's it? Because of my toes?",
                      them: [
                        "It's not the toes. The toes are cute.",
                        "It's that you came here dressed for yourself and not for me, and you haven't asked me one question about myself yet. You asked the waiter where he got his watch.",
                        "I'm not angry. I'm just not going to sit here and pretend this is going somewhere."
                      ] },
                    { you: "Fair enough.", them: ["Yeah.", "Want to split a tiramisu anyway? It'd be a waste not to."] }
                  ] },
                { you: "No. I'm not.", gaydar: 100,
                  them: [
                    "Oh. Okay.",
                    { note: "She breathes out, and laughs a little." },
                    "Thank god. Not thank god you're gay. Thank god I'm not crazy. I've been sitting here for twenty minutes going, Olivia, you've got this wrong, stop it.",
                    "So why are you here? With me? I'm not being nasty. I actually want to know."
                  ],
                  replies: [
                    { you: "I thought I should try.",
                      them: [
                        "Try what, being straight?",
                        "Babe. You turned up in red toenails and gold sandals. I think part of you knew exactly how tonight was going to go."
                      ] },
                    { you: "I'm scared to date guys.",
                      them: [
                        "Yeah. I'd be scared too.",
                        "But you're clearly not scared of being looked at. Half this restaurant has looked at your feet tonight and you haven't flinched once. You can do a coffee with a guy.",
                        "And if you need someone to tell you what to wear to it, I'm free on weekends."
                      ] }
                  ] },
                { you: "I don't know yet.",
                  them: [
                    "Okay. That's allowed.",
                    "I just don't want to be the date you work it out on. I've done that before, I was with a guy for two years and he worked it out on me the whole time. I'm not doing it again.",
                    "So I think we just have dinner, yeah? As friends. And you text me when you know."
                  ] }
              ] }
          ] },
        { you: "Thanks. I wanted to look nice tonight.",
          them: [
            "You do look nice. That's kind of the problem.",
            "You look nicer than me. Your makeup's better than mine. Your toes are better than mine.",
            "And I keep thinking, if a girl walked in like this I'd think, love her, she's gorgeous. But you're a guy, and I'm on a date with you, and I can't work out what I'm supposed to feel."
          ],
          replies: [
            { you: "What do you want to feel?",
              them: [
                "Like you're into me. Like you made the effort for me.",
                "And I don't think you did. I think you made the effort for you. Which is great! It's just not a date with me then, is it."
              ] },
            { you: "Should I have dressed differently?",
              them: [
                "No. God, no. Please don't do that for anyone.",
                "If you'd turned up in a polo and chinos I'd have had a nice boring night and gone on three more dates with you, and then found out anyway, and been way more upset. This is better. This is quicker."
              ],
              replies: [
                { you: "Found out what?",
                  them: [
                    "Come on, {name}.",
                    { note: "She reaches across and taps the table near your hand. Gently." },
                    "That you're gay. You don't have to say it. I'm not going to make you say it."
                  ] },
                { you: "Yeah. That's probably true.",
                  them: ["I know it is. I've been out with a guy who was hiding it. I'm not doing that again, not even for someone with toes this good."] }
              ] },
            { you: "(Your eyes go hot. You look at your plate.)",
              them: [
                { note: "She goes quiet." },
                "Oh no. Hey. I'm not trying to upset you.",
                "I'm not saying you look bad. You look amazing. I'm saying this isn't a date, it's dinner with someone who looks really good, and I think that's what you'd rather it be too.",
                "Do you want to just get dessert and not talk about it?"
              ],
              replies: [
                { you: "Yeah. Dessert.", them: ["Tiramisu. My shout. Don't argue with me."] },
                { you: "Sorry. I'm fine.", them: ["You're allowed to not be fine. I'm not going to tell anyone you cried into your carbonara."] }
              ] }
          ] },
        { you: "You noticed? I was worried you'd think it was weird.",
          them: [
            "I mean... a little bit? I'm not going to lie to you.",
            "It's not weird. It's just a lot for a first date. And I can't tell if you're trying to tell me something.",
            "Are you?"
          ],
          replies: [
            { you: "Maybe I am.",
              them: ["Okay. I'm listening.", "Take your time. The pasta's not going anywhere."],
              replies: [
                { you: "I think I like guys.", gaydar: 100,
                  them: [
                    { note: "She doesn't look surprised at all." },
                    "Okay. That's a big thing to say to a girl across a table on a first date. You did good.",
                    "New plan. We eat, we split the bill, and you tell me about the guy you actually want to be sitting across from."
                  ] },
                { you: "I don't know how to say it.",
                  them: ["Then don't. I think I already know.", "It's fine, {name}. I'm not upset. I'm a bit sad about the dress, but I'll wear it again."] }
              ] },
            { you: "No. I just like it.",
              them: [
                "Okay. Then I'll be honest back. It's not for me.",
                "I want a guy who looks like he borrowed my jeans, not my sandals. That's my problem, not yours. But I don't think we should do this again."
              ] }
          ] }
      ],
      after: "Olivia, on the phone to her sister on the drive home: \"No, he was lovely. He was so lovely. He just had his toes done better than mine and spent the whole night looking at the waiter.\" \"So he's gay.\" \"So he's gay. I told him he should date guys.\" \"You did NOT.\" \"I did. He sort of smiled.\"",
      debrief: "Someone saying \"I think you'd be happier with guys\" can sting and feel like relief at the same time. Both are allowed."
    },
    {
      id: "c6h", gaydar: 97, gaydarSays: "Lilac toes and platforms to a barbecue. I rest my case.", title: "In the driveway", contact: "Zoe", part: "Part 1: Before", irl: true,
      intro: "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You wore little floral shorts, a pastel cropped tee, her white platform sandals, toes painted lilac, and a bit of gloss. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.",
      outfitPrompt: "What did you wear to Brooke's barbecue?",
      outfits: [{"label": "Board shorts and a tee, but her platforms and lilac toes", "gaydar": -3, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. Board shorts and a plain tee, like the other guys. But your toes were painted lilac and you were wearing her white platform sandals, and that's all anyone looked at. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off."}, {"label": "Floral shorts, a cropped tee, her platforms, lilac toes, gloss"}, {"label": "Her floral sundress, her platforms, lilac toes, gloss and lashes", "gaydar": 2, "intro": "You've been going out with Zoe for six weeks. Today was her friend Brooke's barbecue in Ashgrove. You borrowed her floral sundress and her white platform sandals, painted your toes lilac, and did gloss and lashes. Brooke's boyfriend asked Zoe, in front of everyone, if you were her gay best friend. She laughed. She hasn't said much since. Now she's parked in your driveway with the engine off.", "at": 3, "them": ["And you wore my sundress, {name}. To Brooke's. Everyone knows it's mine."]}],
      them: [
        { note: "She doesn't take her hands off the steering wheel." },
        "Can we talk before you go in?",
        "I've been thinking about it the whole drive home. What Jayden said. And the way everyone went quiet after, like they were all waiting to see what I'd say.",
        "I'm going to say something and I need you to just let me say it. I don't think this is working. And I think the reason it's not working is that you don't actually want to be with a girl."
      ],
      replies: [
        { you: "That's not true. I'm not gay.",
          them: [
            "Okay. Then tell me why you spent half an hour talking to Brooke about her nail colour and two minutes talking to me.",
            "Tell me why you painted your toes lilac for a barbecue. Why you wore platforms. Why every time we're at mine you'd rather go through my wardrobe than kiss me.",
            "I'm not trying to be mean. I just need you to tell me something that makes sense, because I feel like I'm going crazy."
          ],
          replies: [
            { you: "I just like clothes. Lots of straight guys do.",
              them: [
                "Name one. Name one straight guy we know who'd wear my sandals.",
                { note: "You can't." },
                "Yeah.",
                "I'm not saying you have to say it. I'm saying I can't be the girl you're dating while you work it out. It's humiliating, {name}. I'm sorry, but it is. Tash asked me in the kitchen if you'd come out yet. Like it was already a thing everyone knew except me."
              ],
              replies: [
                { you: "Please don't do this.",
                  them: [
                    "I have to.",
                    "If I don't do it now I'll do it in three months and it'll be so much worse. For both of us."
                  ] },
                { you: "Tash should mind her own business.",
                  them: ["Probably. But she wasn't wrong, was she.", { note: "You don't answer. She nods at the windscreen." }] }
              ] },
            { you: "You're overthinking it.",
              them: [
                "Am I? Everyone at that barbecue was thinking it. Jayden just said it out loud.",
                "I'm not overthinking it. I'm the last one to say it."
              ] },
            { you: "(Say nothing.)",
              them: [
                { note: "The silence goes on long enough that a car goes past and its headlights slide across the dash." },
                "Yeah. I thought so.",
                "I'm not angry. I'm just tired of pretending I can't see it."
              ] }
          ] },
        { you: "Please. Give me another chance. I'll tone it down.",
          them: [
            "Tone what down? The toes? The platforms?",
            "{name}, I don't want you to tone it down. That's the worst thing you could say to me.",
            "If you tone it down for me, you'll be miserable and I'll be going out with someone who's pretending. And then one day you'll meet some guy at a bar in the Valley and that'll be it. I'd rather it hurt now."
          ],
          replies: [
            { you: "I wouldn't do that to you.",
              them: [
                "You wouldn't mean to.",
                "I'm not saying you're a bad person. You're a really nice person. You're just not my person. And I think you know whose person you are."
              ] },
            { you: "I can change. I can be what you want.",
              them: [
                { note: "She finally looks at you. Her eyes are wet." },
                "That's what's breaking my heart. You shouldn't have to change. Not for me. Not for anyone.",
                "I want you to go out and be exactly as camp as you were today, and I want you to do it on a date with a guy who thinks it's the best thing about you."
              ],
              replies: [
                { you: "(Start crying.)",
                  them: [
                    { note: "She reaches over the gearstick and holds your hand. For a while neither of you says anything." },
                    "I know. Me too."
                  ] },
                { you: "Okay.", them: ["Okay.", "Go inside. Text Jess. Don't sit on your own all night."] }
              ] },
            { you: "Just one more date. Somewhere just us.",
              them: [
                "And what, you wear jeans and a hoodie and we both pretend?",
                "I don't want one more date where I'm watching you watch the waiter. I want to remember you how you were today: annoying, and loud, and in my sandals, and happy. You were so happy today. Just not with me."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She reaches over the gearstick and puts a hand on your arm." },
            "Oh, {name}. Don't. You'll set me off.",
            { note: "Too late. She wipes her face with the back of her hand." },
            "I really liked you. I still like you, that's the stupid part. You're funny, and you're kind, and you're the only person who's ever told me my eyeliner was uneven before I left the house.",
            "But I want someone who wants me. Not my eyeliner. Me."
          ],
          replies: [
            { you: "I'm sorry. I'm so sorry.",
              them: [
                "I know you are. I'm not angry. Well, I'm a bit angry. Mostly I'm sad.",
                "Go inside, have a shower. Take the polish off or don't. Text Jess, she'll come over."
              ] },
            { you: "I don't know what's wrong with me.",
              them: [
                "Nothing's wrong with you. Hey. Look at me.",
                "Nothing is wrong with you. You're gay, and you've been trying really hard not to be, and that's exhausting. That's what's wrong. Not you."
              ],
              replies: [
                { you: "...yeah.", gaydar: 100, them: ["Yeah.", { note: "She squeezes your arm once, then lets go." }] },
                { you: "Don't say that word.",
                  them: ["Okay. I won't.", "But I think you should say it to someone eventually. Even if it's just to yourself in the mirror."] }
              ] }
          ] },
        { you: "You're right. I think I'm gay.", gaydar: 100,
          them: [
            { note: "She lets go of the wheel and laughs, the kind of laugh that's half crying." },
            "Oh my god. Okay. Okay.",
            "I knew. I think I knew from the second date, when you asked if my top was from Glassons. But hearing you say it is different.",
            "Are you okay? Have you said that to anyone before?"
          ],
          replies: [
            { you: "No. You're the first.",
              them: [
                "Me? Your girlfriend? In my car, in your driveway?",
                "That's honestly so you.",
                "I'm glad it was me. I think. Ask me again in a month."
              ] },
            { you: "Nicole knows.",
              them: [
                "Nicole knew before me? Great. Love that for me.",
                "No, that's fine. That's good. I'm glad someone knew.",
                "I'm not your girlfriend anymore, but I'm not going to be weird about this, I promise. Just maybe skip Brooke's next barbecue for a bit."
              ] },
            { you: "Are you going to tell everyone?",
              them: [
                "No. God. It's not mine to tell.",
                "Although, {name}. You wore lilac toenails and platforms to a barbecue. I don't think anyone's waiting for an announcement."
              ] }
          ] },
        { you: "So because I painted my toes, I'm gay now?",
          them: [
            "No. Not because you painted your toes.",
            "Because of everything. The toes are just the bit everyone could see.",
            "And don't make this about me being judgy. I stood up for you all afternoon. Jayden made his comment and I laughed it off. Tash asked me in the kitchen if you'd come out yet and I said he's not gay, and she looked at me like I was an idiot. I've been defending you all day and I'm sick of it."
          ],
          replies: [
            { you: "I didn't ask you to defend me.",
              them: [
                "No. You didn't. That's kind of the problem.",
                "You didn't seem to care what anyone thought, and I cared enough for both of us. I can't do it anymore."
              ] },
            { you: "...Tash asked if I'd come out?",
              them: [
                "Yeah. That's where everyone's at.",
                "Everyone except you. Or maybe you're there too, and you just haven't said it."
              ] }
          ] },
        { you: "Is this because I looked better than you today?",
          them: [
            { note: "She snorts, despite herself." },
            "Honestly? A bit. Those platforms were a choice.",
            "But no. It's because you looked better than me and you were happier about it than you've ever been about anything we've done together. Brooke took a photo of you by the pool and you looked at it for ten minutes. You've never looked at a photo of us like that."
          ],
          replies: [
            { you: "That's not fair.", them: ["Isn't it?", "Go and look at your camera roll. Then tell me it's not fair."] },
            { you: "...yeah. That's fair.", them: ["Yeah.", "I'm going to miss you doing my eyeliner, you know."] }
          ] },
        { you: "Can we still be friends?",
          them: [
            "Not yet. I need a bit.",
            "But yeah. Probably. Eventually. You're going to need someone to tell you when your gloss is on your teeth, and it's not going to be Jayden."
          ] }
      ],
      after: "Zoe, to Brooke, at midnight: \"ok we broke up.\" Brooke: \"oh babe. because of the gay thing?\" Zoe: \"because of the gay thing.\" Brooke: \"are you ok\" Zoe: \"i told him he should be dating guys.\" Brooke: \"honestly he'll be so much happier\" Zoe: \"yeah. that's what makes it worse\"",
      debrief: "Being broken up with because you're gay is a strange kind of hurt: you lose someone, and they say the thing you couldn't. Denial, tears, begging, saying it out loud: all of those are normal reactions in that car."
    },
    {
      id: "c6i", gaydar: 98, gaydarSays: "There's literally video evidence, {name}.", title: "Saturday morning", contact: "Sophie", part: "Part 1: Before", irl: true,
      intro: "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a crop top, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.",
      outfitPrompt: "What did you wear to the Valley last night?",
      outfits: [{"label": "A black tee, a mini skirt, heeled sandals, hot pink toes", "gaydar": -2, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a black tee, a mini skirt and heeled sandals, toes painted hot pink, and you danced with a guy at the Wickham until 1am. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once."}, {"label": "A crop top, a mini skirt, heeled sandals, hot pink toes"}, {"label": "A sparkly crop top, a mini skirt, heels, pink toes, glitter and lashes", "gaydar": 1, "intro": "Sophie, three months. Last night you told her you were having a quiet one. You weren't. You went to the Valley with Dani in a sparkly crop top, a mini skirt, heeled sandals, toes painted hot pink, glitter and lashes, and you danced with a guy at the Wickham until 1am. There's still glitter on your pillow. Now it's Saturday morning, Sophie's on your doorstep with two coffees, and she hasn't smiled once.", "them": [{"note": "There's glitter on your cheek. She sees it."}]}],
      them: [
        { note: "She hands you a coffee and sits on the arm of the couch instead of next to you." },
        "So my friend Kirra was in the Valley last night.",
        "She sent me a video at about midnight. It's dark and it's shaky, but it's you, {name}. In a skirt. Dancing with a guy. With your arms around his neck.",
        { note: "She looks at your feet. Your toes are still hot pink." },
        "I'm not going to scream at you. I just want you to tell me the truth, for once."
      ],
      replies: [
        { you: "That wasn't me.",
          them: [
            { note: "She looks at your toes again, then back at you, and waits." },
            "{name}. Your toes are the exact same pink as the girl in the video. Except it isn't a girl. It's you.",
            "Please don't do this. I can handle a lot of things. I can't handle you lying to my face while you're still wearing the nail polish."
          ],
          replies: [
            { you: "...okay. It was me.",
              them: [
                "Thank you.",
                "Was it the first time? Going out like that?",
              ],
              replies: [
                { you: "No.",
                  them: [
                    { note: "She nods. She doesn't look surprised, just tired." },
                    "The 'quiet ones'. All the quiet ones.",
                    "I'm not even angry about the skirt, {name}. I'd have helped you pick it. I'm angry that you lied, and I'm angry I'm the last to know."
                  ] },
                { you: "Yeah. Last night was the first time.",
                  them: [
                    "And you went straight from my place on Thursday to a gay bar on Friday in a skirt.",
                    "I'm not having a go. I'm just trying to work out how long you've wanted to, and how long you've been pretending with me."
                  ] }
              ] },
            { you: "It's a costume. Dani dared me.",
              them: [
                "A costume. With matching toes. And a guy.",
                "Do you want to know what Kirra said? She said, 'Soph, I don't think he's straight, babe.' And I sat in bed at 12am and thought, yeah. I don't think he is either.",
                "So you can keep saying it was a dare, but I'm not going to stand here and pretend I believe you."
              ] }
          ] },
        { you: "I'm sorry. I should have told you where I was.",
          them: [
            "Yeah. You should have.",
            "But that's not the part I care about, really. I don't care that you went to the Valley. I care that you went as the person in that video, and that person is someone I've never met.",
            "Three months, {name}. I've never seen you look that happy. Not once. Not with me."
          ],
          replies: [
            { you: "That's not true. I'm happy with you.",
              them: [
                "You're comfortable with me. That's different.",
                "You were laughing in that video. Like, head back, eyes closed laughing. You don't laugh like that with me. You laugh like that with Dani, and apparently with some guy with a moustache at the Wickham."
              ] },
            { you: "I know. I'm sorry.",
              them: [
                "Don't be sorry for being happy. Be sorry for lying.",
                "I think we both know where this goes, yeah?"
              ],
              replies: [
                { you: "Are you breaking up with me?",
                  them: [
                    "Yeah. I am.",
                    "And it's not because you wore a skirt. It's because you want to be dancing with guys, and I'd rather you do that honestly than do it behind my back for another three months."
                  ] },
                { you: "(Nod.)", them: [{ note: "She nods back. Neither of you says it. You both know." }] }
              ] }
          ] },
        { you: "Did you kiss him? Is that what you want to know? I didn't.",
          them: [
            "I didn't ask if you kissed him.",
            "Did you want to?",
            { note: "You don't answer fast enough." },
            "Okay. Yeah."
          ],
          replies: [
            { you: "I don't know what I want.",
              them: [
                "I think you do. I think you've known for a while.",
                "I'm not going to stand here and be the thing standing between you and finding out properly. That's not fair on me and it's not fair on you."
              ] },
            { you: "Yes. I wanted to.", gaydar: 100,
              them: [
                { note: "She breathes out slowly." },
                "Thank you for being honest. Finally.",
                "Then I think you should. Not while you're with me. But you should."
              ] }
          ] },
        { you: "(Start crying.)",
          them: [
            { note: "She puts her coffee down on the side table, very carefully, like she's trying to do something with her hands." },
            "Please don't. I'm the one who's supposed to be upset here.",
            { note: "Her voice cracks on 'upset'. She sits down next to you after all." },
            "I'm not trying to make you feel bad. I'm trying to work out what's real. Was any of it real? Us?"
          ],
          replies: [
            { you: "Yes. I really care about you.",
              them: [
                "I believe you. I do.",
                "But caring about me isn't the same as wanting me. And I think you want something I can't be. I can't be a guy with a moustache at the Wickham, {name}. No matter how much you like me."
              ] },
            { you: "I wanted it to be.",
              them: [
                "Yeah.",
                "That's the saddest thing you could've said. And also the most honest.",
                "Come here.",
                { note: "She hugs you. It's a goodbye hug, and you both know it." }
              ] }
          ] },
        { you: "Please don't break up with me. I'll stop going out like that.",
          them: [
            "I don't want you to stop going out like that.",
            "Seriously. You looked amazing. I watched the video three times and the third time I wasn't even angry, I was just like, oh. Oh, that's him. That's who he actually is.",
            "If you stop, you'll just be sad and pretending again, and I'll be the reason. I don't want to be the reason."
          ],
          replies: [
            { you: "But I love you.",
              them: [
                { note: "She closes her eyes for a second." },
                "You've never said that before. Don't say it now just because I'm leaving.",
                "Maybe you love me like you love Dani. Like a person you feel safe with. That counts for something. It's just not enough for me."
              ] },
            { you: "Then what do I do?",
              them: [
                "Honestly? Go back to the Valley. Download one of the apps. Go on a date with a guy who'd watch that video and think 'I hope he messages me'.",
                "And when you do, tell him the truth from the start. Don't do to him what you did to me."
              ] }
          ] },
        { you: "I think I'm gay, Soph.", gaydar: 100,
          them: [
            { note: "She doesn't move for a moment. Then she lets out a breath that sounds a bit like a laugh." },
            "Yeah. I think you are too.",
            "I've thought it for a while. The way you are with my makeup. The way you went quiet when we walked past those two guys holding hands on Boundary St. I just kept telling myself I was imagining it.",
            "I'm really glad you said it. I'm also really sad. Is that okay? Can I be both?"
          ],
          replies: [
            { you: "Of course you can.",
              them: [
                "Okay. Good. Because I'm going to be both for a while.",
                "And you're going to go and be happy, and I'm going to be annoyed about how good you look in a skirt. Deal?"
              ] },
            { you: "Are you angry?",
              them: [
                "About you being gay? No. Never.",
                "About the lying? Yeah, a bit. Give me a few weeks. Then I want to hear everything about the moustache guy."
              ] },
            { you: "Can I still see you?",
              them: [
                "Not for a while. I need to stop being your girlfriend in my head first.",
                "But yeah. One day. You'll owe me a pedicure. Hot pink. Matching."
              ] }
          ] },
        { you: "You went through a video of me? That's a bit much.",
          them: [
            "I didn't go through anything. Kirra sent it to me. At midnight. While I was home on my own because my boyfriend said he was tired.",
            "Don't make this about me watching a video. You lied. You put on a skirt and heels and went out and danced with a guy and lied to me about it.",
            "And honestly, the skirt isn't even the bit that hurts."
          ],
          replies: [
            { you: "Then what is?",
              them: [
                "That you looked happier in that video than you have in three months with me.",
                "I'm not going to compete with that. I can't. I don't think anyone can, except maybe a guy."
              ] },
            { you: "Fine. Then go.",
              them: [
                { note: "She stands up and puts your coffee on the bench." },
                "Okay. I will.",
                "I hope you work it out, {name}. I really do. Just stop doing it with girls who actually like you."
              ] }
          ] }
      ],
      after: "Sophie sits in her car outside for ten minutes before she drives off. That night Kirra texts her: \"you ok?\" Sophie: \"yeah. its done. i told him to go on a date with a guy.\" Kirra: \"you're a better person than me.\" Sophie: \"i know.\" Kirra: \"the skirt was cute tho\" Sophie: \"KIRRA\"",
      debrief: "Getting caught before you're ready is one of the worst ways for it to come out. Being angry, lying, begging or saying it straight are all things people do in that moment. What matters is what you do next, and who you're honest with after."
    },
    {
      id: "c6j", gaydar: 25, gaydarSays: "He smelled like the women's counter at Myer. Not complaining. Yet.", title: "Rooftop", contact: "Bianca", part: "Part 1: Before",
      intro: "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. You wore a fitted black shirt, clear gloss, a clear coat on your nails, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere.",
      outfits: [{"label": "A black shirt, the women's perfume and a tiny bit of clear gloss", "gaydar": -5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A plain black shirt, the tiniest bit of clear gloss, and a spritz of perfume from the women's counter you'd been too scared to wear anywhere."}, {"label": "A fitted black shirt, clear gloss and nails, the women's perfume"}, {"label": "A silky shirt half undone, perfume, gloss, nails and a gold necklace", "gaydar": 5, "intro": "You met Bianca at a housewarming in Teneriffe. She laughed at all your jokes and put her number in your phone herself. First date: drinks at a rooftop bar in the CBD. A silky black shirt with three buttons undone, a delicate gold necklace, clear gloss, clear nails, and the perfume from the women's counter.", "them": ["also the necklace?? cute"]}],
      them: ["home 🥰", "that was so fun", "ok random but you smelled SO good. what is that, i need it for myself"],
      replies: [
        { you: "Ha. It's actually a women's perfume.", gaydar: 35,
          them: ["wait really", "ok honestly that's kind of hot? like confident", "most guys i date smell like lynx africa and fear"],
          replies: [
            { you: "I wore a bit of gloss too. Did you notice?", gaydar: 40,
              them: ["omg yes i did", "i wasn't going to say anything in case you were embarrassed", "it looked good though!! you should try a tinted one next time. like a pinky nude. it'd suit you"],
              replies: [
                { you: "You think?", them: ["100%", "i'll send you the one i use", "ok this is turning into a makeup chat on a date text lol. we're doing great", "second date? 😊"] },
                { you: "Maybe I'll leave the makeup to you.", gaydar: 35, them: ["haha fair", "but the offer stands", "second date? 😊"] }
              ] },
            { you: "Is that weird?", them: ["no?? smell good, who cares where it's from", "i'd literally wear your cologne if it smelled nice. same thing", "anyway. second date? i want to see you again 😊"] }
          ] },
        { you: "Just something I picked up. Glad you liked it.",
          them: ["liked it is an understatement", "i kept leaning in. i hope that wasn't obvious lol", "can i see you again?"],
          replies: [
            { you: "It was a bit obvious. I liked it.", them: ["😳", "ok good", "next weekend? you pick"] },
            { you: "Yeah. Next weekend?", them: ["yes!! 🥰", "wear the same perfume or i'm cancelling"] }
          ] },
        { you: "It's my secret.",
          them: ["ugh fine. mysterious", "i'll get it out of you on date two", "there is a date two right? 😏"],
          replies: [{ you: "There's a date two.", them: ["good 😊 night {name} x"] }] }
      ],
      after: "Bianca, to her friend Shay: \"date was SO good. he's funny. and he smelled amazing.\" Shay: \"what did he smell like\" Bianca: \"...honestly? kind of like me\""
    },
    {
      id: "c6k", gaydar: 60, gaydarSays: "Pink nails and a cropped knit. I'm not mad. I'm just… recalibrating.", title: "Gelato", contact: "Bianca", part: "Part 1: Before", irl: true,
      intro: "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink and wore a cream cropped knit with your high-waisted jeans. On the walk over you saw yourself in a shop window and liked what you saw.",
      outfits: [{"label": "Tinted gloss and pink nails, with a plain tee", "gaydar": -5, "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice: tinted gloss, a pinky nude. You also painted your nails soft pink. You kept the rest plain, a white tee and jeans, just in case."}, {"label": "Tinted gloss, pink nails, a cream cropped knit"}, {"label": "Tinted gloss, pink nails, cropped knit, hoops and mascara", "gaydar": 5, "intro": "Second date. Gelato at South Bank on a warm Saturday. You took her advice and then some: tinted gloss, soft pink nails, a cream cropped knit with high-waisted jeans, little gold hoops and mascara. On the walk over you saw yourself in a shop window and liked what you saw.", "at": 2, "them": ["Wait. Mascara too? And HOOPS?"]}],
      them: [
        { note: "She hugs you hello. It's a nice hug. It's a shorter hug than last time." },
        "Oh my god. The gloss. You actually did it!",
        { note: "She grabs your hand, but only to turn it over and look at your nails." },
        "And your NAILS. Okay, who are you? This colour is so good on you. Is that the Essie one? It is, isn't it."
      ],
      replies: [
        { you: "It is. I picked it because of you.", gaydar: 65,
          them: [
            "Stop. I'm honoured.",
            "Okay, can I be honest? You suit this way more than the black shirt. Like, the black shirt was fine. This is you. You look so much more relaxed.",
            "You know what you'd look amazing in? A little skirt. Like a pleated one. With those legs? Babe."
          ],
          replies: [
            { you: "A skirt? Really?", gaydar: 70,
              them: [
                "Yes! Don't look at me like that. Guys wear skirts. Harry Styles wears dresses on magazine covers.",
                "We should go shopping. Like next weekend. I know exactly which shop in the city.",
                { note: "She's already got her phone out, showing you skirts. She hasn't looked at your face in a minute." },
                "This one. Or this one. Ooh. Or this one in lilac."
              ],
              replies: [
                { you: "The lilac one.", gaydar: 75, them: ["I KNEW you'd say lilac", "Okay, it's a date. A shopping date. Which is still a date. Right?", { note: "She says \"right?\" like she isn't sure either." }] },
                { you: "Isn't this meant to be a date, not a shopping trip?", them: [{ note: "She laughs, then stops." }, "Oh. Yeah. Sorry. I got carried away.", "It is a date. Totally. Do you want to... walk along the river or something?", { note: "She puts her phone away. She doesn't take your hand." }] }
              ] },
            { you: "Let's not get carried away.", them: ["Okay okay. Baby steps.", "But I'm putting it on the list. The skirt list. Which I just started. In my head."] }
          ] },
        { you: "It was just a dare from Dani.", gaydar: 55,
          them: [
            "A dare. With matching gloss.",
            { note: "She raises an eyebrow and licks her gelato." },
            "Okay. Well, Dani has good taste. You should keep losing her dares.",
            "Honestly, you look really good. Like, better than me, which is rude."
          ],
          replies: [
            { you: "You look great too.", them: ["Thanks babe", { note: "She's never called you babe before. It doesn't sound like a girlfriend babe. It sounds like a friend babe." }] },
            { you: "Okay, it wasn't a dare. I just like it.", gaydar: 65, them: ["I know 😊", "Then wear more of it. Seriously. You lit up when I noticed your nails."] }
          ] },
        { you: "(Lean in to kiss her.)", gaydar: 65,
          them: [
            { note: "She turns at the last second and you get her cheek." },
            "Sorry. Sorry, I don't know why I did that.",
            "It's not you. Well. I don't know. It felt a bit like kissing one of my friends? Which sounds so bad.",
            "Can we just... have gelato and walk? I really like hanging out with you. I just don't know what this is anymore."
          ],
          replies: [
            { you: "Yeah. Gelato and a walk.", them: ["Okay. Good.", "And for the record, the gloss is perfect. I'd steal it."] },
            { you: "Was it the nails?", them: ["No! The nails are cute.", "It's... everything together, I think. You look like someone I'd go out dancing with. Not someone I'd go home with. Does that make sense?"] }
          ] }
      ],
      after: "Bianca, to Shay: \"second date was fun.\" Shay: \"just fun?\" Bianca: \"he had pink nails and tinted gloss and honestly he looked better than me.\" Shay: \"so is he gay\" Bianca: \"i don't know. i kind of want to take him shopping more than i want to kiss him. is that a sign\" Shay: \"bianca that's THE sign\""
    },
    {
      id: "c6l", gaydar: 85, gaydarSays: "I did his lashes. He did mine better. We're not dating, are we.", title: "Getting ready at hers", contact: "Bianca", part: "Part 1: Before", irl: true,
      intro: "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee and your pink nails. She opened the door and screamed.",
      outfits: [{"label": "The lilac skirt with a hoodie over it, and sneakers", "gaydar": -5, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, but with a big hoodie over the top and your sneakers, just for the walk. She opened the door and screamed anyway."}, {"label": "The lilac skirt, a white baby tee and pink nails"}, {"label": "The lilac skirt, a baby tee, pink nails and a pearl clip in your hair", "gaydar": 3, "intro": "Third date, sort of. Bianca invited you over to get ready before her friend Shay's birthday in the Valley. You came over in the lilac pleated skirt she helped you pick, a white baby tee, your pink nails, and a pearl clip in your hair. She opened the door and screamed.", "them": ["Is that a PEARL CLIP. I'm going to cry."]}],
      them: [
        "OH MY GOD. You wore it. You actually wore it.",
        { note: "She pulls you inside by both hands and spins you around like you're her doll." },
        "Okay, sit. Sit down. I'm doing your makeup. Don't argue. I've been wanting to do this since the rooftop.",
        "Lashes? I'm thinking lashes. And a bit of blush. And maybe a liner, just a tiny wing."
      ],
      replies: [
        { you: "Go for it. Full glam.", gaydar: 90,
          them: [
            "Full glam. Okay. Okay okay okay.",
            { note: "She has a ring light. She has three palettes out. She's humming." },
            "Close your eyes. Don't blink. Okay, open. Oh my god. {name}. Look.",
            { note: "She turns you to the mirror. You look like someone you've been trying to meet for years." },
            "You look incredible. Like, I'm actually a bit annoyed. Now shoes. You can't wear sneakers with that. What size are you? I've got heels."
          ],
          replies: [
            { you: "Give me the heels.", gaydar: 95,
              them: [
                "YES. Okay, these. Block heel, you'll survive.",
                { note: "She kneels down and does up the strap for you, like a friend does before a night out." },
                "Babe, I have to say something and you can't be weird about it.",
                "This doesn't feel like a date. It feels like getting ready with one of my girls. And honestly? I love it. I love this more than any date I've been on this year."
              ],
              replies: [
                { you: "I think I love this more too.", gaydar: 100, them: ["I know you do. I can see it", "So can we just... be this? Me and you, getting ready, going out?", "And then you find a guy who loses his mind when he sees you in those heels"] },
                { you: "But I thought you liked me.", them: ["I do like you. So much.", "I just stopped fancying you somewhere around the pink nails, and started wanting to be your best friend instead", "Is that horrible? It feels like a promotion to me"] }
              ] },
            { you: "Maybe not the heels. My ankles.", them: ["Fair. Flats. Gold ones. Here", "But next time, heels. I'm teaching you. Shay will help"] }
          ] },
        { you: "Just a bit. I don't want to look too much.",
          them: [
            "Too much for who?",
            "You're wearing a lilac skirt, babe. The 'too much' ship has sailed and honestly it looks so good on you.",
            { note: "She does a little mascara, a bit of blush. Then she sits back and looks at you for a long time." },
            "Can I ask you something? You can tell me to shut up."
          ],
          replies: [
            { you: "Ask.",
              them: ["Do you want to be dating me? Or do you want to be... this? With a guy?", "Because I think I've been encouraging you to be more you every time I see you, and every time you get more you, you get less into me. And I get less into you. And I don't even mind."],
              replies: [
                { you: "I don't know.", gaydar: 85, them: ["That's okay", "But I think you do. I think we both do"] },
                { you: "With a guy. I think.", gaydar: 100, them: [{ note: "She grins and hugs you so hard the mascara wand ends up in your hair." }, "I KNEW IT. I mean. Okay. Thank you for telling me.", "Right. Lashes. If you're coming out to me, you're doing it in lashes"] }
              ] },
            { you: "Shut up.", them: ["Rude. Accurate. Okay, lashes then."] }
          ] },
        { you: "I thought this was a date.",
          them: [
            { note: "She stops with the lash glue in her hand." },
            "It... is? Isn't it?",
            "Honestly? I think I stopped thinking of it like that two dates ago. Around the gelato. Around the nails. I didn't say anything because I didn't want to make it weird.",
            "Do you still fancy me? Like, actually? Be honest."
          ],
          replies: [
            { you: "Yes.", them: ["Okay.", { note: "She doesn't sound like she believes you, and she doesn't sound sad about it." }, "Then why do you look happiest when I'm talking about your outfit, and not when I'm talking about us?"] },
            { you: "...not really.", gaydar: 90, them: ["Yeah. Me neither. Not like that.", "But I REALLY like you. Just as, like, my person to get ready with. Is that okay?"] }
          ] }
      ],
      after: "At Shay's birthday, three different girls ask where you got your skirt. One of them asks Bianca if you're single. Bianca says \"he's single, but you're not his type.\" She winks at you across the bar."
    },
    {
      id: "c6m", gaydar: 95, gaydarSays: "Went from 'is he into me' to 'is he gayer than my hairdresser' in four dates. He is.", title: "Bianca's girls 💅", contact: "Bianca's girls 💅", gaydarWho: "Bianca", part: "Part 1: Before",
      intro: "The morning after Shay's birthday. Bianca has added you to her group chat with Shay and Imogen.",
      them: [{ from: "Bianca", text: "ok everyone say hi to {name} 💅" }, { from: "Shay", text: "HI the skirt king" }, { from: "Imogen", text: "the lashes were insane last night. who did them" }, { from: "Bianca", text: "me obviously. but he could do them himself next time. i watched him fix mine" }, { from: "Shay", text: "so are you two like. still dating??" }, { from: "Bianca", text: "lol" }, { from: "Bianca", text: "{name} you answer" }],
      replies: [
        { you: "I think I'm more one of the girls now.", gaydar: 100,
          them: [{ from: "Bianca", text: "THANK YOU. that's what i've been saying" }, { from: "Bianca", text: "babe i'm not even sad. i was into you on the rooftop. then you got your nails done and i was like. oh he's going to be my favourite person to go out with" }, { from: "Imogen", text: "so we're allowed to set him up now?" }, { from: "Shay", text: "my cousin's gay and he's SO nice. jake. plays rugby. would die for a man in a pleated skirt" }],
          replies: [
            { you: "...Show me a photo of Jake.", them: [{ from: "Shay", text: "OMG" }, { from: "Bianca", text: "WE ARE DOING THIS" }, { from: "Imogen", text: "wear the lilac skirt. jake needs to see the lilac skirt" }] },
            { you: "Slow down. I just got here.", them: [{ from: "Bianca", text: "fair. we'll ease you in" }, { from: "Bianca", text: "step one: next weekend, the Wickham. you, me, heels this time. i'll hold your bag" }] }
          ] },
        { you: "We're still dating. I think.",
          them: [{ from: "Shay", text: "bianca??" }, { from: "Bianca", text: "babe 😭 i love you" }, { from: "Bianca", text: "but last night you spent forty minutes in the bathroom doing imogen's contour and zero minutes trying to kiss me" }, { from: "Imogen", text: "the contour was very good though" }, { from: "Bianca", text: "i'm not breaking up with you. i'm promoting you. bestie. it's better, i swear" }],
          replies: [
            { you: "Did I just get friend-zoned in a group chat?", them: [{ from: "Bianca", text: "gay-best-friend-zoned. it's a much nicer zone" }, { from: "Shay", text: "the snacks are better here" }] },
            { you: "Okay. Fair. That's fair.", gaydar: 100, them: [{ from: "Bianca", text: "i knew you'd say that" }, { from: "Bianca", text: "now. jake." }] }
          ] },
        { you: "Are you saying I'm gay?",
          them: [{ from: "Imogen", text: "👀" }, { from: "Shay", text: "i'm not saying anything i'm just eating toast" }, { from: "Bianca", text: "i'm saying you went from gloss to a skirt and lashes in four weeks and every time i hyped you up you got happier and i got less into you" }, { from: "Bianca", text: "and i'm saying it like a friend. i'll be the first one at pride with you if you want" }],
          replies: [
            { you: "I'm not gay.", them: [{ from: "Bianca", text: "ok babe" }, { from: "Shay", text: "ok babe" }, { from: "Imogen", text: "ok babe" }, { from: "Bianca", text: "wickham next saturday. wear the heels. purely platonic straight-guy reasons" }] },
            { you: "...yeah. I think I am.", gaydar: 100, them: [{ from: "Bianca", text: "🥹🥹🥹" }, { from: "Shay", text: "WELCOME" }, { from: "Imogen", text: "i'm crying on the bus" }, { from: "Bianca", text: "i'm so proud of you. and i'm taking full credit for the skirt" }] }
          ] }
      ],
      after: "Bianca, privately, to you: \"for the record. the rooftop was real. i really liked you. i just like THIS you more, even if this you isn't for me. now go find a guy who'll do up your heel straps x\"",
      debrief: "Sometimes the people who encourage you to be more yourself are the ones who see first that you're not theirs. Losing a date and gaining a friend who hypes you up is a pretty good trade."
    },
    {
      id: "c7", title: "The group chat", contact: "Jess", part: "Part 1: Before",
      them: ["ok i need to tell you something and i don't want you to be upset", "hannah's in a group chat with my friend kate and kate screenshotted this to me", "\"update: jess set me up with a gay guy 🙃 he wore lip tint on a date and spent the whole night looking at the bartender\"", "and sam said mia rang her basically saying the same thing", "and something about a group chat with the netball girls??", "and my friend from hinge says her friend ella went on brunch with a guy in a dress and i'm like. was that you", "also someone called lucy follows me now?? and zoe's friend brooke liked my post from 2019. it's giving investigation", "i'm not saying anything. i'm just asking. are you ok?"],
      replies: [
        { you: "Great. So everyone's talking about me.",
          them: ["two people are talking about you and they're being dicks about it", "ok more than two. but the point stands", "i told kate to drop it", "but {name}. are they wrong?"],
          replies: [
            { you: "No. I'm gay.",
              them: ["ok", "ok. thank you for telling me", "i'm sorry i set you up with them lol. i'd have set you up with literally anyone else if you'd told me", "like i have a guy from work in mind RIGHT NOW"],
              replies: [
                { you: "Not yet. I need a minute.", them: ["fair. take a minute. take ten", "but he has nice arms and he can cook. just putting that out there"] },
                { you: "...what's his name?", them: ["oh we're DOING this", "his name's Tom. hes lovely. hes also slightly too into running but nobody's perfect"] },
                { you: "Are you upset I didn't tell you?", them: ["a tiny bit. like 5%", "the other 95% is just glad you're ok. and that i dont have to pretend i didnt notice the lip tint anymore"] }
              ] },
            { you: "I don't want to talk about it.", them: ["ok. i'm not going anywhere. text me whenever"],
              after: "You don't text her that night. You text her three days later: \"they weren't wrong.\" She replies in under a minute. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
            { you: "What exactly are they saying?",
              them: ["you don't want to know", "ok fine. mostly 'why is he dating girls'. some 'his makeup was better than mine'. one 'he's so obviously gay i feel stupid'", "honestly the makeup one is a compliment", "the rest is them being embarrassed and taking it out on you"],
              replies: [
                { you: "They're not wrong though.", them: ["yeah. i figured", "and that's fine. that's more than fine", "you ok?"] },
                { you: "I feel sick.", them: ["coming over", "don't argue. i'm bringing chips and the bad wine"] }
              ] }
          ] },
        { you: "They're not wrong.",
          them: ["yeah i kind of figured", "i'm sorry it came out like that. that's shit", "you ok?"],
          replies: [
            { you: "Not really. But kind of relieved?", them: ["that makes sense", "drinks friday. my shout. wear whatever you want", "and i mean WHATEVER. if you want to wear the dress ella was talking about, wear the dress"] },
            { you: "I feel like an idiot for dating all of them.", them: ["you're not an idiot", "you were trying to be what you thought you were meant to be. heaps of people do that", "although maybe stop accepting setups from me for a bit lol"] }
          ] },
        { you: "It was just makeup, Jess.",
          them: ["ok. that's fine", "but you know you can tell me stuff right", "like actual stuff. not just makeup stuff"],
          replies: [{ you: "I know.", them: ["ok good"] }, { you: "Okay. It's not just makeup.", them: ["i know babe", "i've known since you asked if my eyeliner was wing or kitten. i'm just glad you said it"] }],
          after: "It takes you another two weeks to tell her. She says \"I know, babe\" and orders you a drink. A month after that, Dani sets you up on a dating app. This time you tick 'men'." },
        { you: "Who's Lucy?? Why is she following you?",
          them: ["THAT'S your question??", "idk she found me through sam or something. she liked three of my photos and one of them was of you", "ok i'm asking again. are you ok"],
          replies: [{ you: "Yeah. And yeah, they're right. I'm gay.", them: ["ok", "ok. i love you", "and i'm blocking lucy"] }] }
      ],
      after: "A month later, Dani sets you up on a dating app. This time you tick 'men'. You've never felt this nervous about pressing 'like'.",
      debrief: "Being talked about behind your back is horrible, and it says more about them than you. You get to decide when and how you say it, even if other people got there first."
    },
    {
      id: "s1", title: "Hey there", part: "Part 2: {bf}",
      them: ["Hey! Your profile made me smile.", "Is that your dog or are you just very good at borrowing dogs?"],
      replies: [
        { you: "All mine. Her name's Biscuit.",
          them: ["Biscuit 😍 Okay I'm already invested", "What is she? She looks like a kelpie that got into a bag of flour", "I'm {bf}, by the way"],
          replies: [
            { you: "Kelpie cross something. The vet just shrugged.",
              them: ["The vet shrugged 😂 That's the best answer", "Okay I have to ask. Is this your first time on here? You've got very 'just downloaded it' energy. In a good way"],
              replies: [
                { you: "Is it that obvious?",
                  them: ["A bit. Your bio says 'new to this, be nice' which is either very honest or a trap", "I'll be nice. I promise"],
                  replies: [
                    { you: "It's not a trap. I only came out a couple of months ago.",
                      them: ["Oh, that's huge. Congrats 🏳️‍🌈", "No rush on anything. We can just talk about Biscuit's crimes for a week if you want", "Or coffee, whenever you're ready. I know a good spot in Paddington"],
                      replies: [
                        { you: "Coffee sounds good. Saturday?", them: ["Saturday 😊 I'll send you the place", "Fair warning, I'm taller than my photos suggest and I'll probably knock something over"] },
                        { you: "Can we talk a bit more first?", them: ["Of course. Tell me about Biscuit's greatest crimes", "I need the full rap sheet"] }
                      ] },
                    { you: "It's a trap. Biscuit runs the account.", them: ["Then Biscuit has excellent taste", "Tell Biscuit I'd like to take her owner for coffee"] }
                  ] },
                { you: "I've been on here a while, thanks very much.", them: ["Sure you have 😏", "Okay, seasoned pro. What's your go-to first date?"],
                  replies: [{ you: "Coffee. Easy to leave if it's bad.", them: ["Smart. Brutal. I respect it", "Coffee Saturday? I'll try not to be bad"] }] }
              ] },
            { you: "She ate a whole birthday cake once. Candles and all.",
              them: ["CANDLES?", "Okay she's a legend", "I'm going to need to meet her. And you, I suppose 😏"] }
          ] },
        { you: "Borrowed. I have a whole dog-borrowing operation.",
          them: ["Haha I knew it 😂", "Do you rent them by the hour? Asking for me", "I'm {bf}. Coffee sometime? You can bring a borrowed dog"],
          replies: [
            { you: "Only if you bring a borrowed dog too.", them: ["I'll see what I can do. My housemate has a very fat sausage dog called Kevin", "Kevin and Biscuit. It's a double date"] },
            { you: "Okay, she's mine. I panicked.", them: ["You panicked over a dog question 😂", "That's adorable. Coffee. Saturday. Bring the real dog"] }
          ] },
        { you: "Hi. Sorry, I'm really nervous. I've never messaged a guy before.",
          them: ["Hey, no need to be sorry", "Never messaged a guy, or never messaged a guy on here?"],
          replies: [
            { you: "Ever. I've only ever dated girls.",
              them: ["Okay. Well, you're doing great so far", "Can I tell you something? My first message to a guy was 'hello there'. Like Obi-Wan. He didn't reply. Rightly", "So you're already ahead"],
              replies: [
                { you: "That's genuinely terrible.", them: ["I know 😂 I think about it at 3am", "Coffee sometime? No pressure. I'll keep the Star Wars to a minimum"] },
                { you: "That actually helps. Thanks.", them: ["Anytime. Take it at your speed", "I'm {bf}, by the way. Tell me about the dog"] }
              ] },
            { you: "On here. I'm a bit new.", them: ["We've all been new. You're doing fine", "I'm {bf}. What's the dog's name?"] }
          ] }
      ]
    },
    {
      id: "s2", title: "After the first date",
      them: ["Home safe 🙂", "I had a really nice time today. You're easy to be around.", "Also I'm sorry I knocked your flat white over. I did warn you"],
      replies: [
        { you: "Me too. I was nervous but it felt easy.",
          them: ["You hid it well! I was nervous too 😅", "I changed my shirt three times. Then went back to the first one", "Can I see you again?"],
          replies: [
            { you: "Yes, definitely.", them: ["😊 Good", "I'll think of something better than coffee. Something with fewer spillable things"],
              replies: [
                { you: "Can I pick? I want to go somewhere I've never been with a guy.", them: ["Ooh. Yes. Anywhere you want", "Where are you thinking?"],
                  replies: [
                    { you: "The Valley. Somewhere gay.", them: ["Yes. Absolutely. I'll take you to my favourite bar", "Warning: they play a lot of Kylie. Like, a lot"] },
                    { you: "Honestly? Just a walk. Somewhere quiet.", them: ["I love that. New Farm Park, Sunday arvo?", "We can hold hands or not. Whatever feels right"] }
                  ] },
                { you: "Surprise me.", them: ["Oh no. Pressure", "Okay I've got an idea. Wear comfy shoes"] }
              ] },
            { you: "Can I be honest? I didn't know if I'd like it. But I did.",
              them: ["That's really nice to hear", "Can I ask what you thought you wouldn't like?"],
              replies: [
                { you: "Being out in public with a guy. Like, on a date.", them: ["Yeah. That makes total sense", "For what it's worth, nobody in that café cared. The barista only cared that I spilled your coffee", "Next time we'll go somewhere even more casual. Baby steps"] },
                { you: "I don't know. Liking a guy, I guess. It's still new.", them: ["Of course it is", "You don't have to have it all worked out. You just have to show up and spill your coffee. Well. Watch me spill it"] }
              ] }
          ] },
        { you: "I had fun. Same time next week?",
          them: ["Already in the calendar 📅", "I literally put 'coffee with the Biscuit guy' in my work calendar. My manager saw it", "So now I have to see you again. For HR reasons"],
          replies: [
            { you: "For HR reasons 😂 Fair enough.", them: ["Glad you understand", "Next Saturday. I'll bring a towel this time"] },
            { you: "Your manager knows about me already?", them: ["She knows I had a coffee with a cute guy with a dog", "She's very invested. She asked if you were 'the one' and I said it was one coffee, Linda"] }
          ] },
        { you: "Was it okay that I didn't kiss you goodbye?",
          them: ["Totally okay", "I didn't want to rush anything. You told me it was your first date with a guy. I wasn't going to make it weird", "Was it okay that I hugged you? I'm a hugger, sorry"],
          replies: [
            { you: "The hug was nice.", them: ["Good 😊 More hugs then", "Can I see you again?"] },
            { you: "Next time maybe you can kiss me.", them: ["Oh", "Okay yes. Noted. Very noted", "Next Saturday?"] }
          ] }
      ]
    },
    {
      id: "s3", title: "Good morning",
      them: ["Morning ☀️", "This is the coffee I'm having instead of being at brunch with you. It's sad.", "It's from the work machine. It tastes like a coin", "Hope work's kind to you today"],
      replies: [
        { you: "Morning! That is a tragic coffee.",
          them: ["I know. Pray for me 😔", "Dinner tonight to make up for it?"],
          replies: [
            { you: "Yes. Where?", them: ["There's a Thai place in West End that does the best pad see ew in Brisbane", "Also it has very dim lighting. Very romantic. Very good for hiding how much I eat"] },
            { you: "Can't tonight. Tomorrow?", them: ["Tomorrow works. I'll survive on coin coffee until then"] }
          ] },
        { you: "Good morning to you too 😊",
          them: ["I like getting a good morning back", "Is this a thing now? Good morning texts?", "Because I'm into it"],
          replies: [
            { you: "It's a thing now.", them: ["Great. Excellent. I'm going to be insufferable about it", "Have a great day x"] },
            { you: "I've never had someone text me good morning before.", them: ["Never?", "Well, now you do. Every day. Sorry in advance"] }
          ] },
        { you: "I told someone at work about you.",
          them: ["Wait really??", "Who? What did you say?"],
          replies: [
            { you: "Sam. I said I'm seeing a guy.", them: ["{name} that's huge", "How did she take it?"],
              replies: [
                { you: "She said 'finally' and asked to see a photo.", them: ["Finally 😂 I like Sam already", "Which photo did you show her? Please say not the one where I'm squinting"] },
                { you: "She was really nice about it.", them: ["Good. That's how it should be", "I'm proud of you. Seriously. Good morning just got a lot better"] }
              ] },
            { you: "Just that I had a good weekend. Baby steps.", them: ["Baby steps count", "One day you'll tell them about me and my coin coffee"] }
          ] }
      ]
    },
    {
      id: "s4", title: "So... are we?",
      them: ["Can I ask something that might be a bit forward?", "I deleted the app last night. I don't really want to see anyone else.", "Would you want to be my boyfriend?"],
      replies: [
        { you: "Yes. I'd really like that.",
          them: ["😊😊😊", "Okay I'm grinning at my phone like an idiot", "My housemate just asked who died. Nobody. I have a boyfriend"],
          replies: [
            { you: "I have a boyfriend. That's so weird to say.", them: ["Good weird or bad weird?"],
              replies: [
                { you: "Good weird. Really good weird.", them: ["Say it again", "Not to me. Out loud. In your kitchen"] },
                { you: "Scary weird. But I want it.", them: ["Scary is allowed. I'm here for the scary bits too"] }
              ] },
            { you: "Did you just tell your housemate?", them: ["I told my housemate, my group chat, and Kevin the sausage dog", "Kevin is thrilled. Kevin wants to meet Biscuit"] }
          ] },
        { you: "I want to, I'm just nervous about the word.",
          them: ["That's okay. It's a big word, especially if it's new.", "We can just be us for now and use the word whenever you're ready.", "I'm not going anywhere."],
          replies: [
            { you: "Thank you. Boyfriend. Okay. Yes.", them: ["Boyfriend 💙", "You did it. You said the word"] },
            { you: "Can I tell people I'm seeing someone first?", them: ["Of course", "Seeing someone. Dating. Hanging out with a tall man who spills things. Whatever you want to call it", "I know what it is"] }
          ] },
        { you: "Wait, you deleted the app before asking me?",
          them: ["...yes", "Bold strategy, I know", "If you say no I'm redownloading it and pretending this never happened"],
          replies: [
            { you: "Don't redownload it. Yes.", them: ["😭 Okay good. My heart can't take that", "Boyfriend"] },
            { you: "I deleted mine last week.", them: ["LAST WEEK??", "And you let me sweat it out like this", "Okay. Boyfriends. Both of us. Officially"] }
          ] }
      ]
    },
    {
      id: "s5", title: "Meeting your mates",
      them: ["Trivia with Jess and Priya tonight! Be honest, should I be scared?", "What do I wear? Is there a dress code for meeting the friends?"],
      replies: [
        { you: "Jess will grill you. Priya will love you.",
          them: ["Noted. I'll answer every sport question to win Jess over", "What does Jess grill people about?"],
          replies: [
            { you: "Your intentions.", them: ["My intentions are trivia and you", "In that order? No. You first. Then trivia. Then chips"] },
            { you: "Whether you're good enough for me.", them: ["Fair. I'm probably not", "But I'll bring my A game. And my B game. I know a lot about 2000s pop"] }
          ] },
        { you: "I'm a bit nervous introducing you.",
          them: ["That's fair, it's a new thing for you.", "Is it the friends knowing, or just me being there?"],
          replies: [
            { you: "The friends seeing me with a guy. For real.", them: ["Yeah. That's a big one", "If it gets too much just squeeze my hand and we'll get some air. Deal?"],
              replies: [{ you: "Deal.", them: ["See you at 7 💙"] }, { you: "Can we not hold hands in front of them yet?", them: ["Of course. No hands. Just two guys being very good at trivia"] }] },
            { you: "What if they don't like you?", them: ["Then I'll win them over with trivia", "And if they still don't like me, I'll still like you. That's what matters"] }
          ] },
        { you: "Wear something cute. They'll judge.",
          them: ["Cute like how cute", "Like nice shirt cute or like 'your outfit' cute? Because I can't do what you do. I'd look like a lampshade"],
          replies: [
            { you: "Nice shirt. I'll do enough cute for both of us.", them: ["Perfect division of labour", "What are you wearing?"],
              replies: [{ you: "The pink shirt. And gloss.", them: ["Oh I love that shirt", "Okay now I'm the nervous one. You're going to look way better than me"] }] },
            { you: "Lampshade could work.", them: ["Rude", "Accurate. But rude"] }
          ] }
      ],
      after: "Jess texts you at 10pm: \"Okay I LIKE him.\" Priya texts at 10:02: \"he knew every Spice Girls answer. marry him.\""
    },
    {
      id: "s6", title: "Holding hands",
      them: ["Can I hold your hand on the walk along South Bank tomorrow?", "Totally okay if you're not there yet.", "I just figured I'd ask instead of doing the awkward hand-brush thing"],
      replies: [
        { you: "Yes. I'd like that.",
          them: ["Then it's a date 🙂", "Can I ask something? Have you held a guy's hand in public before?"],
          replies: [
            { you: "No. Never.", them: ["Then tomorrow's a big one", "If you want to let go at any point, let go. I won't be hurt. I promise"],
              replies: [
                { you: "What if someone says something?", them: ["Then we keep walking", "And I'll probably say something back, which you'll find embarrassing, which will be funny", "But honestly, it's South Bank on a Sunday. Most people will be looking at the ibises"] },
                { you: "Okay. I'm excited.", them: ["Me too. More than a normal person should be about a walk"] }
              ] },
            { you: "Once, at Pride. But that doesn't count.", them: ["It totally counts", "But tomorrow is a normal Sunday. That's a different kind of brave"] }
          ] },
        { you: "Maybe not in public yet. Is that okay?",
          them: ["Of course it's okay. There's no rush.", "Your pace is the right pace.", "Can I hold your hand in the car, though? Nobody sees that"],
          replies: [
            { you: "Yeah. The car's fine.", them: ["Car hand-holding. Very romantic. Very private", "One day we'll do it on South Bank. No rush"] },
            { you: "Sorry. I feel like I'm letting you down.", them: ["You're not. At all", "I came out at 19 and didn't hold hands in public till I was 23. I get it more than you think"] }
          ] },
        { you: "I'll try. I might let go if I get nervous.",
          them: ["That's completely fine.", "I'll be there either way", "And if you let go I'll just walk really close to you. Like an annoying golden retriever"],
          replies: [{ you: "Deal.", them: ["Deal 💙"] }] }
      ],
      after: "Halfway along the Arbour you notice you've been holding his hand for ten minutes and haven't once checked who was looking."
    },
    {
      id: "s6b", title: "Summer feet",
      them: ["Davies Park markets tomorrow?", "It's meant to be 33. Wear something cool"],
      replies: [
        { you: "I was thinking the flip-flops. And painted toes.",
          them: ["The pink ones from the women's section? Yes please", "What colour toes?"],
          replies: [
            { you: "Pink, to match.", them: ["Obviously", "You'll look great. I'm buying you a mango smoothie as a reward"] },
            { you: "Rainbow. A different colour each toe.", them: ["Okay that's amazing", "I'm going to hold your hand and be very smug all morning"] }
          ] },
        { you: "My toes are painted but I'll wear sneakers.",
          them: ["You can, totally", "But you painted them for a reason, right?", "Nobody at the markets is looking at your feet. And if they are, they're thinking 'nice colour'"],
          replies: [
            { you: "Okay. Sandals it is.", them: ["😊 See you at 8"] },
            { you: "Sneakers this time. Sandals next time.", them: ["Deal. Next time"],
              after: "You wear the sneakers. The next Saturday you wear the sandals, and he notices before you say anything." }
          ] },
        { you: "Can I borrow your thongs? Mine are too blokey.", them: ["Mine are worse, they're from a servo", "Kmart after brekkie? We'll find you some cute ones"] }
      ],
      after: "At the markets the lady at the plant stall looks down and says \"ooh, love that colour on you, love.\" You say thanks. You barely even go red.",
      debrief: "Some of the biggest steps are small ones. Painted toes in public count."
    },
    {
      id: "s7b", title: "Lazy Sunday",
      intro: "Sunday arvo at his place in New Farm. Footy's on mute, you've got your feet up on the couch, and he's been eyeing your socks for ten minutes.",
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
      debrief: "Being silly and goofy with a guy you like is part of it too. And 'stop' always works."
    },
    {
      id: "s8", title: "A wobble",
      them: ["Hey. Can we talk about the work drinks?", "When your boss came over you introduced me as your friend.", "It stung a bit. I've been sitting with it all night and I'd rather say it than be weird about it"],
      replies: [
        { you: "I'm sorry. I panicked.",
          them: ["I get it. I really do. I've been there.", "I just want you to know I'm proud to be with you, and I hope one day you feel the same out loud."],
          replies: [
            { you: "I am proud of you. I'll get there.", them: ["I know you will. We're okay 💙"] },
            { you: "Can we work out together how I tell work?", them: ["I'd really like that. Pancakes and a plan on Saturday?", "We can write it on a napkin. Very professional"] },
            { you: "I don't know why I did it.",
              them: ["I think you do", "You're not out at work. Your boss came over. Your brain went 'danger'", "That's not a bad thing about you. It's just where you're at"],
              replies: [{ you: "Thanks for getting it.", them: ["Always. But I'm still going to bring it up again in a month 😏"] }] }
          ] },
        { you: "I'm not out at work yet. I should have told you that.",
          them: ["Ah, okay. That makes sense. Thanks for telling me.", "I'll follow your lead at work stuff. Just talk to me, yeah?", "I'd rather know where the lines are than walk into them"],
          replies: [
            { you: "Sam knows. Nobody else.", them: ["Okay. So Sam's safe", "Should I stop holding your hand under the table at work drinks then 😂"] },
            { you: "I want to be out at work. I'm just scared.", them: ["Scared is fair. People can be weird", "When you're ready, I'll be at the next work drinks being very obviously your boyfriend"] }
          ] },
        { you: "It's not a big deal. You're overreacting.",
          them: ["Okay. Maybe it's not a big deal to you", "But I spent a long time being someone's 'friend' when I wasn't. I'm not doing that again, not for anyone", "I'm not saying you have to come out at work tomorrow. I'm saying don't tell me it's nothing"],
          replies: [
            { you: "You're right. I'm sorry.", them: ["Thank you", "We're okay. I just needed to say it"] },
            { you: "I didn't know that about you.", them: ["Yeah. My first boyfriend kept me secret for a year", "So it's a bit of a sore spot. That's on me to tell you, not on you to guess"] }
          ] }
      ],
      debrief: "Couples have wobbles. Saying sorry and explaining where you're at is what makes it okay."
    },
    {
      id: "s9", title: "Three words",
      them: ["Can't sleep. Been thinking.", "About you mostly. And Biscuit a bit.", "I love you. I don't need you to say it back, I just wanted you to know."],
      replies: [
        { you: "I love you too.",
          them: ["💙💙💙", "Okay now I'm definitely not sleeping", "Have you said that to a guy before?"],
          replies: [
            { you: "No. You're the first.", them: ["Oh", "That's a lot. In a good way. I'm going to remember this text forever", "Screenshotting it. Sorry. Not sorry"] },
            { you: "Come over. I don't want to say it over text.", them: ["It's 1am", "...I'm putting my shoes on"] }
          ] },
        { you: "I'm not quite there yet, but I'm really happy with you.",
          them: ["That's a lovely thing to hear.", "No rush. I meant it either way.", "Seriously. I'm not counting"],
          replies: [
            { you: "I think I'm close.", them: ["I'll take close", "Go to sleep. Close is good"] },
            { you: "Thank you for not making it weird.", them: ["Hey, I'm the one texting I love you at 1am", "If anyone's making it weird, it's me"] }
          ] },
        { you: "Did you mean to send that?",
          them: ["Yes", "Okay I was going to say it on Saturday at dinner and I couldn't wait", "Do you want me to unsend it? I won't. But do you want me to"],
          replies: [
            { you: "Don't you dare unsend it.", them: ["Okay 😊", "I love you"] },
            { you: "Say it again on Saturday. Out loud.", them: ["Deal. Out loud. Over dumplings"] }
          ] }
      ]
    },
    {
      id: "s10", title: "Six months",
      them: ["Happy six months 🥂", "Remember when you were nervous about the word 'boyfriend'? Look at you now.", "You introduced me to your boss last week. Without me even asking"],
      replies: [
        { you: "Look at us now.",
          them: ["Here's to the next six. And Biscuit, obviously", "What was your favourite bit? Of the six months"],
          replies: [
            { you: "The first time we held hands at South Bank.", them: ["You let go after 30 seconds the first time", "Then grabbed it back. I'll never forget that"] },
            { you: "When you spilt my coffee.", them: ["Of course you'd pick that", "Mine's when you told your boss 'this is my boyfriend'. You went bright red. I nearly cried"] },
            { you: "Lazy Sundays on the couch.", them: ["Even when I steal your socks?", "Especially then. Don't answer that"] }
          ] },
        { you: "Thank you for being so patient with me.",
          them: ["You never needed patience. You just needed a bit of time.", "And you did all the hard bits. I just held your hand. Literally", "Proud of you. Love you."],
          replies: [
            { you: "I love you too.", them: ["💙", "Dinner. The Thai place. Then we go dancing in the Valley. Wear the gold sandals"] },
            { you: "Six months ago I couldn't say the word gay.", them: ["And now?"],
              replies: [{ you: "Now I'm gay and I've got a boyfriend and a very spoiled dog.", them: ["Best sentence I've ever read", "Happy six months, gorgeous"] }] }
          ] }
      ],
      debrief: "This is the end of the story for now. Replay any chapter whenever you like."
    }
  ],

  // Rehearsals. Some reactions are mixed on purpose, so you can practise those too.
  practice: [
    {
      id: "mirror",
      title: "Saying it to yourself",
      who: "Just you", tone: "gentle",
      intro: "Start here. Read the lines out loud if you can, even quietly. It's fine if your voice wobbles.",
      them: ["Look at yourself, or just picture yourself, and say: 'I'm gay.'"],
      replies: [
        { you: "I'm gay.",
          them: ["How did that feel?"],
          replies: [
            { you: "Weird, but okay.", them: ["Weird is normal. It gets less weird every time. Try once more: 'I'm gay, and that's fine.'"] },
            { you: "Scary.", them: ["That makes sense. You've held it in a long time. Nothing bad happened just now, though. You're still here."] },
            { you: "Kind of a relief.", them: ["That relief is worth noticing. Remember it on harder days."] }
          ] },
        { you: "I can't say it yet.",
          them: ["That's okay. Try a softer version: 'I like guys.' Or even just think it."],
          replies: [{ you: "I like guys.", them: ["That counts. Come back and try the other one another day."] }] }
      ],
      debrief: "Saying it to yourself is a real step. Many people repeat this daily for a while. The words lose their sting with use."
    },
    {
      id: "close-mate",
      title: "Telling a close mate",
      who: "Your best mate", tone: "supportive",
      intro: "A supportive reaction. Practise starting the conversation and staying in it.",
      them: ["You said you wanted to talk about something? All good?"],
      replies: [
        { you: "Yeah, I've been wanting to tell you something. I'm gay.",
          them: ["Oh! Thanks for telling me, mate.", "Seriously, that doesn't change anything. How long have you known?"],
          replies: [
            { you: "A while. I was nervous to say it.", them: ["Makes sense. I'm really glad you did. Anything you need from me?"] },
            { you: "Honestly, I'm still figuring it out.", them: ["That's fine. You don't need it all sorted to tell me stuff."] }
          ] },
        { you: "It's kind of hard to say... I like guys.",
          them: ["Hey, take your time. That's not a bad thing to say.", "I'm glad it's me you told. You okay?"] }
      ],
      debrief: "You don't need a speech. One plain sentence is enough, and the other person usually takes it from there."
    },
    {
      id: "work",
      title: "Mentioning a partner at work",
      who: "A coworker", tone: "casual",
      intro: "Not a big announcement, just answering a normal question honestly.",
      them: ["Good weekend?"],
      replies: [
        { you: "Yeah, my boyfriend and I went down to the Gold Coast.",
          them: ["Nice! Weather was perfect for it. Whereabouts did you stay?"] },
        { you: "Quiet one, went on a date Saturday though.",
          them: ["Ooh, how'd it go? What's his name?"],
          replies: [{ you: "Ben. It went well I think.", them: ["Good stuff. Hope there's a round two 😄"] }] }
      ],
      debrief: "At work, being out is often just using 'he' instead of dodging the question. You choose how much to share, and you can stop at any point."
    },
    {
      id: "awkward",
      title: "A clumsy reaction",
      who: "An old schoolmate", tone: "awkward",
      intro: "Not cruel, just clumsy. Practise staying calm and setting a boundary.",
      them: ["Wait, you're gay? You don't seem gay."],
      replies: [
        { you: "There isn't really one way to seem gay.",
          them: ["Ha, yeah, fair. Sorry, that came out weird."],
          replies: [{ you: "All good.", them: ["So, uh, are you seeing anyone?"] }] },
        { you: "Okay. Well, I am.", them: ["Right, right. No, that's cool. Just surprised."] },
        { you: "That's kind of a weird thing to say.", them: ["Yeah... sorry. I didn't mean anything by it."] }
      ],
      debrief: "Clumsy isn't always hostile. You can correct someone, let it slide or walk away, and all three are valid."
    },
    {
      id: "pushback",
      title: "Someone who doesn't take it well",
      who: "An acquaintance", tone: "difficult",
      intro: "A harder one. It's here so it doesn't catch you off guard. You don't owe anyone a debate.",
      them: ["Are you sure? Maybe you just haven't met the right girl."],
      replies: [
        { you: "I'm sure.", them: ["Hm. Okay."] },
        { you: "I'm not going to debate it.", them: ["I'm just saying..."],
          replies: [{ you: "I know. I'm still not debating it.", them: ["...fine."] }] },
        { you: "I'm going to head off.", them: ["Wait, I didn't mean—"] }
      ],
      debrief: "Leaving is allowed. If someone makes you feel unsafe or puts you down, that's on them. Lean on the people who are kind about it."
    }
  ]
};
