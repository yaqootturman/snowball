const getAllPledges = require('./../database/queries/getAllPledges')

exports.get = (req, res) => {
  getAllPledges()
    .then(allPledges => res.json({ allPledges }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
