// app setup
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.set(bodyParser.urlencoded({extended: true}));

//RESTful routing setup

// Index (Likely static)
app.get('/', function(req,res){
    res.send("Connection successful");
});

// Biography (Likely static)
app.get('/biography', function(req,res){});

// Contact page (likely static)
app.get('/contact', function(req,res){});


// Skills page - INDEX
app.get('/skills', function(req,res){});
// Skills page - NEW
app.get('/skills/new', function(req,res){});
// Skills page - SHOW
app.get('/skills/:id', function(req,res){});
// Skills page - EDIT
app.get('/skills/:id/edit', function(req,res){});
// Skills page - CREATE
app.post('/skills', function(req,res){});
// Skills page - UPDATE
app.put('/skills/:id', function(req,res){});
// Skills page - DESTROY
app.delete('/skills/:id', function(req,res){});

// Projects page - INDEX 
app.get('/projects', function(req,res){});
// Projects page - NEW
app.get('/projects/new', function(req,res){});
// Projects page - SHOW
app.get('/projects/:id', function(req,res){});
// Projects page - EDIT
app.get('/projects/:id/edit', function(req,res){});
// Projects page - CREATE
app.post('/projects', function(req,res){});
// Projects page - UPDATE
app.put('/projects/:id', function(req,res){});
// Projects page - DESTROY
app.delete('/projects/:id', function(req,res){});

app.get('*', function(req,res){
});



// server start
var PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log("Server started on port "+PORT);
});