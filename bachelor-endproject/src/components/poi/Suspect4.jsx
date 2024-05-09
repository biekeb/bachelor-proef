import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Isabella() {
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);

  useEffect(() => {

    //idle animation
    const action = animations.actions["CharacterArmature|Death"];
    action.play()
  }, []);

  return <primitive object={isabella.scene} />;
}
