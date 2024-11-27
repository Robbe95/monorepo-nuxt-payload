export default defineNuxtConfig({
  components: [
    {
      pathPrefix: false,
      path: '@base/components',
    },
    {
      pathPrefix: false,
      path: '@base/modules',
    },

  ],
  css: [
    '@wisemen/vue-core/style.css',
    '@base/assets/styles/index.css',
  ],
  experimental: {
    viewTransition: true,
  },
  fonts: {
    families: [
      {
        name: 'Kreon',
        provider: 'local',
        weights: [
          300,
          400,
          700,
        ],
      },
    ],
  },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/fonts',
    'nuxt-time',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
  ],
  runtimeConfig: {
    public: {
      authAppleIdpId: '',
      authClientId: '',
      authGoogleIdpId: '',
      authOrganizationId: '',
      authProjectId: '',
      apiBaseUrl: '',
      authBaseUrl: '',
      authIssuer: '',
      authJwksEndpoint: '',
      environment: '',
      trpcBaseUrl: '',
    },
  },
})
