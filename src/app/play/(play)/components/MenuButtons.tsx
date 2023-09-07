import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function MenuButtons() {
  return (
    <div className="flex flex-col space-y-6 items-center justify-center overflow-visible p-4">
      <Link href={"/play/join"}>
        <Button variant={"cartoon"}>Join lobby</Button>
      </Link>
      <Button variant={"cartoon"}>Host lobby</Button>
      <Link href={"/account"}>
        <Button variant={"cartoon"}>Settings</Button>
      </Link>
    </div>
  );
}
