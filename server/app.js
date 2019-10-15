const path = require('path')
const express = require('express')
const app = express()
const routes = require('./controllers')

app.use(express.static(path.join(__dirname, '..', 'client', 'build')))
app.use(routes)
app.use(express.json())
app.use(express.urlencoded())
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
})

module.exports = app
