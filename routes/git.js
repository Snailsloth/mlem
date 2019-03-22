var express = require('express');
var router = express.Router();
const env = process.env.NODE_ENV || 'development';
const config = require('../secret')[env];

const axios = require('axios');

/*git api*/

router.get('/', function(req, res, next){
  res.status(200).send(`enter git name as param`);
})

router.get('/:userId', function(req, res, next){

  let user = req.params.userId;

  axios.get(`https://api.github.com/users/${user}`)
  .then(function (response) {
    // handle success
        // console.log(response.data);
    res.json(response.data);
  })
  .catch(function (error) {
    // handle error
        // console.log(error);
    res.status(400).send(error);
  })
})


module.exports = router;
