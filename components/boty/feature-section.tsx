"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function FeatureSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className={`grid grid-cols-2 gap-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card">
              <Image src="/products/croissant-cat.png" alt="商品画像" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card mt-10">
              <Image src="/products/egg-rice-ball.png" alt="商品画像" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card -mt-10">
              <Image src="/products/salmon-sushi-cat.png" alt="商品画像" fill className="object-cover" />
            </div>
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-card">
              <Image src="/products/sleepy-star.png" alt="商品画像" fill className="object-cover" />
            </div>
          </div>

          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <span className="text-sm tracking-[0.2em] text-primary mb-4 block">ブランドストーリー</span>
            <h2 className="font-serif text-4xl leading-tight text-foreground mb-6 text-balance md:text-6xl">
              ぷにっと、ひとやすみ。
            </h2>
            <div className="space-y-5 text-base text-muted-foreground leading-relaxed max-w-xl">
              <p>夜の9時40分、東京。終電前の山手線を降りて、コンビニの袋を片手に、まだ返せていないメッセージを打っている。家に着いて、バッグを床に置いて、上着も脱がないまま。ふと、机のすみに小さなまるいものが目に入る。焼きたてのパンのように、やわらかそうな、まるいもの。なんとなく、手に取ってみる。</p>
              <p>そして、一度だけ、ぎゅっと。<br />ぷにっ。</p>
              <p>ゆっくりと、もとの形にもどっていく。それだけのことなのに、からだの中の、なにかが少しだけゆるむ。集めたくて取ったわけじゃない。写真に残したくてでも、誰かに見せたくてでもない。ただ、もう一度、ぎゅっとしてみる。</p>
              <p>Tabajoyが大切にしているのは、この瞬間です。「何かを買った」ではなく、「少しだけ休めた」という瞬間。</p>
              <h3 className="font-serif text-2xl text-foreground pt-3">私たちが信じていること</h3>
              <p>リラックスは、計画するものじゃない。1時間のヨガの予約もいらない。決まった手順もいらない。誰かに説明する必要もない。ただ、手を伸ばせばそこにある。それくらい小さくていい。</p>
              <p>だからTabajoyは、いちばんシンプルなことをします。「さわれる、小さなひとやすみ」を、実際に手に取れる形にする。</p>
              <p>「小さな」はサイズのことではありません。ハードルのことです。理由がなくても、小さすぎて、かまえない。</p>
              <h3 className="font-serif text-2xl text-foreground pt-3">名前の由来</h3>
              <p>Tabajoy ＝ たば（ひとつかみ・小さな束）＋ joy。ひとつかみの joy。手のひらにちょうど収まる、あの少しの重さ。それが、私たちにとっての「リラックス」のすべてです。重くはないけれど、確かにある。何かを解決するわけではないけれど、確かに、ひと息つける。</p>
              <h3 className="font-serif text-2xl text-foreground pt-3">私たちが届けるもの</h3>
              <p>モチーフは、たべもの、どうぶつ。かわいさは、いちばんやさしい招待状。説明はいらない、見ただけで手を伸ばしたくなる。</p>
              <p>手ざわりは、ぜんぶ本物。もちもち、ぷにぷに、ぎゅっ。触感が、この商品の最初のセリフです。</p>
              <p>シリーズ感や集める楽しさは、脇役です。出会いを増やしてくれるけれど、「コンプリート」が目的になった瞬間、ひと休みが宿題になってしまうから。</p>
              <p>「全部そろえるため」ではなく、「今日、ちょっとゆるみたいから」で手に取ってもらうことを大切にしています。</p>
              <h3 className="font-serif text-2xl text-foreground pt-3">最後に</h3>
              <p className="text-foreground">世界はそのままでも、あなたは先に、ぷにっとひとやすみ。</p>
              <p className="font-medium text-foreground">Tabajoy — ぷにっと、ひとやすみ。</p>
            </div>
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-card boty-shadow">
              <video autoPlay muted loop playsInline controls className="absolute inset-0 w-full h-full object-cover" poster="/products/salmon-sushi-cat.png">
                <source src="/products/salmon-sushi-cat.mp4" type="video/mp4" />
              </video>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">押したときの触り心地ややわらかさを、動画でもご覧ください。</p>
          </div>
        </div>
      </div>
    </section>
  )
}
