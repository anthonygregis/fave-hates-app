var express = require('express');
var router = express.Router();

router.get('/foods', function(req, res) {
    res.render('hates/foods', {title: 'Hate Foods', foods: ['coconut', 'avocado']});
});

router.get('/animals', function(req, res) {
    res.render('hates/animals', {title: 'Hate Animals', animals: ['Snakes', 'Sharks']})
});

module.exports = router;