import type { FetchOptions } from 'ofetch'

import {
  type ClientToken,
  OAuth2Client,
  TokenStore,
} from './oAuthClient.lib'

interface OAuth2VueClientOptions {
  clientId: string
  clientSecret: string
  fetchInstance: typeof $fetch
  scopes?: string[]
  tokenEndpoint: string
}

export class OAuth2VueClient {
  private client: TokenStore | null = null
  private oAuthFactory: OAuth2Client

  constructor(private readonly options: OAuth2VueClientOptions) {
    const { fetchInstance } = options

    this.oAuthFactory = new OAuth2Client({
      fetchInstance,
    })

    const tokens = this.loadTokensFromCookie()

    if (tokens !== null) {
      this.client = this.createClient(tokens)
    }
  }

  private createClient(tokens: ClientToken): TokenStore {
    const { fetchInstance } = this.options

    const client = new TokenStore(
      {
        fetchInstance,
      },
      tokens,
    )

    client.onRefreshToken((tokens) => {
      this.saveTokensToCookie(tokens)
    })

    return client
  }

  private loadTokensFromCookie(): ClientToken | null {
    const tokensCookie = useCookie<ClientToken | null>('tokens')

    return tokensCookie.value
  }

  private removeClient(): void {
    this.client = null
  }

  private saveTokensToCookie(tokens: ClientToken | null): void {
    const tokensCookie = useCookie<ClientToken | null>('tokens')

    if (tokens === null) {
      tokensCookie.value = null
    }
    else { tokensCookie.value = tokens }
  }

  public getClient(): TokenStore | null {
    return this.client
  }

  public isLoggedIn(): boolean {
    const client = this.getClient()

    return client?.getTokens() != null
  }

  public async login(username: string, password: string): Promise<void> {
    const client = await this.oAuthFactory.login(username, password)

    const tokens = client.getTokens()

    this.saveTokensToCookie(tokens)
    this.client = this.createClient(tokens)
  }

  public logout(): void {
    this.saveTokensToCookie(null)
    this.removeClient()
  }
}

export async function addAuthorizationHeader(
  oAuthClient: OAuth2VueClient,
  fetchOptions: FetchOptions,
): Promise<FetchOptions> {
  const client = oAuthClient.getClient()

  if (client === null) {
    return fetchOptions
  }

  try {
    const token = await client.getAccessToken()

    fetchOptions.headers = {
      ...fetchOptions.headers,
      Authorization: `Bearer ${token}`,
    }

    return fetchOptions
  }
  catch {
    console.warn('Failed to get access token, logging out')
  }

  return fetchOptions
}
