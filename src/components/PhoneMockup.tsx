"use client";

import { Suspense, useEffect, useMemo, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { RoundedBox, Environment } from "@react-three/drei";
import * as THREE from "three";

interface PhoneModelProps {
  screenTexturePath: string;
  rotation?: [number, number, number];
  position?: [number, number, number];
}

function PhoneModel({
  screenTexturePath,
  rotation = [0, 0, 0],
  position = [0, 0, 0],
}: PhoneModelProps) {
  const texture = useMemo(() => {
    const tex = new THREE.TextureLoader().load(screenTexturePath);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [screenTexturePath]);

  return (
    <group rotation={rotation} position={position}>
      {/* Phone body */}
      <RoundedBox args={[2.4, 5, 0.3]} radius={0.3} smoothness={8}>
        <meshStandardMaterial
          color="#1a1a1a"
          metalness={0.6}
          roughness={0.3}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[2.15, 4.65, 0.01]}
        radius={0.2}
        smoothness={8}
        position={[0, 0, 0.16]}
      >
        <meshBasicMaterial map={texture} />
      </RoundedBox>

      {/* Dynamic Island */}
      <RoundedBox
        args={[0.8, 0.22, 0.01]}
        radius={0.11}
        smoothness={8}
        position={[0, 2.05, 0.17]}
      >
        <meshBasicMaterial color="#000000" />
      </RoundedBox>
    </group>
  );
}

interface PhoneMockupProps {
  screenTexturePath: string;
  rotation?: [number, number, number];
  className?: string;
}

export default function PhoneMockup({
  screenTexturePath,
  rotation = [0.1, -0.2, 0],
  className = "",
}: PhoneMockupProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div className={`w-full h-full flex items-center justify-center ${className}`}>
        <img
          src={screenTexturePath}
          alt="App screenshot"
          className="w-auto h-4/5 rounded-3xl shadow-2xl shadow-sage-950/20"
        />
      </div>
    );
  }

  return (
    <div className={`w-full h-full ${className}`}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 35 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
        dpr={[1, 2]}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={0.8} />
          <directionalLight position={[-3, 2, 4]} intensity={0.3} />
          <Environment preset="city" environmentIntensity={0.3} />
          <PhoneModel
            screenTexturePath={screenTexturePath}
            rotation={rotation}
          />
        </Suspense>
      </Canvas>
    </div>
  );
}
