const fs = require("fs");

const UserReqHandler = (req, res) => {
  console.log(req.url, req.method);

  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Coding</title></head>");
    res.write("<body><h1>Enyer Your Details:</h1>");
    res.write('<form action="/submit-details" method="POST">');
    res.write(
      '<input type="text" name="username" placeholder="Enter your name"><br>',
    );
    res.write('<label for="female">Female</label>');
    res.write('<input type="radio" id="female" name="gender" value="female">');
    res.write('<label for="male">Male</label>');
    res.write('<input type="radio" id="male" name="gender" value="male">');
    res.write('<br><input type="Submit" value="Submit">');

    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (
    req.url.toLowerCase() === "/submit-details" &&
    req.method == "POST"
  ) {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });

    req.on("end", () => {
      const fullbody = Buffer.concat(body).toString();
      console.log(fullbody);

      const params = new URLSearchParams(fullbody);
      const bodyObject = Object.fromEntries(params);
      console.log(bodyObject);
      // fs.writeFileSync("user.text", JSON.stringify(bodyObject));
      // instead of writefilesync....use writefile instead..here because jb sync m jb tk ye command execute nhi hoga tb tk baki block hoga to preven write just writefilesync
      fs.writeFile("user.txt", JSON.stringify(bodyObject), (error) => {
        console.log("Data writeen successfully");
        res.statusCode = 302;
        res.setHeader("Location", "/");
        return res.end();
      });
    });

    // res.statusCode = 302;
    // res.setHeader("Location", "/"); ye to end ke andr likhna prega async m padha
  }
};

module.exports = UserReqHandler;
