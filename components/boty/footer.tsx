"use client"

import Link from "next/link"
import { Instagram, Facebook, Twitter } from "lucide-react"

const socialUrl = "https://shop.tiktok.com/jp/pdp/1737979275087807743"

const footerLinks = {
  shop: [
    { name: "スクイーズ一覧", href: "/shop" }
  ],
  about: [
    { name: "ブランドストーリー", href: "/" }
  ],
  support: [
    { name: "お問い合わせ", href: "/" },
    { name: "よくあるご質問", href: "/" },
    { name: "配送について", href: "#" }, // TODO(第4批)
    { name: "返品・交換について", href: "#" }, // TODO(第4批)
    { name: "特定商取引法に基づく表記", href: "#" }, // TODO(第4批)
    { name: "プライバシーポリシー", href: "#" }, // TODO(第4批)
    { name: "利用規約", href: "#" } // TODO(第4批)
  ]
}

export function Footer() {
  return (
    <footer className="bg-card pt-20 pb-10 relative overflow-hidden">
      {/* Giant Background Text */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
        <span className="font-serif text-[200px] sm:text-[200px] md:text-[400px] lg:text-[400px] xl:text-[400px] font-bold text-white/20 whitespace-nowrap leading-none">
          Tabajoy
        </span>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h2 className="font-serif text-3xl text-foreground mb-4">Tabajoy</h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              Tabajoyのスクイーズで、ぷにっとひとやすみ。手に取るたび、やわらかな触り心地をお楽しみください。
            </p>
            <div className="flex gap-4">
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={socialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-foreground/60 hover:text-foreground boty-transition boty-shadow"
                aria-label="Twitter"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* ショップ Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">ショップ</h3>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ブランドについて Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">ブランドについて</h3>
            <ul className="space-y-3">
              {footerLinks.about.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* サポート Links */}
          <div>
            <h3 className="font-medium text-foreground mb-4">サポート</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground boty-transition"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Tabajoy
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                プライバシーポリシー
              </Link>
              <Link href="#" className="text-sm text-muted-foreground hover:text-foreground boty-transition">
                利用規約
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
