import type { Locale } from "./locale"

export const featureCopy: Record<Locale, {
  eyebrow: string
  heading: string
  tagline: string
  videoCaption: string
  sections: { title: string; image: string; imageAlt: string; paragraphs: string[] }[]
}> = {
  en: {
    eyebrow: "Brand story",
    heading: "A little squeeze, a little pause.",
    tagline: "A soft, tactile pause in the palm of your hand.",
    videoCaption: "See how each squeeze feels and slowly returns to shape.",
    sections: [
      { title: "9:40 p.m. in Tokyo.", image: "/products/croissant-cat.png", imageAlt: "Croissant Cat squeeze", paragraphs: ["You step off the Yamanote Line before the last train, holding a convenience-store bag and typing a message you still haven't replied to. You get home, set your bag down, and haven't even taken off your coat.", "Then you notice something small and round on the desk. It looks soft, like freshly baked bread. You pick it up without thinking and give it one squeeze.", "Squeeze. It slowly returns to its original shape. You give it another." ] },
      { title: "What we believe", image: "/products/egg-rice-ball.png", imageAlt: "Tamago Onigiri squeeze", paragraphs: ["Relaxation doesn't need a plan. There is no set routine, and nothing to explain to anyone. It can be as simple as reaching out and finding something there.", "That's why Tabajoy gives a small, tactile pause a form you can hold. 'Small' isn't about size; it's about making that moment easy to reach." ] },
      { title: "Where the name comes from", image: "/products/salmon-sushi-cat.png", imageAlt: "Salmon Sushi Cat squeeze", paragraphs: ["Tabajoy = taba (a small handful or bundle) + joy. A handful of joy.", "That little bit of weight resting in your palm is a pause for us. It doesn't have to be a big thing; we value a feeling you can truly hold." ] },
      { title: "What we bring to you", image: "/products/sleepy-star.png", imageAlt: "Sleepy Star squeeze", paragraphs: ["Our designs are inspired by food and animals. Their charm is an invitation to reach out.", "Soft, squishy, and satisfying to squeeze. Texture is the first thing each design says. Collections and series are supporting characters; the star is the small pause you can hold when you need one." ] },
    ],
  },
  zh: {
    eyebrow: "品牌故事",
    heading: "轻轻捏一捏，给自己片刻休息。",
    tagline: "在掌心感受柔软触感与片刻休息。",
    videoCaption: "看看捏压时的触感，以及松手后慢慢恢复的过程。",
    sections: [
      { title: "东京，夜晚 9 点 40 分。", image: "/products/croissant-cat.png", imageAlt: "牛角包猫咪软捏玩具", paragraphs: ["在末班车前从山手线下车，手里提着便利店袋子，还在打那条没来得及回复的消息。到家后把包放在地上，外套都还没脱。", "忽然，看到桌角有个小小的圆圆物件。它看起来软软的，像刚出炉的面包。顺手拿起来，轻轻捏了一下。", "轻轻一捏，它又慢慢恢复原状。于是，再捏一下。"] },
      { title: "我们相信的事", image: "/products/egg-rice-ball.png", imageAlt: "鸡蛋饭团软捏玩具", paragraphs: ["休息不需要计划，不必遵循固定步骤，也不需要向谁解释。伸手就能拿到，这样简单就好。", "所以 Tabajoy 把触手可及的小小休息，做成可以拿在手里的形状。“小小”不是尺寸，而是触及那一刻的门槛很低。"] },
      { title: "名字的由来", image: "/products/salmon-sushi-cat.png", imageAlt: "三文鱼寿司猫软捏玩具", paragraphs: ["Tabajoy = taba（一小把、一小束）+ joy。掌心的一小份快乐。", "落在掌心的那一点重量，就是我们所说的片刻休息。不必是什么大事，我们珍惜的是手中真实可触的感觉。"] },
      { title: "我们想带给你的", image: "/products/sleepy-star.png", imageAlt: "戴睡帽的星星软捏玩具", paragraphs: ["食物与动物造型的可爱，是让人忍不住伸手触碰的邀请。", "柔软、弹润、轻轻一捏。触感是每个设计最先传达的话语。系列与收藏乐趣是相遇的配角，主角是你想休息时，伸手就能拿起的那一刻。"] },
    ],
  },
  ja: {
    eyebrow: "ブランドストーリー",
    heading: "ぷにっと、ひとやすみ。",
    tagline: "触り心地とやわらかさを、手のひらで。",
    videoCaption: "押したときの触り心地や、指を離したあとの戻り方をご覧ください。",
    sections: [
      { title: "夜の9時40分、東京。", image: "/products/croissant-cat.png", imageAlt: "クロワッサンねこの商品画像", paragraphs: ["終電前の山手線を降りて、コンビニの袋を片手に、まだ返せていないメッセージを打っている。家に着いて、バッグを床に置いて、上着も脱がないまま。", "ふと、机のすみに小さなまるいものが目に入る。焼きたてのパンのように、やわらかそうな、まるいもの。なんとなく手に取って、一度だけ、ぎゅっと。", "ぷにっ。ゆっくりと、もとの形にもどっていく。もう一度、ぎゅっとしてみる。"] },
      { title: "私たちが信じていること", image: "/products/egg-rice-ball.png", imageAlt: "たまごおにぎりのスクイーズ商品画像", paragraphs: ["リラックスは、計画するものじゃない。決まった手順も、誰かに説明する必要もない。ただ、手を伸ばせばそこにある。それくらい小さくていい。", "だからTabajoyは、「さわれる、小さなひとやすみ」を、実際に手に取れる形にします。「小さな」はサイズではなく、手に取るまでのハードルのこと。"] },
      { title: "名前の由来", image: "/products/salmon-sushi-cat.png", imageAlt: "サーモン寿司ねこのスクイーズ商品画像", paragraphs: ["Tabajoy ＝ たば（ひとつかみ・小さな束）＋ joy。ひとつかみの joy。", "手のひらにちょうど収まる、あの少しの重さ。それが、私たちにとってのひと休みです。大きなことではなくても、手の中に確かにある感触を大切にしています。"] },
      { title: "私たちが届けるもの", image: "/products/sleepy-star.png", imageAlt: "ナイトキャップの星のスクイーズ商品画像", paragraphs: ["モチーフは、たべものやどうぶつ。かわいさは、見ただけで手を伸ばしたくなる招待状です。", "手ざわりは、もちもち、ぷにぷに、ぎゅっ。触感が、この商品の最初のセリフです。シリーズや集める楽しさは、出会いを増やす脇役。主役は、今日ちょっとひと休みしたいときに手に取ること。"] },
    ],
  },
}
