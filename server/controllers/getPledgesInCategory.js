const getPledgesInCategory = require('./../database/queries/getPledgesInCategory')

exports.get = (req, res) => {
  getPledgesInCategory(req.params.userId)
    .then(data3 => res.json({ data3 }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
