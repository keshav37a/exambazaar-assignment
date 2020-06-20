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

module.exports.randomQuestion = (req, res) => {
  let examId = req.body.examId;
  return res.status(200).json({
    message: "randomQuestion in examInfo controller called",
    data: { API_KEY, API_SECRET, examId },
  });
};
