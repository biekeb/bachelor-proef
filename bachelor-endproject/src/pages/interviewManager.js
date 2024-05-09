const manageInterview = (questionKey) => {
    // Logic to handle the interview based on the selected question
    // Here you can set the suspect's answer based on the selected question
    switch (questionKey) {
      case "Question1":
        setSuspectAnswer(Answers.Awnser1);
        break;
      case "Question2":
        setSuspectAnswer(Answers.Awnser2);
        break;
      case "Question3":
        setSuspectAnswer(Answers.Awnser3);
        break;
      default:
        setSuspectAnswer(null);
    }
  };

  const handleQuestionSelect = (questionKey) => {
    setSelectedQuestion(questionKey);
    // Here you can call the function to manage the interview based on the selected question
    manageInterview(questionKey);
  };
