import type { NextRequest } from "next/server"
import { NextResponse } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl
  const lowercasePathname = url.pathname.toLowerCase()

  if (url.pathname !== lowercasePathname) {
    url.pathname = lowercasePathname
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}
