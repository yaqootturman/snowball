const dbConnection = require('./../db_connection')

const getAllPledges = () => {
  return dbConnection
    .query('select title from pledge')
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getAllPledges
