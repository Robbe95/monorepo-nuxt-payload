<script setup lang="ts">
import { getEnv } from '@base/utils/env/getEnv.utils'
import type { ImageTextBlock } from '@payload/payload-types'

interface Props {
  block: ImageTextBlock
}

const props = defineProps<Props>()

const { TRPC_BASE_URL } = getEnv()

const imageUrl = computed<string>(() => {
  if (typeof props.block.image === 'string') {
    return props.block.image
  }

  return `${TRPC_BASE_URL}/${props.block.image.url}`
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
      <p
        class="text-subtitle font-medium"
      >
        {{ block.title }}
      </p>
      <p
        class="text-body"
      >
        {{ block.text }}
      </p>
    </div>
  </div>
</template>
