"use client";

import { motion } from "framer-motion";
import { Briefcase, Code2, MapPin, Target } from "lucide-react";

const opportunities = [
  {
    icon: Code2,
    title: "Java Development",
    description:
      "Looking for internship opportunities where I can work with Java, Spring Boot, REST APIs and databases while gaining real-world backend development experience.",
    technologies: ["Java", "Spring Boot", "REST APIs", "SQL"],
  },
  {
    icon: Briefcase,
    title: "MERN Stack Development",
    description:
      "Interested in internship opportunities involving MongoDB, Express.js, React and Node.js, with a focus on building practical full-stack applications.",
    technologies: ["MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    icon: Target,
    title: "Open to Learning",
    description:
      "Looking for an environment where I can contribute to real projects, learn from experienced developers and continuously improve my software development skills.",
    technologies: ["Git", "GitHub", "Agile", "Problem Solving"],
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
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-12"
        >
          <p className="font-mono text-sm text-green-400">
            03 / EXPERIENCE
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Ready for my first opportunity.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            I am currently looking for internship opportunities where I can
            apply my skills, contribute to real-world projects and grow as a
            developer.
          </p>
        </motion.div>

        {/* Availability */}
        <motion.div
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: "easeOut" as const }}
          className="mb-8 flex items-center gap-3 rounded-xl border border-green-900/50 bg-green-950/20 p-4"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-900 bg-green-950">
            <MapPin size={18} className="text-green-400" />
          </div>

          <div>
            <p className="font-medium text-white">
              Open to internship opportunities
            </p>

            <p className="text-sm text-zinc-500">
              Java / Spring Boot and MERN Stack
            </p>
          </div>
        </motion.div>

        {/* Opportunity cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.15 }}
          className="grid gap-4 md:grid-cols-3"
        >
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;

            return (
              <motion.div
                key={opportunity.title}
                variants={cardVariants}
                transition={{
                  duration: 0.5,
                  ease: "easeOut" as const,
                }}
                className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <Icon size={20} className="text-green-400" />
                </div>

                <h3 className="mt-5 text-lg font-semibold text-white">
                  {opportunity.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-500">
                  {opportunity.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {opportunity.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 font-mono text-xs text-zinc-400"
                    >
                      {technology}
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