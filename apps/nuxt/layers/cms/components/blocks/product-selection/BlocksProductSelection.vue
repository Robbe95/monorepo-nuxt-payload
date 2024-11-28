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
  <BlocksContainer theme="light">
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
          <BlocksProductSelectionProduct
            :product="product"
          />
        </div>
      </div>
    </div>
  </BlocksContainer>
</template>
