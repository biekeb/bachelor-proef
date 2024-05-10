import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Anthony() {
  const anthony = useGLTF("./assets/anthony.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  anthony.scene.position.set(-3, 5, 0);
  anthony.scene.rotation.set(0, Math.PI, 0); 
  anthony.scene.scale.set(1, 1, 1); 

  return <primitive object={anthony.scene} />;
}
