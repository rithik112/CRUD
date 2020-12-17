const mongoose = require('mongoose');

const list = mongoose.model('list', {
    name: { type: String },
    position: { type: String },
    area: { type: String },
    salary: { type: Number }
});

module.exports = list;