import type { CollectionConfig } from 'payload'

export const productCollection: CollectionConfig = {
  admin: {
    group: 'Products',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'description',
      localized: true,
      type: 'text',
    },
    {
      name: 'price',
      required: true,
      type: 'number',
    },
    {
      hasMany: true,
      name: 'images',
      relationTo: 'media',
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'categories',
      relationTo: 'categories',
      type: 'relationship',
    },
    {
      name: 'brand',
      relationTo: 'brands',
      type: 'relationship',
    },
  ],
  slug: 'products',
}
