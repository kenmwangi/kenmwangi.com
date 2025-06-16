import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Download } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-gray-500 font-light tracking-wide uppercase text-sm">Fullstack Engineer</p>
                <h1 className="text-5xl lg:text-7xl font-light text-gray-900 leading-tight">
                  Ken
                  <br />
                  <span className="text-gray-400">Mwangi</span>
                </h1>
              </div>

              <div className="space-y-6">
                <p className="text-xl text-gray-600 font-light leading-relaxed max-w-lg">
                  I build digital experiences that connect people and solve real problems. Currently crafting the future
                  of real estate at{" "}
                  <Link
                    href="https://african-realestate.com"
                    target="_blank"
                    className="text-gray-900 underline decoration-gray-300 hover:decoration-gray-900 transition-colors"
                  >
                    african-realestate.com
                  </Link>
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#work">
                    <Button className="rounded-full px-8 py-6 text-base font-light">
                      View My Work
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Button variant="outline" className="rounded-full px-8 py-6 text-base font-light">
                    <Download className="mr-2 h-4 w-4" />
                    Resume
                  </Button>
                </div>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <Link
                  href="https://www.linkedin.com/in/kkmwangi"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-900 transition-colors font-light tracking-wide"
                >
                  LinkedIn
                </Link>
                <Link
                  href="https://github.com"
                  target="_blank"
                  className="text-gray-400 hover:text-gray-900 transition-colors font-light tracking-wide"
                >
                  GitHub
                </Link>
                <Link
                  href="mailto:ken@example.com"
                  className="text-gray-400 hover:text-gray-900 transition-colors font-light tracking-wide"
                >
                  Email
                </Link>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl transform rotate-6"></div>
                <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                  <Image src="/assets/ken.jpeg" alt="Ken Mwangi" fill className="object-cover" priority />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
