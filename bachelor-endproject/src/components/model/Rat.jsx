import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function Rat() {
  const { scene, animations } = useGLTF("./assets/Rat.glb");
  const { actions } = useAnimations(animations, scene);

  // Use a ref to track the rat's position
  const ratRef = useRef();

  useEffect(() => {
    // Play the idle animation initially
    const idleAction = actions["RatArmature|Rat_Idle"];
    idleAction.play();

    // Play the walk animation after a delay
    setTimeout(() => {
      idleAction.fadeOut(0.5);
      const walkAction = actions["RatArmature|Rat_Run"];
      walkAction.reset().fadeIn(0.5).play();
    }, 2000); // Change to walking after 2 seconds

    // Set initial position and scale
    scene.position.set(3, 5, 0);
    scene.rotation.set(0, 0, 0);
    scene.scale.set(0.1, 0.1, 0.1);

    // Attach the scene to the ref
    ratRef.current = scene;
  }, [actions, scene]);

  useFrame((state, delta) => {
    // Move the rat along the x-axis
    if (ratRef.current) {
      ratRef.current.position.z += delta * 0.5; // Adjust speed as needed
    }
  });

  return <primitive object={scene} />;
}
