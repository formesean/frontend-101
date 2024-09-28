import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <h1 className="text-4xl text-[#e1e1e1] font-semibold border-2 p-3 rounded-2xl hover:scale-150 transition-all duration-300 cursor-pointer">Hello World!</h1>

        <Button className="scale-150">
            <Link href="/dashboard">Dashboard</Link>
        </Button>
    </div>
  );
}
