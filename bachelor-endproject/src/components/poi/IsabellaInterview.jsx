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
  question: "",
  responses: {
    "Did you and Don have a troubled relationship?": {
      question: "Yes, Don was abusive towards me.",
      responses: {
        "How long was Don abusive towards you?": {
          question: "It started a few years ago, and it got worse over time.",
          responses: {
            "Did you ever consider leaving him?": {
              question: "Yes, but I was scared of what he might do.",
            },
            "Did you ever report the abuse to the authorities?": {
              question: "No, I was too afraid and ashamed to report it.",
            },
          },
        },
        "Did anyone else know about the abuse?": {
          question:
            "I confided in a few close friends, but not many people knew.",
          responses: {
            "Who did you confide in?": {
              question: "My close friend Sarah and my sister.",
            },
            "Did Vincent know about the abuse?": {
              question: "Yes, he was one of the few people I told.",
              responses: {
                "How did Vincent react when you told him?": {
                  question:
                    "He was supportive and tried to help me as much as he could.",
                  responses: {
                    "What is your relationship with Vincent?": {
                      question:
                        "Vincent and I have been having a secret affair.",
                      responses: {
                        "How long has the affair been going on?": {
                          question:
                            "We've been seeing each other for about a year.",
                          responses: {
                            "How did the affair start?": {
                              question:
                                "We grew close when I confided in him about Don's abuse.",
                            },
                            "Were you in love with Vincent?": {
                              question:
                                "Yes, we developed strong feelings for each other.",
                            },
                          },
                        },
                        "Why did you keep the affair a secret?": {
                          question:
                            "I was afraid of what Don might do if he found out.",
                          responses: {
                            "Did you plan to leave Don for Vincent?": {
                              question:
                                "We talked about it, but I was too scared to take that step.",
                            },
                            "Did Vincent ever pressure you to leave Don?": {
                              question:
                                "No, he understood my situation and was patient.",
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
                            "How did Don's behavior change after he suspected the affair?":
                              {
                                question:
                                  "He became even more controlling and abusive.",
                              },
                          },
                        },
                      },
                    },
                  },
                },
                "Did Vincent ever confront Don about the abuse?": {
                  question:
                    "Not directly, but he did warn Don to treat me better.",
                  responses: {
                    "What is your relationship with Vincent?": {
                      question:
                        "Vincent and I have been having a secret affair.",
                      responses: {
                        "How long has the affair been going on?": {
                          question:
                            "We've been seeing each other for about a year.",
                          responses: {
                            "How did the affair start?": {
                              question:
                                "We grew close when I confided in him about Don's abuse.",
                            },
                            "Were you in love with Vincent?": {
                              question:
                                "Yes, we developed strong feelings for each other.",
                            },
                          },
                        },
                        "Why did you keep the affair a secret?": {
                          question:
                            "I was afraid of what Don might do if he found out.",
                          responses: {
                            "Did you plan to leave Don for Vincent?": {
                              question:
                                "We talked about it, but I was too scared to take that step.",
                            },
                            "Did Vincent ever pressure you to leave Don?": {
                              question:
                                "No, he understood my situation and was patient.",
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
                            "How did Don's behavior change after he suspected the affair?":
                              {
                                question:
                                  "He became even more controlling and abusive.",
                              },
                          },
                        },
                      },
                    },
                  },
                },
              },
            },
          },
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
        <h2 id="h2-kk">Isabella's answer:</h2>
        <p>{node.question}</p>
      </div>
    </div>
  );
}
