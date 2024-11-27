import { getButtonFragment } from '@payload/fragments/button.fragment'
import { getImageFragment } from '@payload/fragments/image.fragment'
import type { Block } from 'payload'

export const imageTextSquareBlock: Block = {
  fields: [
    {
      fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          name: 'subtitle',
          required: true,
          type: 'text',
        },
        getButtonFragment({
          name: 'callToAction',
          label: 'Call-To-Action',
        }),
        getImageFragment({
          name: 'firstImage',
          label: 'Image',
        }),
      ],
      label: 'First group',
      type: 'collapsible',
    },
    {
      fields: [
        {
          name: 'text',
          required: true,
          type: 'textarea',
        },
        getImageFragment({
          name: 'secondImage',
          label: 'Image',
        }),
      ],
      label: 'Second group',
      type: 'collapsible',
    },
  ],
  interfaceName: 'ImageTextSquareBlock',
  labels: {
    plural: 'Image Text Square Blocks',
    singular: 'Image Text Square Block',
  },
  slug: 'image-text-square',
}
