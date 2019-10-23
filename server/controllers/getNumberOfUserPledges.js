const getNumberOfUserPledges = require('./../database/queries/getNumberOfUserPledges')

exports.get = (req, res) => {
  getNumberOfUserPledges(req.params.userId)
    .then(data => res.json({ data }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
