import { SvelteKitAuth } from "@auth/sveltekit"
import Keycloak from "@auth/sveltekit/providers/keycloak"

// const authjsSecret = "+Ad1C0P1iWlcWNdYMYR1ZDHT70+IaQJSRa1LJDH/gnM="

// const kcConfig = {
//     issuer: "http://localhost:8080/auth/realms/chiron",
//     clientId: "structural-heart",
//     clientSecret: "uSSanmFmg62UYAEcpidMLEbkqruFt2mk"
// }

export const { handle, signIn } = SvelteKitAuth({
    providers: [Keycloak]
})
