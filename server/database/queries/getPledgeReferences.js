const dbConnection = require('./../db_connection')

const getPledgeReferences = pledgeID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge_references WHERE pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeReferences
