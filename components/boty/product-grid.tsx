"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import { useCart } from "./cart-context"

const products = [
  {
    id: "croissant-cat",
    name: "クロワッサンねこ",
    description: "クロワッサンのかたちと、ぎゅっと押したときのやわらかさ。",
    price: 1200,
    image: "/products/croissant-cat.png",
    categories: ["食べもの", "どうぶつ"],
    tags: ["フードモチーフ", "ねこモチーフ"]
  },
  {
    id: "egg-rice-ball",
    name: "たまごおにぎり",
    description: "三角おにぎりモチーフのスクイーズ。",
    price: 1200,
    image: "/products/egg-rice-ball.png",
    categories: ["食べもの"],
    tags: ["フードモチーフ"]
  },
  {
    id: "salmon-sushi-cat",
    name: "サーモン寿司ねこ",
    description: "ねこモチーフの寿司スクイーズキーホルダー。",
    price: 1200,
    image: "/products/salmon-sushi-cat.png",
    categories: ["食べもの", "どうぶつ", "キーホルダー"],
    tags: ["ねこモチーフ", "キーホルダー"]
  },
  {
    id: "salmon-sushi-keychain",
    name: "サーモン握り寿司",
    description: "お寿司モチーフのスクイーズキーホルダー。",
    price: 1200,
    image: "/products/salmon-sushi-keychain.png",
    categories: ["食べもの", "キーホルダー"],
    tags: ["キーホルダー"]
  },
  {
    id: "bread-collection",
    name: "パンのスクイーズ",
    description: "さまざまなパンのかたちを楽しめるスクイーズ。",
    price: 1200,
    image: "/products/bread-collection.jpg",
    categories: ["食べもの"],
    tags: ["フードモチーフ"]
  },
  {
    id: "sleepy-star",
    name: "ナイトキャップの星",
    description: "星のかたちと、手のひらで触れるやわらかさ。",
    price: 1200,
    image: "/products/sleepy-star.png",
    categories: ["星"],
    tags: ["星モチーフ"]
  }
]

const categories = ["食べもの", "どうぶつ", "星", "キーホルダー"]
const formatJPY = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" })

export function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState("食べもの")
  const [isVisible, setIsVisible] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const [headerVisible, setHeaderVisible] = useState(false)
  const gridRef = useRef<HTMLDivElement>(null)
  const headerRef = useRef<HTMLDivElement>(null)
  const { addItem } = useCart()

  const filteredProducts = products.filter(product => product.categories.includes(selectedCategory))

  const handleCategoryChange = (category: string) => {
    if (category !== selectedCategory) {
      setIsTransitioning(true)
      setTimeout(() => {
        setSelectedCategory(category)
        setTimeout(() => setIsTransitioning(false), 50)
      }, 300)
    }
  }

  useEffect(() => {
    const gridObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const headerObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true)
      },
      { threshold: 0.1 }
    )

    if (gridRef.current) gridObserver.observe(gridRef.current)
    if (headerRef.current) headerObserver.observe(headerRef.current)

    return () => {
      if (gridRef.current) gridObserver.unobserve(gridRef.current)
      if (headerRef.current) headerObserver.unobserve(headerRef.current)
    }
  }, [])

  return (
    <section id="squeeze-list" className="py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div ref={headerRef} className="text-center mb-12">
          <span className={`text-sm tracking-[0.2em] text-primary mb-4 block ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.2s', animationFillMode: 'forwards' } : {}}>
            スクイーズ
          </span>
          <h2 className={`font-serif leading-tight text-foreground mb-4 text-balance text-5xl md:text-7xl ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.4s', animationFillMode: 'forwards' } : {}}>
            手で触れる、小さなひと休み
          </h2>
          <p className={`text-lg text-muted-foreground max-w-xl mx-auto ${headerVisible ? 'animate-blur-in opacity-0' : 'opacity-0'}`} style={headerVisible ? { animationDelay: '0.6s', animationFillMode: 'forwards' } : {}}>
            ぎゅっと押したときのやわらかさや、指を離したあとの戻り方をお楽しみください。
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map(category => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryChange(category)}
              className={`px-5 py-3 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category ? "bg-primary text-primary-foreground" : "bg-background text-muted-foreground hover:text-foreground"}`}
              aria-pressed={selectedCategory === category}
            >
              {category}
            </button>
          ))}
        </div>

        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product, index) => (
            <div
              key={`${selectedCategory}-${product.id}`}
              className={`group relative transition-all duration-500 ease-out ${isVisible && !isTransitioning ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
              style={{ transitionDelay: isTransitioning ? '0ms' : `${index * 80}ms` }}
            >
              <Link href={`/product/${product.id}`} className="block rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                <div className="bg-background rounded-3xl overflow-hidden boty-shadow boty-transition group-hover:scale-[1.02]">
                  <div className="relative aspect-square bg-muted overflow-hidden">
                    <Image src={product.image} alt={`${product.name}の商品画像`} fill className="object-cover boty-transition group-hover:scale-105" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-xl text-foreground mb-2">{product.name}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{product.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {product.tags.map(tag => <span key={tag} className="text-xs text-primary/80">{tag}</span>)}
                    </div>
                    <p className="font-medium text-foreground">{formatJPY.format(product.price)}（税込）</p>
                  </div>
                </div>
              </Link>
              <button
                type="button"
                className="absolute bottom-4 right-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-background/95 text-foreground boty-transition boty-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                onClick={() => addItem({ id: product.id, name: product.name, description: product.description, price: product.price, image: product.image })}
                aria-label={`${product.name}をカートに入れる`}
              >
                <ShoppingBag className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/shop" className="inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-foreground px-8 py-4 rounded-full text-sm boty-transition hover:bg-foreground/5">
            スクイーズ一覧を見る
          </Link>
        </div>
      </div>
    </section>
  )
}
