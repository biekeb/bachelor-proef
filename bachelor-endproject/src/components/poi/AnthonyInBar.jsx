import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useThree, useFrame } from "@react-three/fiber"; // Import useFrame from @react-three/fiber
import CharacterManager from "../clues/CharacterManager";

export default function AnthonyInBar() {
  const navigate = useNavigate();
  const anthony = useGLTF("./assets/luca.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);
  const { camera } = useThree();
  const ref = useRef();

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  anthony.scene.position.set(5, 6, -15);
  anthony.scene.rotation.set(0, Math.PI / -2, 0);
  anthony.scene.scale.set(1.8, 1.8, 1.8);
  anthony.scene.frustumCulled = true;

  useFrame(() => {
    if (ref.current) {
      const distance = camera.position.distanceTo(ref.current.position);
      if (distance < 5) {
        // Render if within 10 meters
        ref.current.visible = true;
      } else {
        ref.current.visible = false;
      }
    }
  });

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
