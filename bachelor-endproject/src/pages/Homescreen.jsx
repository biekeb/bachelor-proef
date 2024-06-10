import React, { useState, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, PositionalAudio, useGLTF } from "@react-three/drei";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import music from "../styling/sounds/menu.mp3";
import Office from "../components/model/Office"; // Assuming Office component is used somewhere
import logo from "../styling/images/noirsoir2.png";
import * as THREE from "three";
import skyimg from "../styling/images/hdr2.png";
import { Office2 } from "../components/model/Office2";
import { ShaderPass } from "three-stdlib";

const HomescreenTest = () => {
  const [position, setPosition] = useState([-8.6, -5, 55]);
  const [showTitleScreen, setShowTitleScreen] = useState(true);
  const TintShader = {
    uniforms: {},
    vertexShader: `
        void main()
        {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    `,
    fragmentShader: `
        void main()
        {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    `,
  };
  const tintPass = new ShaderPass(TintShader);

  // const playMusic = () => {
  //   setShowTitleScreen(false);
  //   const audio = new Audio(music);
  //   audio.loop = true;
  //   audio.play();
  // };
  // <iframe src="https://skybox.blockadelabs.com/e/d294a60fa9ea164bcfffe25a38ec8981" width=700 height=700 style="border:0;" allow="fullscreen"></iframe>

  return (
    <div>
      {/* {showTitleScreen && (
        <div className="homescreen-start">
          <button className="homescreen-start-button" onClick={playMusic}>
            <h1>START</h1>
          </button>
        </div>
      )} */}

      <Canvas
        shadows
        camera={{ position: [0, 1.5, -5], fov: 45 }}
        style={{
          height: "100vh",
          width: "100vw",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: "1",
        }}
      >
        <EffectComposer>
          <DepthOfField
            focusDistance={0}
            focalLength={0.02}
            bokehScale={2}
            height={480}
          />
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <ColorAverage blendFunction={BlendFunction.NORMAL} />
        </EffectComposer>

        <Office2 />
        {/* <Blinders /> */}
        <PositionalAudio url={music} distance={1} loop />

        <OrbitControls
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minAzimuthAngle={-Math.PI / 100}
          maxAzimuthAngle={Math.PI / 3}
          minDistance={1}
          maxDistance={5}
          enableZoom={true}
          enablePan={false}
          zoomSpeed={0.8}
          rotateSpeed={0.8}
        />
        <pointLight
          color="purple"
          position={[-1.1, 1, -1]}
          intensity={5} // Increased intensity
          castShadow
        />

        <pointLight
          color="purple"
          position={[-5, 1.5, -3]}
          intensity={5} // Increased intensity
          castShadow
        />

        {/* <DirectionalLightHelper /> */}
        <mesh position={[0, 100, 0]}>
          <sphereGeometry args={[400, 60, 40]} />

          <meshBasicMaterial
            map={new THREE.TextureLoader().load(skyimg)}
            side={THREE.BackSide}
          />
        </mesh>
      </Canvas>

      <div
        className="homescreen-button"
        style={{ zIndex: "99", position: "relative" }}
      >
        <img id="logo" src={logo} alt="" />
        <button id="playbtn">
          <a id="play-btn" href="app">
            PLAY
          </a>
        </button>
      </div>
    </div>
  );
};

// function DirectionalLightHelper() {
//   const { scene } = useThree();

//   useEffect(() => {
//     const directionalLight = new THREE.DirectionalLight("purple", 10); // Increased intensity
//     directionalLight.position.set(-0.1, 0.2, -0.3);

//     directionalLight.castShadow = true; // Enable shadow casting for the directional light

//     // Optional: Configure the shadow properties for better quality
//     directionalLight.shadow.mapSize.width = 1024;
//     directionalLight.shadow.mapSize.height = 1024;
//     directionalLight.shadow.camera.near = 0.5;
//     directionalLight.shadow.camera.far = 500;
//     directionalLight.shadow.camera.left = -10;
//     directionalLight.shadow.camera.right = 10;
//     directionalLight.shadow.camera.top = 10;
//     directionalLight.shadow.camera.bottom = -10;

//     scene.add(directionalLight);

//     const helper = new THREE.DirectionalLightHelper(directionalLight, 10);
//     scene.add(helper);

//     return () => {
//       scene.remove(directionalLight);
//       scene.remove(helper);
//     };
//   }, [scene]);

//   return null;
// }

// function Blinders() {
//   const { scene } = useGLTF("./assets/blinds.glb");

//   useEffect(() => {
//     // Traverse the model and enable shadow casting and receiving
//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.castShadow = true;
//         child.receiveShadow = true;
//       }
//     });
//   }, [scene]);

//   scene.position.set(0, 0, 0);
//   scene.rotation.set(0, 0, 0);

//   return <primitive object={scene} />;
// }

export default HomescreenTest;
