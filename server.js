const express = require('express');
console.log("Web Serverni boshlash");
const app = express();
const http = require("http");
const fs = require("fs");

let user;
fs.readFile("database/user.json", "utf-8", (err, data) => {
  if (err) {
    console.log("ERROR:", err);
  } else {
    user = JSON.parse(data);
  }
});

// 1: Kirish code
app.use(express.static("public")); // brouserlarga public folder ochiq degani.
app.use(express.json()); // kirib kelayotgan data ni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan kelgan ma'lumotlarni qabul qiladi.

// 2: Session code

// 3: Views code
app.set("views", "views"); 
app.set("view engine", "ejs"); 

// 4: Routing code
app.post("/create-item", (req, res) => {
  // TODO: code with db here

  // res.json({ test: "success" });
});
app.get("/", function (req, res)  {
  res.render("reja");
});
app.get("/author", function (req, res) {
    res.render("author", { user: user });
  });

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
  );
});
