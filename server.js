const { response, request } = require("express");
const expressModule = require("express");

const app = expressModule();
const cors = require("cors");

const Joi = require("joi");

app.use(expressModule.json());

var JsonJobs = require("./Jobs.json");

app.options("/signup", cors());

const Job = JsonJobs;
const SignupUSer = [];

app.get("/", (request, response) => {
  console.log("Server Listeneing at /.......");
  response.header("Access-Control-Allow-Origin", "*");
  response.send(Job);
});

app.post("/signup", (req, res) => {
  console.log("Post Method of signup");
  console.log("Request Body = ", req.body);

  const newjob = {
    FullName: req.body.FullName,
    Email: req.body.Email,
  };

  SignupUSer.push(newjob);

  console.log("List of User = ", SignupUSer);
  res.header("Access-Control-Allow-Origin", "*");
  res.send("Sign up Successfully");
});

app.listen(3000, () => {
  console.log("Server started: Listening at port 3000");
});
