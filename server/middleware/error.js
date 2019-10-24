// eslint-disable-next-line handle-callback-err
exports.serverError = (err, req, res, next) => {
  res.status(500).send({
    message: 'intenal server error',
  })
}
