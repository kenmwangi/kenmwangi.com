import { Mail, Twitter, Globe } from "lucide-react";
export default function About() {
  return (
    <section className="mb-12 mt-4 shadow-none border-0 text-sm">
      <div className="pt-6">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>

        <p className="text-muted-foreground mb-4">
          I am a seasoned Full Stack Engineer with expertise in building
          microservices using Golang, cloud services (AWS, GCP), and modern web
          technologies. My passion lies in creating scalable, efficient systems
          that solve real-world problems.
        </p>

        <p className="text-muted-foreground">
          Currently, I work as the Lead Engineer at African Real Estate, where
          I&apos;ve implemented microservices architecture using AWS services,
          resulting in improved scalability and performance. I&apos;ve helped
          grow the platform from zero to over 100 agents in just 6 months,
          significantly increasing revenue and improving SEO rankings.
        </p>
      </div>
      <ul className="mt-5 flex flex-col gap-y-3">
        <li className="flex items-center gap-x-2.5">
          <Mail className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="mailto:kenmwangi071@gmail.com"
          >
            kenmwangi071@gmail.com
          </a>
        </li>

        <li className="flex items-center gap-x-2.5">
          <Twitter className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="https://twitter.com/ken_cipher"
            target="_blank"
            rel="noopener noreferrer"
          >
            @kenmwangi
          </a>
        </li>

        <li className="flex items-center gap-x-2.5">
          <Globe className="shrink-0 size-3.5 text-gray-800 dark:text-neutral-200" />
          <a
            className="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none dark:text-neutral-500 dark:hover:text-neutral-400"
            href="https://www.african-realestate.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            african-realestate.com
          </a>
        </li>
      </ul>
    </section>
  );
}
