import React, { useState } from "react";

const SuspectInterview = () => {
  const [investigationMeter, setInvestigationMeter] = useState(50); // Starting investigation meter
  const [questionIndex, setQuestionIndex] = useState(0); // Tracks the index of the current question
  const [questions, setQuestions] = useState([
    {
      direct: "where were you on the time the murder happened?",
      funny: "hanging out with any chickies?",
      blaming: "you're the one that shot Don at that time?",
    },
    {
      direct: "the bullets we found on the ground match your gun?",
      funny: "Have you been using your gun for target practice lately?",
      blaming: "You're the one that shot him.",
    },
    {
      direct: "Do you have anyone that can support your story?",
      funny: "So, who's your alibi, your cat?",
      blaming: "Who's covering for you?",
    },
  ]);
  const [answers, setAnswers] = useState([
    {
      direct: "I was playing cards with the regulars",
      funny: "How is this relevant?",
      blaming: "Don't you dare blaming me for this",
    },
    {
      direct: "More guns have this type of bullet",
      funny: "N/A",
      blaming: "Don't you dare blaming me for this",
    },
    {
      direct: "Yes, ask anyone present that night",
      funny: "N/A",
      blaming: "No one, I didn't do this",
    },
  ]);

  // Function to handle the suspect's answer
  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
    // Update the investigation meter based on the answer
    if (answer.blaming) {
      setInvestigationMeter(investigationMeter - 10);
    } else {
      setInvestigationMeter(investigationMeter + 10);
    }
    // Move to the next question
    setQuestionIndex(questionIndex + 1);
  };

  // Render the questions and input field
  return (
    <div>
      {questionIndex < questions.length ? (
        <div>
          <p>Investigation Meter: {investigationMeter}</p>
          <p>{questions[questionIndex].direct}</p>
          <input
            type="text"
            onChange={(e) =>
              handleAnswer({
                ...answers[questionIndex],
                direct: e.target.value,
              })
            }
            value={answers[questionIndex].direct}
          />
          <br />
          <button
            onClick={() =>
              handleAnswer({ ...answers[questionIndex], funny: "N/A" })
            }
          >
            Funny
          </button>
          <button
            onClick={() =>
              handleAnswer({ ...answers[questionIndex], blaming: "N/A" })
            }
          >
            Blaming
          </button>
        </div>
      ) : (
        <p>Interview complete. Investigation Meter: {investigationMeter}</p>
      )}
    </div>
  );
};

export default SuspectInterview;
