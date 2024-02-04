console.log("Web server");
const express = require("express");
const app = express();
const http = require("http"); 

//1 - Kirish code 
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//2 - Session Kodlar:

//3 - view code
app.set("views","views");
app.set("view engine","ejs");

//4 Rounting code
app.get("/", function(req, res){
    res.end("<h1>salom  alex</h1>");
})
app.get("/gift", function(req, res){
    res.end("<h1>salom bu gift page</h1>");
})

const server = http.createServer(app); 
let Port = 3000;
server.listen(Port, function() {
    console.log(`The server runing successfully on port : ${Port}`);
});
