import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  SoftShadows,
  Html,
  CameraControls,
  SpotLight,
} from "@react-three/drei";
import { easing, geometry } from "maath";
import { useDragConstraint } from "../helpers/Drag";
import { Block } from "../helpers/Bock";
import * as THREE from "three";

import {
  useCompoundBody,
  useSphere,
  useCylinder,
  useDistanceConstraint,
  usePointToPointConstraint,
  Physics,
  usePlane,
} from "@react-three/cannon";
import Deadon from "../pages/Deadon";

extend(geometry);

export default function Test2() {
  return (
    <Canvas
      shadows="basic"
      eventSource={document.getElementById("root")}
      eventPrefix="client"
      camera={{ position: [0, 1.5, 14], fov: 45 }}
    >
      <ambientLight />
      <fog attach="fog" args={["black", 0, 30]} />
      <Physics allowSleep={false} iterations={15} gravity={[0, -200, 0]}>
        <Lamp position={[0, 15, 0]} />
      </Physics>

      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
    </Canvas>
  );
}

function Model(props) {
  const group = useRef();
  const light = useRef();

  const { nodes, materials } = useGLTF(
    "./assets/deadon/deadon-transformed.glb"
  );
  return (
    <group ref={group} scale={[5, 5, 5]} {...props} dispose={null}>
      <Deadon />

      <Annotation position={[-0.5, 0.1, -1]}>1</Annotation>
      <Annotation position={[0.2, 0.1, -1.5]}>2</Annotation>
    </group>
  );
}

useGLTF.preload("./assets/deadon/deadon-transformed.glb");

function Annotation({ children, ...props }) {
  return (
    <Html {...props} transform occlude="blending">
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
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
