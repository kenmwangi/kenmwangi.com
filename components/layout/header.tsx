"use client";
import { BookmarkCheck, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "./search-input";
import { Button } from "../home/notes-button";
import { Modal } from "./modal";
import { Sheet } from "./sheet";

const headerLinks = [
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Essays",
    href: "/essays",
  },
  {
    title: "Open Source",
    href: "/open-source",
  },
];
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="max-w-6xl px-4 mx-auto flex h-14 items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              className="md:hidden inline-flex items-center justify-center rounded-md border p-2"
              aria-label="Open menu"
              onClick={() => setMenuOpen(true)}
            >
              <Menu size={18} />
            </button>
            <Link
              href="/"
              className="size-7 rounded-sm bg-primary text-white flex items-center justify-center"
            >
              <BookmarkCheck />
            </Link>
            <nav className="hidden md:flex items-center gap-4 text-sm">
              {headerLinks.map((link) => {
                return (
                  <Link
                    href={link.href}
                    key={link.href}
                    className="hover:underline"
                  >
                    {link.title}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex items-cennter gap-2">
            <div className="hidden md:block w-64">
              <Input placeholder="Search...." />
            </div>
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign in
            </Button>
            <Button
              className="sm:hidden"
              variant="outline"
              onClick={() => setSearchOpen(true)}
            >
              <Search size={16} className="mr-2" />
              Search
            </Button>
            <Button>Say Hello</Button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
        <div className="flex h-14 items-center justify-between border-b px-4">
          <div className="flex items-center gap-2">
            <Link
              href="/"
              className="size-7 rounded-sm bg-primary text-white flex items-center justify-center"
            >
              <BookmarkCheck />
            </Link>
            <span className="text-sm font-medium">Menu</span>
          </div>
          <button
            className="rounded-md border p-2"
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <X size={16} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-4 text-sm">
          {headerLinks.map((link) => {
            return (
              <Link
                href={link.href}
                key={link.href}
                className="rounded-md px-2 py-2 hover:bg-muted"
              >
                {link.title}
              </Link>
            );
          })}
        </nav>
      </Sheet>

      {/* Search Modal */}
      <Modal
        open={searchOpen}
        onOpenChange={setSearchOpen}
        title="Search publications"
      >
        <div className="flex items-center gap-2">
          <Input
            placeholder="Search by publication or topic"
            className="flex-1"
          />
          <Button variant="outline" onClick={() => setSearchOpen(false)}>
            <X size={16} className="mr-2" />
            Close
          </Button>
        </div>
        <div className="mt-4 text-sm text-muted-foreground">
          Trending searches
        </div>
        <div className="mt-2 flex flex-wrap gap-2">
          {["AI", "Economics", "Design", "Crypto", "Politics"].map((t) => (
            <Button
              key={t}
              variant="outline"
              size="sm"
              className="rounded-full"
            >
              {t}
            </Button>
          ))}
        </div>
      </Modal>
    </>
  );
}
