import { Meteors } from "@/components/magicui/meteors";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/CopyMail";
import Cardproject from "@/components/CardProject";
import { CardShowCase, CardShowCase2 } from "@/components/CardShowCase";
import { NavDock } from "@/components/NavDock";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Meteors number={40} />
      <Navbar />
      <div className="flex mt-24 md:mt-32 flex-col gap-4 w-full items-start justify-center px-5 ">
        <div className="text-4xl md:text-5xl font-bold text-neutral-200">
          Hey, I&apos;m Piyush,
        </div>
        <div className="text-3xl md:text-4xl font-bold text-neutral-200">
          A Full-Stack Developer .
        </div>
        <div className="text-md text-neutral-400 w-full md:w-[69.6%]">
          I&apos;m a developer who enjoys building web applications and
          exploring new technologies — basically, I spend most of my time in
          front of a screen.
        </div>
        <div className="flex gap-4">
          <Button className="bg-neutral-800 text-neutral-200 border hover:scale-110 duration-300 border-neutral-700 rounded-sm hover:bg-neutral-700">
            <Link href="/about">About</Link>
          </Button>
          <CopyEmail />
        </div>
        {/* Bento grid Recent work listing */}
        <div className="text-2xl text-neutral-200 font-bold mt-14 ">
          Recent Work
        </div>
        <div className=" justify-between w-full gap-10 flex flex-col md:flex-row ">
          <Cardproject />
          <Cardproject />
        </div>

        <div className="w-full h-[1px] bg-neutral-800 mt-14" />
        <CardShowCase />
        <div className="w-full h-[1px] bg-neutral-800 " />
        <CardShowCase2 />
        <div className="mt-24" />
        <NavDock />
      </div>
    </div>
  );
}
