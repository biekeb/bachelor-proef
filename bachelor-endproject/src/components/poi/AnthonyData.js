// data.js
const data = {
  question:
    "",
  responses: {
    "Where were you at the time of the murder?": {
      question: "I was playing cards the whole night here.",
      impactLevel: 1,

      responses: {
        "Can anyone confirm your alibi?": {
          question: "Yes, ask anyone here they will confirm.",
          responses: {
            "Who specifically can confirm your alibi?": {
              question: "The bartender and a few of the regulars saw me all night.",
            },
            "Did you leave at any point during the night?": {
              question: "No, I stayed here the entire time.",
              responses: {
                "Are there security cameras that can verify that?": {
                  question: "I'm not sure, but you can check with the owner.",
                },
                "Did anyone else notice anything unusual?": {
                  question: "Not that I know of, but you can ask around.",
                },
              },
            },
          },
        },
        "Did you see anything suspicious while you were here?": {
          question: "I did see the barman disappear for a few minutes.",
          responses: {
            "Do you know why he left?": {
              question: "No idea, he just disappeared and then came back.",
            },
            "Did anyone else leave or act strangely?": {
              question: "Not really, it was a normal night otherwise.",
            },
          },
        },
      },
    },

    

    "How is it going?": {
      question: "I feel a bit shocked.",
      impactLevel: 1,
      responses: {
        "Why is that?": {
          question: "It's just hard to believe something like this could happen.",
          responses: {
            "Were you close to the victim?": {
              question: "Not close, but I knew him well enough. He was the mafia boss of the rival gang.",
              responses: {
                "So you had dealings with him?": {
                  question: "Yes, but it was all business, nothing personal.",
                },
                "Did you have any recent conflicts with him?": {
                  question: "There were always conflicts, but nothing out of the ordinary recently.",
                },
              },
            },
            "What do you think might have happened?": {
              question: "I have no idea. I just hope you find out soon.",
              responses: {
                "You sure you don't have any idea?": {
                  question: "Look, I've heard rumors, but I don't know anything for sure.",
                },
                "Anyone in your gang talk about him recently?": {
                  question: "Not that I recall, but I can ask around.",
                },
              },
            },
          },
        },
        
          "How is it going?": {
            "question": "I feel a bit shocked.",
            "impactLevel": 1,
            responses: {
              "Why is that?": {
                "question": "It's just hard to believe something like this could happen.",
                "responses": {
                  "Were you close to the victim?": {
                    "question": "Not close, but I knew him well enough. He was the mafia boss of the rival gang.",
                    "responses": {
                      "So you had dealings with him?": {
                        "question": "Yes, but it was all business, nothing personal.",
                        "responses": {
                          "What kind of business?": {
                            "question": "Mostly territory agreements and occasional disputes.",
                            "responses": {
                              "Any recent disputes?": {
                                "question": "Nothing more than the usual disagreements."
                              },
                              "Did any of these disputes get heated?": {
                                "question": "They always got heated, but we managed to keep things under control."
                              }
                            }
                          },
                          "Did you benefit from his death?": {
                            "question": "No, if anything, it complicates matters for everyone.",
                            "responses": {
                              "How so?": {
                                "question": "Power struggles, territory shifts, potential for more violence."
                              },
                              "Anyone in your gang feel differently?": {
                                "question": "Some might see it as an opportunity, but it's risky business."
                              }
                            }
                          }
                        }
                      },
                      "Did you have any recent conflicts with him?": {
                        "question": "There were always conflicts, but nothing out of the ordinary recently.",
                        "responses": {
                          "Can you describe the nature of these conflicts?": {
                            "question": "Territory disputes, business disagreements, the usual.",
                            "responses": {
                              "Any threats exchanged?": {
                                "question": "Threats were common, but they were just part of the posturing."
                              },
                              "Did you ever feel threatened?": {
                                "question": "It was part of the game. We all knew the risks."
                              }
                            }
                          },
                          "Did anyone from your gang escalate things?": {
                            "question": "Not that I know of, we tried to keep things cool.",
                            "responses": {
                              "Any specific incidents?": {
                                "question": "Just the usual confrontations, nothing serious recently."
                              },
                              "Could someone have acted without your knowledge?": {
                                "question": "It's possible, but unlikely. We keep a close eye on our members."
                              }
                            }
                          }
                        }
                      }
                    }
                  },
                  "What do you think might have happened?": {
                    "question": "I have no idea. I just hope you find out soon.",
                    "responses": {
                      "You sure you don't have any idea?": {
                        "question": "Look, I've heard rumors, but I don't know anything for sure.",
                        "responses": {
                          "What kind of rumors?": {
                            "question": "Just whispers about power grabs and old grudges.",
                            "responses": {
                              "Any names mentioned?": {
                                "question": "No names, just vague hints and speculations."
                              },
                              "Who is spreading these rumors?": {
                                "question": "It's hard to pin down, rumors spread like wildfire in our circles."
                              }
                            }
                          },
                          "Have you investigated these rumors?": {
                            "question": "We've looked into some, but nothing concrete has come up.",
                            "responses": {
                              "Find anything suspicious?": {
                                "question": "Just the usual gossip, nothing that stands out."
                              },
                              "Anyone acting strange?": {
                                "question": "People are on edge, but that's expected after something like this."
                              }
                            }
                          }
                        }
                      },
                      "Anyone in your gang talk about him recently?": {
                        "question": "Not that I recall, but I can ask around.",
                        "responses": {
                          "Can you ask and get back to me?": {
                            "question": "Sure, I'll see what I can find out."
                          },
                          "Do you think someone knows more?": {
                            "question": "It's possible, people talk, even if they don't realize it."
                          }
                        }
                      }
                    }
                  }
                }
              },
              "Shocked about the murder?": {
                "question": "Yes, and it's a lot to take in.",
                "responses": {
                  "Did you know the victim well?": {
                    "question": "Yes, he was the boss of the rival gang.",
                    "responses": {
                      "But you knew he was in the rival gang?": {
                        "question": "Everyone knew that. He was kind of notorious.",
                        "responses": {
                          "What made him notorious?": {
                            "question": "His ruthlessness and the way he handled his business.",
                            "responses": {
                              "Any particular incidents?": {
                                "question": "Too many to count, he had a reputation for being ruthless."
                              },
                              "How did he handle his business?": {
                                "question": "With an iron fist. He didn't tolerate dissent."
                              }
                            }
                          },
                          "How did people in your gang view him?": {
                            "question": "As a dangerous rival, someone to be cautious around.",
                            "responses": {
                              "Any respect for him?": {
                                "question": "Some respected his power, others feared it."
                              },
                              "Did anyone admire him?": {
                                "question": "A few did, but most kept their distance."
                              }
                            }
                          }
                        }
                      },
                      "Ever had any run-ins with him?": {
                        "question": "A couple of times, but nothing major.",
                        "responses": {
                          "What were those run-ins about?": {
                            "question": "Mostly territorial disputes and business disagreements.",
                            "responses": {
                              "Did they get violent?": {
                                "question": "Sometimes, but it was usually just threats and posturing."
                              },
                              "Any memorable incidents?": {
                                "question": "One time, things almost got out of hand, but we managed to de-escalate."
                              }
                            }
                          },
                          "How did he treat you personally?": {
                            "question": "He was cold and calculating, never personal, always business."
                          }
                        }
                      }
                    }
                  },
                  "Do you have any idea who might have done it?": {
                    "question": "I really don't know. People are saying all sorts of things.",
                    "responses": {
                      "What kind of things?": {
                        "question": "Just the usual gang rivalry stuff. But I try to stay out of that.",
                        "responses": {
                          "Anyone specific mentioned?": {
                            "question": "No specific names, just vague insinuations."
                          },
                          "Any particular motives discussed?": {
                            "question": "Power grabs, old grudges, typical gang stuff."
                          },
                          "Do you think it was someone from your gang?": {
                            "question": "No, it would not bring us any favor."
                             
                          },


                        }
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



export default data;




// "i see that you own a gun?": {
//   question: "Yes.",
//   impactLevel: 1,
//   responses: {
//     "Do you have it with you right now?": {
//       question: "No, I don't carry it with me all the time.",
//       responses: {
//         "Where do you usually keep it?": {
//           question: "I keep it in a safe at home.",
//           responses: {
//             "Can anyone access the safe besides you?": {
//               question: "No, I'm the only one with the combination.",
//             },
//             "When was the last time you checked it?": {
//               question: "Just a couple of days ago.",
//             },
//           },
//         },
//         "When was the last time you used it?": {
//           question: "I haven't used it in months.",
//           responses: {
//             "Why haven't you used it recently?": {
//               question: "No need to. Things have been quiet.",
//             },
//             "Do you have a license for it?": {
//               question: "Yes, it's all legal.",
//             },
//           },
//         },
//       },
//     },
//   },
//     },
//     "Have you ever used it?": {
//       question: "Yes, for self-defense a few times.",
//       responses: {
//         "Do you have records of those incidents?": {
//           question: "Yes, they're all documented with the police.",
//         },
//         "Anyone else know about these incidents?": {
//           question: "Yes, the police and my lawyer know about them.",
//           responses: {
//             "Have you been involved in other criminal activities?": {
//               question: "Look, I've had a few run-ins, but nothing major.",
//               responses: {
//                 "Can you elaborate on those run-ins?": {
//                   question: "Just some minor stuff, like fights and petty thefts.",
//                   responses: {
//                     "Any serious charges or convictions?": {
//                       question: "No serious convictions, just some fines and probation.",
//                     },
//                     "Do you have a criminal record?": {
//                       question: "Yes, but it's mostly minor offenses.",
//                       responses: {
//                         "What kind of minor offenses?": {
//                           question: "Things like disorderly conduct and trespassing.",
//                         },
//                         "Any recent incidents?": {
//                           question: "No, I've been laying low for a while now.",
//                         },
//                       },
//                     },
//                   },
//                 },
//                 "Any gang-related activities?": {
//                   question: "Nothing I can talk about without my lawyer.",
//                   responses: {
//                     "Why do you need a lawyer for that?": {
//                       question: "Because it's sensitive stuff, you know?",
//                     },
//                     "Have you been arrested for gang activities before?": {
//                       question: "Yes, but I've never been convicted.",
//                     },
//                   },
//                 },
//               },
//             },
//             "Do you think your past might make you a suspect?": {
//               question: "Maybe, but I didn't do anything this time.",
//             },
//           },
//         },
//       },
//     },
//     "Is it registered?": {
//       question: "Yes, it's registered in my name.",
//       responses: {
//         "Can you provide the registration details?": {
//           question: "Yes, I have the papers at home.",
//         },
//         "Have you ever had any issues with the registration?": {
//           question: "No, it's always been in good standing.",
//         },
//       },
//     },
//   },