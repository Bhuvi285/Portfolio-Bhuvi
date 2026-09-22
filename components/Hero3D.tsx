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

    const floatY =
      position[1] +
      Math.sin(time * 1.2 + position[0]) * 0.08;

    const targetX =
      position[0] + state.pointer.x * 0.12;

    const targetY =
      floatY + state.pointer.y * 0.08;

    badgeRef.current.position.x = THREE.MathUtils.lerp(
      badgeRef.current.position.x,
      targetX,
      0.04
    );

    badgeRef.current.position.y = THREE.MathUtils.lerp(
      badgeRef.current.position.y,
      targetY,
      0.04
    );

    badgeRef.current.rotation.z = THREE.MathUtils.lerp(
      badgeRef.current.rotation.z,
      state.pointer.x * 0.03,
      0.04
    );
  });

  return (
    <group ref={badgeRef} position={position}>
      <mesh castShadow>
        <boxGeometry args={[1.05, 0.42, 0.12]} />

        <meshStandardMaterial
          color="#18181b"
          roughness={0.25}
          metalness={0.65}
        />
      </mesh>

      <mesh position={[0, 0, 0.065]}>
        <boxGeometry args={[0.92, 0.3, 0.015]} />

        <meshStandardMaterial
          color="#09090b"
          roughness={0.35}
          metalness={0.3}
        />
      </mesh>

      <Text
        position={[0, 0, 0.085]}
        fontSize={0.13}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>

      <mesh position={[0, -0.14, 0.085]}>
        <boxGeometry args={[0.45, 0.015, 0.01]} />

        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.7}
        />
      </mesh>
    </group>
  );
}

function CodeEditor() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;

    const targetRotationY =
      state.pointer.x * 0.35;

    const targetRotationX =
      -state.pointer.y * 0.2;

    groupRef.current.rotation.y =
      THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotationY,
        0.05
      );

    groupRef.current.rotation.x =
      THREE.MathUtils.lerp(
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
      <group
        ref={groupRef}
        rotation={[0.05, -0.15, 0]}
      >
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
          <mesh
            key={x}
            position={[x, 1.05, 0.18]}
          >
            <sphereGeometry args={[0.07, 16, 16]} />

            <meshStandardMaterial
              color="#3f3f46"
              roughness={0.25}
              metalness={0.5}
            />
          </mesh>
        ))}

        {/* Status light */}
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
            position={[
              -1.35,
              0.55 - index * 0.35,
              0.16,
            ]}
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

function FloatingPlatform() {
  const platformRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!platformRef.current) return;

    const time = state.clock.elapsedTime;

    platformRef.current.rotation.z =
      Math.sin(time * 0.4) * 0.015;

    platformRef.current.position.y =
      -1.65 + Math.sin(time * 0.7) * 0.025;
  });

  return (
    <mesh
      ref={platformRef}
      position={[0, -1.65, -0.3]}
      rotation={[-0.15, 0, 0]}
      receiveShadow
    >
      <boxGeometry args={[4.8, 0.12, 2.2]} />

      <meshStandardMaterial
        color="#0f0f11"
        roughness={0.35}
        metalness={0.55}
      />
    </mesh>
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
        {/* Lighting */}
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

        {/* Main objects */}
        <CodeEditor />

        {technologies.map((technology) => (
          <TechBadge
            key={technology.name}
            name={technology.name}
            position={technology.position}
            color={technology.color}
          />
        ))}

        <FloatingPlatform />
      </Canvas>
    </div>
  );
}