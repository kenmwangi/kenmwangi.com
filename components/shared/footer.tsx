import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";
import localFont from "next/font/local";

const aeonik = localFont({
  src: "../../app/fonts/Aeonik-Regular.otf",
  display: "swap",
});

export default function Footer() {
  return (
    <footer
      className={`border-t border-[rgba(19,30,45,.1)] pt-[3em] pb-[1em] ${aeonik.className}`}
    >
      <section className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex items-start justify-between md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-96 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              aria-current="page"
              className="flex gap-2 md:justify-start items-center"
            >
              <strong className="font-extrabold text-[#131e2d] tracking-tight text-base md:text-lg">
                Ken Mwangi
              </strong>
            </Link>
            <p className="mt-3 text-sm text-[#2e4057] text-start">
              Sharing software experiences and interests.{" "}
            </p>
            <p className="mt-5 text-sm text-[#2e4057] text-start">
              Copyright &copy; Ken Mwangi, {new Date().getFullYear()} - All
              rights reserved
            </p>
          </div>

          <div className="mt-8 lg:mt-0 max-w-[700px] grow lg:flex lg:flex-row">
            <div className="flex grow flex-row flex-wrap lg:flex-nowrap">
              <div className=" mr-8 flex  grow basis-[100px] flex-col space-y-2 lg:my-0 text-sm">
                <p className="font-semibold text-[#131e2d] tracking-widest text-sm md:text-left mb-3">
                  LINKS
                </p>
                <Link
                  href="/about"
                  className="hover:text-[#1066ef] text-[#2e4057] transition ease-in-out"
                >
                  About
                </Link>
                <Link
                  href="/blog"
                  className="hover:text-[#1066ef] text-[#2e4057] transition ease-in-out"
                >
                  Blog
                </Link>
                <Link
                  href="/projects"
                  className="hover:text-[#1066ef] text-[#2e4057] transition ease-in-out"
                >
                  Projects
                </Link>
              </div>

              <div className="my-5 mr-8 flex  grow basis-[100px] flex-col space-y-2 lg:my-0 text-sm">
                <div className="w-fit uppercase text-[#131e2d] font-semibold tracking-widest text-sm md:text-left mb-3">
                  Let&apos;s Connect
                </div>
                <Link
                  href="https://github.com/kenmwangi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center text-[#2e4057] hover:text-[#1066ef] transition ease-in-out"
                >
                  <svg
                    viewBox="0 0 256 250"
                    width="15"
                    height="15"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                  >
                    <path d="M128.001 0C57.317 0 0 57.307 0 128.001c0 56.554 36.676 104.535 87.535 121.46 6.397 1.185 8.746-2.777 8.746-6.158 0-3.052-.12-13.135-.174-23.83-35.61 7.742-43.124-15.103-43.124-15.103-5.823-14.795-14.213-18.73-14.213-18.73-11.613-7.944.876-7.78.876-7.78 12.853.902 19.621 13.19 19.621 13.19 11.417 19.568 29.945 13.911 37.249 10.64 1.149-8.272 4.466-13.92 8.127-17.116-28.431-3.236-58.318-14.212-58.318-63.258 0-13.975 5-25.394 13.188-34.358-1.329-3.224-5.71-16.242 1.24-33.874 0 0 10.749-3.44 35.21 13.121 10.21-2.836 21.16-4.258 32.038-4.307 10.878.049 21.837 1.47 32.066 4.307 24.431-16.56 35.165-13.12 35.165-13.12 6.967 17.63 2.584 30.65 1.255 33.873 8.207 8.964 13.173 20.383 13.173 34.358 0 49.163-29.944 59.988-58.447 63.157 4.591 3.972 8.682 11.762 8.682 23.704 0 17.126-.148 30.91-.148 35.126 0 3.407 2.304 7.398 8.792 6.14C219.37 232.5 256 184.537 256 128.002 256 57.307 198.691 0 128.001 0Zm-80.06 182.34c-.282.636-1.283.827-2.194.39-.929-.417-1.45-1.284-1.15-1.922.276-.655 1.279-.838 2.205-.399.93.418 1.46 1.293 1.139 1.931Zm6.296 5.618c-.61.566-1.804.303-2.614-.591-.837-.892-.994-2.086-.375-2.66.63-.566 1.787-.301 2.626.591.838.903 1 2.088.363 2.66Zm4.32 7.188c-.785.545-2.067.034-2.86-1.104-.784-1.138-.784-2.503.017-3.05.795-.547 2.058-.055 2.861 1.075.782 1.157.782 2.522-.019 3.08Zm7.304 8.325c-.701.774-2.196.566-3.29-.49-1.119-1.032-1.43-2.496-.726-3.27.71-.776 2.213-.558 3.315.49 1.11 1.03 1.45 2.505.701 3.27Zm9.442 2.81c-.31 1.003-1.75 1.459-3.199 1.033-1.448-.439-2.395-1.613-2.103-2.626.301-1.01 1.747-1.484 3.207-1.028 1.446.436 2.396 1.602 2.095 2.622Zm10.744 1.193c.036 1.055-1.193 1.93-2.715 1.95-1.53.034-2.769-.82-2.786-1.86 0-1.065 1.202-1.932 2.733-1.958 1.522-.03 2.768.818 2.768 1.868Zm10.555-.405c.182 1.03-.875 2.088-2.387 2.37-1.485.271-2.861-.365-3.05-1.386-.184-1.056.893-2.114 2.376-2.387 1.514-.263 2.868.356 3.061 1.403Z" />
                  </svg>
                  Github
                </Link>
                <Link
                  href="https://twitter.com/@ken_cipher"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center text-[#2e4057] hover:text-[#1066ef] transition ease-in-out"
                >
                  <svg
                    viewBox="0 0 256 209"
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    fill="currentColor"
                  >
                    <path d="M256 25.45c-9.42 4.177-19.542 7-30.166 8.27 10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45" />
                  </svg>{" "}
                  Twitter
                </Link>
                <Link
                  href="https://linkedin.com/in/kkmwangi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 items-center text-[#2e4057] hover:text-[#1066ef] transition ease-in-out"
                >
                  <svg
                    width="15"
                    height="15"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="xMidYMid"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                  >
                    <path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" />
                  </svg>{" "}
                  Linkedin
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
