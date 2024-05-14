import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import Anthony from "../components/poi/Anthony";
import Luca from "../components/del/Luca";
import Isabella from "../components/poi/Isabella";
import Vincent from "../components/poi/Vincent";
import AnthonyInterview from "../components/poi/AnthonyInterview";
import { useState } from "react";
import { SpotLight } from "@react-three/drei";
import { useDragConstraint } from "../helpers/Drag";
import * as THREE from "three";
import { useSphere } from "@react-three/cannon";

import {
  useCompoundBody,
  useCylinder,
  useDistanceConstraint,
  usePointToPointConstraint,
  Physics,
} from "@react-three/cannon";

function SuspectScreen() {
  return (
    <div>
      {/* <AnthonyInterview /> */}
      <button>intorigate anthony</button>
      <button>intorigate luca</button>
      <button>intorigate isabella</button>
      <button>intorigate vincent</button>

      <Canvas
        shadows="basic"
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        camera={{ position: [-1, 1.5, 14], fov: 20 }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      >
        <fog attach="fog" args={["black", 0, 30]} />
        <ambientLight intensity={1} />
        {/* <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
          <Lamp scale={[0.1, 0.1, 0.1]} position={[1, 5, 0]} />
        </Physics> */}
        <pointLight
          castShadow
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={10}
          distance={80}
          angle={0.45}
          attenuation={40}
          anglePower={5}
          intensity={50}
          opacity={2}
          position={[3, 3, 0]}
        />

        <pointLight
          castShadow
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={10}
          distance={80}
          angle={0.45}
          attenuation={40}
          anglePower={5}
          intensity={50}
          opacity={2}
          position={[1, 3, 0]}
        />
        <pointLight
          castShadow
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={10}
          distance={80}
          angle={0.45}
          attenuation={40}
          anglePower={5}
          intensity={50}
          opacity={2}
          position={[-1, 3, 0]}
        />
        <pointLight
          castShadow
          penumbra={0.2}
          radiusTop={0.4}
          radiusBottom={10}
          distance={80}
          angle={0.45}
          attenuation={40}
          anglePower={5}
          intensity={50}
          opacity={2}
          position={[-3, 3, 1]}
        />

        <Anthony />
        <Luca />
        <Isabella />
        <Vincent />
        <pointLight position={[10, 10, 10]} />
      </Canvas>
    </div>
  );
}

function Lamp(props) {
  const [target] = useState(() => new THREE.Object3D());
  const [fixed] = useSphere(() => ({
    collisionFilterGroup: 0,
    type: "Static",
    args: [0.2],
    ...props,
  }));
  const [lamp] = useCylinder(() => ({
    mass: 1,
    args: [0.5, 1.5, 2, 16],
    angularDamping: 0.95,
    linearDamping: 0.95,
    material: { friction: 0.9 },
    ...props,
  }));
  const bind = useDragConstraint(lamp);
  useDistanceConstraint(fixed, lamp, {
    distance: 2,
    pivotA: [0, 0, 0],
    pivotB: [0, 2, 0],
  });
  usePointToPointConstraint(fixed, lamp, {
    pivotA: [0, 0, 0],
    pivotB: [0, 2, 0],
  });
  return (
    <mesh ref={lamp} {...bind}>
      <cylinderGeometry args={[0.5, 1.5, 2, 32]} />
      <meshStandardMaterial />
      <SpotLight
        castShadow
        target={target}
        penumbra={0.2}
        radiusTop={0.4}
        radiusBottom={40}
        distance={80}
        angle={0.45}
        attenuation={40}
        anglePower={5}
        intensity={1}
        opacity={0.2}
      />
      <primitive object={target} position={[0, -1, 0]} />
    </mesh>
  );
}

export default SuspectScreen;
