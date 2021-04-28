const express = require('express');
const router = express.Router();
const request = require('request');

/**
 * @description GET -> Return user defined in public API
 * @returns {Object} Return JSON of the data
 */
router.get('/', (res, req) => {
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