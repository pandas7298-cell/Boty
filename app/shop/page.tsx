"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { SlidersHorizontal, X } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"

const products = [
  { id: "croissant-cat", name: "クロワッサンねこ", description: "クロワッサンのかたちと、ぎゅっと押したときのやわらかさ。", price: 1200, image: "/products/croissant-cat.png", categories: ["食べもの", "どうぶつ"], tags: ["フードモチーフ", "ねこモチーフ"] },
  { id: "egg-rice-ball", name: "たまごおにぎり", description: "三角おにぎりモチーフのスクイーズ。", price: 1200, image: "/products/egg-rice-ball.png", categories: ["食べもの"], tags: ["フードモチーフ"] },
  { id: "salmon-sushi-cat", name: "サーモン寿司ねこ", description: "ねこモチーフの寿司スクイーズキーホルダー。", price: 1200, image: "/products/salmon-sushi-cat.png", categories: ["食べもの", "どうぶつ", "キーホルダー"], tags: ["ねこモチーフ", "キーホルダー"] },
  { id: "salmon-sushi-keychain", name: "サーモン握り寿司", description: "お寿司モチーフのスクイーズキーホルダー。", price: 1200, image: "/products/salmon-sushi-keychain.png", categories: ["食べもの", "キーホルダー"], tags: ["キーホルダー"] },
  { id: "bread-collection", name: "パンのスクイーズ", description: "さまざまなパンのかたちを楽しめるスクイーズ。", price: 1200, image: "/products/bread-collection.jpg", categories: ["食べもの"], tags: ["フードモチーフ"] },
  { id: "sleepy-star", name: "ナイトキャップの星", description: "星のかたちと、手のひらで触れるやわらかさ。", price: 1200, image: "/products/sleepy-star.png", categories: ["星"], tags: ["星モチーフ"] },
]

const categories = ["すべて", "食べもの", "どうぶつ", "星", "キーホルダー"]
const formatJPY = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" })

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("すべて")
  const [showFilters, setShowFilters] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)

  const filteredProducts = selectedCategory === "すべて"
    ? products
    : products.filter(product => product.categories.includes(selectedCategory))

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) observer.observe(gridRef.current)
    return () => {
      if (gridRef.current) observer.unobserve(gridRef.current)
    }
  }, [])

  useEffect(() => {
    setIsVisible(false)
    const timer = setTimeout(() => setIsVisible(true), 50)
    return () => clearTimeout(timer)
  }, [selectedCategory])

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm tracking-[0.2em] text-primary mb-4 block">Tabajoyのスクイーズ</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-4 text-balance">スクイーズ一覧</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">かわいい形と、手で触れるやわらかな触り心地。押したときの感触を楽しむスクイーズをご覧ください。</p>
          </div>

          <div className="flex items-center justify-between mb-8 pb-6 border-b border-border/50">
            <button type="button" onClick={() => setShowFilters(!showFilters)} className="lg:hidden inline-flex items-center gap-2 text-sm text-foreground" aria-expanded={showFilters}>
              <SlidersHorizontal className="w-4 h-4" /> 絞り込む
            </button>
            <div className="hidden lg:flex flex-wrap items-center gap-2" aria-label="商品カテゴリー">
              {categories.map(category => (
                <button key={category} type="button" onClick={() => setSelectedCategory(category)} aria-pressed={selectedCategory === category} className={`px-4 py-2 rounded-full text-sm transition-colors ${selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-card text-foreground/70 hover:text-foreground"}`}>
                  {category}
                </button>
              ))}
            </div>
            <span className="text-sm text-muted-foreground">{filteredProducts.length}点</span>
          </div>

          {showFilters && (
            <div className="lg:hidden fixed inset-0 z-50 bg-background">
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-serif text-2xl text-foreground">カテゴリー</h2>
                  <button type="button" onClick={() => setShowFilters(false)} className="p-2 text-foreground/70 hover:text-foreground" aria-label="閉じる"><X className="w-5 h-5" /></button>
                </div>
                <div className="space-y-3">
                  {categories.map(category => (
                    <button key={category} type="button" onClick={() => { setSelectedCategory(category); setShowFilters(false) }} aria-pressed={selectedCategory === category} className={`w-full px-6 py-4 rounded-2xl text-left transition-colors ${selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-card text-foreground"}`}>
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product, index) => (
              <Link key={product.id} href={`/product/${product.id}`} className={`group transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="bg-card rounded-3xl overflow-hidden boty-shadow boty-transition group-hover:scale-[1.02]">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-muted via-muted/50 to-muted animate-pulse" />
                    <Image src={product.image} alt={`${product.name}の商品画像`} fill className="object-cover boty-transition group-hover:scale-105" onLoad={event => { event.currentTarget.parentElement?.querySelector(".animate-pulse")?.classList.add("opacity-0") }} />
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-xl text-foreground mb-2">{product.name}</h2>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">{product.tags.map(tag => <span key={tag} className="text-xs text-primary/80">{tag}</span>)}</div>
                    <p className="text-lg font-medium text-foreground">{formatJPY.format(product.price)}（税込）</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
