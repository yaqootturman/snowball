const { getUserPledges } = require('../database/queries/getUserPledges')

exports.userPledges = (req, res, next) => {
  getUserPledges(req.params.userId)
    .then(result => res.json(result.rows))
    .catch(error => next(error))
}
