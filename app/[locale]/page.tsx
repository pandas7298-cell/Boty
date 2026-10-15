import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, localePageMetadata, isLocale } from "@/app/locale-shared"
import HomePageView from "@/components/boty/home-page-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "home", "/")
}

export default async function LocaleHomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><HomePageView /></LocaleProviderShell>
}
