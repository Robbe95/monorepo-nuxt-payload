import {
  ACCESS_TOKEN_EXPIRATION,
  LOCK_TIME,
  MAX_LOGIN_ATTEMPTS,
} from '@payload/constants/auth.constant'
import type { CollectionConfig } from 'payload'

export const userCollection: CollectionConfig = {
  access: {
    delete: () => false,
    update: ({ req: { user } }) => {
      return user?.role === 'admin'
    },
  },
  admin: {
    group: 'Users',
    useAsTitle: 'email',
  },
  auth: {
    lockTime: LOCK_TIME, // Time period to allow the max login attempts
    maxLoginAttempts: MAX_LOGIN_ATTEMPTS, // Automatically lock a user out after X amount of failed logins
    tokenExpiration: ACCESS_TOKEN_EXPIRATION, // How many seconds to keep the user logged in
    verify: false, // Require email verification before being allowed to authenticate
  },

  fields: [
    {
      name: 'role',
      defaultValue: 'user',
      options: [
        'user',
        'admin',
        'editor',
        'developer',
      ],
      required: true,
      type: 'select',
    },
    {
      hasMany: true,
      name: 'addresses',
      relationTo: 'addresses',
      type: 'relationship',
    },
  ],
  slug: 'users',
}
