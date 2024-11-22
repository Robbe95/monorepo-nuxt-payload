export default defineNuxtConfig({
  components: [
    {
      pathPrefix: false,
      path: '@base/components',
    },
  ],
  css: [
    '@base/assets/styles/index.css',
    '@wisemen/vue-core/style.css',
  ],
  experimental: {
    viewTransition: true,
  },
  modules: [
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
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
    },
  },
})
