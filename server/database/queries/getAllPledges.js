const dbConnection = require('./../db_connection')

const getAllPledges = () => {
  return dbConnection
    .query('SELECT title FROM pledge')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getAllPledges
