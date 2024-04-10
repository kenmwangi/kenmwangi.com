import Link from "next/link";
import React from "react";

const navItems = {
  "/": {
    name: "home",
  },
  "/blog": {
    name: "blog",
  },
  "/about": {
    name: "about",
  },
};

export default function Nav() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20 max-w-7xl mx-auto px-8">
        <nav className="flex flex-row items-start relative py-8 px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative">
          <div className="flex flex-row space-x-0 pr-10">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  href={path}
                  key={path}
                  className="font-mono text-primary-color-alpha-60 transition-all hover:text-primary-color hover:underline flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}
