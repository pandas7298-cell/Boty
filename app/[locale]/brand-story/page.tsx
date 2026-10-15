import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, isLocale, localePageMetadata } from "@/app/locale-shared"
import BrandStoryPage from "@/app/brand-story/brand-story-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "brand", "/brand-story")
}

export default async function LocaleBrandStoryPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><BrandStoryPage /></LocaleProviderShell>
}
