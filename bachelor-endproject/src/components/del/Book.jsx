import React, { useState, useEffect } from "react";
import ClueManager from "../clues/clueManager"; // Assuming clueManager.js is in the same directory
// import bookimage from "../styling/images/book.jpg";
const Inventory = () => {
  // State to store the fetched clues
  const [fetchedClues, setFetchedClues] = useState({});

  // Effect to fetch clues from local storage on component mount
  useEffect(() => {
    const storedClues = ClueManager.retrieveClues();
    if (storedClues) {
      setFetchedClues(storedClues);
    }
  }, []);

  // Filter the fetched clues to only include the ones that have been found
  const foundClues = Object.fromEntries(
    Object.entries(fetchedClues).filter(
      ([clueName, clueData]) => clueData.found
    )
  );

  return (
    <div className="book">
      <h2>Book of Clues</h2>
      <ul>
        {Object.entries(foundClues).map(([clueName, clueData]) => (
          <li key={clueName}>
            <p>{clueData.description}</p>
          </li>
        ))}
      </ul>
      {/* <img src={bookimage} alt="" /> */}
    </div>
  );
};

export default Inventory;
