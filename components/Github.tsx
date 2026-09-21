"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  Star,
} from "lucide-react";

const githubStats = [
  {
    label: "Repositories",
    value: "8+",
    icon: GitBranch,
  },
  {
    label: "Projects",
    value: "8",
    icon: GitBranch,
  },
  {
    label: "Open Source",
    value: "Active",
    icon: Star,
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

export default function GitHub() {
  return (
    <section id="github" className="px-6 py-24">
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
            08 / GITHUB
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Code, projects & experiments.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            I use GitHub to build projects, experiment with technologies
            and keep track of my development journey.
          </p>
        </motion.div>

        {/* GitHub content */}
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">

          {/* Main GitHub card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              ease: "easeOut" as const,
            }}
            className="rounded-xl border border-zinc-800 bg-zinc-950 p-8"
          >
            <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                  <GitBranch
                    size={24}
                    className="text-green-400"
                  />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white">
                    @Bhuvi285
                  </h3>

                  <p className="mt-1 text-sm text-zinc-500">
                    Full Stack Java Developer | MERN Developer
                  </p>
                </div>
              </div>

              <a
                href="https://github.com/Bhuvi285"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
              >
                Visit GitHub
                <ArrowUpRight size={16} />
              </a>
            </div>

            <p className="mt-8 max-w-2xl leading-7 text-zinc-400">
              Explore my projects, source code and experiments on GitHub.
              I regularly use Git and GitHub while learning new technologies
              and building practical applications.
            </p>

            <a
              href="https://github.com/Bhuvi285"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-green-300"
            >
              <GitBranch size={17} />
              Explore My Repositories
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1"
          >
            {githubStats.map((stat) => {
              const Icon = stat.icon;

              return (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut" as const,
                  }}
                  className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-950 p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                    <Icon
                      size={18}
                      className="text-green-400"
                    />
                  </div>

                  <div>
                    <p className="font-mono text-lg font-semibold text-white">
                      {stat.value}
                    </p>

                    <p className="text-sm text-zinc-500">
                      {stat.label}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}