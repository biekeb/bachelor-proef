import React from "react";
import { useBox } from "@react-three/cannon";

const InteractiveCube = (props) => {
  const [ref] = useBox(() => ({
    mass: 0,
    position: props.position, // Ensure the cube is positioned correctly
    args: [20, 20, 5], // Set appropriate dimensions for the cube
  }));

  return (
    <mesh ref={ref}>
      <boxGeometry args={[20, 20, 5]} />
      <meshStandardMaterial color="grey" />
    </mesh>
  );
};

export default InteractiveCube;
