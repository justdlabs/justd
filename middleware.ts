import { type NextRequest, NextResponse } from "next/server"

export async function middleware(request: NextRequest) {
  const url = request.nextUrl

  if (url.pathname.startsWith("/docs/1.x/")) {
    const fetchUrl = `https://1x.getjustd.com${url.pathname}`
    const response = await fetch(fetchUrl)

    if (response.ok) {
      let html = await response.text()

      html = html.replace(/(href|src)="\/([^"]+)"/g, `$1="https://1x.getjustd.com/$2"`)

      return new Response(html, {
        headers: response.headers,
      })
    }
  }

  return NextResponse.next()
}
