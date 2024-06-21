import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PositionalAudio } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import music from "../styling/sounds/menu.mp3";
import logo from "../styling/images/noirsoir2.png";
import * as THREE from "three";
import skyimg from "../styling/images/hdr2.png";
import { Office2 } from "../components/model/Office2";
import { useNavigate } from "react-router-dom";

const HomescreenTest = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  const navigate = useNavigate();

  const handlePlayButtonClick = () => {
    navigate("/video");
  };

  return (
    <div>
      <Canvas
        shadows
        camera={{ position: [0, 1.5, -5], fov: 45 }}
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
          <ColorAverage blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>

        <Office2 />
        <PositionalAudio url={music} distance={1} loop />

        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 100}
          maxAzimuthAngle={Math.PI / 3}
          minDistance={1}
          maxDistance={5}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={0.8}
          rotateSpeed={0.8}
        />
        <pointLight
          color="purple"
          position={[-1.1, 1, -1]}
          intensity={5}
          castShadow
        />

        <pointLight
          color="purple"
          position={[-5, 1.5, -3]}
          intensity={5}
          castShadow
        />

        <mesh position={[0, 100, 0]}>
          <sphereGeometry args={[400, 60, 40]} />

          <meshBasicMaterial
            map={new THREE.TextureLoader().load(skyimg)}
            side={THREE.BackSide}
          />
        </mesh>
      </Canvas>

      <div
        className="homescreen-button"
        style={{ zIndex: "99", position: "relative" }}
      >
        <img id="logo" src={logo} alt="" />
        <button id="playbtn" onClick={handlePlayButtonClick}>
          PLAY
        </button>
      </div>
    </div>
  );
};

export default HomescreenTest;
