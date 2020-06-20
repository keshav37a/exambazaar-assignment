const express = require("express");
const router = express.Router();
const examInfoController = require("../../../controllers/exam_info_controller");

router.get("/exam-info", examInfoController.examInfo);
router.post("/random-question", examInfoController.randomQuestion);

module.exports = router;
