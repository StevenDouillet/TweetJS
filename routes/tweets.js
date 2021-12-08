const express = require('express');
const router = express.Router();
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');

let tweets = JSON.parse(fs.readFileSync('./public/json/tweets.json'));

router.get('/', (req, res, next) => {
  res.render('tweets', { tweets });
});

router.get('/new', (req, res) => {
  res.render('newTweet', {});
});

router.get('/:id', (req, res) => {
  const id = req.params.id;

  const tweet = tweets.find((elem) => {
    return elem.id === id;
  });

  if(tweet === undefined || tweet == null) {
    const error = {
      'status': '404',
      'stack': 'tweet-not-found'
    }
    res.render('error', { error });
  } else {
    res.render('tweet', { tweet });
  }
});

router.post('/', (req, res) => {
  const tweet = req.body;
  tweet.id = uuidv4();
  tweets.push(tweet);
  res.redirect('/tweets');
});

module.exports = router;
