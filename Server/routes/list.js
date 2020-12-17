const express = require('express');
var router = express.Router();

var list = require('../models/list');

router.get('/', (req, res) => {
    list.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error while Retriving List :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var lis = new list({
        name: req.body.name,
        position: req.body.position,
        area: req.body.area,
        salary: req.body.salary,
    });
    lis.save((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error while Saving the List :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;