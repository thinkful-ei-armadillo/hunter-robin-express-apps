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
  const country = req.query.country;
  const avg_vote = req.query.avg_vote;
  let results = movies;
  
  if(genre){
    results = results.filter(el => el.genre.includes(genre));
  }
  if(country){
    results = results.filter(el => el.country.includes(country));
    
  }
  if(avg_vote){
    results = results.filter(el => el.avg_vote === parseFloat(avg_vote));
  }
  
  res.send(results);

 
});

module.exports = app;