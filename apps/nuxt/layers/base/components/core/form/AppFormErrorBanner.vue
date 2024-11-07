<script setup lang="ts" generic="TFormType extends z.ZodType">
import type { Form } from 'formango'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import type { z } from 'zod'

const props = defineProps<{
  form: Form<TFormType>
}>()

const { t } = useI18n()

const isBannerVisible = computed<boolean>(() => {
  return props.form.hasAttemptedToSubmit && props.form.errors != null && props.form.errors._errors != null
})
</script>

<template>
  <AppHeightTransition :duration="200">
    <div v-if="isBannerVisible">
      <div
        class="rounded-input border-destructive bg-destructive/5 mb-4 flex items-center border border-solid px-4 py-3"
      >
        <AppIcon
          class="text-destructive size-5 shrink-0"
          icon="warning"
        />

        <AppText
          class="text-destructive ml-4 max-w-sm"
          variant="subtext"
        >
          {{ t('error.validation_error') }}
        </AppText>
      </div>
    </div>
  </AppHeightTransition>
</template>
