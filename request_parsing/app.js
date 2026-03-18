const express = require("express");
//body parser require krna prega
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First", req.url, req.method);
  next();
});
app.use((req, res, next) => {
  console.log("Second", req.url, req.method);
  next();
});
// **********CHECK NOTES WHY THIRD MIDDLEWARE IS COMMENTED OUT*************************
// app.use((req, res, next) => {
//   console.log("Third Middleware", req.url, req.method);
//   res.send("<h1>Welcome to Complete Coding</h1>");
// next();
// res.send() the response is already sent to the browser.So calling next() after that is wrong because Express will try to continue to the next route
// in most cases, when you use res.send() you should NOT call next() afterward.
// });
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
//post se pehle koi  v body leke nhi aya to post k pehel likhte h

app.post("/contact-us", (req, res, next) => {
  console.log("First Handle", req.url, req.method, req.body);
  next();
});
// In normal route handlers, you don't need next() because you directly send a response. But here, the first app.post handler is intentionally NOT sending a response — it's just logging, then passing control forward
//Express matches routes top to bottom, in sequence. When you call next(), you're saying:
// "I'm done with my part, keep going down the chain"
// Without next() in Handler 1, the request would get stuck there — no response sent, no forwarding, just hanging.

app.use(bodyParser.urlencoded());
//isse pehle agr app.post likhte tb kuch nhi log hota kyuki sequence matter ek bana ke dekha upr dekho ..practice set m iske upr wala paragraph nhi tha

app.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.send(`<h1>We will contact you shortly</h1>`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});
