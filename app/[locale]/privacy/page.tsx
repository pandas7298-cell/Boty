import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, isLocale, localePageMetadata } from "@/app/locale-shared"
import PrivacyPage from "@/app/privacy/privacy-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "privacy", "/privacy")
}

export default async function LocalePrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><PrivacyPage /></LocaleProviderShell>
}
