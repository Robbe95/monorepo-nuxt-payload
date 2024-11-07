import type { CollectionConfig } from 'payload'

export const orderCollection: CollectionConfig = {
  admin: {
    group: 'Products',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'user',
      relationTo: 'users',
      required: true,
      type: 'relationship',
    },
    {
      hasMany: true,
      name: 'products',
      relationTo: 'products',
      required: true,
      type: 'relationship',
    },
    {
      name: 'status',
      options: [
        'cart',
        'pending',
        'processing',
        'shipped',
        'delivered',
        'cancelled',
      ],
      required: true,
      type: 'select',
    },
    {
      name: 'deliveryAddress',
      relationTo: 'addresses',
      required: true,
      type: 'relationship',
    },
    {
      name: 'shippingAddress',
      relationTo: 'addresses',
      required: true,
      type: 'relationship',
    },
    {
      name: 'remarks',
      type: 'textarea',
    },
    {
      name: 'orderedAt',
      type: 'date',
    },
  ],
  slug: 'orders',
}
