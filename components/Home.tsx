import { ArrowDown, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        
        {/* Left Content */}
        <div>
          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs text-zinc-400">
            <span className="h-2 w-2 rounded-full bg-green-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I'm{" "}
            <span className="text-green-400">
              Bhuvanesh.
            </span>
          </h1>

          <h2 className="mt-4 max-w-3xl text-2xl font-semibold text-zinc-300 sm:text-3xl">
            Full Stack Java Developer.
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400 sm:text-lg">
            I build modern and scalable web applications using
            Java, Spring Boot, React and MongoDB, Express, Node.js
            technologies.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowRight size={17} />
            </a>

            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900"
            >
              Download Resume
              <ArrowDown size={17} />
            </a>
          </div>

          {/* Tech Stack */}
          <div className="mt-10">
            <p className="mb-3 font-mono text-xs uppercase tracking-widest text-zinc-600">
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
                  className="rounded-md border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Developer Visual */}
        <div className="hidden lg:block">
          <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-5 shadow-2xl">
              
              {/* Terminal Header */}
              <div className="flex items-center gap-2 border-b border-zinc-800 pb-4">
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />
                <span className="h-3 w-3 rounded-full bg-zinc-700" />

                <span className="ml-3 font-mono text-xs text-zinc-600">
                  bhuvanesh@portfolio
                </span>
              </div>

              {/* Terminal Content */}
              <div className="space-y-4 pt-5 font-mono text-sm">
                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-zinc-300">whoami</span>
                </div>

                <div className="text-zinc-500">
                  Full Stack Java Developer
                </div>

                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-zinc-300">stack</span>
                </div>

                <div className="leading-7 text-zinc-500">
                  Java
                  <br />
                  Spring Boot
                  <br />
                  React
                  <br />
                  Next.js
                  <br />
                  MySQL
                  <br />
                  MongoDB
                </div>

                <div>
                  <span className="text-green-400">$</span>{" "}
                  <span className="text-zinc-300">
                    echo "Let's build."
                  </span>
                </div>

                <div className="text-green-400">
                  Let's build.
                </div>
              </div>
            </div>

            {/* Decorative element */}
            <div className="absolute -bottom-4 -left-4 -z-10 h-24 w-24 rounded-full border border-green-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
}