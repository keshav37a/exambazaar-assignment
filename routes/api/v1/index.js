const express = require("express");
const router = express.Router();

router.use("/coding-round", require("./coding_round"));

module.exports = router;
