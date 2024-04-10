import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-bg-secondary-color text-text-secondary-color">
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 justify-center md:justify-start items-center"
            >
              <strong className="font-extrabold text-primary-color-alpha-60 tracking-tight text-base md:text-lg">
                Ken Mwangi
              </strong>
            </Link>
            <p className="mt-3 text-sm">
              Sharing software experiences and interests.{" "}
            </p>
            <p className="mt-5 text-sm text-text-secondary-color/80">
              Copyright &copy; Ken Mwangi, {new Date().getFullYear()} - All
              rights reserved
            </p>
          </div>
          <div className="flex-grow flex flex-wrap justify-center -mb-10 md:mt-0 mt-10 text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <p className="font-semibold text-primary-color-alpha-60 tracking-widest text-sm md:text-left mb-3">
                LINKS
              </p>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link
                  href="/"
                  className="hover:text-primary-color transition ease-in-out"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-primary-color transition ease-in-out"
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-primary-color transition ease-in-out"
                >
                  Projects
                </Link>
              </div>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
              <div className="uppercase text-primary-color-alpha-60 font-semibold tracking-widest text-sm md:text-left mb-3">
                Let&apos;s Connect
              </div>
              <div className="flex flex-col justify-center items-center md:items-start gap-2 mb-10 text-sm">
                <Link
                  href="https://github.com/kenmwangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <Github className="size-4" /> Github
                </Link>
                <Link
                  href="https://twitter.com/@ken_cipher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <Twitter className="size-4" /> Twitter
                </Link>
                <Link
                  href="https://linkedin.com/in/kkmwangi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center"
                >
                  <Linkedin className="size-4" /> Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
