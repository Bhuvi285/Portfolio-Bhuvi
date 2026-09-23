"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
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
    live:
      "https://chit-chat-the-live-chat-app.vercel.app",
    status: "completed",
    featured: true,
  },
  {
    title: "Auth MERN App",
    description:
      "A MERN stack authentication application focused on implementing user authentication and a full-stack web application workflow.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
    github:
      "https://github.com/Bhuvi285/auth-mern-app",
    live:
      "https://auth-mern-app-ui-five.vercel.app/",
    status: "completed",
    featured: true,
  },
  {
    title: "FleetBridge",
    description:
      "A full-stack project currently under development, focused on building a practical application while improving full-stack development skills.",
    technologies: ["In Progress"],
    github:
      "https://github.com/Bhuvi285/FleetBridge",
    live: "",
    status: "in-progress",
    featured: true,
  },
  {
    title: "RAG Support Assistant",
    description:
      "An experimental support assistant project exploring Retrieval-Augmented Generation and AI-powered question answering.",
    technologies: [
      "Python",
      "RAG",
      "AI",
    ],
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
    technologies: [
      "React",
      "JavaScript",
    ],
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
    <section
      id="projects"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut" as const,
          }}
        >
          <p className="font-mono text-sm text-[var(--accent)]">
            05 / PROJECTS
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Things I have built
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            A selection of projects I have built while learning
            full-stack development and exploring different
            technologies.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            mt-12
            grid
            gap-5
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                ease: "easeOut" as const,
              }}
              className="
                group
                flex
                flex-col
                rounded-xl
                border border-[var(--border)]
                bg-[var(--card)]
                p-6

                transition-all
                duration-300
                ease-out

                hover:-translate-y-1
                hover:border-[var(--accent)]
                hover:bg-[var(--card-secondary)]
                hover:shadow-lg
                hover:shadow-black/10
              "
            >
              {/* Project Header */}
              <div className="flex items-start justify-between gap-4">

                <div>
                  {project.featured && (
                    <span
                      className="
                        inline-flex
                        rounded-full
                        border border-[var(--border)]
                        bg-[var(--card-secondary)]
                        px-2.5 py-1
                        font-mono
                        text-[10px]
                        uppercase
                        tracking-wider
                        text-[var(--accent)]
                      "
                    >
                      Featured
                    </span>
                  )}

                  <h3
                    className="
                      mt-3
                      text-lg
                      font-semibold
                      text-[var(--foreground)]
                      transition-colors duration-300
                      group-hover:text-[var(--accent)]
                    "
                  >
                    {project.title}
                  </h3>
                </div>

                {/* Status */}
                <span
                  className={`
                    shrink-0
                    rounded-full
                    border
                    px-2.5 py-1
                    text-[10px]
                    font-medium
                    uppercase
                    tracking-wide

                    ${
                      project.status === "completed"
                        ? "border-[var(--border)] bg-[var(--card-secondary)] text-[var(--muted)]"
                        : "border-[var(--accent)]/40 bg-[var(--card-secondary)] text-[var(--accent)]"
                    }
                  `}
                >
                  {project.status === "completed"
                    ? "Completed"
                    : "In Progress"}
                </span>
              </div>

              {/* Description */}
              <p
                className="
                  mt-4
                  flex-1
                  text-sm
                  leading-7
                  text-[var(--muted)]
                  transition-colors duration-300
                  group-hover:text-[var(--foreground)]
                "
              >
                {project.description}
              </p>

              {/* Technologies */}
              <div className="mt-5 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="
                      rounded-md
                      border border-[var(--border)]
                      bg-[var(--card-secondary)]
                      px-2.5 py-1
                      text-xs
                      text-[var(--muted)]
                      transition-all duration-300

                      hover:border-[var(--accent)]
                      hover:text-[var(--accent)]
                    "
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Project Links */}
              <div
                className="
                  mt-6
                  flex
                  items-center
                  gap-3
                  border-t
                  border-[var(--border)]
                  pt-5
                "
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    border border-[var(--border)]
                    bg-[var(--card)]
                    px-3.5 py-2
                    text-sm
                    text-[var(--muted)]

                    transition-all duration-300

                    hover:-translate-y-0.5
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  <Code2 size={16} />
                  GitHub
                </a>

                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      rounded-lg
                      bg-[var(--foreground)]
                      px-3.5 py-2
                      text-sm
                      font-medium
                      text-[var(--background)]

                      transition-all duration-300

                      hover:-translate-y-0.5
                      hover:bg-[var(--accent)]
                      hover:text-white
                    "
                  >
                    Live Demo
                    <ArrowUpRight size={16} />
                  </a>
                )}

                {/* External link indicator */}
                <ExternalLink
                  size={15}
                  className="
                    ml-auto
                    text-[var(--muted-light)]
                    transition-all
                    duration-300
                    group-hover:translate-x-0.5
                    group-hover:-translate-y-0.5
                  "
                />
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}