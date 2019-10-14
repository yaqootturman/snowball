const getNumberPledgesCategory = require('./../database/queries/getNumberPledgesCategory')

exports.get = (req, res) => {
  console.log('hh', req.params.categoryName)

  getNumberPledgesCategory(req.params.categoryName)
    .then(data4 => res.json({ data4 }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
