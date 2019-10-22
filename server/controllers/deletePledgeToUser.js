const deletePledgeToUser = require('./../database/queries/deletePledgeToUser')

exports.deletePledgeToUser = (req, res) => {
  const { userId, pledgeId } = req.params

  deletePledgeToUser(userId, pledgeId)
    .then(() => res.json({ msg: 'deleted' }
    ))
    .catch(() => res.status(500).json({ err: ' Error' }))
}
