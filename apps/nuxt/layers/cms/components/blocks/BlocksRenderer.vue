<script setup lang="ts">
import type { Page } from '@payload/payload-types'

interface Props {
  blocks: Page['blocks']
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
      <BlocksHero
        v-else-if="block.blockType === 'hero'"
        :block="block"
      />
      <BlocksImageTextSquare
        v-else-if="block.blockType === 'image-text-square'"
        :block="block"
      />
      <BlocksProductSelection
        v-else-if="block.blockType === 'product-selection'"
        :block="block"
      />
      <BlocksProjects
        v-else-if="block.blockType === 'projects-block'"
        :block="block"
      />
      <BlocksNotSupported
        v-else
        :block-name="block.blockType ?? 'Unknown'"
      />
    </template>
  </div>
</template>
