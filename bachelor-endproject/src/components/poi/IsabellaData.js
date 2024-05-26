const data = {
  question: "You're investigating a murder case involving Isabella Moretti. What's your first question for her?",
  responses: {
    "Where were you at the time of the murder?": {
      question: "I was here with my husband for a meeting with a woman.",
      impactLevel: 1,
      relevance: 5,
      responses: {
        "Can anyone verify your alibi?": {
          question: "Yes, you can ask the bartender.",
          relevance: 4,
        },
        "Who was the woman you were meeting?": {
          question: "Her name is Sarah Jackson. She works at the accounting firm we hired.",
          relevance: 5,
          responses: {
            "What was the purpose of your meeting with Sarah Jackson?": {
              question: "We were discussing our financial statements and tax filings.",
              relevance: 5,
            },
            "Was anyone else present at the meeting besides your husband?": {
              question: "No, it was just me, my husband, and Sarah Jackson.",
              relevance: 4,
              responses: {
                "Why did your husband leave during the meeting?": {
                  question: "He said he had an urgent matter to attend to at his office.",
                  relevance: 3,
                },
                "When did your husband leave, and did he seem upset?": {
                  question: "He left around 11 PM. He seemed a bit agitated but didn't explain why.",
                  relevance: 4,
                },
              },
            },
          },
        },
        "Did you notice anything suspicious while you were here?": {
          question: "No, I wasn't paying close attention to my surroundings.",
          relevance: 2,
        },
      },
    },
    "Can you explain the note from Vincent that we found in your possession?": {
      question: "What about it?",
      impactLevel: 0,
      relevance: 4,
      responses: {
        "Did you and Don have a troubled relationship?": {
          question: "No, I loved him.",
          relevance: 3,
        },
        "What is your relationship with Vincent?": {
          question: "We had a relationship in the past, but we've had little contact recently.",
          relevance: 4,
          responses: {
            "Why did Vincent write you the letter?": {
              question: "Vincent wrote the letter to express remorse and regret about our past relationship.",
              relevance: 3,
            },
            "How did Vincent learn about your altercation with Don?": {
              question: "I'm not sure, but he might have heard about it from someone.",
              relevance: 4,
            },
            "Has Vincent ever shown interest in rekindling your relationship?": {
              question: "No, he hasn't indicated any such interest.",
              relevance: 3,
            },
          },
        },
      },
    },
    "Why are you so dressed up?": {
      question: "That's quite inappropriate.",
      impactLevel: -10,
      relevance: 1,
      responses: {
        "Can you explain the note from Vincent that we found in your possession?": {
          question: "What about it?",
          relevance: 1,
        },
        "Did you have any interactions with the victim?": {
          question: "Yes, I did.",
          relevance: 4,
          responses: {
            "Did anyone see you leaving the venue?": {
              question: "I'm not sure, you'd have to ask the other guests.",
              relevance: 3,
            },
            "Did you notice anyone following you after you left?": {
              question: "No, I didn't see anyone.",
              relevance: 3,
            },
          },
        },
      },
    },
  },
};

export default data;
