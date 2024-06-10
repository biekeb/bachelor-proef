import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Anthony() {
  const anthony = useGLTF("./assets/luca.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  anthony.scene.position.set(5, 6, -15);
  anthony.scene.rotation.set(0, Math.PI / -2, 0);
  anthony.scene.scale.set(1.8, 1.8, 1.8);

  return <primitive object={anthony.scene} />;
}
