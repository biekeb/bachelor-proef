import React, { useState, useEffect } from "react";
import Logo from "../components/Logo";
import GameMenu from "../components/homescreen/GameMenu";
import "../styling/css/Home.css";
import Audio from "../styling/sounds/menu.mp3";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (

        <div className="homescreen">
          <Logo />
          <GameMenu />
          <audio>
            <source src={Audio} type="audio/mpeg" />
          </audio>
        </div>
 
  );
};

//sent audio from title screen to home screen when it is loaded

export default HomeScreen;
