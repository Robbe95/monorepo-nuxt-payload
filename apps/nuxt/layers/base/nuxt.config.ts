import process from 'node:process'

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
    '@base/assets/styles/colors.css',
    '@base/assets/styles/variables.css',
    '@base/assets/styles/fonts.css',
  ],
  experimental: {
    viewTransition: true,
  },
  fonts: {
    experimental: {
      processCSSVariables: true,
    },
    families: [
      {
        name: 'Kreon',
        global: true,
        preload: true,
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
    '@nuxtjs/sitemap',
    '@nuxt/fonts',
    '@nuxtjs/robots',
    'nuxt-time',
    '@nuxtjs/tailwindcss',
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
  sitemap: {
    sources: [
      `${process.env.NUXT_PUBLIC_TRPC_BASE_URL}/api/sitemap?locale=nl`,
      `${process.env.NUXT_PUBLIC_TRPC_BASE_URL}/api/sitemap?locale=en`,
      `${process.env.NUXT_PUBLIC_TRPC_BASE_URL}/api/sitemap?locale=fr`,
    ],
  },

})
