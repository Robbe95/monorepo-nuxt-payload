import { getImageFragment } from '@payload/fragments/image.fragment'
import type { Block } from 'payload'

export const heroBlock: Block = {
  fields: [
    {
      name: 'title',
      required: true,
      type: 'text',
    },
    {
      name: 'text',
      required: true,
      type: 'textarea',
    },
    getImageFragment({
      name: 'backgroundImage',
      label: 'Background image',
    }),
  ],
  interfaceName: 'HeroBlock',
  labels: {
    plural: 'Hero blocks',
    singular: 'Hero block',
  },
  slug: 'hero',
}
