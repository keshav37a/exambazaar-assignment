const keys = require("../config/keys");
const API_KEY = keys.keys.api_key;
const API_SECRET = keys.keys.api_secret;
const BASE_URL = keys.keys.base_url;
const axios = require("axios").default;

module.exports.examInfo = async (req, res) => {
  try {
    let examInfoURL = BASE_URL + "exam-info/" + API_KEY;
    let examInfoData = await axios.get(examInfoURL);

    let streamsArr = examInfoData.data.data.streams;
    let examsArr = examInfoData.data.data.exams;
    
    for(let examObj of examsArr){
        let examStreamId = examObj.stream;
        for(let streamObj of streamsArr){
            let streamId = streamObj._id;
            if(streamId == examStreamId){
                if(streamObj.exams==undefined)
                    streamObj.exams = [];
                streamObj.exams.push(examObj);
            }
        }
    }
    return res.status(200).json(
      streamsArr
    );
  } 
  catch (err) {
    return res.status(500).json({
      message: "Error",
      data: err,
    });
  }
};

module.exports.randomQuestion = async (req, res) => {
  try {
    let randomQuestionURL = BASE_URL + "random-question/";
    let body = {};
    body.api_key = API_KEY;
    body.api_secret = API_SECRET;
    body.examId = req.params.examId;
    if (req.body.questionId != undefined) 
        body.questionId = req.body.questionId;

    let randomQuestionData = await axios({
      method: "post",
      url: randomQuestionURL,
      data: body,
    });
    return res.status(200).json(
        randomQuestionData.data
    );
  } 
  catch (err) {
    return res.status(500).json({
      message: "Error",
      data: err,
    });
  }
};
