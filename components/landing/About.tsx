import { Card, CardContent } from "@/components/ui/card"
import { Code, Database, Globe, Smartphone } from "lucide-react"

export function AboutSection() {
  const skills = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Frontend Development",
      description: "React, Next.js, TypeScript, Tailwind CSS",
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Backend Development",
      description: "Node.js, Prisma, PostgreSQL, MongoDB",
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Full Stack",
      description: "End-to-end application development",
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile Development",
      description: "React Native, Progressive Web Apps",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            I&apos;m a passionate fullstack engineer with expertise in modern web technologies. I love creating efficient,
            scalable solutions and bringing ideas to life through code.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {skills.map((skill, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                  {skill.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{skill.title}</h3>
                <p className="text-sm text-gray-600">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">My Journey</h3>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              As a fullstack engineer at african-realestate.com, I work on building comprehensive real estate solutions
              that connect buyers, sellers, and agents across Africa. My role involves developing both client-facing
              applications and robust backend systems.
            </p>
            <p>
              I specialize in modern web technologies including React, Next.js, and Node.js, with a strong focus on
              creating performant, user-friendly applications. I&apos;m passionate about clean code, best practices, and
              continuous learning in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
