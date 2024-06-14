import React, { useState } from "react";
import data from "./IsabellaData";
import { Canvas } from "react-three-fiber";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import questionmark from "../../styling/images/Questionmark.png";
import Isabella from "./Isabella";

const specialQuestionNode = {
  question:
    "",
  responses: {
    "Did you and Don have a troubled relationship?": {
      question: "No, I loved him.",
    },
    "What is your relationship with Vincent?": {
      question:
        "We had a relationship in the past, but we've had little contact recently.",
      responses: {
        "Why did Vincent write you the letter?": {
          question:
            "Vincent wrote the letter to express remorse and regret about our past relationship.",
        },
        "How did Vincent learn about your altercation with Don?": {
          question:
            "I'm not sure, but he might have heard about it from someone.",
        },
        "Has Vincent ever shown interest in rekindling your relationship?": {
          question: "No, he hasn't indicated any such interest.",
        },
      },
    },
  },
};

export default function SceneIsabellaInterview() {
  const [currentNode, setCurrentNode] = useState(data);
  const [detectiveMeter, setDetectiveMeter] = useState(40);
  const [specialQuestionAsked, setSpecialQuestionAsked] = useState(false);
  const [interrogationCompleted, setInterrogationCompleted] = useState(false);

  const handleResponse = (response) => {
    const nextNode = currentNode.responses[response];
    if (nextNode) {
      // Calculate impact on detective meter
      const impactLevel = nextNode.impactLevel || 1; // Default impact level
      const newDetectiveMeter = detectiveMeter + impactLevel;
      setDetectiveMeter(newDetectiveMeter);

      if (newDetectiveMeter > 60 && !specialQuestionAsked) {
        setSpecialQuestionAsked(true);
        setCurrentNode(specialQuestionNode);
      } else {
        setCurrentNode(nextNode);
      }
    } else {
      localStorage.setItem("interrogationDone", "true");
      setInterrogationCompleted(true);
      alert("End of interrogation. Thank you for playing!");
      // You can handle end of interrogation logic here
    }
  };

  if (interrogationCompleted) {
    return (
      <div className="interview-div">
        <button className="end-btn">
          <a href="/app">Back to bar</a>
        </button>
        <h1>Interrogation Isabella</h1>
        <p>You have already completed this interrogation session.</p>
      </div>
    );
  }

  return (
    <div className="interview-div">
      <button className="end-btn">
        <a href="/app">Back to bar</a>
      </button>
      <h1>Interrogation Isabella</h1>
      <p>
        Ask Isabella, the wife of the victim, questions to get information about
        the murderer
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

          <Isabella />
        </Canvas>
        <div>
          <div className="detective-meter-isa">
            <div className="detective-meter-p">
              <p id="character-font">Detective Meter: {detectiveMeter} %</p>
            </div>
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
      <div className="node-answer">
        <h2>Isabella's answer:</h2>
        <p>{node.question}</p>
      </div>
    </div>
  );
}
