import "server-only"

import { headers } from "next/headers"
import { languageForPath, type Locale } from "@/lib/locale"

export async function requestLocale(): Promise<Locale> {
  const requestHeaders = await headers()
  return languageForPath(requestHeaders.get("x-pathname") ?? "/")
}
