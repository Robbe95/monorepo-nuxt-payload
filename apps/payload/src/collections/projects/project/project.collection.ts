import { getImageFragment } from '@payload/fragments/image.fragment'
import type { CollectionConfig } from 'payload'

export const projectCollection: CollectionConfig = {
  admin: {
    group: 'Projects',
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
      name: 'location',
      localized: true,
      required: true,
      type: 'text',
    },
    {
      name: 'url',
      required: true,
      type: 'text',
    },
    getImageFragment({
      name: 'images',
      label: 'Images',
    }),
  ],
  slug: 'projects',
}
