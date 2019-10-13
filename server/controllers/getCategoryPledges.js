const getCategoryPledges = require('./../database/queries/getCategoryPledges')

exports.getCategoryPledges = (req, res) => {
  const { categoryID } = req.params
  getCategoryPledges(categoryID)
    .then(data => res.json(data.rows))
    .catch(() => res.status(500).json({ err: ' Error' }))
}
