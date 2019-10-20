const getCategoryInfo = require('./../database/queries/getCategory')

exports.get = (req, res) => {
  getCategoryInfo()
    .then(data => res.json({ data }))
    .catch(() => res.status(500).json({ err: 'login Error' }))
}
