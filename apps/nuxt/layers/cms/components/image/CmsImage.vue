<script setup lang="ts">
import { getEnv } from '@base/utils/env/getEnv.utils'
import type { Media } from '@payload/payload-types'

interface Props {
  image: string | Media
}
const props = defineProps<Props>()

const { TRPC_BASE_URL } = getEnv()

const imageText = computed<string>(() => {
  if (typeof props.image === 'string') {
    return ''
  }

  return props.image.text ?? ''
})

const imageUrl = computed<string>(() => {
  if (typeof props.image === 'string') {
    return props.image
  }

  return `${TRPC_BASE_URL}/${props.image.url}`
})
</script>

<template>
  <img
    :src="imageUrl"
    :alt="imageText"
  >
</template>
