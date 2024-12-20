import path from 'node:path'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-07',

  alias: {
    '@@': path.resolve(__dirname, './disable'),
    '@base': path.resolve(__dirname, './layers/base'),
    '@cms': path.resolve(__dirname, './layers/cms'),
    '@payload': path.resolve(__dirname, '../payload/src'),
    '@payload-config': path.resolve(__dirname, '../payload/payload.config.ts'),
    '@payload-types': path.resolve(__dirname, '../payload'),
    '@root': path.resolve(__dirname, './'),
    '~~': path.resolve(__dirname, './disable'),
  },

  app: {
    head: {
      title: 'Nuxt Project Template',
      link: [
        { href: '/favicon.ico', rel: 'icon', type: 'image/ico' },
      ],
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '', hid: 'description' },
      ],
    },
  },

  components: [
    {
      pathPrefix: false,
      path: '@/components',
    },
    {
      pathPrefix: false,
      path: '@/views',
    },
  ],

  devtools: { enabled: true },

  eslint: {
    config: {
      standalone: false,
    },
  },

  experimental: {
    typedPages: true,
  },

  future: {
    compatibilityVersion: 4,
  },

  i18n: {
    baseUrl: 'http://localhost:3000',
    defaultLocale: 'nl',
    experimental: {
      typedOptionsAndMessages: 'default',
      typedPages: true,
    },
    langDir: 'locales',
    locales: [
      { iso: 'en-US', code: 'en', file: 'en.json', language: 'en-US' },
      { iso: 'nl-BE', code: 'nl', file: 'nl.json', language: 'nl-BE' },
      { iso: 'fr-FR', code: 'fr', file: 'fr.json', language: 'fr-FR' },
    ],
    strategy: 'prefix',
  },

  imports: {
    scan: false,

  },
  modules: [
    '@nuxt/eslint',
  ],

  nitro: {
    compressPublicAssets: {
      brotli: true,
    },
    prerender: {
      failOnError: false,
    },
  },
})
