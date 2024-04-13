import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useSphere, useBox } from "@react-three/cannon"; // Import useBox for the player's rigidbody
import { useThree, useFrame } from "@react-three/fiber";
import Body from "./Body";

// Define constants and key mappings for player movement
const SPEED = 10;
const keys = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump",
};

// Helper function to map key codes to movement fields
const moveFieldByKey = (key) => keys[key];

// Define vectors and variables for player movement and rotation
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const speed = new THREE.Vector3();

// Custom hook for handling player controls
const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
  });

  // Add event listeners for keydown and keyup events
  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    // Remove event listeners when the component is unmounted
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export const Player = (props) => {
  // Create refs for the player's axe and cannon physics body
  const axe = useRef();
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 10, 0],
    ...props,
  }));

  const { forward, backward, left, right, jump } = usePlayerControls(); // Use custom hook to get player controls state
  const { camera } = useThree(); // Get camera from three.js scene

  const velocity = useRef([0, 0, 0]); // Create a ref for storing the player's velocity


  

  // Subscribe to the velocity changes in the cannon physics body
  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  // Update the player's position and rotation on each frame
  useFrame((state) => {
    // Update the player's position to match the camera position
    ref.current.getWorldPosition(camera.position);

    // Calculate movement vectors based on user input
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);

    // Combine movement vectors, normalize, and apply speed
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    // Get current velocity from the cannon physics body
    speed.fromArray(velocity.current);

    // Update the rotation of the axe based on player's speed
    axe.current.children[0].rotation.x = THREE.MathUtils.lerp(
      axe.current.children[0].rotation.x,
      Math.sin((speed.length() > 1) * state.clock.elapsedTime * 10) / 10,
      0.1
    );

    // Update the rotation of the axe based on player's speed
    axe.current.rotation.copy(camera.rotation);
    axe.current.position
      .copy(camera.position)
      .add(camera.getWorldDirection(rotation).multiplyScalar(1));

    // Adjust the camera position
    camera.position.setY(camera.position.y + 8);

    // Set the new velocity to the cannon physics body
    api.velocity.set(direction.x, velocity.current[1], direction.z);

    // Perform a jump if the jump key is pressed and the player is close to the ground
    if (jump && Math.abs(velocity.current[1].toFixed(2)) < 0.05)
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
  });

  return (
    <>
      {/* Use a Box collider for the player's rigidbody */}
      <group
        ref={axe}
        onPointerMissed={(e) => (axe.current.children[0].rotation.x = -0.5)}
      >
        <Body position={[0, 4, 0]} />
      </group>
    </>
  );
};
