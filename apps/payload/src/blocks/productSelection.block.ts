import { getImageFragment } from '@payload/fragments/image.fragment'
import type { Block } from 'payload'

export const productSelectionBlock: Block = {
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
    {
      name: 'products',
      fields: [
        {
          name: 'title',
          required: true,
          type: 'text',
        },
        {
          name: 'url',
          required: true,
          type: 'text',
        },
        getImageFragment({
          name: 'productImage',
          label: 'Image',
        }),
      ],
      required: true,
      type: 'array',
    },
  ],
  interfaceName: 'ProductSelectionBlock',
  labels: {
    plural: 'Product selection blocks',
    singular: 'Product selection block',
  },
  slug: 'product-selection',
}
