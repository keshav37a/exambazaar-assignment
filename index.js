const express = require("express");
const port = 8000;
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));

app.listen(port, (err) => {
  if (err) {
    console.log(`error in listening: ${err}`);
  }
  console.log(`app up and running on port ${port}`);
});
