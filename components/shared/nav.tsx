"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/about": {
    name: "about",
  },
  "/blog": {
    name: "blog",
  },
};

export default function Nav() {
  const pathname = usePathname();
  const isActive = (path: string) => path === pathname;
  return (
    <>
      <div className="border-b border-[rgba(19,30,45,.1)] bg-transparent pt-[2em] pb-[2em]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-center justify-between">
            <Link href="/" className="font-semibold text-lg">
              kenmwangi
            </Link>
            <nav className="flex items-center gap-x-3">
              {Object.entries(navItems).map(([path, { name }]) => {
                return (
                  <Link
                    href={path}
                    key={path}
                    // className="transition-all flex font-normal text-lg p-[14px] pb-[12px] bg-[rgba(112,112,127,0)] text-[#40546c] hover:text-[#1066ef]"
                    className={
                      isActive(path)
                        ? "text-[#1066ef] p-[14px] pb-[12px]"
                        : "transition-all flex font-normal text-lg p-[14px] pb-[12px] bg-[rgba(112,112,127,0)] text-[#40546c] hover:text-[#1066ef]"
                    }
                  >
                    {name}
                  </Link>
                );
              })}
              <div className="w-px h-4 text-[rgba(0,21,47,.15)] mx-2" />
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}
