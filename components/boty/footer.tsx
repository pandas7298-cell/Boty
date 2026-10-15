"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"
import { useMessages, useLocalizedPath } from "@/lib/i18n"

const socialUrl = "https://shop.tiktok.com/jp/pdp/1737979275087807743"

export function Footer() {
  const t = useMessages()
  const localize = useLocalizedPath()

  const footerLinks = {
    shop: [{ name: t.productList, href: "/shop" }],
    about: [{ name: t.brandStory, href: "/brand-story" }],
    support: [
      { name: t.contact, href: "mailto:tabajoy_jp@outlook.com" },
      { name: t.faq, href: "mailto:tabajoy_jp@outlook.com" },
      { name: t.shipping, href: "/shipping" },
      { name: t.returns, href: "/returns" },
      { name: t.tokushoho, href: "/tokushoho" },
      { name: t.privacy, href: "/privacy" },
      { name: t.terms, href: "/terms" },
    ],
  }

  const renderLink = (link: { name: string; href: string }) => {
    const href = link.href.startsWith("/") ? localize(link.href) : link.href
    return (
      <li key={link.name}>
        <Link href={href} className="text-sm text-muted-foreground hover:text-foreground boty-transition">
          {link.name}
        </Link>
      </li>
    )
  }

  return (
    <footer className="bg-card pt-20 pb-10 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[200px] sm:text-[200px] md:text-[400px] lg:text-[400px] xl:text-[400px] font-bold text-white/20 whitespace-nowrap leading-none">
          Tabajoy
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-3xl text-foreground mb-4">Tabajoy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">{t.footerAbout}</p>
            <div className="flex gap-4">
              <a href={socialUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow" aria-label="Instagram"><Instagram className="w-4 h-4" /></a>
              <a href={socialUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow" aria-label="Facebook"><Facebook className="w-4 h-4" /></a>
              <a href={socialUrl} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow" aria-label="Twitter"><Twitter className="w-4 h-4" /></a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t.shop}</h3>
            <ul className="space-y-3">{footerLinks.shop.map(renderLink)}</ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t.brandAbout}</h3>
            <ul className="space-y-3">{footerLinks.about.map(renderLink)}</ul>
          </div>

          <div>
            <h3 className="font-medium text-foreground mb-4">{t.support}</h3>
            <ul className="space-y-3">{footerLinks.support.map(renderLink)}</ul>
          </div>
        </div>

        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">{t.copyright.replace("{year}", String(new Date().getFullYear()))}</p>
            <div className="flex gap-6">
              <Link href={localize("/privacy")} className="text-sm text-muted-foreground hover:text-foreground boty-transition">{t.privacy}</Link>
              <Link href={localize("/terms")} className="text-sm text-muted-foreground hover:text-foreground boty-transition">{t.terms}</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
