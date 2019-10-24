const getNumberOfUserPledges = require('./../database/queries/getNumberOfUserPledges')

exports.get = (req, res, next) => {
  getNumberOfUserPledges(req.params.userId)
    .then(data => res.json({ data }))
    .catch(error => next(error))
}
