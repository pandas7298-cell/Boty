export type Locale = "en" | "zh" | "ja"

export const locales: Locale[] = ["en", "zh", "ja"]

export function formatLocaleCurrency(value: number, locale: Locale) {
  return new Intl.NumberFormat(locale === "zh" ? "zh-CN" : locale === "ja" ? "ja-JP" : "en-US", { style: "currency", currency: "JPY", maximumFractionDigits: 0 }).format(value)
}

export function languageForPath(pathname: string): Locale {
  if (pathname === "/zh" || pathname.startsWith("/zh/")) return "zh"
  if (pathname === "/ja" || pathname.startsWith("/ja/")) return "ja"
  return "en"
}

export function pathWithoutLocale(pathname: string) {
  return pathname.replace(/^\/(zh|ja)(?=\/|$)/, "") || "/"
}

export function localizedPath(pathname: string, locale: Locale) {
  const [rawPath, hash = ""] = pathname.split("#", 2)
  const cleanPath = rawPath.startsWith("/") ? rawPath : `/${rawPath}`
  const path = pathWithoutLocale(cleanPath)
  const localized = locale === "en" ? path : `/${locale}${path === "/" ? "" : path}`
  return hash ? `${localized}#${hash}` : localized
}
