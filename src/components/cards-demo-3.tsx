"use client";

import React from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Github, Share } from "lucide-react";
interface CardProps {
  title: string;
  description: string;
  video: string;
  link?: string;
  github?: string;
  tags?: string[];
}
export default function CardDemo({
  title,
  description,
  video,
  link,
  github,
  tags,
}: CardProps) {
  return (
    <Card className="bg-neutral-900 border-none h-[43vh]  ">
      <div className="h-full w-full flex flex-col justify-start gap-3 relative">
        <video
          src={video}
          loop
          autoPlay
          muted
          poster={video}
          className="w-full h-[60%] object-cover rounded-lg md:mb-2 mb-2 opacity-80"
        />
        <div className="flex flex-col justify-between ml-1 ">
          <div className="flex items-center justify-between ">
            <CardTitle className="text-neutral-200 -mt-5 ">{title}</CardTitle>
            <div className="flex items-center gap-2">
              {link && (
                <Link
                  href={link}
                  target="_blank"
                  className="text-neutral-400 hover:text-neutral-200 transition-all duration-300 pr-4 pb-[2px] "
                >
                  <Share size={16} />
                </Link>
              )}
              {github && (
                <Link
                  href={github}
                  target="_blank"
                  className="text-neutral-400 hover:text-neutral-200 transition-all duration-300 pr-4 pb-[2px] "
                >
                  <Github size={16} />
                </Link>
              )}
            </div>
          </div>
          <CardDescription className="text-neutral-400 border-t border-neutral-800 pt-2">
            {description}
          </CardDescription>
          <div className="flex flex-wrap gap-2 mt-3">
            {tags?.map((tag) => (
              <div key={tag} className="bg-neutral-800 text-neutral-400 px-2 py-1  rounded text-xs font-medium hover:text-neutral-300 duration-300">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
}

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "max-w-sm w-full mx-auto p-4 rounded-xl shadow shadow-neutral-600 ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h3
      className={cn(
        "text-lg font-semibold text-gray-800 dark:text-white py-2",
        className
      )}
    >
      {children}
    </h3>
  );
};

export const CardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={cn(
        "text-sm font-normal text-neutral-600 dark:text-neutral-400 max-w-sm",
        className
      )}
    >
      {children}
    </p>
  );
};

export const CardSkeletonContainer = ({
  className,
  children,
  showGradient = true,
}: {
  className?: string;
  children: React.ReactNode;
  showGradient?: boolean;
}) => {
  return (
    <div
      className={cn(
        "h-[15rem] md:h-[20rem] rounded-xl ",
        className,
        showGradient &&
          "bg-neutral-300 dark:bg-[rgba(40,40,40,0.70)] [mask-image:radial-gradient(50%_50%_at_50%_50%,white_0%,transparent_100%)]"
      )}
    >
      {children}
    </div>
  );
};
