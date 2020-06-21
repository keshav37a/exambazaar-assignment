import React, { useState, useEffect } from "react";
import ExamService from "../services/examService";
import "../assets/styles/RandomQuestion.scss";

const RandomQuestion = (props) => {
  console.log("InRandomQuestion");

  let [changeVar, setChangeVar] = useState(0);
  let [randomQuestion, setRandomQuestion] = useState({});
  let examId = props.location.state.examId;

  useEffect(() => {
    getRandomQuestionInfo();
  }, [changeVar]);

  const getRandomQuestionInfo = async () => {
    let randomQuestionData = await ExamService.getRandomQuestion(examId);
    setRandomQuestion(randomQuestionData.data);
    console.log(randomQuestionData.data);
  };

  let ExamSection = (props)=>{
    let examSection = props.examSection;
    if(examSection===undefined)
        return <span></span>
    else{
        return(
            <span className="examSectionText">
                {" in " + examSection}
            </span>
        )
    }
  }

  let RenderInputTypeOptions = (props) => {
    let mcqma = props.mcqma;
    let options = props.options;
    let qIndex = props.qIndex;
    let opts = [];
    console.log(mcqma);
    if (!mcqma) {
      opts = options.map((option, oIndex) => {
        return (
          <div className="singleOptionContainer" key={oIndex}>
            <input
              className="inputRadio"
              type="radio"
              name={qIndex}
              value={option.option}
            ></input>
            <span className="singleOptionText">{option.option}</span>
          </div>
        );
      });
    } 
    else 
    {
      opts = options.map((option, oIndex) => {
        return (
          <div className="singleOptionContainer" key={oIndex}>
            <input
              className="inputRadio"
              type="checkbox"
              name={qIndex}
              value={option.option}
            ></input>
            <span className="singleOptionText">{option.option}</span>
          </div>
        );
      });
    }

    return opts;
  };

  console.log(randomQuestion);

  if (randomQuestion.question != undefined) {
    return (
      <div id="randomQuestionContainer">
        <span className="examNameText">
          {"EQAD " + randomQuestion.question.exam}
        </span>
        <div>
          <span className="questionNumberText">
            {"Question " + randomQuestion.question._startnumber}
          </span>
          <ExamSection examSection={randomQuestion.question.examsection}/>
        </div>

        <hr className="line"></hr>
        <div className="context justText">
          {randomQuestion.question.context}
        </div>
        {randomQuestion.question.questions.map((question, qIndex) => {
          return (
            <div key={qIndex} className="singleQuestionContainer">
              <div className="questionText">{question.question}</div>
              <div>
                <RenderInputTypeOptions
                  mcqma={question.mcqma}
                  options={question.options}
                  qIndex={qIndex}
                />
              </div>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div>LOADING....</div>;
  }
};

export default RandomQuestion;
