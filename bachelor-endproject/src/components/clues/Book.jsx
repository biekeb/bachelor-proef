import React, { useState, useEffect } from "react";
import ClueManager from "../clues/clueManager";
import Characters from "./Characters";
import book from "../../styling/images/journal.png";

const Inventory = () => {
  const [fetchedClues, setFetchedClues] = useState({});
  const [currentPage, setCurrentPage] = useState("clues");

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
      {currentPage === "clues" && (
        <div className="inventory-clues">
          <div className="clues-column">
            <ul>
              {firstHalfClues.map(([clueName, clueData]) => (
                <li key={clueName}>
                  <p>{clueData.description}</p>
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
                  <p>{clueData.description}</p>
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
        </div>
      )}
      {currentPage === "characters" && <Characters />}
    </div>
  );
};

export default Inventory;
