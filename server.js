const express = require('express');
const path = require('path');

const gradesDb = require('./data/grades-db');

const app = express();


// Configure the app (app.set)
app.set('view engine', 'ejs');

// Configure the app (app.set)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(req, res) {
    res.render('home');
  });


app.get('/grades/index', function(req, res) {
    res.render('grades/index', {
        grades: gradesDb.getAll()
    });
});

app.listen(3000, function() {
    console.log('Listening on port 3000');
});