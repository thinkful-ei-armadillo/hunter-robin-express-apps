'use strict';
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const movies = require('./store.js');
console.log(process.env);
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
  // let countries = results.map(el => {
  //   return el.country;
  // });
  // let g1 = results.map(el => {
  //   return el.genre;
  // });

  
  if (genre) {
    if (!['animation', 'drama', 'romantic', 'comedy', 'spy','thriller', 'crime'].includes(genre.toLowerCase())
    ) {
      return res
        .status(400)
        .send('Genres must be one of animation, drama, romantic, comedy etc..');
    }
    results = results.filter(el => el.genre.toLowerCase().includes(genre.toLowerCase()));
  }
 
  if (country) {
    if (!['spain', 'italy', 'united states', 'germany', 'great britain'].includes(country.toLowerCase())) {
      return res
        .status(400)
        .send(
          'Country must be Spain, Italy, United States, Germany, Great Britain'
        );
    }
    results = results.filter(el => el.country.toLowerCase().includes(country.toLowerCase()));
  }
  if (avg_vote) {
    if(avg_vote < 0 || avg_vote > 10){
      return res.status(400).send('average vote must be between 1 and 10');
    }
    results = results.filter(el => el.avg_vote === parseFloat(avg_vote));
  }

  res.send(results);
});

module.exports = app;
