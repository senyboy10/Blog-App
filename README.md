# Blog-App

##This simple blog website allows someone to create a Blog, update, delelete and view.
## This Blog Website is written using:
1. Front End:
    * HTML, CSS, JavaScript
    * Semantic UI (menu (navbar), forms)
2. Back End:
    * node Js
    * express, bodyParser, ejs, 
    * mongoDB (mongoose)

| Name    |     Path   |     HTTP Verb   |    Purpose|Moongose Method|
|---------|------------|-----------------|-----------|---------------|
|index|blogs|Get|show all blogs|Blog.find()|
|New | /blogs/new | Get | Create a new blog form|N/A|
|create|/blogs|POST|Create a new blog, then redirect to all blogs page|Blog.create()|
|Show |/blogs/:id|GET|Show info about one specifc dog|Blog.findById()|
|Edit|blogs/:id/edit|GET|Show edit form for one blog Post|Blog.findById()|
|Update|/blogs/:id|PUT|Update a particular blog Post, then redirect to the show page|Blog.findByIDAndUpdate()|
|Delete|/blogs/:id/|DELTE|Dlete a partiucular thenr redirect to all blogs page (Index)|Blog.findByIdAndRemove()|

