import { Canvas } from "@react-three/fiber";
import { SoftShadows, CameraControls } from "@react-three/drei";
import { useNavigate } from "react-router-dom";
import { useGLTF } from "@react-three/drei";

export const PhoneScreen = () => {
  const navigate = useNavigate();

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

        <pointLight position={[10, -10, -20]} intensity={10} />
        <pointLight position={[-10, -10, -20]} intensity={10} />

        <SoftShadows samples={3} />
        <Phonebooth />
        <CameraControls
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 2}
          maxAzimuthAngle={Math.PI / 2}
        />
      </Canvas>
    </>
  );
};

function Phonebooth() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("PHONE CLICKED!");
    navigate("/phone");
  };

  const { scene } = useGLTF("./assets/phonebooth.glb");

  scene.position.set(0, -3, 0);
  scene.rotation.set(0, 0, 0);
  scene.scale.set(0.6, 0.6, 0.6);

  return <primitive object={scene} onClick={handleClick} />;
}
