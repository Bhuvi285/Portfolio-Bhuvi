"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="
          flex h-9 w-9 items-center justify-center
          rounded-lg
          border border-[var(--border)]
          bg-[var(--card)]
        "
        aria-label="Toggle theme"
      />
    );
  }

  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="
        flex h-9 w-9 items-center justify-center
        rounded-lg
        border border-[var(--border)]
        bg-[var(--card)]
        text-[var(--muted)]
        transition-all duration-300
        hover:-translate-y-0.5
        hover:border-[var(--accent)]
        hover:text-[var(--accent)]
      "
    >
      {isDark ? <Sun size={17} /> : <Moon size={17} />}
    </button>
  );
}