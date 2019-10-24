const deletePledgeToUser = require('./../database/queries/deletePledgeToUser')

exports.deletePledgeToUser = (req, res, next) => {
  const { userId, pledgeId } = req.params

  deletePledgeToUser(userId, pledgeId)
    .then(() => res.json({ msg: 'deleted' }
    ))
    .catch(error => next(error))
}
