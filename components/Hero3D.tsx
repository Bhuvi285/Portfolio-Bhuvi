"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls, Text } from "@react-three/drei";

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
      rotationIntensity={0.25}
      floatIntensity={0.5}
    >
      <group rotation={[0.05, -0.15, 0]}>
        {/* Main editor body */}
        <mesh>
          <boxGeometry args={[3.8, 2.5, 0.18]} />

          <meshStandardMaterial
            color="#18181b"
            roughness={0.35}
            metalness={0.4}
          />
        </mesh>

        {/* Top bar */}
        <mesh position={[0, 1.05, 0.12]}>
          <boxGeometry args={[3.7, 0.35, 0.04]} />

          <meshStandardMaterial color="#27272a" />
        </mesh>

        {/* Window buttons */}
        <mesh position={[-1.55, 1.05, 0.15]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#52525b" />
        </mesh>

        <mesh position={[-1.35, 1.05, 0.15]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#52525b" />
        </mesh>

        <mesh position={[-1.15, 1.05, 0.15]}>
          <sphereGeometry args={[0.07, 16, 16]} />
          <meshStandardMaterial color="#52525b" />
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
            // font="/fonts/JetBrainsMono-Regular.woff2"
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
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.8} />

        <directionalLight
          position={[3, 4, 5]}
          intensity={2}
        />

        <CodeEditor />

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
}