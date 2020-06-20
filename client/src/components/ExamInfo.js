import React, {useState, useEffect} from 'react';
import ExamService from '../services/examService';

const ExamInfo = ()=>{

  const [changeVar, setChangeVar] = useState(0);

  useEffect(()=>{
    getExamStreamInfo();
  },[changeVar]);

  const getExamStreamInfo = async ()=>{
    let streams = await ExamService.getAllStreamInfo();
    console.log(streams);
  }

  return (
    <div>Content</div>
  );
}

export default ExamInfo;
