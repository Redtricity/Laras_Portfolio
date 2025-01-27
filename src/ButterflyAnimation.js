import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Butterfly from "./Butterfly";

export default function ButterflyAnimation() {
  return (
    <div style={{ width: "100%", height: "100vh", position: "relative" }}>
      {/* This Canvas is exclusively for Three.js elements */}
      <Canvas camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Butterfly />
        </Suspense>
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Add any UI outside the Canvas */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          left: "10px",
          color: "white",
          zIndex: 10,
        }}
      >
        Optional Loading Indicator or UI
      </div>
    </div>
  );
}











