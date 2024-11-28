<script setup lang="ts">
import AppButtonOutline from '@base/components/app/button/AppButtonOutline.vue'
import type { ImageTextSquareBlock } from '@payload/payload-types'

interface Props {
  block: ImageTextSquareBlock
}

defineProps<Props>()
</script>

<template>
  <BlocksContainer theme="light">
    <AppContainer>
      <div class="grid justify-between gap-4 lg:grid-cols-[0.6fr,0.4fr] ">
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
            class="aspect-square w-full bg-cover"
          />
        </div>
      </div>
      <div class="mt-4 w-full lg:-mt-12">
        <div class="grid w-full items-end justify-between gap-4 lg:grid-cols-[0.6fr,0.4fr]">
          <CmsImage
            :image="block.secondImage"
            class="w-full bg-cover"
          />
          <p class="text-end text-subtext lg:max-w-[40ch]">
            {{ block.text }}
          </p>
        </div>
      </div>
    </AppContainer>
  </BlocksContainer>
</template>
