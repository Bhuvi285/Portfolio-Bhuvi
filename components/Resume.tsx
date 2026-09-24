"use client";

import { motion } from "framer-motion";
import { Download, FileText } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="px-6 pt-10 pb-24">
      <div className="mx-auto max-w-7xl">

        {/* Resume Card */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
          className="
            group
            rounded-2xl
            border border-[var(--border)]
            bg-[var(--card)]
            p-8

            transition-all
            duration-300
            ease-out

            hover:-translate-y-1
            hover:border-[var(--accent)]
            hover:bg-[var(--card-secondary)]
            hover:shadow-lg
            hover:shadow-black/10

            sm:p-10
          "
        >
          <div
            className="
              flex
              flex-col
              gap-8
              md:flex-row
              md:items-center
              md:justify-between
            "
          >

            {/* Resume Information */}
            <div className="flex items-start gap-5">

              {/* Icon */}
              <div
                className="
                  flex h-12 w-12
                  shrink-0
                  items-center justify-center
                  rounded-lg
                  border border-[var(--border)]
                  bg-[var(--card-secondary)]
                  transition-all duration-300
                  group-hover:border-[var(--accent)]
                "
              >
                <FileText
                  size={22}
                  className="
                    text-[var(--accent)]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />
              </div>

              {/* Text */}
              <div>
                <p className="font-mono text-sm text-[var(--accent)]">
                  07 / RESUME
                </p>

                <h2
                  className="
                    mt-2
                    text-2xl
                    font-bold
                    text-[var(--foreground)]
                    sm:text-3xl
                  "
                >
                  Want to know more about me?
                </h2>

                <p
                  className="
                    mt-3
                    max-w-xl
                    leading-7
                    text-[var(--muted)]
                  "
                >
                  Download my resume to learn more about my
                  education, technical skills, projects and the
                  opportunities I am looking for.
                </p>
              </div>
            </div>

            {/* Buttons */}
            <div
              className="
                flex
                shrink-0
                flex-col
                gap-3
                sm:flex-row
              "
            >
              {/* View Resume */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex
                  items-center
                  justify-center
                  gap-2
                  rounded-lg
                  border border-[var(--border)]
                  bg-[var(--card)]
                  px-5 py-3
                  text-sm
                  font-medium
                  text-[var(--foreground)]

                  transition-all duration-300

                  hover:-translate-y-0.5
                  hover:border-[var(--accent)]
                  hover:text-[var(--accent)]
                "
              >
                <FileText size={16} />
                View Resume
              </a>

              {/* Download Resume */}
              <a
                href="/resume.pdf"
                download
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
                <Download size={16} />
                Download Resume
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}