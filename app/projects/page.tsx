import React from "react";
import localFont from "next/font/local";
import { Clock, Wrench } from "lucide-react";

const aeonik = localFont({
  src: "../../app/fonts/Aeonik-Regular.otf",
  display: "swap",
});

export default function Projects() {
  return (
    <section className={`py-8 ${aeonik.className}`}>
      <div className="max-w-7xl px-8 mx-auto">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>

        <div className="bg-white shadow p-8 rounded items-center flex flex-col gap-y-5">
          <div className="size-20 bg-[hsla(217,87%,50%,.1)] text-[#1066ef] flex items-center justify-center rounded-full">
            <Wrench className="size-9" />
          </div>
          <p className="text-lg flex items-center gap-3 text-[#40546c] ">
            Still under construction
            <span>
              <Clock className="size-4" />
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
