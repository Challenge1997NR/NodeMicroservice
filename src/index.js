
const express = require('express')
const app = express()
const port = process.env.PORT  || 8080
const db = require('./db');
const posts = require("./routes/posts")

app.use(express.json())


app.use("/posts",posts)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
