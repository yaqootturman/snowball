const getAllPledges = require('./../database/queries/getAllPledges')

exports.get = (req, res) => {
  getAllPledges()
    .then(data2 => res.json({ data2 }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
