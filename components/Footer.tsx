"use client";

import {
  ArrowUp,
  Code2,
  GitBranch,
  Link2,
  Mail,
} from "lucide-react";

const footerLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Bhuvi285",
    icon: GitBranch,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bhuvaneshneve",
    icon: Link2,
  },
  {
    label: "Email",
    href: "mailto:bhuvineve05@gmail.com",
    icon: Mail,
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      className="
        relative
        z-20
        border-t
        border-[var(--border)]
        bg-[var(--card)]
        px-6
        py-10
        transition-colors
        duration-300
      "
    >
      <div className="mx-auto max-w-7xl">

        {/* Main Footer */}
        <div
          className="
            flex
            flex-col
            gap-8
            md:flex-row
            md:items-center
            md:justify-between
          "
        >
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={scrollToTop}
              className="
                font-mono
                text-xl
                font-bold
                tracking-tight
                text-[var(--foreground)]
                transition-colors
                duration-300
                hover:text-[var(--accent)]
              "
            >
              BN<span className="text-[var(--accent)]">.</span>
            </button>

            <p
              className="
                mt-2
                max-w-md
                text-sm
                leading-6
                text-[var(--muted)]
              "
            >
              Full Stack Java Developer focused on building
              practical web applications and continuously
              improving my development skills.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {footerLinks.map((link) => {
              const Icon = link.icon;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  target={
                    link.label === "Email"
                      ? undefined
                      : "_blank"
                  }
                  rel={
                    link.label === "Email"
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={link.label}
                  className="
                    flex h-10 w-10
                    items-center justify-center
                    rounded-lg
                    border border-[var(--border)]
                    bg-[var(--card-secondary)]
                    text-[var(--muted)]
                    transition-all
                    duration-300
                    hover:-translate-y-0.5
                    hover:border-[var(--accent)]
                    hover:text-[var(--accent)]
                  "
                >
                  <Icon size={17} />
                </a>
              );
            })}

            {/* Back to Top */}
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to top"
              className="
                ml-2
                flex h-10 w-10
                items-center justify-center
                rounded-lg
                border border-[var(--border)]
                bg-[var(--card-secondary)]
                text-[var(--muted)]
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-[var(--accent)]
                hover:text-[var(--accent)]
              "
            >
              <ArrowUp size={17} />
            </button>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="
            mt-8
            flex
            flex-col
            gap-3
            border-t
            border-[var(--border)]
            pt-6
            sm:flex-row
            sm:items-center
            sm:justify-between
          "
        >
          <p className="text-xs text-[var(--muted-light)]">
            © {new Date().getFullYear()} Bhuvanesh. All rights
            reserved.
          </p>

          <div
            className="
              flex
              items-center
              gap-2
              text-xs
              text-[var(--muted-light)]
            "
          >
            <Code2 size={14} />

            <span>
              Built with Next.js &amp; TypeScript
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}