const express = require('express');
const bodyParser = require('body-parser');

const api = express();

api.use(express.static(__dirname + '/public'));
api.use(bodyParser.json());

api.post('/add', (req, res) => {
    console.log(req.body);
    res.send('it works')
});

api.listen(3000, () => {
    console.log('API up and running');
});