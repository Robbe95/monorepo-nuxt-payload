import { imageTextBlock } from '@payload/blocks/imageText.block'
import { imageTextSquareBlock } from '@payload/blocks/imageTextSquare.block'
import { textBlock } from '@payload/blocks/text.block'
import type { CollectionConfig } from 'payload'

export const pageCollection: CollectionConfig = {
  admin: {
    group: 'Pages',
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
      name: 'slug',
      type: 'text',
    },
    {
      name: 'layout',
      blocks: [
        imageTextBlock,
        textBlock,
        imageTextSquareBlock,
      ],
      localized: true,
      minRows: 1,
      type: 'blocks',
    },
  ],
  slug: 'pages',
}
