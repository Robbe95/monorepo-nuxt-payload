import type { CollectionConfig } from 'payload'

export const categoryCollection: CollectionConfig = {
  admin: {
    group: 'Products',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      localized: true,
      type: 'text',
    },
  ],
  slug: 'categories',
}
