import { Button } from "@/src/components/ui/button";
import { Header } from "@/src/components/ui/header";
import { SidebarInset } from "@/src/components/ui/sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <SidebarInset>
      <Header/>
      <div className="flex flex-col items-center justify-center gap-4 p-8">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>
    </SidebarInset>
  );
}
