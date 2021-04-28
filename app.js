const express = require('express')
const request = require('request')
const app = express()
require('dotenv').config()

// Load API 1 - task # 3
app.use('/api/v1/', require('./src/routes/v1/api'));

// Load API 2 - task # 5
app.use('/api/v2/', require('./src/routes/v2/api'));

// Load API 3 - task # 6
app.use('/api/v3/', require('./src/routes/v3/api'));

// Load API 4 - task # 8
app.use('/api/v4/', require('./src/routes/v4/api'));

app.listen(process.env.PORT || 3000, () => {
  console.log(`app listening at http://localhost:${port}`)
})