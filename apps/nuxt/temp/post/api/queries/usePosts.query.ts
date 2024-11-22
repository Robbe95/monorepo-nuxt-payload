import { useQuery } from '@base/composables/query/useQuery'
import { postQueryKeys } from '@root/layers/post/api/query-keys/post.queryKeys'
import { PostService } from '@root/layers/post/api/services/post.service'

export function usePostsQuery() {
  return useQuery({
    queryFn: async () => {
      const data = await PostService.getPosts()

      return data
    },
    queryKey: postQueryKeys.index.queryKey,
  })
}
