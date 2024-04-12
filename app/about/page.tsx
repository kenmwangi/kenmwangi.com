import React from "react";
import { MoveUpRight } from "lucide-react";
import Link from "next/link";
import localFont from "next/font/local";

const aeonik = localFont({
  src: "../../app/fonts/Aeonik-Regular.otf",
  display: "swap",
});

export default function About() {
  return (
    <section className={`py-8 ${aeonik.className}`}>
      <div className="max-w-7xl px-8 mx-auto">
        <h2 className="text-3xl font-bold mb-8">
          About <span className="text-[#1066ef]">Ken</span>
        </h2>
        <article className="gap-8 w-full sm:columns-2">
          <div className="flex flex-col gap-y-4 group break-inside-avoid-column w-fit mb-8 text-lg">
            <span className="font-bold text-lg text-[#131e2d]">Roles</span>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3 text-lg leading-none text-[#1f2f42]">
                <div className="flex items-center group transition-all">
                  <span className="mr-2">
                    Software Engineer -
                    <Link
                      href="https://www.african-realestate.com/"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="hover:text-[#1066ef] ml-1"
                    >
                      African Real Estate
                    </Link>
                  </span>
                  <span className="hover:text-[#1066ef]">
                    <MoveUpRight className="size-5" />
                  </span>
                </div>
                <div className="opacity-70">
                  <span>December 2023 - Present</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 text-lg leading-none text-[#1f2f42]">
                <div className="flex items-center group/article transition-all">
                  <span className="mr-2">
                    Software Engineer -
                    <Link
                      href="https://www.github.com/kenmwangi"
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group-hover:text-[#1066ef] ml-1"
                    >
                      Freelancing
                    </Link>
                  </span>
                  <span className="hover:text-[#1066ef]">
                    <MoveUpRight className="size-5" />
                  </span>
                </div>
                <div className="opacity-70">
                  <span>2022 - 2023</span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 group break-inside-avoid-column w-fit mb-8 text-lg">
            <span className="font-bold text-lg text-[#131e2d]">Education</span>
            <div className="flex flex-col gap-y-8">
              <div className="flex flex-col gap-y-3 text-lg leading-none text-[#1f2f42]">
                <div className="flex items-center group transition-all">
                  <span className="">ALX Africa</span>
                </div>
                <div className="opacity-70 flex flex-col space-y-1">
                  <span className="t">
                    Software Engineering (Fullstack development)
                  </span>
                  <span className="">2022 - 2023</span>
                </div>
              </div>
              <div className="flex flex-col gap-y-3 text-lg leading-none text-[#1f2f42]">
                <div className="flex items-center group transition-all">
                  <span className="">Multimedia University of Kenya</span>
                </div>
                <div className="opacity-70 flex flex-col space-y-1">
                  <span className="">B.S.C Maths & Computer Science</span>
                  <span className="">2014 - 2018</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
