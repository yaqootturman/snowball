const getCategoryPledges = require('./../database/queries/getCategoryPledges')

exports.getCategoryPledges = (req, res, next) => {
  const { categoryID } = req.params
  getCategoryPledges(categoryID)
    .then(data => res.json(data.rows))
    .catch(error => next(error))
}
