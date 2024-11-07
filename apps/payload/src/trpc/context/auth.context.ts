import { getPayload } from '@payload/utils/getPayload'
import type { inferAsyncReturnType } from '@trpc/server'
import type { CreateNextContextOptions } from '@trpc/server/adapters/next'

export async function createContext({
  req,
  res,
}: CreateNextContextOptions) {
  const headers = req.headers
  const payload = await getPayload()
  // @ts-expect-error This works
  const { user } = await payload.auth({ headers })

  return { req, res, user }
}

export type Context = inferAsyncReturnType<typeof createContext>
