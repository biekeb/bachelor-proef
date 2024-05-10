// data.js
const data = {
  question:
    "You're investigating a murder case involving Vincent Romano. What's your first question for him?",
  responses: {
    "Where were you on the night of the murder?": {
      question:
        "I was at 'The Den' nightclub, but I left before anything happened.",
      impactLevel: -2, // High impact question

      responses: {
        "Can anyone confirm your alibi?": {
          question:
            "Some witnesses saw me leaving, but others claim I was still inside.",
          // Continue with more questions or end of interrogation
        },
        "What were you doing at 'The Den'?": {
          question: "Just having a few drinks and chatting with friends.",
          // Continue with more questions or end of interrogation
        },
        "Did you see anything suspicious while you were there?": {
          question: "No, everything seemed normal to me.",
          // Continue with more questions or end of interrogation
        },
      },
    },

    "Can you explain your criminal record?": {
      question: "I've made mistakes in the past, but I'm not a murderer.",
      responses: {
        "Did you have any conflicts with the victim?": {
          question: "I barely knew the victim. Why would I want to harm them?",
          // Continue with more questions or end of interrogation
        },
        "Do you own a gun?": {
          question:
            "Yes, I have an M1911, but I swear I didn't use it for the murder.",
          // Continue with more questions or end of interrogation
        },
      },
    },
    "What can you tell me about your whereabouts on the night of the murder?": {
      question:
        "I was at 'The Den' nightclub, but I left before anything happened.",
      responses: {
        "Can anyone confirm your alibi?": {
          question:
            "Some witnesses saw me leaving, but others claim I was still inside.",
          // Continue with more questions or end of interrogation
        },
        "Did you have any interactions with the victim?": {
          question: "No, I didn't even know them.",
          // Continue with more questions or end of interrogation
        },
      },
    },
  },
};

export default data;
