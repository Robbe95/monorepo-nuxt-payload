import { useTrpc } from '@auth/api/useTrpc'

export const PostService = {
  async getPosts() {
    const trpc = useTrpc()
    const response = await trpc.posts.getPosts.query()

    return response
  },
}
