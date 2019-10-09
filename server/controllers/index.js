const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')

router.get('/api/home/:userId', userPledges)

module.exports = router
