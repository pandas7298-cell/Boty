import { NextRequest, NextResponse } from "next/server"

const localizedPrefixes = ["zh", "ja"] as const

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  const localePrefix = localizedPrefixes.find(locale => pathname === `/${locale}` || pathname.startsWith(`/${locale}/`))
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set("x-pathname", pathname)

  if (!localePrefix) {
    return NextResponse.next({ request: { headers: requestHeaders } })
  }

  const upstreamUrl = request.nextUrl.clone()
  upstreamUrl.pathname = pathname.replace(new RegExp(`^/${localePrefix}(?=/|$)`), "") || "/"
  return NextResponse.rewrite(upstreamUrl, { request: { headers: requestHeaders } })
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|.*\\..*).*)"],
}
