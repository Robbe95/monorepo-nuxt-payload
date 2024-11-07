import {
  ready,
  subscribe,
  unsubscribe,
} from '@payloadcms/live-preview'
import {
  type Ref,
  ref,
  watchEffect,
} from 'vue'

export function useLivePreview<T>(props: {
  apiRoute?: string
  depth?: number
  initialData: T
  serverURL: string
}): { isLoading: Ref<boolean>, data: Ref<T> } {
  const {
    apiRoute,
    depth,
    initialData,
    serverURL,
  } = props
  const data = ref<T>(initialData) as Ref<T> // Workaround for weird Ref<T> behavior
  const isLoading = ref<boolean>(true)
  const hasSentReadyMessage = ref<boolean>(false)

  function onChange(mergedData: T) {
    data.value = mergedData
    isLoading.value = false
  }

  watchEffect((onCleanup) => {
    const subscription = subscribe({
      apiRoute,
      callback: onChange,
      depth,
      initialData,
      serverURL,
    })

    if (!hasSentReadyMessage.value) {
      hasSentReadyMessage.value = true
      ready({ serverURL })
    }

    onCleanup(() => {
      unsubscribe(subscription)
    })
  })

  return { isLoading, data }
}
