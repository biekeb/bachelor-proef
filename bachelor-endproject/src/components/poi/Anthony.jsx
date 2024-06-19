import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Anthony() {
  const anthony = useGLTF("./assets/luca.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  anthony.scene.position.set(0, -6, 0);
  anthony.scene.rotation.set(0, 0, 0);
  anthony.scene.scale.set(5, 5, 5);
  anthony.scene.frustumCulled = false; // Disable automatic frustum culling

  return <primitive object={anthony.scene} />;
}
