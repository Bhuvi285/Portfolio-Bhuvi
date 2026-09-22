"use client";

import { Canvas } from "@react-three/fiber";
import { Float, OrbitControls } from "@react-three/drei";

function CodeEditor() {
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.25}
      floatIntensity={0.5}
    >
      <mesh rotation={[0.05, -0.15, 0]}>
        <boxGeometry args={[3.8, 2.5, 0.18]} />

        <meshStandardMaterial
          color="#18181b"
          roughness={0.35}
          metalness={0.4}
        />
      </mesh>
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