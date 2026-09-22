import Navbar from "@/components/Navbar";
import InteractiveBackground from "@/components/InteractiveBackground";
import Home from "@/components/Home";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Certifications from "@/components/Certifications";
import Resume from "@/components/Resume";
import GitHub from "@/components/Github";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero3D from "@/components/Hero3D";

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="relative">
        <InteractiveBackground />

        <div className="relative z-10">
          <Hero3D />
          <Home />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Education />
          <Certifications />
          <Resume />
          <GitHub />
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}