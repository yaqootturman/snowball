const getCategoryPledge = require('../database/queries/getCategoryPledge')

exports.getCategoryPledge = (req, res) => {
  const { categoryID } = req.params
  getCategoryPledge(categoryID)
    .then(data => res.json(data.rows))
    .catch(() => res.status(500).json({ err: ' Error' }))
}
