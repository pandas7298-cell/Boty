import React from "react"
import type { Metadata, Viewport } from 'next'
import { Zen_Maru_Gothic } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { CartProvider } from '@/components/boty/cart-context'
import './globals.css'

const zenMaruGothic = Zen_Maru_Gothic({
  subsets: ['latin'],
  variable: '--font-zen-maru-gothic',
  weight: ['400', '500', '700'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://tabajoy.com'),
  title: 'Tabajoy｜ぷにっと、ひとやすみ。',
  description: 'Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。',
  openGraph: {
    title: 'Tabajoy｜ぷにっと、ひとやすみ。',
    description: 'Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。',
    locale: 'ja_JP',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tabajoy｜ぷにっと、ひとやすみ。',
    description: 'Tabajoyのスクイーズ。ぷにっと、ひとやすみ。手に取って楽しむ、やわらかな触り心地。',
  },
  generator: 'v0.app',
  keywords: ['スクイーズ', 'かわいい', '触り心地'],
  icons: {
    icon: '/tabajoy-icon.jpeg',
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  themeColor: '#F7F4EF',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${zenMaruGothic.variable} font-sans antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
        <Analytics />
      </body>
    </html>
  )
}
