import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import Office from "../components/model/Office";
import {
  Float,
  OrbitControls,
  PositionalAudio,
  PresentationControls,
} from "@react-three/drei";
import music from "../styling/sounds/menu.mp3";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  Sepia,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import logo from '../components/Logo'

const HomescreenTest = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [cameraRigEnabled, setCameraRigEnabled] = useState(false);
  const [showTitleScreen, setShowTitleScreen] = useState(true);

  const handleButtonClick = (newPosition) => {
    setCameraRigEnabled(true);
    setPosition(newPosition);
  };

  const playMusic = () => {
    setShowTitleScreen(false);
    const audio = new Audio(music);
    audio.loop = true;
    audio.play();
  };

  return (
    <div>
      {showTitleScreen && (
        <div className="homescreen-start">
          <button
            className="homescreen-start-button"
            onClick={() => {
              playMusic();
            }}
          >
            <h1>START</h1>
          </button>
        </div>
      )}

      <Canvas
        camera={{
          position: [0, 0, 2],
        }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "1",
        }}
      >
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <ColorAverage
            blendFunction={BlendFunction.NORMAL} // blend mode
          />
        </EffectComposer>

        {cameraRigEnabled && <CameraRig position={position} />}
        <ambientLight color={"red"} intensity={0.5} />
        <Office />
        <PositionalAudio url={music} distance={1} loop />

        <OrbitControls />
      </Canvas>
      <div
        className="homescreen-button"
        style={{ zIndex: "99", position: "relative" }}
      >
        <>
        <Logo/>
          <button>
            <a href="app">play</a>
          </button>
          {/* <button onClick={() => handleButtonClick([-5, 0, 0])}>
            Settings
          </button> */}
          <button onClick={() => handleButtonClick([5, 5, 5])}>
            How to play
          </button>
        </>
      </div>
    </div>
  );
};

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.03, "easeInOut");
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

export default HomescreenTest;
