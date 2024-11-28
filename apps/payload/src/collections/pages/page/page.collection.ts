import { heroBlock } from '@payload/blocks/hero.block'
import { imageTextSquareBlock } from '@payload/blocks/imageTextSquare.block'
import { productSelectionBlock } from '@payload/blocks/productSelection.block'
import { projectsBlock } from '@payload/blocks/projects.block'
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
      name: 'blocks',
      blocks: [
        heroBlock,
        imageTextSquareBlock,
        productSelectionBlock,
        projectsBlock,
      ],
      localized: true,
      minRows: 1,
      type: 'blocks',
    },
  ],
  slug: 'pages',
}
