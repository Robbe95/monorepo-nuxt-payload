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
  imageURL: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI5NiIgaGVpZ2h0PSI5NiIgdmlld0JveD0iMCAwIDEwMjQgMTAyNCI+PHBhdGggZmlsbD0id2hpdGUiIGQ9Ik0yODAgNzUyaDgwYzQuNCAwIDgtMy42IDgtOFYyODBjMC00LjQtMy42LTgtOC04aC04MGMtNC40IDAtOCAzLjYtOCA4djQ2NGMwIDQuNCAzLjYgOCA4IDhtMTkyLTI4MGg4MGM0LjQgMCA4LTMuNiA4LThWMjgwYzAtNC40LTMuNi04LTgtOGgtODBjLTQuNCAwLTggMy42LTggOHYxODRjMCA0LjQgMy42IDggOCA4bTE5MiA3Mmg4MGM0LjQgMCA4LTMuNiA4LThWMjgwYzAtNC40LTMuNi04LTgtOGgtODBjLTQuNCAwLTggMy42LTggOHYyNTZjMCA0LjQgMy42IDggOCA4bTIxNi00MzJIMTQ0Yy0xNy43IDAtMzIgMTQuMy0zMiAzMnY3MzZjMCAxNy43IDE0LjMgMzIgMzIgMzJoNzM2YzE3LjcgMCAzMi0xNC4zIDMyLTMyVjE0NGMwLTE3LjctMTQuMy0zMi0zMi0zMm0tNDAgNzI4SDE4NFYxODRoNjU2eiIvPjwvc3ZnPg==',
  interfaceName: 'ProjectsBlock',
  labels: {
    plural: 'Projects blocks',
    singular: 'Projects block',
  },
  slug: 'projects-block',
}
