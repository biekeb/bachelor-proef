import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function Isabella() {
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Death"];
    action.play()
  }, []);

  return <primitive object={isabella.scene} />;
}
