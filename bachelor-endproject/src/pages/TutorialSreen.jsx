import React, { useState } from "react";
import tut1 from "../styling/images/tut1.png";
import tut2 from "../styling/images/tut2.png";

export const TutorialSreen = ({ onClose, playMusic }) => {
  const images = [tut1, tut2]; // Array of tutorial images
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleClose = () => {
    playMusic();
    onClose();
  };

  return (
    <div className="tut" style={{ textAlign: "center" }}>
      <div>
        <div>
          <button
            onClick={handlePrevious}
            disabled={currentIndex <= 0}
            style={{
              marginRight: "10px",
              display: currentIndex > 0 ? "inline-block" : "none",
            }}
          >
            Previous
          </button>
          <button
            onClick={handleNext}
            disabled={currentIndex >= images.length - 1}
            style={{ display: "inline-block" }}
          >
            Next
          </button>
        </div>
      </div>
      <button
        onClick={handleClose}
        style={{ marginTop: "20px", display: "block" }}
      >
        Close
      </button>
      <img
        src={images[currentIndex]}
        alt="tutorial"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>
  );
};
