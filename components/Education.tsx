import { Calendar, GraduationCap } from "lucide-react";

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

export default function Education() {
  return (
    <section id="education" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            0 / EDUCATION
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            My academic journey.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            My educational background and the foundation behind my
            development journey.
          </p>
        </div>

        {/* Education timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 hidden h-full w-px bg-zinc-800 sm:block" />

          <div className="space-y-10">
            {education.map((item) => (
              <div
                key={`${item.institution}-${item.degree}`}
                className="relative sm:pl-14"
              >
                {/* Timeline icon */}
                <div className="absolute left-0 top-0 hidden h-10 w-10 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 sm:flex">
                  <GraduationCap
                    size={18}
                    className="text-green-400"
                  />
                </div>

                {/* Education card */}
                <div className="rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-white">
                        {item.degree}
                      </h3>

                      <p className="mt-1 text-green-400">
                        {item.institution}
                      </p>

                      <p className="mt-1 text-sm text-zinc-500">
                        {item.location}
                      </p>
                    </div>

                    <div className="flex flex-col gap-1 text-sm text-zinc-500 sm:items-end">
                      <div className="flex items-center gap-2">
                        <Calendar size={15} />
                        {item.duration}
                      </div>

                      {item.result && (
                        <span className="font-medium text-green-400">
                          {item.result}
                        </span>
                      )}
                    </div>
                  </div>

                  <p className="mt-5 leading-7 text-zinc-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

