import type { Metadata } from "next"
import { requestLocale } from "@/lib/server-locale"
import { localePageMetadata } from "@/lib/page-metadata"
import HomePageView from "@/components/tabajoy/home-page-view"

export async function generateMetadata(): Promise<Metadata> {
  return localePageMetadata(await requestLocale(), "home", "/")
}

export default function HomePage() {
  return <HomePageView />
}
