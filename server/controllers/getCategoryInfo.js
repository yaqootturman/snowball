const getCategoryInfo = require("./../database/queries/getCategory")

exports.get = (req, res) => {
  console.log("hi")
  getCategoryInfo()
    .then(data => res.json({ data }))
    .catch(() => res.status(500).json({ err: "login Error" }))
}
