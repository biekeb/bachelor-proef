import vincentimg from '../../styling/images/mug.png';

const CharacterManager = {
    // Define initial characters
    characters: {
      isabel: {
        found: false,
        description: "Isabel's description.",
        image: "path_to_isabel_image.jpg",
      },
      vincent: {
        found: false,
        description: "Vincent's description.",
        image: vincentimg,
      },
      anthon: {
        found: false,
        description: "Anthon's description.",
        image: "path_to_anthon_image.jpg",
      },
      // Add more characters as needed
    },
  
    // Function to update a character's status
    updateCharacterStatus(characterName) {
      if (this.characters[characterName]) {
        this.characters[characterName].found = true;
        // Save updated characters to local storage
        this.saveCharacters();
      } else {
        console.error(`Character '${characterName}' does not exist.`);
      }
    },
  
    // Function to retrieve characters from local storage
    retrieveCharacters() {
      const storedCharacters = sessionStorage.getItem("characters");
      if (storedCharacters) {
        this.characters = JSON.parse(storedCharacters);
      }
      return this.characters;
    },
  
    // Function to save characters to local storage
    saveCharacters() {
      sessionStorage.setItem("characters", JSON.stringify(this.characters));
    },
  };
  
  // Initialize the characters from local storage
  CharacterManager.retrieveCharacters();
  
  export default CharacterManager;
  