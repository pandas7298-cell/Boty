"use client"

import { useEffect, useRef, useState } from "react"
import { Leaf, Droplets, Sparkles, Flower2 } from "lucide-react"
import { useMessages } from "@/lib/i18n"

const badgeKeys = [
  ["touchTitle", "touchBody"],
  ["returnTitle", "returnBody"],
  ["foodTitle", "foodBody"],
  ["starTitle", "starBody"],
] as const
const icons = [Leaf, Droplets, Sparkles, Flower2]

export function TrustBadges() {
  const t = useMessages()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    }, { threshold: 0.1 })
    const section = sectionRef.current
    if (section) observer.observe(section)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={sectionRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {badgeKeys.map(([titleKey, bodyKey], index) => {
            const Icon = icons[index]
            return (
              <div key={titleKey} className={`bg-background p-6 lg:p-8 text-center rounded-xl transition-all duration-700 ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`} style={{ transitionDelay: `${index * 150}ms` }}>
                <Icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1} />
                <h3 className="font-serif text-foreground mb-2 text-2xl">{t[titleKey]}</h3>
                <p className="text-sm text-muted-foreground">{t[bodyKey]}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
