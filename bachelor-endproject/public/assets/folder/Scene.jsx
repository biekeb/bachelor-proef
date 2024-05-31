/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 Scene.gltf --transform 
Files: Scene.gltf [3.99KB] > C:\Users\bellotb\OneDrive - ILIAS Solutions NV\Documents\bachelor-proef\bachelor-endproject\public\assets\folder\Scene-transformed.glb [4.22KB] (-6%)
Author: dash99 (https://sketchfab.com/dash99)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/folder-d7ee82642f6f47acbcd49f04708d7c57
Title: Folder
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Cube__0.geometry} material={materials['Scene_-_Root']} scale={0.01} />
    </group>
  )
}

useGLTF.preload('/Scene-transformed.glb')