import { brandCollection } from '@payload/collections/products/brand/brand.collection'
import { categoryCollection } from '@payload/collections/products/category/category.collection'
import { orderCollection } from '@payload/collections/products/order/order.collection'
import { productCollection } from '@payload/collections/products/product/product.collection'

export const productCollections = [
  brandCollection,
  categoryCollection,
  productCollection,
  orderCollection,
]
