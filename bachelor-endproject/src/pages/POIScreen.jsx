import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import Isabella from "./Deadon";
import { Html, OrbitControls } from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  Sepia,
  ColorAverage,
} from "@react-three/postprocessing";
import ClueManager from "../components/clues/clueManager"; // Assuming clueManager.js is in the same directory
import Deadon from "./Deadon";

const POIScreen = () => {
  const handleButtonClick = () => {
    if (!ClueManager.clues.clue1.found) {
      ClueManager.updateClueStatus("clue1");
    }
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

      <Deadon />

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
          {ClueManager.clues.clue1.found && (
            <p>{ClueManager.clues.clue1.description}</p>
          )}
        </div>
      </Html>
    </Canvas>
  );
};

export default POIScreen;
