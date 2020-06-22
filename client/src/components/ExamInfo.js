import React, { useState, useEffect } from "react";
import ExamService from "../services/examService";
import "../assets/styles/ExamInfo.scss";
import history from '../services/historyService';

const ExamInfo = () => {
  const [changeVar, setChangeVar] = useState(0);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    getExamStreamInfo();
  }, [changeVar]);

  const getExamStreamInfo = async () => {
    let streamsData = await ExamService.getAllStreamInfo();
    setStreams(streamsData.data);
    console.log(streams);
  };

  const handleNavigateOnPage = (section)=>{
    let newId = section+"Container";
    document.getElementById(newId).scrollIntoView();
  }

  const handleNavigateToRandomQuestion = (examId)=>{
    console.log(examId);
    history.push('/random-question', {examId:examId});
  }

  return (
    <div id="examInfoContainer">
      <div id="examInfoLinkContainer" className="flex-row-center">
        {streams.map((stream, index) => {
          return (
            <div key={index} className="singleLinkContainer flex-col-start" onClick={()=>handleNavigateOnPage(stream.name.replace(/\s/g,''))}>
              <img alt={stream.name+"Img"} className="streamLogo" src={stream.logo.white}></img>
              <span className="nameText streamNameText flex-row-center">
                {stream.name}
              </span>
              <div className="streamExamsContainerLink flex-row-center">
                {stream.exams.map((exam, index) => {
                  return (
                    <div key={index} className="examNameContainerLink">
                      <span className="nameText">{exam.name} | </span>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>

      <div id="examsContainer" className="flex-col-start">
        {streams.map((stream, index) => {
          return (
            <div key={index} className="streamWiseExamContainer flex-col-start" id={stream.name.replace(/\s/g,'')+"Container"}>
              <div className="streamNameText">{stream.name}</div>
              <hr></hr>
              <div className="examsContainerWhole flex-row-start">
                {stream.exams.map((exam, index) => {
                  return (
                    <div key={index} className="singleExamContainer flex-row-start" onClick={()=>handleNavigateToRandomQuestion(exam._id)}>
                      <img alt={exam.name+"Img"} className="examIcon" src={exam.logo}></img>
                      <div className="titleContentContainer flex-col-start">
                        <span className="examNameText">{exam.name}  Questions EQAD</span>
                        <hr></hr>
                        <span>
                          Free Online Test Preparation for 
                          <span className="examNameText2">{exam.name}</span> with
                          official Previous Year Exam Questions
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExamInfo;
