const dbConnection = require('../db_connection')

const getPledgeInstructions = pledgeID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge_instructions WHERE pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeInstructions
