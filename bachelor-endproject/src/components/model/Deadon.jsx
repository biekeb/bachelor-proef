import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function Model(props) {
  const { nodes, materials } = useGLTF(
    "./assets/deadon/deadon-transformed.glb"
  );
  return (
    <group scale={[10,10,10,]} {...props} dispose={null}>
      <primitive object={nodes.Root} />
      <mesh
        geometry={nodes.Node.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.367, 0, -0.827]}
        scale={0.011}
      />
      <mesh
        geometry={nodes.Blood_2.geometry}
        material={materials["Atlas.039"]}
        position={[0, 0, -0.649]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Suit_Body_1.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Body_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_2.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Body_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_3.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Body_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Body_4.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Body_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Suit_Feet.geometry}
        material={materials.PaletteMaterial001}
        skeleton={nodes.Suit_Feet.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
      <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
        <skinnedMesh
          geometry={nodes.Suit_Head_1.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Head_1.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_2.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Head_2.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_3.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Head_3.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Suit_Head_4.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Suit_Head_4.skeleton}
        />
      </group>
      <skinnedMesh
        geometry={nodes.Suit_Legs.geometry}
        material={materials.PaletteMaterial001}
        skeleton={nodes.Suit_Legs.skeleton}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={100}
      />
    </group>
  );
}

useGLTF.preload("./assets/deadon/deadon-transformed.glb");
