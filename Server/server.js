const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000
const cors = require('cors');

const { mongoose } = require('./database.js');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.send("Hey It's me Server...!")
})

app.listen(PORT, () => console.log('Server is Up on Port : ' + PORT));