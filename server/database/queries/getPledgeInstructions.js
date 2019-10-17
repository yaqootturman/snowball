const dbConnection = require('../db_connection')

const getPledgeInstructions = pledgeID => {
  return dbConnection
    .query(
      'select * from pledge_instructions where pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeInstructions
