import vincentimg from '../../styling/images/mug.png';
import isabellaimg from '../../styling/images/muganthony.png';

const CharacterManager = {
    characters: {
      isabella: {
        found: false,
        image: isabellaimg,
      },
      vincent: {
        found: false,
        image: vincentimg,
      },
      anthony: {
        found: false,
        image: vincentimg,
      },
    },
  
    // Function to update a character's status
    updateCharacterStatus(characterName) {
      if (this.characters[characterName]) {
        this.characters[characterName].found = true;
        // Save updated characters to session storage
        this.saveCharacters();
      } else {
        console.error(`Character '${characterName}' does not exist.`);
      }
    },
  
    // Function to retrieve characters from session storage
    retrieveCharacters() {
      const storedCharacters = sessionStorage.getItem("characters");
      if (storedCharacters) {
        this.characters = JSON.parse(storedCharacters);
      } else {
        this.saveCharacters(); // Save the initial characters if not already present
      }
      return this.characters;
    },
  
    // Function to save characters to session storage
    saveCharacters() {
      sessionStorage.setItem("characters", JSON.stringify(this.characters));
    },
  };
  
  // Initialize the characters from session storage
  CharacterManager.retrieveCharacters();
  
  export default CharacterManager;
