'use strict';

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const movies = require('./store.js');
const app = express();

app.use(morgan('dev'));
app.use((req, res, next) => {

});

app.get('./movies', (req, res) => {

  const genre = req.query;
  const country = req.query;
  const avg_vote = req.query;

  console.log(genre, country, avg_vote);
});

module.exports = app;