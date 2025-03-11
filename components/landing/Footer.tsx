import Link from "next/link";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-6 border-t border-gray-200 dark:border-neutral-700">
        <div className="flex flex-wrap justify-between items-center gap-2">
          <div>
            <p className="text-xs text-gray-600 dark:text-neutral-400">
              © {new Date().getFullYear()} Ken Mwangi. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-wrap items-center gap-4">
            <li>
              <Link
                href="https://twitter.com/ken_cipher"
                className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Twitter className="size-4" />
                <span className="sr-only">Twitter</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/kenmwangi"
                className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                <span className="sr-only">GitHub</span>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.linkedin.com/in/kkmwangi/"
                className="text-gray-500 hover:text-gray-800 dark:text-neutral-500 dark:hover:text-neutral-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </li>
            {/* <li className="md:hidden">
              <ModeToggle />
            </li> */}
          </ul>
        </div>
      </div>
    </footer>
  );
}
