import React, { useEffect, useRef, useState } from "react";
import { useBox } from "@react-three/cannon";
import { useNavigate } from "react-router-dom";
import { Billboard, Html } from "@react-three/drei";

function Trigger() {
  const [insideTrigger, setInsideTrigger] = useState(false);
  const navigate = useNavigate();

  const [ref] = useBox(() => ({
    type: "Kinematic",
    position: [0, 0, 0],
    args: [2, 2, 2],
    onCollide: handleCollide,
    onCollideEnd: handleCollideEnd,
  }));

  const handleCollide = (e) => {
    if (e.body.userData && e.body.userData.name === "Player") {
      console.log("Player entered trigger");
      setInsideTrigger(true);
    }
  };

  const handleCollideEnd = (e) => {
    if (e.body.userData && e.body.userData.name === "Player") {
      console.log("Player left trigger");
      setInsideTrigger(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.code === "KeyE" && insideTrigger) {
      console.log("E key pressed inside trigger");
      navigate("/examine");
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [insideTrigger]);

  return (
    <>
      <mesh ref={ref} visible={true}>
        <boxGeometry args={[2, 2, 2]} />
        <meshStandardMaterial color="blue" wireframe />
      </mesh>
      {insideTrigger && (
        <Billboard position={[0, 0, 0]}>
          <Html position={[0, 0, 0]}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                fontSize: "32px",
                color: "white",
                backgroundColor: "rgba(0, 0, 0, 0.5)",
                padding: "10px",
                borderRadius: "5px",
              }}
            >
              Press E to Examine
            </div>
          </Html>
        </Billboard>
      )}
    </>
  );
}

export default Trigger;
