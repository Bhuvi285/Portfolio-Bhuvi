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
    <section id="skills" className="px-6 pt-10 pb-24">
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
            02 / SKILLS
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Technologies I work with
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            A collection of technologies and tools I have been
            learning and using while building projects.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            staggerChildren: 0.15,
          }}
          className="
            mt-12
            grid
            gap-5
            sm:grid-cols-2
            lg:grid-cols-3
          "
        >
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.title}
                variants={cardVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                }}
                className="
                  group
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
                {/* Card Header */}
                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex h-10 w-10
                      items-center justify-center
                      rounded-lg
                      border border-[var(--border)]
                      bg-[var(--card-secondary)]
                      transition-all duration-300
                      group-hover:border-[var(--accent)]
                    "
                  >
                    <Icon
                      size={20}
                      className="
                        text-[var(--accent)]
                        transition-transform
                        duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <h3
                    className="
                      font-semibold
                      text-[var(--foreground)]
                      transition-colors
                      duration-300
                      group-hover:text-[var(--accent)]
                    "
                  >
                    {group.title}
                  </h3>
                </div>

                {/* Skills */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="
                        rounded-md
                        border border-[var(--border)]
                        bg-[var(--card-secondary)]
                        px-3 py-1.5
                        text-sm
                        text-[var(--muted)]
                        transition-all duration-300

                        group-hover:border-[var(--border)]

                        hover:border-[var(--accent)]
                        hover:text-[var(--accent)]
                      "
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