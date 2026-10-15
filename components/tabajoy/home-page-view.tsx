import { Header } from "@/components/tabajoy/header"
import { Footer } from "@/components/tabajoy/footer"
import { Hero } from "@/components/tabajoy/hero"
import { TrustBadges } from "@/components/tabajoy/trust-badges"
import { FeatureSection } from "@/components/tabajoy/feature-section"
import { ProductGrid } from "@/components/tabajoy/product-grid"
import { Testimonials } from "@/components/tabajoy/testimonials"
import { CTABanner } from "@/components/tabajoy/cta-banner"
import { Newsletter } from "@/components/tabajoy/newsletter"

export default function HomePageView() {
  return <main><Header /><Hero /><TrustBadges /><ProductGrid /><FeatureSection /><Testimonials /><CTABanner /><Newsletter /><Footer /></main>
}
