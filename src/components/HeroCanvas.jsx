import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html } from '@react-three/drei';
import * as THREE from 'three';

function OrbitingNode({ name, angleOffset, radius, color, isActive, icon }) {
  const meshRef = useRef();
  const textRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime() * 0.4 + angleOffset;
    const x = Math.cos(t) * radius;
    const z = Math.sin(t) * radius * 0.6;
    const y = Math.sin(t * 1.5) * 0.4;

    if (meshRef.current) {
      meshRef.current.position.set(x, y, z);
    }
  });

  return (
    <group ref={meshRef}>
      {/* Node Sphere */}
      <mesh>
        <sphereGeometry args={[0.3, 32, 32]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={isActive ? 1.5 : 0.4}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Orbit Ring Trail */}
      <mesh scale={1.2}>
        <sphereGeometry args={[0.35, 16, 16]} />
        <meshBasicMaterial
          color={color}
          transparent
          opacity={0.25}
          wireframe
        />
      </mesh>

      {/* HTML Label */}
      <Html distanceFactor={12} center>
        <div className={`px-3 py-1.5 rounded-full backdrop-blur-md border text-xs font-semibold whitespace-nowrap shadow-lg transition-all duration-300 pointer-events-none flex items-center gap-1.5 ${
          isActive 
            ? 'bg-[#e95126] text-white border-[#e95126] scale-110 shadow-[#e95126]/30' 
            : 'bg-[#f5f3ed]/90 text-[#222720] border-[#d8d9cf]'
        }`}>
          <span className="w-2 h-2 rounded-full bg-current animate-pulse" />
          {name}
        </div>
      </Html>
    </group>
  );
}

function GlowingCentralObject({ scrollProgress }) {
  const groupRef = useRef();
  const innerRef = useRef();
  const outerRef = useRef();
  const ringRef = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    
    if (innerRef.current) {
      innerRef.current.rotation.x = t * 0.3;
      innerRef.current.rotation.y = t * 0.5;
    }
    if (outerRef.current) {
      outerRef.current.rotation.x = -t * 0.2;
      outerRef.current.rotation.z = t * 0.3;
    }
    if (ringRef.current) {
      ringRef.current.rotation.z = t * 0.4;
      ringRef.current.rotation.y = Math.sin(t * 0.5) * 0.2;
    }
    if (groupRef.current) {
      // Scroll reactive tilting & scale transition
      groupRef.current.rotation.x = Math.sin(t * 0.2) * 0.1 + scrollProgress * 0.8;
      groupRef.current.rotation.y = scrollProgress * Math.PI;
    }
  });

  // Dynamic color shift based on scroll progress: raw contribution (#e95126) -> verified ledger (#4d5946 / gold)
  const morphScale = 1 + scrollProgress * 0.3;

  return (
    <group ref={groupRef} scale={morphScale}>
      {/* Outer Glass Aura */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshPhysicalMaterial
          color="#e95126"
          transparent
          opacity={0.35}
          roughness={0.1}
          metalness={0.1}
          transmission={0.9}
          ior={1.4}
          thickness={0.5}
        />
      </mesh>

      {/* Inner Glowing Core (Seed -> Verified Block) */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color={scrollProgress > 0.5 ? "#dce4d3" : "#e95126"}
          emissive={scrollProgress > 0.5 ? "#4d5946" : "#e95126"}
          emissiveIntensity={1.8}
          roughness={0.1}
          metalness={0.9}
        />
      </mesh>

      {/* Orbiting Halo Ring */}
      <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[2.2, 0.04, 16, 100]} />
        <meshStandardMaterial
          color="#e95126"
          emissive="#e95126"
          emissiveIntensity={1.2}
          transparent
          opacity={0.8}
        />
      </mesh>
    </group>
  );
}

function ParticleField() {
  const pointsRef = useRef();

  const count = 120;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 16;
    }
    return pos;
  }, [count]);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.03) * 0.05;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#e95126"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

export default function HeroCanvas({ activeStage = 0, scrollProgress = 0 }) {
  const stages = [
    { name: 'Collect', color: '#e95126', angle: 0 },
    { name: 'Verify', color: '#4d5946', angle: Math.PI / 2 },
    { name: 'Disburse', color: '#e95126', angle: Math.PI },
    { name: 'Prove', color: '#4d5946', angle: (3 * Math.PI) / 2 },
  ];

  return (
    <div className="w-full h-[450px] md:h-[550px] relative">
      <Canvas
        camera={{ position: [0, 0, 7.5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-5, -5, -5]} intensity={1.2} color="#e95126" />

        <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.4}>
          <GlowingCentralObject scrollProgress={scrollProgress} />

          {stages.map((stage, idx) => (
            <OrbitingNode
              key={stage.name}
              name={stage.name}
              angleOffset={stage.angle}
              radius={3.4}
              color={stage.color}
              isActive={activeStage === idx}
            />
          ))}

          <ParticleField />
        </Float>
      </Canvas>
    </div>
  );
}
