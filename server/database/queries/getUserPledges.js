const dbConnection = require('../db_connection')

exports.getUserPledges = (userId) => {
  return dbConnection
    .query('SELECT pledge.pledge_id,title,description,number_of_enrollement, pledge.banner_img FROM pledge_to_user INNER JOIN pledge ON pledge_to_user.pledge_id = pledge.pledge_id INNER JOIN "user" ON pledge_to_user.user_id = "user".user_id WHERE pledge_to_user.user_id =$1', [userId])
}
