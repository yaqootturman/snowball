const dbConnection = require('./../db_connection')

const getCategoryInfo = () => {
  return dbConnection
    .query('select * from category')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getCategoryInfo
