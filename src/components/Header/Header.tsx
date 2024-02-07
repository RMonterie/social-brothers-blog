"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export const Header = () => {
  const pathname = usePathname();
  return (
    <header className="bg-[url('/sb-background.png')] bg-no-repeat bg-cover w-full h-[13rem] px-40 relative">
      {pathname.startsWith("/blogs") && (
        <h1 className="text-white font-bold text-5xl absolute left-1/2 transform -translate-x-1/2 top-[113px] bottom-[33px] hidden sm:block">
          Blog
        </h1>
      )}
      <div className="flex flex-col items-center sm:flex-row justify-between space-y-2 sm:space-y-0 pt-8">
        <Link href={"/"}>
          <Image
            src="/sb-logo.svg"
            alt="logo"
            width={240}
            height={57}
            className="flex-shrink-0"
          />
        </Link>
        <div className="flex flex-col sm:flex-row sm:space-x-8 space-y-1 sm:space-y-0">
          <Link href={"/"}>
            <h1
              className="text-white text-lg font-semibold"
              style={{
                borderBottom: pathname === "/" ? "2px solid #e95e30" : "none",
                paddingBottom: pathname === "/" ? "4px" : "0",
              }}
            >
              Home
            </h1>
          </Link>
          <Link href={"/blogs/1"}>
            <h1
              className="text-white text-lg font-semibold"
              style={{
                borderBottom: pathname.startsWith("/blogs")
                  ? "2px solid #e95e30"
                  : "none",
                paddingBottom: pathname.startsWith("/blogs") ? "4px" : "0",
              }}
            >
              Blog
            </h1>
          </Link>
        </div>
      </div>
    </header>
  );
};
