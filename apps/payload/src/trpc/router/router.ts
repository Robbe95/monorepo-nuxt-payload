import { authRouter } from '@payload/modules/auth/auth.router'
import { pagesRouter } from '@payload/modules/pages/pages.router'
import { postRouter } from '@payload/modules/posts/posts.router'
import { router } from '@payload/trpc/trpc'

export const appRouter = router({
  auth: authRouter,
  pages: pagesRouter,
  posts: postRouter,
})

export type AppRouter = typeof appRouter
