import { Meteors } from "@/components/magicui/meteors";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { CopyEmail } from "@/components/CopyMail";
import Cardproject from "@/components/CardProject";
import ShowcaseCard1 from "@/components/showcaseCard1";
import ShowcaseCard2 from "@/components/showcaseCard2";
import ShowcaseCard3 from "@/components/ShowcaseCard3";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";
// import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen w-full overflow-hidden">
      <Meteors number={40} className="absolute inset-0 " />

      <div className="flex mt-24 md:mt-32 flex-col gap-4 w-full items-start  justify-center px-5 ">
        <div className="text-4xl md:text-5xl font-bold text-neutral-200">
          Hey, I&apos;m Piyush,
        </div>
        <div className="text-3xl md:text-4xl font-bold text-neutral-200 flex items-center gap-2">
          A{" "}
          <ContainerTextFlip
            words={["Full Stack Developer", "Software Engineer"]}
            className="text-3xl md:text-4xl font-bold shadow-none py-[2px] rounded-md"
          />
        </div>
        <div className="text-md text-neutral-400 w-full md:w-[69.6%]">
          I&apos;m a developer who enjoys building web applications and
          exploring new technologies — basically, I spend most of my time in
          front of a screen.
        </div>
        <div className="flex gap-4">
          <Button className="bg-neutral-800 text-neutral-200 border hover:scale-110 duration-300 border-neutral-700 rounded-sm hover:bg-neutral-900">
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
        <ShowcaseCard1 />
        <div className="w-full h-[1px] bg-neutral-800 " />
        <div className="w-full flex flex-col md:flex-row gap-7 ml-[14px] mt-10">
          <ShowcaseCard3 />
          <ShowcaseCard2 />
        </div>
        <div className="mt-10" />
      </div>
    </div>
  );
}
