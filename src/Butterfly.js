import React, { useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Butterfly() {
  const butterflyRef = useRef();
  const [hovered, setHovered] = useState(false);

  // Load the 3D butterfly model with animations
  const { scene, animations } = useGLTF("/assets/Butterfly_Animation_Assignment.glb");
  const mixer = useRef(null);

  React.useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene); // Create the animation mixer
      const action = mixer.current.clipAction(animations[0]);
      action.play(); // Initialize animation
      action.paused = true; // Pause the animation initially
    }
  }, [animations, scene]);

  // Update the mixer on each frame if it exists
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });

  // Handlers for mouse hover to play/pause the animation
  const handleHover = () => {
    setHovered(true);
    if (mixer.current) {
      const action = mixer.current.clipAction(animations[0]);
      action.paused = false; // Resume animation on hover
    }
  };

  const handleUnhover = () => {
    setHovered(false);
    if (mixer.current) {
      const action = mixer.current.clipAction(animations[0]);
      action.paused = true; // Pause animation when hover ends
    }
  };

  return (
    <primitive
      object={scene}
      ref={butterflyRef}
      position={[0, 0, 0]}
      scale={1}
      onPointerOver={handleHover}
      onPointerOut={handleUnhover}
    />
  );
}

  

