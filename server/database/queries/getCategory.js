const dbConnection = require('./../db_connection')

const getCategoryInfo = () => {
  return dbConnection
    .query('SELECT * FROM category')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getCategoryInfo
