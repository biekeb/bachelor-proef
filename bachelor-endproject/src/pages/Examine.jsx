import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import { Canvas } from "react-three-fiber";
import image from "../styling/images/back.png";

const Examine = () => {
  return (
    <div className="examine">
      <div
        style={{
          padding: "5%",
        }}
      >
        <h1>EXAMINE EVIDENCE</h1>
      </div>

      <div className="eeContainer">
        <div className="eeItem">
          <h2>ACP 45 CALIBER</h2>
          <p>Explanation</p>
        </div>
        <div className="eeItem">
          <h2>9MM BULLET</h2>
        </div>
      </div>
      <div className="evidence">
        <h3>Evidence</h3>
        <div className="evidenceItem">
          <img src={image} alt="" />
          <img src={image} alt="" />
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Examine;

function Cask() {
  const isabella = useGLTF("./assets/CashStack.glb");

  return <primitive object={isabella.scene} />;
}

function Scene() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Cask />
    </Canvas>
  );
}
