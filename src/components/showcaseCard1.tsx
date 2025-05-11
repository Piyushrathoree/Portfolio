"use client";
import { Share, NotebookPen } from "lucide-react";
import Link from "next/link";
import React from "react";

const ShowcaseCard1 = () => {
  return (
    <div className="w-[99%] max-md:h-[35vh] pb-3 flex flex-col items-start pt-5 px-5 bg-neutral-900 shadow-neutral-700 shadow rounded-lg  ">
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
              Best Coding Practices  .....
            </div>
            <div className="text-neutral-400 font-medium text-[12px] truncate overflow-hidden whitespace-nowrap">
              A guide to coding best .....
            </div>
          </div>
        </div>
        <div className="text-neutral-400 font-medium flex items-center gap-2  border-neutral-700 border-1 rounded-md  bg-transparent hover:bg-neutral-800 transition-all duration-300 cursor-pointer px-3 py-2 mt-3 ">
          <div>
            <NotebookPen className="w-4 h-4" />
          </div>
          <div>
            <div className="text-neutral-200 font-medium text-sm truncate overflow-hidden whitespace-nowrap">
             React vs Next
            </div>
            <div className="text-neutral-400 font-medium text-[12px] truncate overflow-hidden whitespace-nowrap">
              Covering all major difference ....
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseCard1;
