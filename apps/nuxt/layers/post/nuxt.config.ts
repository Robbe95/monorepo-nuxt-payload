import path from 'node:path'

export default defineNuxtConfig({
  alias: {
    '@auth': path.resolve(__dirname, '../auth'),
    '@base': path.resolve(__dirname, '../base'),
    '@post': path.resolve(__dirname, './'),
  },
  components: [
    {
      pathPrefix: false,
      path: '@post/components',
    },
    {
      pathPrefix: false,
      path: '@post/views',
    },
  ],

  extends: [
    '../base',
    '../auth',
  ],
})
