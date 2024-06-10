import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls, useGLTF, useAnimations } from "@react-three/drei";
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
import { VincentInBar } from "./components/poi/VincentInBar";
import { Phonebooth } from "./components/model/Phonebooth";
import { Letter } from "./components/model/Letter";
import { TutorialSreen } from "./pages/TutorialSreen";
import Anthony from "./components/poi/Anthony";
import music from "../src/styling/sounds/menu.mp3";
import leter from "../src/styling/images/letter.png";

export default function App() {
  const [loader, setLoader] = useState(true);
  const [showInventory, setShowInventory] = useState(false); // State to manage inventory visibility
  const [ShowTutorialScreen, setShowTutorialScreen] = useState(true); // State to manage tutorial screen visibility
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [showLetter, setShowLetter] = useState(false); // State to manage letter visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Check localStorage for music state
    const musicState = localStorage.getItem("isMusicPlaying");
    if (musicState === "true") {
      playMusic();
      setShowTutorialScreen(false); // If the music was playing, assume tutorial was closed
    }
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

  const playMusic = () => {
    const audio = new Audio(music);
    audio.loop = true;
    audio.play();
    setIsMusicPlaying(true);
    localStorage.setItem("isMusicPlaying", "true"); // Save music state to localStorage
  };

  const stopMusic = () => {
    setIsMusicPlaying(false);
    localStorage.setItem("isMusicPlaying", "false"); // Save music state to localStorage
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <div style={{ position: "relative" }}>
          {ShowTutorialScreen && (
            <div className="tutorialscreen-div">
              <TutorialSreen 
                onClose={() => setShowTutorialScreen(false)} 
                playMusic={playMusic} 
              />
            </div>
          )}
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
              <TrashcanTrigger />  
              <Ground />
              <Luca />
              <BarScene />
              <VincentInBar />
              <Anthony />
              <Isabella />
              <Phonebooth />
              <TrashcanTrigger />
              <Letter onClick={() => setShowLetter(true)} /> {/* Pass callback here */}
            </Physics>
            <PointerLockControls />
          </Canvas>

          {showLetter && (
            <div
              style={{
                position: "absolute",
                top: 0,
                left: '30%',
                height: "100%",
                pointerEvents: "none",

              }}
            >
              <div style={{ pointerEvents: "auto", background: "white", padding: "20px", borderRadius: "10px" }}>
              <button style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "red",
                color: "white",
                padding: "5px",
                borderRadius: "5px",
              
              }} onClick={() => setShowLetter(false)}>Close</button>

               <img src={leter} alt="letter" style={{ height: "100vh" }} />
              </div>
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
