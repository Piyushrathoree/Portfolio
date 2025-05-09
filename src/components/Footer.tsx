"use client";
import { usePathname } from "next/navigation";
import { Heart } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();
  const isContactPage = pathname === "/contact";

  return (
    <footer className={isContactPage ? "max-md:fixed bottom-0 left-0 right-0  max-md:bottom-0 max-md:left-0 max-md:right-0" : ""}>
      <div className="w-full sm:px-[26%] px-4 h-24 max-md:h-32">
        <div className="bg-neutral-900 flex items-start pt-3 justify-between px-5 mx-1 h-24 max-md:h-32 rounded-lg text-neutral-500 text-sm ">
          <div className="hover:text-neutral-400">Portfolio</div>
          <div className="hover:text-neutral-400 flex items-center gap-1">made with <Heart className="w-3 h-3 text-red-500" /></div>
        </div>
      </div>
    </footer>
  );
}
