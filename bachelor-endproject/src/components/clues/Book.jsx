import React, { useState, useEffect } from "react";
import ClueManager from "../clues/clueManager";
import Characters from "./Characters";
import Journal from "./Journal"; // Import the Journal component
import book from "../../styling/images/journal.png";

const Inventory = () => {
  const [fetchedClues, setFetchedClues] = useState({});
  const [currentPage, setCurrentPage] = useState("journal"); // Set initial page to journal

  useEffect(() => {
    const storedClues = ClueManager.retrieveClues();
    if (storedClues) {
      setFetchedClues(storedClues);
    }
  }, []);

  const foundClues = Object.fromEntries(
    Object.entries(fetchedClues).filter(
      ([clueName, clueData]) => clueData.found
    )
  );

  // Split clues into two parts
  const clueEntries = Object.entries(foundClues);
  const half = Math.ceil(clueEntries.length / 2);
  const firstHalfClues = clueEntries.slice(0, half);
  const secondHalfClues = clueEntries.slice(half);

  return (
    <div className="inventory">
      <img src={book} alt="Book" className="inventory-book" />
      <div className="bookmark-buttons">
        <button
          className="bookmark-journal"
          onClick={() => setCurrentPage("journal")}
        >
          Journal
        </button>
        <button
          className="bookmark-clues"
          onClick={() => setCurrentPage("clues")}
        >
          Clues
        </button>
        <button
          className="bookmark-characters"
          onClick={() => setCurrentPage("characters")}
        >
          Characters
        </button>
      </div>
      {currentPage === "journal" && <Journal />}
      {currentPage === "clues" && (
        <div className="inventory-clues">
          {clueEntries.length === 0 ? (
            <p id="character-font">No clues found yet</p>
          ) : (
            <>
              <div className="clues-column">
                <ul>
                  {firstHalfClues.map(([clueName, clueData]) => (
                    <li key={clueName}>
                      <p id="character-font">{clueData.description}</p>
                      {clueData.imageUrl && (
                        <img src={clueData.imageUrl} alt={`Clue ${clueName}`} />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="clues-column">
                <ul>
                  {secondHalfClues.map(([clueName, clueData]) => (
                    <li key={clueName}>
                      <p id="character-font">{clueData.description}</p>
                      {clueData.imageUrl && (
                        <img
                          id="clue-pics"
                          src={clueData.imageUrl}
                          alt={`Clue ${clueName}`}
                        />
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>
      )}
      {currentPage === "characters" && <Characters />}
    </div>
  );
};

export default Inventory;
