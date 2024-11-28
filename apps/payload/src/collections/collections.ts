import { mediaCollections } from '@payload/collections/medias/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { projectCollections } from '@payload/collections/projects/projects.collections'
import { userCollections } from '@payload/collections/users/user.collections'

export default [
  ...mediaCollections,
  ...pageCollections,
  ...userCollections,
  ...projectCollections,
]
