const getCategoryInfo = require('./../database/queries/getCategory')

exports.get = (req, res, next) => {
  getCategoryInfo()
    .then(data => res.json({ data }))
    .catch(error => next(error))
}
