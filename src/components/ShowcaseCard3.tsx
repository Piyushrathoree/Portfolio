"use client";
import { Pen } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { Particles } from "./magicui/particles";
import Link from "next/link";

const ShowcaseCard3 = () => {
  return (
    <div className="md:w-[46%] w-[90%] h-44  flex flex-col  justify-between items-start bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative">
      <div className="border border-neutral-900 rounded-full bg-neutral-800 text-neutral-200 p-2 md:p-3 max-md:mb-1 ">
        <Pen size={16} />
      </div>
      <div>
        <div className="text-neutral-200 font-bold text-lg">Projects</div>
        <div className="text-neutral-400 font-medium text-[12px]">
          Explore my   projects in web development and beyond.
        </div>
      </div>
      <div>
        <Button className="bg-neutral-800 text-neutral-200 shadow shadow-neutral-700 rounded-sm hover:bg-neutral-900 transition-all duration-300 px-2 md:px-3 max-md:mt-1">
          <Link href="/projects">View Projects</Link>
          
        </Button>
      </div>
      <Particles
        className="absolute inset-0 z-0"
        quantity={20}
        ease={80}
        refresh
      />
    </div>
  );
}

export default ShowcaseCard3;
