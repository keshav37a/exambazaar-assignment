import React, { useState, useEffect } from "react";
import ExamService from "../services/examService";
// import history from "../services/historyService";

const RandomQuestion = (props) => {
  console.log("InRandomQuestion");
  console.log(props.location.state.examId);

  const [changeVar, setChangeVar] = useState(0);
  const [randomQuestion, setRandomQuestion] = useState([]);
  const examId = props.location.state.examId;

  useEffect(() => {
    getRandomQuestionInfo()
  }, [changeVar]);

  const getRandomQuestionInfo = async () => {
    console.log('examId in getRandomQuestionInfo from RandomQuestionComponent ', examId);
    let randomQuestion = await ExamService.getRandomQuestion(examId);
    setRandomQuestion(randomQuestion.data);
    console.log(randomQuestion);
  };

  return <div>Random Question Working</div>;
};

export default RandomQuestion;
