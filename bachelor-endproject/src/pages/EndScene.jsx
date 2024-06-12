import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoVincent from "../styling/images/VincentEnd.mp4";
import videoAnthony from "../styling/images/AnthonyEnd.mp4";
import videoIsabella from "../styling/images/IsabellaEnd.mp4";

const EndScene = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  const handleButtonClick = (video) => {
    setSelectedVideo(video);
    stopMusic();
  };

  const stopMusic = () => {
    setIsMusicPlaying(false);
    sessionStorage.setItem("isMusicPlaying", "false"); // Save music state to localStorage
  };

  const handleVideoEnd = () => {
    navigate("/");
  };

  return (
    <div className={`container ${selectedVideo ? "video-container" : ""}`}>
      {selectedVideo ? (
        <div className="video-wrapper">
          <video
            className="full-screen-video"
            autoPlay
            onEnded={handleVideoEnd}
          >
            <source src={selectedVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      ) : (
        <div className="button-container">
          <h1>Acuse who will be brought to justice</h1>

          <h2>choice 1</h2>
          <button
            className="end-btn"
            onClick={() => handleButtonClick(videoVincent)}
          >
            Acuse Vincent
          </button>

          <h2>choice 2</h2>
          <button
            className="end-btn"
            onClick={() => handleButtonClick(videoAnthony)}
          >
            Acuse Anthony
          </button>

          <h2>choice 3</h2>

          <button
            className="end-btn"
            onClick={() => handleButtonClick(videoIsabella)}
          >
            Acuse Isabella
          </button>
        </div>
      )}
    </div>
  );
};

export default EndScene;
