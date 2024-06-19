import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Isabella() {
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  isabella.scene.position.set(0, -6, 0);
  isabella.scene.rotation.set(0, 0, 0);
  isabella.scene.scale.set(5, 5, 5);
  isabella.scene.frustumCulled = false; // Disable automatic frustum culling


  return <primitive object={isabella.scene} />;
}
