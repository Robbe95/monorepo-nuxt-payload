<script setup lang="ts">
import type { Page } from '@payload-types/payload-types'

interface Props {
  blocks: Page['layout']
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <template
      v-for="block in blocks"
      :key="block.id"
    >
      <BlocksImageText
        v-if="block.blockType === 'image-text'"
        :block="block"
      />
      <BlocksNotSupported v-else />
    </template>
  </div>
</template>
