import React, { useRef } from "react";
import { useLoader } from "@react-three/fiber";
import * as THREE from "three";
import texture from '../../styling/images/book.jpg'


export default function Body(props) {
  const group = useRef();
  const texture = useLoader(
    THREE.TextureLoader,
    "./assets/book.jpg"
  );
  return (
    <group ref={group} dispose={null} {...props}>
      <mesh castShadow>
        <planeGeometry castShadow attach="geometry" args={[10, 10]} />
        <meshBasicMaterial
          attach="material"
          map={texture}
          transparent
          side={THREE.BackSide}
        />
      </mesh>
    </group>
  );
}
