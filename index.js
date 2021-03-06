var express = require('express');
var app = express();
var ejsLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.use(ejsLayouts);

app.get('/', function(req, res) {
    res.render('home');
});

app.use('/faves', require('./controllers/faves'));
app.use('/hates', require('./controllers/hates'));

app.listen(8080)
