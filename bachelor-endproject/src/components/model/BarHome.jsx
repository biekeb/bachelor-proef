import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function BarHome(props) {
  const group = useRef();
  const fanBladesRefs = [
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
    useRef(),
  ];
  const { nodes, materials, animations } = useGLTF(
    "./assets/bar/scene-transformed.glb"
  );
  const { actions } = useAnimations(animations, group);

  // Make the material of the blinds emissive
  materials.PaletteMaterial002.emissive = new THREE.Color(0xffffff);
  materials.PaletteMaterial002.emissiveIntensity = 1;

  // Rotation speed for the fans
  const rotationSpeed = 0.05;

  useFrame(() => {
    fanBladesRefs.forEach((ref) => {
      if (ref.current) {
        ref.current.rotation.y += rotationSpeed;
      }
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Bar" scale={0.01}>
          <group
            name="nurbsCircle2"
            position={[27.923, 10.784, 30.766]}
            rotation={[0, 0, -1.611]}
          />
          <group
            name="polySurface11"
            position={[28.024, 12.918, 30.766]}
            rotation={[0, 0, -1.611]}
          >
            <mesh
              name="polySurface11_Cubierta1_0"
              geometry={nodes.polySurface11_Cubierta1_0.geometry}
              material={materials.PaletteMaterial001}
              castShadow
              receiveShadow
            />
          </group>
        </group>
        <group name="Fan" position={[0.051, 0.148, 0.053]} scale={0.005}>
          <group
            name="nurbsCircle1"
            position={[0, 49.038, 0]}
            rotation={[-Math.PI, -1.193, -Math.PI]}
          />
          <group
            name="eje"
            position={[0, 46.481, 0]}
            rotation={[-Math.PI, -1.193, -Math.PI]}
          >
            <group
              name="polySurface7"
              position={[0, -47.236, 0]}
              ref={fanBladesRefs[0]}
            >
              <mesh
                name="polySurface7_Fan_blades_0"
                geometry={nodes.polySurface7_Fan_blades_0.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface9"
              position={[0, -47.236, 0]}
              ref={fanBladesRefs[1]}
            >
              <mesh
                name="polySurface9_Fan_blades_0"
                geometry={nodes.polySurface9_Fan_blades_0.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface10"
              position={[0, -47.236, 0]}
              ref={fanBladesRefs[2]}
            >
              <mesh
                name="polySurface10_Fan_blades_0"
                geometry={nodes.polySurface10_Fan_blades_0.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface8"
              position={[0, -47.236, 0]}
              ref={fanBladesRefs[3]}
            >
              <mesh
                name="polySurface8_Fan_blades_0"
                geometry={nodes.polySurface8_Fan_blades_0.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group name="polySurface3" position={[0, -47.236, 0]}>
              <mesh
                name="polySurface3_lambert1_0"
                geometry={nodes.polySurface3_lambert1_0.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
              <mesh
                name="polySurface3_Fan_light_0"
                geometry={nodes.polySurface3_Fan_light_0.geometry}
                material={materials.PaletteMaterial002}
                castShadow
                receiveShadow
              />
            </group>
          </group>
        </group>
        <group name="Fan3" position={[0.051, 0.148, 0.377]} scale={0.005}>
          <group
            name="nurbsCircle1_1"
            position={[0, 49.038, 0]}
            rotation={[-Math.PI, -0.471, -Math.PI]}
          />
          <group
            name="eje_1"
            position={[0, 46.481, 0]}
            rotation={[-Math.PI, -0.471, -Math.PI]}
          >
            <group
              name="polySurface7_1"
              position={[0, -46.941, 0]}
              ref={fanBladesRefs[4]}
            >
              <mesh
                name="polySurface7_Fan_blades_0_1"
                geometry={nodes.polySurface7_Fan_blades_0_1.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface9_1"
              position={[0, -46.941, 0]}
              ref={fanBladesRefs[5]}
            >
              <mesh
                name="polySurface9_Fan_blades_0_1"
                geometry={nodes.polySurface9_Fan_blades_0_1.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface10_1"
              position={[0, -46.941, 0]}
              ref={fanBladesRefs[6]}
            >
              <mesh
                name="polySurface10_Fan_blades_0_1"
                geometry={nodes.polySurface10_Fan_blades_0_1.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group
              name="polySurface8_1"
              position={[0, -46.941, 0]}
              ref={fanBladesRefs[7]}
            >
              <mesh
                name="polySurface8_Fan_blades_0_1"
                geometry={nodes.polySurface8_Fan_blades_0_1.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
            </group>
            <group name="polySurface3_1" position={[0, -44.738, 0]}>
              <mesh
                name="polySurface3_lambert1_0_1"
                geometry={nodes.polySurface3_lambert1_0_1.geometry}
                material={materials.PaletteMaterial001}
                castShadow
                receiveShadow
              />
              <mesh
                name="polySurface3_Fan_light_0_1"
                geometry={nodes.polySurface3_Fan_light_0_1.geometry}
                material={materials.PaletteMaterial002}
                castShadow
                receiveShadow
              />
            </group>
          </group>
        </group>
        <mesh
          name="pCube25_Green_glass_0"
          geometry={nodes.pCube25_Green_glass_0.geometry}
          material={materials.PaletteMaterial001}
          scale={0.01}
          castShadow
          receiveShadow
        />
        <mesh
          name="Cuerpo_Bar_light_0"
          geometry={nodes.Cuerpo_Bar_light_0.geometry}
          material={materials.PaletteMaterial002}
          scale={0.01}
          castShadow
          receiveShadow
        />
        <group>
          <mesh
            name="Cuerpo_Bar_light_0"
            geometry={nodes.Cuerpo_Bar_light_0.geometry}
            material={materials.PaletteMaterial002}
            scale={0.01}
            castShadow
            receiveShadow
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("./assets/bar/scene-transformed.glb");
