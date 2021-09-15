const express = require('express')
const app = express()
const port = process.env.PORT  || 8080
const db = require('./db');
app.use(express.json())
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
