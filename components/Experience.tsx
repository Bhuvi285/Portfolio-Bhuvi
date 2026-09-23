"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Code2,
  Target,
} from "lucide-react";

const opportunities = [
  {
    icon: Code2,
    title: "Java Development",
    description:
      "Looking for internship opportunities where I can work with Java, Spring Boot, REST APIs and databases while gaining real-world backend development experience.",
    technologies: [
      "Java",
      "Spring Boot",
      "REST APIs",
      "SQL",
    ],
  },
  {
    icon: Briefcase,
    title: "MERN Stack Development",
    description:
      "Interested in internship opportunities involving MongoDB, Express.js, React and Node.js, with a focus on building practical full-stack applications.",
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
    ],
  },
  {
    icon: Target,
    title: "Open to Learning",
    description:
      "Looking for an environment where I can contribute to real projects, learn from experienced developers and continuously improve my software development skills.",
    technologies: [
      "Git",
      "GitHub",
      "Agile",
      "Problem Solving",
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

export default function Experience() {
  return (
    <section
      id="experience"
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
            03 / EXPERIENCE
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Where I want to grow
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            As a fresher, I am looking for opportunities where I can
            apply what I have learned, work on real-world projects
            and continue developing my technical skills.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{
            opacity: 0,
            x: -25,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut" as const,
          }}
          className="
            mt-10
            flex items-center gap-3
            rounded-lg
            border border-[var(--border)]
            bg-[var(--card-secondary)]
            px-4 py-3
          "
        >
          <span
            className="
              h-2.5 w-2.5
              rounded-full
              bg-[var(--accent)]
            "
          />

          <p className="text-sm text-[var(--muted)]">
            Currently open to internship opportunities
          </p>
        </motion.div>

        {/* Opportunity Cards */}
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
            mt-8
            grid
            gap-5
            lg:grid-cols-3
          "
        >
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;

            return (
              <motion.article
                key={opportunity.title}
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
                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11
                    items-center justify-center
                    rounded-lg
                    border border-[var(--border)]
                    bg-[var(--card-secondary)]
                    transition-all duration-300
                    group-hover:border-[var(--accent)]
                  "
                >
                  <Icon
                    size={21}
                    className="
                      text-[var(--accent)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mt-5
                    text-lg font-semibold
                    text-[var(--foreground)]
                    transition-colors duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  {opportunity.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    mt-3
                    text-sm
                    leading-7
                    text-[var(--muted)]
                    transition-colors duration-300
                    group-hover:text-[var(--foreground)]
                  "
                >
                  {opportunity.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {opportunity.technologies.map((technology) => (
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
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}