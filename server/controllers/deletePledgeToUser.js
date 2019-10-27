const { deletePledgeToUser, updateUserPledgeEnroll } = require('./../database/queries/deletePledgeToUser')

exports.deletePledgeToUser = (req, res, next) => {
  const { userId, pledgeId } = req.params

  Promise.all([deletePledgeToUser(userId, pledgeId), updateUserPledgeEnroll(pledgeId)])

    .then(() => {
      res.json({
        success: true,
      })
    })
    .catch(error => next(error))
}
