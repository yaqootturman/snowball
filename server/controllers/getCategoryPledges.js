const getCategoryPledges = require('./../database/queries/getCategoryPledges')

exports.getCategoryPledges = (req, res) => {
  // const { pharmacyID } = req
  getCategoryPledges(1)
    .then(data => res.json(data))
    .catch(() => res.status(500).json({ err: ' Error' }))
}
