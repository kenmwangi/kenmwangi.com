import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building, Calendar } from "lucide-react"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Fullstack Engineer",
      company: "african-realestate.com",
      period: "2022 - Present",
      description:
        "Developing comprehensive real estate solutions connecting buyers, sellers, and agents across Africa. Building scalable web applications with modern technologies.",
      technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    },
    {
      title: "Frontend Developer",
      company: "Tech Solutions Ltd",
      period: "2020 - 2022",
      description:
        "Built responsive web applications and improved user experience across multiple client projects. Collaborated with design teams to implement pixel-perfect interfaces.",
      technologies: ["React", "JavaScript", "CSS3", "HTML5", "Git"],
    },
    {
      title: "Junior Developer",
      company: "StartupCo",
      period: "2019 - 2020",
      description:
        "Started my professional journey building web applications and learning modern development practices. Contributed to various projects and gained valuable experience.",
      technologies: ["JavaScript", "PHP", "MySQL", "Bootstrap"],
    },
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            My professional journey in software development and the technologies I&apos;ve worked with.
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900">{exp.title}</CardTitle>
                    <div className="flex items-center gap-2 text-gray-600 mt-1">
                      <Building className="h-4 w-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-500">
                    <Calendar className="h-4 w-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
