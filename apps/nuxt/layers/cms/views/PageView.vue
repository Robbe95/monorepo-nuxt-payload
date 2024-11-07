<script setup lang="ts">
import { useTrpc } from '@auth/api/useTrpc'
import { useLivePreview } from '@cms/composables/useLivePreview'
import type { Page } from '@payload-types/payload-types'

import NotFoundView from './NotFoundView.vue'

const trcp = useTrpc()
const page = ref<Page | null>(null)
const baseUrl = useNuxtApp().$config.public.trcpBaseUrl

async function getPage() {
  const pageResponse = await trcp.pages.getPageBySlug.query({
    slug: 'test',
  })

  if (pageResponse == null) {
    return
  }

  page.value = pageResponse
}

await getPage()

const { data } = useLivePreview({
  depth: 1,
  initialData: page.value,
  serverURL: `${baseUrl}`,
})
</script>

<template>
  <div class="w-full">
    <NotFoundView v-if="!data" />
    <PagesPage
      v-else
      :page="data"
    />
  </div>
</template>
