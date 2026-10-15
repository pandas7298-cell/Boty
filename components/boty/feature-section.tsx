"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { useLocale } from "@/lib/i18n"
import { featureCopy } from "@/lib/feature-copy"

export function FeatureSection() {
  const locale = useLocale()
  const copy = featureCopy[locale]
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    const section = sectionRef.current
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <header className={`text-center max-w-3xl mx-auto mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="text-sm tracking-[0.2em] text-primary mb-4 block">{copy.eyebrow}</span>
          <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">{copy.heading}</h2>
        </header>

        <div className="space-y-14 md:space-y-20">
          {copy.sections.map((section, index) => (
            <article key={section.title} className={`grid md:grid-cols-2 items-center gap-7 md:gap-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`} style={{ transitionDelay: `${index * 100}ms` }}>
              <div className={`relative aspect-[4/3] rounded-3xl overflow-hidden bg-card ${index % 2 === 1 ? "md:order-2" : ""}`}>
                <Image src={section.image} alt={section.imageAlt} fill className="object-cover" />
              </div>
              <div className={index % 2 === 1 ? "md:order-1" : ""}>
                <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-4">{section.title}</h3>
                <div className="space-y-4 text-base text-muted-foreground leading-relaxed">
                  {section.paragraphs.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
                </div>
                <p className="mt-4 text-sm text-primary">{copy.tagline}</p>
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
          <p className="mt-3 text-sm text-muted-foreground text-center">{copy.videoCaption}</p>
        </div>
      </div>
    </section>
  )
}
