const express = require('express');

const server = express();

server.get('/', function(req, res) {
    console.log("Entrei na página");
    res.send('Hello world, Bernardo');
})

server.listen(3000, () => console.log('rodando...'));