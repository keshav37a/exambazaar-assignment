import React, { useState, useEffect } from "react";
import ExamService from "../services/examService";
import "../assets/styles/ExamInfo.scss";

const ExamInfo = () => {
  const [changeVar, setChangeVar] = useState(0);
  const [streams, setStreams] = useState([]);

  useEffect(() => {
    getExamStreamInfo();
  }, [changeVar]);

  const getExamStreamInfo = async () => {
    let streams = await ExamService.getAllStreamInfo();
    setStreams(streams.data);
    console.log(streams);
  };

  return (
    <div id="examInfoContainer">
      <div id="examInfoLinkContainer" className="flex-row-center">
        {streams.map((stream, index) => {
          return (
            <div className="singleLinkContainer flex-col-start">
              <img className="streamLogo" src={stream.logo.white}></img>
              <span className="nameText streamNameText flex-row-center">
                {stream.name}
              </span>
              <div className="streamExamsContainerLink flex-row-center">
                {stream.exams.map((exam, index) => {
                  return (
                    <div className="examNameContainerLink">
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
            <div className="streamWiseExamContainer flex-col-start">
              <div className="streamNameText">{stream.name}</div>
              <hr></hr>
              <div className="examsContainerWhole flex-row-start">
                {stream.exams.map((exam, index) => {
                  return (
                    <div className="singleExamContainer flex-row-start">
                      <img className="examIcon" src={exam.logo}></img>
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
