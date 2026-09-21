"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Database,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Languages",
    icon: Braces,
    skills: [
      "Java",
      "JavaScript",
      "TypeScript",
      "Python",
      "SQL",
    ],
  },
  {
    title: "Frontend",
    icon: Braces,
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "Bootstrap",
      "Tailwind CSS",
    ],
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      "Spring Boot",
      "Spring Security",
      "REST APIs",
      "Node.js",
      "Express",
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    title: "Tools & Technologies",
    icon: Wrench,
    skills: [
      "Git",
      "GitHub",
      "Docker",
      "Postman",
      "Kafka",
      "Redis",
    ],
  },
];

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            02 / SKILLS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Technologies I work with.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            A collection of technologies and tools I use while
            building full-stack applications.
          </p>
        </div>

        {/* Skill Groups */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700"
              >
                {/* Group Header */}
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Icon
                      size={20}
                      className="text-green-400"
                    />
                  </div>

                  <h3 className="font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}