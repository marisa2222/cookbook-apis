const express = require("express");
const cors = require("cors");
var bodyParser = require('body-parser')

const contentfullService = require("./contentful.service");

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.listen(8010, () => {
  console.log("Cookbook api server is listening on port 8010");
});

app.use(
  cors({
    origin: "*",
  })
);

app.get("/recipes", (req, res) => {
  contentfullService
    .getEntries({
      content_type: "blogPost",
      order: "-fields.publishDate",
    })
    .then((response) => sendResponse(res, response))
    .catch(console.log);
});

app.get("/persons", (req, res) => {
  contentfullService
    .getEntries({
      content_type: "person",
    })
    .then((response) => sendResponse(res, response))
    .catch(console.log);
});

app.get("/about", (req, res) => {
  contentfullService.getAbout()
    .then((response) => sendResponse(res, response))
    .catch(console.log);
});

function sendResponse(res, response) {
  res.send(response);
}
