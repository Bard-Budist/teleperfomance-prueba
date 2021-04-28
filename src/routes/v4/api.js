
const express = require('express');
const router = express.Router();
const { authoJwt } = require('../../auth/auth');

// import services
const serviceFoo = require('../../services/foo/service');

/**
 * @description GET -> Return names in db with the use services
 * @returns {Object} Return JSON of the data
 */
router.get('/', authoJwt, (res, req) => {
  try {
    serviceFoo.getFooData()
    .then((response) => {
      req.status(200).send(response);
    })
  } catch (error) {
    req.status(500).send({
      'ErrorMessage': error
    });
  }
})

module.exports = router;