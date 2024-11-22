import type { UserId } from '@auth/models/current-user/currentUserId.model'
import type { User } from '@payload/payload-types'

import type { CurrentUser } from './models/current-user/currentUser.model'

export class AuthTransformer {
  static toCurrentUser(dto: User): CurrentUser {
    return {
      id: dto.id as UserId,
      email: dto.email,
      role: dto.role,
    }
  }
}
