"use client";

import { motion } from "framer-motion";
import {
  Code2,
  GraduationCap,
  Target,
} from "lucide-react";

import Hero3D from "@/components/Hero3D";

const highlights = [
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Building web applications across frontend, backend, APIs and databases.",
  },
  {
    icon: GraduationCap,
    title: "Computer Engineering",
    description:
      "Strong foundation in programming, data structures, databases and software development.",
  },
  {
    icon: Target,
    title: "Career Focus",
    description:
      "Focused on becoming a strong Full Stack Java Developer and building production-ready applications.",
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

export default function About() {
  return (
    <section
      id="about"
      className="px-6 py-24"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
            ease: "easeOut" as const,
          }}
        >
          <p className="font-mono text-sm text-green-400">
            01 / ABOUT ME
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A little about me
          </h2>
        </motion.div>

        {/* Main Content */}
        <div className="mt-12 grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Side - 3D Developer Scene */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              scale: 0.96,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
              ease: "easeOut" as const,
            }}
            className="relative flex min-h-[380px] items-center justify-center overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40"
          >
            <Hero3D />
          </motion.div>

          {/* Right Side - About Content */}
          <div>

            {/* Introduction */}
            <motion.div
              initial={{
                opacity: 0,
                x: 25,
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
            >
              <p className="max-w-2xl text-lg leading-8 text-zinc-400">
                I am a Computer Engineering student passionate about
                software development and building practical web
                applications.
              </p>

              <p className="mt-5 max-w-2xl leading-7 text-zinc-500">
                I enjoy working with Java, Spring Boot, React,
                Next.js and modern web technologies. I am continuously
                improving my understanding of full-stack development
                by building projects and exploring new technologies.
              </p>
            </motion.div>

            {/* Highlights */}
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
              className="mt-10 space-y-4"
            >
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    variants={cardVariants}
                    transition={{
                      duration: 0.5,
                      ease: "easeOut" as const,
                    }}
                    className="rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-colors hover:border-zinc-700"
                  >
                    <div className="flex gap-4">
                      
                      {/* Icon */}
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                        <Icon
                          size={20}
                          className="text-green-400"
                        />
                      </div>

                      {/* Text */}
                      <div>
                        <h3 className="font-semibold text-white">
                          {item.title}
                        </h3>

                        <p className="mt-1 text-sm leading-6 text-zinc-500">
                          {item.description}
                        </p>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}