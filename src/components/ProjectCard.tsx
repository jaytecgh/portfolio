// src/components/ProjectCard.tsx
"use client";

import { useState } from "react";

// Define the structure of the project object
interface Project {
  image: string;
  title: string;
  description: string;
  fullDescription: string;
  techStack: string;
  link: string;
}

// Define the props for the component
interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="bg-white shadow-lg rounded-lg p-6 group hover:shadow-xl transition">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-48 object-cover rounded-md mb-4 group-hover:opacity-75 transition"
      />
      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
      <p className="text-gray-700">{project.description}</p>
      <button
        onClick={() => setShowModal(true)}
        className="mt-4 text-blue-500"
      >
        View Details
      </button>

      {showModal && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-[#020080] bg-opacity-50 z-50"
          onClick={() => setShowModal(false)}
        >
          <div
            className="bg-white p-6 rounded-lg max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
            <p className="text-gray-700 mb-4">{project.fullDescription}</p>
            <p className="text-sm text-gray-500">Tech Stack: {project.techStack}</p>
            <div className="mt-4">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500"
              >
                Visit Project
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
