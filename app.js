var express = require('express') ;
var app = express() ;

var path = require('path') ;

// app.get('/', (req, res) => {
//     console.log(__dirname) ;
//     res.sendFile(path.join(__dirname, 'public/index.html')) ;
// })


app.use(express.static(path.join(__dirname, 'public')));






module.exports = app ;