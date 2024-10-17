import { SvelteKitAuth } from "@auth/sveltekit"
import Authentik from "@auth/sveltekit/providers/authentik"
import { env } from '$env/dynamic/private';

export const { handle, signIn, signOut } = SvelteKitAuth(async (event) => {
  const authOptions = {
    providers: [Authentik({
      clientId: env.AUTH_AUTHENTIK_ID,
      clientSecret: env.AUTH_AUTHENTIK_SECRET,
      issuer: env.AUTH_AUTHENTIK_ISSUER
    })],
    secret: env.AUTH_SECRET,
    trustHost: true
  }
  return authOptions
})