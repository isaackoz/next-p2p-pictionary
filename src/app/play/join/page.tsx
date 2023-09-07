import { Button } from "@/components/ui/button";
import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function Join() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start pt-24 px-4 lg:px-24 text-center">
      <h1 className="text-6xl sm:text-6xl lg:text-8xl font-luckiest [-webkit-text-stroke:2px_black] lg:[-webkit-text-stroke:5px_black]  text-yellow-400 whitespace-nowrap select-none">
        Join Lobby
      </h1>
      <div className="flex flex-col items-center justify-center space-y-4 bg-gray-100 rounded-2xl p-4 w-full max-w-sm mt-12 border-black border-2 relative">
        <div className="absolute top-2 left-4">
          <Link href={"/play"}>
            <MoveLeft size={32} />
          </Link>
        </div>
        <form>
          <label className="text-xl">Lobby ID</label>
          <input
            className="w-full p-1 text-5xl border-black border-2 rounded-lg my-4"
            placeholder="Code"
          />
          <Button variant={"cartoon"}>Join</Button>
        </form>
      </div>
    </main>
  );
}
