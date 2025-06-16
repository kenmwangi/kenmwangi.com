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
    <div className="min-h-screen bg-[#F7F7F8]">
      <div className="">
        {/* <Sidebar /> */}
        <div className="">
          <MainContent />
          <Footer />
        </div>
      </div>
    </div>
  )
}

