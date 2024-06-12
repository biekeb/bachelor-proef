import React, { useState, useEffect } from "react";
import CharacterManager from "./CharacterManager";
import isabelImage from "../../styling/images/unknown character.png";
import vincentImage from "../../styling/images/mug.png";
import anthonImage from "../../styling/images/mug.png";

const Characters = () => {
  const [characters, setCharacters] = useState({});

  useEffect(() => {
    const storedCharacters = CharacterManager.retrieveCharacters();
    if (storedCharacters) {
      setCharacters(storedCharacters);
    }
  }, []);

  const characterImages = {
    isabel: isabelImage,
    vincent: vincentImage,
    anthon: anthonImage,
  };

  return (
    <div className="characters">
      <div className="character-div">
        <ul>
          {Object.entries(characters).map(([characterName, characterData]) => (
            <li key={characterName}>
              {characterData.found ? (
                <>
                  <h3>
                    {characterName.charAt(0).toUpperCase() +
                      characterName.slice(1)}
                  </h3>
                  <p>{characterData.description}</p>
                  <img
                    className="character-image"
                    src={characterImages[characterName]}
                    alt={characterName}
                  />
                </>
              ) : (
                <>
                  <h3>Undiscovered</h3>
                  <img
                    style={{ width: "100px", height: "100px" }}
                    src={isabelImage}
                    alt="unknown character"
                  />
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Characters;
