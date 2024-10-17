import { SvelteKitAuth } from "@auth/sveltekit"
import Authentik from "@auth/sveltekit/providers/authentik"
 
export const { handle, signIn } = SvelteKitAuth({
  providers: [Authentik({
    clientId: "xk6H4OipXf8EWIQoO35yOxzhdmqvVpndNNGGxyi4",
    clientSecret: "HAZGfbmZsfvteCe0UQfcPd6DgusA6VPmJoQecwexf3OuwSU9D52wpXADFfCm6e9bXUMXD8w4WloTpP0QvDaaQ8LxxDY0mWcURBNckdI2IJ76pPynZkVJDlVeBvfXe8ig",
    issuer: "https://sso.smartyfeed.me/application/o/optika-test/"
  })],
})