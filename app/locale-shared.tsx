import type { ReactNode } from "react"
import type { Metadata } from "next"
import { notFound } from "next/navigation"
import type { Locale } from "@/lib/locale"
import { LocaleProvider } from "@/lib/i18n"
import { localizedPath } from "@/lib/locale"

export type PageName = "home" | "shop" | "brand" | "shipping" | "returns" | "tokushoho" | "privacy" | "terms"
const routeByPage: Record<PageName, string> = { home: "/", shop: "/shop", brand: "/brand-story", shipping: "/shipping", returns: "/returns", tokushoho: "/tokushoho", privacy: "/privacy", terms: "/terms" }
const titleKey: Record<PageName, string> = { home: "heroTitle", shop: "shopHeading", brand: "brandStoryTitle", shipping: "shippingTitle", returns: "returnsTitle", tokushoho: "tokushoTitle", privacy: "privacyTitle", terms: "termsTitle" }
const descriptionKey: Record<PageName, string> = { home: "heroDescription", shop: "shopIntro", brand: "brandIntro", shipping: "shippingIntro", returns: "returnsIntro", tokushoho: "tokushoIntro", privacy: "privacyIntro", terms: "termsIntro" }

export function isLocale(value: string): value is Locale { return value === "en" || value === "zh" || value === "ja" }

export function LocaleProviderShell({ locale, children }: { locale: Locale; children: ReactNode }) {
  return <LocaleProvider locale={locale}>{children}</LocaleProvider>
}

export const LocaleLayout = LocaleProviderShell

export function localePageMetadata(locale: Locale, page: PageName, path?: string): Metadata {
  const route = path ?? routeByPage[page]
  const message = metadataMessages[locale]
  const canonical = localizedPath(route, locale)
  const languages = { en: localizedPath(route, "en"), "zh-CN": localizedPath(route, "zh"), ja: localizedPath(route, "ja") }
  return { title: message[titleKey[page]], description: message[descriptionKey[page]], alternates: { canonical, languages: { ...languages, "x-default": route } }, openGraph: { title: message[titleKey[page]], description: message[descriptionKey[page]], url: canonical, locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US", type: "website" } }
}

export function LocalePageShell({ locale, children }: { locale: string; children: ReactNode }) {
  if (!isLocale(locale)) notFound()
  return <LocaleProviderShell locale={locale}>{children}</LocaleProviderShell>
}

const metadataMessages: Record<Locale, Record<string, string>> = {
  en: {
    heroTitle: "Tabajoy | A little squeeze, a little pause.", heroDescription: "Discover Tabajoy squeezes: playful designs and a soft, tactile pause for everyday life.", shopHeading: "Squeeze collection | Tabajoy", shopIntro: "Discover playful food and star designs with a soft, squeezable feel.", brandStoryTitle: "Brand story | Tabajoy", brandIntro: "The Tabajoy story: a little squeeze, a little pause, and a soft tactile moment.", shippingTitle: "Shipping | Tabajoy", shippingIntro: "Information about delivery of your order.", returnsTitle: "Returns & exchanges | Tabajoy", returnsIntro: "Information about requesting a return or exchange.", tokushoTitle: "Commercial disclosure | Tabajoy", tokushoIntro: "Seller information and sales terms for online purchases.", privacyTitle: "Privacy policy | Tabajoy", privacyIntro: "How Tabajoy handles personal information.", termsTitle: "Terms of service | Tabajoy", termsIntro: "Conditions for using this website.",
  },
  zh: {
    heroTitle: "Tabajoy｜轻轻捏一捏，给自己片刻休息。", heroDescription: "探索 Tabajoy 软捏玩具：可爱造型与柔软触感，为日常带来片刻休息。", shopHeading: "软捏系列｜Tabajoy", shopIntro: "探索可爱的食物与星星造型，感受柔软可捏的触感。", brandStoryTitle: "品牌故事｜Tabajoy", brandIntro: "了解 Tabajoy 的品牌故事，在掌心感受柔软触感与片刻休息。", shippingTitle: "配送说明｜Tabajoy", shippingIntro: "关于订单配送的信息。", returnsTitle: "退换货说明｜Tabajoy", returnsIntro: "关于申请退货或换货的信息。", tokushoTitle: "特定商业交易法披露｜Tabajoy", tokushoIntro: "网上销售的经营者信息与销售条件。", privacyTitle: "隐私政策｜Tabajoy", privacyIntro: "Tabajoy 对个人信息的处理方式。", termsTitle: "服务条款｜Tabajoy", termsIntro: "使用本网站的相关条件。",
  },
  ja: {
    heroTitle: "Tabajoy｜ぷにっと、ひとやすみ。", heroDescription: "Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。", shopHeading: "スクイーズ一覧｜Tabajoy", shopIntro: "食べものや星のモチーフと、手で触れるやわらかな触り心地をご覧ください。", brandStoryTitle: "ブランドストーリー｜Tabajoy", brandIntro: "Tabajoyが大切にする、ぷにっとひとやすみ。手で触れるスクイーズのブランドストーリー。", shippingTitle: "配送について｜Tabajoy", shippingIntro: "商品のお届けに関するご案内です。", returnsTitle: "返品・交換について｜Tabajoy", returnsIntro: "返品・交換をご希望の場合のご案内です。", tokushoTitle: "特定商取引法に基づく表記｜Tabajoy", tokushoIntro: "通信販売に関する事業者情報と販売条件を表示しています。", privacyTitle: "プライバシーポリシー｜Tabajoy", privacyIntro: "お客様の情報の取り扱いに関する方針です。", termsTitle: "利用規約｜Tabajoy", termsIntro: "本サイトのご利用にあたっての条件です。",
  },
}
