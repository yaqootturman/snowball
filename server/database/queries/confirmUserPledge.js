const dbConnection = require('../db_connection')

const UpdateUserPledgeEnroll = pledgeId => {
  return dbConnection.query(
    'UPDATE pledge SET number_of_enrollement = number_of_enrollement + 1 WHERE pledge_id =$1',
    [pledgeId]
  )
}
const InsertUserPledge = (userID, pledgeId) => {
  return dbConnection.query(
    'INSERT INTO pledge_to_user (user_id, pledge_id) VALUES ($1,$2)',
    [userID, pledgeId]
  )
}
const CheckIfUserConfirm = (userID, pledgeId) => {
  return dbConnection
    .query(
      'SELECT user_id FROM pledge_to_user WHERE pledge_id = $2 AND user_id = $1',
      [userID, pledgeId]
    )
    .then(res => res.rows)
}

module.exports = {
  UpdateUserPledgeEnroll,
  InsertUserPledge,
  CheckIfUserConfirm,
}
