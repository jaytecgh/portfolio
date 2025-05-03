// app/page.tsx
'use client';

import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FaLinkedin, FaInstagram, FaTiktok, FaGithub, FaWhatsapp } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const socialLinks = [
  { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/justice-amoah-618415242' },
  { icon: <FaInstagram />, url: 'https://www.instagram.com/jamoah4203?igsh=MThtY3QwYjgyd3V2dg==' },
  { icon: <FaTiktok />, url: 'https://www.tiktok.com/@jamoah4203?_t=ZM-8w34Bl7YUgY&_r=1' },
  { icon: <FaGithub />, url: 'https://github.com/Jamoah4203' },
  { icon: <FaWhatsapp />, url: 'https://wa.me/233556690455' },
];

const services = [
  { title: 'UI/UX Design', description: 'Modern and Responsive Designs for Web, Mobile & Desktop.' },
  { title: 'Implementation', description: 'Execute conceptual Designs, Ideas & Models into Real Time Solution.' },
  { title: 'Maintenance', description: 'Bug Fixing, Timely Updates, Improve functionalities and Technical Support.' },
  { title: 'Optimization', description: 'SEO, Fast Loads, Performance Tuning, Best Practices & Security.' },
];

export default function Page() {
  return (
    <>
      <Navbar />

      {/* Hero / About Section */}
      <section
  id="home"
  className="relative min-h-screen flex flex-col lg:flex-row items-center justify-center gap-12 px-6 py-20 bg-cover bg-center text-white"
  style={{ backgroundImage: "url('/bgpp.jpg')" }}
>
<div className="absolute inset-0 bg-black/60 z-0"></div>
<div className="relative z-10 text-center lg:text-left">
        <motion.img
          src="/profile-pic.png"
          alt="Justice Amoah"
          className="w-74 h-74 object-cover rounded-xl shadow-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        </div>

        <div className="relative z-10 text-center lg:text-left">
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          
          <h1 className="text-4xl font-bold mb-4">Hey, I’m Justice Amoah 👋</h1>
          <p className="mb-6 text-lg">
            Fullstack Developer, passionate about turning ideas into real-world apps using React, Next Js, Python, PHP, PostgreSQL, MySQL, WordPress and more.
            <br />
            <br />
            <i>"Where logic meets design, that’s where you’ll find me."</i>
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-4">
            <Button onClick={() => window.location.href = '#contact'}>Contact Me</Button>
            <Button variant="outline" onClick={() => window.open('/resume.pdf')}>Download Resume</Button>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start text-xl">
            {socialLinks.map(({ icon, url }, i) => (
              <a key={i} href={url} target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300">
                {icon}
              </a>
            ))}
          </div>
        </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white text-black">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-2">Services</h2>
          <p className="text-gray-600">What I can help you with</p>
          <i>"Code like an architect, think like a user."</i>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-6 max-w-6xl mx-auto">
          {services.map((service, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-2xl shadow-md p-6 hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Other Sections */}
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}
// Note: Make sure to replace '/your-photo.jpg' with the actual path to your photo and '/resume.pdf' with the actual path to your resume.