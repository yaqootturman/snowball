const dbConnection = require('./../db_connection')

const getPledgeReferences = pledgeID => {
  return dbConnection
    .query(
      'select * from pledge_references where pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeReferences
