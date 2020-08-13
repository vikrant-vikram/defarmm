
const express=require("express");
const body= require("body-parser");
const mongoose=require("mongoose");
const Hacker= require("./models/hacker");


// var cookieParser = require('cookie-parser');
// var session = require('express-session');

const app=express();
// let fs = require('fs');


const port=process.env.PORT || 5555;
app.use(body.urlencoded({extended:true}));


//mongoose.connect("mongoosedb://localhost/defarm");
DBSERVER="mongodb+srv://abhishek:abhishek@cluster0-b3zab.mongodb.net/Coda?retryWrites=true&w=majority"
// DBSERVER="mongodb+srv://abhishek:abhishek@cluster0-b3zab.mongodb.net/coda?retryWrites=true&w=majority"
mongoose.connect(DBSERVER, {useNewUrlParser: true,useUnifiedTopology: true});
//-----------------ROUT-------------------

app.get("/", function (req, res) {
    res.send("home")
});
app.get("/details", function (req, res) {
    console.log("traxe")
    res.send("home")
});



app.listen(port,function()
{
    console.log("server has been started on PORT no "+ port);
});

