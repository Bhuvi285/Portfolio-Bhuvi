"use client";

import { Canvas, useFrame, useLoader } from "@react-three/fiber";
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
    position: [-2.25, 1.25, 0.05] as [number, number, number],
    color: "#f97316",
  },
  {
    name: "Spring",
    position: [2.15, 1.15, 0.05] as [number, number, number],
    color: "#4ade80",
  },
  {
    name: "React",
    position: [-2.35, -1.1, 0.05] as [number, number, number],
    color: "#60a5fa",
  },
  {
    name: "Next.js",
    position: [2.25, -1.1, 0.05] as [number, number, number],
    color: "#f5f5f5",
  },
];

function ProfileImage() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/bhuvanesh-portrait.png"
  );

  const imageRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!imageRef.current) return;

    const targetRotationY = state.pointer.x * 0.1;
    const targetRotationX = -state.pointer.y * 0.06;

    imageRef.current.rotation.y = THREE.MathUtils.lerp(
      imageRef.current.rotation.y,
      targetRotationY,
      0.05
    );

    imageRef.current.rotation.x = THREE.MathUtils.lerp(
      imageRef.current.rotation.x,
      targetRotationX,
      0.05
    );
  });

  return (
    <group
      position={[0.18, -0.02, 0.52]}
      scale={[1.05, 1.05, 1.05]}
    >
      {/* Green glow behind portrait */}
      <mesh position={[0, 0, -0.1]}>
        <planeGeometry args={[2.55, 3.25]} />

        <meshBasicMaterial
          color="#22c55e"
          transparent
          opacity={0.045}
          depthWrite={false}
        />
      </mesh>

      {/* Dark portrait backing */}
      <mesh
        position={[0, 0, -0.055]}
        castShadow
      >
        <boxGeometry args={[2.3, 3, 0.08]} />

        <meshStandardMaterial
          color="#09090b"
          roughness={0.3}
          metalness={0.55}
        />
      </mesh>

      {/* Portrait */}
      <mesh
        ref={imageRef}
        castShadow
      >
        <planeGeometry args={[2.1, 2.8]} />

        <meshStandardMaterial
          map={texture}
          transparent
          alphaTest={0.01}
          depthWrite={true}
          roughness={0.35}
          metalness={0.1}
        />
      </mesh>

      {/* Green portrait accent */}
      <mesh position={[0, -1.42, 0.09]}>
        <boxGeometry args={[0.8, 0.025, 0.02]} />

        <meshBasicMaterial
          color="#4ade80"
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

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
      {/* 3D badge body */}
      <mesh castShadow>
        <boxGeometry args={[1.05, 0.42, 0.12]} />

        <meshStandardMaterial
          color="#18181b"
          roughness={0.25}
          metalness={0.65}
        />
      </mesh>

      {/* Inner badge surface */}
      <mesh position={[0, 0, 0.065]}>
        <boxGeometry args={[0.92, 0.3, 0.015]} />

        <meshStandardMaterial
          color="#09090b"
          roughness={0.35}
          metalness={0.3}
        />
      </mesh>

      {/* Technology name */}
      <Text
        position={[0, 0, 0.085]}
        fontSize={0.13}
        color={color}
        anchorX="center"
        anchorY="middle"
      >
        {name}
      </Text>

      {/* Badge accent */}
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

    const targetRotationY = state.pointer.x * 0.2;
    const targetRotationX = -state.pointer.y * 0.12;

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
      speed={1.3}
      rotationIntensity={0.05}
      floatIntensity={0.35}
    >
      <group
        ref={groupRef}
        rotation={[0.05, -0.15, 0]}
      >
        {/* Main editor body */}
        <mesh castShadow>
          <boxGeometry args={[3.8, 2.8, 0.22]} />

          <meshStandardMaterial
            color="#111113"
            roughness={0.3}
            metalness={0.65}
          />
        </mesh>

        {/* Inner screen */}
        <mesh position={[0, 0, 0.125]}>
          <boxGeometry args={[3.55, 2.45, 0.025]} />

          <meshStandardMaterial
            color="#09090b"
            roughness={0.4}
            metalness={0.15}
          />
        </mesh>

        {/* Top editor bar */}
        <mesh position={[0, 1.2, 0.15]}>
          <boxGeometry args={[3.7, 0.35, 0.05]} />

          <meshStandardMaterial
            color="#27272a"
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>

        {/* Window buttons */}
        {[-1.55, -1.35, -1.15].map((x) => (
          <mesh
            key={x}
            position={[x, 1.2, 0.18]}
          >
            <sphereGeometry args={[0.07, 16, 16]} />

            <meshStandardMaterial
              color="#3f3f46"
              roughness={0.25}
              metalness={0.5}
            />
          </mesh>
        ))}

        {/* Green status indicator */}
        <mesh position={[1.55, 1.2, 0.18]}>
          <sphereGeometry args={[0.045, 16, 16]} />

          <meshStandardMaterial
            color="#4ade80"
            emissive="#22c55e"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Code behind portrait */}
        {codeLines.map((line, index) => (
          <Text
            key={line.text}
            position={[
              -1.5,
              0.75 - index * 0.34,
              0.145,
            ]}
            fontSize={0.115}
            color={line.color}
            anchorX="left"
            anchorY="middle"
            fillOpacity={0.45}
          >
            {line.text}
          </Text>
        ))}

        {/* Green edge accent */}
        <mesh position={[0, -1.39, 0.03]}>
          <boxGeometry args={[1.1, 0.025, 0.025]} />

          <meshBasicMaterial
            color="#4ade80"
            transparent
            opacity={0.65}
          />
        </mesh>

        {/* Portrait in front of editor */}
        <ProfileImage />
      </group>
    </Float>
  );
}

function FloatingPlatform() {
  const platformRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!platformRef.current) return;

    const time = state.clock.elapsedTime;

    platformRef.current.position.y =
      -1.65 + Math.sin(time * 0.7) * 0.025;

    platformRef.current.rotation.z =
      Math.sin(time * 0.4) * 0.01;
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
    <div className="relative h-[380px] w-full sm:h-[460px] lg:h-[520px]">
      <Canvas
        camera={{
          position: [0, 0, 6.5],
          fov: 42,
        }}
        shadows
      >
        {/* Base lighting */}
        <ambientLight intensity={0.5} />

        {/* Main light */}
        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
          castShadow
        />

        {/* Main green light */}
        <pointLight
          position={[0, 0, 2]}
          color="#22c55e"
          intensity={1.5}
          distance={6}
        />

        {/* Secondary green rim light */}
        <pointLight
          position={[-2, 1, 2]}
          color="#22c55e"
          intensity={1.2}
          distance={5}
        />

        {/* Environment */}
        <Environment preset="city" />

        {/* Main 3D editor */}
        <CodeEditor />

        {/* Floating technologies */}
        {technologies.map((technology) => (
          <TechBadge
            key={technology.name}
            name={technology.name}
            position={technology.position}
            color={technology.color}
          />
        ))}

        {/* Floating platform */}
        <FloatingPlatform />
      </Canvas>
    </div>
  );
}