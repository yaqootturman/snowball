const { getUserId } = require('../database/queries/getUserPledges')

exports.userPledges = (req, res, next) => {
  console.log('controller', req.params)
  getUserId(req.params.userId)
    .then(result => res.json(result.rows))
    .catch(error => next(error))
}
