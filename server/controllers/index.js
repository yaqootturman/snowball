const express = require('express')
const router = express.Router()
const getCategoryInfo = require('./getCategoryInfo')
const getNumberOfUserPledges = require('./getNumberOfUserPledges')

router.get('/api/dashboard', getCategoryInfo.get)
router.get('/api/dashboard_number_of_pledges', getNumberOfUserPledges.get)

module.exports = router
