import React, { useState } from "react";
import data from "./AnthonyData";
import { Canvas } from "react-three-fiber";
import Vincent from "./Vincent";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import questionmark from "../../styling/images/Questionmark.png";

export default function SceneVincentInterview() {
  const [currentNode, setCurrentNode] = useState(data);
  const [detectiveMeter, setDetectiveMeter] = useState(40);

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
      <h1>Intorigation Vincent</h1>
      <p>
        Ask Vincent the bartender questions to get information about the
        murderer
      </p>

      <div className="interview-scene">
        <QuestionNode node={currentNode} onResponse={handleResponse} />

        <Canvas>
          <EffectComposer>
            <DepthOfField
              focusDistance={0}
              focalLength={0.02}
              bokehScale={2}
              height={480}
            />
            <Bloom
              luminanceThreshold={0}
              luminanceSmoothing={0.9}
              height={300}
            />
            <Noise opacity={0.02} />
            <ColorAverage
              blendFunction={BlendFunction.NORMAL} // blend mode
            />
          </EffectComposer>

          <ambientLight intensity={0.5} />
          <spotLight position={[0, 5, 5]} intensity={50} />

          <Vincent />
        </Canvas>
        <div>
          <div className="detective-meter">
            Detective Meter: {detectiveMeter} %
          </div>
        </div>
      </div>
    </div>
  );
}

function QuestionNode({ node, onResponse }) {
  return (
    <div>
      <div className="question-node">
        <ul>
          {node.responses &&
            Object.keys(node.responses).map((response, index) => (
              <li key={index}>
                <button onClick={() => onResponse(response)}>
                  <img src={questionmark} alt="response" />

                  {response}
                </button>
              </li>
            ))}
        </ul>
      </div>
      <div className="node-awnser">
        <p>{node.question}</p>
      </div>
    </div>
  );
}
