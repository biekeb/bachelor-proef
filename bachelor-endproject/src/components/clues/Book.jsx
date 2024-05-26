import React, { useState, useEffect } from "react";
import ClueManager from "../clues/clueManager";
import CharacterManager from "./CharacterManager";
import Characters from "./Characters";
import book from "../../styling/images/book.jpg";

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

  return (
    <div className="inventory">
      <img src={book} alt="Book" className="inventory-book" />
      <h2>Inventory</h2>
      <div className="bookmark-buttons">
        <button className="bookmark" onClick={() => setCurrentPage("clues")}>
          Clues
        </button>
        <button
          className="bookmark"
          onClick={() => setCurrentPage("characters")}
        >
          Characters
        </button>
      </div>
      {currentPage === "clues" && (
        <div className="book">
          <h2>Book of Clues</h2>
          <ul>
            {Object.entries(foundClues).map(([clueName, clueData]) => (
              <li key={clueName}>
                <p>{clueData.description}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {currentPage === "characters" && <Characters />}
    </div>
  );
};

export default Inventory;
