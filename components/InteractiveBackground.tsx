"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function InteractiveBackground() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(pointer: coarse)");

    setIsTouchDevice(mediaQuery.matches);

    const handleChange = (event: MediaQueryListEvent) => {
      setIsTouchDevice(event.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth - 0.5) * 2;
      const y = (event.clientY / window.innerHeight - 0.5) * 2;

      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice, mouseX, mouseY]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* Base SVG */}
      <svg
        className="absolute h-full w-full opacity-40"
        viewBox="0 0 1440 1200"
        preserveAspectRatio="none"
        fill="none"
      >
        <motion.path
          d="M-100 250 C 200 50, 350 450, 650 250 S 1100 50, 1540 300"
          stroke="rgba(74, 222, 128, 0.12)"
          strokeWidth="1"
          style={{
            x: isTouchDevice ? 0 : smoothX,
            y: isTouchDevice ? 0 : smoothY,
          }}
        />

        <motion.path
          d="M-150 650 C 200 400, 450 850, 800 600 S 1200 400, 1550 700"
          stroke="rgba(161, 161, 170, 0.10)"
          strokeWidth="1"
          style={{
            x: isTouchDevice ? 0 : smoothX,
            y: isTouchDevice ? 0 : smoothY,
          }}
        />

        <motion.path
          d="M-100 1050 C 250 800, 450 1150, 750 950 S 1200 800, 1550 1050"
          stroke="rgba(74, 222, 128, 0.08)"
          strokeWidth="1"
          style={{
            x: isTouchDevice ? 0 : smoothX,
            y: isTouchDevice ? 0 : smoothY,
          }}
        />
      </svg>

      {/* Subtle moving glow */}
      <motion.div
        className="absolute left-1/2 top-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-400/[0.025] blur-3xl"
        style={{
          x: isTouchDevice ? 0 : smoothX,
          y: isTouchDevice ? 0 : smoothY,
        }}
      />
    </div>
  );
}