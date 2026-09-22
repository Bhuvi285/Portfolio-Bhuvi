"use client";

import { Canvas } from "@react-three/fiber";
import {
  Float,
  OrbitControls,
  Text,
  Environment,
} from "@react-three/drei";

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

function CodeEditor() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <group rotation={[0.05, -0.15, 0]}>
        {/* Green glow behind the editor */}
        <mesh position={[0, 0, -0.25]}>
          <planeGeometry args={[4.5, 3.2]} />

          <meshBasicMaterial
            color="#22c55e"
            transparent
            opacity={0.035}
          />
        </mesh>

        {/* Main editor body */}
        <mesh>
          <boxGeometry args={[3.8, 2.5, 0.22]} />

          <meshStandardMaterial
            color="#111113"
            roughness={0.3}
            metalness={0.65}
          />
        </mesh>

        {/* Inner screen */}
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

          <meshStandardMaterial
            color="#27272a"
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>

        {/* Window buttons */}
        <mesh position={[-1.55, 1.05, 0.18]}>
          <sphereGeometry args={[0.07, 16, 16]} />

          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>

        <mesh position={[-1.35, 1.05, 0.18]}>
          <sphereGeometry args={[0.07, 16, 16]} />

          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>

        <mesh position={[-1.15, 1.05, 0.18]}>
          <sphereGeometry args={[0.07, 16, 16]} />

          <meshStandardMaterial
            color="#3f3f46"
            roughness={0.25}
            metalness={0.5}
          />
        </mesh>

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

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.35}
        />
      </Canvas>
    </div>
  );
}