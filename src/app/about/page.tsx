import GridBox from "@/components/GridBox";
import { CircleDot, GraduationCap, HandHeart, MapPin } from "lucide-react";
import React from "react";
import ShowcaseCard3 from "@/components/ShowcaseCard3";
import ShowcaseCard4 from "@/components/ShowcaseCard4";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/magicui/dot-pattern";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const items = [
    {
      icon: <GraduationCap size={22} />,
      title: "Background",
      description:
        "Currently a pre-final year student persuing Btech in CSE , and love to code and build new projects",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z"
          />
        </svg>
      ),
      title: "Skills",
      description: "MERN , Next.js , Git , TypeScript , Postgres, MongoDB ",
    },
    {
      icon: <HandHeart size={22} />,
      title: "Interests",
      description: "Exploring new tech, Web3, DevOps, and GenAI.",
    },
  ];

  return (
    <div className="flex flex-col justify-start items-start min-h-screen mt-20 md:py-10 md:pl-10 pl-5 py-5">
      <div className="flex gap-4 items-center justify-center">
        <button className="bg-neutral-800 no-underline group cursor-pointer relative shadow-2xl  rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-900 py-0.5 px-4 ring-1 ring-white/10 ">
            <span className="flex items-center gap-2">
              <MapPin size={14} /> Based in India
            </span>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <button className="bg-neutral-800 no-underline group cursor-pointer relative shadow-2xl  rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full  opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-neutral-900 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Open to Work</span>
            <CircleDot size={14} className="text-emerald-400" />
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
      </div>
      <div className="flex flex-col gap-4 items-start justify-center mt-10 md:mt-14">
        <div className="text-4xl md:text-6xl font-bold text-neutral-200">
          About Me
        </div>

        <div className="text-md text-neutral-400 w-[90%] md:w-[76%]">
          I&apos;m Piyush, A Software Engineer and Full Stack Developer,
          specializing in backend development. With a strong foundation in
          building robust, scalable, and efficient server-side applications, I
          excel at designing APIs, architecting databases, and integrating
          complex systems. My expertise spans the entire development lifecycle,
          but my true strength lies in crafting reliable backend solutions that
          power seamless user experiences.
        </div>
        <Button className="bg-neutral-800 text-neutral-200 shadow shadow-neutral-700 rounded-sm hover:bg-neutral-900 transition-all duration-300 px-2 md:px-3 max-md:mt-1">
          <Link href="#">Download Resume</Link>
        </Button>
        <div className="p-8 text-neutral-400">
          <DotPattern
            className={cn(
              "[mask-image:radial-gradient(300px_circle_at_center,white,transparent)] sm:-ml-45 sm:mt-55 mt-95"
            )}
          />
          <GridBox items={items} />
        </div>
        <hr className="w-full my-4 border-neutral-800 md:-ml-5  " />
        <div className="flex flex-col sm:-ml-7 ml-[10px] md:flex-row gap-4 w-full items-start justify-center mt-6 md:mt-7">
          <ShowcaseCard3 />
          <ShowcaseCard4 />
        </div>
      </div>
    </div>
  );
};

export default page;
