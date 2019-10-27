const getPledgesInCategory = require('./../database/queries/getPledgesInCategory')

exports.get = (req, res, next) => {
  getPledgesInCategory(req.params.userId)
    .then(userPledges => res.json({ userPledges }))
    .catch(error => next(error))
}
