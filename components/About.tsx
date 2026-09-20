import { Code2, GraduationCap, Target } from "lucide-react";

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

export default function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 ">
          <p className="font-mono text-sm text-green-400">
            01 / ABOUT ME
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            A little about me.
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Introduction */}
          <div>
            <p className="text-lg leading-8 text-zinc-400">
              I'm a Computer Engineering student and aspiring Full Stack
              Java Developer who enjoys building modern web applications
              and solving real-world problems through code.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              My primary focus is Java and Spring Boot for backend
              development, combined with React and Next.js for building
              modern user interfaces.
            </p>

            <p className="mt-5 text-lg leading-8 text-zinc-400">
              I enjoy learning new technologies, working on practical
              projects and continuously improving my development skills.
            </p>
          </div>

          {/* Highlights */}
          <div className="space-y-4">
            {highlights.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group rounded-xl border border-zinc-800 bg-zinc-950 p-5 transition-colors hover:border-zinc-700"
                >
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                      <Icon
                        size={20}
                        className="text-green-400"
                      />
                    </div>

                    <div>
                      <h3 className="font-semibold text-white">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-zinc-500">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}