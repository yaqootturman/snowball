const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')
const { getCategoryPledges } = require('./getCategoryPledges')
const { getPledgePageInfo } = require('./getPledgePageInfo')

router.get('/api/home/:userId', userPledges)
router.get('/api/action-category/:categoryID', getCategoryPledges)
router.get('/api/action-category/pledge/:pledgeID', getPledgePageInfo)

module.exports = router
