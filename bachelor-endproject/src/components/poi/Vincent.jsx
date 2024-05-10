import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Vincent() {
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

    vincent.scene.position.set(-1, 0, 0);
    vincent.scene.rotation.set(0, 0, 0);
    vincent.scene.scale.set(1, 1, 1); 


  return <primitive object={vincent.scene} />;
}
