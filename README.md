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

| Name    |     Path   |     HTTP Verb   |    Purpose|
|---------|------------|-----------------|-----------|
|index|blogs|Get|show all blogs
|New | /blogs/new | Get | Create a new blog form
|create|/blogs|POST|Create a new blog, then redirect to all blogs page|
|Show |/blogs/:id|GET|Show info about one specifc dog|
|Edit|blogs/:id/edit|GET|Show edit form for one blog Post|
|Update|/blogs/:id|PUT|Update a particular blog Post, then redirect to the show page|
|Delete|/blogs/:id/DELTE|Dlete a partiucular thenr redirect to all blogs page (Index)|

