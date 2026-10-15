import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, isLocale, localePageMetadata } from "@/app/locale-shared"
import ShippingPage from "@/app/shipping/shipping-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "shipping", "/shipping")
}

export default async function LocaleShippingPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><ShippingPage /></LocaleProviderShell>
}
