"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useMessages, useLocalizedPath } from "@/lib/i18n"

export function CTABanner() {
  const t = useMessages()
  const localize = useLocalizedPath()
  const [isVisible, setIsVisible] = useState(false)
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const banner = bannerRef.current
    if (banner) observer.observe(banner)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={bannerRef} className={`rounded-3xl p-8 md:p-14 grid md:grid-cols-2 gap-8 items-center bg-card transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div>
            <span className="inline-block rounded-full bg-background px-4 py-2 text-xs text-primary mb-5">Tabajoy</span>
            <h2 className="font-serif text-4xl md:text-5xl text-foreground mb-5">{t.ctaTitle}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{t.ctaDescription}</p>
            <Link href={localize("/shop")} className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full text-sm storefront-transition hover:bg-primary/90">
              {t.heroCta} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="relative aspect-[4/3] rounded-3xl overflow-hidden">
            <Image src="/products/bread-collection.jpg" alt={t.touchTitle} fill className="object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
