const express = require("express");
const runtime = require("./runtime");
const { requestHandler } = require("./user");
module;

const app = express();
//adding path
app.use("/", (req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  // res.send("<p>Welcome to Complete Coding Node.js Series</p>");
  next();
});
app.use("/submit-details", (req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
  res.send("<p>Welcome to My learning of express js series</p>");
});
app.use("/", (req, res, next) => {
  console.log("came in another middleware", req.url, req.method);
  res.send("<p>came from another middleware</p>");
  next();
});

// pehel url m jake submit-detaila kia tb dono chla first v second v kyu since jo isse pehle tha "/"universal ye / ya iske bad jo v h  wo v chlega isiliye 2ono print huwa

// but agr pehel / kro to pehla to huwa bt second nhi

const Port = 3003;
app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
