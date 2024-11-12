import { mediaCollections } from '@payload/collections/medias/media.collections'
import { pageCollections } from '@payload/collections/pages/page.collections'
import { productCollections } from '@payload/collections/products/product.collections'
import { userCollections } from '@payload/collections/users/user.collections'

export default [
  ...mediaCollections,
  ...pageCollections,
  ...productCollections,
  ...userCollections,
]
