import type { CollectionConfig } from 'payload'

export const brandCollection: CollectionConfig = {
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
  slug: 'brands',
}
