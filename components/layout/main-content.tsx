import Image from "next/image"
import Link from "next/link"
import { ContactForm } from "@/components/layout/contact-form"
import { ArrowUpRight, Github, Linkedin } from "lucide-react"

export function MainContent() {
  const projects = [
    {
      title: "African Real Estate Platform",
      description:
        "A comprehensive platform connecting buyers, sellers, and agents across Africa with modern property listings and virtual tours.",
      url: "https://african-realestate.com",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    },
    {
      title: "Task Management System",
      description: "Real-time collaboration tool with drag-and-drop functionality and team workspace features.",
      url: "#",
      tech: ["React", "Node.js", "Socket.io", "MongoDB"],
    },
    {
      title: "Analytics Dashboard",
      description: "E-commerce analytics platform with advanced reporting and business intelligence features.",
      url: "#",
      tech: ["Next.js", "Chart.js", "Prisma", "MySQL"],
    },
  ]

  const filters = ["All", "Web Apps", "Mobile", "Design"]

  return (
    <main className="max-w-4xl mx-auto px-8 py-12">
      {/* Hero Section */}
      <section id="home" className="mb-10">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 mb-8">
          <div className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-2xl border-[#E5E5EA] border overflow-hidden">
                <Image
                  src="/assets/ken.jpeg"
                  alt="Ken Mwangi"
                  width={80}
                  height={80}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="flex-1">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-4 leading-tight">
                <span className="bg-[#D5F0FA] text-[#0091F5] px-2 rounded">Ken Mwangi</span> is a fullstack engineer who builds things
              </h1>

              <div className="text-gray-600 space-y-3 mb-6">
                <p>
                  Welcome to my corner of the web where I write about code, technology, and building digital products.
                  I&apos;m currently working as a fullstack engineer at{" "}
                  <Link
                    href="https://african-realestate.com"
                    target="_blank"
                    className="hover:text-[#0091F5] transition-all text-gray-900 font-medium hover:underline inline-flex items-center gap-1"
                  >
                    african-realestate.com
                    <ArrowUpRight className="h-3 w-3" />
                  </Link>
                </p>

                <p>
                  I specialize in Go, Python,Docker Next.js and modern web technologies. I enjoy solving complex problems
                  and creating user-friendly applications that make a real difference.
                </p>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/kkmwangi"
                  target="_blank"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  <Linkedin className="h-4 w-4 group-hover:text-[#0091F5]" />
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com/kenmwangi"
                  target="_blank"
                  className="group inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm font-medium text-gray-700 transition-colors"
                >
                  <Github className="h-4 w-4 group-hover:text-[#3C3C43]" />
                  GitHub
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Location</p>
            <p className="font-medium text-gray-900">Nairobi, Kenya</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Experience</p>
            <p className="font-medium text-gray-900">5+ Years</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500 mb-1">Specialization</p>
            <p className="font-medium text-gray-900">Fullstack Development</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="mb-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">About</h2>
          <div className="text-gray-600 space-y-4">
            <p>
              I&apos;m a passionate developer who loves creating digital experiences that solve real problems. My journey in
              tech started with curiosity about how things work, and it&apos;s evolved into a career focused on building
              scalable, user-centric applications.
            </p>
            <p>
              When I&apos;m not coding, I enjoy exploring new technologies, contributing to open source projects, and sharing
              knowledge with the developer community. I believe in writing clean, maintainable code and creating
              products that make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="mb-20">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4 md:mb-0">Work</h2>

            {/* TikTok-style filters */}
            <div className="flex gap-2">
              {filters.map((filter, index) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    index === 0 ? "bg-blue-100 text-blue-700" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {projects.map((project, index) => (
              <div key={index} className="border border-gray-100 rounded-xl p-6 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <Link
                    href={project.url}
                    target="_blank"
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <ArrowUpRight className="h-5 w-5" />
                  </Link>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link
              href="https://github.com/kenmwangi"
              target="_blank"
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 font-medium"
            >
              View more on GitHub
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mb-2">
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <p className="text-gray-600">
                I&apos;m always interested in hearing about new opportunities and interesting projects. Feel free to reach
                out if you&apos;d like to work together.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">Email:</span>
                  <Link href="mailto:ken@example.com" className="text-gray-900 hover:underline">
                    hello@kenmwangi.com
                  </Link>
                </div>
                {/* <div className="flex items-center gap-3">
                  <span className="text-sm text-gray-500 w-16">Response:</span>
                  <span className="text-gray-600">Usually within 24 hours</span>
                </div> */}
              </div>
            </div>

            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  )
}
