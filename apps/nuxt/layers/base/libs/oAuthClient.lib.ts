import { useTrpc } from '@auth/api/useTrpc'

interface ClientOptions {
  fetchInstance: typeof $fetch
}

export interface ClientToken {
  exp: number
  token: string
}

export class TokenStore {
  private _promise: Promise<void> | null = null
  private onTokensRefreshedCallback: ((tokens: ClientToken) => void) | null = null

  constructor(private options: ClientOptions, private tokens: ClientToken) {
  }

  private accessTokenExpired(): boolean {
    return Date.now() >= this.tokens.exp
  }

  public async getAccessToken(): Promise<string> {
    if (this.accessTokenExpired()) {
      await this.refreshToken()
    }

    return this.tokens.token
  }

  public getTokens(): ClientToken {
    return this.tokens
  }

  public onRefreshToken(callback: (tokens: ClientToken) => void): void {
    this.onTokensRefreshedCallback = callback
  }

  public refreshToken(): Promise<void> {
    if (this._promise != null) {
      return this._promise
    }

    this._promise = new Promise((resolve, reject) => {
      fetch('http://localhost:8000/api/users/refresh-token', {
        body: JSON.stringify({}),
        headers: {
          'Authorization': `Bearer ${this.tokens.token}`,
          'Content-Type': 'application/json',
        },
        method: 'POST',
      }).then(async (data) => {
        if (!data.ok) {
          reject(new Error('Failed to refresh access token'))
        }

        const response = await data.json() as {
          exp: number
          refreshedToken: string
        }

        this.tokens = {
          exp: response.exp,
          token: response.refreshedToken,
        }

        if (this.onTokensRefreshedCallback != null) {
          this.onTokensRefreshedCallback(this.tokens)
        }

        resolve()
      })
        .catch(() => {
          reject(new Error('Failed to refresh access token'))
        })
        .finally(() => {
          this._promise = null
        })
    })

    return this._promise
  }
}

export class OAuth2Client {
  constructor(private readonly options: ClientOptions) {}

  public async login(username: string, password: string): Promise<TokenStore> {
    const trpc = useTrpc()
    const data = await trpc.auth.login.mutate({
      email: username,
      password,
    })

    if (data.exp == null || data.token == null) {
      throw new Error('Invalid response')
    }

    const store = new TokenStore(this.options, {
      exp: data.exp,
      token: data.token,
    })

    return store
  }
}
