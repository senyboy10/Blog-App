var express = require("express"),
    app = express(),
    port = 3000,
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");


mongoose.connect("mongodb://localhost:27017/blogApp", { useNewUrlParser: true });

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



//-----------MONGOOSE/MODEL CONFIG---------------
var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    blogContent: String,
    created: { type: Date, default: Date.now }
});

var Blog = mongoose.model("Blog", blogSchema);

/*
Blog.create({
    title: "testing",
    image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=60",
    blogContent: "Hello this is a blog post"

}, function(err, blog) {
    if (err) {
        console.log(err);
    } else {
        console.log(blog);
    }
})
*/

//---------------RESTFUL ROUTES---------------------
app.get("/", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { allBlogs: blogs });
        }
    });

});

app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { allBlogs: blogs });
        }
    });

});





//---------------LISTEN TO PORT 3000 FOR CONNECTION--
app.listen(port, function() {
    console.log("Blog App server has started");
});