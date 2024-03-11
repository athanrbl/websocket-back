const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send("Home")
})

app.get('/login', (req, res) => {
  res.send("Login") //send data to dynamically load account
})

app.listen(port, () => {
  console.log(`Running on localhost with port ${port}`)
})