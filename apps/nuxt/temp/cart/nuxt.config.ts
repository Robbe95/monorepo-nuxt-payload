import path from 'node:path'

export default defineNuxtConfig({
  alias: {
    '@auth': path.resolve(__dirname, '../auth'),
    '@base': path.resolve(__dirname, '../base'),
    '@cart': path.resolve(__dirname, './'),
  },
  components: [
    {
      pathPrefix: false,
      path: '@cart/components',
    },
    {
      pathPrefix: false,
      path: '@cart/views',
    },
  ],

  extends: [

    '../base',
    '../auth',
  ],
})
