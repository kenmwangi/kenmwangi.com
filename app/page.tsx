import About from "@/components/landing/About";
import Articles from "@/components/landing/Articles";
import Education from "@/components/landing/Education";
import Experience from "@/components/landing/Experience";
import Footer from "@/components/landing/Footer";
import Header from "@/components/landing/Header";
import Profile from "@/components/landing/Profile";
import Projects from "@/components/landing/Projects";
import Skills from "@/components/landing/Skills";
import Subscribe from "@/components/landing/Subscribe";
import StructuredData from "@/components/seo/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ken Mwangi | Full Stack Engineer",
  description:
    "Ken Mwangi is a seasoned Full Stack Engineer with expertise in microservices, cloud services, and modern web technologies.",
  alternates: {
    canonical: "https://kenmwangi.com",
  },
};

export default function Home() {
  return (
    <main className="">
      <StructuredData />
      <Header />
      <div className="w-full max-w-3xl mx-auto pt-10 md:pt-16 px-4 sm:px-6 lg:px-8">
        <Profile />
        <About />
        <Projects />
        {/* <Testimonials /> */}
        <Skills />
        <Experience />
        <Education />
        <Articles />
        <Subscribe />
        {/*
         */}
      </div>
      <Footer />
    </main>
  );
}
