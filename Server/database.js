const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CRUD', { useUnifiedTopology: true, useNewUrlParser: true }, (err) => {
    if (!err)
        console.log('Connected to MongoDB..!');
    else
        console.log('Error While Connecting to MongoDB' + JSON.stringify(err, undefinrd, 2));
    
});

module.exports = mongoose;