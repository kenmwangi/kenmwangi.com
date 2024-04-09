import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter text-primary-color">
        404 - Page Not Found
      </h1>
      <p className="mb-4 text-primary-color-alpha-60">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="duration-250 group/article flex flex-row justify-between gap-2 rounded-md font-semibold px-4 py-2 no-underline transition ease-linear bg-primary-color-alpha-10 text-primary-color hover:text-white hover:bg-primary-color-alpha-60"
      >
        <Home />
        Return Home
      </Link>
    </section>
  );
}
