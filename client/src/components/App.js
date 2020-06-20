import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import ExamService from '../services/examService';

function App() {

  const [changeVar, setChangeVar] = useState(0);

  useEffect(()=>{
    getExamStreamInfo();
  },[changeVar]);

  const getExamStreamInfo = async ()=>{
    let streams = await ExamService.getAllStreamInfo();
    console.log(streams);
  }

  return (
    <h1>Working</h1>
  );
}

export default App;
