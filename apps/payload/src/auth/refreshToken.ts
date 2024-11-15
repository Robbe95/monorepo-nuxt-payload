import type { AuthResponse } from '@payload/auth/authData'
import { getAuthData, setAuthCookie } from '@payload/auth/authData'
import { ENV } from '@payload/env'

export async function refreshToken() {
  const authData = await getAuthData()

  if (authData == null) {
    throw new Error('Auth data not found')
  }

  const response = await fetch(`${ENV.AUTH_BASE_URL}/oauth/v2/token`, {
    body: new URLSearchParams({
      client_id: ENV.AUTH_CLIENT_ID,
      grant_type: 'refresh_token',
      redirect_uri: 'http://localhost:5173/auth/callback',
      refresh_token: authData.refreshToken,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    method: 'POST',
  })

  const data = await response.json() as AuthResponse

  console.log('data', data)

  await setAuthCookie(data)
}
