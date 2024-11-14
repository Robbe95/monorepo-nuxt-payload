import { getPayloadHMR } from '@payloadcms/next/utilities'

import config from '@/payload.config'

export async function getPayload() {
  const payload = await getPayloadHMR({ config })

  return payload
}
