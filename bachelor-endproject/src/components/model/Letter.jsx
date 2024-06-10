import React from "react";

export function Letter({ onClick }) {
  return (
    <mesh
      onClick={onClick}
      rotation={[0, Math.PI, 0]}
      position={[7, 7.5, -25]}
      receiveShadow
    >
      <boxGeometry args={[0.7, 0.01, 0.5]} />
      <meshStandardMaterial color="white" />
    </mesh>
  );
}
