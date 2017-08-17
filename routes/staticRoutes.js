var express = require('express');
var router = express.Router();

// Index
router.get('/', function(req,res){
    res.render("home", {styleLink: '/assets/css/home.css'});
});

// Biography
router.get('/biography', function(req,res){
	res.render("biography", {styleLink: '/assets/css/biography.css'});
});

// Contact page
router.get('/contact', function(req,res){
	res.render("contact", {styleLink: '/assets/css/contact.css'});
});

module.exports = router;