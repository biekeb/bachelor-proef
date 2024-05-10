import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Deadon() {
  const deadon = useGLTF("./assets/deadon.glb");
  const animations = useAnimations(deadon.animations, deadon.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Death"];
    action.play().setLoop(THREE.LoopOnce, 0); // Set loop mode to LoopOnce and repetitions to 0
    action.clampWhenFinished = true; // Stop the animation from advancing after it completes
  }, []);

  return <primitive object={deadon.scene} />;
}