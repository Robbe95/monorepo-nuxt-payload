import type { Block } from 'payload'

export const projectsBlock: Block = {
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
      hasMany: true,
      name: 'projects',
      admin: {
        isSortable: true,
      },
      relationTo: 'projects',
      required: true,
      type: 'relationship',

    },
  ],
  interfaceName: 'ProjectsBlock',
  labels: {
    plural: 'Projects blocks',
    singular: 'Projects block',
  },
  slug: 'projects-block',
}
