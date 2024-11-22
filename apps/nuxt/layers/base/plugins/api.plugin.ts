import { useOFetchStrategy } from '@base/utils/auth/fetchStrategy'
import { cookieTokensStrategy } from '@base/utils/auth/tokensStrategy'
import { getEnv } from '@base/utils/env/getEnv.utils'
import { ZitadelClient } from '@wisemen/vue-core-auth'
import type { $Fetch, FetchOptions } from 'ofetch'

export function addAuthorizationHeader(
  token: string,
  fetchOptions: FetchOptions,
): FetchOptions {
  fetchOptions.headers = {
    ...fetchOptions.headers,
    Authorization: `Bearer ${token}`,
  }

  return fetchOptions
}

export default defineNuxtPlugin({
  setup() {
    const {
      API_BASE_URL,
      AUTH_BASE_URL,
      AUTH_CLIENT_ID,
      AUTH_ORGANIZATION_ID,
      ENVIRONMENT,
    } = getEnv()

    const oAuthClient = new ZitadelClient({
      clientId: AUTH_CLIENT_ID,
      organizationId: AUTH_ORGANIZATION_ID,
      baseUrl: AUTH_BASE_URL,
      fetchStrategy: useOFetchStrategy($fetch as $Fetch),
      loginRedirectUri: `${window.location.origin}/auth/callback`,
      offline: ENVIRONMENT === 'e2e',
      postLogoutRedirectUri: `${window.location.origin}/auth/logout`,
      tokensStrategy: cookieTokensStrategy,
    })

    const api = $fetch.create({
      baseURL: `${API_BASE_URL}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      async onRequest({ options }) {
        const token = await oAuthClient.getAccessToken()

        if (token == null) {
          return
        }

        addAuthorizationHeader(token, options)
      },
      async onResponseError({ response }) {
        const localeRoute = useLocaleRoute()

        if (response.status === 401) {
          await navigateTo(localeRoute('auth-login'))
        }
      },
    })

    const unauthorizedApi = $fetch.create({
      baseURL: `${API_BASE_URL}`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
    })

    return {
      provide: {
        api,
        oAuthClient,
        unauthorizedApi,
      },
    }
  },
})
