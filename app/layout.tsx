import type { Metadata } from "next"
import { Zen_Maru_Gothic } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { CartProvider } from "@/components/boty/cart-context"
import { LocaleProvider } from "@/lib/i18n"
import { requestLocale } from "@/lib/server-locale"
import { localePageMetadata } from "@/lib/page-metadata"
import "./globals.css"

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ["latin"],
  variable: "--font-zen-maru-gothic",
  weight: ["400", "500", "700"],
})

const metadataByLocale = {
  en: {
    title: "Tabajoy | A little squeeze, a little pause.",
    description: "Discover Tabajoy squeezes: playful designs and a soft, tactile pause for everyday life.",
    ogLocale: "en_US",
  },
  zh: {
    title: "Tabajoy｜轻轻捏一捏，给自己片刻休息。",
    description: "探索 Tabajoy 软捏玩具：可爱造型与柔软触感，为日常带来片刻休息。",
    ogLocale: "zh_CN",
  },
  ja: {
    title: "Tabajoy｜ぷにっと、ひとやすみ。",
    description: "Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。",
    ogLocale: "ja_JP",
  },
} as const

export async function generateMetadata(): Promise<Metadata> {
  const locale = await requestLocale()
  return {
    metadataBase: new URL("https://tabajoy.com"),
    ...localePageMetadata(locale, "home", "/"),
    twitter: {
      card: "summary_large_image",
      title: metadataByLocale[locale].title,
      description: metadataByLocale[locale].description,
    },
    generator: "v0.app",
    icons: {
      icon: "/tabajoy-icon.jpeg",
      apple: "/apple-icon.png",
    },
  }
}

export const viewport = { themeColor: "#F7F4EF" }

export default async function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const locale = await requestLocale()

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${zenMaruGothic.variable} font-sans antialiased`}>
        <LocaleProvider locale={locale}>
          <CartProvider>{children}</CartProvider>
        </LocaleProvider>
        <Analytics />
      </body>
    </html>
  )
}
