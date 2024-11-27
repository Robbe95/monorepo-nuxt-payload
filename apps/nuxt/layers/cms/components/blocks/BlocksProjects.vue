<script setup lang="ts">
import type { Project, ProjectsBlock } from '@payload/payload-types'
import { VcIcon } from '@wisemen/vue-core'

interface Props {
  block: ProjectsBlock
}

defineProps<Props>()

const { t } = useI18n()
</script>

<template>
  <div class="relative bg-brand-primary pt-24 text-white">
    <AppContainer class="mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between">
      <div class="flex flex-col gap-8 lowercase">
        <p>
          {{ block.subtitle }}
        </p>
        <h2 class="max-w-96 text-title lowercase leading-[3rem]">
          {{ block.title }}
        </h2>
      </div>
      <div>
        <AppButtonOutlineDark class="w-full lg:w-auto">
          {{ t('projects.view_all') }}
        </AppButtonOutlineDark>
      </div>
    </AppContainer>
    <div>
      <AppContainer class="relative z-20">
        <div class="custom-horizontal-scrollbar flex snap-x snap-mandatory flex-row overflow-auto scroll-smooth pb-1">
          <div
            v-for="project in (block.projects as Project[])"
            :key="project.id"
            class="relative w-full flex-none basis-full snap-start"
          >
            <CmsImage
              :image="project.images"
              class="size-full max-h-[60vh] object-cover"
            />
            <NuxtLinkLocale
              :to="(project.url as any) "
              class="focus-ring-white absolute bottom-0 right-0 flex min-w-80 flex-col gap-4 bg-white p-4 text-black"
            >
              <div>
                <p class="lowercase">
                  {{ project.title }}
                </p>
                <p class="lowercase">
                  {{ project.location }}
                </p>
              </div>

              <VcIcon icon="arrowRight" />
            </NuxtLinkLocale>
          </div>
        </div>
      </AppContainer>
    </div>
    <div class="absolute bottom-0 z-0 h-1/2 w-full bg-white" />
  </div>
</template>
