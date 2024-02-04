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
app.post("/create-item", (req, res) =>{
    console.log(req.body); // req ni faqta budy qismi uchun 
    //console.log(req.); // reqesni malumtolarini hammsini ko'rish uchun 
    res.json({test: "success"});

});


app.get("/", function(req, res) {
    res.render("harid");
});


// app.get("/", function(req, res){
//     res.end("<h1>salom b alex</h1>");
// })
// app.get("/gift", function(req, res){
//     res.end("<h1>salom bu gift </h1>" );
// })

const server = http.createServer(app); 
let Port = 3000;
server.listen(Port, function() {
    console.log(`The server is running successfully on port: ${Port}`);
});