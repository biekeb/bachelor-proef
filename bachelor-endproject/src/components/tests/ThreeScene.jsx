import { Sky } from "@react-three/drei";
import { Perf } from "r3f-perf";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";
import { useRapier, RigidBody, Physics } from "@react-three/rapier";
import Player from "../Player.jsx";
import React, { useEffect, useRef } from "react";
import { PointerLockControls } from "@react-three/drei";

const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const floor1Material = new THREE.MeshStandardMaterial({ color: "limegreen" });

function BlockStart({ position = [0, 0, 0] }) {
  return (
    <group position={position}>
      <mesh
        geometry={boxGeometry}
        material={floor1Material}
        position={[0, -0.1, 0]}
        scale={[4, 0.2, 4]}
        receiveShadow
      ></mesh>
    </group>
  );
}

export default function Level() {
  const controls = useRef();

  

  return (
    <Canvas
      style={{
        position: "absolute",
        height: "100%",
        width: "100%",
        top: "0px",
        left: "0px",
      }}
    >
      <Player controls={controls} />

      {/* perfomance */}
      <Perf position="top-left" />
      {/* props */}
      <Sky />
      <directionalLight castShadow position={[1, 2, 3]} intensity={4.5} />
      <ambientLight intensity={1.5} />
      {/* player */}
      <PointerLockControls ref={controls} />
      <Player controls={controls} />

      {/* <PlayerMovement /> */}
      <Physics debug={false}>
        <RigidBody type="fixed">
          <BlockStart />
        </RigidBody>
      </Physics>
    </Canvas>
  );
}
