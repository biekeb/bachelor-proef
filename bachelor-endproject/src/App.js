import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/character/Player";
import { useNavigate } from "react-router-dom";
import { Perf } from "r3f-perf";
import { Loader } from "./components/Loader";
import Crosshair from "./components/character/Crosshair";
import AnthonyInterview from "./components/poi/AnthonyInterview";
import Inventory from "./components/clues/Book"; // Import the Inventory component
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import Luca from "./components/del/Luca";
import { BarScene } from "./pages/BarScene";
import * as THREE from "three";
import { useControls } from "leva";
import DeadonScene from "./pages/Deadon";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useHelper } from "@react-three/drei";
import Trigger from "./components/TriggerTest";

export default function App() {
  const [lanternPosition, setLanternPosition] = useState([0, 0, 0]);
  const [loader, setLoader] = useState(true);
  const [showInventory, setShowInventory] = useState(false); // State to manage inventory visibility
  const [showScreen, setShowScreen] = useState(false); // State to control screen visibility
  const lanternControls = useControls("Lantern Pole Position", {
    LanternX: {
      value: lanternPosition[0],
      min: -20,
      max: 20,
      step: 0.1,
      onChange: (value) => setLanternPosition([value, lanternPosition[1], lanternPosition[2]]),
    },
    LanternY: {
      value: lanternPosition[1],
      min: -20,
      max: 20,
      step: 0.1,
      onChange: (value) => setLanternPosition([lanternPosition[0], value, lanternPosition[2]]),
    },
    LanternZ: {
      value: lanternPosition[2],
      min: -20,
      max: 20,
      step: 0.1,
      onChange: (value) => setLanternPosition([lanternPosition[0], lanternPosition[1], value]),
    },
  });

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowScreen(false); // Hide the screen when closed
  };

  const handleInventoryKey = (e) => {
    if (e.code === "KeyE") {
      setShowInventory((prev) => !prev); // Toggle inventory visibility
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleInventoryKey);
    return () => {
      document.removeEventListener("keydown", handleInventoryKey);
    };
  }, []);

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div style={{ position: "relative" }}>
          <Canvas
            frameloop="demand"
            shadows
            gl={{ alpha: false }}
            camera={{ fov: 45 }}
            raycaster={{
              computeOffsets: (e) => ({
                offsetX: e.target.width / 2,
                offsetY: e.target.height / 2,
              }),
            }}
            style={{
              height: "100vh",
              width: "100vw",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: '-1',
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

            <DeadonScene />
            <Perf position="top-left" />
            <Physics gravity={[0, -30, 0]}>
              <Player />
              <Ground />
              {/* <LanternPole position={lanternPosition} /> */}
              {/* <spotLight position={[0, 10, 0]} intensity={0.5} />
              <directionalLight position={[0, 10, 0]} intensity={0.5} />
              <ambientLight intensity={1} /> */}
              <Luca />
              <BarScene />
              <Vincent setShowScreen={setShowScreen} />
              <Trigger /> 
            </Physics>
            <PointerLockControls />
          </Canvas>
          {showScreen && (
            <div
              style={{
                width: "200px",
                height: "150px",
                backgroundColor: "white",
                padding: "20px",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <AnthonyInterview />
              <p>Content of the small screen</p>
              <button onClick={handleClose}>Close</button>
            </div>
          )}
          {showInventory && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                pointerEvents: "none",
              }}
            >
              <div style={{ pointerEvents: "auto" }}>
                <Inventory />
              </div>
            </div>
          )}
        </div>
      )}
      <Crosshair />
    </>
  );
}


function Vincent({ setShowScreen }) {
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  vincent.scene.position.set(3, 5, -6);
  vincent.scene.rotation.set(0, 0, 0);
  vincent.scene.scale.set(2.5, 2.5, 2.5);

  const handleTap = () => {
    console.log("Vincent tapped");
    setShowScreen(true); // Show the screen when Vincent is tapped
  };

  return (
    <primitive
      object={vincent.scene}
      onClick={handleTap}
      onPointerDown={handleTap}
    />
  );
}

const LanternPole = ({ position }) => {
  const lightRef = React.useRef();

  // Optional: useHelper to visualize the light in the scene
  useHelper(lightRef, THREE.PointLightHelper, 1, 'hotpink');

  return (
    <group position={[0,6,-15]}>
      {/* Pole */}
      <mesh position={[0, 2, 0]}>
        <cylinderGeometry args={[0.1, 0.1, 4, 32]} />
        <meshStandardMaterial color="gray" />
      </mesh>
      {/* Lantern */}
      <mesh position={[0, 4, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="black" />
      </mesh>
      {/* Light inside the lantern */}
      <pointLight
        ref={lightRef}
        position={[0, 4, 0]}
        intensity={10}
        distance={10}
        decay={1}
      />
    </group>
  );
};


// function Trigger(){
//   //add from cannon a box trigger and when the player goes inside of the trigger the letter E will pop up 

//   //in the player component we disable the leter E until we are inside the trigger 

//   //when we press E the player get send the the /examine screen

//   //(give it a 2 sec timer with an animation before going to the next page)
// } 

// function PlayerName(){

// }