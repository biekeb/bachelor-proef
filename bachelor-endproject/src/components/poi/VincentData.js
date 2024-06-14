const bartenderInterrogation = {
  question: "",
  responses: {

    "Do you recall seeing anyone leaving the bar around the time of the murder?": {
      question: "I didn't notice anyone leaving in a hurry or acting suspiciously.",
      responses: {
        "Did you see anyone enter the bar shortly before or after the murder?": {
          question: "No, it was pretty crowded, so it's hard to remember everyone who came in.",
          responses: {
            "Can you describe anyone who seemed out of place or unfamiliar?": {
              question: "There was a man in a dark coat who looked a bit out of place, but I didn't get a good look at him.",
              responses: {
                "Did the man in the dark coat speak to anyone?": {
                  question: "Not that I noticed. He kept to himself.",
                },
                "How long did the man stay in the bar?": {
                  question: "He was there for about an hour, then left without a word.",
                },
                "Did anyone else notice the man?": {
                  question: "I'm not sure. You might want to ask the regulars.",
                },
              },
            },
            "Did anyone approach Don Moretti that seemed unusual?": {
              question: "A few people greeted him, but no one stood out as unusual.",
              responses: {
                "Can you describe these people?": {
                  question: "Mostly regulars. A mix of business associates and friends.",
                },
                "Was there any tension in Don's interactions?": {
                  question: "He seemed a bit on edge, but that's not unusual for him.",
                },
                "Did anyone leave right after speaking with Don?": {
                  question: "No, they all stayed around for a while.",
                },
              },
            },
          },
        },
        "Were there any disturbances or unusual incidents during your shift?": {
          question: "No, everything was running smoothly until the incident occurred.",
          responses: {
            "Did anyone seem particularly interested in Don Moretti?": {
              question: "A few people were watching him closely, but that’s not unusual for a man of his stature.",
              responses: {
                "Can you name anyone who was watching him?": {
                  question: "Mostly regulars, but I didn't catch specific names.",
                },
                "Did anyone approach Don multiple times?": {
                  question: "No, just the usual greetings and small talk.",
                },
                "Were there any heated conversations involving Don?": {
                  question: "Not really, he kept to himself mostly.",
                },
              },
            },
            "Did Don Moretti behave unusually that night?": {
              question: "He seemed a bit tense, but otherwise normal.",
              responses: {
                "Did he have any meetings scheduled that night?": {
                  question: "Not that I know of, but he often has impromptu meetings.",
                },
                "Was he drinking more than usual?": {
                  question: "No, he had his usual drink.",
                },
                "Did he interact with the staff differently?": {
                  question: "No, he was his usual self with us.",
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
    "Can you explain the note we found addressed to Isabella Moretti?": {
      question: "Yes, I wrote that note to Isabella. It was just a friendly message, nothing more.",
      responses: {
        "What prompted you to write the note to Isabella?": {
          question: "I noticed she seemed a bit down, so I wanted to cheer her up with a kind gesture.",
          responses: {
            "Have you written notes to her before?": {
              question: "No, this was the first time. She usually doesn't need cheering up.",
              responses: {
                "Why did you feel she needed cheering up this time?": {
                  question: "She seemed particularly sad that night, more than usual.",
                },
                "Did she talk to you about her troubles?": {
                  question: "No, she didn't say much, but you could see it in her eyes.",
                },
                "Did Don Moretti know about the note?": {
                  question: "I don't think so, I was discreet about it.",
                },
              },
            },
            "Did Isabella respond to your note?": {
              question: "No, she didn’t mention it to me.",
              responses: {
                "Did you expect her to respond?": {
                  question: "Not really, it was just a small gesture.",
                },
                "Did she seem to react to it in any way?": {
                  question: "She smiled a bit when she read it, but that’s all.",
                },
                "Did anyone else see you give her the note?": {
                  question: "No, I was careful to be discreet.",
                },
              },
            },
            "Do you think anyone else noticed the note?": {
              question: "I doubt it, the bar was busy.",
              responses: {
                "Was there anyone close by when you gave it to her?": {
                  question: "Just a few regulars, but they weren’t paying attention.",
                },
                "Did Isabella seem worried after receiving the note?": {
                  question: "No, she seemed more relaxed actually.",
                },
                "Do you know if she showed the note to anyone?": {
                  question: "I don’t think so, she kept it to herself.",
                },
              },
            },
          },
        },
        "Did Isabella seem distressed when she read the note?": {
          question: "No, she seemed more at ease after reading it.",
          responses: {
            "Did she say anything to you after reading it?": {
              question: "She just thanked me and went back to her drink.",
            },
            "Did anyone else see you giving her the note?": {
              question: "No, it was a private moment.",
            },
            "Did Don Moretti notice your interaction with Isabella?": {
              question: "I don't think he did, he was busy with his own matters.",
            },
          },
        },
      },
    },
    "What is the nature of your relationship with Isabella Moretti?": {
      question: "We're acquaintances. She's been a patron at the bar a few times, but we're not close.",
      responses: {
        "Have you had any personal interactions with Isabella outside of the bar?": {
          question: "No, our interactions have been limited to the bar.",
          responses: {
            "Has she ever confided in you about her relationship with Don Moretti?": {
              question: "Not really, she’s kept things mostly to herself.",
              responses: {
                "Did she ever hint at having problems with Don?": {
                  question: "A few times, but she never went into detail.",
                },
                "Did she seem afraid of Don?": {
                  question: "Sometimes, yes. But she hid it well.",
                },
                "Did she ever ask for your help or advice?": {
                  question: "No, she never directly asked for help.",
                },
              },
            },
            "Did you ever meet Isabella outside the bar?": {
              question: "No, never. Our relationship is strictly within these walls.",
              responses: {
                "Did she ever invite you to meet elsewhere?": {
                  question: "No, she never suggested anything like that.",
                },
                "Did you ever see her outside the bar incidentally?": {
                  question: "Once or twice, but we never interacted outside.",
                },
                "Would you have liked to meet her outside the bar?": {
                  question: "I don't mix business with personal life.",
                },
              },
            },
            "Did you notice any changes in her behavior over time?": {
              question: "She seemed more anxious over the past few weeks.",
              responses: {
                "Did she mention any specific reason for her anxiety?": {
                  question: "No, she kept it to herself.",
                },
                "Did Don's behavior towards her change recently?": {
                  question: "He was more controlling, from what I could see.",
                },
                "Did anyone else notice her change in behavior?": {
                  question: "Some of the regulars did, they mentioned it to me.",
                },
              },
            },
          },
        },
        "Did you have any reason to believe that Isabella was in distress or trouble on the night of the murder?": {
          question: "No, she appeared to be in good spirits when she was here.",
          responses: {
            "Did she interact with Don Moretti that night?": {
              question: "Briefly, but it seemed cordial.",
              responses: {
                "Did their interaction seem different from usual?": {
                  question: "Not really, it was as brief as always.",
                },
                "Did they argue at any point?": {
                  question: "No, everything seemed calm between them.",
                },
                "Did she leave before or after Don Moretti?": {
                  question: "She left before him, if I recall correctly.",
                },
              },
            },
            "Did anyone else seem particularly interested in Isabella that night?": {
              question: "No, she kept a low profile.",
              responses: {
                "Did any of Don's associates speak to her?": {
                  question: "A few, but nothing out of the ordinary.",
                },
                "Did she seem nervous or anxious during the evening?": {
                  question: "Not more than usual.",
                },
                "Did she leave alone or with someone?": {
                  question: "She left alone, as far as I know.",
                },
              },
            },
            "Did you notice any unusual behavior from her?": {
              question: "She seemed a bit tense, but otherwise normal.",
              responses: {
                "Did she mention any plans for after she left the bar?": {
                  question: "No, she didn't mention anything.",
                },
                "Did she receive any calls or messages while at the bar?": {
                  question: "Not that I saw.",
                },
                "Did she interact with anyone else besides Don?": {
                  question: "Just a few regulars, but nothing significant.",
                },
              },
            },
          },
        },
      },
    },
    "How is business going?": {
      question: "Bussiness is going well.",
      responses: {
        "Have you noticed any changes in customer behavior recently?": {
          question: "Not really, most people come here to unwind and have a good time.",
          responses: {
            "Has there been an increase in new customers?": {
              question: "A slight increase, but nothing too significant.",
            },
            "Have any regular customers stopped coming?": {
              question: "No, most of our regulars are still coming in as usual.",
            },
            "Have there been any complaints from customers?": {
              question: "No, we haven't received any notable complaints.",
            },
          },
        },

        "Did anyone approach Don Moretti that seemed unusual?": {
          question: "A few people greeted him, but no one stood out as unusual.",
          responses: {
            "Can you describe these people?": {
              question: "Mostly regulars. A mix of business associates and friends.",
            },
            "Was there any tension in Don's interactions?": {
              question: "He seemed a bit on edge, but that's not unusual for him.",
            },
            "Did anyone leave right after speaking with Don?": {
              question: "No, they all stayed around for a while.",
            },
          },
        },


        
      },
    },

  },
};

export default bartenderInterrogation;
