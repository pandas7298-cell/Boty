"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, ShoppingBag, Search, User } from "lucide-react"
import { CartDrawer } from "./cart-drawer"
import { useCart } from "./cart-context"
import { useLocale, useMessages } from "@/lib/i18n"
import { localizedPath, locales } from "@/lib/locale"
import { usePathname } from "next/navigation"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { setIsOpen, itemCount } = useCart()
  const locale = useLocale()
  const t = useMessages()
  const pathname = usePathname()
  const localize = (path: string) => localizedPath(path, locale)
  const localeName = { en: t.localeEnglish, zh: t.localeChinese, ja: t.localeJapanese }
  const localeShortName = { en: t.localeEnglishShort, zh: t.localeChineseShort, ja: t.localeJapaneseShort }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8 backdrop-blur-md rounded-lg py-0 my-0 animate-scale-fade-in bg-[rgba(255,255,255,0.4)] border border-[rgba(255,255,255,0.32)]" style={{ boxShadow: "rgba(0, 0, 0, 0.1) 0px 10px 50px" }}>
        <div className="flex items-center justify-between h-[68px]">
          <button type="button" className="lg:hidden flex h-11 w-11 items-center justify-center text-foreground/80 hover:text-foreground storefront-transition" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label={t.menu} aria-expanded={isMenuOpen}>
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <div className="hidden lg:flex items-center gap-8">
            <Link href={localize("/shop")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.shop}</Link>
            <Link href={localize("/brand-story")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.brandStory}</Link>
            <Link href={localize("/#squeeze-list")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.productList}</Link>
          </div>

          <Link href={localize("/")} className="absolute left-1/2 -translate-x-1/2">
            <div className="text-center leading-tight">
              <span className="block font-serif text-3xl tracking-wider text-foreground">Tabajoy</span>
              <span className="text-[10px] text-foreground/70">{t.heroLine}</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <button type="button" className="flex h-11 w-11 shrink-0 items-center justify-center text-foreground/70 hover:text-foreground storefront-transition" aria-label={t.search}>
              <Search className="w-5 h-5" />
            </button>
            <Link href={localize("/account")} className="hidden h-11 w-11 shrink-0 items-center justify-center text-foreground/70 hover:text-foreground storefront-transition sm:flex" aria-label={t.account}>
              <User className="w-5 h-5" />
            </Link>
            <button type="button" onClick={() => setIsOpen(true)} className="relative flex h-11 w-11 shrink-0 items-center justify-center text-foreground/70 hover:text-foreground storefront-transition" aria-label={t.cart}>
              <ShoppingBag className="w-5 h-5" />
              {itemCount > 0 && <span aria-live="polite" className="absolute -top-0 -right-0 min-w-4 h-4 px-1 bg-primary text-primary-foreground text-[10px] flex items-center justify-center rounded-full">{itemCount}</span>}
            </button>
            <nav aria-label={t.language} className="hidden items-center gap-1 sm:flex">
              {locales.map(value => (
                <a key={value} href={localizedPath(pathname, value)} aria-label={`${t.language}: ${localeName[value]}`} aria-current={locale === value ? "page" : undefined} className={`rounded-full px-3 py-2 text-xs font-medium storefront-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary ${locale === value ? "bg-primary text-primary-foreground" : "text-foreground/70 hover:text-foreground"}`}>
                  {localeShortName[value]}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <CartDrawer />

        <div className={`lg:hidden overflow-hidden storefront-transition ${isMenuOpen ? "max-h-80 pb-4" : "max-h-0"}`}>
          <div className="flex flex-col gap-1 pt-3 border-t border-border/50">
            <Link href={localize("/shop")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.shop}</Link>
            <Link href={localize("/brand-story")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.brandStory}</Link>
            <Link href={localize("/#squeeze-list")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.productList}</Link>
            <Link href={localize("/account")} className="flex h-11 items-center text-sm tracking-wide text-foreground/70 hover:text-foreground storefront-transition">{t.account}</Link>
            <div className="flex items-center gap-2 pt-2" role="group" aria-label={t.language}>
              {locales.map(value => <a key={value} href={localizedPath(pathname, value)} aria-current={locale === value ? "page" : undefined} className={`rounded-full px-3 py-2 text-xs font-medium ${locale === value ? "bg-primary text-primary-foreground" : "text-foreground/70"}`}>{localeShortName[value]}</a>)}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
