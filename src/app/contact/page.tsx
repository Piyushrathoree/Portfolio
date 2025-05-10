import { GridPattern } from "@/components/magicui/grid-pattern";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import { Button } from "@/components/ui/button";
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
    <div className="h-[70vh] flex flex-col  items-center justify-center  max-md:pl-[2px] ">
      <div className="">
        <div className="text-3xl text-neutral-300 mt-12 md:mt-24 absolute left-[27%]  max-md:left-[3%] ">
          Let&apos;s Connect....
        </div>
      </div>
      <div className="w-full max-md:w-[98%] h-[90%] top-26 md:top-36   rounded-xl shadow shadow-neutral-500  item-start  justify-center pt-10 relative">
        <GridPattern
          width={30}
          height={30}
          x={-1}
          y={-1}
          className={cn(
            "[mask-image:linear-gradient(to_bottom_right,white,transparent)] md:hidden "
          )}
        />
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
        <div className="w-[80%] max-md:w-[90%] max-md:h-[47%] h-[42%] bg-neutral-900 rounded-lg mt-10 py-5 px-5 flex md:ml-22 mx-5 relative shadow shadow-neutral-700">
          <Particles className="absolute inset-0 z-0 " quantity={50} refresh />{" "}
          <form className="flex flex-col gap-10 w-[90%] h-full justify-center">
            <div className="flex gap-5 flex-col">
              <div className="flex flex-col text-neutral-400 ">
                <label htmlFor="name " className="selection:bg-none">
                  Name
                </label>
                <input
                  type="text"
                  className="bg-neutral-800 h-10 rounded-md outline-none text-neutral-400 shadow shadow-neutral-700 px-2 w-52 md:w-72  "
                  id="name"
                />
              </div>
              <div className="flex flex-col text-neutral-400">
                <label htmlFor="email">Email</label>

                <input
                  type="text"
                  className="bg-neutral-800 h-10 rounded-md outline-none text-neutral-400 shadow shadow-neutral-700 px-2 w-72 md:w-96 "
                  id="email"
                />
              </div>
            </div>
            <Button
              variant={"ghost"}
              className=" bg-neutral-800 shadow -mt-5  shadow-neutral-700 hover:bg-neutral-900 text-neutral-400  hover:text-neutral-300 w-32"
            >
              Send..
            </Button>
          </form>
          <div className=" flex-col gap-5 items-center justify-center hidden md:flex">
            <div className="text-neutral-400 mr-17 ">
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
        <div className="md:w-[48%] h-44 flex flex-col justify-between md:ml-22 mx-5 mt-6 items-start bg-neutral-900 shadow-neutral-700 shadow rounded-lg px-5 py-4 relative md:overflow-hidden">
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
