import type { Metadata } from "next"
import { localizedPath, type Locale } from "@/lib/locale"

export type PageName = "home" | "shop" | "brand" | "shipping" | "returns" | "tokushoho" | "privacy" | "terms"

const routeByPage: Record<PageName, string> = {
  home: "/",
  shop: "/shop",
  brand: "/brand-story",
  shipping: "/shipping",
  returns: "/returns",
  tokushoho: "/tokushoho",
  privacy: "/privacy",
  terms: "/terms",
}

const metadataMessages: Record<Locale, Record<PageName, { title: string; description: string }>> = {
  en: {
    home: { title: "Tabajoy | A little squeeze, a little pause.", description: "Discover Tabajoy squeezes: playful designs and a soft, tactile pause for everyday life." },
    shop: { title: "Squeeze collection | Tabajoy", description: "Discover playful food and star designs with a soft, squeezable feel." },
    brand: { title: "Brand story | Tabajoy", description: "The Tabajoy story: a little squeeze, a little pause, and a soft tactile moment." },
    shipping: { title: "Shipping | Tabajoy", description: "Information about delivery of your order." },
    returns: { title: "Returns & exchanges | Tabajoy", description: "Information about requesting a return or exchange." },
    tokushoho: { title: "Commercial disclosure | Tabajoy", description: "Seller information and sales terms for online purchases." },
    privacy: { title: "Privacy policy | Tabajoy", description: "How Tabajoy handles personal information." },
    terms: { title: "Terms of service | Tabajoy", description: "Conditions for using this website." },
  },
  zh: {
    home: { title: "Tabajoy｜轻轻捏一捏，给自己片刻休息。", description: "探索 Tabajoy 软捏玩具：可爱造型与柔软触感，为日常带来片刻休息。" },
    shop: { title: "软捏系列｜Tabajoy", description: "探索可爱的食物与星星造型，感受柔软可捏的触感。" },
    brand: { title: "品牌故事｜Tabajoy", description: "了解 Tabajoy 的品牌故事，在掌心感受柔软触感与片刻休息。" },
    shipping: { title: "配送说明｜Tabajoy", description: "关于订单配送的信息。" },
    returns: { title: "退换货说明｜Tabajoy", description: "关于申请退货或换货的信息。" },
    tokushoho: { title: "特定商业交易法披露｜Tabajoy", description: "网上销售的经营者信息与销售条件。" },
    privacy: { title: "隐私政策｜Tabajoy", description: "Tabajoy 对个人信息的处理方式。" },
    terms: { title: "服务条款｜Tabajoy", description: "使用本网站的相关条件。" },
  },
  ja: {
    home: { title: "Tabajoy｜ぷにっと、ひとやすみ。", description: "Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。" },
    shop: { title: "スクイーズ一覧｜Tabajoy", description: "食べものや星のモチーフと、手で触れるやわらかな触り心地をご覧ください。" },
    brand: { title: "ブランドストーリー｜Tabajoy", description: "Tabajoyが大切にする、ぷにっとひとやすみ。手で触れるスクイーズのブランドストーリー。" },
    shipping: { title: "配送について｜Tabajoy", description: "商品のお届けに関するご案内です。" },
    returns: { title: "返品・交換について｜Tabajoy", description: "返品・交換をご希望の場合のご案内です。" },
    tokushoho: { title: "特定商取引法に基づく表記｜Tabajoy", description: "通信販売に関する事業者情報と販売条件を表示しています。" },
    privacy: { title: "プライバシーポリシー｜Tabajoy", description: "お客様の情報の取り扱いに関する方針です。" },
    terms: { title: "利用規約｜Tabajoy", description: "本サイトのご利用にあたっての条件です。" },
  },
}

export function localePageMetadata(locale: Locale, page: PageName, path?: string): Metadata {
  const route = path ?? routeByPage[page]
  const content = metadataMessages[locale][page]
  const canonical = localizedPath(route, locale)
  const languages = {
    en: localizedPath(route, "en"),
    "zh-CN": localizedPath(route, "zh"),
    ja: localizedPath(route, "ja"),
    "x-default": route,
  }

  return {
    title: content.title,
    description: content.description,
    alternates: { canonical, languages },
    openGraph: {
      title: content.title,
      description: content.description,
      url: canonical,
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
      type: "website",
    },
  }
}
