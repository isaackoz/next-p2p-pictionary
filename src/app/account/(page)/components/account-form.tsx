"use client";
import { useCallback, useEffect, useState } from "react";
import { Database } from "@/types/supabase";
import {
  Session,
  createClientComponentClient,
} from "@supabase/auth-helpers-nextjs";
import { Button } from "@/components/ui/button";
import deleteSelf from "@/actions/deleteSelf";
import Link from "next/link";
import { MoveLeft } from "lucide-react";

export default function AccountForm({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient<Database>();
  const [loading, setLoading] = useState(true);
  const [displayname, setDisplayname] = useState<string | null>(null);
  const user = session?.user;

  async function onDelete(formData: FormData) {
    const { message, status } = await deleteSelf(formData);
    if (status === 200) {
      alert(message);
      window.location.href = "/";
    } else {
      alert(message);
    }
  }

  const getProfile = useCallback(async () => {
    try {
      setLoading(true);

      let { data, error, status } = await supabase
        .from("profiles")
        .select(`displayname`)
        .eq("id", user?.id || "")
        .single();

      if (error && status !== 406) {
        throw error;
      }

      if (data) {
        setDisplayname(data.displayname);
      }
    } catch (error) {
      alert("Error loading user data!");
    } finally {
      setLoading(false);
    }
  }, [user, supabase]);

  useEffect(() => {
    getProfile();
  }, [user, getProfile]);

  async function updateProfile({
    displayname,
  }: {
    displayname: string | null;
  }) {
    try {
      setLoading(true);

      let { error } = await supabase.from("profiles").upsert({
        id: user?.id as string,
        displayname,
        updated_at: new Date().toISOString(),
      });
      if (error) throw error;
      alert("Profile updated!");
    } catch (error) {
      console.log(error);
      alert(
        `Error updating the data!\n\nDisplay name must be greater than 3 characters and less than 25 characters.`
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 lg:px-24 text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-luckiest [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:5px_black]  text-yellow-400 whitespace-nowrap select-none">
        Settings
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-2xl p-4 w-full max-w-sm mt-12 border-black border-2 relative">
        <div className="absolute top-2 left-4">
          <Link href={"/play"}>
            <MoveLeft size={32} />
          </Link>
        </div>
        <div className="flex justify-between w-full items-center pt-4">
          <label htmlFor="email">Email</label>
          <input id="email" type="text" value={session?.user.email} disabled />
        </div>
        <div className="flex justify-between w-full items-center">
          <label htmlFor="displayname">Display name</label>
          <input
            id="displayname"
            type="text"
            className="border-2 border-black rounded-lg px-1 bg-inherit"
            value={displayname || ""}
            onChange={(e) => setDisplayname(e.target.value)}
          />
        </div>

        <div className="w-full pt-6">
          <Button
            className="text-sm"
            variant={"cartoon"}
            color="secondary"
            hsl={"30"}
            onClick={() => updateProfile({ displayname })}
            disabled={loading}
          >
            {loading ? "Loading ..." : "Update"}
          </Button>
        </div>

        <div className="w-full">
          <form
            action="/auth/signout"
            method="post"
            className="flex justify-around w-full"
          >
            <button className="button block" type="submit">
              Sign out
            </button>
            <button
              type="submit"
              className="text-red-500"
              formAction={onDelete}
              onClick={(e) => {
                if (
                  !confirm(
                    "Are you sure you want to delete your account?\n\nThis will delete all the data associated with this account.\n\nThis action cannot be undone."
                  )
                ) {
                  e.preventDefault();
                }
              }}
            >
              Delete account
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
