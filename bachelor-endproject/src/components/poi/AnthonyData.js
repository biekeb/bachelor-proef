// data.js
const data = {
  question:
    "You're investigating a murder case involving Vincent Romano. What's your first question for him?",
  responses: {
    "Where were you on the time of the murder?": {
      question:
        "I was at playing cards the whole night here.",
      impactLevel: 1, 

      responses: {
        "Can anyone confirm your alibi?": {
          question:
            "Yes ask anyone here they will confirm.",

        },
        "What were you doing at 'The Den'?": {
          question: "Just having a few drinks and chatting with friends.",
          // Continue with more questions or end of interrogation
        },
        "Did you see anything suspicious while you were here?": {
          question: "I did see the barman dissapear for a few minutes.",
          // Continue with more questions or end of interrogation
        },
      },
    },

    "Can you explain your criminal record?": {
      question: "I've made mistakes in the past, but I'm not a murderer.",
      impactLevel: 0,
      responses: {
        "Did you have any conflicts with the victim?": {
          question: "He was my boss, how could i ever harm him",
        },
        "Do you own a gun?": {
          question:
            "Yes, I have an M1911, but I swear I didn't use it for the murder.",

            responses: {
              "The bullets found on the ground match you weapon": {
                question: "There is many different type of weapons that use these bullets",
              },
            
            },

          // Continue with more questions or end of interrogation
        },
      },
    },
    "What can you tell me about your whereabouts on the night of the murder?": {
      question:
      "I was at playing cards the whole night here.",
      impactLevel: 1,
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
