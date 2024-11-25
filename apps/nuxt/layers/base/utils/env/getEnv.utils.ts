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
  SITE_URL: string
  TRPC_BASE_URL: string
} {
  const config = useRuntimeConfig()

  return {
    API_BASE_URL: config.public.apiBaseUrl,
    AUTH_APPLE_IDP_ID: config.public.authAppleIdpId,
    AUTH_BASE_URL: config.public.authBaseUrl,
    AUTH_CLIENT_ID: config.public.authClientId,
    AUTH_GOOGLE_IDP_ID: config.public.authGoogleIdpId,
    AUTH_ISSUER: config.public.authIssuer,
    AUTH_JWKS_ENDPOINT: config.public.authJwksEndpoint,
    AUTH_ORGANIZATION_ID: config.public.authOrganizationId,
    AUTH_PROJECT_ID: config.public.authProjectId,
    ENVIRONMENT: config.public.environment,
    SITE_URL: 'http://localhost:3000',
    TRPC_BASE_URL: config.public.trpcBaseUrl,
  }
}
