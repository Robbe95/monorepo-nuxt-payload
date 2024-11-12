import type { CollectionConfig } from 'payload'

export const postCollection: CollectionConfig = {
  admin: {
    group: 'Pages',
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'content',
      type: 'textarea',
    },
  ],
  slug: 'posts',
}
