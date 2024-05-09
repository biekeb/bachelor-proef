import { useRef } from 'react'
import { Canvas, extend, useFrame } from '@react-three/fiber'
import { useGLTF, SoftShadows, Html, CameraControls } from '@react-three/drei'
import { easing, geometry } from 'maath'

extend(geometry)

export default function Test2() {
  return (
    <Canvas shadows="basic" eventSource={document.getElementById('root')} eventPrefix="client" camera={{ position: [0, 1.5, 14], fov: 45 }}>
      <fog attach="fog" args={['black', 0, 20]} />
      <pointLight position={[10, -10, -20]} intensity={10} />
      <pointLight position={[-10, -10, -20]} intensity={10} />
      <Model position={[0, -5.5, 3]} rotation={[0, -0.2, 0]} />
      <SoftShadows samples={3} />
      <CameraControls minPolarAngle={0} maxPolarAngle={Math.PI / 2} minAzimuthAngle={-Math.PI / 2} maxAzimuthAngle={Math.PI / 2} />
    </Canvas>
  )
}


function Model(props) {
    const group = useRef()
    const light = useRef()
  
  const { nodes, materials } = useGLTF(
    "./assets/deadon/deadon-transformed.glb"
  );
  return (
    <group  ref={group} scale={[5,5,5,]} {...props} dispose={null}>
      <primitive object={nodes.Root} />
      <mesh
      castShadow receiveShadow
        geometry={nodes.Node.geometry}
        material={materials.PaletteMaterial002}
        position={[-0.367, 0, -0.827]}
        scale={0.011}
      />
      <mesh
      castShadow receiveShadow
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

<Annotation position={[1.75, 3, 2.5]}>
        Thalia <span style={{ fontSize: '1.5em' }}>🌗</span>
      </Annotation>
      <Annotation position={[-4.5, 3.6, -3]}>
        Euphrosyne <span style={{ fontSize: '1.5em' }}>🌖</span>
      </Annotation>
      <Annotation position={[1.5, 8, -3]}>
        <span style={{ fontSize: '1.5em' }}>🌕</span> Aglaia
      </Annotation>
      <spotLight angle={0.5} penumbra={0.5} ref={light} castShadow intensity={10} shadow-mapSize={1024} shadow-bias={-0.001}>
        <orthographicCamera attach="shadow-camera" args={[-10, 10, -10, 10, 0.1, 50]} />
      </spotLight>
    </group>
  );
}

useGLTF.preload("./assets/deadon/deadon-transformed.glb");


function Annotation({ children, ...props }) {
    return (
      <Html
        {...props}
        transform
        occlude="blending"
        geometry={
          /** The geometry is optional, it allows you to use any shape.
           *  By default it would be a plane. We need round edges here ...
           */
          <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
        }>
        <div className="annotation" onClick={() => console.log('.')}>
          {children}
        </div>
      </Html>
    )
  }
  