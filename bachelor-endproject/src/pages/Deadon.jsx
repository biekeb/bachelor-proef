import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";
import { Html } from "@react-three/drei";



export const DeadonScene = () => {
  return (
    <>
      <Deadon />
      <Annotation scale={[5,5,5,]} rotation={[0, Math.PI / 2, 0]} position={[-0.5, 6, -14]}>1</Annotation>
      <Annotation position={[0.2, 6, -10]}>2</Annotation>

    </>
  )
}


 function Deadon() {
  const deadon = useGLTF("./assets/deadon.glb");
  const animations = useAnimations(deadon.animations, deadon.scene);

  useEffect(() => {
    const action = animations.actions["CharacterArmature|Death"];
    action.play().setLoop(THREE.LoopOnce, 0); 
    action.clampWhenFinished = true; 
  }, []);

  deadon.scene.position.set(0, 6, -12);
  deadon.scene.rotation.set(0, Math.PI / 2, 0); 
  deadon.scene.scale.set(2.5, 2.5, 2.5);
  

  return <primitive object={deadon.scene} />;
}


function Annotation({ children, ...props }) {
  return (
    <Html center {...props} transform occlude="blending">
      <div className="annotation" onClick={() => console.log(".")}>
        {children}
      </div>
    </Html>
  );
}

export default DeadonScene;