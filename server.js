'use strict;'

require('dotenv').config();
const express = require('express');
const app = express();

let PORT = process.env.PORT || 4002;

app.get('/', (req, res, next) => {
  res.status(200).send('Welcome to our server');
});

app.get('/greeting', (req, res, next) => {
  let name = req.query.name;
  if (name) {
    res.status(200).send(`Hi ${name}! Welcome to our server!`);
  } else {
    res.status(200).send(`Hi Guest! Welcome to our server!`);
  }
});

app.listen(PORT, () => console.log(`Connecting on Port: ${PORT}`));