"use client";

import type React from "react";

import { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Subscribe() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) return;

    // Simulate form submission
    setTimeout(() => {
      setEmail("");
      setMessage("Thank you for subscribing!");

      // Clear message after 3 seconds
      setTimeout(() => {
        setMessage("");
      }, 3000);
    }, 1000);
  };

  return (
    <section className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Subscribe
      </h2>

      <form onSubmit={handleSubmit}>
        <div className="p-1.5 flex flex-col sm:flex-row items-center gap-2 border border-gray-200 rounded-lg dark:border-neutral-700">
          <div className="relative w-full">
            <label htmlFor="subscribe-email" className="sr-only">
              Subscribe
            </label>
            <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-3">
              <Mail className="shrink-0 size-4 text-gray-400 dark:text-neutral-600" />
            </div>
            <Input
              id="subscribe-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="py-1.5 sm:py-2 ps-9 pe-3 block w-full border-transparent rounded-lg focus:border-transparent focus:ring-transparent dark:bg-neutral-900 dark:text-neutral-400 dark:placeholder-neutral-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full sm:w-auto whitespace-nowrap py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-md border border-transparent bg-gray-800 text-white hover:bg-gray-900 dark:bg-white dark:text-neutral-800 dark:hover:bg-neutral-200"
          >
            Join
          </Button>
        </div>
        {message && (
          <p className="mt-2 text-sm text-green-600 dark:text-green-400">
            {message}
          </p>
        )}
        <p className="mt-2 text-xs text-gray-500 dark:text-neutral-500">
          No spam, unsubscribe at any time.
        </p>
      </form>
    </section>
  );
}
