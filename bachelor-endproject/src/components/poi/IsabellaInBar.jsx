import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterManager from "../clues/CharacterManager";

export default function IsabellaInBar() {
  const navigate = useNavigate();
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  isabella.scene.position.set(5, 6, -25);
  isabella.scene.rotation.set(0, -20, 0);
  isabella.scene.scale.set(1.7, 1.7, 1.7);
  isabella.scene.frustumCulled = true;

  const handleTap = () => {
    navigate("/isabella");
    CharacterManager.updateCharacterStatus("isabella"); // Update character status
  };

  return (
    <primitive
      object={isabella.scene}
      onClick={handleTap}
      onPointerDown={handleTap}
    />
  );
}
