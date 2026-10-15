export type ReviewTranslation = {
  title: string
  body: string
  profile: string
}

type ReviewIndex =
  | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
  | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29
  | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39
  | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49

type ReviewLocale = Record<ReviewIndex, ReviewTranslation>

export const reviewTranslations: {
  en: ReviewLocale
  zh: ReviewLocale
} = {
  en: {
    0: {
      title: "A rice ball squishy? That's almost unfair",
      body: "I bought one for a friend's birthday, but wanted one for myself too, so I ended up buying two. The egg is smooth, while the rice ball has a grainy, rice-like texture—it really looks just like what you see. It slowly changes shape when squeezed, so I keep playing with it between classes.",
      profile: "High school student · female",
    },
    1: {
      title: "My daughters keep fighting over it",
      body: "I bought it for my second-grade daughter. The look of an egg inside a triangular rice ball was exactly her thing, and she's been squeezing it ever since she got home from school. The faint sweet scent feels just like the real thing. Her younger brother wants one too, so I plan to buy another. (Of course, it's not food.)",
      profile: "Homemaker in her 30s",
    },
    2: {
      title: "It's become my desk-break companion",
      body: "I give it a squish between tasks at work. It's soft, and the way the dents slowly spring back is quietly addictive. It felt a little small, so I'm giving it four stars. It's cute as a decoration too, so I'm happy with it overall.",
      profile: "Office worker in their 20s",
    },
    3: {
      title: "It looks much more realistic than I expected",
      body: "I borrowed the one my wife bought and got hooked as soon as I touched it. Even the individual rice grains are recreated, and the texture is better than it looks in photos. It's palm-sized, so I keep playing with it while watching TV.",
      profile: "Man in his 40s",
    },
    4: {
      title: "Cute, but smaller than I expected",
      body: "In the photos, it looked like it would sit comfortably in the palm of my hand, but the actual item is a bit smaller. I like the feel and the design, but considering the price, it seems a little expensive.",
      profile: "Woman in her 20s",
    },
    5: {
      title: "The faint scent is just right",
      body: "It has a soft, sweet scent that's not too strong, which is nice. Some squishies are very strongly scented, so this one was a hit. I carry it around in my bag.",
      profile: "Woman in her 30s",
    },
    6: {
      title: "My study buddy during exam season",
      body: "I squeeze it between study sessions. It's just the right softness for a break, and I like how slowly it returns after I press it firmly with a finger. My friends liked it too.",
      profile: "Student in their teens",
    },
    7: {
      title: "It had a dent when it arrived",
      body: "It's undeniably cute. But when I took it out of the bag, there was a pressure mark on the side. It mostly recovered after I handled it for a while, but I was a little disappointed at first. I wish the packaging were better designed.",
      profile: "Woman in her 30s",
    },
    8: {
      title: "The familiar shape is comforting",
      body: "A classic triangular rice ball with egg. Its familiar shape is soothing to look at. I gave it to my mother at my parents' home, and she was delighted. It's soft to the touch and fun to play with.",
      profile: "Woman in her 50s",
    },
    9: {
      title: "Soft and cute as a decoration",
      body: "I like that it's soft, but it's so soft that it's hard to keep its shape. It flops over with just a light press. It's cute on my desk, so I use it as a decoration.",
      profile: "Man in his 20s",
    },
    10: {
      title: "The cat-and-croissant combo is genius",
      body: "I bought it because I was drawn to the description, ‘a cat you'd find in a bakery.’ The texture even captures the flaky feel of a croissant, and I like the actual item more than the photos. It's soft when squeezed and slowly springs back. I could keep touching it forever.",
      profile: "Woman in her 20s",
    },
    11: {
      title: "For my daughter who loves bread",
      body: "I got it for my daughter, who loves croissants. The cat face really appealed to her, and she has it displayed in the living room. It's not too soft, so it's easy to handle. Oils can transfer, so it's best not to set it on paper.",
      profile: "Homemaker in her 30s",
    },
    12: {
      title: "A little break after the commute",
      body: "After a crowded train ride, I take it out of my bag and play with it for a bit. I like how leisurely it returns to shape when I let go after squeezing it. The scent is a little strong, though, so I probably wouldn't take it out at work. I keep it at home.",
      profile: "Office worker in their 20s",
    },
    13: {
      title: "It made a lovely gift",
      body: "I gave it to a friend who loves bread. The moment she opened it, she said, ‘What is this? It's so cute!’ The actual item is sturdier than I imagined, with careful attention to detail. I bought one for myself too.",
      profile: "Woman in her 40s",
    },
    14: {
      title: "The color was darker than in the photos",
      body: "It's not bad, but the actual item looked a little darker than the photos. It feels nice and is soft. I gave it three stars because the color wasn't what I expected.",
      profile: "Woman in her 20s",
    },
    15: {
      title: "Everyone at school noticed it",
      body: "I attached it to my pencil case, and my friends kept asking, ‘What's that?’ They thought it was funny how it slowly changes shape when squeezed, and everyone wanted to touch it. I like its faintly sweet scent too.",
      profile: "High school student",
    },
    16: {
      title: "I'm concerned about dust sticking to it",
      body: "It's soft and cute, but dust and hair stick to it quickly when it's left out. Even a sticky lint roller doesn't get everything off, so I ended up storing it in a case. It's a shame I can't just leave it out.",
      profile: "Woman in her 30s",
    },
    17: {
      title: "Surprisingly addictive",
      body: "I tried my wife's and bought one for myself. It's neither too firm nor too soft—just right for a quick break at work. The cat's face really gives it character.",
      profile: "Man in his 30s",
    },
    18: {
      title: "Just looking at it is soothing",
      body: "It has the look of something you'd find on a bakery shelf, and it's fun just to display. When I pick it up, it's moist and soft, and I keep reaching for it. I'm impressed by how carefully it's made.",
      profile: "Woman in her 50s",
    },
    19: {
      title: "Size and scent come down to preference",
      body: "It was described as palm-sized, but the actual item feels a bit smaller. It's definitely cute. The scent is also a little sweet, so it may not be to everyone's taste.",
      profile: "Man in his 20s",
    },
    20: {
      title: "Softer and moister than I imagined",
      body: "The surface feels moist, and it gives way with a soft squish when I squeeze it firmly. It's softer than a typical squishy, and it's fun to see the impressions my fingers leave. I'm curious about all the different shapes, from toast and croissants to cheesecake.",
      profile: "Woman in her 20s",
    },
    21: {
      title: "So realistic it made me laugh",
      body: "The toast shape is oddly realistic, and it looks like real bread when left out. My child is delighted, saying, ‘It's bread!’ and touching it. The moist feel is nice, and it's fun how it recreates the texture of bread.",
      profile: "Homemaker in her 30s",
    },
    22: {
      title: "It made my desk instantly cuter",
      body: "I have the toast and cheesecake lined up. I give them a squish between tasks. Just note that the moist texture attracts dust easily. I'm happy with them as long as I watch out for that.",
      profile: "Office worker in their 20s",
    },
    23: {
      title: "It's fun to compare the different shapes",
      body: "I didn't expect the different shapes to make them this much fun. I feel like each one springs back a little differently, which is interesting too. They're fun to look at lined up or to touch, so I'd like to buy more.",
      profile: "Woman in her 30s",
    },
    24: {
      title: "A little sticky to the touch",
      body: "I like the moist feel, but my hands seem to feel a little sticky after touching it. I give it a quick wipe with a tissue before using it. It's perfectly cute, so I'm giving it three stars.",
      profile: "Woman in her 20s",
    },
    25: {
      title: "My friend and I got matching ones",
      body: "There are several shapes, so my friend and I chose different ones and swapped. We all like their moist, fluffy feel. They're much cuter than they look in the photos.",
      profile: "High school student",
    },
    26: {
      title: "I'm concerned about how easily it collects dust",
      body: "Maybe because of the moist texture, dust and lint stick to it right away. Before I knew it, the whole thing looked whitish, and it's a shame it can't be washed. It's so cute, which makes that especially disappointing.",
      profile: "Woman in her 30s",
    },
    27: {
      title: "The cheesecake shape is especially nice",
      body: "I bought the cheesecake shape. I like how it squishes in and slowly springs back. I'm also interested in the toast, so I plan to buy that too.",
      profile: "Man in his 40s",
    },
    28: {
      title: "The scent makes me feel like I'm in a bakery",
      body: "It has a faint sweet scent that makes me feel like I'm in a bakery. It's not too strong, so I can keep touching it. I like the moist feel too.",
      profile: "Woman in her 20s",
    },
    29: {
      title: "The texture may not be for everyone",
      body: "I think it's a good fit for people who like a moist feel, but I prefer something a little drier. The cute appearance is beyond reproach.",
      profile: "Woman in her 20s",
    },
    30: {
      title: "It looked too cute on my bag",
      body: "The combination of a cat's face on top of salmon sushi is the best. I like its chewy feel and the way it springs back with a little bounce. I attach it to my bag and play with it while waiting.",
      profile: "Woman in her 20s",
    },
    31: {
      title: "I showed it off to my friends",
      body: "I have it on my school bag. The salmon-and-cat combination is quirky and cute. It has a chewy spring when squeezed, and I keep touching it. All my friends said they wanted one.",
      profile: "High school student",
    },
    32: {
      title: "The material information is clearly explained",
      body: "It feels chewy and is just right for a break between tasks at work. I also got a good impression from how clearly the material is described.",
      profile: "Office worker in their 30s",
    },
    33: {
      title: "A must-have for cat lovers",
      body: "I was looking for a squishy with a cat's face. The salmon sushi combination is just right, so I decided as soon as I saw the photo. I like its chewy springiness too. I hope they release other colors.",
      profile: "Woman in her 20s",
    },
    34: {
      title: "I'd be happy if it were a little bigger",
      body: "From the photos, I expected it to sit comfortably in the palm of my hand, but the actual item is on the small side. I had an idea from the listed weight, but I'd be happy if it were a bit bigger. It feels very nice, though.",
      profile: "Woman in her 20s",
    },
    35: {
      title: "For a friend who loves sushi",
      body: "I gave it to a friend who loves sushi for her birthday. She laughed as soon as she opened it. She says it's so squishy and chewy that she can keep touching it. I bought one for myself too.",
      profile: "Woman in her 30s",
    },
    36: {
      title: "The chain feels a little flimsy",
      body: "The main piece is cute, but the ball chain feels a little unreliable. It seems like it might come off if pulled hard, which could be a concern in a home with small children. I'm careful when attaching it to my bag.",
      profile: "Woman in her 30s",
    },
    37: {
      title: "The squishy feel is satisfying",
      body: "I like its chewy springiness, so I keep pressing it. The color of the sushi topping is vivid, and it looks more realistic than I expected. It's small, but I'm very satisfied with it.",
      profile: "Man in his 20s",
    },
    38: {
      title: "The subtle scent makes it easy to enjoy",
      body: "It has a faint sweet scent, but it's not too strong and doesn't bother me. I like the chewy feel and the slow, bouncy return. It's become a little treat in my bag.",
      profile: "Woman in her 40s",
    },
    39: {
      title: "The color might change a little with use",
      body: "It's cute, and after touching it every day, I feel like the color has gradually changed a little. Maybe it's the oils from my hands? This type can't be washed with water, so I wipe it clean before using it. I really love the design.",
      profile: "Woman in her 20s",
    },
    40: {
      title: "A star in a nightcap—too cute to resist",
      body: "I bought it at first sight. It slowly changes shape, and the sleepy way it springs back is irresistible. I keep it on my desk, and it makes me feel calm whenever I see it.",
      profile: "Woman in her 20s",
    },
    41: {
      title: "My child loves it",
      body: "I got it for my first-grade child. They seem to love the star shape and blue nightcap, and are always touching it. We enjoy it as a cute decoration. It slowly springs back when squeezed.",
      profile: "Homemaker in her 30s",
    },
    42: {
      title: "Just right for a change of pace",
      body: "I give it a squish in my hand between tasks at work. It's soft, and the way the dents slowly spring back is addictive. It's a little small, so I'm giving it four stars. The design gets full marks.",
      profile: "Office worker in their 20s",
    },
    43: {
      title: "Matching with a friend",
      body: "My friend and I bought two of the same one, and I gave one to them. I like its soft feel and am always touching it.",
      profile: "High school student",
    },
    44: {
      title: "Firmer than I expected",
      body: "From the photos, I imagined it would be a little softer, but the actual item is somewhat firm and has a solid feel. I like how slowly it springs back. I think it comes down to personal preference.",
      profile: "Woman in her 30s",
    },
    45: {
      title: "Fun to display and to touch",
      body: "I bought it to keep on my desk. The star shape stands on its own without rolling, so it's easy to display. It's soft to the touch, and I can have fun changing its shape a little. It's nice to enjoy both on display and in my hands.",
      profile: "Woman in her 20s",
    },
    46: {
      title: "The color was brighter than in the photos",
      body: "In the photos, the yellow looked a little more muted, but the actual item is bright yellow. The nightcap's color matches the photos and is cute, but I was disappointed that the main item's color wasn't what I expected.",
      profile: "Woman in her 20s",
    },
    47: {
      title: "It was a well-received gift",
      body: "I gave it to a coworker. They liked how cute the star looked wearing a nightcap. They say it feels soft and they keep it on their desk to touch.",
      profile: "Man in his 30s",
    },
    48: {
      title: "I'm glad I chose it for its appearance",
      body: "I bought one for my grandchild, then wanted one myself and bought another. I didn't realize a star with a nightcap could be so cute. It slowly springs back when touched, so I keep touching it again and again.",
      profile: "Woman in her 50s",
    },
    49: {
      title: "It takes too long to spring back",
      body: "It's undeniably cute, but it takes longer than I expected to return to shape, so I have to wait a bit before shaping it again. I get a little impatient. I really do love how it looks.",
      profile: "Woman in her 20s",
    },
  },
  zh: {
    0: {
      title: "饭团居然是捏捏乐，也太犯规了吧",
      body: "本来是买来送朋友生日的，结果自己也想要，最后买了两个。蛋黄部分摸起来滑滑的，饭团部分则有米粒般的颗粒感，和外观看起来一模一样，真厉害。捏下去后会慢慢变形，所以我课间一直在玩它。",
      profile: "高中生·女性",
    },
    1: {
      title: "我家女儿们总抢着玩",
      body: "买给上小学二年级的女儿。三角饭团里包着鸡蛋的造型正中她的喜好，她放学回家后就一直捏着玩。淡淡的甜香也很像真的。弟弟也想要，所以打算再买一个。（当然，它不是食物。）",
      profile: "30多岁·家庭主妇",
    },
    2: {
      title: "成了我工作间隙的桌面搭档",
      body: "工作间隙会捏一捏。手感柔软，捏出的凹痕慢慢恢复这一点让人不知不觉上瘾。感觉有点小，所以给四颗星。摆着当装饰也很可爱，总体来说很满意。",
      profile: "20多岁·公司职员",
    },
    3: {
      title: "比想象中逼真得多",
      body: "借来摸了摸妻子买的那一个，结果一下子就喜欢上了。连米粒的颗粒感都还原出来了，质感比照片看起来还好。大小正好可以放在手掌里，我看电视时一直拿着玩。",
      profile: "40多岁·男性",
    },
    4: {
      title: "很可爱，但比想象中小",
      body: "照片里看起来像是能稳稳放在手掌上的大小，实物却还要小一圈。手感不错，设计我也喜欢，但考虑到价格，感觉有点贵。",
      profile: "20多岁·女性",
    },
    5: {
      title: "淡淡的香味刚刚好",
      body: "只有一阵淡淡的甜香，不会太浓，这点很好。有些捏捏乐香味很重，这款算是买对了。我会放在包里随身带着。",
      profile: "30多岁·女性",
    },
    6: {
      title: "考试期间的陪伴",
      body: "学习间隙会捏一捏。休息时软硬度正好，用手指用力按过之后慢慢回弹的感觉我也很喜欢。朋友们也觉得不错。",
      profile: "十几岁·学生",
    },
    7: {
      title: "收到时就有压痕",
      body: "可爱这点无可挑剔。不过从袋子里拿出来时，侧面有一道像是被压过的痕迹。拿在手里玩了一会儿后恢复了不少，但刚开始还是有点失望。希望包装能再改进一下。",
      profile: "30多岁·女性",
    },
    8: {
      title: "熟悉的造型让人感到温馨",
      body: "传统三角饭团配上鸡蛋，是熟悉的造型，看着就让人心情放松。我送给老家的妈妈，她很开心。手感柔软，玩起来也很有趣。",
      profile: "50多岁·女性",
    },
    9: {
      title: "软软的，摆着当装饰不错",
      body: "柔软是优点，但也软得有点难以保持形状。稍微按一下就会软塌下来。摆在桌上很可爱，所以我把它当装饰品用。",
      profile: "20多岁·男性",
    },
    10: {
      title: "猫咪×羊角面包的组合太有创意了",
      body: "被“像是会出现在面包店里的猫”这句介绍吸引而买下。连羊角面包酥脆的感觉都通过质感表现出来了，实物比照片更讨我喜欢。捏起来很软，回弹也很慢。可以一直摸个不停。",
      profile: "20多岁·女性",
    },
    11: {
      title: "送给喜欢面包的女儿",
      body: "买给喜欢羊角面包的女儿。猫咪脸的造型正合她的心意，现在摆在客厅里。不会太软，所以很好拿捏。会沾上油分，最好不要放在纸上。",
      profile: "30多岁·家庭主妇",
    },
    12: {
      title: "通勤后的片刻休息",
      body: "挤完满员电车后，我会从包里拿出来玩一会儿。捏过放开后慢悠悠恢复原状的样子我很喜欢。不过香味有点浓，在公司可能不太方便拿出来，所以我只在家里玩。",
      profile: "20多岁·公司职员",
    },
    13: {
      title: "作为礼物很受欢迎",
      body: "送给了喜欢面包的朋友。她一打开就说：“这是什么呀，好可爱！”实物比我想象中做工扎实，细节也很用心。我也给自己买了一个。",
      profile: "40多岁·女性",
    },
    14: {
      title: "颜色比照片看起来深一些",
      body: "倒也不差，不过实物看起来比照片颜色稍深。手感不错，也很柔软。因为颜色和预想不太一样，所以给三颗星。",
      profile: "20多岁·女性",
    },
    15: {
      title: "在学校成了热门话题",
      body: "挂在笔袋上后，朋友们不停问我：“那是什么？”大家觉得捏下去会慢慢变形很有意思，都想摸一摸。我也喜欢它淡淡的甜香。",
      profile: "高中生",
    },
    16: {
      title: "有点在意容易沾灰",
      body: "摸起来柔软又可爱，但放在外面很快就会沾上灰尘和头发。用粘毛滚筒也清不干净，最后只好放进盒子里保存。没法随手摆着有点遗憾。",
      profile: "30多岁·女性",
    },
    17: {
      title: "意外地让人上瘾",
      body: "摸过妻子的之后，我也给自己买了一个。不硬也不太软，工作间隙玩一会儿正合适。猫咪的脸很有味道。",
      profile: "30多岁·男性",
    },
    18: {
      title: "光是摆着就让人心情放松",
      body: "看起来像是会出现在面包店货架上的样子，光是摆着也很有意思。拿在手上时湿润又柔软，让人忍不住反复摸。做工很用心，令人佩服。",
      profile: "50多岁·女性",
    },
    19: {
      title: "大小和香味是否合意因人而异",
      body: "虽然标注是手掌大小，但实物感觉还小一圈。可爱是肯定的。另外香味稍微偏甜，可能有人喜欢、有人不喜欢。",
      profile: "20多岁·男性",
    },
    20: {
      title: "湿润感比想象中更明显",
      body: "表面摸起来湿润，用力一捏就会软软地凹下去。比一般的捏捏乐更柔软，能留下手指印这一点很有趣。吐司、羊角面包、芝士蛋糕等各种造型都让我很感兴趣。",
      profile: "20多岁·女性",
    },
    21: {
      title: "逼真得让人忍不住笑",
      body: "吐司的造型逼真得有些出乎意料，摆在那里就像真的一样。孩子高兴地喊着“是面包！”，还一直摸它。湿润的触感也很不错，用这种手感表现面包质地很有意思。",
      profile: "30多岁·家庭主妇",
    },
    22: {
      title: "桌面一下子变可爱了",
      body: "我把吐司和芝士蛋糕摆在一起，工作间隙会捏一捏。不过要注意，湿润的质感比较容易沾灰。只要留意这一点，我就很满意。",
      profile: "20多岁·公司职员",
    },
    23: {
      title: "不同造型各有乐趣",
      body: "没想到只是造型不同，就能这么有意思。我觉得每个造型恢复原状的感觉似乎也略有不同，这点也很有趣。摆在一起看或拿来捏都很好玩，还想再买。",
      profile: "30多岁·女性",
    },
    24: {
      title: "有一点黏手",
      body: "湿润的手感不错，不过摸过之后手上好像会留下一点黏腻感。我会先用纸巾轻轻擦一下再玩。可爱程度满分，所以给三颗星。",
      profile: "20多岁·女性",
    },
    25: {
      title: "和朋友买了不同款来交换",
      body: "有好几种造型，所以我和朋友选了不同的款式来交换。大家都喜欢它湿润又蓬松的手感。实物比照片可爱得多。",
      profile: "高中生",
    },
    26: {
      title: "有点在意容易沾灰",
      body: "可能是因为质感湿润，灰尘和线头很容易粘上去。回过神来时，整个都变得有点发白，而且不能清洗，真可惜。明明这么可爱，有点遗憾。",
      profile: "30多岁·女性",
    },
    27: {
      title: "芝士蛋糕造型尤其不错",
      body: "我买的是芝士蛋糕造型。喜欢它被捏下去后慢慢恢复的感觉。我也对吐司款感兴趣，打算再买一个。",
      profile: "40多岁·男性",
    },
    28: {
      title: "香味让人仿佛置身面包店",
      body: "有淡淡的甜香，让人感觉像是在面包店里。香味不会太浓，所以可以一直摸。我也喜欢它湿润的手感。",
      profile: "20多岁·女性",
    },
    29: {
      title: "这种质感可能因人而异",
      body: "喜欢湿润手感的人应该会觉得合适，不过我更喜欢干爽一些的触感。外观可爱这点无可挑剔。",
      profile: "20多岁·女性",
    },
    30: {
      title: "挂在包上可爱得不得了",
      body: "鲑鱼寿司上顶着一张猫咪脸，这种组合简直太棒了。软糯的手感和轻轻弹回来的感觉都很讨我喜欢。我把它挂在包上，等人的时候就拿出来摸一摸。",
      profile: "20多岁·女性",
    },
    31: {
      title: "向朋友们炫耀了一下",
      body: "我把它挂在上学用的包上。鲑鱼和猫咪的组合有点无厘头，又很可爱。捏起来软糯有弹性，让人忍不住反复摸。朋友们都说“好想要”。",
      profile: "高中生",
    },
    32: {
      title: "材质说明写得很清楚",
      body: "手感软糯，工作间隙拿来休息一下正合适。关于材质的说明也写得很清楚，给我留下了不错的印象。",
      profile: "30多岁·公司职员",
    },
    33: {
      title: "猫咪爱好者一定会喜欢",
      body: "我一直在找带猫咪脸的捏捏乐。鲑鱼寿司的组合恰到好处，看了照片就立刻决定买。软糯的弹性我也很喜欢。希望能推出其他颜色。",
      profile: "20多岁·女性",
    },
    34: {
      title: "要是再大一点就更好了",
      body: "看照片时以为能稳稳地放在手掌里，实物却比较小巧。虽然看重量标注时就有些预料到了，但要是能再大一圈就好了。手感非常不错。",
      profile: "20多岁·女性",
    },
    35: {
      title: "送给喜欢寿司的朋友",
      body: "我买来作为寿司爱好者朋友的生日礼物。她一打开就笑了。她说捏起来软糯弹弹的，可以一直摸。我也给自己买了一个。",
      profile: "30多岁·女性",
    },
    36: {
      title: "挂链让人觉得有点不牢靠",
      body: "本体很可爱，不过球链感觉有点不太结实。用力一拉好像就会脱落，家里有小孩子的话可能会有些担心。挂在包上时我会多加注意。",
      profile: "30多岁·女性",
    },
    37: {
      title: "软弹的触感很舒服",
      body: "我喜欢它软糯有弹性的手感，总忍不住按它。寿司鱼料部分的颜色也很鲜艳，比想象中更逼真。虽然小巧，但整体很满意。",
      profile: "20多岁·男性",
    },
    38: {
      title: "香味淡淡的，玩起来很舒服",
      body: "有一股淡淡的甜香，但不浓，不会让人在意。我喜欢软糯的手感和慢慢弹回来的感觉。它成了包里一个小小的乐趣。",
      profile: "40多岁·女性",
    },
    39: {
      title: "用久了颜色可能会有些变化",
      body: "因为很可爱，每天都拿来摸，感觉颜色渐渐有些变化。可能是手上的油分吧？这种类型不能用水洗，所以我会擦一擦再玩。真的很喜欢这个设计。",
      profile: "20多岁·女性",
    },
    40: {
      title: "星星戴上睡帽，也太犯规了",
      body: "一见钟情就买了。它会慢慢变形，慢悠悠恢复原状时那副困困的样子让人受不了。我把它摆在桌上，每次看到都会觉得心情放松。",
      profile: "20多岁·女性",
    },
    41: {
      title: "孩子很喜欢",
      body: "买给上小学一年级的孩子。孩子似乎很喜欢星星造型和蓝色睡帽，总是拿着摸。我们把它当可爱的摆件欣赏。捏过之后会慢慢恢复原状。",
      profile: "30多岁·家庭主妇",
    },
    42: {
      title: "用来转换心情正合适",
      body: "工作间隙会放在手里捏一捏。手感柔软，捏出的凹痕慢慢恢复这点让人上瘾。尺寸稍微小了些，所以给四颗星。设计我给满分。",
      profile: "20多岁·公司职员",
    },
    43: {
      title: "和朋友买了同款",
      body: "我和朋友买了两个一样的，其中一个送给了朋友。我喜欢它柔软的手感，总是拿来摸。",
      profile: "高中生",
    },
    44: {
      title: "比想象中硬一些",
      body: "看照片时以为会更柔软一些，实物却稍微偏硬，质感也比较扎实。它慢慢恢复的感觉我很喜欢。我想这还是要看个人喜好。",
      profile: "30多岁·女性",
    },
    45: {
      title: "摆着看、拿来捏都很有趣",
      body: "买来放在桌上。星星造型不会滚动，能自己立住，所以很好摆放。摸起来很柔软，也可以稍微改变形状来玩。摆着看或拿来捏都很有意思。",
      profile: "20多岁·女性",
    },
    46: {
      title: "颜色比照片上更亮",
      body: "照片里看起来是比较沉稳的黄色，实物却是明亮的黄色。睡帽的颜色和照片一样，很可爱；只是本体的颜色和预想不同，让我有些失望。",
      profile: "20多岁·女性",
    },
    47: {
      title: "作为礼物对方很喜欢",
      body: "买来送给同事。对方很喜欢星星戴着睡帽的可爱造型。据说手感柔软，会摆在桌上拿来摸。",
      profile: "30多岁·男性",
    },
    48: {
      title: "果然还是被外观吸引，买对了",
      body: "买给孙辈后，自己也想要，于是又追加买了一个。没想到星星戴上睡帽能这么可爱。摸过后会慢慢恢复原状，所以忍不住一摸再摸。",
      profile: "50多岁·女性",
    },
    49: {
      title: "恢复得太慢了",
      body: "可爱这点无可挑剔，不过它比我想象中恢复得慢，要等一会儿才能再捏成下一个形状。性子急的我会觉得有点着急。外观我是真的很喜欢。",
      profile: "20多岁·女性",
    },
  },
}
