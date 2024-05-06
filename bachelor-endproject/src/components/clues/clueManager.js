const ClueManager = {
  // Define initial clues
  clues: {
    clue1: {
      found: false,
      description: "The bullets found on the ground are .45 callbiers ACP.",
    },
    clue2: {
      found: false,
      description: "The lifeless body of Don Salvatore",
    },
    clue3: {
      found: false,
      description: "",
    },
    // Add more clues as needed
  },
  // Function to update a clue's status
  updateClueStatus(clueName) {
    if (this.clues[clueName]) {
      this.clues[clueName].found = true;
      // Save updated clues to local storage
      this.saveClues();
    } else {
      console.error(`Clue '${clueName}' does not exist.`);
    }
  },

  // Function to retrieve clues from local storage
  retrieveClues() {
    const storedClues = localStorage.getItem("clues");
    if (storedClues) {
      this.clues = JSON.parse(storedClues);
    }
    return this.clues;
  },

  // Function to save clues to local storage
  saveClues() {
    localStorage.setItem("clues", JSON.stringify(this.clues));
  },
};

// Initialize the clues from local storage
ClueManager.retrieveClues();

export default ClueManager;
