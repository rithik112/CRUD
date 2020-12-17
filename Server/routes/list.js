const express = require('express');
var router = express.Router();

var list = require('../models/list');

router.get('/', (req, res) => {
    list.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error while Retriving List :' + JSON.stringify(err, undefined, 2)); }
    });
});

module.exports = router;