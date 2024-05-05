import React, { useRef, useState } from "react";
import * as THREE from "three";
import { Canvas, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import Isabella from "./Isabella";
import Deadon from "../components/model/Deadon.jsx";
import { Html, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Sepia,
  ColorAverage,
} from "@react-three/postprocessing";

const POIScreen = () => {
  const [showDiv, setShowDiv] = useState(false); // State to manage div visibility
  const handleButtonClick = () => {
    setShowDiv(!showDiv); // Toggle div visibility
  };

  return (
    <Canvas>
      <EffectComposer>
        <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
        <ColorAverage />
        <Noise opacity={0.02} />
      </EffectComposer>
      <ambientLight />
      <OrbitControls />
      

      <Isabella />

      <Html transform position={[-0.5, 0, -1]} center distanceFactor={1}>
        <div className="overlay">
          <button
            style={{
              backgroundColor: "yellow",
            }}
            onClick={handleButtonClick}
          >
            1
          </button>
          {showDiv && <div>This is the div to show!</div>}
        </div>
      </Html>

      <Html transform position={[-0.5, 0, -1]} center distanceFactor={1}>
        <div className="overlay">
          <button
            style={{
              backgroundColor: "yellow",
            }}
            onClick={handleButtonClick}
          >
            1
          </button>
          {showDiv && <div>This is the div to show!</div>}
        </div>
      </Html>
    </Canvas>
  );
};

export default POIScreen;
