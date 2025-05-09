"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full md:px-[27%] px-4 h-16 bg-transparent text-neutral-300 max-md:bg-neutral-900/90 backdrop-blur-sm flex justify-between items-center z-100  ">
      <Link href="/">
        <div className="flex items-center gap-2">
          {" "}
          <div className="flex flex-col gap-1 ">
            <div className=" relative">
              <Image
                src="/myImage.jpg"
                alt="heroImage"
                width={40}
                height={40}
                className="rounded-full filter "
              />
            </div>
          </div>
          <div>
            <div className="text-lg  font-semibold ">Piyush Rathore</div>
            <div className="text-[13px]">Software Engineer</div>
          </div>
        </div>
      </Link>
    </nav>
  );
};

export default Navbar;
