module.exports.examInfo = (req, res) => {
  console.log("examInfo controller called");
  return res.status(200).json({
    message: "examInfo in examInfo controller called",
    data: { api_key: req.params.api_key },
  });
};

module.exports.randomQuestion = (req, res) => {
  console.log("randomQuestion in examInfo controller called");
  console.log(req.body);
  let api_key = req.body.api_key;
  let api_secret = req.body.api_secret;
  let examId = req.body.examId;
  return res.status(200).json({
    message: "randomQuestion controller called",
    data: { api_key, api_secret, examId },
  });
};
