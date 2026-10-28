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
      id: "mum-sunday",
      contact: "Mum", role: "family", avatar: "M",
      them: ["Hi love. Doing a roast on Sunday.", "You're welcome to bring someone if you're seeing anyone. No fuss, just want to meet him one day x"],
      replies: [
        { you: "Thanks Mum, just me this time.",
          them: ["That's fine sweetheart, more potatoes for you x"] },
        { you: "There is someone, but it's early days.",
          them: ["Oh lovely! Take your time. Whenever you're both ready x"] },
        { you: "Thanks for saying that, it means a lot.",
          them: ["Of course, {name}. I just want you happy, whoever he is x"] }
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
      id: "nan-call",
      contact: "Nan", role: "family", avatar: "N",
      them: ["Hello {name} darling, it's Nan. Your cousin showed me how to text!", "Your mother says you're courting a young man. I hope he's got good manners."],
      replies: [
        { you: "Haha hi Nan! He does, I promise.", them: ["Good. Bring him for scones. I'll be the judge of that x"] },
        { you: "Not courting yet Nan, but I'll let you know.", them: ["Well don't leave it too long, I'm 84 😂 x"] },
        { you: "Thanks for being so lovely about it Nan.", them: ["I've been around long enough to know love is love, darling x"] }
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
      id: "rachel-ex",
      contact: "Rachel", role: "ex", avatar: "R",
      // Korean, English is her second language: keep it natural and warm, never a caricature.
      them: ["Hi {name}! Long time no see 😊", "I hear your news from Jess. I want to say I am really happy for you. Really really."],
      replies: [
        { you: "Thanks Rach, that means a lot coming from you.",
          them: ["Of course! You always so kind to me. You deserve happy too 💛"] },
        { you: "I'm sorry if things were confusing back then.",
          them: ["Aigoo, don't say sorry. We were young, and you never was unkind to me.", "I am just glad now you can be yourself."],
          replies: [
            { you: "Thank you. Seriously.", them: ["Anytime! Next time you come northside we get coffee ok?"] },
            { you: "Did you ever guess?", them: ["Maybe little bit 😅 But it is your story to tell, not mine to guess."] }
          ] },
        { you: "Haha yeah, surprise 😅",
          them: ["Honestly? Not so big surprise 😂", "대박, I'm so proud of you. Go be happy!"] }
      ]
    },
    {
      id: "archie-ex",
      contact: "Archie", role: "ex", avatar: "A",
      them: ["Hey {name}. Can I ask you something kind of personal?", "Did you know you were gay when we were together?"],
      replies: [
        { you: "Honestly, I was still working it out.",
          them: ["Okay. I think I needed to hear that.", "So it wasn't about me."],
          replies: [
            { you: "It was never about you. I really cared about you.", them: ["Yeah. I know you did. Thank you for saying it.", "I'm glad you're happy now."] },
            { you: "No. You didn't do anything wrong.", them: ["Okay. That actually helps a lot."] }
          ] },
        { you: "Part of me did. I'm sorry I couldn't say it then.",
          them: ["I'm not angry. A bit sad maybe, but I get why you couldn't.", "It's not an easy thing to say. I'm glad you can now."] },
        { you: "I'd rather not get into that, if that's okay.",
          them: ["That's fair. I'm not trying to make it about me.", "I just want you to know I'm cool with it. Really."] }
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
      them: ["Okay, confession time since we're all being honest now", "I had the BIGGEST crush on you in first year 🙈"],
      replies: [
        { you: "Wait WHAT 😂",
          them: ["Yep. Sat next to you in stats for a whole semester on purpose. I hate stats.", "Honestly though? Bullet dodged, for both of us 😂 You'd have been a terrible boyfriend to me and you're an ELITE gay best friend 💅"],
          replies: [
            { you: "Elite is correct.", them: ["See, this confidence? Never would've happened if you were with me. Much better this way 💗"] },
            { you: "Sorry about the stats, Jem.", them: ["Worth it. I got you out of it. Just not the way I planned 😂"] }
          ] },
        { you: "Aw, Jem 🥹",
          them: ["Don't aw me 😂", "It's so much better this way, {name}. I get you AND I get to hear about all your boys"] }
      ]
    },
    {
      id: "nicole-crush", tier: 1,
      contact: "Nicole", role: "uni friend", avatar: "N",
      them: ["Can I tell you something funny?", "Year 12 formal. I was SO hoping you'd ask me 😩"],
      replies: [
        { you: "Nic I'm so sorry 😂",
          them: ["Don't be!! Imagine if you had. One very awkward slow dance and I'd never have got my gay bestie", "I definitely won this one."] },
        { you: "Was I that oblivious?",
          them: ["Babe, you were oblivious to ALL the girls 😂", "Makes total sense now. Dodged that bullet and gained a shopping buddy. Upgrade."] }
      ]
    },
    {
      id: "priya-crush", tier: 1,
      contact: "Priya", role: "mate", avatar: "P",
      them: ["Jess just told me you KNEW I liked you at uni??", "MORTIFIED. Anyway. Bullet dodged, thank god. You'd have stolen all my clothes 😂"],
      replies: [
        { you: "Your clothes ARE cute though.",
          them: ["See?? This is exactly why it's better. Now I have a shopping buddy instead of a broken heart 💕"] },
        { you: "I'm flattered, honestly.",
          them: ["You should be, I have excellent taste.", "Just... in men who are also into men, apparently 😂 Love you {name}"] }
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
          them: ["Hahaha yes!! Old {name} so quiet. New {name} I like much more", "Honestly I'm glad we not end up married. You would steal my makeup 😂"] },
        { you: "Thank you Rach 🥹",
          them: ["You look so happy now. That is the best part 💛"] }
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
            { from: "Ailisha", text: "To think we all had crushes on this man. Look at him now. Thriving." }
          ] },
        { you: "I've got a spare rainbow flag for each of you, hunties 💅",
          them: [
            { from: "Ailisha", text: "Hunties 😂😂 I've never felt so included 🥹" },
            { from: "Nicole", text: "He's gone full gay and I've never been prouder" }
          ] }
      ]
    },
    {
      id: "mum-pride", tier: 3,
      contact: "Mum", role: "family", avatar: "M",
      them: ["Is it alright if I come to the Pride march with you? I bought a t-shirt x", "It says PROUD MUM. Too much?"],
      replies: [
        { you: "MUM. Yes. Wear it with pride (literally) 🏳️‍🌈",
          them: ["I'm told that's the point, love x"] },
        { you: "Never too much. I'll do your glitter 💅",
          them: ["Oh go on then. Your Nan wants some too x"] }
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
      id: "c1", title: "Date night", contact: "Archie", part: "Part 1: Before",
      them: ["{name}, dinner at that Italian place Friday? I booked us a table 🍝", "My sister keeps asking when we're getting engaged 😂"],
      replies: [
        { you: "Sounds good! Haha tell her to relax.", them: ["Already did. She never listens 🙄 Love you x"] },
        { you: "Ha. Yeah. Friday's good.", them: ["You okay? You've seemed a bit far away lately.", "I'm here if something's up x"],
          replies: [{ you: "Just tired. Work stuff.", them: ["Okay. Get some sleep xx"] }] }
      ],
      after: "You put the phone down and feel like you're playing a part. You've felt that for a while."
    },
    {
      id: "c2", title: "Saying it to someone", contact: "Nicole", part: "Part 1: Before",
      them: ["Hey {name}, you were quiet at drinks. Everything okay with you?", "No pressure. Just checking."],
      replies: [
        { you: "Can I tell you something and you won't tell anyone?",
          them: ["Of course. Always."],
          replies: [
            { you: "I think I'm gay.",
              them: ["Oh, {name}. Thank you for trusting me with that.", "That doesn't change a single thing about how I see you. How long have you been carrying it?"],
              replies: [
                { you: "Years, kind of. But it's been getting louder.", them: ["That sounds exhausting. You don't have to work it all out tonight.", "I'm here. And I won't say a word to anyone."] },
                { you: "I don't know what to do about Archie.", them: ["That's a hard one. You care about her, that's obvious.", "Whatever you decide, you don't have to do it alone."] }
              ] },
            { you: "Actually, never mind. I'm just tired.", them: ["Okay. Offer stands, any time, about anything 💛"] }
          ] },
        { you: "Yeah all good, just a long week.", them: ["Fair. Gelato soon? My shout"] }
      ],
      debrief: "Telling one safe person first is how a lot of people start. It makes the next step feel less lonely."
    },
    {
      id: "c3", title: "The honest talk", contact: "Archie", part: "Part 1: Before",
      them: ["{name}, you said you wanted to talk tonight?", "You've got me a bit worried, not going to lie."],
      replies: [
        { you: "I care about you a lot, and you deserve the truth. I'm gay.",
          them: ["Oh.", "...okay. I need a minute."],
          replies: [
            { you: "Take all the time you need. I'm so sorry.",
              them: ["I'm sad. I'm not angry.", "Thank you for telling me instead of letting it drag on. That's actually kind, even though it hurts."] },
            { you: "None of this is because of you.",
              them: ["I think I need to hear that a few more times. But I believe you.", "I want you to be happy. Even if it's not with me."] }
          ] },
        { you: "I don't think I can keep being your boyfriend. I think I'm into guys.",
          them: ["Wow. Okay.", "I kind of knew something was wrong. I didn't know it was this.", "Can I have a few days before we talk more?"],
          replies: [{ you: "Of course. I'm here when you're ready.", them: ["Okay. Thank you for being honest."] }] },
        { you: "I've been lying to you, and to myself. I'm gay.",
          them: ["Are you serious right now?", "Three years. I wasted three years on someone who didn't even want me.", "Was any of it real, or was I just your cover story? Did all your mates know before me?"],
          replies: [
            { you: "It was real. I loved you, just not the way you deserved.",
              them: ["Don't. I can't hear that right now.", "Just go."] },
            { you: "Nobody knew. I'm not going to argue with you.",
              them: ["Oh great, very brave of you.", "Get out. I mean it."] },
            { you: "You're allowed to be angry. I'm still not sorry for being gay.",
              them: ["I don't care that you're gay. I care that you lied to me.", "I need you to leave."] }
          ],
          after: "You walk home shaking. Then, slowly, something else arrives: you said it, out loud, to the hardest person. And you're still standing." }
      ],
      debrief: "Ending a relationship honestly is hard and kind at the same time. Her feelings are real, and so are yours. If she's angry or cruel, that's her hurt talking. It still doesn't make you wrong for telling the truth, and you can leave a conversation that's turned on you."
    },
    {
      id: "c4", title: "A few weeks later", contact: "Archie", part: "Part 1: Before",
      them: ["Hey {name}. Just wanted to say I'm doing okay.", "I hope you are too. I mean that."],
      replies: [
        { you: "Thank you. I'm doing better than I have in years.", them: ["I can hear it. I'm glad.", "Maybe one day we can be proper friends. When it stings less."] },
        { you: "I'm okay. I miss you as a friend.", them: ["Me too, a bit. Give it time. I'm not going anywhere for good."] }
      ],
      after: "A month later, Dani sets you up on a dating app. You've never felt this nervous about pressing 'like'."
    },
    {
      id: "s1", title: "Hey there", part: "Part 2: {bf}",
      them: ["Hey! Your profile made me smile. Is that your dog or are you just very good at borrowing dogs?"],
      replies: [
        { you: "All mine. Her name's Biscuit.", them: ["Biscuit 😍 Okay I'm already invested", "I'm {bf}, by the way. Coffee sometime?"],
          replies: [{ you: "I'd like that.", them: ["Great. Saturday morning? I know a good spot in Paddington"] }, { you: "Maybe chat a bit more first?", them: ["Of course! No rush. Tell me about Biscuit's greatest crimes"] }] },
        { you: "Borrowed. I have a whole dog-borrowing operation.", them: ["Haha I knew it 😂 I'm {bf}. Coffee sometime? You can bring a borrowed dog"] }
      ]
    },
    {
      id: "s2", title: "After the first date",
      them: ["Home safe 🙂", "I had a really nice time today. You're easy to be around."],
      replies: [
        { you: "Me too. I was nervous but it felt easy.", them: ["You hid it well! I was nervous too 😅", "Can I see you again?"],
          replies: [{ you: "Yes, definitely.", them: ["😊 Good. I'll think of something better than coffee"] }] },
        { you: "I had fun. Same time next week?", them: ["Already in the calendar 📅"] }
      ]
    },
    {
      id: "s3", title: "Good morning",
      them: ["Morning ☀️", "This is the coffee I'm having instead of being at brunch with you. It's sad.", "Hope work's kind to you today"],
      replies: [
        { you: "Morning! That is a tragic coffee.", them: ["I know. Pray for me 😔", "Dinner tonight to make up for it?"] },
        { you: "Good morning to you too 😊", them: ["I like getting a good morning back. Have a great day"] }
      ]
    },
    {
      id: "s4", title: "So... are we?",
      them: ["Can I ask something that might be a bit forward?", "I don't really want to see anyone else. Would you want to be my boyfriend?"],
      replies: [
        { you: "Yes. I'd really like that.", them: ["😊😊😊", "Okay I'm grinning at my phone like an idiot"] },
        { you: "I want to, I'm just nervous about the word.",
          them: ["That's okay. It's a big word, especially if it's new.", "We can just be us for now and use the word whenever you're ready. I'm not going anywhere."],
          replies: [{ you: "Thank you. Boyfriend. Okay. Yes.", them: ["Boyfriend 💙"] }] }
      ]
    },
    {
      id: "s5", title: "Meeting your mates",
      them: ["Trivia with Jess and Priya tonight! Be honest, should I be scared?"],
      replies: [
        { you: "Jess will grill you. Priya will love you.", them: ["Noted. I'll answer every sport question to win Jess over"] },
        { you: "I'm a bit nervous introducing you.",
          them: ["That's fair, it's a new thing for you.", "If it gets too much just squeeze my hand and we'll get some air. Deal?"],
          replies: [{ you: "Deal.", them: ["See you at 7 💙"] }] }
      ],
      after: "Jess texts you at 10pm: 'Okay I LIKE him.'"
    },
    {
      id: "s6", title: "Holding hands",
      them: ["Can I hold your hand on the walk along South Bank tomorrow?", "Totally okay if you're not there yet."],
      replies: [
        { you: "Yes. I'd like that.", them: ["Then it's a date 🙂"] },
        { you: "Maybe not in public yet. Is that okay?",
          them: ["Of course it's okay. There's no rush.", "Your pace is the right pace."] },
        { you: "I'll try. I might let go if I get nervous.", them: ["That's completely fine. I'll be there either way"] }
      ]
    },
    {
      id: "s7", title: "Sunday roast",
      them: ["What should I bring for your mum? Flowers? Wine? A full apology for being late last time I met a parent?", "I really want her to like me"],
      replies: [
        { you: "Flowers. She loves tulips.", them: ["Tulips it is 🌷"] },
        { you: "She's already excited. Just be you.", them: ["That's lovely to hear. Okay. Being me. With tulips just in case"] }
      ],
      after: "That night Mum texts: 'He's lovely, darling. Bring him back soon x'"
    },
    {
      id: "s8", title: "A wobble",
      them: ["Hey. Can we talk about the work drinks?", "When your boss came over you introduced me as your friend. It stung a bit."],
      replies: [
        { you: "I'm sorry. I panicked.",
          them: ["I get it. I really do. I've been there.", "I just want you to know I'm proud to be with you, and I hope one day you feel the same out loud."],
          replies: [
            { you: "I am proud of you. I'll get there.", them: ["I know you will. We're okay 💙"] },
            { you: "Can we work out together how I tell work?", them: ["I'd really like that. Pancakes and a plan on Saturday?"] }
          ] },
        { you: "I'm not out at work yet. I should have told you that.",
          them: ["Ah, okay. That makes sense. Thanks for telling me.", "I'll follow your lead at work stuff. Just talk to me, yeah?"] }
      ],
      debrief: "Couples have wobbles. Saying sorry and explaining where you're at is what makes it okay."
    },
    {
      id: "s9", title: "Three words",
      them: ["Can't sleep. Been thinking.", "I love you. I don't need you to say it back, I just wanted you to know."],
      replies: [
        { you: "I love you too.", them: ["💙💙💙", "Okay now I'm definitely not sleeping"] },
        { you: "I'm not quite there yet, but I'm really happy with you.",
          them: ["That's a lovely thing to hear. Honestly.", "No rush. I meant it either way."] }
      ]
    },
    {
      id: "s10", title: "Six months",
      them: ["Happy six months 🥂", "Remember when you were nervous about the word 'boyfriend'? Look at you now."],
      replies: [
        { you: "Look at us now.", them: ["Here's to the next six. And Biscuit, obviously"] },
        { you: "Thank you for being so patient with me.",
          them: ["You never needed patience. You just needed a bit of time.", "Proud of you. Love you."] }
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
      id: "parent",
      title: "Telling a parent",
      who: "Mum or Dad", tone: "mixed",
      intro: "A loving but surprised reaction. Parents often need a minute, and that's different from rejection.",
      them: ["What's on your mind, love? You've been quiet."],
      replies: [
        { you: "I need to tell you something. I'm gay.",
          them: ["Oh.", "...I didn't expect that. Give me a second."],
          replies: [
            { you: "Take your time. I'm still me.",
              them: ["I know you are. I love you. I just need to get my head around it.", "Can we talk more about it later?"],
              replies: [{ you: "Yeah, of course.", them: ["Thank you for telling me. Really."] }] },
            { you: "Are you upset?", them: ["Not upset with you. I'm surprised, and I'm worried about the world being hard on you. That's all."] }
          ] },
        { you: "I've been seeing someone. His name's Josh.",
          them: ["His name...?", "Oh. Oh, okay. Is he nice to you?"],
          replies: [{ you: "He really is.", them: ["Then that's what matters. I might need some time with the rest, but that's what matters."] }] }
      ],
      debrief: "A first reaction often isn't the last one. Many parents who start out shocked end up very supportive. You can give them time without taking back what you said."
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
