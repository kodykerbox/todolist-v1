//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();

let weekdayItems = ["School", "Teach Surfing"];

let weekendItems = ["Sleep", "Do Chores"]

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static("public"));


app.post("/", function(req, res) {
    
    let item = req.body.newItem;
    
    if (req.body.list === "Weekday") {
        weekdayItems.push(item);
        res.redirect("/weekday");
     } 
    
    if (req.body.list === "Weekend") {
        weekendItems.push(item);
        res.redirect("/weekend");
     } 
});

app.get("/weekday", function(req, res){
    res.render("list", {listTitle: "Weekday To Do List", newListItems: weekdayItems})
});

app.get("/weekend", function(req, res){
    res.render("list", {listTitle: "Weekend To Do List", newListItems: weekendItems})
});

app.listen(3000, function() {
console.log ("Server is running on port 3000")
});