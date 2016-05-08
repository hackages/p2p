const express = require('express');
const stripe = require('stripe')(
  'sk_test_BQokikJOvBiI2HlWgH4olfQ2'
);

const server = express();

server.get('/info', (req, res) => {
  res.send({message: 'app is running'});
});

server.listen(9000, () => {
  console.log('server is running');
});
