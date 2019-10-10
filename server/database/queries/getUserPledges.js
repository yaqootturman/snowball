const dbConnection = require('../db_connection')

exports.getUserPledges = (userId) => {
  return dbConnection
    .query('select title,description,number_of_enrollement,img from pledge_to_user inner join pledge on pledge_to_user.pledge_id = pledge.pledge_id inner join "user" on pledge_to_user.user_id = "user".user_id where pledge_to_user.user_id =$1', [userId])
}
