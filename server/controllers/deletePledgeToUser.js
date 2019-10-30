const { deletePledgeToUser, updateUserPledgeEnroll, checkPledgeIfDeleted } = require('./../database/queries/deletePledgeToUser')

exports.deletePledgeToUser = (req, res, next) => {
  const { userId, pledgeId } = req.params
  const pledgePageUrl = `/home/${userId}`

  checkPledgeIfDeleted(userId, pledgeId).then(result => {
    if (!result.length) {
      res.status(403).json({
        redirectUrl: pledgePageUrl,
        message: 'You already deleted this pledge!',
      })
    } else {
      Promise.all([deletePledgeToUser(userId, pledgeId), updateUserPledgeEnroll(pledgeId)])

        .then(() => {
          res.json({
            success: true,
          })
        })
        .catch(error => next(error))
    }
  }

  )
}
