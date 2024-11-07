import path from 'node:path'

export default defineNuxtConfig({
  alias: {
    '@auth': path.resolve(__dirname, '../auth'),
    '@base': path.resolve(__dirname, '../base'),
    '@cart': path.resolve(__dirname, '../cart'),
    '@cms': path.resolve(__dirname, '../cms'),
    '@payload': path.resolve(__dirname, '../payload/src'),
    '@payload-types': path.resolve(__dirname, '../payload'),
  },
  components: [
    {
      pathPrefix: false,
      path: '@cms/components',
    },
    {
      pathPrefix: false,
      path: '@cms/views',
    },
  ],
  extends: [
    '../base',
    '../auth',
    '../cart',
  ],
})
