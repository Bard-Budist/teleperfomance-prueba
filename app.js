const express = require('express')
const request = require('request')
const app = express()

require('dotenv').config()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});



// Load API 1 - task # 3
app.use('/api/v1/', require('./src/routes/v1/api'));

// Load API 2 - task # 5
app.use('/api/v2/', require('./src/routes/v2/api'));

// Load API 3 - task # 6
app.use('/api/v3/', require('./src/routes/v3/api'));

// Load API 4 - task # 8
app.use('/api/v4/', require('./src/routes/v4/api'));

// manage midleware for catch eeror UnauthorizedError and custom
app.use((err, req, res, next) => {
  if (err.name === 'UnauthorizedError') {
    res.status(401).json({"error" : err.name + ": " + err.message})
  }
})


app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening at http://localhost:${process.env.PORT}`)
})