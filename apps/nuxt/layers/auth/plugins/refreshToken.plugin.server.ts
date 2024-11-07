import { useAuthStore } from '@auth/stores/auth.store'
import { defineNuxtPlugin } from 'nuxt/app'

export default defineNuxtPlugin({
  name: 'refresh-token',
  parallel: true,
  async setup() {
    const authStore = useAuthStore()

    if (authStore.getToken() == null) {
      return
    }

    try {
      await authStore.refreshToken()
      await authStore.getCurrentUser()
    }
    catch (error) {
      console.error('Failed to refresh token', error)
    }
  },
})
