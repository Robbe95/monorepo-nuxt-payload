import { brandCollection } from '@payload/collections/product/brand.collection'
import { categoryCollection } from '@payload/collections/product/category.collection'
import { orderCollection } from '@payload/collections/product/order.collection'
import { productCollection } from '@payload/collections/product/product.collection'

export const productCollections = [
  brandCollection,
  categoryCollection,
  productCollection,
  orderCollection,
]
