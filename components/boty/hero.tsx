"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-[#e3e1e2] py-28 lg:py-0">
      <div className="pointer-events-none absolute inset-0 bg-[#e3e1e2]" aria-hidden="true">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute left-1/2 top-1/2 h-full min-h-full w-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
          poster="/products/croissant-cat.png"
          aria-hidden="true"
        >
          <source src="/products/homepage.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-x-0 bottom-0 h-[60%] bg-gradient-to-t from-background via-background/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="w-full max-w-2xl mx-auto text-center lg:mx-0 lg:text-left">
            <span className="text-sm mb-4 block text-black animate-blur-in opacity-0 tracking-normal" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Tabajoy
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] mb-5 text-balance text-black">
              <span className="block animate-blur-in opacity-0 font-semibold" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>ぷにっと、ひとやすみ。</span>
              <span className="block animate-blur-in opacity-0 font-semibold text-5xl sm:text-6xl lg:text-7xl" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>Tabajoyのスクイーズ</span>
            </h2>
            <p className="text-base sm:text-lg leading-relaxed mb-7 max-w-md mx-auto lg:mx-0 text-black animate-blur-in opacity-0" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
              食べものや星の形。ぎゅっと押すと、指先にやわらかさが伝わります。手で触れる小さなひと休みを、日々のそばに。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-blur-in opacity-0" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
              <Link
                href="/shop"
                className="group inline-flex items-center justify-center gap-3 bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm tracking-wide boty-transition hover:bg-primary/90 boty-shadow"
              >
                スクイーズを見る
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 boty-transition" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* スクロール indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-black">
        <span className="text-xs tracking-widest uppercase font-bold">スクロール</span>
        <div className="w-px h-12 bg-foreground/20 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/60 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
