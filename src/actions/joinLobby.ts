"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/supabase";

export default async function joinLobby(formData: FormData) {
  const supabase = createServerActionClient<Database>(
    { cookies },
    { supabaseKey: process.env.SUPABASE_SERVICE_KEY }
  );
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    return { message: userError, status: 500 };
  }

  return { message: "Joined lobby!", status: 200 };
}
