import React from "react";
import { Canvas } from "@react-three/fiber";
import Bottle from "./model/Bottle";
import { OrbitControls } from "@react-three/drei";

const Screen = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />

      <Bottle />
      <OrbitControls />
    </Canvas>
  );
};

export default Screen;
