// data.js
const data = {
  question:
    "You're investigating a murder case involving Anthony Romano. What's your first question for him?",
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
        "Shocked about the murder?": {
          question: "Yes, it's all over the news, and it's a lot to take in.",
          responses: {
            "Did you know the victim well?": {
              question: "Yes, he was the boss of the rival gang.",
              responses: {
                "But you knew he was in the rival gang?": {
                  question: "Everyone knew that. He was kind of notorious.",
                },
                "Ever had any run-ins with him?": {
                  question: "A couple of times, but nothing major.",
                },
              },
            },
            "Do you have any idea who might have done it?": {
              question: "I really don't know. People are saying all sorts of things.",
              responses: {
                "What kind of things?": {
                  question: "Just the usual gang rivalry stuff. But I try to stay out of that.",
                },
                "Anyone in your gang missing recently?": {
                  question: "Not that I'm aware of. Everyone's accounted for.",
                },
              },
            },
          },
        },
      },
    },


    "i see that you own a gun?": {
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
                  question: "No, I'm the only one with the combination.",
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
              question: "Yes, the police and my lawyer know about them.",
              responses: {
                "Have you been involved in other criminal activities?": {
                  question: "Look, I've had a few run-ins, but nothing major.",
                  responses: {
                    "Can you elaborate on those run-ins?": {
                      question: "Just some minor stuff, like fights and petty thefts.",
                      responses: {
                        "Any serious charges or convictions?": {
                          question: "No serious convictions, just some fines and probation.",
                        },
                        "Do you have a criminal record?": {
                          question: "Yes, but it's mostly minor offenses.",
                          responses: {
                            "What kind of minor offenses?": {
                              question: "Things like disorderly conduct and trespassing.",
                            },
                            "Any recent incidents?": {
                              question: "No, I've been laying low for a while now.",
                            },
                          },
                        },
                      },
                    },
                    "Any gang-related activities?": {
                      question: "Nothing I can talk about without my lawyer.",
                      responses: {
                        "Why do you need a lawyer for that?": {
                          question: "Because it's sensitive stuff, you know?",
                        },
                        "Have you been arrested for gang activities before?": {
                          question: "Yes, but I've never been convicted.",
                        },
                      },
                    },
                  },
                },
                "Do you think your past might make you a suspect?": {
                  question: "Maybe, but I didn't do anything this time.",
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
};


export default data;
