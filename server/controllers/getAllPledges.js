const getAllPledges = require('./../database/queries/getAllPledges')

exports.get = (req, res) => {
  console.log('query')

  getAllPledges()
    .then(data2 => res.json({ data2 }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
