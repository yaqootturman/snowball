const dbConnection = require('./../db_connection')

const getNumberOfUserPledges = (userId) => {
  return dbConnection
    .query('select pledge_name from pledge_to_user where user_id=$1', [userId])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getNumberOfUserPledges
