var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine","ejs");

var campgrounds = [
        {name: "Salmon Creek" , image: "https://www.photosforclass.com/download/px_699558"},
        {name: "Dew Point" , image: "https://www.photosforclass.com/download/px_1061640"},
        {name: "Hillbilly" , image: "https://www.photosforclass.com/download/px_1539225"},
        {name: "Salmon Creek" , image: "https://www.photosforclass.com/download/px_699558"},
        {name: "Dew Point" , image: "https://www.photosforclass.com/download/px_1061640"},
        {name: "Hillbilly" , image: "https://www.photosforclass.com/download/px_1539225"},
        {name: "Salmon Creek" , image: "https://www.photosforclass.com/download/px_699558"},
        {name: "Dew Point" , image: "https://www.photosforclass.com/download/px_1061640"},
        {name: "Hillbilly" , image: "https://www.photosforclass.com/download/px_1539225"},
];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function (req, res) {
    res.render("campgrounds", {campgrounds: campgrounds});
});

app.get("/campgrounds/new", function (req, res) {
    res.render("new");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(3000, function(){
    console.log('Server is listening on port 3000');
});