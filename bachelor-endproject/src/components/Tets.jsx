import { useState, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import {
  useGLTF,
  Html,
  CameraControls,
  Line,
  Billboard,
  useAnimations,
} from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export const Test = () => {
  const [showDiv, setShowDiv] = useState(null);
  const cameraControlsRef = useRef();

  // Initial camera position
  const initialCameraPosition = [0, 50, 50];

  const handleAnnotationClick = (annotation) => {
    // Move camera to annotation position
    if (cameraControlsRef.current) {
      const position = annotation.position.map((coord) => coord * 1.5);
      cameraControlsRef.current.setLookAt(
        ...initialCameraPosition,
        ...position,
        true
      );
    }
    setShowDiv(annotation.id);
  };

  const handleCloseClick = () => {
    setShowDiv(null);

    // Reset camera position
    if (cameraControlsRef.current) {
      cameraControlsRef.current.setLookAt(
        ...initialCameraPosition,
        0,
        0,
        0,
        true
      );
    }
  };

  const annotations = [
    {
      id: "body",
      position: [0, 0, 0],
      scale: [5, 5, 5],
      lineTo: [0, -10, -14],
      text: "Engine Information",
      para: "The F-35 is powered by a single Pratt & Whitney F135 afterburning turbofan engine.",
    },
    {
      id: "attachments",
      position: [0, -20, 30],
      scale: [5, 5, 5],
      lineTo: [0, 15, 10],
      text: "Attachments Information",
      para: "The F-35 has 6 external hardpoints for carrying weapons and other payloads.",
    },
    {
      id: "cockpit",
      position: [50, 10, 0],
      scale: [5, 5, 5],
      lineTo: [0, -15, 0],
      text: "Cockpit Information",
      para: "The F-35 cockpit features a panoramic touch screen display.",
    },
    {
      id: "motor",
      position: [-50, 10, 0],
      scale: [5, 5, 5],
      lineTo: [0, -15, 0],
      text: "Motor Information",
      para: "The F-35 is powered by a single Pratt & Whitney F135 afterburning turbofan engine.",
    },
  ];

  return (
    <>
      {showDiv && (
        <div className="info-div">
          <p>{annotations.find((a) => a.id === showDiv).text}</p>
          <p>{annotations.find((a) => a.id === showDiv).para}</p>
          <button onClick={handleCloseClick}>Close</button>
        </div>
      )}
      <Canvas
        className="canvas"
        style={{ height: "100vh" }}
        shadows="basic"
        eventSource={document.getElementById("root")}
        eventPrefix="client"
        camera={{ position: initialCameraPosition, fov: 45 }}
      >
        <ambientLight intensity={5} />
        <Model position={[0, 0, 0]} rotation={[0, 0, 0]} />

        {annotations.map((annotation) => (
          <Billboard
            key={annotation.id}
            position={annotation.position}
            follow={true}
            lockX={true}
            lockY={true}
            lockZ={true}
          >
            <Annotation
              scale={annotation.scale}
              position={[0, 0, 0]}
              onClick={() => handleAnnotationClick(annotation)}
              lineTo={annotation.lineTo}
            >
              {annotation.id}
            </Annotation>
          </Billboard>
        ))}

        <CameraControls
          ref={cameraControlsRef}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
};

function Model() {
  const deadon = useGLTF("./assets/deadon.glb");
  const animations = useAnimations(deadon.animations, deadon.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Death"];
    action.play().setLoop(THREE.LoopOnce, 0);
    action.clampWhenFinished = true;
  }, []);

  deadon.scene.position.set(0, 0, 0);
  deadon.scene.rotation.set(0, Math.PI / 2, 0);
  deadon.scene.scale.set(2.5, 2.5, 2.5);

  return <primitive object={deadon.scene} />;
}

function Annotation({ children, onClick, lineTo, ...props }) {
  return (
    <>
      <Html {...props} transform occlude="blending">
        <div className="annotation" onClick={onClick}>
          {children}
        </div>
      </Html>
      <Line
        points={[props.position, lineTo]} // Points to draw the line
        color="white"
        lineWidth={2}
        dashed={false}
      />
    </>
  );
}
