const express = require('express')
const router = express.Router()
const getCategoryInfo = require('./getCategoryInfo')

router.get('/api/dashboard', getCategoryInfo.get)

module.exports = router
