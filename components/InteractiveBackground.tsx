"use client";

import { useEffect, useRef, useState } from "react";

type Point = {
  x: number;
  y: number;
};

export default function InteractiveBackground() {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [path, setPath] = useState("");

  const pointsRef = useRef<Point[]>([]);
  const animationFrameRef = useRef<number | null>(null);
  const targetRef = useRef<Point>({ x: 0, y: 0 });
  const currentRef = useRef<Point>({ x: 0, y: 0 });

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
      targetRef.current = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isTouchDevice]);

  useEffect(() => {
    if (isTouchDevice) return;

    const animate = () => {
      const target = targetRef.current;
      const current = currentRef.current;

      // Smoothly follow the cursor
      current.x += (target.x - current.x) * 0.12;
      current.y += (target.y - current.y) * 0.12;

      pointsRef.current.push({
        x: current.x,
        y: current.y,
      });

      // Keep only the latest points
      if (pointsRef.current.length > 35) {
        pointsRef.current.shift();
      }

      // Build SVG path
      if (pointsRef.current.length > 2) {
        const points = pointsRef.current;

        let pathData = `M ${points[0].x} ${points[0].y}`;

        for (let i = 1; i < points.length; i++) {
          const previous = points[i - 1];
          const currentPoint = points[i];

          const controlX = (previous.x + currentPoint.x) / 2;
          const controlY = (previous.y + currentPoint.y) / 2;

          pathData += ` Q ${previous.x} ${previous.y} ${controlX} ${controlY}`;
        }

        const last = points[points.length - 1];

        pathData += ` L ${last.x} ${last.y}`;

        setPath(pathData);
      }

      animationFrameRef.current =
        requestAnimationFrame(animate);
    };

    animationFrameRef.current =
      requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isTouchDevice]);

  if (isTouchDevice) {
    return null;
  }

  return (
    <svg
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
      style={{
        overflow: "visible",
      }}
    >
      <defs>
        <linearGradient
          id="cursorTrailGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop
            offset="0%"
            stopColor="#4ade80"
            stopOpacity="0"
          />

          <stop
            offset="70%"
            stopColor="#4ade80"
            stopOpacity="0.12"
          />

          <stop
            offset="100%"
            stopColor="#4ade80"
            stopOpacity="0.75"
          />
        </linearGradient>

        <filter
          id="cursorTrailGlow"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
        >
          <feGaussianBlur
            stdDeviation="3"
            result="blur"
          />

          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {path && (
        <>
          {/* Soft glow */}
          <path
            d={path}
            fill="none"
            stroke="#4ade80"
            strokeWidth="5"
            strokeLinecap="round"
            opacity="0.08"
            filter="url(#cursorTrailGlow)"
          />

          {/* Main trail */}
          <path
            d={path}
            fill="none"
            stroke="url(#cursorTrailGradient)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </>
      )}
    </svg>
  );
}