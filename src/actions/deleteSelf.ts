"use server";

import { cookies } from "next/headers";
import { createServerActionClient } from "@supabase/auth-helpers-nextjs";

import { Database } from "@/types/supabase";

export default async function deleteSelf(formData: FormData) {
  const supabase = createServerActionClient<Database>(
    { cookies },
    { supabaseKey: process.env.SUPABASE_SERVICE_KEY }
  );
  const { data: userData, error: userError } = await supabase.auth.getUser();
  if (userError) {
    return { message: userError, status: 500 };
  }

  const { data: deleteData, error: deleteError } =
    await supabase.auth.admin.deleteUser(userData.user.id);
  console.log(deleteData, deleteError);
  if (deleteError) {
    return { message: deleteError, status: 500 };
  }

  return { message: "Successfully deleted account!", status: 200 };
}
