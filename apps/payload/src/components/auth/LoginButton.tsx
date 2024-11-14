'use client'
/* eslint-disable func-style */
import type {
  PayloadClientReactComponent,
  SanitizedConfig,
} from 'payload'
import pkceChallenge from 'pkce-challenge'
import React, { useEffect, useState } from 'react'

const ENV = {
  API_BASE_URL: 'https://vue-node.project-template.development.appwi.se/api/v1',
  AUTH_APPLE_IDP_ID: '290857666517965571',
  AUTH_BASE_URL: 'https://zitadel.internal.appwi.se',
  AUTH_CLIENT_ID: '290541882453367555@template',
  AUTH_GOOGLE_IDP_ID: '288242630901422778',
  AUTH_ORGANIZATION_ID: '290541703843060483',
  ENVIRONMENT: 'development',
}

const DEFAULT_SCOPES: string[] = [
  'openid',
  'profile',
  'email',
  'offline_access',
  `urn:zitadel:iam:org:id:${ENV.AUTH_ORGANIZATION_ID}`,

]

async function getLoginUrl(): Promise<string> {
  const searchParams = new URLSearchParams()

  const codes = await pkceChallenge()

  const scopes = DEFAULT_SCOPES

  searchParams.append('client_id', ENV.AUTH_CLIENT_ID)
  searchParams.append('redirect_uri', 'http://localhost:5173/auth/callback')
  searchParams.append('response_type', 'code')
  searchParams.append('prompt', 'login')
  searchParams.append('scope', scopes.join(' '))
  searchParams.append('code_challenge', codes.code_challenge)
  searchParams.append('code_challenge_method', 'S256')

  return `${ENV.AUTH_BASE_URL}/oauth/v2/authorize?${searchParams.toString()}`
}

const LoginButton: PayloadClientReactComponent<
  SanitizedConfig['admin']['components']['afterLogin'][0]
> = () => {
  const [
    url,
    setUrl,
  ] = useState('')

  useEffect(() => {
    const fetchUrl = async () => {
      const res = await getLoginUrl()

      setUrl(res)
    }

    void fetchUrl()
  })

  return (
    <a
    // eslint-disable-next-line tailwindcss/no-custom-classname
      className="btn btn--style-secondary btn--icon-style-without-border btn--size-medium"
      target="_blank"
      style={{
        display: 'block',
        width: '100%',
      }}
      href={url}
    >
      Zitdal Login
      hello
    </a>
  )
}

export default LoginButton
