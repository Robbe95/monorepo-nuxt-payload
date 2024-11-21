<script setup lang="ts">
import { NavigationMenuLink } from 'reka-ui'

import type { NavigationLink } from '@/types/navigation/navigationLink.type'

defineProps<NavigationLink>()

const localeRoute = useLocalePath()

const { t } = useI18n()

localeRoute({ name: 'page' })

t('')
</script>

<template>
  <NavigationMenuLink as-child>
    <NuxtLinkLocale
      :to="to"
      active-class="link-active"
      class="text-foreground focus-ring group rounded px-1 text-subtext font-medium"
    >
      <div>
        <slot />
      </div>
      <div class="h-px w-full bg-transparent duration-200 group-[.link-active]:bg-primary" />
    </NuxtLinkLocale>
  </NavigationMenuLink>
</template>
