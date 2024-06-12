import { useRef, useState } from "react";
import { Canvas, extend, useFrame } from "@react-three/fiber";
import {
  useGLTF,
  SoftShadows,
  Html,
  CameraControls,
  SpotLight,
  Billboard,
} from "@react-three/drei";
import { easing, geometry } from "maath";
import { useDragConstraint } from "../helpers/Drag";
import * as THREE from "three";
import { useEffect } from "react";
import { useAnimations } from "@react-three/drei";

import {
  useSphere,
  useCylinder,
  useDistanceConstraint,
  usePointToPointConstraint,
  Physics,
} from "@react-three/cannon";
import ClueManager from "../components/clues/clueManager"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";

extend(geometry);
export default function Test2() {
  const [popup, setPopup] = useState({ visible: false, content: "" });
  const navigate = useNavigate();

  const handlePopupClose = () => setPopup({ visible: false, content: "" });

  const showPopup = (content) => setPopup({ visible: true, content });

  const handleBackClick = () => {
    navigate("/app");
  };

  return (
    <>
      <button className="popup-back-button" onClick={handleBackClick}>
        Back
      </button>
      <Canvas
        className="deadon-canvas"
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
        <Model
          position={[0, -5.5, 3]}
          rotation={[0, -0.2, 0]}
          showPopup={showPopup}
        />
        <Deadon />
        <SoftShadows samples={3} />
        <CameraControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>

      {popup.visible && (
        <div className="popup-container">
          <div className="popup-content">
            <div className="popup-message">{popup.content}</div>
            <button className="popup-close-button" onClick={handlePopupClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function Model({ showPopup, ...props }) {
  const group = useRef();

  const { nodes, materials } = useGLTF(
    "./assets/deadon/deadon-transformed.glb"
  );
  return (
    <group ref={group} scale={[1.7, 1.7, 1.7]} {...props} dispose={null}>
      <Billboard position={[-1.5, 0.3, -2]}>
        <Annotation clueName="clue1" showPopup={showPopup}>
          1
        </Annotation>
      </Billboard>
      <Billboard position={[1, 0.3, -4]}>
        <Annotation clueName="clue2" showPopup={showPopup}>
          2
        </Annotation>
      </Billboard>
    </group>
  );
}

useGLTF.preload("./assets/deadon/deadon-transformed.glb");

function Annotation({ children, clueName, showPopup, ...props }) {
  const handleClick = () => {
    ClueManager.updateClueStatus(clueName);
    console.log(`Clue ${clueName} updated to true`);
    showPopup(`You found a clue: ${ClueManager.clues[clueName].description}`);
  };

  return (
    <Html {...props} transform occlude="blending">
      <div className="annotation" onClick={handleClick}>
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

function Deadon() {
  const { scene, animations } = useGLTF("./assets/deadon.glb");
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    const action = actions["CharacterArmature|Death"];
    action.play().setLoop(THREE.LoopOnce, 0);
    action.clampWhenFinished = true;

    // Ensure all materials are correctly set
    scene.traverse((object) => {
      if (object.isMesh) {
        object.frustumCulled = false; // Prevent disappearing due to frustum culling
        object.castShadow = true; // Ensure it can cast shadows
        object.receiveShadow = true; // Ensure it can receive shadows

        if (object.material) {
          object.material.depthWrite = true;
          object.material.depthTest = true;
          object.material.needsUpdate = true;
        }
      }
    });
  }, [actions, scene]);

  scene.position.set(0, -5, 2);
  scene.rotation.set(0, 0, 0);
  scene.scale.set(5, 5, 5);

  return <primitive object={scene} />;
}
