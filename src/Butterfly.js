  import React, { useRef } from "react";
  import { useFrame } from "@react-three/fiber";
  import { useGLTF } from "@react-three/drei";
  import * as THREE from "three";

  
  export default function Butterfly() {
    const butterflyRef = useRef();
  
    // Load the 3D butterfly model
    const { scene, animations } = useGLTF("/assets/Butterfly_Animation_Assignment.glb");
  
    // Adjust the butterfly's rotation
    scene.rotation.set(Math.PI / 0.1, 1, 0.5); // Rotate 90 degrees around the X-axis
  
    const mixer = useRef();
  if (!mixer.current && animations.length > 0) {
    mixer.current = new THREE.AnimationMixer(scene);
    animations.forEach((clip) => mixer.current.clipAction(clip).play());
  }

  // Update animation frames in the render loop
  useFrame((state, delta) => {
    if (mixer.current) mixer.current.update(delta);
  });
    
  
    return (
      <primitive
        object={scene}
        ref={butterflyRef}
        position={[0, 0, 0]} // Adjust position if necessary
        scale={1} // Adjust scale if the butterfly is too large or too small
      />
    );
  }
  

