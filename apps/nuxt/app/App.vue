<script setup lang="ts">
import { VcConfigProvider } from '@wisemen/vue-core'
import { ConfigProvider } from 'reka-ui'

function useIdFunction() {
  return useId()
}
</script>

<template>
  <SeoWrapper>
    <div class="flex w-screen flex-1">
      <div class="w-full">
        <ConfigProvider :use-id="useIdFunction">
          <VcConfigProvider>
            <NuxtLoadingIndicator color="#E94935" />
            <NuxtLayout>
              <NuxtPage />
            </NuxtLayout>
            <Teleport to="#teleports">
              <AppDialogContainer />
              <AppToastContainer />
            </Teleport>
          </VcConfigProvider>
        </ConfigProvider>
      </div>
    </div>
  </SeoWrapper>
</template>
