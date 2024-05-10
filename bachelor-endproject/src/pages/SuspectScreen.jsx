import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import { Box } from "@react-three/drei";
import Anthony from "../components/poi/Anthony";
import Luca from "../components/poi/Luca";
import Isabella from "../components/poi/Isabella";
import Vincent from "../components/poi/Vincent";


function SuspectScreen() {
  return (
    <Canvas>
      <ambientLight intensity={5} />
      <Anthony />
      <Luca />
      <Isabella />
      <Vincent />

      <pointLight position={[10, 10, 10]} />
    </Canvas>
  );
}

export default SuspectScreen;
