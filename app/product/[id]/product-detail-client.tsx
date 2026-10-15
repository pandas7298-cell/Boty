"use client"

import { Fragment, useState, useEffect, type ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, Minus, Plus, ChevronDown } from "lucide-react"
import { Header } from "@/components/boty/header"
import { Footer } from "@/components/boty/footer"
import { useCart } from "@/components/boty/cart-context"
import type { ProductDetail } from "./product-types"

const formatJPY = new Intl.NumberFormat("ja-JP", { style: "currency", currency: "JPY" })

type AccordionSection = "description" | "specifications" | "caution"

export function ProductDetailClient({ product }: { product: ProductDetail | undefined }) {
  const [quantity, setQuantity] = useState(1)
  const [openAccordion, setOpenAccordion] = useState<AccordionSection | null>("description")
  const { addItem } = useCart()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [product?.id])

  const toggleAccordion = (section: AccordionSection) => {
    setOpenAccordion(openAccordion === section ? null : section)
  }

  const handleAddToCart = () => {
    if (!product) return
    addItem({ id: product.id, name: product.name, description: product.description, price: product.price, image: product.image }, quantity)
  }

  if (!product) {
    return (
      <main className="min-h-screen">
        <Header />
        <div className="pt-36 pb-24 max-w-3xl mx-auto px-6 text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">商品が見つかりません</h1>
          <p className="text-muted-foreground mb-8">スクイーズ一覧から商品をお選びください。</p>
          <Link href="/shop" className="inline-flex bg-primary text-primary-foreground px-8 py-4 rounded-full">スクイーズ一覧へ</Link>
        </div>
        <Footer />
      </main>
    )
  }

  const accordionItems: { key: AccordionSection; title: string; content: ReactNode }[] = [
    { key: "description", title: "商品説明", content: <p>{product.description}</p> },
    { key: "specifications", title: "商品仕様", content: <dl className="grid grid-cols-[auto_1fr] gap-x-6 gap-y-3">{product.specifications.map(item => <Fragment key={item.label}><dt>{item.label}</dt><dd>{item.value}</dd></Fragment>)}</dl> },
    { key: "caution", title: "注意事項", content: <p>{product.caution}</p> },
  ]

  return (
    <main className="min-h-screen">
      <Header />
      <div className="pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <Link href="/shop" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground boty-transition mb-8">
            <ChevronLeft className="w-4 h-4" /> スクイーズ一覧へ
          </Link>

          <div className="grid gap-x-12 gap-y-8 lg:grid-cols-2 lg:gap-x-20 lg:gap-y-0">
            <div className="order-2 lg:col-start-1 lg:row-span-2 lg:row-start-1">
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-card boty-shadow">
                <Image src={product.image} alt={`${product.name}の商品画像`} fill className="object-cover" priority />
              </div>
              {product.video && (
                <div className="relative aspect-video rounded-3xl overflow-hidden bg-card boty-shadow mt-6">
                  <video controls playsInline preload="metadata" poster={product.image} className="absolute inset-0 w-full h-full object-cover">
                    <source src={product.video} type="video/mp4" />
                  </video>
                </div>
              )}
            </div>

            <div className="order-1 flex flex-col lg:col-start-2 lg:row-start-1">
              <div className="mb-6">
                <div className="flex flex-wrap gap-2 mb-3">{product.tags.map(tag => <span key={tag} className="text-xs text-primary/80">{tag}</span>)}</div>
                <h1 className="font-serif text-3xl md:text-4xl xl:text-5xl text-foreground mb-3">{product.name}</h1>
                <p className="text-foreground/80 leading-relaxed">{product.description}</p>
                {product.tactile !== "[要記入]" && <p className="text-sm text-muted-foreground mt-3">触り心地・やわらかさ：{product.tactile}</p>}
              </div>

              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl md:text-3xl font-medium text-foreground">{formatJPY.format(product.price)}（税込）</span>
              </div>

              <div className="mb-5">
                <label className="text-sm font-medium text-foreground mb-2 block">数量</label>
                <div className="inline-flex items-center gap-4 bg-card rounded-full px-2 py-2 boty-shadow">
                  <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="数量を減らす"><Minus className="w-4 h-4" /></button>
                  <span className="w-8 text-center font-medium text-foreground" aria-live="polite">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(quantity + 1)} className="w-11 h-11 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary" aria-label="数量を増やす"><Plus className="w-4 h-4" /></button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button type="button" onClick={handleAddToCart} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-sm tracking-wide boty-transition boty-shadow bg-primary text-primary-foreground hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
                  カートに入れる
                </button>
                <button type="button" disabled className="flex-1 inline-flex items-center justify-center gap-2 bg-transparent border border-foreground/20 text-muted-foreground px-6 py-4 rounded-full text-sm tracking-wide cursor-not-allowed" aria-label="今すぐ購入（準備中）">今すぐ購入（準備中）</button>
              </div>
            </div>

            <div className="order-3 border-t border-border/50 lg:col-start-2 lg:row-start-2">
              {accordionItems.map(item => (
                <div key={item.key} className="border-b border-border/50">
                  <button type="button" onClick={() => toggleAccordion(item.key)} aria-expanded={openAccordion === item.key} className="w-full flex items-center justify-between py-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary">
                    <span className="font-medium text-foreground">{item.title}</span>
                    <ChevronDown className={`w-5 h-5 text-muted-foreground boty-transition ${openAccordion === item.key ? "rotate-180" : ""}`} />
                  </button>
                  <div className={`overflow-hidden boty-transition ${openAccordion === item.key ? "max-h-96 pb-5" : "max-h-0"}`}>
                    <div className="text-sm text-muted-foreground leading-relaxed">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
