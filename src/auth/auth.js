const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

// Struct to resquest when you need a Token for the APIS
const options = { method: 'POST',
  url: process.env.API_IDENTIFIER_AUTHO,
  headers: { 'content-type': 'application/json' },
  body: `{
    "client_id": "${process.env.CLIENT_ID_AUTHO}",
    "client_secret": "${process.env.CLIENT_SECRET_AUTHO}",
    "audience": "${process.env.API_IDENTIFIER_AUTHO}",
    "grant_type": "client_credentials"}`
  };

// Auth0 API for token
const authoJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${process.env.DOMAIN_AUTHO}/.well-known/jwks.json`
  }),
  
  // Validate the audience and the issuer.
  audience: process.env.API_IDENTIFIER_AUTHO,
  issuer: [`https://${process.env.DOMAIN_AUTHO}/`],
  algorithms: ['RS256']
});



module.exports = {
  authoJwt,
  options
};