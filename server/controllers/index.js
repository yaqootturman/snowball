
const express = require('express')
const router = express.Router()
const { getCategoryPledges } = require('./getCategoryPledges')

router.get('/api/action-category/1', getCategoryPledges)

module.exports = router
