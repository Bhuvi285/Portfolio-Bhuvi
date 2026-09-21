"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  GitBranch,
  Layers,
} from "lucide-react";

const projects = [
  {
    title: "ChitChat — The Live Chat App",
    description:
      "A live chat application focused on building real-time communication functionality with a modern web interface.",
    technologies: [
      "JavaScript",
      "React.js",
      "Node.js/Express.js",
      "Socket.io",
    ],
    github:
      "https://github.com/Bhuvi285/ChitChat-The_Live_Chat_App",
    live: "https://chit-chat-the-live-chat-app.vercel.app",
    status: "completed",
    featured: true,
  },
  {
    title: "Auth MERN App",
    description:
      "A MERN stack authentication application focused on implementing user authentication and a full-stack web application workflow.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
    github: "https://github.com/Bhuvi285/auth-mern-app",
    live: "https://auth-mern-app-ui-five.vercel.app/",
    status: "completed",
    featured: true,
  },
  {
    title: "FleetBridge",
    description:
      "A full-stack project currently under development, focused on building a practical application while improving full-stack development skills.",
    technologies: ["In Progress"],
    github: "https://github.com/Bhuvi285/FleetBridge",
    live: "",
    status: "in-progress",
    featured: true,
  },
  {
    title: "RAG Support Assistant",
    description:
      "An experimental support assistant project exploring Retrieval-Augmented Generation and AI-powered question answering.",
    technologies: ["Python", "RAG", "AI"],
    github:
      "https://github.com/Bhuvi285/RAG-support-assistant",
    live: "",
    status: "completed",
    featured: false,
  },
  {
    title: "Contact Manager App",
    description:
      "A contact management application built to practice application structure, data handling and CRUD-based functionality.",
    technologies: [
      "JavaScript",
      "React",
      "Next.js",
    ],
    github:
      "https://github.com/Bhuvi285/Contact-Manager-App",
    live: "",
    status: "completed",
    featured: false,
  },
  {
    title: "Student Management System",
    description:
      "A student management project currently under development for managing student-related information through a web application.",
    technologies: [
      "Java",
      "Spring Boot",
      "Rest APIs",
      "In Progress",
    ],
    github:
      "https://github.com/Bhuvi285/Student-management-system",
    live: "",
    status: "in-progress",
    featured: false,
  },
  {
    title: "Interview Preparation App",
    description:
      "A project currently under development focused on creating an application to support interview preparation and technical learning.",
    technologies: ["In Progress"],
    github:
      "https://github.com/Bhuvi285/Interview-preparation-App",
    live: "",
    status: "in-progress",
    featured: false,
  },
  {
    title: "To-Do List",
    description:
      "A React-based task management application created to practice component-based UI development and application state handling.",
    technologies: ["React", "JavaScript"],
    github:
      "https://github.com/Bhuvi285/To-Do-List-with-React-JS",
    live: "",
    status: "completed",
    featured: false,
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Projects() {
  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 0.6,
            ease: "easeOut" as const,
          }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-green-400">
            05 / PROJECTS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Things I&apos;ve built.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            A collection of projects I&apos;ve built while learning and
            applying full-stack development, React and modern web
            technologies.
          </p>
        </motion.div>

        {/* Project cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ staggerChildren: 0.12 }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut" as const,
              }}
              className={`group flex h-full flex-col rounded-xl border bg-zinc-950 p-6 transition-colors ${
                project.featured
                  ? "border-green-900/60"
                  : "border-zinc-800"
              } hover:border-zinc-700`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <Layers
                    size={20}
                    className="text-green-400"
                  />
                </div>

                <div className="flex flex-wrap justify-end gap-2">
                  {project.featured && (
                    <span className="rounded-full border border-green-900/60 bg-green-950/30 px-3 py-1 font-mono text-xs text-green-400">
                      Featured
                    </span>
                  )}

                  {project.status === "in-progress" && (
                    <span className="rounded-full border border-yellow-900/60 bg-yellow-950/30 px-3 py-1 font-mono text-xs text-yellow-400">
                      In Progress
                    </span>
                  )}
                </div>
              </div>

              {/* Project content */}
              <div className="mt-6 flex-1">
                <h3 className="text-xl font-semibold text-white">
                  {project.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="mt-6 flex items-center gap-4 border-t border-zinc-800 pt-5">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-white"
                >
                  <GitBranch size={17} />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
                  >
                    <ExternalLink size={17} />
                    Live Demo
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}