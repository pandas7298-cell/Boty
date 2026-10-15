import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import ReturnsPage from "./returns-view"

export async function generateMetadata() {
  return localePageMetadata(await requestLocale(), "returns", "/returns")
}

export default function ReturnsRoute() {
  return <ReturnsPage />
}
