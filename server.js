console.log("Web Serverni boshlash");
const express = require("express");
const app = express();
const http = require("http");

// 1: Kirish 
app.use(express.static("public")); 
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 

// 2: Session code

// 3: Views codetun
app.set("views", "views"); 
app.set("view engine", "ejs"); 

// 4: Routing code
app.post("/create-item", (req, res) => {
  console.log(req.body);
  //console.log(req);
  res.json({ test: "success" });
});
app.get("/", function (req, res) {
  res.render("harid");
});

const server = http.createServer(app);
let PORT = 3006;
server.listen(PORT, function () {
  console.log(`The server is running successfully on port: ${PORT}`);
});
