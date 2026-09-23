"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Code2,
  Link,
  Mail,
} from "lucide-react";

const contactLinks = [
  {
    label: "Email",
    value: "bhuvineve05@gmail.com",
    href: "mailto:bhuvineve05@gmail.com",
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/bhuvaneshneve",
    href: "https://www.linkedin.com/in/bhuvaneshneve",
    icon: Link,
  },
  {
    label: "GitHub",
    value: "github.com/Bhuvi285",
    href: "https://github.com/Bhuvi285",
    icon: Code2,
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

export default function Contact() {
  return (
    <section
      id="contact"
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
            09 / CONTACT
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            Let&apos;s connect
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            Interested in working together, discussing a project,
            or simply connecting? Feel free to reach out through
            any of the platforms below.
          </p>
        </motion.div>

        {/* Contact Links */}
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
            mt-12
            grid
            gap-4
            md:grid-cols-3
          "
        >
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={
                  contact.label === "Email"
                    ? undefined
                    : "_blank"
                }
                rel={
                  contact.label === "Email"
                    ? undefined
                    : "noopener noreferrer"
                }
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
                <div className="flex items-start justify-between">

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
                      size={20}
                      className="
                        text-[var(--accent)]
                        transition-transform duration-300
                        group-hover:scale-110
                      "
                    />
                  </div>

                  {/* Arrow */}
                  <ArrowUpRight
                    size={17}
                    className="
                      text-[var(--muted-light)]
                      transition-all duration-300
                      group-hover:-translate-y-0.5
                      group-hover:translate-x-0.5
                      group-hover:text-[var(--accent)]
                    "
                  />
                </div>

                {/* Information */}
                <div className="mt-5">
                  <p
                    className="
                      text-sm
                      font-medium
                      text-[var(--muted)]
                    "
                  >
                    {contact.label}
                  </p>

                  <p
                    className="
                      mt-1
                      break-all
                      text-sm
                      font-medium
                      text-[var(--foreground)]
                      transition-colors duration-300
                      group-hover:text-[var(--accent)]
                    "
                  >
                    {contact.value}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Closing Message */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
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
            mt-8
            rounded-xl
            border border-[var(--border)]
            bg-[var(--card-secondary)]
            p-6
            text-center
          "
        >
          <p
            className="
              text-sm
              leading-7
              text-[var(--muted)]
            "
          >
            I&apos;m always open to learning, collaborating and
            exploring new opportunities.
          </p>
        </motion.div>
      </div>
    </section>
  );
}