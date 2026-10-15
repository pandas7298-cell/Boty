"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/tabajoy/header"
import { Footer } from "@/components/tabajoy/footer"
import { getProductById, getProductCopy, useLocale, useMessages, useLocalizedPath, formatPrice } from "@/lib/i18n"
import type { StoreProduct } from "@/lib/products"

const productIds = ["croissant-cat", "egg-rice-ball", "salmon-sushi-cat", "salmon-sushi-keychain", "bread-collection", "sleepy-star"]
const categoryKeyByCopy: Record<"en" | "zh" | "ja", Record<string, string>> = {
  en: { Food: "food", Animals: "animals", Stars: "stars", Keychains: "keychains" },
  zh: { 食物: "food", 动物: "animals", 星星: "stars", 挂件: "keychains" },
  ja: { 食べもの: "food", どうぶつ: "animals", 星: "stars", キーホルダー: "keychains" },
} as const

export default function ShopPageClient() {
  const locale = useLocale()
  const t = useMessages()
  const localize = useLocalizedPath()
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const products = productIds.map(getProductById).filter((product): product is StoreProduct => Boolean(product))
  const categories = [
    { key: "all", label: t.all },
    { key: "food", label: t.foodCategory },
    { key: "animals", label: t.animalCategory },
    { key: "stars", label: t.starCategory },
    { key: "keychains", label: t.keychainCategory },
  ]
  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => getProductCopy(product, locale).categories.some(category => categoryKeyByCopy[locale][category as keyof typeof categoryKeyByCopy.en] === selectedCategory))

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true) }, { threshold: 0.1 })
    const grid = gridRef.current
    if (grid) observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.2em] text-primary mb-4 block">Tabajoy</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">{t.shopHeading}</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.shopIntro}</p>
          </div>
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
            <button type="button" onClick={() => setShowFilters(!showFilters)} className="lg:hidden inline-flex min-h-11 items-center gap-2 text-sm text-foreground" aria-expanded={showFilters}><SlidersHorizontal className="w-4 h-4" /> {t.filter}</button>
            <div className="hidden lg:flex flex-wrap items-center gap-2" aria-label={t.categories}>
              {categories.map(category => <button key={category.key} type="button" onClick={() => setSelectedCategory(category.key)} aria-pressed={selectedCategory === category.key} className={`px-4 py-2 rounded-full text-sm transition-colors ${selectedCategory === category.key ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:text-foreground"}`}>{category.label}</button>)}
            </div>
            <span className="text-sm text-muted-foreground">{filteredProducts.length} {t.itemCount}</span>
          </div>
          {showFilters && <div className="lg:hidden fixed inset-0 z-50 bg-background"><div className="p-6"><div className="flex items-center justify-between mb-8"><h2 className="font-serif text-2xl text-foreground">{t.categories}</h2><button type="button" onClick={() => setShowFilters(false)} className="p-2 text-foreground/70 hover:text-foreground" aria-label={t.close}><X className="w-5 h-5" /></button></div><div className="space-y-3">{categories.map(category => <button key={category.key} type="button" onClick={() => { setSelectedCategory(category.key); setShowFilters(false) }} aria-pressed={selectedCategory === category.key} className={`w-full px-6 py-4 rounded-2xl text-left transition-colors ${selectedCategory === category.key ? "bg-primary text-primary-foreground" : "bg-card text-foreground"}`}>{category.label}</button>)}</div></div></div>}
          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => {
              const copy = getProductCopy(product, locale)
              return <Link key={product.id} href={localize(`/product/${product.id}`)} className={`group transition-all duration-700 ease-out ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="bg-card rounded-3xl overflow-hidden storefront-shadow storefront-transition group-hover:scale-[1.02]"><div className="relative aspect-square bg-muted overflow-hidden"><div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" /><Image src={product.image} alt={copy.name} fill className="object-cover storefront-transition group-hover:scale-105" onLoad={event => { event.currentTarget.parentElement?.querySelector(".animate-pulse")?.classList.add("opacity-0") }} /></div><div className="p-6"><h2 className="font-serif text-xl text-foreground mb-2">{copy.name}</h2><p className="text-sm text-muted-foreground mb-3">{copy.description}</p><div className="flex flex-wrap gap-2 mb-3">{copy.tags.map(tag => <span key={tag} className="text-xs text-primary/80">{tag}</span>)}</div><p className="text-lg font-medium text-foreground">{formatPrice(product.price, locale)}（{t.taxIncluded}）</p></div></div>
              </Link>
            })}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
