import type { Metadata } from "next"
import { Header } from "@/components/boty/header"
import { Hero } from "@/components/boty/hero"
import { TrustBadges } from "@/components/boty/trust-badges"
import { FeatureSection } from "@/components/boty/feature-section"
import { ProductGrid } from "@/components/boty/product-grid"
import { Testimonials } from "@/components/boty/testimonials"
import { CTABanner } from "@/components/boty/cta-banner"

import { Newsletter } from "@/components/boty/newsletter"
import { Footer } from "@/components/boty/footer"

export const metadata: Metadata = {
  title: "Tabajoy｜ぷにっと、ひとやすみ。",
  description: "Tabajoyのスクイーズ。手で触れる、小さなひと休みを。",
  alternates: { canonical: "/" },
}

export default function HomePage() {
  return (
    <main>
      <Header />
      <Hero />
      <TrustBadges />
      <ProductGrid />
      <FeatureSection />
      <Testimonials />
      <CTABanner />
      <Newsletter />
      <Footer />
    </main>
  )
}
