import type { Metadata } from "next"
import { ProductDetailClient } from "./product-detail-client"
import { products } from "./product-data"

type ProductPageProps = {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { id } = await params
  const product = products[id]

  if (!product) {
    return {
      title: "商品が見つかりません｜Tabajoy",
      robots: { index: false, follow: false },
    }
  }

  return {
    title: `${product.name}｜Tabajoy`,
    description: product.description,
    alternates: { canonical: `/product/${product.id}` },
    openGraph: {
      type: "website",
      title: `${product.name}｜Tabajoy`,
      description: product.description,
      url: `/product/${product.id}`,
      images: [{ url: product.image, alt: `${product.name}の商品画像` }],
    },
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = products[id]
  const productUrl = `https://tabajoy.com/product/${id}`
  const productImage = product ? new URL(product.image, "https://tabajoy.com").href : ""
  const jsonLd = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.description,
    image: productImage,
    url: productUrl,
    offers: {
      "@type": "Offer",
      url: productUrl,
      priceCurrency: "JPY",
      price: product.price,
    },
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
        />
      )}
      <ProductDetailClient product={product} />
    </>
  )
}
