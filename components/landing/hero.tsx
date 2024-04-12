"use client";
import { Notebook, NotebookPen, SquareCode } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import localFont from "next/font/local";

const aeonik = localFont({
  src: "../../app/fonts/Aeonik-Regular.otf",
  display: "swap",
});

const features: {
  name: String;
  description: JSX.Element;
  svg?: JSX.Element;
}[] = [
  {
    name: "Tech",
    description: (
      <>
        <ul className={`space-y-1 ${aeonik.className}`}>
          {["Nextjs", "Typescript", "Server and Serverless tech"].map(
            (item) => (
              <li className="flex items-center gap-3" key={item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            )
          )}
        </ul>
      </>
    ),
    svg: (
      <>
        <SquareCode />
      </>
    ),
  },
  {
    name: "Blog",
    description: (
      <>
        <ul className={`space-y-1 ${aeonik.className}`}>
          {["Software Development", "Projects", "Technical writing"].map(
            (item) => (
              <li className="flex items-center gap-3" key={item}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="#1066ef"
                  className="w-[18px] h-[18px] inline shrink-0 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            )
          )}
        </ul>
      </>
    ),
    svg: (
      <>
        <NotebookPen />
      </>
    ),
  },
];
export default function Hero() {
  const featuresEndRef = useRef<null>(null);
  const [featureSelected, setFeatureSelected] = useState(features[0].name);
  const [hasClicked, setHasClicked] = useState(false);

  // (Optional) Autoscroll the list of features so user know it's interactive.
  // Stop scrolling when user scroll after the featuresEndRef element (end of section)
  // emove useEffect is not needed.
  useEffect(() => {
    const interval = setInterval(() => {
      if (!hasClicked) {
        const index = features.findIndex(
          (feature) => feature.name === featureSelected
        );
        const nextIndex = (index + 1) % features.length;
        setFeatureSelected(features[nextIndex].name);
      }
    }, 5000);

    try {
      // stop the interval when the user scroll after the featuresRef element
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            console.log("STOP AUTO CHANGE");
            clearInterval(interval);
          }
        },
        {
          root: null,
          rootMargin: "0px",
          threshold: 0.5,
        }
      );
      if (featuresEndRef.current) {
        observer.observe(featuresEndRef.current);
      }
    } catch (e) {
      console.error(e);
    }

    return () => clearInterval(interval);
  }, [featureSelected, hasClicked]);

  return (
    <section className={`py-12 ${aeonik.className}`}>
      <div className=" max-w-3xl">
        <p className="font-medium text-sm mb-3 text-[#1f2f42]">
          const time: string = &quot;Today&quot; 🫣️;
        </p>
        <div className="backdrop-grayscale bg-white/30 w-fit">
          <Image
            src={`/assets/profile.jpg`}
            width={256}
            height={256}
            alt={`Ken Mwangi`}
            priority={true}
            className="rounded-full w-[3rem] md:w-[4rem] my-4 "
          />
        </div>
        <h2 className="text-[#1f2f42] font-extrabold text-3xl lg:text-5xl tracking-tight my-4">
          Hello, I&apos;m Ken Mwangi
        </h2>
        <p className="text-base mb-4 font-medium text-[#1066ef]">
          Software Engineer | Tech Enthusiast | Value Creator
        </p>

        <p className="text-[#2e4057] leading-relaxed tracking-wide mb-8 lg:text-lg">
          I&apos;m passionate about leveraging technology to solve real-world
          problems and enhance user experiences. As a software engineer, I
          thrive on crafting elegant solutions to complex challenges and pushing
          the boundaries of what&apos;s achievable in the digital realm.
        </p>
      </div>
      <div className="grid grid-cols-4 md:flex justify-start gap-4 md:gap-12 max-md:px-8 mb-8">
        {features.map((feature, idx) => (
          <span
            key={idx}
            onClick={() => {
              if (!hasClicked) setHasClicked(true);
              setFeatureSelected(feature.name);
            }}
            className="flex flex-col items-center justify-center gap-3 select-none cursor-pointer p-2 duration-200 group"
          >
            <span
              className={`duration-100 ${
                featureSelected === feature.name
                  ? "text-[rgba(0,21,47,.15)]"
                  : "[#1066ef] group-hover:text-primary-color"
              }`}
            >
              {feature.svg}
            </span>
            <span
              className={`font-semibold text-sm ${
                featureSelected === feature.name
                  ? "text-[rgba(0,21,47,.15)]"
                  : "text-[#1066ef]"
              }`}
            >
              {feature.name}
            </span>
          </span>
        ))}
      </div>

      <div className="bg-[#f8f8ff]">
        <div className="max-w-3xl px-4 flex flex-col md:flex-row justify-center md:justify-start md:items-center gap-12">
          <div className="text-[#40546c] leading-relaxed space-y-4 px-12 md:px-0 py-12 max-w-xl animate-opacity">
            <h3 className="font-semibold text-lg">
              {features.find((f) => f.name === featureSelected)?.name}
            </h3>

            {features.find((f) => f.name === featureSelected)?.description}
          </div>
        </div>
        <p className="opacity-0" ref={featuresEndRef}></p>
      </div>
    </section>
  );
}
