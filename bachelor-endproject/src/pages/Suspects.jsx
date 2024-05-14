import React from "react";

const Suspects = () => {
  return (
    <div className="examine">
      <div
        style={{
          padding: "5%",
        }}
      >
        <h1>EXAMINE EVIDENCE</h1>
      </div>

      <div className="eeContainer">
        <div className="eeItem">
          <h2>ACP 45 CALIBER</h2>
          <p>Explanation</p>
        </div>
        <div className="eeItem">
          <h2>9MM BULLET</h2>
        </div>
      </div>
      <div className="evidence">
        <h3>Evidence</h3>
        <div className="evidenceItem"></div>
      </div>
    </div>
  );
};

export default Suspects;
