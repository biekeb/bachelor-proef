import React from "react";
import { useAnimations, useGLTF } from "@react-three/drei";
import { useBox } from "@react-three/cannon";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useEffect } from "react";

export const BarScene = () => {
  return (
    <>
      <ambientLight intensity={0.1} />
      <Bar />
      <DirectionalLightHelper />
      <Cube />
    </>
  );
};

const Cube = (props) => {
  const [ref] = useBox(() => ({
    mass: 0,
    position: [0, 6, 11], // Ensure the cube is positioned correctly
    args: [50, 10, 1], // Set appropriate dimensions for the cube
  }));

  const [r2ef] = useBox(() => ({
    mass: 0,
    position: [20, 6, 0], // Ensure the cube is positioned correctly
    args: [1, 10, 25], // Set appropriate dimensions for the cube
  }));

  const [r3ef] = useBox(() => ({
    mass: 0,
    position: [-25, 6, 0], // Ensure the cube is positioned correctly
    args: [1, 10, 20], // Set appropriate dimensions for the cube
  }));

  const [r4ef] = useBox(() => ({
    mass: 0,
    position: [-14, 6, -13], // Ensure the cube is positioned correctly
    args: [20, 10, 1], // Set appropriate dimensions for the cube
  }));

  const [r5ef] = useBox(() => ({
    mass: 0,
    position: [9, 6, -13], // Ensure the cube is positioned correctly
    args: [20, 10, 1], // Set appropriate dimensions for the cube
  }));

  const [r6ef] = useBox(() => ({
    mass: 0,
    position: [0, 6, -27], // Ensure the cube is positioned correctly
    args: [20, 10, 1], // Set appropriate dimensions for the cube
  }));

  const [r7ef] = useBox(() => ({
    mass: 0,
    position: [-6, 6, -20], // Ensure the cube is positioned correctly
    args: [1, 10, 12], // Set appropriate dimensions for the cube
  }));

  const [r8ef] = useBox(() => ({
    mass: 0,
    position: [8, 6, -20], // Ensure the cube is positioned correctly
    args: [1, 10, 12], // Set appropriate dimensions for the cube
  }));

  return (
    <>
      {/* <mesh position={[0, 6, 11]}>
        <boxGeometry args={[50, 10, 1]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[20, 6, 0]}>
        <boxGeometry args={[1, 10, 25]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[-25, 6, 0]}>
        <boxGeometry args={[1, 10, 20]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[-14, 6, -13]}>
        <boxGeometry args={[20, 10, 1]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[9, 6, -13]}>
        <boxGeometry args={[20, 10, 1]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[0, 6, -27]}>
        <boxGeometry args={[20, 10, 1]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[-6, 6, -20]}>
        <boxGeometry args={[1, 10, 12]} />
        <meshStandardMaterial color="none" />
      </mesh>

      <mesh position={[8, 6, -20]}>
        <boxGeometry args={[1, 10, 12]} />
        <meshStandardMaterial wireframe color="none" />
      </mesh> */}
    </>
  );
};

const Wall = (props) => {
  const [ref] = useBox(() => ({
    mass: 0,
    position: [0, 0, 20], // Ensure the cube is positioned correctly
    args: [25, 10, 1], // Set appropriate dimensions for the cube
  }));

  return (
    <>
      <mesh position={[0, 10, 20]}>
        <boxGeometry args={[25, 10, 1]} />
        <meshStandardMaterial color="green" />
      </mesh>
    </>
  );
};

function Bar() {
  const { scene } = useGLTF("./assets/game/gamescene.glb");

  // Adjust the position, rotation, and scale of the bar scene
  scene.position.set(1, 5, 0);
  scene.rotation.set(0, 0, 0);
  scene.scale.set(9, 9, 9);

  // Traverse through the children of the scene to enable shadows for each mesh
  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true; // Enable casting shadows
      child.receiveShadow = true; // Enable receiving shadows
    }
  });

  return <primitive object={scene} />;
}

function DirectionalLightHelper() {
  const { scene } = useThree();

  useEffect(() => {
    const directionalLight = new THREE.DirectionalLight("white", 1); // Increased intensity
    directionalLight.position.set(-0.533963, 3.63908, 0.828064);

    directionalLight.castShadow = true; // Enable shadow casting for the directional light

    // Optional: Configure the shadow properties for better quality
    directionalLight.shadow.mapSize.width = 200;
    directionalLight.shadow.mapSize.height = 200;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 10;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;

    scene.add(directionalLight);

    // const helper = new THREE.DirectionalLightHelper(directionalLight, 10);
    // scene.add(helper);

    return () => {
      scene.remove(directionalLight);
      // scene.remove(helper);
    };
  }, [scene]);

  return null;
}

function Street() {
  const Street = useGLTF("./assets/Street.glb");
  Street.scene.position.set(0, 11.6, -19.1);
  Street.scene.rotation.set(0, Math.PI / -2, 0);
  Street.scene.scale.set(13, 13, 13);

  return <primitive object={Street.scene} />;
}

function Window2() {
  const window2 = useGLTF("./assets/window.glb");
  window2.scene.position.set(12, 9, -0);
  window2.scene.rotation.set(0, Math.PI / -2, 0);
  window2.scene.scale.set(2, 2, 2);

  return <primitive object={window2.scene} />;
}
