"use client";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
export default function AboutPage() {
  return (
    <section className="relative w-full overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 -z-10 opacity-[0.02] dark:opacity-[0.05]">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl px-4 md:px-6">
        {/* Header section and badge */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <motion.div>
            <Badge>About Us</Badge>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
