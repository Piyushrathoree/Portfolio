import React from "react";
import { GithubIcon, LinkedinIcon, TwitterIcon, Link2Icon } from "lucide-react";
import { Meteors } from "./magicui/meteors";
import Link from "next/link";

const ShowcaseCard2 = () => {
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
    <div className="md:w-[48%] w-[90%]  h-44 flex flex-col justify-between items-start  bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative overflow-hidden">
      <Meteors className="absolute inset-0 z-0 " number={30} angle={65} />
      <div className="border border-neutral-900 rounded-full bg-neutral-800 text-neutral-200 p-2 md:p-3 max-md:mb-1 ">
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
      </div>
    </div>
  );
};

export default ShowcaseCard2;
