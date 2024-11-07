export default defineNuxtConfig({
  components: [
    {
      pathPrefix: false,
      path: '@base/components',
    },
  ],
  css: [
    '@base/assets/styles/main.scss',
  ],
  experimental: {
    viewTransition: true,
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'nuxt-time',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/test-utils/module',
  ],
  runtimeConfig: {
    public: {
      apiClientId: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_ID environment variable
      apiAuthUrl: '', // can be overridden by NUXT_PUBLIC_API_AUTH_URL environment variable
      apiBaseUrl: '', // can be overridden by NUXT_PUBLIC_API_BASE_URL environment variable
      apiClientSecret: '', // can be overridden by NUXT_PUBLIC_API_CLIENT_SECRET environment variable
      trcpBaseUrl: 'http://localhost:8000', // can be overridden by NUXT_PUBLIC_TRPC_BASE_URL environment variable
    },
  },
})
