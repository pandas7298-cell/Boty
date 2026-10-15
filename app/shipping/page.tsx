import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import ShippingPage from "./shipping-view"

export async function generateMetadata() {
  return localePageMetadata(await requestLocale(), "shipping", "/shipping")
}

export default function ShippingRoute() {
  return <ShippingPage />
}
