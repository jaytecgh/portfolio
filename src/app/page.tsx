// app/page.tsx
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#08089c] to-[#817cc6] text-white text-center py-20">
        <h2 className="text-5xl font-semibold mb-4">Welcome to My UI Portfolio</h2>
        <p className="text-lg">Fullstack Dev | Python | React | PHP |Next Js | WordPress</p>
        <a href="#projects" className="mt-6 bg-yellow-500 px-6 py-3 rounded-full text-black hover:bg-yellow-600 transition">View Projects</a>
      </section>
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
