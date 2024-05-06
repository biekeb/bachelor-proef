import React, { useState } from "react";

const SuspectInterview = () => {

  const Questions = {
    Question1: {
      direct: "where were you on the time the murder happened?",
      funny: "hanging out with any chickies?",
      blaming: "you're the one that shot Don at that time?",
    },
    Question2: {
      direct: "the bullets we found on the ground match your gun?",
      funny: "Have you been using your gun for target practice lately?",
      blaming: "You're the one that shot him.",
    },
    Question3: {
      direct: "Do you have anyone that can support your story?",
      funny: "So, who's your alibi, your cat?",
      blaming: "Who's covering for you?",    },
    }    

    const Awnsers = {
      Awnser1: {

      direct: "I was playing cards with the regulars",
      funny: "How is this relevant?",
      blaming: "Don't you dare blaming me for this",
    },
    Awnser2: {

      direct: "More guns have this type of bullet",
      funny: "jada jada",
      blaming: "Don't you dare blaming me for this",
    },
    Awnser3: {
      direct: "Yes, ask anyone present that night",
      funny: "jada jada",
      blaming: "No one, I didn't do this",
    },
    }

    //user get 3 type of questions to aks the suspect. after the user choose a question to ask the suspect will awnser automatically

    function InterviewManagerQustion1(){
      if (Questions.Question1 == Questions.Question1.direct){
        //if user chooses direct suspect will automatically awnser with Awnsers.Awnser1.direct
      }
      else if(Questions.Question1 == Questions.Question1.funny){
        //if user chooses funny suspect will automatically awnser with Awnsers.Awnser1.funny
      }
      else if(Questions.Question1 == Questions.Question1.blaming){
        //if user chooses funny suspect will automatically awnser with Awnsers.Awnser1.blaming
      }
    }

    //after the supect awsners the user is able to ask the new questions and the same logic is aplied here

    function InterviewManagerQustion2(){
      if (Questions.Question2 == Questions.Question2.direct){
        //if user chooses direct suspect will automatically awnser with Awnsers.Awnser2.direct
      }
      else if(Questions.Question2 == Questions.Question2.funny){
        //if user chooses funny suspect will automatically awnser with Awnsers.Awnser2.funny
      }
      else if(Questions.Question2 == Questions.Question2.blaming){
        //if user chooses funny suspect will automatically awnser with Awnsers.Awnser2.blaming
      }
    }

  return (
    <div>
      <h1>hh</h1>
    </div>
  );
};

export default SuspectInterview;
