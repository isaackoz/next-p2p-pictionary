import AuthForm from "@/auth/components/auth-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 lg:px-24 text-center">
      <h1 className="text-4xl sm:text-6xl lg:text-8xl font-luckiest [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:5px_black]  text-yellow-400 whitespace-nowrap select-none">
        Next Pictionary
      </h1>
      <p className="text-lg lg:text-2xl">
        A P2P pictionary clone built using NextJS & Supabase
      </p>
      <Link href={"https://www.github.com/isaackoz"} className="underline">
        {`View the source code on Github ->`}
      </Link>
      <div className="mt-12">
        <div className="text-xl">Sign in to play</div>
        <AuthForm />
      </div>
    </main>
  );
}
