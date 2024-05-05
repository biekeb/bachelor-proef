import React, { useState } from "react";
import { Canvas } from "react-three-fiber";
import * as THREE from "three";

const CubesScene = () => {
  const [currentCubeIndex, setCurrentCubeIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentCubeIndex((prevIndex) => (prevIndex === 0 ? 4 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentCubeIndex((prevIndex) => (prevIndex === 4 ? 0 : prevIndex + 1));
  };

  return (
    <div>
      <Canvas style={{ height: "500px", width: "100%" }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {[...Array(5)].map((_, index) => (
          <Cube key={index} index={index} currentIndex={currentCubeIndex} />
        ))}
      </Canvas>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

const Cube = ({ index, currentIndex }) => {
  const colors = [0xff0000, 0x00ff00, 0x0000ff, 0xffff00, 0x00ffff];
  const isVisible = index === currentIndex;

  return (
    <mesh visible={isVisible} position={[index * 2, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={colors[index]} />
    </mesh>
  );
};

export default CubesScene;


//import files 

//json format?

