"use client"

import Link from "next/link"
import { Home, User, Briefcase, BookOpen, Mail, Sun, Moon } from "lucide-react"
import { useState } from "react"
import { usePathname } from "next/navigation"

export function Sidebar() {
  const [darkMode, setDarkMode] = useState(false)
  const pathname = usePathname()

  const navItems = [
    { icon: Home, href: "/", label: "Home" },
    { icon: User, href: "#about", label: "About" },
    { icon: Briefcase, href: "#work", label: "Work" },
    { icon: BookOpen, href: "/blog", label: "Blog" },
    { icon: Mail, href: "#contact", label: "Contact" },
  ]

  return (
    <aside className="fixed left-0 top-0 h-full w-16 bg-white border-r border-gray-100 flex flex-col items-center py-8 z-50 shadow-sm">
      <nav className="flex flex-col space-y-6">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (item.href.startsWith("#") && pathname === "/")
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`p-3 rounded-xl transition-all duration-200 ${
                isActive ? "bg-gray-900 text-white shadow-md" : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
              }`}
              title={item.label}
            >
              <item.icon className="h-5 w-5" />
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-3 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-xl transition-all duration-200"
          title="Toggle theme"
        >
          {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </div>
    </aside>
  )
}
