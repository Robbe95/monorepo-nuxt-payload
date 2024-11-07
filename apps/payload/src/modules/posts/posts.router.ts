import { getPosts } from '@payload/modules/posts/queries/getPosts.query'
import { router } from '@payload/trpc/trpc'

export const postRouter = router({
  getPosts,
})
