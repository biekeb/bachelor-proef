import React, { useEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import CharacterManager from "../clues/CharacterManager";

export function VincentInBar() {
  const navigate = useNavigate();
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  vincent.scene.position.set(-7, 5, -22);
  vincent.scene.rotation.set(0, Math.PI / 2, 0);
  vincent.scene.scale.set(2.5, 2.5, 2.5);
  vincent.scene.frustumCulled = true;

  const handleTap = () => {
    navigate("/vincent");
    CharacterManager.updateCharacterStatus("vincent");
  };

  return (
    <primitive
      object={vincent.scene}
      onClick={handleTap}
      onPointerDown={handleTap}
    />
  );
}
