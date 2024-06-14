import React, { useState } from "react";
import data from "./VincentData";
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

const specialQuestionNode = {
  question: "",
  responses: {
    "Were you having an affair with Isabella?": {
      question: "Yes, Isabella and I were seeing each other in secret.",
      responses: {
        "How long has the affair been going on?": {
          question: "We've been seeing each other for about a year.",
          responses: {
            "How did the affair start?": {
              question:
                "We grew close when she confided in me about Don's abuse.",
            },
            "Were you in love with Isabella?": {
              question: "Yes, we developed strong feelings for each other.",
            },
          },
        },
        "Why did you keep the affair a secret?": {
          question: "We were afraid of what Don might do if he found out.",
          responses: {
            "Did you plan to leave Don for Isabella?": {
              question:
                "We talked about it, but she was too scared to take that step.",
            },
            "Did you ever pressure Isabella to leave Don?": {
              question: "No, I understood her situation and was patient.",
            },
          },
        },
        "Did Don know about the affair?": {
          question:
            "I think he suspected something, but I don't know for sure.",
          responses: {
            "Did Don ever confront you about it?": {
              question:
                "He made some comments, but he never directly confronted me.",
            },
            "How did Don's behavior change after he suspected the affair?": {
              question: "He became even more controlling and abusive.",
            },
          },
        },
      },
    },
  },
};

export default function SceneVincentInterview() {
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

      if (newDetectiveMeter > 70 && !specialQuestionAsked) {
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
      <h1>Intorigation Vincent</h1>
      <p>
        Ask Vincent the bar owner questions to get information about the
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
            <div className="detective-meter-p">
              <p id="character-font"> Detective Meter: {detectiveMeter} %</p>
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
      <div className="node-awnser">
        <h2 id="h2-kk">Vincent awnser:</h2>
        <p>{node.question}</p>
      </div>
    </div>
  );
}
