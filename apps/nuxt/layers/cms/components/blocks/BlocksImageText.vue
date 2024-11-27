<script setup lang="ts">
import type { ImageTextBlock } from '@payload/payload-types'

interface Props {
  block: ImageTextBlock
}

defineProps<Props>()
</script>

<template>
  <div
    v-if="block.blockType === 'image-text'"
    class="grid grid-cols-2 items-center justify-center gap-4"
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
