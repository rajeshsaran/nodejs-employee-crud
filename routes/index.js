const index = require('express').Router();

index.route('/')
    .get((req, res) => {
        res.render('layouts/employee');
    });

module.exports = index;