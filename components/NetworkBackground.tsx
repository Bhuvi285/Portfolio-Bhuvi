"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useTheme } from "next-themes";
import { useMemo, useRef } from "react";
import * as THREE from "three";

type Node = {
  baseX: number;
  baseY: number;
  baseZ: number;
  phase: number;
  speed: number;
};

const NODE_COUNT = 65;
const MAX_CONNECTIONS = 180;

function NetworkScene() {
  const { resolvedTheme } = useTheme();
  const { size } = useThree();

  const nodes = useMemo<Node[]>(() => {
    return Array.from({ length: NODE_COUNT }, () => ({
      baseX: (Math.random() - 0.5) * 12,
      baseY: (Math.random() - 0.5) * 7,
      baseZ: (Math.random() - 0.5) * 2,
      phase: Math.random() * Math.PI * 2,
      speed: 0.15 + Math.random() * 0.2,
    }));
  }, []);

  const pointsRef = useRef<THREE.Points>(null);
  const linesRef = useRef<THREE.LineSegments>(null);

  const pointPositions = useMemo(() => {
    return new Float32Array(NODE_COUNT * 3);
  }, []);

  const linePositions = useMemo(() => {
    return new Float32Array(MAX_CONNECTIONS * 6);
  }, []);

  const pointGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(pointPositions, 3)
    );

    return geometry;
  }, [pointPositions]);

  const lineGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry();

    geometry.setAttribute(
      "position",
      new THREE.BufferAttribute(linePositions, 3)
    );

    return geometry;
  }, [linePositions]);

  useFrame((state) => {
    const time = state.clock.elapsedTime;

    const positions = pointGeometry.attributes.position
      .array as Float32Array;

    /*
     * Move every node very slowly.
     */
    nodes.forEach((node, index) => {
      const i = index * 3;

      positions[i] =
        node.baseX +
        Math.sin(time * node.speed + node.phase) * 0.12;

      positions[i + 1] =
        node.baseY +
        Math.cos(time * node.speed * 0.8 + node.phase) * 0.1;

      positions[i + 2] =
        node.baseZ +
        Math.sin(time * node.speed * 0.5 + node.phase) * 0.05;
    });

    pointGeometry.attributes.position.needsUpdate = true;

    /*
     * Create connections between nearby nodes.
     */
    let connectionCount = 0;

    for (let i = 0; i < NODE_COUNT; i++) {
      const ix = positions[i * 3];
      const iy = positions[i * 3 + 1];
      const iz = positions[i * 3 + 2];

      for (let j = i + 1; j < NODE_COUNT; j++) {
        if (connectionCount >= MAX_CONNECTIONS) break;

        const jx = positions[j * 3];
        const jy = positions[j * 3 + 1];
        const jz = positions[j * 3 + 2];

        const dx = ix - jx;
        const dy = iy - jy;
        const dz = iz - jz;

        const distance = Math.sqrt(
          dx * dx + dy * dy + dz * dz
        );

        if (distance < 1.8) {
          const lineIndex = connectionCount * 6;

          linePositions[lineIndex] = ix;
          linePositions[lineIndex + 1] = iy;
          linePositions[lineIndex + 2] = iz;

          linePositions[lineIndex + 3] = jx;
          linePositions[lineIndex + 4] = jy;
          linePositions[lineIndex + 5] = jz;

          connectionCount++;
        }
      }
    }

    lineGeometry.setDrawRange(0, connectionCount * 2);
    lineGeometry.attributes.position.needsUpdate = true;

    /*
     * Small mouse parallax.
     */
    const group = pointsRef.current?.parent;

    if (group) {
      const targetX = state.pointer.x * 0.12;
      const targetY = state.pointer.y * 0.08;

      group.rotation.y = THREE.MathUtils.lerp(
        group.rotation.y,
        targetX,
        0.02
      );

      group.rotation.x = THREE.MathUtils.lerp(
        group.rotation.x,
        -targetY,
        0.02
      );
    }
  });

  const isDark = resolvedTheme !== "light";

  const nodeColor = isDark ? "#4ade80" : "#16a34a";
  const lineColor = isDark ? "#4ade80" : "#16a34a";

  /*
   * Slightly reduce the background on smaller screens.
   */
  const scale = Math.min(size.width / 1200, 1);

  return (
    <group scale={Math.max(scale, 0.7)}>
      {/* Connecting lines */}
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial
          color={lineColor}
          transparent
          opacity={isDark ? 0.14 : 0.07}
          depthWrite={false}
        />
      </lineSegments>

      {/* Main particles */}
      <points ref={pointsRef} geometry={pointGeometry}>
        <pointsMaterial
          color={nodeColor}
          size={isDark ? 0.055 : 0.04}
          transparent
          opacity={isDark ? 0.7 : 0.35}
          sizeAttenuation
          depthWrite={false}
        />
      </points>
    </group>
  );
}

export default function NetworkBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0">
      <div className="absolute inset-0 bg-[var(--background)]" />

      <div className="absolute inset-0 opacity-90">
        <Canvas
          camera={{
            position: [0, 0, 8],
            fov: 50,
          }}
          dpr={[1, 1.5]}
          gl={{
            alpha: true,
            antialias: true,
          }}
        >
          <ambientLight intensity={0.5} />

          <NetworkScene />
        </Canvas>
      </div>

      {/* Subtle dark overlay for readability */}
      <div className="absolute inset-0 bg-black/5 dark:bg-black/10" />
    </div>
  );
}