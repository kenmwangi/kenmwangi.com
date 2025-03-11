import { Briefcase } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Lead Engineer",
      company: "African Real Estate",
      period: "2024 - Present",
      location: "Nairobi, Kenya",
      logo: "/assets/logo.png",
      description:
        "Leading the development of a microservices-based platform that has grown from zero to over 100 agents in 6 months. Implemented AWS services for scalability and performance optimization.",
      achievements: [
        "Designed and implemented microservices architecture using AWS services",
        "Grew user base from zero to over 100 agents in 6 months",
        "Improved SEO rankings, resulting in 150% increase in organic traffic",
        "Implemented CI/CD pipelines for streamlined deployment",
      ],
    },
    {
      id: 2,
      role: "Senior Software Engineer",
      company: "Kasuku Tech",
      period: "2021 - 2024",

      location: "Remote",
      logo: Briefcase,
      description:
        "This is an excellent company and they reward their employees. It's becoming a big company but it's still private, so the culture is as good as it gets at 10+ employees if you ask me.",
      achievements: [
        "Developed a cloud-based CRM system for a real estate company",
        "Created an e-commerce platform with payment integration",
        "Built data analytics dashboards for business intelligence",
        "Implemented secure authentication systems using OAuth and JWT",
      ],
    },
    {
      id: 3,
      role: "Junior Software Engineer",
      company: "Freelancing",
      logo: Briefcase,
      period: "2018 - 2021",
      location: "Remote",
      description:
        "Work in different projects ranging from beautiful experience to scalable and distributed backend syetems. There are a lot of interesting thing to learn and manager respect your time and your personality.",
      achievements: [
        "Worked with a diverse range of clients, delivering tailored design solutions",
        "Developed and maintained strong client relationships through effective communication",
        "Utilized tools such as Notion for project tracking and GitHub for version control",
      ],
    },
  ];

  return (
    <section id="experience" className="mt-10 sm:mt-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Work experience
      </h2>

      <div>
        {experiences.map((experience) => (
          <div key={experience.id} className="group relative flex gap-x-5">
            <div className="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200 dark:after:bg-neutral-700">
              <div className="relative z-10 size-6 flex justify-center items-center">
                {typeof experience.logo === "string" ? (
                  <Image
                    width={40}
                    height={40}
                    src={experience.logo || "/placeholder.svg"}
                    alt={experience.company}
                    className="shrink-0 size-6 text-gray-600 dark:text-neutral-400"
                  />
                ) : (
                  React.createElement(experience.logo, {
                    className:
                      "shrink-0 size-6 text-gray-600 dark:text-neutral-400",
                  })
                )}
              </div>
            </div>

            <div className="grow pb-8 group-last:pb-0">
              <h3 className="mb-1 text-xs text-gray-600 dark:text-neutral-400">
                {experience.period}
              </h3>

              <p className="font-semibold text-sm text-gray-800 dark:text-neutral-200">
                {experience.role} at {experience.company}
              </p>

              <p className="mt-1 text-sm text-gray-600 dark:text-neutral-400">
                {experience.description}
              </p>

              <ul className="list-disc ms-6 mt-3 space-y-1.5">
                {experience.achievements.map((achievement, i) => (
                  <li
                    key={i}
                    className="ps-1 text-sm text-gray-600 dark:text-neutral-400"
                  >
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
