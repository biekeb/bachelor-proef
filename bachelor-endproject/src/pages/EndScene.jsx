import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import videoVincent from "../styling/images/VincentEnd.mp4";
import videoAnthony from "../styling/images/AnthonyEnd.mp4";
import videoIsabella from "../styling/images/IsabellaEnd.mp4";

const EndScene = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const navigate = useNavigate();

  const handleButtonClick = (video) => {
    setSelectedVideo(video);
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
          <h1>Choose an Ending</h1>
          <button onClick={() => handleButtonClick(videoVincent)}>
            Ending 1
          </button>
          <button onClick={() => handleButtonClick(videoAnthony)}>
            Ending 2
          </button>
          <button onClick={() => handleButtonClick(videoIsabella)}>
            Ending 3
          </button>
        </div>
      )}
    </div>
  );
};

export default EndScene;
