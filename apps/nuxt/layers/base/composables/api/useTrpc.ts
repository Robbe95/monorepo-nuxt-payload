import { useAuthStore } from '@base/stores/auth.store'
import { getEnv } from '@base/utils/env/getEnv.utils'
import type { AppRouter } from '@payload/trpc/router/router'
import {
  createTRPCProxyClient,
  httpBatchLink,
} from '@trpc/client'

export function useTrpc() {
  const { TRPC_BASE_URL } = getEnv()
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        async headers() {
          const authStore = useAuthStore()
          const token = await authStore.getToken()

          if (token == null) {
            return {}
          }

          return {
            Authorization: `Bearer ${token}`,
          }
        },
        url: `${TRPC_BASE_URL}/api/trpc`,
      }),
    ],
  })

  return client
}
