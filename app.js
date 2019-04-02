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


//---------------R.F GET Request---------------------
//homepage list all the posts
app.get("/", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { allBlogs: blogs });
        }
    });

});
//home page list all the post
app.get("/blogs", function(req, res) {
    Blog.find({}, function(err, blogs) {
        if (err) {
            console.log(err);
        } else {
            res.render("index", { allBlogs: blogs });
        }
    });

});
// show a new  blog post form
app.get("/blogs/new", function(req, res) {
    res.render("new");
});

//shoow info about one specific blog post
app.get("/blogs/:id", function(req, res) {
    //get the id of the specific blog
    var currBlogId = req.params.id;
    Blog.findById(currBlogId, function(err, foundPost) {
        if (err)
            console.log(err);
        else
            res.render("show", { currentBlog: foundPost })
    });
})

//show edit form for one campground
app.get("/blogs/:id/edit", function(req, res) {

});


//------------------R. F Update Request--------------------

//Update a particular post, then redirect to somewhere
app.put("/blogs/:id", function(req, res) {

});


//-----------------R. F Delete Request--------------------

//delete a particular post, then redirect somewhere
app.delete("/blogs/:id", function(req, res) {

});


//------------------R.F POST Request------------------------

//create a new campground, then redirect to home page
app.post("/blogs", function(req, res) {
    var newBlog = {
        tile: req.bod.title,
        image: req.body.image,
        blogContent: req.body.blogContent,
        created: req.body.created
    }
    Blog.create(newBlog, function(err, newlyCreated) {
        if (err) {
            console.log(err);
        } else {
            console.log(newlyCreated);
            res.redirect("/blog")
        }
    });
});





//---------------LISTEN TO PORT 3000 FOR CONNECTION--
app.listen(port, function() {
    console.log("Blog App server has started");
});