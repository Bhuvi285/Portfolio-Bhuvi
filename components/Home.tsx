"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Terminal,
} from "lucide-react";

export default function Home() {
  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-73px)] items-center overflow-hidden px-6 py-20"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        {/* =========================
            LEFT CONTENT
        ========================== */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
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
              className="inline-flex items-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-semibold text-black transition-all hover:-translate-y-0.5 hover:bg-green-300"
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
                  className="rounded-md border border-zinc-800 px-3 py-1.5 font-mono text-xs text-zinc-400 transition-colors hover:border-green-900 hover:text-green-400"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* =========================
            RIGHT DEVELOPER FRAME
        ========================== */}
        <div className="relative mx-auto w-full max-w-xl">
          {/* Green ambient glow */}
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-500/10 blur-[100px]" />

          {/* Decorative background circles */}
          <div className="absolute -right-12 top-10 h-40 w-40 rounded-full border border-green-400/10" />

          <div className="absolute -bottom-12 -left-12 h-48 w-48 rounded-full border border-zinc-800/50" />

          {/* =========================
              CODE EDITOR WINDOW
          ========================== */}
          <div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/95 p-3 shadow-2xl shadow-black/50">
            {/* Window Header */}
            <div className="flex items-center justify-between border-b border-zinc-800 px-3 pb-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
                <span className="h-2.5 w-2.5 rounded-full bg-zinc-700" />
              </div>

              <div className="flex items-center gap-2 font-mono text-[11px] text-zinc-600">
                <Code2 size={13} />
                developer.ts
              </div>

              <div className="w-12" />
            </div>

            {/* Main Editor */}
            <div className="relative min-h-[470px] overflow-hidden rounded-xl bg-[#0d0d0d]">
              {/* Code behind image */}
              <div className="absolute left-5 top-7 hidden font-mono text-xs leading-6 text-zinc-600 sm:block">
                <p>
                  <span className="text-green-500">const</span>{" "}
                  developer =
                </p>

                <p className="pl-4">{"{"}</p>

                <p className="pl-8">
                  name:{" "}
                  <span className="text-green-400">
                    &quot;Bhuvanesh&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  role:{" "}
                  <span className="text-green-400">
                    &quot;Full Stack Developer&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  passion:{" "}
                  <span className="text-green-400">
                    &quot;Building&quot;
                  </span>
                  ,
                </p>

                <p className="pl-8">
                  learning:{" "}
                  <span className="text-green-400">
                    true
                  </span>
                  ,
                </p>

                <p className="pl-4">{"}"}</p>

                <p className="mt-5">
                  <span className="text-green-500">function</span>{" "}
                  <span className="text-zinc-300">
                    build
                  </span>
                  () {"{"}
                </p>

                <p className="pl-4 text-zinc-700">
                  return &quot;ideas → applications&quot;;
                </p>

                <p>{"}"}</p>
              </div>

              {/* =========================
                  PORTRAIT
              ========================== */}
              <div className="absolute bottom-0 right-[-15px] top-8 w-[72%] sm:right-[-25px] sm:w-[68%]">
                {/* Image glow */}
                <div className="absolute inset-5 rounded-full bg-green-400/10 blur-3xl" />

                <Image
                  src="/portfolio-hero.png"
                  alt="Bhuvanesh - Full Stack Java Developer"
                  fill
                  priority
                  sizes="(max-width: 768px) 80vw, 450px"
                  className="relative object-cover object-center"
                />

                {/* Image fade into background */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d] via-transparent to-transparent" />

                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0d0d0d] to-transparent" />
              </div>

              {/* Line numbers */}
              <div className="absolute bottom-6 left-4 hidden font-mono text-[10px] leading-6 text-zinc-800 sm:block">
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
              <div className="absolute bottom-5 left-12 z-20 hidden items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-950/90 px-3 py-2 backdrop-blur sm:flex">
                <Terminal size={14} className="text-green-400" />

                <span className="font-mono text-[11px] text-zinc-400">
                  building...
                </span>

                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-400" />
              </div>
            </div>
          </div>

          {/* =========================
              FLOATING TECH BADGE
          ========================== */}
          <div className="absolute -bottom-6 -right-4 z-30 rounded-xl border border-zinc-700 bg-zinc-950 px-4 py-3 shadow-xl shadow-black/40">
            <div className="flex items-center gap-3">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-green-900/50 bg-green-950/30">
                <Code2
                  size={17}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="font-mono text-[10px] text-zinc-600">
                  stack
                </p>

                <p className="text-xs font-medium text-zinc-200">
                  Java · Spring · React
                </p>
              </div>
            </div>
          </div>

          {/* Corner accent */}
          <div className="absolute -left-3 top-16 h-16 w-1 rounded-full bg-green-400/60" />
        </div>
      </div>
    </section>
  );
}