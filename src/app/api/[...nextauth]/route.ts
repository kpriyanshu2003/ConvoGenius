import NextAuth from "next-auth"
import { SupabaseAdapter } from "@auth/supabase-adapter"

// For more information on each option (and a full list of options) go to
// https://authjs.dev/reference/core#authconfig
export default NextAuth({
  // https://authjs.dev/reference/core/providers
  providers: [...],
  adapter: SupabaseAdapter({
    url: process.env.NEXT_PUBLIC_SUPABASE_URL,
    secret: process.env.SUPABASE_SERVICE_ROLE_KEY,
  }),
  // ...
})