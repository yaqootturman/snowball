const {
  UpdateUserPledgeEnroll,
  InsertUserPledge,
  CheckIfUserConfirm,
} = require('../database/queries/confirmUserPledge')

exports.confirmPledgeToUser = (request, response) => {
  const { userId, pledgeId } = request.params
  const congratulationPageUrl = '/congratulations'
  const confirmationPageUrl = `/${userId}/${pledgeId}/addPledge`

  CheckIfUserConfirm(userId, pledgeId).then(res => {
    if (res.length > 0) {
      response.status(200).json({
        redirectUrl: confirmationPageUrl,
        message: 'You are already confirmed this pledge :)',
      })
    } else {
      Promise.all(
        [InsertUserPledge(userId, pledgeId),
          UpdateUserPledgeEnroll(pledgeId)]
      )
        .then(() => {
          response.json({
            success: true,
            redirectUrl: congratulationPageUrl,
          })
        })
        .catch(() => res.status(500).json({ err: ' Error' }))
    }
  })
    .catch(() => response.status(500).json({ err: ' Error' }))
}
