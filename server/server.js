const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const creatures = require("./creatures").creatures;

const app = express();

app.use(bodyParser.json());
app.use(cors());

//endpoints

app.get("creatures", (request, response) => {
  response.status(200).send(creatures);
});

app.post("/add-creatures", (request, response) => {
  console.log(request.body);
  creatures.status(200).send(creatures);
});

app.listen(3005, () => {
  console.log("listen on port 3005");
});
