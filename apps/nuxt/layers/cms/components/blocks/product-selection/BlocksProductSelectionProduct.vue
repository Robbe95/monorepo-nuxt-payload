<script setup lang="ts">
import type {
  ProductSelectionBlock,
} from '@payload/payload-types'
import type { UseMouseEventExtractor } from '@vueuse/core'

interface Props {
  product: ProductSelectionBlock['products'][number]
}

const props = defineProps<Props>()
// keep track of my cursor, make #cursor-element follow it

const cursorElement = useTemplateRef<HTMLElement>('cursor-element')
const productElement = useTemplateRef<HTMLElement>('product-element')

function extractor(event: MouseEvent | Touch): ReturnType<UseMouseEventExtractor> {
  if (event instanceof Touch) {
    return
  }

  return [
    event.offsetX,
    event.offsetY,
  ]
}

const mousePosition = useMouse({
  target() {
    return productElement.value
  },
  type: extractor,
})

watch(
  () => mousePosition,
  () => {
    // console.log('mouse position x', mousePosition.x.value)
    // console.log('mouse position y', mousePosition.y.value)

    if (!cursorElement.value) {
      return
    }

    cursorElement.value.style.left = `${mousePosition.x.value}px`
    cursorElement.value.style.top = `${mousePosition.y.value}px`
  },
  { deep: true },
)
</script>

<template>
  <NuxtLinkLocale
    ref="product-element"
    :to="(product.url as any)"
    class="focus-ring-black group relative flex flex-col gap-4 overflow-hidden"
  >
    <CmsImage
      :image="product.productImage"
      class="duration-200 group-hover:brightness-[0.25] lg:size-[300px] lg:flex-none"
    />
    <!-- <div
      ref="cursor-element"
      class="absolute z-50 size-40 bg-green-500"
    /> -->

    <span>
      {{ product.title }}
    </span>
  </NuxtLinkLocale>
</template>
