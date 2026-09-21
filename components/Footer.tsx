"use client";

import {
  ArrowUp,
  Mail,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 bg-zinc-950">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">

          {/* Branding */}
          <div>
            <p className="font-mono text-xl font-bold text-white">
              BN<span className="text-green-400">.</span>
            </p>

            <p className="mt-2 max-w-md text-sm leading-6 text-zinc-500">
              Full Stack Java Developer focused on building practical
              web applications and continuously learning new technologies.
            </p>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/Bhuvi285"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.76-1.34-1.76-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.62-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57A12 12 0 0 0 12 .5Z" />
              </svg>
            </a>

            <a
              href="https://www.linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <svg
                viewBox="0 0 24 24"
                width="18"
                height="18"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M5.2 3.5a2.2 2.2 0 1 1 0 4.4 2.2 2.2 0 0 1 0-4.4ZM3.3 9.2h3.8v11.3H3.3V9.2Zm6.2 0h3.6v1.5h.1c.5-.9 1.7-1.9 3.6-1.9 3.8 0 4.5 2.5 4.5 5.8v5.9h-3.8v-5.2c0-1.2 0-2.8-1.7-2.8s-2 1.3-2 2.7v5.3H9.5V9.2Z" />
              </svg>
            </a>

            <a
              href="mailto:your-email@example.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <Mail size={18} />
            </a>

            <button
              type="button"
              onClick={() =>
                window.scrollTo({
                  top: 0,
                  behavior: "smooth",
                })
              }
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-400 transition-colors hover:border-zinc-700 hover:text-green-400"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-8 flex flex-col gap-2 border-t border-zinc-800 pt-6 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {currentYear} Bhuvanesh. All rights reserved.
          </p>

          <p className="font-mono">
            Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}