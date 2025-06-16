import { Sidebar } from "@/components/layout/sidebar"
import { MainContent } from "@/components/layout/main-content"
import { Footer } from "@/components/layout/footer"
import type { Metadata } from "next"

export const metadata: Metadata = {
  // title: "Home",
  description:
    "Ken Mwangi is a fullstack engineer who builds digital experiences. Currently working at african-realestate.com.",
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        {/* <Sidebar /> */}
        <div className="flex-1">
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  )
}

