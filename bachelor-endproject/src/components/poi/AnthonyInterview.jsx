import React, { useState, useEffect } from "react";
import data from "./AnthonyData";
import { Canvas } from "react-three-fiber";
import Anthony from "./Anthony";
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  Noise,
  ColorAverage,
} from "@react-three/postprocessing";
import { BlendFunction } from "postprocessing";
import questionmark from "../../styling/images/Questionmark.png";

export default function SceneAnthonyInterview() {
  const [currentNode, setCurrentNode] = useState(data);
  const [detectiveMeter, setDetectiveMeter] = useState(40);
  const [specialQuestionAsked, setSpecialQuestionAsked] = useState(false);
  const [interrogationCompleted, setInterrogationCompleted] = useState(false);

  useEffect(() => {
    const interrogationDone = sessionStorage.getItem("interrogationDone");
    if (interrogationDone === "true") {
      setInterrogationCompleted(true);
    }
  }, []);

  const handleResponse = (response) => {
    const nextNode = currentNode.responses[response];
    if (nextNode) {
      // Calculate impact on detective meter
      const impactLevel = nextNode.impactLevel || 1; // Default impact level
      const newDetectiveMeter = detectiveMeter + impactLevel;
      setDetectiveMeter(newDetectiveMeter);

      if (newDetectiveMeter > 70 && !specialQuestionAsked) {
        setSpecialQuestionAsked(true);
        setCurrentNode({
          question: "",
          responses: {
            "Do you own a gun?": {
              question: "Yes.",
              impactLevel: 1,
              responses: {
                "Do you have it with you right now?": {
                  question: "No, I don't carry it with me all the time.",
                  responses: {
                    "Where do you usually keep it?": {
                      question: "I keep it in a safe at home.",
                      responses: {
                        "Can anyone access the safe besides you?": {
                          question:
                            "No, I'm the only one with the combination.",
                        },
                        "When was the last time you checked it?": {
                          question: "Just a couple of days ago.",
                        },
                      },
                    },
                    "When was the last time you used it?": {
                      question: "I haven't used it in months.",
                      responses: {
                        "Why haven't you used it recently?": {
                          question: "No need to. Things have been quiet.",
                        },
                        "Do you have a license for it?": {
                          question: "Yes, it's all legal.",
                        },
                      },
                    },
                  },
                },
                "Have you ever used it?": {
                  question: "Yes, for self-defense a few times.",
                  responses: {
                    "Do you have records of those incidents?": {
                      question: "Yes, they're all documented with the police.",
                    },
                    "Anyone else know about these incidents?": {
                      question:
                        "Yes, the police and my lawyer know about them.",
                      responses: {
                        "Have you been involved in other criminal activities?":
                          {
                            question:
                              "Look, I've had a few run-ins, but nothing major.",
                            responses: {
                              "Can you elaborate on those run-ins?": {
                                question:
                                  "Just some minor stuff, like fights and petty thefts.",
                                responses: {
                                  "Any serious charges or convictions?": {
                                    question:
                                      "No serious convictions, just some fines and probation.",
                                  },
                                  "Do you have a criminal record?": {
                                    question:
                                      "Yes, but it's mostly minor offenses.",
                                    responses: {
                                      "What kind of minor offenses?": {
                                        question:
                                          "Things like disorderly conduct and trespassing.",
                                      },
                                      "Any recent incidents?": {
                                        question:
                                          "No, I've been laying low for a while now.",
                                      },
                                    },
                                  },
                                },
                              },
                              "Any gang-related activities?": {
                                question:
                                  "Nothing I can talk about without my lawyer.",
                                responses: {
                                  "Why do you need a lawyer for that?": {
                                    question:
                                      "Because it's sensitive stuff, you know?",
                                  },
                                  "Have you been arrested for gang activities before?":
                                    {
                                      question:
                                        "Yes, but I've never been convicted.",
                                    },
                                },
                              },
                            },
                          },
                        "Do you think your past might make you a suspect?": {
                          question:
                            "Maybe, but I didn't do anything this time.",
                        },
                      },
                    },
                  },
                },
                "Is it registered?": {
                  question: "Yes, it's registered in my name.",
                  responses: {
                    "Can you provide the registration details?": {
                      question: "Yes, I have the papers at home.",
                    },
                    "Have you ever had any issues with the registration?": {
                      question: "No, it's always been in good standing.",
                    },
                  },
                },
              },
            },
          },
        });
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
        <h1>Interrogation Anthony</h1>
        <p>You have already completed this interrogation session.</p>
      </div>
    );
  }

  return (
    <div className="interview-div">
      <button className="end-btn">
        <a href="/app">Back to bar</a>
      </button>
      <h1>Interrogation Anthony</h1>
      <p>
        Ask Anthony the gang member questions to get information about the
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

          <Anthony />
        </Canvas>
        <div>
          <div className="detective-meter-anthony">
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
      <div className="node-answer">
        <h2>Anthony's answer:</h2>
        <p>{node.question}</p>
      </div>
    </div>
  );
}
