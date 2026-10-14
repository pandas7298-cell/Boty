import type { Metadata } from "next"
import Link from "next/link"
import { Header } from "@/components/boty/header"
import { FeatureSection } from "@/components/boty/feature-section"
import { Footer } from "@/components/boty/footer"

export const metadata: Metadata = {
  title: "ブランドストーリー｜Tabajoy",
  description: "Tabajoyが大切にする、ぷにっとひとやすみ。手で触れるスクイーズのブランドストーリー。",
  alternates: { canonical: "/brand-story" },
}

export default function BrandStoryPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <section className="pt-36 pb-12 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-sm tracking-[0.2em] text-primary mb-4 block">Tabajoy</span>
          <h1 className="font-serif text-4xl md:text-6xl text-foreground mb-6">ブランドストーリー</h1>
          <p className="font-serif text-2xl md:text-3xl text-foreground">ぷにっと、ひとやすみ。</p>
          <p className="text-muted-foreground mt-5">スクイーズのやわらかな触り心地を、手のひらで。</p>
        </div>
      </section>
      <FeatureSection />
      <div className="text-center pb-16">
        <Link href="/#squeeze-list" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full text-sm hover:bg-primary/90 boty-transition">
          スクイーズ一覧を見る
        </Link>
      </div>
      <Footer />
    </main>
  )
}
