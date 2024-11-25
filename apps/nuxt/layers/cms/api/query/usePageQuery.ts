import { useTrpc } from '@base/composables/api/useTrpc'
import { useQuery } from '@base/composables/query/useQuery'
import { pageQueryKey } from '@root/layers/cms/api/query-key/page.queryKey'

export function usePageQuery({ slug }: { slug: string }) {
  const trcp = useTrpc()

  return useQuery({
    queryFn: async () => {
      const data = await trcp.pages.getPageBySlug.query({ slug })

      return data
    },
    queryKey: pageQueryKey.detail(slug).queryKey,
  })
}
