/* eslint-disable node/prefer-global/process */
import path from 'node:path'
import { fileURLToPath } from 'node:url'

import { mediaCollections } from '@payload/collections/media/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { productCollections } from '@payload/collections/product/product.collections'
import { userCollections } from '@payload/collections/user/user.collections'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { buildConfig } from 'payload'
import { en } from 'payload/i18n/en'
import { nl } from 'payload/i18n/nl'
import sharp from 'sharp'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    autoLogin: {
      email: 'dev@payloadcms.com',
      password: 'test',
      prefillOnly: true,
    },
    livePreview: {
      collections: [
        'pages',
      ],
      url: ({ collectionConfig, data }) => {
        if (collectionConfig?.slug === 'pages') {
          return `http://localhost:3000/${data.slug}`
        }

        return `http://localhost:3000`
      },
    },
  },

  collections: [
    ...userCollections,
    ...mediaCollections,
    ...pageCollections,
    ...productCollections,
  ],
  cors: [
    'http://localhost:3000',
  ],
  db: postgresAdapter({
    idType: 'uuid',
    pool: {
      connectionString: process.env.POSTGRES_URI ?? '',
    },
  }),
  // editor: slateEditor({}),
  editor: lexicalEditor(),

  /**
   * Payload can now accept specific translations from 'payload/i18n/en'
   * This is completely optional and will default to English if not provided
   */
  i18n: {
    supportedLanguages: { en, nl },
  },
  localization: {
    defaultLocale: 'nl',
    locales: [
      'en',
      'nl',
    ],
  },
  plugins: [],
  secret: process.env.PAYLOAD_SECRET ?? '',

  // for this before reaching 3.0 stable
  sharp,
  typescript: {
    autoGenerate: true,
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  // Sharp is now an optional dependency -
  // if you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.

  // This is temporary - we may make an adapter pattern

  async onInit(payload) {
    const existingUsers = await payload.find({
      collection: 'users',
      limit: 1,
    })

    if (existingUsers.docs.length === 0) {
      await payload.create({
        collection: 'users',
        data: {
          email: 'dev@payloadcms.com',
          password: 'test',
          role: 'admin',
        },
      })
    }
  },
})
