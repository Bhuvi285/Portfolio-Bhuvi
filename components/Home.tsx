import Image from "next/image";
import { ArrowDown, ArrowRight, Code2, Terminal } from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <div>
          {/* Status */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 font-mono text-xs text-zinc-400">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          {/* Heading */}
          <h1 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight text-white sm:text-6xl lg:text-7xl">
            Hi, I&apos;m{" "}
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
            Java, Spring Boot, React and MERN technologies.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 hover:bg-green-300"
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
                  className="rounded-md border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-zinc-700 hover:text-green-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* =========================
            RIGHT IMAGE
        ========================== */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Background glow */}
          <div className="absolute -inset-8 rounded-full bg-green-500/10 blur-3xl" />

          {/* Decorative dots */}
          <div className="absolute -right-3 -top-5 z-10 grid grid-cols-6 gap-2 opacity-40">
            {Array.from({ length: 36 }).map((_, index) => (
              <span
                key={index}
                className="h-1 w-1 rounded-full bg-green-400"
              />
            ))}
          </div>

          {/* Main image */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl shadow-black/50">
            <Image
              src="/portfolio-hero.png"
              alt="Bhuvanesh - Full Stack Java Developer"
              width={1000}
              height={1000}
              priority
              className="h-auto w-full object-cover"
            />

            {/* Bottom gradient */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-zinc-950/70 to-transparent" />

            {/* Subtle green border glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-green-400/10" />
          </div>

          {/* =========================
              FLOATING CARD - LEFT
          ========================== */}
          <div className="absolute -bottom-5 -left-5 z-20 hidden rounded-xl border border-zinc-700 bg-zinc-950/95 p-4 shadow-xl backdrop-blur-md sm:block">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-900/60 bg-green-950/40">
                <Code2 size={19} className="text-green-400" />
              </div>

              <div>
                <p className="font-mono text-xs text-zinc-600">
                  currently
                </p>

                <p className="text-sm font-medium text-white">
                  Building & Learning
                </p>
              </div>
            </div>
          </div>

          {/* =========================
              FLOATING CARD - RIGHT
          ========================== */}
          <div className="absolute -right-5 top-10 z-20 hidden rounded-xl border border-zinc-700 bg-zinc-950/95 p-4 shadow-xl backdrop-blur-md md:block">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <Terminal size={17} className="text-green-400" />
              </div>

              <div className="font-mono text-xs">
                <p className="text-zinc-600">
                  stack
                </p>

                <p className="text-zinc-300">
                  Java · Spring · React
                </p>
              </div>
            </div>
          </div>

          {/* Decorative circle */}
          <div className="absolute -bottom-10 -right-10 -z-10 h-32 w-32 rounded-full border border-green-400/10" />
        </div>
      </div>
    </section>
  );
}