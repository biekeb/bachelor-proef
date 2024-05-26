const bartenderInterrogation = {
  question: "You were working at the bar during the night of the murder. Can you tell me what you saw?",
  responses: {

    "Do you recall seeing anyone leaving the bar around the time of the murder?": {
      question: "I didn't notice anyone leaving in a hurry or acting suspiciously.",
      // More questions
      responses: {
        "Did you see anyone enter the bar shortly before or after the murder?": {
          question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
        },
        "Were there any disturbances or unusual incidents during your shift?": {
          question: "No, everything was running smoothly until the incident occurred.",
        },
      },
    },
    "Can you explain the note we found addressed to Isabella Moretti?": {
      question: "Yes, I wrote that note to Isabella. It was just a friendly message, nothing more.",
      "What prompted you to write the note to Isabella?": {
        question: "I noticed she seemed a bit down, so I wanted to cheer her up with a kind gesture.",
      },

    },
    "What is the nature of your relationship with Isabella Moretti?": {
      question: "We're acquaintances. She's been a patron at the bar a few times, but we're not close.",
      // More questions
      responses: {
        "Have you had any personal interactions with Isabella outside of the bar?": {
          question: "No, our interactions have been limited to the bar.",
        },
        "Did you have any reason to believe that Isabella was in distress or trouble on the night of the murder?": {
          question: "No, she appeared to be in good spirits when she was here.",
        },
      },
    },
  },
};

export default bartenderInterrogation;
