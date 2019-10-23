const getNumberPledgesCategory = require('./../database/queries/getNumberPledgesCategory')

exports.get = (req, res) => {
  getNumberPledgesCategory()
    .then(pledgesCategory => res.json({ pledgesCategory }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
