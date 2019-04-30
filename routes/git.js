var express = require("express");
var router = express.Router();
const env = process.env.NODE_ENV || "development";

const axios = require("axios");

/*
cache for requests, 15min
https://www.npmjs.com/package/apicache
*/
var apicache = require("apicache");
let cache = apicache.middleware;

/*git */

router.get("/", function(req, res, next) {
  res.status(200).send(`enter /:userId/:repo`);
});

router.get("/:userId/:repo", cache("15 minutes"), function(req, res, next) {
  let user = req.params.userId;
  let repository = req.params.repo;

  axios
    .get(`https://api.github.com/repos/${user}/${repository}/events`)
    .then(response => {
      /* handle success
      "find() method returns the value of the first element
      in the array that satisfies the provided testing function"

      We need PushEvent to get our commit message, so:
      */
      let pushEvent = response.data.find(event => {
        return event.type === "PushEvent";
      });
      res.json(pushEvent.payload);
    })
    .catch(error => {
      // handle error
      res.status(400).send(error);
    });
});

module.exports = router;
