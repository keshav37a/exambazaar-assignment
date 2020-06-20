import React, {useState, useEffect} from 'react';
import ExamService from '../services/examService';
import '../assets/styles/ExamInfo.scss';

const ExamInfo = ()=>{

  const [changeVar, setChangeVar] = useState(0);
  const [streams, setStreams] = useState([]);

  useEffect(()=>{
    getExamStreamInfo();
  },[changeVar]);

  const getExamStreamInfo = async ()=>{
    let streams = await ExamService.getAllStreamInfo();
    setStreams(streams.data);
    console.log(streams);
  }

  return (
    <div id="ExamInfoLinkContainer" className="flex-row-center">
      {streams.map((stream, index)=>{
        return(
          <div className="singleLinkContainer flex-col-start">
            <img className="streamLogo" src={stream.logo.white}></img>
            <span className="nameText streamNameText flex-row-center">{stream.name}</span>
            <div class="streamExamsContainer flex-row-center">
              {stream.exams.map((exam, index)=>{
                return(
                  <div className="examNameContainer">
                    <span className="nameText">{exam.name} | </span>
                  </div>
                )
              })}
            </div>
          </div> 
        ) 
      }) }
    </div>
  );
}

export default ExamInfo;
