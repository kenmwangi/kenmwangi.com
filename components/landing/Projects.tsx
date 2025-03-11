import { Eye } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Real Estate Microservices",
      image: "/assets/african-real-estate.png",
      href: "https://www.african-realestate.com",
    },
    // {
    //   id: 2,
    //   title: "Cloud-based CRM",
    //   image: "/placeholder.svg?height=160&width=160",
    // },
    {
      id: 3,
      title: "Web Development Platform",
      image: "/assets/kasuku-tech.png",
      href: "https://kasukutech.com",
    },
  ];

  return (
    <section id="projects" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Projects
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {projects.map((project) => (
          <Link
            target="_blank"
            key={project.id}
            className="group block relative overflow-hidden rounded-lg"
            href={project.href}
          >
            <img
              className="w-full size-40 object-cover bg-gray-100 rounded-lg border"
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              width={160}
              height={160}
            />
            <div className="absolute bottom-1 end-1 opacity-0 group-hover:opacity-100 transition">
              <div className="flex items-center gap-x-1 py-1 px-2 bg-white border border-gray-200 text-gray-800 rounded-lg dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-200">
                <Eye className="shrink-0 size-3" />
                <span className="text-xs">View</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
