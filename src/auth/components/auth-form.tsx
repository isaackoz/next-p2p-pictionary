"use client";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";

export default function AuthForm() {
  const supabase = createClientComponentClient<Database>();

  return (
    <Auth
      supabaseClient={supabase}
      view="sign_in"
      onlyThirdPartyProviders={true}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              inputLabelText: "#000",
              brand: "#FACC15",
              brandAccent: "#000",
              brandButtonText: "black",
            },
          },
          dark: {
            colors: {
              brandButtonText: "black",
              defaultButtonBackgroundHover: "#FACC15",
            },
          },
        },
      }}
      theme="dark"
      showLinks={false}
      providers={["google", "discord", "github"]}
      redirectTo="http://localhost:3000/auth/callback"
    />
  );
}
