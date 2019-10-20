const dbConnection = require('./../db_connection')

const getNumberOfUserPledges = (userId) => {
  return dbConnection
    .query('SELECT pledge_name FROM pledge_to_user WHERE user_id=$1', [userId])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getNumberOfUserPledges
