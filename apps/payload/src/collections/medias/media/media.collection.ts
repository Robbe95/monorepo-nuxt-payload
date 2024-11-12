import type { CollectionConfig } from 'payload'

export const mediaCollection: CollectionConfig = {
  admin: {
    group: 'Media',
  },
  fields: [
    {
      name: 'text',
      type: 'text',
    },
  ],
  slug: 'media',
  upload:
  {
    focalPoint: true,
  },
}
