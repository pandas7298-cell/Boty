import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import TermsPage from "./terms-view"

export async function generateMetadata() {
  return localePageMetadata(await requestLocale(), "terms", "/terms")
}

export default function TermsRoute() {
  return <TermsPage />
}
