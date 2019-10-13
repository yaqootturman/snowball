
const express = require('express')
const router = express.Router()
const { getCategoryPledges } = require('./getCategoryPledges')

router.get('/api/action-category/:categoryID', getCategoryPledges)

module.exports = router
