import React, { useState } from "react";
import data from "./VincentData";
import { Canvas } from "react-three-fiber";
import Vincent from "./Vincent";

export default function SceneVincentInterview() {
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
    <div className="interview-div">
      <button>
        <a href="/app">Back to bar</a>
      </button>
      <h1>Interview with Vincent</h1>
      <p>
        Ask Vincent the bartender questions to get information about the
        murderer
      </p>

      <div className="interview-scene">
        <QuestionNode node={currentNode} onResponse={handleResponse} />

        <Canvas>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Vincent />
        </Canvas>
        <div>
          <div className="detective-meter">
            <h1>Interview with Vincent</h1>
            <p>
              Ask Vincent the bartender questions to get information about the
              murderer
            </p>
            Detective Meter: {detectiveMeter}
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionNode({ node, onResponse }) {
  return (
    <div className="question-node">
      <ul>
        {node.responses &&
          Object.keys(node.responses).map((response, index) => (
            <li key={index}>
              <button onClick={() => onResponse(response)}>{response}</button>
            </li>
          ))}
      </ul>
      <p>{node.question}</p>
    </div>
  );
}
