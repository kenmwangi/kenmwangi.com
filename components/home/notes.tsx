"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./notes-button";
import React from "react";
import ProfileAvatar from "./profile-avatar";
const notes = [
  {
    avatar: "/ken-mwangi.jpeg",
    name: "Ella Emhoff",
    time: "1h",
    text: "Jerry to cleanse the feed.",
  },
  {
    avatar: "/ken-mwangi.jpeg",

    name: "Kareem Rahma",
    time: "3h",
    text: "The greatest privilege is to have emotionally supportive parents!!",
  },
  {
    avatar: "/ken-mwangi.jpeg",
    name: "V Spehar",
    time: "2h",
    text: "Still no voice. Going to doctors today to see what we can do.",
  },
];
export default function Notes() {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  return (
    <section className=" bg-white">
      {/* Add border-t later for above */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl md:text-2xl">Notes</h2>

          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              aria-label="Scroll left"
              onClick={() =>
                carouselRef.current?.scrollBy({
                  left: -320,
                  behavior: "smooth",
                })
              }
            >
              <ChevronLeft size={16} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              aria-label="Scroll right"
              onClick={() =>
                carouselRef.current?.scrollBy({
                  left: 320,
                  behavior: "smooth",
                })
              }
            >
              <ChevronRight size={16} />
            </Button>
          </div>
        </div>
        <div
          ref={carouselRef}
          className="mt-6 flex gap-4 overflow-x-auto scroll-smooth snap-x"
        >
          {notes.map((n, i) => (
            <div
              key={i}
              className="snap-start min-w-[280px] rounded-lg border bg-card p-4"
            >
              <div className="flex items-center gap-3">
                <ProfileAvatar src={n.avatar} alt={n.name} size={36} />
                <div>
                  <div className="text-sm font-medium">{n.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {n.time} ago
                  </div>
                </div>
              </div>
              <p className="mt-3 text-sm">{n.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
