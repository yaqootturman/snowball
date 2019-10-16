const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')
const { getCategoryPledges } = require('./getCategoryPledges')

router.get('/api/home/:userId', userPledges)
router.get('/api/action-category/:categoryID', getCategoryPledges)

module.exports = router
