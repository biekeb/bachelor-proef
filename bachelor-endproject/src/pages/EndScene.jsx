import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import videoVincent from "../styling/images/VincentEnd.mp4";
import videoAnthony from "../styling/images/AnthonyEnd.mp4";
import videoIsabella from "../styling/images/IsabellaEnd.mp4";
import { useAnimations, useGLTF, CameraControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";

const EndScene = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [confirmSelection, setConfirmSelection] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isCanvasVisible, setIsCanvasVisible] = useState(true);
  const navigate = useNavigate();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const cameraControlsRef = useRef();

  // Initial camera position
  const initialCameraPosition = [0, 1.5, 14];

  const handleButtonClick = (video, position) => {
    setSelectedVideo(video);
    setSelectedPosition(position);
    setConfirmSelection(true);

    // Move camera to specified position
    if (cameraControlsRef.current) {
      const newPosition = position.map((coord) => coord * 1.5);
      cameraControlsRef.current.setLookAt(
        ...initialCameraPosition,
        ...newPosition,
        true
      );
    }
  };

  const stopMusic = () => {
    setIsMusicPlaying(false);
    sessionStorage.setItem("isMusicPlaying", "false");
  };

  const handleVideoEnd = () => {
    navigate("/");
  };

  const handleConfirmYes = () => {
    stopMusic();
    setConfirmSelection(false);
    setIsCanvasVisible(false);
  };

  const handleConfirmNo = () => {
    setConfirmSelection(false);
    setSelectedVideo(null);
    setSelectedPosition(null);

    // Move camera back to initial position
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

  return (
    <>
      <button className="end-btn">
        <a href="/app">Back to bar</a>
      </button>

      {isCanvasVisible && (
        <Canvas
          style={{ zIndex: "-1" }}
          className="deadon-canvas"
          shadows="basic"
          eventSource={document.getElementById("root")}
          eventPrefix="client"
          camera={{ position: initialCameraPosition, fov: 45 }}
        >
          <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
            />
            <Noise opacity={0.02} />
            <ColorAverage
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
          </EffectComposer>

          <ambientLight intensity={1} />
          <spotLight position={[0, 5, 5]} intensity={50} />
          <Vincent />
          <Anthony />
          <Isabella />
          <CameraControls
            ref={cameraControlsRef}
            enableZoom={false}
            enableRotate={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
            minAzimuthAngle={0}
            maxAzimuthAngle={0}
          />
        </Canvas>
      )}
      <div className={`container ${selectedVideo ? "" : ""}`}>
        {confirmSelection ? (
          <div className="end-button-container">
            <h2>Are you sure this person is the killer?</h2>
            <button className="confirm-btn" onClick={handleConfirmYes}>
              Yes
            </button>
            <button className="confirm-btn" onClick={handleConfirmNo}>
              No
            </button>
          </div>
        ) : selectedVideo ? (
          <div className="video-container">
            <div className="video-wrapper">
              <video
                className="full-screen-video"
                autoPlay
                onEnded={handleVideoEnd}
              >
                <source src={selectedVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        ) : (
          <div className="end-button-container">
            <h1>Acuse who will be brought to justice</h1>

            <div className="end-btn-flex">
              <div className="tttt">
                <h2>choice 1</h2>
                <button
                  className="end-btn"
                  onClick={() => handleButtonClick(videoVincent, [-5, 0, 0])}
                >
                  Acuse Vincent
                </button>
              </div>
              <div className="tttt">
                <h2>choice 2</h2>
                <button
                  className="end-btn"
                  onClick={() => handleButtonClick(videoAnthony, [0, 0, 0])}
                >
                  Acuse Anthony
                </button>
              </div>
              <div className="tttt">
                <h2>choice 3</h2>
                <button
                  className="end-btn"
                  onClick={() => handleButtonClick(videoIsabella, [5, 0, 0])}
                >
                  Acuse Isabella
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

function Anthony() {
  const anthony = useGLTF("./assets/luca.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, [animations.actions]);

  anthony.scene.position.set(0, -6, 0);
  anthony.scene.rotation.set(0, 0, 0);
  anthony.scene.scale.set(5, 5, 5);

  return <primitive object={anthony.scene} />;
}

function Isabella() {
  const isabella = useGLTF("./assets/isabella.glb");
  const animations = useAnimations(isabella.animations, isabella.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, [animations.actions]);

  isabella.scene.position.set(6, -6, 0);
  isabella.scene.rotation.set(0, 0, 0);
  isabella.scene.scale.set(5, 5, 5);

  return <primitive object={isabella.scene} />;
}

function Vincent() {
  const vincent = useGLTF("./assets/vincent.glb");
  const animations = useAnimations(vincent.animations, vincent.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Idle"];
    action.play();
  }, []);

  vincent.scene.position.set(-6, -6, 0);
  vincent.scene.rotation.set(0, 0, 0);
  vincent.scene.scale.set(5, 5, 5);

  return <primitive object={vincent.scene} />;
}

export default EndScene;
