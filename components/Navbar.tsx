"use client";

import ThemeToggle from "@/components/ThemeToggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";

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
    <header className="sticky top-0 z-50 border-b border-zinc-800 bg-[#111315]/90 bg-zinc-950/90 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <button
          type="button"
          onClick={() => handleNavigation("#home")}
          className="font-mono text-xl font-bold tracking-tight text-white"
        >
          BN<span className="text-green-400">.</span>
        </button>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => (
            <button
              key={item.name}
              type="button"
              onClick={() => handleNavigation(item.href)}
              className="
        text-sm
        text-zinc-400
        transition-colors
        hover:text-green-400
      "
            >
              {item.name}
            </button>
          ))}

          <ThemeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className="rounded-md p-2 text-zinc-300 transition-colors hover:bg-zinc-800 hover:text-white lg:hidden"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-zinc-800 bg-zinc-950 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.name}
                type="button"
                onClick={() => handleNavigation(item.href)}
                className="rounded-md px-3 py-3 text-left text-sm text-zinc-400 transition-colors hover:bg-zinc-900 hover:text-green-400"
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