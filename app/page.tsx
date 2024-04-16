import Image from "next/image";
import { Poppins } from "next/font/google"
import { cn } from "@/lib/utils"

const font = Poppins({
  subsets: ['latin'],
  weight: ['600']
})

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6">
        <div className="flex items-center">
          <Image src="https://emojicdn.elk.sh/🔐?style=apple" width={60} height={60} alt="🔐" />
          <h1 className={cn("text-6xl font-semibold drop-shadow-md text-white", font.className)}>
            Auth
          </h1>
        </div>
      </div>
    </main>
  );
}
