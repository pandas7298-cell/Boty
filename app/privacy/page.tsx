import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import PrivacyPage from "./privacy-view"

export async function generateMetadata() {
  return localePageMetadata(await requestLocale(), "privacy", "/privacy")
}

export default function PrivacyRoute() {
  return <PrivacyPage />
}
