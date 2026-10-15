import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { LocaleProviderShell, isLocale, localePageMetadata } from "@/app/locale-shared"
import TokushohoPage from "@/app/tokushoho/tokushoho-view"

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return localePageMetadata(locale, "tokushoho", "/tokushoho")
}

export default async function LocaleTokushohoPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  if (!isLocale(locale) || locale === "en") notFound()
  return <LocaleProviderShell locale={locale}><TokushohoPage /></LocaleProviderShell>
}
