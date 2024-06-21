import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import video from "../styling/images/intoduction_video.mp4";

const VideoPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const handleVideoEnd = () => {
      navigate("/app");
    };

    const videoElement = document.getElementById("intro-video");
    videoElement.addEventListener("ended", handleVideoEnd);

    return () => {
      videoElement.removeEventListener("ended", handleVideoEnd);
    };
  }, [navigate]);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "black",
        zIndex: 100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <video
        id="intro-video"
        src={video}
        style={{ width: "80%", height: "80%" }}
        autoPlay
      />
    </div>
  );
};

export default VideoPage;
