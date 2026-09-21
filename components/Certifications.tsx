import {
  Award,
  ExternalLink,
} from "lucide-react";

const certifications = [
  {
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2026",
    description:
      "Briefly describe what this certification covered or what you learned.",
    credentialUrl: "https://example.com",
  },
  {
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2025",
    description:
      "Briefly describe the skills or technologies covered by this certification.",
    credentialUrl: "https://example.com",
  },
  {
    title: "Certification Name",
    organization: "Issuing Organization",
    date: "2025",
    description:
      "Briefly describe the knowledge or skills demonstrated through this certification.",
    credentialUrl: "",
  },
];

export default function Certifications() {
  return (
    <section id="certifications" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">

        {/* Section heading */}
        <div className="mb-12">
          <p className="font-mono text-sm text-green-400">
            06 / CERTIFICATIONS
          </p>

          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Certifications & achievements.
          </h2>

          <p className="mt-4 max-w-2xl text-zinc-500">
            Certifications and learning achievements that complement
            my development skills.
          </p>
        </div>

        {/* Certification cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification) => (
            <article
              key={`${certification.title}-${certification.organization}`}
              className="group flex h-full flex-col rounded-xl border border-zinc-800 bg-zinc-950 p-6 transition-colors hover:border-zinc-700"
            >
              {/* Icon */}
              <div className="flex h-11 w-11 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900">
                <Award
                  size={20}
                  className="text-green-400"
                />
              </div>

              {/* Content */}
              <div className="mt-6 flex-1">
                <h3 className="text-lg font-semibold text-white">
                  {certification.title}
                </h3>

                <p className="mt-2 text-sm font-medium text-green-400">
                  {certification.organization}
                </p>

                <p className="mt-1 font-mono text-xs text-zinc-600">
                  {certification.date}
                </p>

                <p className="mt-4 text-sm leading-6 text-zinc-500">
                  {certification.description}
                </p>
              </div>

              {/* Credential link */}
              {certification.credentialUrl && (
                <div className="mt-6 border-t border-zinc-800 pt-5">
                  <a
                    href={certification.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-green-400"
                  >
                    <ExternalLink size={16} />
                    View Credential
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}