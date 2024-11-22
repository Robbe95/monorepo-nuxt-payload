import { z } from 'zod'

import { userIdSchema } from './currentUserId.model'

export const currentUserSchema = z.object({
  id: userIdSchema,
  email: z.string().email(),
  role: z.enum([
    'user',
    'admin',
    'editor',
    'developer',
  ]),
})

export type CurrentUser = z.infer<typeof currentUserSchema>
