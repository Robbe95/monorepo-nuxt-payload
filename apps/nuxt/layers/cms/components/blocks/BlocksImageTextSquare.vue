<script setup lang="ts">
import AppButtonOutline from '@base/components/app/button/AppButtonOutline.vue'
import type { ImageTextSquareBlock } from '@payload/payload-types'

interface Props {
  block: ImageTextSquareBlock
}

defineProps<Props>()
</script>

<template>
  <BlockContainer theme="light">
    <AppContainer>
      <div class="flex flex-col justify-between gap-4 lg:flex-row">
        <div class="flex flex-col gap-8">
          <p class="text-subtext lowercase">
            {{ block.subtitle }}
          </p>
          <h2 class="max-w-[20ch] font-kreon text-title !font-light lowercase leading-[3rem]">
            {{ block.title }}
          </h2>
          <div>
            <AppButtonOutline
              class="w-full lowercase lg:max-w-max"
              variant="secondary-color"
            >
              {{ block.callToAction.label }}
            </AppButtonOutline>
          </div>
        </div>
        <div>
          <CmsImage
            :image="block.firstImage"
            class="w-full bg-cover lg:size-[480px]"
          />
        </div>
      </div>
      <div class="mt-4 lg:-mt-12">
        <div class="flex flex-col items-end justify-between gap-4 lg:flex-row">
          <CmsImage
            :image="block.secondImage"
            class="w-full bg-cover lg:w-1/2"
          />
          <p class="text-subtext lg:max-w-[40ch]">
            {{ block.text }}
          </p>
        </div>
      </div>
    </AppContainer>
  </BlockContainer>
</template>
