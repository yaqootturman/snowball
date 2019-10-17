const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')
const { getCategoryPledges } = require('./getCategoryPledges')
const { getPledgePageInfo } = require('./getPledgePageInfo')
const { confirmPledgeToUser } = require('./confirmPledgeToUser')

router.get('/api/home/:userId', userPledges)
router.get('/api/action-category/:categoryID', getCategoryPledges)
router.get('/api/action-category/pledge/:pledgeID', getPledgePageInfo)
router.post('/api/:userId/:pledgeId/addPledge', confirmPledgeToUser)

module.exports = router
