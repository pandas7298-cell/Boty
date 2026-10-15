"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"
import { useLocale, useMessages, formatPrice, getProductCopy } from "@/lib/i18n"
import { products } from "@/lib/products"

const featuredProductIds = ["bread-collection", "sleepy-star", "salmon-sushi-cat"] as const
const featuredProducts = featuredProductIds
  .map(id => products.find(product => product.id === id))
  .filter((product): product is (typeof products)[number] => product !== undefined)

export function ProductGrid() {
  const locale = useLocale()
  const t = useMessages()
  const [isVisible, setIsVisible] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  useEffect(() => {
    const gridObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    const headerObserver = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setHeaderVisible(true) }, { threshold: 0.1 })
    const grid = gridRef.current
    const header = headerRef.current
    if (grid) gridObserver.observe(grid)
    if (header) headerObserver.observe(header)
    return () => { gridObserver.disconnect(); headerObserver.disconnect() }
  }, [])

  return (
    <section id="squeeze-list" className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-10 md:mb-12">
          <span className={`text-sm tracking-[0.2em] text-primary mb-4 block ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`} style={headerVisible ? { animationDelay: "0.2s", animationFillMode: "forwards" } : {}}>{t.gridEyebrow}</span>
          <h2 className={`font-serif leading-tight text-foreground mb-4 text-balance text-4xl sm:text-5xl md:text-7xl ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`} style={headerVisible ? { animationDelay: "0.4s", animationFillMode: "forwards" } : {}}>{t.gridHeading}</h2>
          <p className={`text-base sm:text-lg text-muted-foreground max-w-xl mx-auto ${headerVisible ? "animate-blur-in opacity-0" : "opacity-0"}`} style={headerVisible ? { animationDelay: "0.6s", animationFillMode: "forwards" } : {}}>{t.gridDescription}</p>
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {featuredProducts.map((product, index) => {
            const copy = getProductCopy(product, locale)
            return (
              <div key={product.id} className={`group relative transition-all duration-500 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <Link href={locale === "en" ? `/product/${product.id}` : `/${locale}/product/${product.id}`} className="block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  <div className="bg-background rounded-3xl overflow-hidden storefront-shadow storefront-transition group-hover:scale-[1.02]">
                    <div className="relative aspect-square bg-muted overflow-hidden"><Image src={product.image} alt={copy.name} fill className="object-cover storefront-transition group-hover:scale-105" /></div>
                    <div className="p-5">
                      <h3 className="font-serif text-xl text-foreground mb-2">{copy.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{copy.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">{copy.tags.map(tag => <span key={tag} className="text-xs text-primary/80">{tag}</span>)}</div>
                      <p className="font-medium text-foreground">{formatPrice(product.price, locale)}（{t.taxIncluded}）</p>
                    </div>
                  </div>
                </Link>
                <button type="button" className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/95 text-foreground storefront-transition storefront-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2" onClick={() => addItem({ id: product.id, price: product.price, image: product.image })} aria-label={t.addProductToCart.replace("{product}", copy.name)}><ShoppingBag className="w-4 h-4" /></button>
              </div>
            )
          })}
        </div>

        <div className="text-center mt-10 md:mt-12"><Link href={locale === "en" ? "/shop" : `/${locale}/shop`} className="inline-flex min-h-11 items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-3 rounded-full text-sm storefront-transition hover:bg-foreground/5">{t.viewAll}</Link></div>
      </div>
    </section>
  )
}
