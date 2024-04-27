import { Canvas, useFrame, useThree } from "@react-three/fiber";
import React, { useState } from "react";
import Office from "../components/model/Office";
import { Float, OrbitControls, PresentationControls } from "@react-three/drei";

const HomescreenTest = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [cameraRigEnabled, setCameraRigEnabled] = useState(false);

  const handleButtonClick = (newPosition) => {
    setCameraRigEnabled(true);
    setPosition(newPosition);
  };

  return (
    <div>
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
        {cameraRigEnabled && <CameraRig position={position} />}
        <PresentationControls
          controls={{ pointerLock: false }}
          enabled={!cameraRigEnabled}
        >
          <mesh position={(0, 0, 5)}>
            <boxGeometry args={[1, 10, 10]} />
            <meshStandardMaterial color="red" />
          </mesh>
          <ambientLight intensity={0.5} />
          <Office />
        </PresentationControls>
        {/* <OrbitControls /> */}
      </Canvas>
      <div style={{ zIndex: "99", position: "relative" }}>
        <h1>Camera Test</h1>
        <button onClick={() => handleButtonClick([0, 0, 5])}>Camera 1</button>
        <button onClick={() => handleButtonClick([5, 5, 5])}>Camera 2</button>
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

//camera 1 = default camera + back button
//camera 2 = setting menu
//camera 3 = how to play?
//(camera 4 = credits)
