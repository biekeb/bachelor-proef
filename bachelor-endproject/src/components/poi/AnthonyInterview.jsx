import React, { useState } from "react";
import data from "./AnthonyData";

function AnthonyInterview() {
  const [currentNode, setCurrentNode] = useState(data);
  const [detectiveMeter, setDetectiveMeter] = useState(0);

  const handleResponse = (response) => {
    const nextNode = currentNode.responses[response];
    if (nextNode) {
      // Calculate impact on detective meter
      const impactLevel = nextNode.impactLevel || 1; // Default impact level
      setDetectiveMeter(detectiveMeter + impactLevel);

      setCurrentNode(nextNode);
    } else {
      alert("End of interrogation. Thank you for playing!");
      // You can handle end of interrogation logic here
    }
  };

  return (
    <div className="App">
      <h1>Murder Investigation</h1>
      <div>Detective Meter: {detectiveMeter}</div>
      <QuestionNode node={currentNode} onResponse={handleResponse} />
    </div>
  );
}

function QuestionNode({ node, onResponse }) {
  return (
    <div>
      <p>{node.question}</p>
      <ul>
        {node.responses &&
          Object.keys(node.responses).map((response, index) => (
            <li key={index}>
              <button onClick={() => onResponse(response)}>{response}</button>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default AnthonyInterview;
