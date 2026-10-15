import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, localePageMetadata, isLocale } from "@/app/locale-shared"
import ShopPageClient from "@/app/shop/shop-page-client"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "shop", "/shop")
}

export default async function LocaleShopPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><ShopPageClient /></LocaleProviderShell>
}
