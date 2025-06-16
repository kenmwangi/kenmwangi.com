import Link from "next/link"
import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-2">
      
        <div className="border-t border-gray-100 mt-1 py-8 text-center">
          <p className="text-gray-500 text-sm flex items-center justify-center gap-2">
            Made with <Heart className="h-4 w-4 text-red-500" /> in Nairobi, KE &copy; {new Date().getFullYear()}
          </p>
        </div>
     
    </footer>
  )
}
