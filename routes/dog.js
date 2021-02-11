var express = require('express')
var router = express.Router();
const db = require('./../models')
var axios = require('axios')

//GET /dog return a page with favorited dogs
router.get('/', function(req, res) {
    // var gotDog
    db.dogs.findAll()
    .then(function(dbResponse) {
        res.render('dog/index', {dogs: dbResponse})
    }) 
    // res.send('hi')
    //finish this route
})

//receive a dog and add it to the dog datatable and category datatable


// want add to category as a chained promise

module.exports = router;