const {
  UpdateUserPledgeEnroll,
  InsertUserPledge,
} = require('../database/queries/confirmUserPledge')
const congratulationPageUrl = '/congratulations'

exports.confirmPledgeToUser = (req, res) => {
  const { userId, pledgeId } = req.params
  Promise.all(
    InsertUserPledge(userId, pledgeId),
    UpdateUserPledgeEnroll(pledgeId)
  )
    .then(res.redirect(congratulationPageUrl))
    .catch(() => res.status(500).json({ err: ' Error' }))
}
