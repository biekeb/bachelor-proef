import React, { useRef } from "react";
import { useBox } from "@react-three/cannon";

function NotEnterTrigger() {
  const [ref] = useBox(() => ({
    mass: 0,
    position: [25, 6, 0],
    args: [5, 5, 20],
    collisionFilterGroup: 1, // Adjust these values as needed
    collisionFilterMask: 1, // Adjust these values as needed
  }));

  return (
    <mesh ref={ref} visible={true}>
      <boxGeometry args={[5, 5, 20]} />
      <meshStandardMaterial color="blue" />
    </mesh>
  );
}

export default NotEnterTrigger;
