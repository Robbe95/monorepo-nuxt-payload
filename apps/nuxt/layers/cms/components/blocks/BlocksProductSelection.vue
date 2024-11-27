<script setup lang="ts">
import type {
  ProductSelectionBlock,
} from '@payload/payload-types'

interface Props {
  block: ProductSelectionBlock
}

defineProps<Props>()
</script>

<template>
  <BlockContainer theme="light">
    <AppContainer>
      <div class="flex flex-col gap-8">
        <div class="flex flex-col items-center gap-6">
          <span class="text-subtext">
            {{ block.subtitle }}
          </span>
          <span class="max-w-80 text-balance text-center text-title leading-[3rem]">
            {{ block.title }}
          </span>
        </div>
      </div>
    </AppContainer>

    <div class="container mx-auto mt-8">
      <div class="custom-horizontal-scrollbar flex snap-x snap-mandatory flex-row overflow-auto scroll-smooth lg:mr-break-out">
        <div
          v-for="(product, index) in block.products"
          :key="index"
          class="flex-none basis-full snap-start p-2 sm:basis-1/2 lg:basis-auto"
        >
          <!-- TODO: Can this be fixed? -->
          <NuxtLinkLocale
            :to="product.url as any"
            class="focus-ring-black flex flex-col gap-4"
          >
            <CmsImage
              :image="product.productImage"
              class="lg:size-[300px] lg:flex-none"
            />
            <span>
              {{ product.title }}
            </span>
          </NuxtLinkLocale>
        </div>
      </div>
    </div>
  </BlockContainer>
</template>
