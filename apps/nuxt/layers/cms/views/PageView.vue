<script setup lang="ts">
import { usePageQuery } from '@cms/api/query/usePageQuery'
import { useLivePreview } from '@cms/composables/useLivePreview'

import NotFoundView from './NotFoundView.vue'

const route = useRoute('page___en')

const pageName = computed<string>(() => route.params.page)
const pageQuery = usePageQuery({ slug: pageName.value })

const { data } = useLivePreview({
  initialData: pageQuery.data,
})
</script>

<template>
  <div class="w-full">
    <PagesPage
      v-if="data"
      :page="data"
    />
    <NotFoundView v-else />
  </div>
</template>
