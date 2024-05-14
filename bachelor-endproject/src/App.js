import React, { useState, useEffect } from "react";
import { Canvas, useThree } from "react-three-fiber";
import { Sky, PointerLockControls, Html } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import { Ground } from "./components/Ground";
import { Player } from "./components/character/Player";
import InteractiveCube from "./components/del/InteractiveCube";
import { useNavigate } from "react-router-dom";
import Office from "./components/model/Office";
import { Perf } from "r3f-perf";
import { Loader } from "./components/Loader";
import Crosshair from "./components/character/Crosshair";
import { useAnimations, useGLTF } from "@react-three/drei";
import AnthonyInterview from "./components/poi/AnthonyInterview";
import Inventory2 from "./components/character/InventoryControl";

export default function App() {
  const [loader, setLoader] = useState(true);
  const [showScreen, setShowScreen] = useState(false); // State to control screen visibility

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
            }}
          >
            <Perf position="top-left" />
            <Sky sunPosition={[100, 20, 100]} />
            <ambientLight intensity={1} />
            <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
            <Physics gravity={[0, -30, 0]}>
              <Ground />
              <Player />
              <Isabella />
              <Vincent setShowScreen={setShowScreen} />
              {/* <Office
                position={[1, 5, 0]}
                rotation={[0, 0, 0]}
                scale={[3, 3, 3]}
              /> */}
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
        </div>
      )}
      <Crosshair />
    </>
  );
}

function Isabella() {
  const isabella = useGLTF("./assets/Bar.glb");
  isabella.scene.position.set(1, 5, 0);
  isabella.scene.rotation.set(0, 0, 0);
  isabella.scene.scale.set(1, 1, 1);

  return <primitive object={isabella.scene} />;
}

function Vincent({ setShowScreen }) {
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  vincent.scene.position.set(-1, 5, 0);
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
