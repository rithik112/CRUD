const express = require('express');
var router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;

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

router.get('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No Record Found : ${req.params.id}`);

    list.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log('Error in Retriving list :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;