const data = {
  question: "",
  responses: {
    "Where were you at the time of the murder?": {
      question: "I was here with my husband for a meeting with a woman.",
      impactLevel: 10, // more relevant, positive impact
      responses: {
        "Can anyone verify your alibi?": {
          question: "Yes, you can ask the bartender.",
          impactLevel: 8, // relevant, positive impact
        },
        "Who was the woman you were meeting?": {
          question: "Her name is Sarah Jackson. She works at the accounting firm we hired.",
          impactLevel: 10, // more relevant, positive impact
          responses: {
            "What was the purpose of your meeting with Sarah Jackson?": {
              question: "We were discussing our financial statements and tax filings.",
              impactLevel: 10, // more relevant, positive impact
            },
            "Was anyone else present at the meeting besides your husband?": {
              question: "No, it was just me, my husband, and Sarah Jackson.",
              impactLevel: 8, // relevant, positive impact
              responses: {
                "Why did your husband leave during the meeting?": {
                  question: "He said he had an urgent matter to attend to at his office.",
                  impactLevel: 6, // less relevant, positive impact
                },
                "When did your husband leave, and did he seem upset?": {
                  question: "He left around 11 PM. He seemed a bit agitated but didn't explain why.",
                  impactLevel: 8, // relevant, positive impact
                },
              },
            },
          },
        },
        "Did you notice anything suspicious while you were here?": {
          question: "No, I wasn't paying close attention to my surroundings.",
          impactLevel: 4, // less relevant, positive impact
        },
      },
    },

    "You look very nice, why are you so dressed up?": {
      question: "That's quite inappropriate.",
      impactLevel: -20, // inappropriate, negative impact
      responses: {

        "Did you have any interactions with the victim?": {
          question: "Yes, I did.",
          impactLevel: 8, // relevant, positive impact
          responses: {
            "Did anyone see you leaving the venue?": {
              question: "I'm not sure, you'd have to ask the other guests.",
              impactLevel: 6, // less relevant, positive impact
            },
            "Did you notice anyone following you after you left?": {
              question: "No, I didn't see anyone.",
              impactLevel: 6, // less relevant, positive impact
            },
          },
        },
      },
    },
    "Did Don have any enemies that you know of?": {
      question: "Yes, plenty.",
      impactLevel: 10, // more relevant, positive impact
      responses: {
        "Can you name a few?": {
          question: "I can think of a few business rivals.",
          impactLevel: 8, // relevant, positive impact
          responses: {
            "Did he have any recent altercations with these rivals?": {
              question: "Yes, there was a heated argument just last week.",
              impactLevel: 12, // very relevant, high positive impact
            },
            "Do you think any of them would be capable of murder?": {
              question: "I wouldn't be surprised, they are ruthless.",
              impactLevel: 12, // very relevant, high positive impact
            },
          },
        },
        "Did Don ever mention feeling threatened?": {
          question: "Yes, he was always cautious.",
          impactLevel: 10, // more relevant, positive impact
        },
      },
    },

  },
};


export default data;
