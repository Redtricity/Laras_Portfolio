import React from "react";
import { Canvas } from "@react-three/fiber";
import Butterfly from "./Butterfly";
import { OrbitControls } from "@react-three/drei";

export default function ButterflyAnimation() {
  const sphereRadius = 2; // Radius of the butterfly cluster
  const butterflyCount = 30; // Number of butterflies

  // Generate consistent positions on a sphere
  const butterflies = React.useMemo(() => {
    return Array.from({ length: butterflyCount }, () => {
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const x = sphereRadius * Math.sin(phi) * Math.cos(theta);
      const y = sphereRadius * Math.sin(phi) * Math.sin(theta);
      const z = sphereRadius * Math.cos(phi);
      return [x, y, z];
    });
  }, [butterflyCount, sphereRadius]);

  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <directionalLight position={[5, 5, 5]} />
      {butterflies.map((position, index) => (
        <Butterfly key={index} position={position} />
      ))}
      <OrbitControls enableZoom={false} enableRotate={false} />
    </Canvas>
  );
}



