const dbConnection = require('../db_connection')

exports.getUserPledges = (userId) => {
  return dbConnection
    .query('select title,description,number_of_enrollement from pledge innerjoin user on user.user_id = pledge.user_id where user_id=$1', [userId])
}
