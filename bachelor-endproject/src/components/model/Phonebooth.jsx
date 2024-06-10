import React from "react";
import { useGLTF } from "@react-three/drei";
import { useNavigate } from "react-router-dom";

export function Phonebooth() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("PHONE CLICKED!");
    navigate("/phone");
  };

  const { scene } = useGLTF("./assets/phonebooth.glb");

  scene.position.set(12, 8.5, 10);
  scene.rotation.set(0, Math.PI, 0);
  scene.scale.set(0.3, 0.3, 0.3);

  return <primitive object={scene} onClick={handleClick} />;
}
