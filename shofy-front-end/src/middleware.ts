import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname;

  // If it's the root path, redirect to home-2
  if (path === '/') {
    return NextResponse.redirect(new URL('/home-2', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: '/',
} 