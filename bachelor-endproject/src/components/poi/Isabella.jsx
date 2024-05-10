import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Isabella() {
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);
  console.log(animations.actions);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  isabella.scene.position.set(3, 0, 0);
  isabella.scene.rotation.set(0, 0, 0);
  isabella.scene.scale.set(1, 1, 1);

  return <primitive object={isabella.scene} />;
}