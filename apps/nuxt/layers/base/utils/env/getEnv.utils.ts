export function getEnv(): {
  API_BASE_URL: string
  AUTH_APPLE_IDP_ID: string
  AUTH_BASE_URL: string
  AUTH_CLIENT_ID: string
  AUTH_GOOGLE_IDP_ID: string
  AUTH_ISSUER: string
  AUTH_JWKS_ENDPOINT: string
  AUTH_ORGANIZATION_ID: string
  AUTH_PROJECT_ID: string
  ENVIRONMENT: string
} {
  const nuxt = useNuxtApp()

  return {
    API_BASE_URL: nuxt.$config.public.apiBaseUrl,
    AUTH_APPLE_IDP_ID: nuxt.$config.public.authAppleIdpId,
    AUTH_BASE_URL: nuxt.$config.public.authBaseUrl,
    AUTH_CLIENT_ID: nuxt.$config.public.authClientId,
    AUTH_GOOGLE_IDP_ID: nuxt.$config.public.authGoogleIdpId,
    AUTH_ISSUER: nuxt.$config.public.authIssuer,
    AUTH_JWKS_ENDPOINT: nuxt.$config.public.authJwksEndpoint,
    AUTH_ORGANIZATION_ID: nuxt.$config.public.authOrganizationId,
    AUTH_PROJECT_ID: nuxt.$config.public.authProjectId,
    ENVIRONMENT: nuxt.$config.public.environment,
  }
}
