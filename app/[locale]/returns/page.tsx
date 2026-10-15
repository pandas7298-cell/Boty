import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, isLocale, localePageMetadata } from "@/app/locale-shared"
import ReturnsPage from "@/app/returns/returns-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "returns", "/returns")
}

export default async function LocaleReturnsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><ReturnsPage /></LocaleProviderShell>
}
