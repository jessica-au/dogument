var express = require('express')
var router = express.Router();
//const db = require('./../models')
var axios = require('axios')

router.get('/', function(req, res) {
    var gotDog
    db.dog.findAll()
})