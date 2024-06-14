const data = {
  question: "",
  responses: {
    "Do you recall seeing anyone leaving the bar around the time of the murder?": {
      question: "I didn't notice anyone leaving in a hurry or acting suspiciously.",
      impactLevel: 10,
      responses: {
        "Did you see anyone enter the bar shortly before or after the murder?": {
          question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
          impactLevel: 5,
          responses: {
 
            "Did anyone approach Don Moretti that seemed unusual?": {
              question: "A few people greeted him, but no one stood out as unusual.",
              impactLevel: 5,
              responses: {
                "Can you describe these people?": {
                  question: "Mostly regulars. A mix of business associates and friends.",
                  impactLevel: 2,
                },
                "Was there any tension in Don's interactions?": {
                  question: "He seemed a bit on edge, but that's not unusual for him.",
                  impactLevel: 2,
                },
                "Did anyone leave right after speaking with Don?": {
                  question: "No, they all stayed around for a while.",
                  impactLevel: 2,
                },
              },
            },
          },
        },
        "Were there any disturbances or unusual incidents during your shift?": {
          question: "No, everything was running smoothly until the incident occurred.",
          impactLevel: -5,
          responses: {
            "Did anyone seem particularly interested in Don Moretti?": {
              question: "A few people were watching him closely, but that’s not unusual for a man of his stature.",
              impactLevel: 5,
              responses: {
                "Can you name anyone who was watching him?": {
                  question: "Mostly regulars, but I didn't catch specific names.",
                  impactLevel: -5,
                },
                "Did anyone approach Don multiple times?": {
                  question: "No, just the usual greetings and small talk.",
                  impactLevel: 5,
                },
                "Were there any heated conversations involving Don?": {
                  question: "Not really, he kept to himself mostly.",
                  impactLevel: 2,
                },
              },
            },
            "Did Don Moretti behave unusually that night?": {
              question: "He seemed a bit tense, but otherwise normal.",
              impactLevel: 5,
              responses: {
                "Did he have any meetings scheduled that night?": {
                  question: "Not that I know of, but he often has impromptu meetings.",
                  impactLevel: 5,
                },
                "Was he drinking more than usual?": {
                  question: "No, he had his usual drink.",
                  impactLevel: -5,
                },
                "Did he interact with the staff differently?": {
                  question: "No, he was his usual self with us.",
                  impactLevel: -5,
                },
              },
            },
            "Was there any conflict between customers that night?": {
              question: "There were a few minor arguments, but nothing serious.",
              responses: {
                "Can you describe the arguments?": {
                  question: "Just the usual bar disputes, nothing that involved Don.",
                },
                "Did any of the arguments involve people close to Don?": {
                  question: "No, they were mostly between strangers.",
                },
                "Were the police called for any of these disputes?": {
                  question: "No, we handled them in-house.",
                },
              },
            },
          },
        },
      },
    },
    "How has business been lately?": {
      question: "It's been up and down. You know how it is in this line of work.",
      impactLevel: -10,
      responses: {
        "Any notable customers recently?": {
          question: "We get all sorts, but no one really stands out.",
          impactLevel: -5,
          responses: {
            "Did you see anyone enter the bar shortly before or after the murder?": {
              question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
              impactLevel: -5,
              responses: {
                "Can you describe anyone who seemed out of place or unfamiliar?": {
                  question: "There was a man in a dark coat who looked a bit out of place, but I didn't get a good look at him.",
                  impactLevel: 10,
                  responses: {
                    "Did the man in the dark coat speak to anyone?": {
                      question: "Not that I noticed. He kept to himself.",
                      impactLevel: 5,
                    },
                    "How long did the man stay in the bar?": {
                      question: "He was there for about an hour, then left without a word.",
                      impactLevel: 5,
                    },
                    "Did anyone else notice the man?": {
                      question: "I'm not sure. You might want to ask the regulars.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did anyone approach Don Moretti that seemed unusual?": {
                  question: "A few people greeted him, but no one stood out as unusual.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe these people?": {
                      question: "Mostly regulars. A mix of business associates and friends.",
                      impactLevel: 5,
                    },
                    "Was there any tension in Don's interactions?": {
                      question: "He seemed a bit on edge, but that's not unusual for him.",
                      impactLevel: 5,
                    },
                    "Did anyone leave right after speaking with Don?": {
                      question: "No, they all stayed around for a while.",
                      impactLevel: -5,
                    },
                  },
                },
              },
            },
            "Were there any disturbances or unusual incidents during your shift?": {
              question: "No, everything was running smoothly until the incident occurred.",
              impactLevel: -5,
              responses: {
                "Did anyone seem particularly interested in Don Moretti?": {
                  question: "A few people were watching him closely, but that’s not unusual for a man of his stature.",
                  impactLevel: 5,
                  responses: {
                    "Can you name anyone who was watching him?": {
                      question: "Mostly regulars, but I didn't catch specific names.",
                      impactLevel: -5,
                    },
                    "Did anyone approach Don multiple times?": {
                      question: "No, just the usual greetings and small talk.",
                      impactLevel: -5,
                    },
                    "Were there any heated conversations involving Don?": {
                      question: "Not really, he kept to himself mostly.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did Don Moretti behave unusually that night?": {
                  question: "He seemed a bit tense, but otherwise normal.",
                  impactLevel: 5,
                  responses: {
                    "Did he have any meetings scheduled that night?": {
                      question: "Not that I know of, but he often has impromptu meetings.",
                      impactLevel: 5,
                    },
                    "Was he drinking more than usual?": {
                      question: "No, he had his usual drink.",
                      impactLevel: -5,
                    },
                    "Did he interact with the staff differently?": {
                      question: "No, he was his usual self with us.",
                      impactLevel: -5,
                    },
                  },
                },
                "Was there any conflict between customers that night?": {
                  question: "There were a few minor arguments, but nothing serious.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe the arguments?": {
                      question: "Just the usual bar disputes, nothing that involved Don.",
                      impactLevel: -5,
                    },
                    "Did any of the arguments involve people close to Don?": {
                      question: "No, they were mostly between strangers.",
                      impactLevel: -5,
                    },
                    "Were the police called for any of these disputes?": {
                      question: "No, we handled them in-house.",
                      impactLevel: -5,
                    },
                  },
                },
              },
            },
          },
        },
        "How do you manage with all the stress?": {
          question: "I just take it one day at a time. A good drink at the end of the day helps.",
          impactLevel: -5,
          responses: {
            "Did you see anyone enter the bar shortly before or after the murder?": {
              question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
              impactLevel: -5,
              responses: {
                "Can you describe anyone who seemed out of place or unfamiliar?": {
                  question: "There was a man in a dark coat who looked a bit out of place, but I didn't get a good look at him.",
                  impactLevel: 10,
                  responses: {
                    "Did the man in the dark coat speak to anyone?": {
                      question: "Not that I noticed. He kept to himself.",
                      impactLevel: 5,
                    },
                    "How long did the man stay in the bar?": {
                      question: "He was there for about an hour, then left without a word.",
                      impactLevel: 5,
                    },
                    "Did anyone else notice the man?": {
                      question: "I'm not sure. You might want to ask the regulars.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did anyone approach Don Moretti that seemed unusual?": {
                  question: "A few people greeted him, but no one stood out as unusual.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe these people?": {
                      question: "Mostly regulars. A mix of business associates and friends.",
                      impactLevel: 5,
                    },
                    "Was there any tension in Don's interactions?": {
                      question: "He seemed a bit on edge, but that's not unusual for him.",
                      impactLevel: 5,
                    },
                    "Did anyone leave right after speaking with Don?": {
                      question: "No, they all stayed around for a while.",
                      impactLevel: -5,
                    },
                  },
                },
              },
            },
            "Were there any disturbances or unusual incidents during your shift?": {
              question: "No, everything was running smoothly until the incident occurred.",
              impactLevel: -5,
              responses: {
                "Did anyone seem particularly interested in Don Moretti?": {
                  question: "A few people were watching him closely, but that’s not unusual for a man of his stature.",
                  impactLevel: 5,
                  responses: {
                    "Can you name anyone who was watching him?": {
                      question: "Mostly regulars, but I didn't catch specific names.",
                      impactLevel: -5,
                    },
                    "Did anyone approach Don multiple times?": {
                      question: "No, just the usual greetings and small talk.",
                      impactLevel: -5,
                    },
                    "Were there any heated conversations involving Don?": {
                      question: "Not really, he kept to himself mostly.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did Don Moretti behave unusually that night?": {
                  question: "He seemed a bit tense, but otherwise normal.",
                  impactLevel: 5,
                  responses: {
                    "Did he have any meetings scheduled that night?": {
                      question: "Not that I know of, but he often has impromptu meetings.",
                      impactLevel: 5,
                    },
                    "Was he drinking more than usual?": {
                      question: "No, he had his usual drink.",
                      impactLevel: -5,
                    },
                    "Did he interact with the staff differently?": {
                      question: "No, he was his usual self with us.",
                      impactLevel: -5,
                    },
                  },
                },
                "Was there any conflict between customers that night?": {
                  question: "There were a few minor arguments, but nothing serious.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe the arguments?": {
                      question: "Just the usual bar disputes, nothing that involved Don.",
                      impactLevel: -5,
                    },
                    "Did any of the arguments involve people close to Don?": {
                      question: "No, they were mostly between strangers.",
                      impactLevel: -5,
                    },
                    "Were the police called for any of these disputes?": {
                      question: "No, we handled them in-house.",
                      impactLevel: -5,
                    },
                  },
                },
              },
            },
          },
        },
        "What changes have you seen in the bar over the years?": {
          question: "The crowd has changed a bit. We get more younger folks now.",
          impactLevel: -5,
          responses: {
            "Did you see anyone enter the bar shortly before or after the murder?": {
              question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
              impactLevel: -5,
              responses: {
                "Can you describe anyone who seemed out of place or unfamiliar?": {
                  question: "There was a man in a dark coat who looked a bit out of place, but I didn't get a good look at him.",
                  impactLevel: 10,
                  responses: {
                    "Did the man in the dark coat speak to anyone?": {
                      question: "Not that I noticed. He kept to himself.",
                      impactLevel: 5,
                    },
                    "How long did the man stay in the bar?": {
                      question: "He was there for about an hour, then left without a word.",
                      impactLevel: 5,
                    },
                    "Did anyone else notice the man?": {
                      question: "I'm not sure. You might want to ask the regulars.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did anyone approach Don Moretti that seemed unusual?": {
                  question: "A few people greeted him, but no one stood out as unusual.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe these people?": {
                      question: "Mostly regulars. A mix of business associates and friends.",
                      impactLevel: 5,
                    },
                    "Was there any tension in Don's interactions?": {
                      question: "He seemed a bit on edge, but that's not unusual for him.",
                      impactLevel: 5,
                    },
                    "Did anyone leave right after speaking with Don?": {
                      question: "No, they all stayed around for a while.",
                      impactLevel: -5,
                    },
                  },
                },
              },
            },
            "Were there any disturbances or unusual incidents during your shift?": {
              question: "No, everything was running smoothly until the incident occurred.",
              impactLevel: -5,
              responses: {
                "Did anyone seem particularly interested in Don Moretti?": {
                  question: "A few people were watching him closely, but that’s not unusual for a man of his stature.",
                  impactLevel: 5,
                  responses: {
                    "Can you name anyone who was watching him?": {
                      question: "Mostly regulars, but I didn't catch specific names.",
                      impactLevel: -5,
                    },
                    "Did anyone approach Don multiple times?": {
                      question: "No, just the usual greetings and small talk.",
                      impactLevel: -5,
                    },
                    "Were there any heated conversations involving Don?": {
                      question: "Not really, he kept to himself mostly.",
                      impactLevel: -5,
                    },
                  },
                },
                "Did Don Moretti behave unusually that night?": {
                  question: "He seemed a bit tense, but otherwise normal.",
                  impactLevel: 5,
                  responses: {
                    "Did he have any meetings scheduled that night?": {
                      question: "Not that I know of, but he often has impromptu meetings.",
                      impactLevel: 5,
                    },
                    "Was he drinking more than usual?": {
                      question: "No, he had his usual drink.",
                      impactLevel: -5,
                    },
                    "Did he interact with the staff differently?": {
                      question: "No, he was his usual self with us.",
                      impactLevel: -5,
                    },
                  },
                },
                "Was there any conflict between customers that night?": {
                  question: "There were a few minor arguments, but nothing serious.",
                  impactLevel: -5,
                  responses: {
                    "Can you describe the arguments?": {
                      question: "Just the usual bar disputes, nothing that involved Don.",
                      impactLevel: -5,
                    },
                    "Did any of the arguments involve people close to Don?": {
                      question: "No, they were mostly between strangers.",
                      impactLevel: -5,
                    },
                    "Were the police called for any of these disputes?": {
                      question: "No, we handled them in-house.",
                      impactLevel: -5,
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
