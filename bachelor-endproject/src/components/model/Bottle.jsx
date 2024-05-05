/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [5.07KB] > D:\b\Bachelor_3\finalwork\Web\bachelor-proef\bachelor-endproject\public\assets\low_poly_beer_bottle\scene-transformed.glb [4KB] (21%)
Author: kenny_pizza (https://sketchfab.com/kenny_pizza)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/low-poly-beer-bottle-d6a3307927254388a06b8d53aa847fcd
Title: Low Poly Beer Bottle
*/

import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Bottle(props) {
  const { nodes, materials } = useGLTF(
    "./assets/low_poly_beer_bottle/scene-transformed.glb"
  );

  return (
    <group {...props} dispose={null} position={(0, 2, 0)} scale={1}>
      <mesh
        geometry={nodes.Object_2.geometry}
        material={materials.BottleColor}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.LabelColor}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("./assets/low_poly_beer_bottle/scene-transformed.glb");
