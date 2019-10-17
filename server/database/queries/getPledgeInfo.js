const dbConnection = require('./../db_connection')

const getPledgeInfo = pledgeID => {
  return dbConnection
    .query(
      'select * from pledge where pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeInfo
