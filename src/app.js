'use strict';

const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const movies = require('./store.js');
const app = express();

app.use(morgan('dev'));
app.use((req, res, next) => {
  next();
});

app.get('/movies', (req, res) => {
  const genre = req.query.genre;
  const country = req.query;
  const avg_vote = req.query;
  res.send(req.query);
  console.log(genre);
});

module.exports = app;