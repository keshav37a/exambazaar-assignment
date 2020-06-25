const express = require("express");
const port = process.env.PORT || 8000;
const app = express();
const bodyParser = require("body-parser");
const axios = require("axios");
const path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", require("./routes/index"));

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));
  app.get('*', (req, res)=>{
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, (err) => {
  if (err) {
    console.log(`error in listening: ${err}`);
  }
  console.log(`app up and running on port ${port}`);
});
