import config from '@payload-config'
import { getPayloadHMR } from '@payloadcms/next/utilities'

export async function getPayload() {
  const payload = await getPayloadHMR({ config })

  return payload
}
