import Hero from "@/components/Hero";
import AboutStats from "@/components/AboutStats";
import Projects from "@/components/Projects";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pure-black text-slate-gray font-body">
      <Hero />
      <AboutStats />
      <Projects />
      <Expertise />
      <Experience />
      <FAQ />
      <Footer />
    </main>
  );
}
