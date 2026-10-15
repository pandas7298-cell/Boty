import type { Metadata } from "next"
import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import BrandStoryPage from "./brand-story-view"

export async function generateMetadata(): Promise<Metadata> {
  return localePageMetadata(await requestLocale(), "brand", "/brand-story")
}

export default function BrandStoryRoute() {
  return <BrandStoryPage />
}
