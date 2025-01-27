import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Butterfly() {
  const butterflyRef = useRef();
  const mixer = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isFlying, setIsFlying] = useState(false); // Tracks whether the butterfly is flying
  const flyingTimeout = useRef(null); // Timer reference

  // Load the 3D butterfly model with animations
  const { scene, animations } = useGLTF("/assets/Butterfly_Animation_Assignment.glb");

  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);

      // Define the idle and flying animations
      const idleAction = mixer.current.clipAction(animations.find((clip) => clip.name === "Idle"));
      const flyingAction = mixer.current.clipAction(animations.find((clip) => clip.name === "Flying"));

      if (idleAction) {
        idleAction.play(); // Play idle animation by default
      }

      // Save actions for hover event handling
      butterflyRef.current = { object: scene, idleAction, flyingAction };
    }
  }, [animations, scene]);

  // Update the mixer on each frame
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);

    // If flying, make the butterfly move upwards or out of the screen
    if (isFlying && butterflyRef.current?.object) {
      butterflyRef.current.object.position.y += delta * 2; // Adjust flying speed
    }
  });

  const startFlying = () => {
    const { idleAction, flyingAction } = butterflyRef.current || {};
    if (idleAction && flyingAction) {
      idleAction.fadeOut(0.5); // Fade out idle animation
      flyingAction.reset().fadeIn(0.5).play(); // Start flying animation
    }
    setIsFlying(true); // Set flying state
  };

  const stopFlying = () => {
    const { idleAction, flyingAction } = butterflyRef.current || {};
    if (idleAction && flyingAction) {
      flyingAction.stop(); // Stop flying animation
      idleAction.reset().fadeIn(0.5).play(); // Return to idle animation
    }
    setIsFlying(false); // Reset flying state
  };

  const handleHover = () => {
    setHovered(true);
    startFlying();

    // Clear the existing timeout if already set
    if (flyingTimeout.current) clearTimeout(flyingTimeout.current);
  };

  const handleUnhover = () => {
    setHovered(false);

    // Set a timeout to stop flying after 10 seconds
    flyingTimeout.current = setTimeout(() => {
      stopFlying();
    }, 10000); // 10 seconds
  };

  useEffect(() => {
    return () => {
      // Clear the timeout on component unmount
      if (flyingTimeout.current) clearTimeout(flyingTimeout.current);
    };
  }, []);

  return (
    <primitive
      object={scene}
      ref={butterflyRef}
      position={[0, 0, 0]} // Center position
      rotation={[Math.PI / 4, Math.PI / 2, 0]}
      scale={1} // Adjust the scale if needed
      onPointerOver={handleHover}
      onPointerOut={handleUnhover}
    />
  );
}




  

