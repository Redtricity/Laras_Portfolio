import React, { useRef, useState, useEffect } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Butterfly() {
  const butterflyRef = useRef();
  const mixer = useRef(null);
  const [hovered, setHovered] = useState(false);
  const [isFlying, setIsFlying] = useState(false);
  const flyingTimeout = useRef(null);

  // Load the 3D butterfly model with animations
  const { scene, animations } = useGLTF(process.env.PUBLIC_URL + "/assets/Butterfly_Animation_Assignment.glb");


  useEffect(() => {
    if (animations.length) {
      mixer.current = new THREE.AnimationMixer(scene);
      const idleAction = mixer.current.clipAction(animations.find((clip) => clip.name === "Idle"));
      const flyingAction = mixer.current.clipAction(animations.find((clip) => clip.name === "Flying"));

      if (idleAction) idleAction.play(); // Play idle animation by default

      butterflyRef.current = { object: scene, idleAction, flyingAction };
    }
  }, [animations, scene]);

  // Move butterfly **OUT of the screen in a diagonal direction** when flying
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);

    if (isFlying && butterflyRef.current?.object) {
      butterflyRef.current.object.position.x += delta * 2; // Move right
      butterflyRef.current.object.position.y += delta * 2; // Move up
      butterflyRef.current.object.position.z -= delta * 2; // Move slightly towards camera
    }
  });

  const startFlying = () => {
    const { idleAction, flyingAction } = butterflyRef.current || {};
    if (idleAction && flyingAction) {
      idleAction.fadeOut(0.5);
      flyingAction.reset().fadeIn(0.5).play();
    }
    setIsFlying(true);
  };

  const stopFlying = () => {
    const { idleAction, flyingAction } = butterflyRef.current || {};
    if (idleAction && flyingAction) {
      flyingAction.stop();
      idleAction.reset().fadeIn(0.5).play();
    }
    setIsFlying(false);
  };

  const handleHover = () => {
    setHovered(true);
    startFlying();
    if (flyingTimeout.current) clearTimeout(flyingTimeout.current);
  };

  const handleUnhover = () => {
    setHovered(false);
    flyingTimeout.current = setTimeout(() => {
      stopFlying();
    }, 10000);
  };

  useEffect(() => {
    return () => {
      if (flyingTimeout.current) clearTimeout(flyingTimeout.current);
    };
  }, []);

  return (
    <primitive
      object={scene}
      ref={butterflyRef}
      position={[0, -1, 0]} // Center position
      rotation={[Math.PI / 4, Math.PI / 2, 0]} // Facing the right way
      scale={0.8}
      onPointerOver={handleHover}
      onPointerOut={handleUnhover}
    />
  );
}












  

