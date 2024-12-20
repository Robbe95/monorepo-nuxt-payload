/* eslint-disable check-file/folder-naming-convention */
import { DEFAULT_SCOPES } from '@payload/auth/authData'
import LoginButton from '@payload/components/auth/LoginButton'
import { ENV } from '@payload/env'
import { cookies } from 'next/headers'

async function getLoginUrl(): Promise<string> {
  const cookiesStore = await cookies()
  const searchParams = new URLSearchParams()
  const codeChallenge = cookiesStore.get('code_challenge')?.value

  if (codeChallenge == null) {
    return ''
  }

  const scopes = DEFAULT_SCOPES

  searchParams.append('client_id', ENV.AUTH_CLIENT_ID)
  searchParams.append('redirect_uri', 'http://localhost:5173/auth/callback')
  searchParams.append('response_type', 'code')
  searchParams.append('prompt', 'login')
  searchParams.append('scope', scopes.join(' '))
  searchParams.append('code_challenge', codeChallenge)
  searchParams.append('code_challenge_method', 'S256')

  return `${ENV.AUTH_BASE_URL}/oauth/v2/authorize?${searchParams.toString()}`
}

export default async function Login() {
  const url = await getLoginUrl()

  return (
    <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center' }}>
      <div style={{ maxWidth: '12rem', width: '100%' }}>
        <LoginButton url={url} />
      </div>
    </div>
  )
}
