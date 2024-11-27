<script setup lang="ts">
import type { Page } from '@payload/payload-types'

interface Props {
  page: Page
}

defineProps<Props>()
</script>

<template>
  <div class="mb-24 flex flex-col gap-4">
    <BlocksRenderer :blocks="page.blocks" />
  </div>
</template>
