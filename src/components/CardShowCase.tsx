import {
  Share,
  NotebookPen,
  Pen,
  Link2Icon,
  TwitterIcon,
  LinkedinIcon,
  GithubIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

import { Particles } from "./magicui/particles";
import { Meteors } from "./magicui/meteors";

const CardShowCase = () => {
  return (
    <div className="w-full md:h-[20vh] bg-transparent border-none flex items-center justify-center">
      <div className="w-[99%] max-md:h-[28vh] min-h-[16vh] flex flex-col items-start pt-5 px-5 bg-neutral-900 shadow-neutral-700 shadow rounded-lg  ">
        <div className="flex items-center justify-between w-full pr-2 mb-2">
          <div className="text-neutral-200 font-bold text-xl">Thoughts</div>
          <Link href="/Blogs">
            <Share className="w-4 h-4 text-neutral-400 hover:text-neutral-200 transition-all duration-300" />
          </Link>
        </div>
        <div className="text-neutral-400 font-medium text-sm">
          Sharing experiences, knowledge and videos on system design & tech.
        </div>
        <div className="grid md:grid-cols-2 gap-2 w-full ">
          <div className="text-neutral-400 font-medium flex items-center gap-2  border-neutral-700 border-1 rounded-md  bg-transparent hover:bg-neutral-800 transition-all duration-300 cursor-pointer px-3 py-2 mt-3 ">
            <div>
              <NotebookPen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-neutral-200 font-medium text-sm truncate overflow-hidden whitespace-nowrap">
                Best Coding Practices for Modern .....
              </div>
              <div className="text-neutral-400 font-medium text-[12px] truncate overflow-hidden whitespace-nowrap">
                A comprehensive guide to coding best .....
              </div>
            </div>
          </div>
          <div className="text-neutral-400 font-medium flex items-center gap-2  border-neutral-700 border-1 rounded-md  bg-transparent hover:bg-neutral-800 transition-all duration-300 cursor-pointer px-3 py-2 mt-3 ">
            <div>
              <NotebookPen className="w-4 h-4" />
            </div>
            <div>
              <div className="text-neutral-200 font-medium text-sm truncate overflow-hidden whitespace-nowrap">
                Best Coding Practices for Modern .....
              </div>
              <div className="text-neutral-400 font-medium text-[12px] truncate overflow-hidden whitespace-nowrap">
                A comprehensive guide to coding.....
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CardShowCase2 = () => {
  const socials = [
    {
      name: "Twitter",
      icon: <TwitterIcon />,
      link: "https://x.com/__PiyushRathore",
    },
    {
      name: "LinkedIn",
      icon: <LinkedinIcon />,
      link: "https://linkedin.com/in/piyushrathore--",
    },
    {
      name: "GitHub",
      icon: <GithubIcon />,
      link: "https://github.com/Piyushrathoree",
    },
  ];
  return (
    <div className="w-full h-[19vh] bg-transparent border-none flex max-md:flex-col max-md:mt-32 mt-8 items-center justify-center gap-5 max-md:mb-20">
      <div className="md:w-[48%] h-full flex flex-col  justify-between items-start bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative">
        <div className="border border-neutral-900 rounded-full bg-neutral-800 text-neutral-200 p-2 md:p-3 max-md:mb-1 ">
          <Pen size={16} />
        </div>
        <div>
          <div className="text-neutral-200 font-bold text-lg">Projects</div>
          <div className="text-neutral-400 font-medium text-[12px]">
            Explore my diverse projects in web development and beyond.
          </div>
        </div>
        <div>
          <Button className="bg-neutral-800 text-neutral-200 shadow shadow-neutral-700 rounded-sm hover:bg-neutral-900 transition-all duration-300 px-2 md:px-3 max-md:mt-1">
            view Projects
          </Button>
        </div>
        <Particles
          className="absolute inset-0 z-0"
          quantity={20}
          ease={80}
          refresh
        />
      </div>

      {/* second card */}
      <div className="md:w-[48%] h-full flex flex-col justify-between items-start bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative md:overflow-hidden">
        <div className="max-md:hidden">
          <Meteors className="absolute inset-0 z-0 " number={40} angle={65} />
        </div>
        <div className="border border-neutral-900 rounded-full bg-neutral-800 text-neutral-200 p-2 md:p-3 max-md:mb-1 md:-mt-9">
          <Link2Icon size={16} />
        </div>
        <div className="md:-mt-4">
          <div className="text-neutral-200 font-bold text-lg">
            Let&apos;s Connect
          </div>
          <div className="text-neutral-400 font-medium text-[12px]">
            Explore my diverse projects in web development and beyond.
          </div>
        </div>
        <div>
          <div className="flex items-center gap-3 md:-mt-3 max-md:mt-2 ">
            {socials.map((social) => (
              <Link
                href={social.link}
                key={social.name}
                className="text-neutral-500 hover:text-neutral-200 transition-all duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>{" "}
        <Particles
          className="absolute inset-0 z-0 md:hidden"
          quantity={20}
          ease={80}
          refresh
        />
      </div>
    </div>
  );
};
export { CardShowCase, CardShowCase2 };
