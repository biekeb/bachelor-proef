import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CharacterManager from "../clues/CharacterManager";

export default function AnthonyInBar() {
  const navigate = useNavigate();
  const anthony = useGLTF("./assets/luca.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  anthony.scene.position.set(5, 6, -15);
  anthony.scene.rotation.set(0, Math.PI / -2, 0);
  anthony.scene.scale.set(1.8, 1.8, 1.8);
  anthony.scene.frustumCulled = true;

  const handleTap = () => {
    navigate("/anthony");
    CharacterManager.updateCharacterStatus("anthony"); // Update character status
  };

  return (
    <primitive
      object={anthony.scene}
      onClick={handleTap}
      onPointerDown={handleTap}
    />
  );
}
