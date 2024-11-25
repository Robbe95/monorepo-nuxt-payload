<script setup lang="ts">
import type { Page } from '@payload/payload-types'

interface Props {
  blocks: Page['layout']
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <template
      v-for="(block) in blocks"
      :key="JSON.stringify(block)"
    >
      <BlocksImageText
        v-if="block.blockType === 'image-text'"
        :block="block"
      />
      <BlocksNotSupported
        v-else
        :block-name="block.blockType ?? 'Unknown'"
      />
    </template>
  </div>
</template>
