import { getPayload } from '@payload/utils/getPayload.util'
import type { AuthStrategy } from 'payload'

export const USER_NOT_AUTHENTICATED = {
  user: null,
}
export const zitadalStrategy: AuthStrategy = {
  name: 'zitadel',
  authenticate: async (ctx) => {
    const payload = await getPayload()

    // const authorizationHeader = ctx.headers.get('Authorization')
    // const bearerToken = authorizationHeader?.split(' ')[1]

    // if (bearerToken == null) {
    //   return USER_NOT_AUTHENTICATED
    // }

    // const jwk = createRemoteJWKSet(new URL(ENV.AUTH_JWKS_ENDPOINT))

    // const jwtVerifyResponse = await jwtVerify(bearerToken, jwk, {
    //   issuer: ENV.AUTH_ISSUER,
    //   audience: ENV.AUTH_PROJECT_ID,
    // })

    // const userEmail = jwtVerifyResponse.payload.email as string

    const users = await payload.find({
      collection: 'users',
    })

    const singleUser = users.docs[0]

    // if (singleUser == null) {
    //   await payload.create({
    //     collection: 'users',
    //     data: {
    //       email: userEmail,
    //       password: 'test',
    //       role: 'user',
    //     },
    //   })

    //   return USER_NOT_AUTHENTICATED
    // }

    return {
      user: {
        id: singleUser.id,
        collection: 'users',
        email: singleUser.email,
      },
    }
  },

}
