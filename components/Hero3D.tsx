"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import {
  Environment,
  Float,
  Text,
} from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

const codeLines = [
  {
    text: "const developer = {",
    color: "#f5f5f5",
  },
  {
    text: '  name: "Bhuvanesh",',
    color: "#4ade80",
  },
  {
    text: '  role: "Full Stack Developer",',
    color: "#60a5fa",
  },
  {
    text: '  stack: ["Java", "React"],',
    color: "#c084fc",
  },
  {
    text: "};",
    color: "#f5f5f5",
  },
];

const technologies = [
  {
    name: "Java",
    position: [-2.2, 1.2, 0] as [number, number, number],
    color: "#f97316",
  },
  {
    name: "Spring",
    position: [2.1, 1.1, 0] as [number, number, number],
    color: "#4ade80",
  },
  {
    name: "React",
    position: [-2.3, -1.1, 0] as [number, number, number],
    color: "#60a5fa",
  },
  {
    name: "Next.js",
    position: [2.2, -1.1, 0] as [number, number, number],
    color: "#f5f5f5",
  },
];

function TechBadge({
  name,
  position,
  color,
}: {
  name: string;
  position: [number, number, number];
  color: string;
}) {
  const badgeRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!badgeRef.current) return;

    const time = state.clock.elapsedTime;

    badgeRef.current.position.y =
      position[1] + Math.sin(time * 1.2 + position[0]) * 0.08;

    badgeRef.current.rotation.z =
      Math.sin(time * 0.8 + position[0]) * 0.04;
  });

  return (
    <group ref={badgeRef} position={position}>
      {/* Badge background */}
      <mesh>
        <planeGeometry args={[1.05, 0.42]} />

        <meshStandardMaterial
          color="#18181b"
          roughness={0.3}
          metalness={0.5}
          transparent
          opacity={0.95}
        />
      </mesh>

      {/* Badge border */}
      <mesh position={[0, 0, 0.015]}>
        <planeGeometry args={[0.92, 0.3]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.08}
        />
      </mesh>

      {/* Technology name */}
      <Text
        position={[0, 0, 0.03]}
        fontSize={0.13}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>
    </group>
  );
}

function CodeEditor() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const mouseX = state.pointer.x;
    const mouseY = state.pointer.y;

    const targetRotationY = mouseX * 0.35;
    const targetRotationX = -mouseY * 0.2;

    groupRef.current.rotation.y = THREE.MathUtils.lerp(
      groupRef.current.rotation.y,
      targetRotationY,
      0.05
    );

    groupRef.current.rotation.x = THREE.MathUtils.lerp(
      groupRef.current.rotation.x,
      targetRotationX,
      0.05
    );
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.08}
      floatIntensity={0.5}
    >
      <group ref={groupRef} rotation={[0.05, -0.15, 0]}>
        {/* Green glow */}
        <mesh position={[0, 0, -0.25]}>
          <planeGeometry args={[4.5, 3.2]} />

          <meshBasicMaterial
            color="#22c55e"
            transparent
            opacity={0.035}
          />
        </mesh>

        {/* Main editor */}
        <mesh castShadow>
          <boxGeometry args={[3.8, 2.5, 0.22]} />

          <meshStandardMaterial
            color="#111113"
            roughness={0.3}
            metalness={0.65}
          />
        </mesh>

        {/* Screen */}
        <mesh position={[0, -0.03, 0.125]}>
          <boxGeometry args={[3.55, 1.95, 0.025]} />

          <meshStandardMaterial
            color="#09090b"
            roughness={0.4}
            metalness={0.15}
          />
        </mesh>

        {/* Top bar */}
        <mesh position={[0, 1.05, 0.14]}>
          <boxGeometry args={[3.7, 0.35, 0.05]} />

          <meshStandardMaterial color="#27272a" />
        </mesh>

        {/* Window buttons */}
        {[-1.55, -1.35, -1.15].map((x) => (
          <mesh key={x} position={[x, 1.05, 0.18]}>
            <sphereGeometry args={[0.07, 16, 16]} />

            <meshStandardMaterial
              color="#3f3f46"
              roughness={0.25}
              metalness={0.5}
            />
          </mesh>
        ))}

        {/* Green status indicator */}
        <mesh position={[1.55, 1.05, 0.18]}>
          <sphereGeometry args={[0.045, 16, 16]} />

          <meshStandardMaterial
            color="#4ade80"
            emissive="#22c55e"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Code */}
        {codeLines.map((line, index) => (
          <Text
            key={line.text}
            position={[-1.35, 0.55 - index * 0.35, 0.16]}
            fontSize={0.16}
            color={line.color}
            anchorX="left"
            anchorY="middle"
          >
            {line.text}
          </Text>
        ))}
      </group>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="h-[420px] w-full">
      <Canvas
        camera={{
          position: [0, 0, 6],
          fov: 45,
        }}
        shadows
      >
        <ambientLight intensity={0.5} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
          castShadow
        />

        <pointLight
          position={[0, 0, 2]}
          color="#22c55e"
          intensity={1.5}
          distance={6}
        />

        <Environment preset="city" />

        <CodeEditor />

        {technologies.map((technology) => (
          <TechBadge
            key={technology.name}
            name={technology.name}
            position={technology.position}
            color={technology.color}
          />
        ))}
      </Canvas>
    </div>
  );
}