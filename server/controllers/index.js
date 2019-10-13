const express = require('express')
const router = express.Router()
const getCategoryInfo = require('./getCategoryInfo')
const getNumberOfUserPledges = require('./getNumberOfUserPledges')
const getAllPledges = require('./getAllPledges')

router.get('/api/dashboard', getCategoryInfo.get)
router.get('/api/dashboard_number_of_pledges/:userId', getNumberOfUserPledges.get)
router.get('/api/dashboard_number_of_all_pledges', getAllPledges.get)

module.exports = router
