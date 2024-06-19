import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useThree, useFrame } from "@react-three/fiber"; // Import useFrame from @react-three/fiber
import CharacterManager from "../clues/CharacterManager";

export function VincentInBar() {
  const navigate = useNavigate();
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);
  const { camera } = useThree();
  const ref = useRef();

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  vincent.scene.position.set(-7, 5, -22);
  vincent.scene.rotation.set(0, Math.PI / 2, 0);
  vincent.scene.scale.set(2.5, 2.5, 2.5);
  vincent.scene.frustumCulled = true;

  useFrame(() => {
    if (ref.current) {
      const distance = camera.position.distanceTo(ref.current.position);
      if (distance < 15) {
        // Render if within 10 meters
        ref.current.visible = true;
      } else {
        ref.current.visible = false;
      }
    }
  });

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
