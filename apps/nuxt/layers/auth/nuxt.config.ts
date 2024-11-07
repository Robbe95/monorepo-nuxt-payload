import path from 'node:path'

export default defineNuxtConfig({
  alias: {
    '@base': path.resolve(__dirname, '../base'),
  },
  components: [
    {
      pathPrefix: false,
      path: '@auth/components',
    },
    {
      pathPrefix: false,
      path: '@auth/views',
    },
  ],

  extends: [
    '../base',
  ],

})
