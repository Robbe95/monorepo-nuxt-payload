import { useAuthStore } from '@auth/stores/auth.store'
import type { AppRouter } from '@payload/trpc/router/router'
import {
  createTRPCProxyClient,
  httpBatchLink,
} from '@trpc/client'

export function useTrpc() {
  const client = createTRPCProxyClient<AppRouter>({
    links: [
      httpBatchLink({
        headers() {
          const authStore = useAuthStore()
          const token = authStore.getToken()

          if (token == null) {
            return {}
          }

          return {
            Authorization: `Bearer ${token}`,
          }
        },
        url: 'http://localhost:8000/api/trpc',
      }),
    ],
  })

  return client
}
