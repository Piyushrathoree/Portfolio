"use client";

import { HomeIcon, Mail, PencilIcon, User } from "lucide-react";
import Link from "next/link";
import React from "react";

import { buttonVariants } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Dock, DockIcon } from "@/components/magicui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

const DATA = {
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/projects", icon: PencilIcon, label: "projects" },
    { href: "/about", icon: User, label: "about" },
    { href: "/contact", icon: Mail, label: "contact" },
  ],
};

export function NavDock() {
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        className=" border-neutral-800 flex justify-center items-center max-md:gap-5 max-md:pl-5 max-md:pr-5  bottom-7 left-0 right-0 fixed z-100"
      >
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={item.href}
                  aria-label={item.label}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
                    "size-12 rounded-full text-neutral-500 max-md:hover:bg-transparent max-md:hover:text-neutral-300"
                  )}
                >
                  <div className="flex flex-col items-center gap-1 hover:underline duration-300 hover:text-neutral-800">
                    <item.icon className="size-4 hover:text-neutral-800" />
                    <span className=" block md:hidden  ">
                      {item.label}
                    </span>
                  </div>
                </Link>
              </TooltipTrigger>

              <TooltipContent className="bg-neutral-900 text-neutral-50 hidden md:block">
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}
