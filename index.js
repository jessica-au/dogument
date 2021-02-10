let express = require('express')
let ejsLayouts = require('express-ejs-layouts')
// let db = require('./models')
let app = express()
let axios = require('axios')

app.set('view engine', 'ejs')
app.use(require('morgan')('dev'))
app.use(express.urlencoded({ extended: false }))
app.use(ejsLayouts)

// app.get('/', (req,res) => {
//    // res.send('dfdsfadsfa')
// })

// use req to call api
app.get('/', (req,res) => {
    const dogUrl = 'https://dog.ceo/api/breeds/list/all'
    //use request to call API
    axios.get(dogUrl).then(function(apiResponse) {
        let dog = apiResponse.data.results;
        res.send(apiResponse.toString())
        res.render('index', apiResponse)
    })
})


let server = app.listen(process.env.PORT || 3000, function() {
    console.log(`Listening on ... ${process.env.PORT || 3000}`);
   })
    
   module.exports = server

