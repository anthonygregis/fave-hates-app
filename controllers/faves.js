var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
    res.render('faves/foods', {title: 'Favorite Foods', foods: ['Pizza', 'Tacos']});
});

router.get('/animals', function(req, res) {
    res.render('faves/animals', {title: 'Favorite Animals', animals: ['Sugar Glider', 'Doggo']})
});

module.exports = router;