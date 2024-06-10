import React from "react";
import { useGLTF } from "@react-three/drei";

export function Office2() {
  const { scene } = useGLTF("./assets/office2/untitled.glb");

  scene.scale.set(1, 1, 1);

  return <primitive object={scene} />;
}
