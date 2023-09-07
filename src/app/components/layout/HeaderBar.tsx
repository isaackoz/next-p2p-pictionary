import Link from "next/link";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/supabase";
import Script from "next/script";

export default async function HeaderBar() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data: userData, error: userError } = await supabase.auth.getUser();
  let { data, error, status } = await supabase
    .from("profiles")
    .select(`displayname`)
    .eq("id", userData?.user?.id || "")
    .single();

  if (error && status !== 406) {
    throw error;
  }

  return (
    <div className="fixed top-0 left-0 right-0 bg-black text-white">
      <Script async defer src="https://buttons.github.io/buttons.js"></Script>
      <div className="w-full items-end justify-between flex px-12 py-2">
        <div className="flex items-center justify-center [&>span]:flex [&>span]:items-center">
          <a
            className="github-button"
            href="https://github.com/isaackoz/CountryTrivia"
            data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star isaackoz/CountryTrivia on GitHub"
          >
            Star this project on GitHub
          </a>
        </div>
        <form action="/auth/signout" method="post" className="space-x-6">
          {userData.user ? (
            <>
              <span>{`Hello ${data?.displayname}`}</span>
              <button>Sign Out</button>
            </>
          ) : (
            <Link href="/">Sign In</Link>
          )}
        </form>
      </div>
    </div>
  );
}
