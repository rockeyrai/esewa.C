const express = require('express')
const dbConnect = require('./database/connector')
const app = express()
const port = process.env.PORT
dbConnect()



app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})