import React, { useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PositionalAudio, useGLTF } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import * as THREE from "three";
import music from "../styling/sounds/menu.mp3";
import Office from "../components/model/Office"; // Assuming Office component is used somewhere
import BarHome from "../components/model/BarHome";

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
          <button className="homescreen-start-button" onClick={playMusic}>
            <h1>START</h1>
          </button>
        </div>
      )}

      <Canvas
        shadows
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
          <ColorAverage blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>

        {cameraRigEnabled && <CameraRig position={position} />}

        <BarHome />
        {/* <Blinders /> */}
        <PositionalAudio url={music} distance={1} loop />

        <OrbitControls />
        <pointLight
          color="purple"
          position={[-0.9, 0, 0.1]}
          intensity={5} // Increased intensity
          castShadow
        />
        <DirectionalLightHelper />
      </Canvas>

      <div
        className="homescreen-button"
        style={{ zIndex: "99", position: "relative" }}
      >
        <button>
          <a id="play-btn" href="app">
            Play
          </a>
        </button>
        <button onClick={() => handleButtonClick([-2, 0, 0])}>
          How to Play
        </button>
      </div>
    </div>
  );
};

function DirectionalLightHelper() {
  const { scene } = useThree();

  useEffect(() => {
    const directionalLight = new THREE.DirectionalLight("purple", 10); // Increased intensity
    directionalLight.position.set(- 0.1, 0.2, -0.3);

    directionalLight.castShadow = true; // Enable shadow casting for the directional light

    // Optional: Configure the shadow properties for better quality
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 500;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;

    scene.add(directionalLight);

    const helper = new THREE.DirectionalLightHelper(directionalLight, 10);
    scene.add(helper);

    return () => {
      scene.remove(directionalLight);
      scene.remove(helper);
    };
  }, [scene]);

  return null;
}

function CameraRig({ position: [x, y, z] }) {
  useFrame((state) => {
    state.camera.position.lerp({ x, y, z }, 0.03, "easeInOut");
    state.camera.lookAt(0, 0, 0);
  });

  return null;
}

function Blinders() {
  const { scene } = useGLTF("./assets/blinds.glb");

  useEffect(() => {
    // Traverse the model and enable shadow casting and receiving
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  scene.position.set(0, 0, 0);
  scene.rotation.set(0, 0, 0);

  return <primitive object={scene} />;
}

export default HomescreenTest;
