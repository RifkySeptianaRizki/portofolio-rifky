import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Expertise from "@/components/Expertise";
import Experience from "@/components/Experience";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-pure-black text-slate-gray font-body">
      <Hero />
      <Experience />
      <Projects />
      <Certificates />
      <Expertise />
      <FAQ />
      <Footer />
    </main>
  );
}
