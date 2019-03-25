const env = process.env.NODE_ENV || 'development';
const config = require('./secret')[env];
const twitter = require('twitter');

/*
cache for requests, 15min
https://www.npmjs.com/package/apicache
*/
var apicache =  require('apicache');
let cache = apicache.middleware;


var client = new twitter({
  consumer_key: config.twitter.apiKey,
  consumer_secret: config.twitter.apiSecret,
  access_token_key: config.twitter.accessToken,
  access_token_secret: config.twitter.accessTokenSecret
});

var params = {screen_name: 'SnailslothPug', count: 1};
client.get('statuses/user_timeline', params,  function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
    let cardInfo = {
      username: tweets[0].user.screen_name,
      userimage: tweets[0].user.profile_image_url,
      userLink: `https://twitter.com/` + username,
      lastTweetDate: tweets[0].created_at,
      lastTweetText: tweets[0].text,
    }
    console.log(cardInfo);
  }
});
