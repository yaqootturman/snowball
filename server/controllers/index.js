const express = require('express')
const router = express.Router()
const getCategoryInfo = require('./getCategoryInfo')
const getNumberOfUserPledges = require('./getNumberOfUserPledges')
const getAllPledges = require('./getAllPledges')
const getPledgesInCategory = require('./getPledgesInCategory')
const getNumberPledgesCategory = require('./getNumberPledgesCategory')
const { getCategoryPledges } = require('./getCategoryPledges')

router.get('/api/dashboard', getCategoryInfo.get)
router.get('/api/dashboard_number_of_pledges/:userId', getNumberOfUserPledges.get)
router.get('/api/dashboard_number_of_all_pledges', getAllPledges.get)
router.get('/api/dasboard_pledges_in_category/:userId', getPledgesInCategory.get)
router.get('/api/dashboard_pledges_category', getNumberPledgesCategory.get)
router.get('/api/action-category/:categoryID', getCategoryPledges)

module.exports = router
