import React from "react";
import { useBox } from "@react-three/cannon";
import ClueManager from "../clues/clueManager";
import Swal from "sweetalert2";
import cluesound from "../../styling/sounds/clue.wav";

const TrashCanTrigger = (props) => {
  const [ref] = useBox(() => ({
    mass: 0,
    position: [-21, 6, -11],
    args: [5, 5, 5],
  }));

  const [ref4] = useBox(() => ({
    mass: 0,
    position: [14, 6, -11],
    args: [5, 5, 5],
  }));

  const [ref2] = useBox(() => ({
    mass: 0,
    position: [-5, 6, 11],
    args: [5, 5, 5],
  }));

  const [ref3] = useBox(() => ({
    mass: 0,
    position: [-12, 6, 11],
    args: [5, 5, 5],
  }));

  const handleClickNoGun = () => {
    console.log("No gun found!");
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      // icon: "error",
      title: "Empty trashcan.",
    });
  };

  const handleClickGun = () => {
    console.log("Gun found!");

    const audio = new Audio(cluesound);
    audio.play();

    const Toast = Swal.mixin({
      toast: true,
      position: "top-center",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      title: "Gun found! New clue added to inventory.",
    });

    ClueManager.updateClueStatus("clue3");
  };

  return (
    <>
      <mesh ref={ref} onClick={handleClickNoGun}>
        <boxGeometry args={[6, 6, 6]} />
        <meshStandardMaterial wireframe color="grey" />
      </mesh>

      <mesh ref={ref2} onClick={handleClickGun}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial wireframe color="grey" />
      </mesh>

      <mesh ref={ref3} onClick={handleClickNoGun}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial wireframe color="grey" />
      </mesh>

      <mesh ref={ref4} onClick={handleClickNoGun}>
        <boxGeometry args={[5, 5, 5]} />
        <meshStandardMaterial wireframe color="grey" />
      </mesh>
    </>
  );
};

export default TrashCanTrigger;
