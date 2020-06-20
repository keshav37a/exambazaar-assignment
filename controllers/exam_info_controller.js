const keys = require("../config/keys");
const API_KEY = keys.keys.api_key;
const API_SECRET = keys.keys.api_secret;
const BASE_URL = keys.keys.base_url;
const axios = require("axios").default;

module.exports.examInfo = async (req, res) => {
  try {
    let examInfoURL = BASE_URL + "exam-info/" + API_KEY;
    let examInfoData = await axios.get(examInfoURL);
    return res.status(200).json({
      message: "examInfo in examInfo controller called",
      data: examInfoData.data,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Error",
      data: err,
    });
  }
};

module.exports.randomQuestion = async (req, res) => {
  try {
    let examId = req.body.examId;
    let randomQuestionURL = BASE_URL + "random-question/";
    let randomQuestionData = await axios({
      method: "post",
      url: randomQuestionURL,
      data: {
        api_key: API_KEY,
        api_secret: API_SECRET,
        examId: examId,
      },
    });
    return res.status(200).json(randomQuestionData.data);
  } catch (err) {
    return res.status(500).json({
      message: "Error",
      data: err,
    });
  }
};
