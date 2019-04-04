var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../secret')[env];

const axios = require('axios');

const twitter = require('twitter');


var client = new twitter({
  consumer_key: config.twitter.apiKey,
  consumer_secret: config.twitter.apiSecret,
  access_token_key: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret
});





/*
cache for requests, 15min
https://www.npmjs.com/package/apicache
*/
const apicache =  require('apicache');
let cache = apicache.middleware;

/*twitter */

router.get('/', function(req, res, next){
  res.status(200).send(`ok`);
})

router.get('/:screenName', cache('15 minutes'), function(req, res, next){

  let user = req.params.screenName;
  let params = {screen_name: user, count: 1};

  client.get('statuses/user_timeline', params, function(error, tweets, response) {
    if (!error) {
      let cardInfo = {
        username: tweets[0].user.screen_name,
        userimage: tweets[0].user.profile_image_url,
        userLink: `https://twitter.com/${user}`,
        lastTweetDate: tweets[0].created_at,
        lastTweetText: tweets[0].text,
        lastTweetUrl: `https://twitter.com/statuses/${tweets[0].id_str}`
      }
      res.json(cardInfo);
    } else {
      res.status(400).send(error);
    }
  })
})


module.exports = router;
