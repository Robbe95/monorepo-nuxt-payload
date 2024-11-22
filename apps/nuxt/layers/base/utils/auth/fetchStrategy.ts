import type {
  FetchStrategy,
  FetchStrategyGetNewAccessTokenOptions,
  FetchStrategyGetUserInfoOptions,
  FetchStrategyLoginWithCodeOptions,
  OAuth2Tokens,
  ZitadelUser,
} from '@wisemen/vue-core-auth'
import type { $Fetch } from 'ofetch'

interface Token {
  exp: number
}

function removeAuthorizationHeader(): void {}

function setAuthorizationHeader(_accessToken: string): void {}

function decodeToken(token: string): Token {
  const base64Url = token.split('.')[1]

  if (!base64Url) {
    throw new Error('invalid token')
  }
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${(`00${c.charCodeAt(0).toString(16)}`).slice(-2)}`)
      .join(''),
  )

  return JSON.parse(jsonPayload)
}

export function useOFetchStrategy(ofetch: $Fetch): FetchStrategy<$Fetch> {
  async function getNewAccessToken(options: FetchStrategyGetNewAccessTokenOptions): Promise<OAuth2Tokens> {
    const response = await ofetch(options.url, {
      body: {
        client_id: options.clientId,
        grant_type: 'refresh_token',
        refresh_token: options.refreshToken,
        scope: options.scope,
      },
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'POST',
    })

    const decodedToken = decodeToken(response.data.access_token)

    return {
      expires_at: decodedToken.exp * 1000,
      access_token: response.data.access_token,
      id_token: response.data.id_token,
      refresh_token: response.data.refresh_token,
      scope: response.data.scope,
      token_type: response.data.token_type,
    }
  }

  async function getUserInfo(options: FetchStrategyGetUserInfoOptions): Promise<ZitadelUser> {
    const response = await ofetch(options.url, {
      headers: {
        Authorization: `Bearer ${options.accessToken}`,
      },
      method: 'GET',
    })

    return response.data
  }

  async function loginWithCode(options: FetchStrategyLoginWithCodeOptions): Promise<OAuth2Tokens> {
    const response = await ofetch<OAuth2Tokens>(options.url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      method: 'GET',

      params: {
        client_id: options.clientId,
        code: options.code,
        code_verifier: options.codeVerifier,
        grant_type: 'authorization_code',
        redirect_uri: options.redirectUri,
      },
    })

    return response
  }

  function getFetchInstance(): $Fetch {
    return ofetch
  }

  return {
    getFetchInstance,
    getNewAccessToken,
    getUserInfo,
    loginWithCode,
    removeAuthorizationHeader,
    setAuthorizationHeader,
  }
}
