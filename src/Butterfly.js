import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";

function Butterfly({ position }) {
  const butterflyRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Use frame to continuously check and update butterfly position
  useFrame(() => {
    if (hovered) {
      // Flutter outward when hovered
      butterflyRef.current.position.x += Math.random() * 0.2 - 0.1; // Random small movements
      butterflyRef.current.position.y += Math.random() * 0.2 - 0.1;
      butterflyRef.current.position.z += Math.random() * 0.2 - 0.1;
    } else {
      // Gradually return to original position
      butterflyRef.current.position.x += (position[0] - butterflyRef.current.position.x) * 0.1;
      butterflyRef.current.position.y += (position[1] - butterflyRef.current.position.y) * 0.1;
      butterflyRef.current.position.z += (position[2] - butterflyRef.current.position.z) * 0.1;
    }
  });

  return (
    <mesh
      ref={butterflyRef}
      position={position}
      onPointerOver={() => setHovered(true)} // Trigger flutter on hover
      onPointerOut={() => setHovered(false)} // Stop fluttering when mouse leaves
    >
      {/* Replace sphereGeometry with butterfly model if available */}
      <sphereGeometry args={[0.15, 16, 16]} />
      <meshStandardMaterial color={hovered ? "pink" : "purple"} />
    </mesh>
  );
}

export default Butterfly;

