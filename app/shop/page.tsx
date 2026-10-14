import type { Metadata } from "next"
import ShopPageClient from "./shop-page-client"

export const metadata: Metadata = {
  title: "スクイーズ一覧｜Tabajoy",
  description: "Tabajoyのスクイーズ一覧。食べものや星のモチーフを、手で触れるやわらかさとともにご紹介します。",
  alternates: { canonical: "/shop" },
}

export default function ShopPage() {
  return <ShopPageClient />
}
