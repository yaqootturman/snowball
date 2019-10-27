const getNumberPledgesCategory = require('./../database/queries/getNumberPledgesCategory')

exports.get = (req, res, next) => {
  getNumberPledgesCategory()
    .then(pledgesCategory => res.json({ pledgesCategory }))
    .catch(error => next(error))
}
