import type { Metadata } from "next"
import { ProductDetailClient } from "./product-detail-client"
import { getProduct, getProductCopy } from "@/lib/products"
import { localizedPath } from "@/lib/locale"
import { requestLocale } from "@/lib/server-locale"

const siteOrigin = "https://tabajoy.com"

type ProductPageProps = { params: Promise<{ id: string }> }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = getProduct(id)
  if (!product) return { title: "Product not found | Tabajoy", robots: { index: false, follow: false } }
  const locale = await requestLocale()
  const copy = getProductCopy(product, locale)
  const path = `/product/${product.id}`
  const title = `${copy.name} | Tabajoy`
  const description = copy.description
  const languages = { en: localizedPath(path, "en"), "zh-CN": localizedPath(path, "zh"), ja: localizedPath(path, "ja") }
  const canonical = localizedPath(path, locale)
  return {
    title,
    description,
    alternates: { canonical, languages: { ...languages, "x-default": path } },
    openGraph: {
      type: "website",
      title,
      description,
      url: canonical,
      locale: locale === "zh" ? "zh_CN" : locale === "ja" ? "ja_JP" : "en_US",
      images: [{ url: product.image, alt: copy.name }],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = getProduct(id)
  const locale = await requestLocale()
  const copy = product ? getProductCopy(product, locale) : undefined
  const productPath = `/product/${id}`
  const productUrl = new URL(locale === "en" ? productPath : `/${locale}${productPath}`, siteOrigin).href
  const productImage = product ? new URL(product.image, siteOrigin).href : ""
  const jsonLd = product && copy ? {
    "@context": "https://schema.org",
    "@type": "Product",
    name: copy.name,
    description: copy.description,
    image: productImage,
    url: productUrl,
    offers: { "@type": "Offer", url: productUrl, priceCurrency: "JPY", price: product.price },
  } : null

  return (
    <>
      {jsonLd && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />}
      <ProductDetailClient product={product} />
    </>
  )
}
