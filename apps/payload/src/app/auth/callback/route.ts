import { loginWithCode } from '@payload/auth/loginWithCode'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get('code')

  if (code == null) {
    return NextResponse.redirect(
      'http://localhost:5173/admin/login',
      { status: 302 },
    )
  }

  // await setAuthCookie(code)
  await loginWithCode(code)

  return NextResponse.redirect(
    'http://localhost:5173/admin',
    { status: 302 },
  )
}
