import type { Metadata } from "next"
import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import ShopPageClient from "./shop-page-client"

export async function generateMetadata(): Promise<Metadata> {
  return localePageMetadata(await requestLocale(), "shop", "/shop")
}

export default function ShopPage() {
  return <ShopPageClient />
}
