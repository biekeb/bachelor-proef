import React, { useState, useEffect } from "react";
import CharacterManager from "./CharacterManager";
import isabelImage from "../../styling/images/mugisa.png";
import vincentImage from "../../styling/images/mugvic.png";
import anthonImage from "../../styling/images/muganthony.png";
import unkImage from "../../styling/images/unknown character.png";

const Characters = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const storedCharacters = CharacterManager.retrieveCharacters();
    if (storedCharacters) {
      setCharacters(storedCharacters);
    }
  }, []);

  const characterImages = {
    isabella: isabelImage,
    vincent: vincentImage,
    anthony: anthonImage,
  };

  const renderCharacter = (characterName, characterData) => (
    <li key={characterName}>
      {characterData.found ? (
        <>
          <h3 id="character-font">
            {characterName.charAt(0).toUpperCase() + characterName.slice(1)}
          </h3>
          <img
            className="character-image"
            src={characterImages[characterName] || unkImage}
            alt={characterName}
          />
        </>
      ) : (
        <>
          <h3 id="character-font">Undiscovered</h3>
          <img
            style={{ width: "100px", height: "100px" }}
            src={unkImage}
            alt="unknown character"
          />
        </>
      )}
    </li>
  );

  return (
    <div className="characters-container">
      <div className="characters">
        <div className="character-div">
          <h2 id="character-font">Characters</h2>

          <ul>
            {Object.entries(characters).map(([characterName, characterData]) =>
              characterName !== "anthony"
                ? renderCharacter(characterName, characterData)
                : null
            )}
          </ul>
        </div>
      </div>
      {characters.anthony?.found && (
        <div className="anthon-character-div">
          <ul>{renderCharacter("anthony", characters.anthony)}</ul>
        </div>
      )}
    </div>
  );
};

export default Characters;
