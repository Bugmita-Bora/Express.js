// const http = require("http"); //core modules ..expressm required nhi h ye bina likhe v hojayega
const express = require("express"); //external modules
const runtime = require("./runtime");
const { requestHandler } = require("./user"); //local module
const app = express();
//adding middleware
app.use((req, res, next) => {
  console.log("came in first middleware", req.url, req.method);
  res.send("<p>Welcome to Complete Coding Node.js Series</p>"); //abhi contect type server khud dekhega hme btane ki jruruat nhi already node mein code likha huwa h
  next();
  // agar next likhte to bss ye output ata came in first middleware / GET
});
app.use((req, res, next) => {
  console.log("came in second middleware", req.url, req.method);
});

// const server = http.createServer(app); ahbi req nhi h

const Port = 3003;
app.listen(Port, () => {
  console.log(`Server is running at http://localhost:${Port}`);
});
