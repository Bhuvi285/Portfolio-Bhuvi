"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Resume", href: "#resume" },
  { name: "GitHub", href: "#github" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = (href: string) => {
    setIsOpen(false);

    const section = document.querySelector(href);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      className="
        sticky top-0 z-50
        border-b border-[var(--border)]
        bg-[var(--background)]/90
        backdrop-blur
        transition-colors duration-300
      "
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("#home")}
          className="
            font-mono text-xl font-bold tracking-tight
            text-[var(--foreground)]
            transition-colors duration-300
            hover:text-[var(--accent)]
          "
        >
          BN<span className="text-[var(--accent)]">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavigation(item.href)}
              className="
                text-sm
                text-[var(--muted)]
                transition-colors duration-300
                hover:text-[var(--accent)]
              "
            >
              {item.name}
            </button>
          ))}

          {/* Theme Toggle */}
          <ThemeToggle />
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="
              flex h-9 w-9 items-center justify-center
              rounded-lg
              border border-[var(--border)]
              bg-[var(--card)]
              text-[var(--muted)]
              transition-all duration-300
              hover:border-[var(--accent)]
              hover:text-[var(--accent)]
            "
            aria-label={
              isOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div
          className="
            border-t border-[var(--border)]
            bg-[var(--background)]
            px-6 py-4
            lg:hidden
          "
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="
                  rounded-lg
                  px-3 py-3
                  text-left text-sm
                  text-[var(--muted)]
                  transition-all duration-300
                  hover:bg-[var(--card-secondary)]
                  hover:text-[var(--accent)]
                "
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}