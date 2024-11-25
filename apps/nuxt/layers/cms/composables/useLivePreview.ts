import { getEnv } from '@base/utils/env/getEnv.utils'
import {
  ready,
  subscribe,
  unsubscribe,
} from '@payloadcms/live-preview'
/**
 * Vue composable to implement Payload CMS Live Preview.
 *
 * {@link https://payloadcms.com/docs/live-preview/frontend View the documentation}
 */
export function useLivePreview<T>(props: {
  initialData: Ref<T>
}): {
    isLoading: Ref<boolean>
    data: Ref<T>
  } {
  const { initialData } = props
  const { TRPC_BASE_URL } = getEnv()

  const data = ref<T>(toRaw(initialData.value)) as Ref<T>
  const isLoading = ref<boolean>(true)
  const hasSentReadyMessage = ref<boolean>(false)

  watch(initialData, () => {
    data.value = toRaw(initialData.value)
  })

  function onChange(mergedData: T) {
    data.value = mergedData
    isLoading.value = false
  }

  let subscription: (event: MessageEvent) => void

  onMounted(() => {
    subscription = subscribe({
      callback: onChange,
      depth: 10,
      initialData: toRaw(initialData.value),
      serverURL: TRPC_BASE_URL,
    })

    if (!hasSentReadyMessage.value) {
      hasSentReadyMessage.value = true

      ready({
        serverURL: TRPC_BASE_URL,
      })
    }
  })

  onUnmounted(() => {
    unsubscribe(subscription)
  })

  return {
    isLoading,
    data,
  }
}
