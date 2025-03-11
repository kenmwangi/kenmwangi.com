export default function Skills() {
  const skills = [
    {
      category: "Programming Languages",
      items: ["Golang", "TypeScript", "JavaScript", "Python", "SQL"],
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS (EC2, Lambda, S3, RDS)",
        "GCP",
        "Azure",
        "Serverless Architecture",
      ],
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    },
    {
      category: "Development Expertise",
      items: [
        "Microservices",
        "gRPC",
        "RESTful APIs",
        "GraphQL",
        "Message Queues (RabbitMQ, Kafka)",
        "Docker",
        "Kubernetes",
        "CI/CD",
      ],
    },
    {
      category: "Soft Skills",
      items: [
        "Team Leadership",
        "Technical Mentoring",
        "Project Management",
        "Client Communication",
      ],
    },
  ];

  return (
    <section className="my-10 sm:my-14">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Skills
      </h2>

      <div className="space-y-3">
        {skills.map((skillGroup, index) => (
          <dl key={index} className="flex flex-col sm:flex-row gap-3">
            <dt className="min-w-40">
              <span className="block text-sm text-gray-500 dark:text-neutral-500">
                {skillGroup.category}:
              </span>
            </dt>
            <dd>
              <ul>
                {skillGroup.items.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className={`me-1 ${
                      skillIndex < skillGroup.items.length - 1
                        ? 'after:content-[","]'
                        : ""
                    } inline-flex items-center text-sm text-gray-800 dark:text-neutral-200`}
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </dd>
          </dl>
        ))}
      </div>
    </section>
  );
}
