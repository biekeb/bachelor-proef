import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { useNavigate } from "react-router-dom";

export const DeadonScene = () => {
  return (
    <>
      <Deadon />
    </>
  );
};

function Deadon() {
  const navigate = useNavigate();

  const { scene, animations } = useGLTF("./assets/deadon.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions["CharacterArmature|Death"];
    action.play().setLoop(THREE.LoopOnce, 0);
    action.clampWhenFinished = true;

    // Ensure all materials are correctly set
    scene.traverse((object) => {
      if (object.isMesh) {
        object.frustumCulled = false;
        object.castShadow = true; 
        object.receiveShadow = true; 

        if (object.material) {
          object.material.depthWrite = true;
          object.material.depthTest = true;
          object.material.needsUpdate = true;
        }
      }
    });
  }, [actions, scene]);

  scene.position.set(0, 5, 0);
  scene.rotation.set(0, Math.PI / 2, 0);
  scene.scale.set(2.5, 2.5, 2.5);

  const handleTap = () => {
    console.log("Don tapped");
    navigate("/examine"); // Navigate to the /vincent route
  };

  return (
    <primitive object={scene} onClick={handleTap} onPointerDown={handleTap} />
  );
}

export default DeadonScene;
