import { publicProcedure } from '@payload/trpc/procedures/public.procedure'
import { getPayload } from '@payload/utils/getPayload'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'

export const getPageBySlug = publicProcedure
  .input(z.object({
    slug: z.string(),
  }))
  .query(async ({ input }) => {
    const payload = await getPayload()
    const paginatedPages = await payload.find({
      collection: 'pages',
      where: {
        slug: {
          equals: input.slug,
        },
      },
    })

    if (paginatedPages.docs.length === 0) {
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: 'This page does not exist',
      })
    }

    return paginatedPages.docs[0]
  })
