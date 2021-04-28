const express = require('express');
const router = express.Router();
const { authoJwt } = require('../../auth/auth');
const request = require('request');

/**
 * @description GET -> Return users defined in public API with Auth0 Autentification
 * @returns {Object} Return JSON of the data
 */
router.get('/', authoJwt, (res, req) => {
  request('https://jsonplaceholder.typicode.com/users', function (error, response, body) {
    if (error) {
      req.status(500).send({
        'ErrorMessage': error
      });
    }
    req.status(200).send(JSON.parse(body));
  });
})


module.exports = router;