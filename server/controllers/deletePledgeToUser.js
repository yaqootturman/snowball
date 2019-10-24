const { deletePledgeToUser, updateUserPledgeEnroll } = require('./../database/queries/deletePledgeToUser')

exports.deletePledgeToUser = (req, res) => {
  const { userId, pledgeId } = req.params

  Promise.all([deletePledgeToUser(userId, pledgeId), updateUserPledgeEnroll(pledgeId)])

    .then(() => {
      res.json({
        success: true,
      })
    })
    .catch(() => res.status(500).json({ err: ' Error' }))
}
