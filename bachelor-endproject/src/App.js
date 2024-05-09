import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Sky, PointerLockControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/character/Player";
import InteractiveCube from "./components/InteractiveCube";
import { useNavigate } from "react-router-dom";
import Office from "./components/model/Office";
import { Perf } from "r3f-perf";
import { Loader } from "./components/Loader";
import Crosshair from "./components/character/Crosshair";

export default function App() {
  const [loader, setLoader] = useState(true);
  const [showScreen, setShowScreen] = useState(false); // State to control screen visibility

  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    console.log("Button clicked");
    setShowScreen(true); // Show the screen when the bottle is clicked
  };

  const handleClose = () => {
    setShowScreen(false); // Hide the screen when closed
  };

  return (
    <>
      {loader ? (
        <Loader />
      ) : (
        <Canvas
          shadows
          gl={{ alpha: false }}
          camera={{ fov: 45 }}
          raycaster={{
            computeOffsets: (e) => ({
              offsetX: e.target.width / 2,
              offsetY: e.target.height / 2,
            }),
          }}
        >
          <Perf position="top-left" />
          <Sky sunPosition={[100, 20, 100]} />
          <ambientLight intensity={1} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics gravity={[0, -30, 0]}>
            <Ground />
            <Player />
            {showScreen && (
              <Html>
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
                  <p>Content of the small screen</p>
                  <button onClick={handleClose}>Close</button>
                </div>
              </Html>
            )}
            <Office
              position={[1, 5, 0]}
              rotation={[0, 0, 0]}
              scale={[3, 3, 3]}
            />
          </Physics>
          <PointerLockControls />
        </Canvas>
      )}
      <Crosshair />
    </>
  );
}

//fix camera op object -> small screen opens up when the objetc is pressed

//open object in a pop up screen when clicked on it

//fix player jump

//safe player position in local storage

//make player be able to sprint

//player running up stairs

//should player be able to jump?

//postprossesing
