"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const storySections = [
  {
    title: "夜の9時40分、東京。",
    image: "/products/croissant-cat.png",
    imageAlt: "クロワッサンねこの商品画像",
    paragraphs: [
      "終電前の山手線を降りて、コンビニの袋を片手に、まだ返せていないメッセージを打っている。家に着いて、バッグを床に置いて、上着も脱がないまま。",
      "ふと、机のすみに小さなまるいものが目に入る。焼きたてのパンのように、やわらかそうな、まるいもの。なんとなく手に取って、一度だけ、ぎゅっと。",
      "ぷにっ。ゆっくりと、もとの形にもどっていく。もう一度、ぎゅっとしてみる。"
    ]
  },
  {
    title: "私たちが信じていること",
    image: "/products/egg-rice-ball.png",
    imageAlt: "たまごおにぎりのスクイーズ商品画像",
    paragraphs: [
      "リラックスは、計画するものじゃない。決まった手順も、誰かに説明する必要もない。ただ、手を伸ばせばそこにある。それくらい小さくていい。",
      "だからTabajoyは、「さわれる、小さなひとやすみ」を、実際に手に取れる形にします。「小さな」はサイズではなく、手に取るまでのハードルのこと。"
    ]
  },
  {
    title: "名前の由来",
    image: "/products/salmon-sushi-cat.png",
    imageAlt: "サーモン寿司ねこのスクイーズ商品画像",
    paragraphs: [
      "Tabajoy ＝ たば（ひとつかみ・小さな束）＋ joy。ひとつかみの joy。",
      "手のひらにちょうど収まる、あの少しの重さ。それが、私たちにとってのひと休みです。大きなことではなくても、手の中に確かにある感触を大切にしています。"
    ]
  },
  {
    title: "私たちが届けるもの",
    image: "/products/sleepy-star.png",
    imageAlt: "ナイトキャップの星のスクイーズ商品画像",
    paragraphs: [
      "モチーフは、たべものやどうぶつ。かわいさは、見ただけで手を伸ばしたくなる招待状です。",
      "手ざわりは、もちもち、ぷにぷに、ぎゅっ。触感が、この商品の最初のセリフです。シリーズや集める楽しさは、出会いを増やす脇役。主役は、今日ちょっとひと休みしたいときに手に取ること。"
    ]
  }
]

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current)
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm tracking-[0.2em] text-primary mb-4 block">ブランドストーリー</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">ぷにっと、ひとやすみ。</h2>
        </header>

        <div className="space-y-14 md:space-y-20">
          {storySections.map((section, index) => (
            <article key={section.title} className={`grid md:grid-cols-2 items-center gap-7 md:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-card ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={section.image} alt={section.imageAlt} fill className="object-cover" />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{section.title}</h3>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <p className="mt-4 text-sm text-primary">触り心地とやわらかさを、手のひらで。</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-14 md:mt-20 max-w-4xl mx-auto">
          <div className="relative aspect-video rounded-3xl overflow-hidden bg-card boty-shadow">
            <video autoPlay muted loop playsInline controls className="absolute inset-0 w-full h-full object-cover" poster="/products/salmon-sushi-cat.png">
              <source src="/products/salmon-sushi-cat.mp4" type="video/mp4" />
            </video>
          </div>
          <p className="mt-3 text-sm text-muted-foreground text-center">押したときの触り心地や、指を離したあとの戻り方をご覧ください。</p>
        </div>
      </div>
    </section>
  )
}
