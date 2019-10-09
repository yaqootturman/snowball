const express = require('express')
const router = express.Router
const { userPledges } = require('./userPledges')

router.get('/api/home/:user-id', userPledges)

module.exports = router
