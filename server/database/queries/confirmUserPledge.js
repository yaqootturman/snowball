
const dbConnection = require('../db_connection')

const UpdateUserPledgeEnroll = (pledgeId) => {
  return dbConnection
    .query(
      'UPDATE pledge SET number_of_enrollement = number_of_enrollement + 1 where pledge_id =$1',
      [pledgeId]
    )
}
const InsertUserPledge = (userID, pledgeId) => {
  return dbConnection
    .query(
      'INSERT INTO pledge_to_user (user_id, pledge_id) VALUES ($1,$2)', [userID, pledgeId]
    )
}

module.exports = { UpdateUserPledgeEnroll, InsertUserPledge }
