// ----------------- Last server --------------------

console.log("Web Serverni boshlash");
const express = require("express");
const res = require("express/lib/response");
const app = express();


// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });
//use => middleware
//set => setting

// MongoDB chaqirish

const db = require("./server").db();

// 1: Kirish code
app.use(express.static("public")); // brouserlarga public folder ochiq degani.
app.use(express.json()); // kirib kelayotgan data ni objectga ozgartirib beradi.
app.use(express.urlencoded({ extended: true })); // html formdan kelgan ma'lumotlarni qabul qiladi.

// 2: Session code

// 3: Views code
app.set("views", "views"); // folderni korsatyapmiz.
app.set("view engine", "ejs"); // view engine ejs ekanligini korsatyapmiz.

// 4: Routing code
app.post("/create-item", (req, res) => {
    console.log("user entered /create-item");
    // res.send("요청이 성공적으로 처리되었습니다.");
  });
//   const new_reja = req.body.reja;
//   db.collection("plans").insertOne({ reja: new_reja }, (err, data) => {
//     if (err) {
//       console.log(err);
//       res.end("Something went wrong");
//     } else {
//       res.end("successfully added");
//     }
//   });
// });
app.post("/create-item", (req, res) => {
    // TODO: code with db here
  });
  
  app.get("/", function (req, res)  {
    res.render("reja");
  });
  
  app.get("/author", function (req, res) {
    // user 변수를 정의하여 사용하거나, 사용하지 않을 경우 렌더링 시에 제거합니다.
    let user = "Some User"; // 예시로 임시로 'user' 변수를 정의합니다.
    res.render("author", { user: user });
  });
  

// app.get("/", function (req, res) {
//   console.log("user entered /");
//   db.collection("plans")
//     .find()
//     .toArray((err, data) => {
//       if (err) {
//         console.log("Something went wrong");
//       } else {
//         res.render("reja", { items: data });
//       }
//     });
// });

module.exports = app;



















// ---------------------------------- First  server ------------------------------------ 
// const express = require('express');
// console.log("Web Serverni boshlash");
// const app = express();
// const http = require("http");
// const fs = require("fs");

// let user;
// fs.readFile("database/user.json", "utf-8", (err, data) => {
//   if (err) {
//     console.log("ERROR:", err);
//   } else {
//     user = JSON.parse(data);
//   }
// });
// //-------------------- Mongo db connect ------------- 




// // ------------ 1: Kirish code   ------------

// app.use(express.static("public")); // brouserlarga public folder ochiq degani.
// app.use(express.json()); // kirib kelayotgan data ni objectga ozgartirib beradi.
// app.use(express.urlencoded({ extended: true })); // html formdan kelgan ma'lumotlarni qabul qiladi.

// // 2: Session code

// // 3: Views code
// app.set("views", "views"); 
// app.set("view engine", "ejs"); 

// // 4: Routing code
// app.post("/create-item", (req, res) => {
//   // TODO: code with db here

//   // res.json({ test: "success" });
// });
// app.get("/", function (req, res)  {
//   res.render("reja");
// });
// app.get("/author", function (req, res) {
//     res.render("author", { user: user });
//   });

// const server = http.createServer(app);
// let PORT = 3000;
// server.listen(PORT, function () {
//   console.log(`The server is running successfully on port: ${PORT}, http://localhost:${PORT}`
//   );
// });
