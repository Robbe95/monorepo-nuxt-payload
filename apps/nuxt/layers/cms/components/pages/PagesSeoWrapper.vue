<script setup lang="ts">
import type { Page } from '@payload/payload-types'

const props = defineProps<{
  page: Page
}>()
const route = useRoute()
const { t } = useI18n()

const head = useLocaleHead({
  dir: true,
  lang: true,
  seo: true,
})

useHead(() => ({
  htmlAttrs: {
    lang: head.value.htmlAttrs!.lang,
  },
}))
</script>

<template>
  <Html
    :lang="head.htmlAttrs!.lang"
    :dir="head.htmlAttrs?.dir"
  >
    <Head>
      <Title>{{ page.meta?.title }}</Title>
      <template
        v-for="link in head.link"
        :key="link.id"
      >
        <Link
          :id="link.id"
          :rel="link.rel"
          :href="link.href"
          :hreflang="link.hreflang"
        />
      </template>
      <Meta
        :content="page.meta?.description"
        name="description"
      />
      <template
        v-for="meta in head.meta"
        :key="meta.id"
      >
        <Meta
          :id="meta.id"
          :property="meta.property"
          :content="meta.content"
        />
      </template>

      <Body>
        <slot />
      </Body>
    </Head>
  </Html>
</template>
