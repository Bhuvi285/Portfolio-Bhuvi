"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Terminal,
} from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-[calc(100vh-73px)]
        items-center
        overflow-hidden
        px-6
        py-20
      "
    >
      <div
        className="
          mx-auto
          grid
          w-full
          max-w-7xl
          items-center
          gap-16
          lg:grid-cols-[1.05fr_0.95fr]
        "
      >
        {/* =========================
            LEFT CONTENT
        ========================== */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Status */}
          <motion.div
            variants={itemVariants}
            className="
              mb-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border border-[var(--border)]
              bg-[var(--card-secondary)]
              px-3
              py-1.5
              font-mono
              text-xs
              text-[var(--muted)]
              transition-colors
              duration-300
            "
          >
            <span
              className="
                h-2
                w-2
                animate-pulse
                rounded-full
                bg-[var(--accent)]
              "
            />

            Available for opportunities
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="
              max-w-4xl
              text-5xl
              font-bold
              leading-tight
              tracking-tight
              text-[var(--foreground)]
              sm:text-6xl
              lg:text-7xl
            "
          >
            Hi, I&apos;m{" "}
            <span className="text-[var(--accent)]">
              Bhuvanesh.
            </span>
          </motion.h1>

          {/* Role */}
          <motion.h2
            variants={itemVariants}
            className="
              mt-4
              max-w-3xl
              text-2xl
              font-semibold
              text-[var(--foreground)]
              sm:text-3xl
            "
          >
            Full Stack Java Developer.
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="
              mt-6
              max-w-2xl
              text-base
              leading-7
              text-[var(--muted)]
              sm:text-lg
            "
          >
            I build modern and scalable web applications using
            Java, Spring Boot, React and MERN technologies.
          </motion.p>

          {/* Actions */}
          <motion.div
            variants={itemVariants}
            className="mt-8 flex flex-wrap gap-4"
          >
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                bg-[var(--accent)]
                px-5
                py-3
                text-sm
                font-semibold
                text-white

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:brightness-110
                hover:shadow-lg
                hover:shadow-black/10
              "
            >
              View Projects
              <ArrowRight size={17} />
            </a>

            {/* Secondary Button */}
            <a
              href="/resume.pdf"
              className="
                inline-flex
                items-center
                gap-2
                rounded-lg
                border border-[var(--border)]
                bg-[var(--card)]
                px-5
                py-3
                text-sm
                font-medium
                text-[var(--foreground)]

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-[var(--accent)]
                hover:bg-[var(--card-secondary)]
                hover:text-[var(--accent)]
              "
            >
              Download Resume
              <ArrowDown size={17} />
            </a>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            variants={itemVariants}
            className="mt-10"
          >
            <p
              className="
                mb-3
                font-mono
                text-xs
                uppercase
                tracking-widest
                text-[var(--muted-light)]
              "
            >
              Currently working with
            </p>

            <div className="flex flex-wrap gap-2">
              {[
                "Java",
                "Spring Boot",
                "React",
                "Next.js",
                "MySQL",
              ].map((technology) => (
                <span
                  key={technology}
                  className="
                    rounded-md
                    border border-[var(--border)]
                    bg-[var(--card)]
                    px-3
                    py-1.5
                    font-mono
                    text-xs
                    text-[var(--muted)]

                    transition-all
                    duration-300

                    hover:border-[var(--accent)]
                    hover:bg-[var(--card-secondary)]
                    hover:text-[var(--accent)]
                  "
                >
                  {technology}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* =========================
            RIGHT DEVELOPER FRAME
        ========================== */}

        <motion.div
          initial={{
            opacity: 0,
            x: 40,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            x: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: "easeOut",
          }}
          className="
            relative
            mx-auto
            w-full
            max-w-xl
          "
        >
          {/* Green ambient glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              h-72
              w-72
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[var(--accent)]
              opacity-10
              blur-[100px]
            "
          />

          {/* Decorative background circle */}
          <div
            className="
              absolute
              -right-12
              top-10
              h-40
              w-40
              rounded-full
              border
              border-[var(--accent)]
              opacity-10
            "
          />

          <div
            className="
              absolute
              -bottom-12
              -left-12
              h-48
              w-48
              rounded-full
              border
              border-[var(--border)]
              opacity-50
            "
          />

          {/* =========================
              CODE EDITOR WINDOW
          ========================== */}

          <div
            className="
              relative
              rounded-2xl
              border border-[var(--border)]
              bg-[var(--card)]
              p-3
              shadow-2xl
              shadow-black/20
              transition-colors
              duration-300
            "
          >
            {/* Window Header */}
            <div
              className="
                flex
                items-center
                justify-between
                border-b
                border-[var(--border)]
                px-3
                pb-3
              "
            >
              <div className="flex items-center gap-2">
                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[var(--border)]
                  "
                />

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[var(--border)]
                  "
                />

                <span
                  className="
                    h-2.5
                    w-2.5
                    rounded-full
                    bg-[var(--border)]
                  "
                />
              </div>

              <div
                className="
                  flex
                  items-center
                  gap-2
                  font-mono
                  text-[11px]
                  text-[var(--muted-light)]
                "
              >
                <Code2 size={13} />
                developer.ts
              </div>

              <div className="w-12" />
            </div>

            {/* Main Editor */}
            <div
              className="
                relative
                min-h-[470px]
                overflow-hidden
                rounded-xl
                bg-[var(--card-secondary)]
              "
            >
              {/* Code behind image */}
              <div
                className="
                  absolute
                  left-5
                  top-7
                  hidden
                  font-mono
                  text-xs
                  leading-6
                  text-[var(--muted-light)]
                  sm:block
                "
              >
                <p>
                  <span className="text-[var(--accent)]">
                    const
                  </span>{" "}
                  developer =
                </p>

                <p className="pl-4">{"{"}</p>

                <p className="pl-8">
                  name:{" "}
                  <span className="text-[var(--accent)]">
                    &quot;Bhuvanesh&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  role:{" "}
                  <span className="text-[var(--accent)]">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  passion:{" "}
                  <span className="text-[var(--accent)]">
                    &quot;Building&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  learning:{" "}
                  <span className="text-[var(--accent)]">
                    true
                  </span>
                  ,
                </p>

                <p className="pl-4">{"}"}</p>

                <p className="mt-5">
                  <span className="text-[var(--accent)]">
                    function
                  </span>{" "}
                  <span className="text-[var(--foreground)]">
                    build
                  </span>
                  () {"{"}
                </p>

                <p className="pl-4 text-[var(--muted-light)]">
                  return &quot;ideas → applications&quot;;
                </p>

                <p>{"}"}</p>
              </div>

              {/* =========================
                  PORTRAIT
              ========================== */}

              <div
                className="
                  absolute
                  bottom-0
                  right-[-15px]
                  top-8
                  w-[72%]
                  sm:right-[-25px]
                  sm:w-[68%]
                "
              >
                {/* Image glow */}
                <div
                  className="
                    absolute
                    inset-5
                    rounded-full
                    bg-[var(--accent)]
                    opacity-10
                    blur-3xl
                  "
                />


                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.97,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -3, 0],
                  }}
                  transition={{
                    opacity: {
                      duration: 0.7,
                      ease: "easeOut",
                    },
                    scale: {
                      duration: 0.7,
                      ease: "easeOut",
                    },
                    y: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    },
                  }}
                  whileHover={{
                    scale: 1.015,
                  }}
                >
                  <Image
                    src="/portfolio-hero.png"
                    alt="Bhuvanesh - Full Stack Java Developer"
                    fill
                    priority
                    sizes="(max-width: 768px) 80vw, 450px"
                    className="relative object-cover object-center"
                  />
                </motion.div>

                {/* Image fade into editor */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-[var(--card-secondary)]
                    via-transparent
                    to-transparent
                  "
                />

                <div
                  className="
                    absolute
                    inset-x-0
                    bottom-0
                    h-32
                    bg-gradient-to-t
                    from-[var(--card-secondary)]
                    to-transparent
                  "
                />
              </div>

              {/* Line numbers */}
              <div
                className="
                  absolute
                  bottom-6
                  left-4
                  hidden
                  font-mono
                  text-[10px]
                  leading-6
                  text-[var(--border)]
                  sm:block
                "
              >
                01
                <br />
                02
                <br />
                03
                <br />
                04
                <br />
                05
                <br />
                06
                <br />
                07
                <br />
                08
                <br />
                09
              </div>

              {/* Terminal status */}
              <div
                className="
                  absolute
                  bottom-5
                  left-12
                  z-20
                  hidden
                  items-center
                  gap-2
                  rounded-lg
                  border border-[var(--border)]
                  bg-[var(--card)]
                  px-3
                  py-2
                  backdrop-blur
                  sm:flex
                "
              >
                <Terminal
                  size={14}
                  className="text-[var(--accent)]"
                />

                <span
                  className="
                    font-mono
                    text-[11px]
                    text-[var(--muted)]
                  "
                >
                  building...
                </span>

                <span
                  className="
                    h-1.5
                    w-1.5
                    animate-pulse
                    rounded-full
                    bg-[var(--accent)]
                  "
                />
              </div>
            </div>
          </div>

          {/* =========================
              FLOATING TECH BADGE
          ========================== */}

          <div
            className="
              absolute
              -bottom-6
              -right-4
              z-30
              rounded-xl
              border border-[var(--border)]
              bg-[var(--card)]
              px-4
              py-3
              shadow-xl
              shadow-black/20
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-[var(--accent)]
            "
          >
            <div className="flex items-center gap-3">

              <div
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  border border-[var(--accent)]
                  bg-[var(--card-secondary)]
                  transition-transform
                  duration-300
                  hover:scale-105
                "
              >
                <Code2
                  size={17}
                  className="text-[var(--accent)]"
                />
              </div>

              <div>
                <p
                  className="
                    font-mono
                    text-[10px]
                    text-[var(--muted-light)]
                  "
                >
                  stack
                </p>

                <p
                  className="
                    text-xs
                    font-medium
                    text-[var(--foreground)]
                  "
                >
                  Java · Spring · React
                </p>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div
            className="
              absolute
              -left-3
              top-16
              h-16
              w-1
              rounded-full
              bg-[var(--accent)]
              opacity-60
            "
          />
        </motion.div>
      </div>
    </section>
  );
}