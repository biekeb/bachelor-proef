import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useThree, useFrame } from "@react-three/fiber"; // Import useFrame from @react-three/fiber
import CharacterManager from "../clues/CharacterManager";

export default function IsabellaInBar() {
  const navigate = useNavigate();
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);
  const { camera } = useThree();
  const ref = useRef();

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, [animations.actions]);

  useEffect(() => {
    isabella.scene.position.set(5, 6, -25);
    isabella.scene.rotation.set(0, -20, 0);
    isabella.scene.scale.set(1.7, 1.7, 1.7);
    isabella.scene.frustumCulled = false; // Disable automatic frustum culling

    // Add logging for frustum culling
    isabella.scene.traverse((child) => {
      if (child.isMesh) {
        child.onBeforeRender = (
          renderer,
          scene,
          camera,
          geometry,
          material,
          group
        ) => {
          console.log(`${child.name} is being rendered`);
        };
      }
    });
  }, [isabella.scene]);

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
    navigate("/isabella");
    CharacterManager.updateCharacterStatus("isabella"); // Update character status
  };

  return (
    <primitive
      ref={ref}
      object={isabella.scene}
      onClick={handleTap}
      onPointerDown={handleTap}
    />
  );
}
