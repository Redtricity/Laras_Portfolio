import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import Butterfly from "./Butterfly";

export default function MiniButterflyAnimation() {
  return (
    <div className="mini-animation">
      <Canvas className="mini-canvas" camera={{ position: [0, 0, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <Suspense fallback={null}>
          <Butterfly />
        </Suspense>
      </Canvas>
    </div>
  );
}