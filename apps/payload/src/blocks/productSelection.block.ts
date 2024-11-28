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
  imageURL: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgdmlld0JveD0iMCAwIDIwNDggMjA0OCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Im05NjAgMTIwbDgzMiA0MTZ2MTA0MGwtODMyIDQxNWwtODMyLTQxNVY1MzZ6bTYyNSA0NTZMOTYwIDI2NEw3MTkgMzg0bDYyMSAzMTR6TTk2MCA4ODhsMjM4LTExOGwtNjIyLTMxNGwtMjQxIDEyMHpNMjU2IDY4MHY4MTZsNjQwIDMyMHYtODE2em03NjggMTEzNmw2NDAtMzIwVjY4MGwtNjQwIDMyMHoiLz48L3N2Zz4=',
  interfaceName: 'ProductSelectionBlock',
  labels: {
    plural: 'Product selection blocks',
    singular: 'Product selection block',
  },
  slug: 'product-selection',
}
