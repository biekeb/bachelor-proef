import React, { useState } from "react";

const SuspectInterview = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null); // State to track selected question

  const Questions = {
    Question1: {
      direct: "where were you when the murder happened?",
      funny: "hanging out with any chickies?",
      blaming: "did you shoot Don?",
    },
    Question2: {
      direct: "do the bullets we found match your gun?",
      funny: "been doing target practice with your gun?",
      blaming: "you're the shooter, right?",
    },
    Question3: {
      direct: "Do you have an alibi?",
      funny: "So, who's your alibi, your cat?",
      blaming: "Who's covering for you?",
    },
  };

  const Answers = {
    Answer1: {
      direct: "I was playing cards with the regulars.",
      funny: "How is this relevant?",
      blaming: "Don't you dare blame me for this.",
    },
    Answer2: {
      direct: "More guns use that type of bullet.",
      funny: "Blah blah.",
      blaming: "I didn't do it.",
    },
    Answer3: {
      direct: "Yes, ask anyone present that night.",
      funny: "Blah blah.",
      blaming: "No one, I didn't do this.",
    },
  };

  const handleQuestionSelect = (questionKey) => {
    setSelectedQuestion(questionKey); // Set the selected question
  };

  const renderAnswer = () => {
    if (!selectedQuestion) return null; // If no question is selected, don't render an answer

    const question = Questions[selectedQuestion];
    const answer = Answers[`Answer${selectedQuestion.charAt(selectedQuestion.length - 1)}`]; // Get corresponding answer

    // Display the answer based on the selected question type
    return (
      <div>
        <p>Question: {question[selectedQuestion]}</p>
        <p>Answer: {answer[selectedQuestion]}</p>
      </div>
    );
  };

  return (
    <div>
      <h1>Suspect Interview</h1>
      <div>
        <h2>Select a Question:</h2>
        {/* Buttons to select questions */}
        <button onClick={() => handleQuestionSelect("Question1")}>Question 1</button>
        <button onClick={() => handleQuestionSelect("Question2")}>Question 2</button>
        <button onClick={() => handleQuestionSelect("Question3")}>Question 3</button>
      </div>
      {/* Display the answer based on the selected question */}
      {renderAnswer()}
    </div>
  );
};

export default SuspectInterview;
