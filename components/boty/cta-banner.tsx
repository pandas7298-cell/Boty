"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function CTABanner() {
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (bannerRef.current) observer.observe(bannerRef.current)
    return () => {
      if (bannerRef.current) observer.unobserve(bannerRef.current)
    }
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={bannerRef} className={`rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center bg-card transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div>
            <span className="inline-block rounded-full bg-background px-4 py-2 text-xs text-primary mb-5">Tabajoy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5">ぎゅっと押して、<br />指先でひと休み。</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">やわらかな触り心地と、ゆっくり戻る感触。スクイーズを手に取る時間をお楽しみください。</p>
            <a href="/shop" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm boty-transition hover:bg-primary/90">
              スクイーズを見る <ArrowRight className="w-4 h-4" />
            </a>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/products/bread-collection.jpg" alt="パンのスクイーズの商品写真" fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
