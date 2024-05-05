import React from "react";
import ClueManager from "./clueManager"; // Assuming clueManager.js is in the same directory

const ClueSystem = () => {
  // Function to handle button click
  const handleButtonClick = () => {
    // Show the first clue
    if (!ClueManager.clues.clue1.found) {
      ClueManager.updateClueStatus("clue1");
    }
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Show Clue</button>
      {ClueManager.clues.clue1.found && (
        <p>{ClueManager.clues.clue1.description}</p>
      )}
    </div>
  );
};

export default ClueSystem;
