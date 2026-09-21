import { Download, FileText } from "lucide-react";
export default function Resume() {
  return (
    <section id="resume" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-8 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

            {/* Resume information */}
            <div className="flex items-start gap-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <FileText
                  size={22}
                  className="text-green-400"
                />
              </div>

              <div>
                <p className="font-mono text-sm text-green-400">
                  07 / RESUME
                </p>

                <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
                  Want to know more about me?
                </h2>

                <p className="mt-3 max-w-xl leading-7 text-zinc-500">
                  Download my resume to learn more about my education,
                  technical skills, projects and the opportunities I am
                  looking for.
                </p>
              </div>
            </div>

            {/* Resume actions */}
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-700 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-zinc-500 hover:bg-zinc-900"
              >
                <FileText size={17} />
                View Resume
              </a>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-400 px-5 py-3 text-sm font-medium text-zinc-950 transition-colors hover:bg-green-300"
              >
                <Download size={17} />
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
