const express = require('express')
const router = express.Router()
const { userPledges } = require('./userPledges')
const { getCategoryPledges } = require('./getCategoryPledges')
const { getPledgePageInfo } = require('./getPledgePageInfo')
const { confirmPledgeToUser } = require('./confirmPledgeToUser')
const { deletePledgeToUser } = require('./deletePledgeToUser')

router.get('/api/home/:userId', userPledges)
router.get('/api/action-category/:categoryID', getCategoryPledges)
router.get('/api/action-category/pledge/:pledgeID', getPledgePageInfo)
router.post('/api/:userId/:pledgeId/addPledge', confirmPledgeToUser)
router.get('/api/:userId/:pledgeId/deletePledge', deletePledgeToUser)

module.exports = router
