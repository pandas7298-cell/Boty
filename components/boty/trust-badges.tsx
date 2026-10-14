"use client"

import { useEffect, useRef, useState } from "react"
import { Leaf, Droplets, Sparkles, Flower2 } from "lucide-react"

const badges = [
  {
    icon: Leaf,
    title: "指先に伝わるやわらかさ",
    description: "ぎゅっと押して、手のひらで触れる感触。"
  },
  {
    icon: Droplets,
    title: "ゆっくり戻る感触",
    description: "押して、離して。形が戻る様子も楽しめます。"
  },
  {
    icon: Sparkles,
    title: "食べものモチーフ",
    description: "見た目にひかれて、思わず手を伸ばしたくなる形。"
  },
  {
    icon: Flower2,
    title: "星やどうぶつの形",
    description: "かわいらしい形と、手で触れる小さなひと休み。"
  }
]

export function TrustBadges() {
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
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div 
          ref={sectionRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {badges.map((badge, index) => (
            <div
              key={badge.title}
              className={`bg-background p-6 lg:p-8 text-center rounded-xl border border-stone-200 transition-all duration-700 ease-out border-none ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <badge.icon className="text-primary mb-4 mx-auto size-12" strokeWidth={1} />
              <h3 className="font-serif text-foreground mb-2 text-2xl">{badge.title}</h3>
              <p className="text-sm text-muted-foreground">{badge.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
