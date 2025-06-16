import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export function ProjectsSection() {
  const projects = [
    {
      title: "Real Estate Platform",
      description:
        "A comprehensive real estate platform connecting buyers, sellers, and agents across Africa. Features property listings, virtual tours, and integrated payment systems.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
      liveUrl: "https://african-realestate.com",
      githubUrl: "#",
    },
    {
      title: "Task Management App",
      description:
        "A modern task management application with real-time collaboration, drag-and-drop functionality, and team workspace features.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: "E-commerce Dashboard",
      description:
        "An analytics dashboard for e-commerce businesses with sales tracking, inventory management, and customer insights.",
      image: "/placeholder.svg?height=200&width=400",
      technologies: ["Next.js", "Chart.js", "Prisma", "MySQL", "Auth0"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A selection of projects I&apos;ve worked on, showcasing different technologies and problem-solving approaches.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
              <div className="aspect-video relative overflow-hidden">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-gray-900">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button size="sm" asChild>
                    <Link href={project.liveUrl} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.githubUrl} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
