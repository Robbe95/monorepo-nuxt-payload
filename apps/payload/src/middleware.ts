import { getAuthData } from '@payload/auth/authData'
import { refreshToken } from '@payload/auth/refreshToken'
import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import pkceChallenge from 'pkce-challenge'

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers)
  const cookieStore = await cookies()
  let authData = await getAuthData()

  if (request.nextUrl.pathname === '/admin/login') {
    const codes = await pkceChallenge()
    const cookiesStore = await cookies()

    const existingCodeChallenge = cookieStore.get('code_challenge')?.value

    if (existingCodeChallenge == null) {
      cookiesStore.set('code_challenge', codes.code_challenge)
      cookiesStore.set('code_verifier', codes.code_verifier)
    }
  }

  if (authData == null) {
    return NextResponse.next()
  }

  if (authData.expiresAt < new Date().getTime()) {
    await refreshToken()
  }

  authData = await getAuthData()

  if (authData == null) {
    return NextResponse.next()
  }

  requestHeaders.set('Authorization', `Bearer ${authData.accessToken}`)

  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  return response
}

export const config = {
  matcher: [
    '/api/:path*',
    '/admin/:path*',
  ],
}
