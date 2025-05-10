import ContactForm from "@/components/ContactForm";
import { GridPattern } from "@/components/magicui/grid-pattern";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { cn } from "@/lib/utils";
import {
  GithubIcon,
  Link2Icon,
  LinkedinIcon,
  Mail,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const page = () => {
  // const handleSubmit = () =>{}

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
    <div className="h-[100vh] md:h-[90vh] flex flex-col  items-center justify-center  max-md:pl-[2px] overflow-y-hidden">
      <div className="hidden md:block">
        <div className="text-3xl text-neutral-300 mt-12 md:mt-24 absolute left-[27%]  max-md:left-[3%] ">
          Let&apos;s Connect....
        </div>
      </div>
      <div className="w-full max-md:w-[98%] h-[100vh] md:h-full top-22 md:top-36  rounded-xl   item-start  justify-center pt-1 md:pt-10 relative">
        <GridPattern
          width={50}
          height={50}
          x={-1}
          y={-1}
          strokeDasharray={"4 2"}
          className={cn(
            "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)] hidden md:block w-full h-full"
          )}
        />
        <div className="absolute md:left-22 left-5 text-lg  text-neutral-300 flex gap-2 items-center  ">
          Send Me A Mail{" "}
          <span>
            <Mail size={18} />
          </span>
        </div>
        <div className="w-[80%] max-md:w-[90%]  bg-neutral-900 rounded-lg mt-10 py-5 px-5 flex md:ml-22 mx-5 relative shadow shadow-neutral-700">
          <Particles className="absolute inset-0 z-0 " quantity={50} refresh />{" "}
          <ContactForm />
          <div className=" flex-col gap-5 items-center justify-center hidden md:flex">
            <div className="text-neutral-400 mr-12 -mt-40 ">
              <Mail
                size={150}
                className="bg-transparent hover:scale-102 duration-300"
              />
            </div>
          </div>
          <div className="flex flex-col gap-5 items-center justify-start mt-2 md:hidden">
            <div className="text-neutral-400 mr-17">
              <Mail size={30} />
            </div>
          </div>
        </div>
        {/* card */}
        <div className="md:w-[48%] h-44 flex flex-col justify-between md:ml-22 mx-5 mt-4 items-start bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative md:overflow-hidden">
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
          </div>
          <Particles
            className="absolute inset-0 z-0 md:hidden"
            quantity={20}
            ease={80}
            refresh
          />
        </div>
      </div>
    </div>
  );
};

export default page;
