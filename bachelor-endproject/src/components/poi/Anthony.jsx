// import { useAnimations, useGLTF } from "@react-three/drei";
// import { useEffect } from "react";

// export default function Anthony() {
//   const anthony = useGLTF("./assets/anthony.glb");
//   const animations = useAnimations(anthony.animations, anthony.scene);

//   useEffect(() => {
//     const action = animations.actions["CharacterArmature|Idle"];
//     action.play();
//   }, []);

//   anthony.scene.position.set(-3, 5, 0);
//   anthony.scene.rotation.set(0, Math.PI, 0);
//   anthony.scene.scale.set(1, 1, 1);

//   return <primitive object={anthony.scene} />;
// }

import React, { useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useAnimations } from "@react-three/drei";
import { Html } from "@react-three/drei";
import { useFrame } from "react-three-fiber";

function Anthony(props) {
  const anthony = useGLTF("./assets/anthony.glb");
  const animations = useAnimations(anthony.animations, anthony.scene);
  anthony.scene.position.set(-3, 20, 0);
  anthony.scene.rotation.set(0, Math.PI, 0);
  anthony.scene.scale.set(2.5, 2.5, 2.5);

  const [showInterview, setShowInterview] = useState(false);

  // Play idle animation
  useFrame(() => {
    animations.actions["CharacterArmature|Idle"].play();
  });

  const handleClick = () => {
    setShowInterview(true); // Show the interview when Vincent is clicked
    console.log("Anthony clicked"); // Log message when Anthony is clicked
  };

  const handleClose = () => {
    setShowInterview(false); // Hide the interview when closed
  };

  return (
    <>
      <primitive object={anthony.scene} onClick={handleClick} {...props} />
      {showInterview && (
        <Html>
          <div
            style={{
              width: "200px",
              height: "150px",
              backgroundColor: "white",
              padding: "20px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <p>Interview with Anthony</p>
            <button onClick={handleClose}>Close</button>
          </div>
        </Html>
      )}
    </>
  );
}

export default Anthony;
