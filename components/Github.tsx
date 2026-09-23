"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  GitBranch,
  GithubIcon,
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
    <section
      id="github"
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
            08 / GITHUB
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Find me on GitHub
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            Explore my repositories, projects and experiments as I
            continue learning and building software.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            staggerChildren: 0.12,
          }}
          className="
            mt-10
            grid
            gap-4
            sm:grid-cols-3
          "
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
                className="
                  group
                  rounded-xl
                  border border-[var(--border)]
                  bg-[var(--card)]
                  p-5

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
                <div className="flex items-center justify-between">

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
                      size={19}
                      className="
                        text-[var(--accent)]
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  <span
                    className="
                      text-2xl
                      font-bold
                      text-[var(--foreground)]
                    "
                  >
                    {stat.value}
                  </span>
                </div>

                <p
                  className="
                    mt-4
                    text-sm
                    text-[var(--muted)]
                  "
                >
                  {stat.label}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub CTA */}
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
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut" as const,
          }}
          className="
            group
            mt-6
            flex
            flex-col
            gap-6
            rounded-xl
            border border-[var(--border)]
            bg-[var(--card)]
            p-6

            transition-all
            duration-300
            ease-out

            hover:border-[var(--accent)]
            hover:bg-[var(--card-secondary)]
            hover:shadow-lg
            hover:shadow-black/10

            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <div className="flex items-center gap-4">

            <div
              className="
                flex h-11 w-11
                shrink-0
                items-center justify-center
                rounded-lg
                border border-[var(--border)]
                bg-[var(--card-secondary)]
                transition-all duration-300
                group-hover:border-[var(--accent)]
              "
            >
              <GithubIcon
                size={21}
                className="
                  text-[var(--foreground)]
                  transition-all duration-300
                  group-hover:scale-110
                  group-hover:text-[var(--accent)]
                "
              />
            </div>

            <div>
              <h3
                className="
                  font-semibold
                  text-[var(--foreground)]
                "
              >
                Bhuvi285
              </h3>

              <p
                className="
                  mt-1
                  text-sm
                  text-[var(--muted)]
                "
              >
                github.com/Bhuvi285
              </p>
            </div>
          </div>

          <a
            href="https://github.com/Bhuvi285"
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex
              items-center
              justify-center
              gap-2
              rounded-lg
              bg-[var(--foreground)]
              px-5 py-3
              text-sm
              font-medium
              text-[var(--background)]

              transition-all duration-300

              hover:-translate-y-0.5
              hover:bg-[var(--accent)]
              hover:text-white
            "
          >
            Visit GitHub
            <ArrowUpRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}