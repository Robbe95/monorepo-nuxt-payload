import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/getPayload'

export const getPosts = publicProcedure

  .query(async () => {
    const payload = await getPayload()
    const paginatedPosts = await payload.find({
      collection: 'posts',
    })

    return paginatedPosts
  })
