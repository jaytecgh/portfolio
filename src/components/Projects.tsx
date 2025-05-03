// src/components/Projects.tsx
import ProjectCard from "./ProjectCard";

const projects = [
 {
    title: "LOGIN",
    image: "/acs-login.png",
    description: "A secure login system for a construction supply web platform.",
    fullDescription: "This project features a user authentication system developed for a construction supply management platform. It supports secure login with session handling, error validation, and user-friendly feedback. Built using modern technologies, it ensures both backend reliability and frontend responsiveness. Key challenges included implementing secure authentication flows and integrating the frontend with Django APIs. The final solution ensures role-based access control and smooth user experience across devices.",
    techStack: "React, Typescript, Tailwind CSS, Django REST Framework",
    link: "https://acs-chi.vercel.app/",
 }  ,    
 {
    title: "UI DASHBOARD",
    image: "/acs-dash.png",
    description: "An interactive admin dashboard for managing construction supply operations.",
    fullDescription: "This project delivers a responsive UI dashboard designed for administrators to monitor and manage inventory, sales, and logistics in a construction supply business. It includes visual metrics, quick actions, and navigation across key modules. Challenges included UI responsiveness across devices and real-time data binding. The solution leverages a React-based frontend with API integrations for data fetching and role-based access display.",
    techStack: "React, Typescript, Tailwind CSS, Django REST Framework",
    link: "https://github.com/Jamoah4203/acs-local",
  },
    
  {
    title: "SMC COMPANY",
    image: "/smc.png",
    description: "A professional company website for SMC - Social Media Awareness.",
    fullDescription: "This website was built for SMC Company to for educate the teenagers on the effective use of the social media.",
    techStack: "PHP, CSS, HTML",
    link: "http://smcgh.42web.io/",
  },
    
  {
    title: "REST-FRAMEWORK API",
    image: "/api-dr.png",
    description: "A RESTful API for managing construction inventory and transactions.",
    fullDescription: "This Django REST Framework-based API powers core backend functions for a construction supply platform. It handles endpoints for users, products, purchases, sales, and transport logistics.  Features include authentication, CRUD operations, and secure data exchange.  One of the main challenges was creating scalable, well-documented endpoints for frontend consumption and external integrations.",
    techStack: "Django REST Framework, Python",
    link: "https://acs-0cah.onrender.com/",
  },
    
  {
    title: "UX/UI DESIGNS",
    image: "/acs.png",
    description: "A Figma design for supply chain solution in the construction materials industry.",
    fullDescription: "This is a full-stack web application UI design to streamline purchasing, inventory, client sales, and delivery processes in the construction sector. It combines user management, product, invoice, and performance report.",
    techStack: "Figma, UI/UX Design",
    link: "https://acs-chi.vercel.app/",
  }, 
    
  {
    title: "WEBSITE",
    image: "/website.png",
    description: "A Portfolio Website for Myself.",
    fullDescription: "This is my personal website for built ith love, credibility and professionalism. The site includes a mobile-friendly layout, skills highlights.",
    techStack: "Booststrap, HTML, CSS, JavaScript",
    link: "https://jamoah4203.github.io/justice/",
  }  
  // Add more projects here...
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
