import React, { useRef, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { PointerLockControls } from "@react-three/drei";
import * as THREE from "three";
import { useRapier, RigidBody, Physics } from "@react-three/rapier";
import PlayerMovement from "../Player";

const Player = ({ jump }) => {
  const geometry = new THREE.BoxGeometry(1, 2, 1);
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  const playerRef = useRef();

  return (
    <RigidBody
      ref={playerRef}
      canSleep={false}
      name="Player"
      restitution={0.2}
      friction={1}
      linearDamping={0.5}
      angularDamping={0.5}
      position={[0, 1, 0]}
    >
      <mesh geometry={geometry} material={material} />
    </RigidBody>
  );
};

const Tree = ({ position }) => {
  const trunkGeometry = new THREE.CylinderGeometry(0.2, 0.2, 2, 8);
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: 0x8b4513 });
  const trunkRef = useRef();

  const leavesGeometry = new THREE.SphereGeometry(1, 8, 6); // Sphere with radius 1, 8 segments, and 6 rings
  const leavesMaterial = new THREE.MeshStandardMaterial({ color: 0x00ff00 });
  const leavesRef = useRef();

  return (
    <group position={position}>
      {/* Trunk */}
      <mesh geometry={trunkGeometry} material={trunkMaterial} ref={trunkRef} />

      {/* Leaves (Green Sphere) */}
      <mesh
        geometry={leavesGeometry}
        material={leavesMaterial}
        position={[0, 1.5, 0]}
        ref={leavesRef}
      />
    </group>
  );
};

const Ground = () => {
  const geometry = new THREE.PlaneGeometry(100, 100);
  const material = new THREE.MeshBasicMaterial({
    color: 0xaaaaaa,
    side: THREE.DoubleSide,
  });
  const groundRef = useRef();

  return (
    <mesh
      geometry={geometry}
      material={material}
      rotation={[-Math.PI / 2, 0, 0]}
      position={[0, -1, 0]}
      ref={groundRef}
    />
  );
};

export function BlockEnd({ position = [0, 0, 0] }) {
  const [isAsleep, setIsAsleep] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleWin = () => {
    setIsWin(true);
    console.log("you win");
    window.alert("you win");

    // Add the interaction logic here
    if (!hasInteracted) {
      console.log("interacted");
      setHasInteracted(true);
    }
  };

  return (
    <group position={position}>
      <RigidBody
        colliders="hull"
        name="test"
        onSleep={() => setIsAsleep(true)}
        onWake={() => setIsAsleep(false)}
        onCollisionEnter={({ target, other }) => {
          console.log(
            `${target.rigidBodyObject.name} collided with ${other.rigidBodyObject.name}`
          );

          if (
            other.rigidBodyObject &&
            other.rigidBodyObject.name === "Player"
          ) {
            console.log("Player collided with BlockEnd");
            handleWin();
          }
        }}
      >
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={isAsleep ? "white" : "blue"} />
        </mesh>
      </RigidBody>
    </group>
  );
}

const ThreeScene = () => {
  const controlsRef = useRef();
  const [isJumping, setJumping] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      const moveDistance = 0.5;
      const rotateAngle = Math.PI / 30;

      switch (event.key) {
        case "W":
        case "w":
          controlsRef.current.moveForward(moveDistance);
          break;
        case "S":
        case "s":
          controlsRef.current.moveForward(-moveDistance);
          break;
        case "A":
        case "a":
          controlsRef.current.moveRight(-moveDistance);
          break;
        case "D":
        case "d":
          controlsRef.current.moveRight(moveDistance);
          break;
        case "Space":
          if (!isJumping) {
            setJumping(true);
            controlsRef.current.moveUp(10);
            setTimeout(() => {
              controlsRef.current.moveUp(-10);
              setJumping(false);
            }, 500);
          }
          break;
        case "ArrowLeft":
          controlsRef.current.rotateLeft(rotateAngle);
          break;
        case "ArrowRight":
          controlsRef.current.rotateRight(rotateAngle);
          break;
        default:
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isJumping]);

  const generateRandomPosition = () => {
    const x = Math.random() * 50 - 10;
    const z = Math.random() * 50 - 10;
    return [x, 0, z];
  };

  const numTrees = 50; // Adjust the number of trees as needed
  const trees = Array.from({ length: numTrees }).map((_, index) => (
    <Tree key={index} position={generateRandomPosition()} />
  ));

  return (
    <Canvas style={{ background: "black", width: "100vw", height: "100vh" }}>
      <Physics debug={false}>
        <RigidBody type="fixed">
          <ambientLight />
          <Ground />
          {trees}
          <BlockEnd position={[0, 0, 0]} />
        </RigidBody>
        {/* <Player jump={isJumping} />
        <PointerLockControls ref={controlsRef} /> */}
        <PlayerMovement />
      </Physics>
    </Canvas>
  );
};

export default ThreeScene;

// <Canvas style={{ background: "black", width: "100vw", height: "100vh" }}>
