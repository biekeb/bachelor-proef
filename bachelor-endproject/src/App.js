import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls,useGLTF, useAnimations } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/character/Player";
import { Perf } from "r3f-perf";
import { Loader } from "./components/Loader";
import Crosshair from "./components/character/Crosshair";
import Inventory from "./components/clues/Book"; 
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
import DeadonScene from "./pages/Deadon";
import Isabella from "./components/poi/Isabella";
import TrashcanTrigger from "./components/trigger/TrashcanTrigger";
import Rat from "./components/model/Rat";
import NotEnterTrigger from "./components/trigger/NoEnterTrigger";
import { VincentInBar } from "./components/poi/VincentInBar";

export default function App() {
  const [loader, setLoader] = useState(true);
  const [showInventory, setShowInventory] = useState(false); // State to manage inventory visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);


  const handleInventoryKey = (e) => {
    if (e.code === "KeyI") {
      setShowInventory((prev) => !prev); 
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
            camera={{ fov: 45, near: 0.1, far: 1000 }}
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
              <TrashcanTrigger      />  
              <Ground />
              {/* <LanternPole position={lanternPosition} /> */}
              {/* <spotLight position={[0, 10, 0]} intensity={0.5} />
              <directionalLight position={[0, 10, 0]} intensity={0.5} />
              <ambientLight intensity={1} /> */}
              <Luca />
              <BarScene />
              <VincentInBar  />
              {/* <Trigger />  */}
              {/* <Rat /> */}
              <Isabella />
              <TrashcanTrigger  />
              <NotEnterTrigger />
            </Physics>
            <PointerLockControls />
          </Canvas>
         
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


