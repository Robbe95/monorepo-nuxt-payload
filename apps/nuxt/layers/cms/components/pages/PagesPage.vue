<script setup lang="ts">
import type { Page } from '@payload-types/payload-types'

interface Props {
  page: Page
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <BlocksRenderer :blocks="page.layout" />
  </div>
</template>
