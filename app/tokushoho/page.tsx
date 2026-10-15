import { localePageMetadata } from "@/lib/page-metadata"
import { requestLocale } from "@/lib/server-locale"
import TokushohoPage from "./tokushoho-view"

export async function generateMetadata() {
  return localePageMetadata(await requestLocale(), "tokushoho", "/tokushoho")
}

export default function TokushohoRoute() {
  return <TokushohoPage />
}
