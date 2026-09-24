"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin, CalendarDays } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology in Computer Engineering",
    institution: "R. C. Patel Institute of Technology, Shirpur",
    location: "Dhule, India",
    duration: "2023 – 2027",
    result: "CGPA: 8.5+",
    description:
      "Studied computer engineering with a focus on software development, programming, databases, data structures and web technologies.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "D. N. C. College, Jalgaon",
    location: "Jalgaon, India",
    duration: "2021 – 2023",
    description:
      "Completed higher secondary education with a focus on mathematics and computer science.",
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

export default function Education() {
  return (
    <section id="education" className="px-6 pt-10 pb-24">
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
            04 / EDUCATION
          </p>

          <h2
            className="
              mt-3
              text-3xl font-bold
              text-[var(--foreground)]
              sm:text-4xl
            "
          >
            My education
          </h2>

          <p
            className="
              mt-4
              max-w-2xl
              leading-7
              text-[var(--muted)]
            "
          >
            My academic journey and the foundation that has shaped
            my approach to software development.
          </p>
        </motion.div>

        {/* Education Cards */}
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
            lg:grid-cols-2
          "
        >
          {education.map((item) => (
            <motion.article
              key={item.degree}
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
              {/* Top */}
              <div className="flex items-start gap-4">

                {/* Icon */}
                <div
                  className="
                    flex h-11 w-11 shrink-0
                    items-center justify-center
                    rounded-lg
                    border border-[var(--border)]
                    bg-[var(--card-secondary)]
                    transition-all duration-300
                    group-hover:border-[var(--accent)]
                  "
                >
                  <GraduationCap
                    size={21}
                    className="
                      text-[var(--accent)]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                {/* Degree */}
                <div>
                  <h3
                    className="
                      text-lg
                      font-semibold
                      text-[var(--foreground)]
                      transition-colors duration-300
                      group-hover:text-[var(--accent)]
                    "
                  >
                    {item.degree}
                  </h3>

                  <p
                    className="
                      mt-1
                      text-sm
                      font-medium
                      text-[var(--muted)]
                    "
                  >
                    {item.institution}
                  </p>
                </div>
              </div>

              {/* Metadata */}
              <div
                className="
                  mt-6
                  flex
                  flex-wrap
                  gap-4
                  border-y
                  border-[var(--border)]
                  py-4
                "
              >
                <div className="flex items-center gap-2">
                  <CalendarDays
                    size={15}
                    className="text-[var(--accent)]"
                  />

                  <span
                    className="
                      text-sm
                      text-[var(--muted)]
                    "
                  >
                    {item.duration}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <MapPin
                    size={15}
                    className="text-[var(--accent)]"
                  />

                  <span
                    className="
                      text-sm
                      text-[var(--muted)]
                    "
                  >
                    {item.location}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p
                className="
                  mt-5
                  text-sm
                  leading-7
                  text-[var(--muted)]
                  transition-colors duration-300
                  group-hover:text-[var(--foreground)]
                "
              >
                {item.description}
              </p>

              {/* Result */}
              {item.result && (
                <div className="mt-5">
                  <span
                    className="
                      inline-flex
                      rounded-md
                      border border-[var(--border)]
                      bg-[var(--card-secondary)]
                      px-3 py-1.5
                      text-sm
                      font-medium
                      text-[var(--accent)]
                    "
                  >
                    {item.result}
                  </span>
                </div>
              )}
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}