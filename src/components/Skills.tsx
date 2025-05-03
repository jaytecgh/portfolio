// src/components/Skills.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion"

interface Skill {
  name: string;
  icon: string;
}

const skills: Skill[] = [
  { name: "React", icon: "/icons/react.svg" },
  { name: "Next.js", icon: "/icons/nextdotjs.svg" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg" },
  { name: "TypeScript", icon: "/icons/typescript.svg" },
  { name: "Node.js", icon: "/icons/nodedotjs.svg" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg" },
  { name: "Django", icon: "/icons/django.svg" },
  { name: "Laravel", icon: "/icons/laravel.svg" },
  { name: "Woocommerce", icon: "/icons/woocommerce.svg" },
  { name: "MySQL", icon: "/icons/mysql.svg" },
  { name: "WordPress", icon: "/icons/wordpress.svg" },
  { name: "GitHub", icon: "/icons/github.svg" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-white text-black">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-10">Skills & Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
            >
              <Image
                src={skill.icon}
                alt={skill.name}
                width={64}
                height={64}
                className="mb-4"
              />
              <h3 className="text-lg font-medium">{skill.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
