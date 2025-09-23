"use client";

import { useEffect, useRef, useState } from "react";

export default function Nav() {
  const [activeSection, setActiveSection] = useState("");
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: "0px 0px -20% 0px" }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-10 hidden lg:block">
      <div className="flex flex-col gap-4">
        {["intro", "work", "thoughts", "connect"].map((section) => (
          <button
            key={section}
            onClick={() =>
              document
                .getElementById(section)
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className={`w-2 h-8 rounded-full transition-all duration-500 ${
              activeSection === section
                ? "bg-foreground"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
            aria-label={`Navigate to ${section}`}
          />
        ))}
      </div>
    </nav>
  );
}
