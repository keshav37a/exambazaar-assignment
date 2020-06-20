const keys = require("../config/keys");
const API_KEY = keys.keys.api_key;
const API_SECRET = keys.keys.api_secret;

module.exports.examInfo = (req, res) => {
  console.log(keys.keys);
  return res.status(200).json({
    message: "examInfo in examInfo controller called",
    data: API_KEY,
  });
};

module.exports.randomQuestion = (req, res) => {
  console.log("randomQuestion in examInfo controller called");
  console.log(req.body);
  let examId = req.body.examId;
  return res.status(200).json({
    message: "randomQuestion controller called",
    data: { API_KEY, API_SECRET, examId },
  });
};
