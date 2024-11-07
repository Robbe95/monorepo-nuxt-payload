<script setup lang="ts">
import type { ImageTextBlock } from '@payload-types/payload-types'

interface Props {
  block: ImageTextBlock
}

const props = defineProps<Props>()

const baseUrl = useNuxtApp().$config.public.trcpBaseUrl

const imageUrl = computed<string>(() => {
  if (typeof props.block.image === 'string') {
    return props.block.image
  }

  return `${baseUrl}/${props.block.image.url}`
})
</script>

<template>
  <div
    v-if="block.blockType === 'image-text'"
    class="grid grid-cols-2 items-center justify-center gap-4"
  >
    <img
      :src="imageUrl"
    >
    <div class="flex flex-col gap-2">
      <AppText
        variant="subtitle"
        class="font-medium"
      >
        {{ block.title }}
      </AppText>
      <AppText
        variant="body"
      >
        {{ block.text }}
      </AppText>
    </div>
  </div>
</template>
