"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    { href: "#", label: "Home", id: "home" },
    { href: "#projects", label: "Projects", id: "projects" },
    { href: "#experience", label: "Work", id: "work" },
    { href: "#articles", label: "Articles", id: "articles" },
  ];

  return (
    <header className="sticky top-0 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
      <nav className="mt-4 relative max-w-3xl w-full bg-white border border-gray-200 rounded-full mx-2 py-2.5 md:flex md:items-center md:justify-between md:py-0 md:px-4 md:mx-auto dark:bg-neutral-900 dark:border-neutral-700">
        <div className="px-4 md:px-0 flex justify-between items-center">
          <div className="flex items-center">
            <Link
              className="flex-none rounded-md text-xl inline-block font-semibold focus:outline-none"
              href="/"
            >
              <span className="text-gray-800 dark:text-white">Ken Mwangi</span>
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-7 w-7 rounded-full"
                >
                  <Menu className="h-4 w-4" />
                  <span className="sr-only">Toggle navigation</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[250px] sm:w-[300px]">
                <div className="flex flex-col gap-4 mt-6">
                  {links.map((link) => (
                    <Link
                      key={link.id}
                      className={`py-2 px-4 border-l-2 ${
                        activeLink === link.id
                          ? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
                          : "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                      }`}
                      href={link.href}
                      onClick={() => setActiveLink(link.id)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden md:block overflow-hidden transition-all duration-300 basis-full grow">
          <div className="flex flex-row md:items-center md:justify-end gap-3 mt-0 py-0 ps-7">
            {links.map((link) => (
              <Link
                key={link.id}
                className={`py-3 px-1 border-b-2 ${
                  activeLink === link.id
                    ? "border-gray-800 font-medium text-gray-800 dark:border-neutral-200 dark:text-neutral-200"
                    : "border-transparent text-gray-500 hover:text-gray-800 dark:text-neutral-400 dark:hover:text-neutral-200"
                }`}
                href={link.href}
                onClick={() => setActiveLink(link.id)}
              >
                {link.label}
              </Link>
            ))}
            {/* <div className="py-3 px-1">
              <ModeToggle />
            </div> */}
          </div>
        </div>
      </nav>
    </header>
  );
}
