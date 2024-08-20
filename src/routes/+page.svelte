<script>
    import { SignIn } from "@auth/sveltekit/components"
 </script>

 <div>
   <img src="/img/logo.svg" alt="Company Logo" />
   <SignIn provider="keycloak" signInPage="login" />
 </div>
