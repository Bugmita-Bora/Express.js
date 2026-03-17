const express = require("express");
const app = express();

app.use((req, res, next) => {
  console.log("First", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Third Middleware", req.url, req.method);
  res.send("<h1>Welcome to Complete Coding</h1>");
  // next();
  // res.send() the response is already sent to the browser.So calling next() after that is wrong because Express will try to continue to the next route
  // in most cases, when you use res.send() you should NOT call next() afterward.
});
app.get("/", (req, res, next) => {
  console.log("Handling / for GET", req.url, req.method);
  res.send(`<h1>Welcome to Express gateway</h1>`);
});
app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.send(
    `<h1>Please give your details here</h1>
    <form action="/contact-us" method="POST">
      <input type="text" name="name" placeholder="Enter your name" />
      <input type="email" name="email" placeholder="Enter your Email" />
      <input type="Submit" />
    </form>
    `,
  );
});
app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method);
  res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
