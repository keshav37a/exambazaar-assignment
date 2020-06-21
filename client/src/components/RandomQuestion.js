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

  let handlePrevQuestionLoad = ()=>{
      
  }

  let ExamSection = (props) => {
    let examSection = props.examSection;
    if (examSection === undefined) return <span></span>;
    else {
      return <span className="examSectionText">{" in " + examSection}</span>;
    }
  };

  let ImageOutsideQuestionsArr = (props) => {
    if (props.images === null) {
      return <span></span>;
    }
    let images = props.images.map((image, index) => {
      return <img key={index} alt="question-image" src={image}></img>;
    });
    return images;
  };

  let RenderInputTypeOptions = (props) => {
    let mcqma = props.mcqma;
    let options = props.options;
    let qIndex = props.qIndex;
    let opts = [];
    let type = props.type;
    console.log(mcqma);
    if (type === "numerical") {
      return (
        <div className="singleOptionContainer">
          <input
            className="inputText"
            type="text"
            placeholder="Write Your Answer Here...."
            name={qIndex}
          ></input>
          <button className="inputSubmit" type="submit">
            Mark
          </button>
        </div>
      );
    } else if (!mcqma) {
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
    } else {
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

  if (randomQuestion.question !== undefined) {
    return (
      <div id="randomQuestionContainer">
        <div className="flex-row-start">
          <span className="examNameText inlBlc grow">
            {"EQAD " + randomQuestion.question.exam}
          </span>
          <div className="questionNavigationContainer inlBlc">
            <button className="navButton" id="prevQuestionButton" onClick={handlePrevQuestionLoad}>{"<"}</button>
            <button className="navButton" id="nextQuestionButton" onClick={getRandomQuestionInfo}>{">"}</button>
          </div>
        </div>

        <div>
          <span className="questionNumberText">
            {"Question " + randomQuestion.question._startnumber}
          </span>
          <ExamSection examSection={randomQuestion.question.examsection} />
        </div>

        <hr className="line"></hr>
        <div className="context justText">
          {randomQuestion.question.context}
        </div>
        <ImageOutsideQuestionsArr images={randomQuestion.question.images} />

        {randomQuestion.question.questions.map((question, qIndex) => {
          return (
            <div key={qIndex} className="singleQuestionContainer">
              <ImageOutsideQuestionsArr images={question.images} />
              <div className="questionText">{question.question}</div>
              {question.images.map((image) => {
                return <img></img>;
              })}
              <div>
                <RenderInputTypeOptions
                  mcqma={question.mcqma}
                  options={question.options}
                  qIndex={qIndex}
                  type={question.type}
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
