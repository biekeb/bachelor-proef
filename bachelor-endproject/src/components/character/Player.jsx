import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { useBox } from "@react-three/cannon";
import { useThree, useFrame } from "@react-three/fiber";
import Body from "./Body";

const SPEED = 10;
const keys = {
  KeyW: "forward",
  KeyS: "backward",
  KeyA: "left",
  KeyD: "right",
  Space: "jump",
  KeyI: "inventory",
};

const moveFieldByKey = (key) => keys[key];

const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();
const rotation = new THREE.Vector3();
const speed = new THREE.Vector3();

const usePlayerControls = () => {
  const [movement, setMovement] = useState({
    forward: false,
    backward: false,
    left: false,
    right: false,
    jump: false,
    inventory: false,
  });

  useEffect(() => {
    const handleKeyDown = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: true }));
    const handleKeyUp = (e) =>
      setMovement((m) => ({ ...m, [moveFieldByKey(e.code)]: false }));
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, []);
  return movement;
};

export const Player = (props) => {
  const axe = useRef();
  const [ref, api] = useBox(() => ({
    mass: 1,
    position: [0, 10, 0],
    userData: { name: "Player" },
    ...props,
  }));

  const { forward, backward, left, right, jump, inventory } =
    usePlayerControls();
  const { camera } = useThree();

  const velocity = useRef([0, 0, 0]);
  const [canJump, setCanJump] = useState(true);

  useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);

  useFrame((state) => {
    ref.current.getWorldPosition(camera.position);
    frontVector.set(0, 0, Number(backward) - Number(forward));
    sideVector.set(Number(left) - Number(right), 0, 0);
    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(SPEED)
      .applyEuler(camera.rotation);

    speed.fromArray(velocity.current);

    axe.current.children[0].rotation.x = THREE.MathUtils.lerp(
      axe.current.children[0].rotation.x,
      Math.sin((speed.length() > 1) * state.clock.elapsedTime * 10) / 10,
      0.1
    );

    axe.current.rotation.copy(camera.rotation);
    axe.current.position
      .copy(camera.position)
      .add(camera.getWorldDirection(rotation).multiplyScalar(1));

    camera.position.setY(camera.position.y + 8);

    api.velocity.set(direction.x, velocity.current[1], direction.z);

    if (jump && canJump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      api.velocity.set(velocity.current[0], 10, velocity.current[2]);
      setCanJump(false);
    }

    if (!canJump && Math.abs(velocity.current[1].toFixed(2)) < 0.05) {
      setCanJump(true);
    }
  });

  return (
    <group
      ref={axe}
      onPointerMissed={(e) => (axe.current.children[0].rotation.x = -0.5)}
    >
      <Body position={[0, 4, 0]} />
    </group>
  );
};
