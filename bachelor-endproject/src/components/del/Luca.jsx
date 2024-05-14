import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Luca() {
  const luca = useGLTF("./assets/luca.glb");
  const animations = useAnimations(luca.animations, luca.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  luca.scene.position.set(1, 0, 0);
  luca.scene.rotation.set(0, 0, 0);
  luca.scene.scale.set(1, 1, 1);

  return <primitive object={luca.scene} />;
}
