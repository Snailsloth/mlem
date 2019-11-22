let express = require("express");
let router = express.Router();
const env = process.env.NODE_ENV || "development";

const axios = require("axios");

/*
cache for requests, 15min
https://www.npmjs.com/package/apicache
*/
let apicache = require("apicache");
let cache = apicache.middleware;

/*git */

router.get("/", function(req, res, next) {
  res.status(200).send(`enter /:userId/:repo`);
});

router.get("/:userId/:repo", cache("0 minutes"), function(req, res, next) {
  let user = req.params.userId;
  let repository = req.params.repo;

  axios
    .get(`https://api.github.com/repos/${user}/${repository}/commits/master`)
    .then(response => {
      let gitResponse = {
        message: response.data.commit.message,
        url: response.data.html_url
      }
      console.log(gitResponse);
      res.json(gitResponse);
    })
    .catch(error => {
      // handle error
      res.status(400).send(error);
    });
});

module.exports = router;
