import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  MessageCircle,
  Heart,
  Repeat2,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Building2,
  Code,
  FileText,
  Briefcase,
  Globe,
} from "lucide-react";
import Link from "next/link";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="pt-8">
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Profile Section */}
          <div className="flex items-start gap-6 mb-8">
            <div className="flex-1 space-y-4">
              <h1 className="text-4xl font-bold text-gray-900 mb-2">
                Ken Mwangi
              </h1>
              <p className="text-gray-500 mb-4 text-sm">
                Full-stack developer & UI/UX designer. Building digital
                experiences that matter.
              </p>

              {/* Social Links */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="bg-gray-50">
                    <Link
                      href="https://www.github.com/kenmwangi"
                      target="_blank"
                      rel="noreffer noopener"
                      className="flex gap-x-1 items-center"
                    >
                      <Github className="h-3 w-3 mr-1" />
                      GitHub
                    </Link>
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-50">
                    <Link
                      href="https://www.linkedin.com/in/kkmwangi"
                      target="_blank"
                      rel="noreffer noopener"
                      className="flex gap-x-1 items-center"
                    >
                      <Linkedin className="h-3 w-3 mr-1" />
                      LinkedIn
                    </Link>
                  </Badge>
                  <Badge variant="secondary" className="bg-gray-50">
                    <Link
                      href="https://www.twitter.com/@ken_cipher"
                      target="_blank"
                      rel="noreffer noopener"
                      className="flex gap-x-1 items-center"
                    >
                      <Twitter className="h-3 w-3 mr-1" />
                      @ken_cipher
                    </Link>
                  </Badge>
                </div>
              </div>
            </div>

            {/* Profile Image */}
            <Avatar className="h-24 w-24 border border-gray-200">
              <AvatarImage src="/assets/ken.jpeg" />
              <AvatarFallback className="bg-teal-600 text-white text-2xl">
                KM
              </AvatarFallback>
            </Avatar>
          </div>

          {/* Navigation Tabs using shadcn UI Tabs */}
          <Tabs defaultValue="portfolio" className="mb-8">
            <TabsList className="flex flex-wrap w-full mb-8 bg-transparent items-start justify-start">
              <TabsTrigger
                value="portfolio"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-gray-100 data-[state=active]:text-gray-600 transition-all bg-transparent rounded-none mr-2 sm:mr-4"
              >
                <Code className="h-4 w-4 hidden sm:inline" />
                Portfolio
              </TabsTrigger>
              <TabsTrigger
                value="articles"
                className="flex items-center gap-2 px-1 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-gray-100 data-[state=active]:text-gray-600 transition-all bg-transparent rounded-none mr-2 sm:mr-4"
              >
                <FileText className="h-4 w-4 hidden sm:inline" />
                Articles
              </TabsTrigger>
              <TabsTrigger
                value="case-studies"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-gray-100 data-[state=active]:text-gray-600 transition-all bg-transparent rounded-none mr-2 sm:mr-4"
              >
                <Briefcase className="h-4 w-4 hidden sm:inline" />
                Case Studies
              </TabsTrigger>
              <TabsTrigger
                value="industry"
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 border-b-2 border-transparent data-[state=active]:border-gray-100 data-[state=active]:text-gray-600 transition-all bg-transparent rounded-none"
              >
                <Building2 className="h-4 w-4 hidden sm:inline" />
                <span className="whitespace-nowrap">Industry Competence</span>
              </TabsTrigger>
            </TabsList>

            {/* Portfolio Tab Content */}
            <TabsContent value="portfolio" className="space-y-6">
              {/* Project Post */}
              <Card className="overflow-hidden">
                <div className="flex items-start gap-3 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/assets/ken.jpeg" />
                    <AvatarFallback className="bg-teal-600 text-white">
                      KM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Ken Mwangi</span>
                      <span className="text-sm text-gray-500">
                        Dec 15, 2024
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 h-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4 opacity-90">
                        MODERN WEB
                      </h2>
                      <h3 className="text-6xl font-bold text-orange-400 mb-4">
                        DEVELOPMENT
                      </h3>
                      <p className="text-2xl text-cyan-300 font-medium">
                        BUILDING THE FUTURE
                      </p>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">KM</span>
                      </div>
                      <span>Ken Mwangi Portfolio</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Full-Stack E-Commerce Platform
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Built with Next.js, TypeScript, and Tailwind CSS. Features
                      include user authentication, payment processing, and
                      real-time inventory management.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-red-500">
                          <Heart className="h-4 w-4" />
                          <span>247</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500">
                          <MessageCircle className="h-4 w-4" />
                          <span>18</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-500">
                          <Repeat2 className="h-4 w-4" />
                          <span>32</span>
                        </button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Project
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Another Project */}
              <Card className="overflow-hidden">
                <div className="flex items-start gap-3 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/assets/ken.jpeg" />
                    <AvatarFallback className="bg-teal-600 text-white">
                      KM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Ken Mwangi</span>
                      <span className="text-sm text-gray-500">
                        Dec 10, 2024
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-emerald-800 via-teal-800 to-cyan-800 h-80 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-4xl font-bold mb-4 opacity-90">
                        MOBILE FIRST
                      </h2>
                      <h3 className="text-6xl font-bold text-yellow-400 mb-4">
                        DESIGN
                      </h3>
                      <p className="text-2xl text-green-300 font-medium">
                        RESPONSIVE & ACCESSIBLE
                      </p>
                    </div>
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white text-sm">
                      <div className="w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
                        <span className="text-xs font-bold">KM</span>
                      </div>
                      <span>UI/UX Design Portfolio</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="font-semibold text-lg mb-2">
                      Mobile Banking App Redesign
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      Complete redesign of a mobile banking application focusing
                      on user experience, accessibility, and modern design
                      principles.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <button className="flex items-center gap-1 hover:text-red-500">
                          <Heart className="h-4 w-4" />
                          <span>189</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-blue-500">
                          <MessageCircle className="h-4 w-4" />
                          <span>12</span>
                        </button>
                        <button className="flex items-center gap-1 hover:text-green-500">
                          <Repeat2 className="h-4 w-4" />
                          <span>24</span>
                        </button>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        View Design
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Articles Tab Content */}
            <TabsContent value="articles" className="space-y-6">
              <Card className="overflow-hidden">
                <div className="flex items-start gap-3 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/assets/ken.jpeg" />
                    <AvatarFallback className="bg-teal-600 text-white">
                      KM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Ken Mwangi</span>
                      <span className="text-sm text-gray-500">Jan 5, 2025</span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-gray-800 via-gray-900 to-black h-60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-3xl font-bold mb-2">
                        Modern React Patterns
                      </h2>
                      <p className="text-xl text-gray-300 font-medium">
                        Best practices for 2025
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">
                      An in-depth exploration of React design patterns that
                      improve code quality, maintainability, and performance in
                      modern web applications.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>124</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>32</span>
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read Article
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <div className="flex items-start gap-3 p-4">
                  <Avatar className="h-10 w-10">
                    <AvatarImage src="/assets/ken.jpeg" />
                    <AvatarFallback className="bg-teal-600 text-white">
                      KM
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-medium">Ken Mwangi</span>
                      <span className="text-sm text-gray-500">
                        Dec 20, 2024
                      </span>
                    </div>
                  </div>
                </div>

                <CardContent className="p-0">
                  <div className="relative bg-gradient-to-br from-blue-800 via-blue-900 to-black h-60 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h2 className="text-3xl font-bold mb-2">
                        Next.js 15 Features
                      </h2>
                      <p className="text-xl text-gray-300 font-medium">
                        What&apos;s new and improved
                      </p>
                    </div>
                  </div>

                  <div className="p-4">
                    <p className="text-gray-600 text-sm mb-4">
                      A comprehensive overview of the latest features in Next.js
                      15 and how they can enhance your web development workflow.
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <Heart className="h-4 w-4" />
                          <span>98</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <MessageCircle className="h-4 w-4" />
                          <span>15</span>
                        </span>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-blue-600 hover:text-blue-700"
                      >
                        <ExternalLink className="h-4 w-4 mr-1" />
                        Read Article
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Case Studies Tab Content */}
            <TabsContent value="case-studies" className="space-y-6">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Globe className="h-10 w-10 text-gray-700" />
                    <div>
                      <h3 className="text-xl font-bold">African Real Estate</h3>
                      <a
                        href="https://african-realestate.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm flex items-center"
                      >
                        african-realestate.com
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Project Overview</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      A comprehensive real estate platform for the African
                      market, featuring property listings, agent profiles, and
                      market analytics. The platform connects buyers, sellers,
                      and real estate professionals.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Role</h5>
                        <p className="text-sm text-gray-600">
                          Lead Full-Stack Developer
                        </p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Timeline</h5>
                        <p className="text-sm text-gray-600">8 months</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Team Size</h5>
                        <p className="text-sm text-gray-600">5 developers</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Launch</h5>
                        <p className="text-sm text-gray-600">2023</p>
                      </div>
                    </div>

                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">TypeScript</Badge>
                      <Badge variant="outline">Tailwind CSS</Badge>
                      <Badge variant="outline">Node.js</Badge>
                      <Badge variant="outline">PostgreSQL</Badge>
                      <Badge variant="outline">AWS</Badge>
                      <Badge variant="outline">Mapbox API</Badge>
                    </div>

                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                      <li>
                        Implemented a responsive design that works across all
                        devices
                      </li>
                      <li>
                        Built a custom property search algorithm with
                        geolocation features
                      </li>
                      <li>
                        Integrated payment processing for property bookings and
                        agent subscriptions
                      </li>
                      <li>
                        Achieved 40% faster page load times compared to
                        competitors
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full">View Full Case Study</Button>
                </CardContent>
              </Card>

              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <Building2 className="h-10 w-10 text-gray-700" />
                    <div>
                      <h3 className="text-xl font-bold">
                        Prime African Estates
                      </h3>
                      <a
                        href="https://www.primeafricanestates.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 text-sm flex items-center"
                      >
                        primeafricanestates.com
                        <ExternalLink className="h-3 w-3 ml-1" />
                      </a>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-medium mb-2">Project Overview</h4>
                    <p className="text-gray-600 text-sm mb-4">
                      A luxury real estate platform focusing on high-end
                      properties across Africa. The platform offers virtual
                      tours, detailed property insights, and concierge services
                      for international buyers.
                    </p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div>
                        <h5 className="text-sm font-medium mb-1">Role</h5>
                        <p className="text-sm text-gray-600">
                          Frontend Developer & UI/UX Designer
                        </p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Timeline</h5>
                        <p className="text-sm text-gray-600">6 months</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Team Size</h5>
                        <p className="text-sm text-gray-600">3 developers</p>
                      </div>
                      <div>
                        <h5 className="text-sm font-medium mb-1">Launch</h5>
                        <p className="text-sm text-gray-600">2024</p>
                      </div>
                    </div>

                    <h4 className="font-medium mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline">React</Badge>
                      <Badge variant="outline">Next.js</Badge>
                      <Badge variant="outline">Framer Motion</Badge>
                      <Badge variant="outline">Three.js</Badge>
                      <Badge variant="outline">Supabase</Badge>
                      <Badge variant="outline">Vercel</Badge>
                    </div>

                    <h4 className="font-medium mb-2">Key Achievements</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1 mb-4">
                      <li>
                        Designed and implemented immersive 3D property tours
                      </li>
                      <li>
                        Created a multilingual interface supporting 5 languages
                      </li>
                      <li>Built a custom CMS for property management</li>
                      <li>
                        Implemented advanced filtering and search capabilities
                      </li>
                    </ul>
                  </div>

                  <Button className="w-full">View Full Case Study</Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Industry Competence Tab Content */}
            <TabsContent value="industry" className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Technology Stack</h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        Frontend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>React</Badge>
                        <Badge>Next.js</Badge>
                        <Badge>TypeScript</Badge>
                        <Badge>Vue.js</Badge>
                        <Badge>Angular</Badge>
                        <Badge>Tailwind CSS</Badge>
                        <Badge>Framer Motion</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        Backend
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>Node.js</Badge>
                        <Badge>Express</Badge>
                        <Badge>Python</Badge>
                        <Badge>Django</Badge>
                        <Badge>Ruby on Rails</Badge>
                        <Badge>Java</Badge>
                        <Badge>PHP</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        Database & Cloud
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        <Badge>PostgreSQL</Badge>
                        <Badge>MongoDB</Badge>
                        <Badge>MySQL</Badge>
                        <Badge>AWS</Badge>
                        <Badge>Azure</Badge>
                        <Badge>Google Cloud</Badge>
                        <Badge>Firebase</Badge>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    Industry Experience
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        Real Estate & Construction
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Extensive experience developing platforms for property
                        listings, virtual tours, and real estate management
                        systems across the African market.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Property Management</Badge>
                        <Badge variant="outline">Virtual Tours</Badge>
                        <Badge variant="outline">Booking Systems</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        Finance & Banking
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Developed secure financial applications with focus on
                        transaction processing, authentication, and regulatory
                        compliance.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Payment Processing</Badge>
                        <Badge variant="outline">Financial Reporting</Badge>
                        <Badge variant="outline">Secure Authentication</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        E-commerce & Retail
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Built scalable online shopping platforms with inventory
                        management, payment integration, and personalized user
                        experiences.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Shopping Cart Systems</Badge>
                        <Badge variant="outline">Inventory Management</Badge>
                        <Badge variant="outline">Product Recommendations</Badge>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-medium mb-3 text-gray-800">
                        AI & Machine Learning
                      </h4>
                      <p className="text-sm text-gray-600 mb-3">
                        Implemented AI solutions for data analysis, predictive
                        modeling, and automated decision-making processes.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Recommendation Systems</Badge>
                        <Badge variant="outline">
                          Natural Language Processing
                        </Badge>
                        <Badge variant="outline">Predictive Analytics</Badge>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-4">
                    Certifications & Training
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Code className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          AWS Certified Solutions Architect
                        </h4>
                        <p className="text-sm text-gray-600">
                          Amazon Web Services • 2023
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Code className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Google Professional Cloud Developer
                        </h4>
                        <p className="text-sm text-gray-600">
                          Google Cloud • 2022
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Code className="h-6 w-6 text-gray-700" />
                      </div>
                      <div>
                        <h4 className="font-medium">
                          Meta Frontend Developer Professional Certificate
                        </h4>
                        <p className="text-sm text-gray-600">Meta • 2021</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
