"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Award,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    id: "certification-2026",
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2026",
    description:
      "Briefly describe what this certification covered or what you learned.",
    credentialUrl: "https://example.com",
  },
  {
    id: "certification-2025-skills",
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2025",
    description:
      "Briefly describe the skills or technologies covered by this certification.",
    credentialUrl: "https://example.com",
  },
  {
    id: "certification-2025-knowledge",
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2025",
    description:
      "Briefly describe the knowledge or skills demonstrated through this certification.",
    credentialUrl: "",
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

export default function Certifications() {
  return (
    <section
      id="certifications"
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
            06 / CERTIFICATIONS
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Certifications & learning
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            Certifications and learning achievements that
            complement my academic knowledge and project
            experience.
          </p>
        </motion.div>

        {/* Certifications Grid */}
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
            md:grid-cols-2
            lg:grid-cols-3
          "
        >
          {certifications.map((certification) => (
            <motion.article
              key={certification.id}
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
              {/* Header */}
              <div className="flex items-start justify-between gap-4">

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
                  <Award
                    size={21}
                    className="
                      text-[var(--accent)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <span
                  className="
                    rounded-full
                    border border-[var(--border)]
                    bg-[var(--card-secondary)]
                    px-2.5 py-1
                    font-mono
                    text-xs
                    text-[var(--muted)]
                  "
                >
                  {certification.date}
                </span>
              </div>

              {/* Certification Information */}
              <div className="mt-5 flex-1">
                <h3
                  className="
                    text-lg
                    font-semibold
                    text-[var(--foreground)]
                    transition-colors duration-300
                    group-hover:text-[var(--accent)]
                  "
                >
                  {certification.title}
                </h3>

                <p
                  className="
                    mt-1
                    text-sm
                    font-medium
                    text-[var(--muted)]
                  "
                >
                  {certification.organization}
                </p>

                <p
                  className="
                    mt-4
                    text-sm
                    leading-7
                    text-[var(--muted)]
                    transition-colors duration-300
                    group-hover:text-[var(--foreground)]
                  "
                >
                  {certification.description}
                </p>
              </div>

              {/* Credential Link */}
              {certification.credentialUrl && (
                <div
                  className="
                    mt-6
                    border-t
                    border-[var(--border)]
                    pt-5
                  "
                >
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      inline-flex
                      items-center
                      gap-2
                      text-sm
                      font-medium
                      text-[var(--muted)]
                      transition-colors duration-300
                      hover:text-[var(--accent)]
                    "
                  >
                    View credential
                    <ArrowUpRight
                      size={16}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-0.5
                        group-hover:-translate-y-0.5
                      "
                    />
                  </a>
                </div>
              )}

              {/* Small visual indicator */}
              <ExternalLink
                size={14}
                className="
                  mt-4
                  text-[var(--muted-light)]
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0.5
                  group-hover:-translate-y-0.5
                  group-hover:opacity-100
                "
              />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}