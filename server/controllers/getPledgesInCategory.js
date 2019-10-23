const getPledgesInCategory = require('./../database/queries/getPledgesInCategory')

exports.get = (req, res) => {
  getPledgesInCategory(req.params.userId)
    .then(userPledges => res.json({ userPledges }))
    .catch(() => res.status(500).json({ err: 'Error' }))
}
