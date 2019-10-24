const getAllPledges = require('./../database/queries/getAllPledges')

exports.get = (req, res, next) => {
  getAllPledges()
    .then(allPledges => res.json({ allPledges }))
    .catch(error => next(error))
}
