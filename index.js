const express = require('express');
const ejsLayouts = require('express-ejs-layouts');
 const db = require('./models');
const app = express();
const axios = require('axios');

app.use(require('morgan')('dev'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: false }));
app.use(ejsLayouts);

// app.get('/', (req,res) => {
//    // res.send('dfdsfadsfa')
// })

// use req to call api
app.get('/', (req, res) => {
    const dogUrl = 'https://dog.ceo/api/breeds/image/random'
    //use request to call API
    axios.get(dogUrl).then(function (apiResponse) {
        let dog = apiResponse.data;
        // res.send(`<h2>${JSON.stringify(dog)}</h2>`)
        res.render('index', {dog})
    })
})

//need to import all the routes created in routes/dogs.js to use through route /dog (url route)
// app.use('/dog', require('./routes/dog'));
app.use('/dog', require('./routes/dog'));

let server = app.listen(process.env.PORT || 3000, function () {
    console.log(`Listening on ... ${process.env.PORT || 3000}`);
})

module.exports = server;

