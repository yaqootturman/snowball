const dbConnection = require('./../db_connection')

const getPledgeInfo = pledgeID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge WHERE pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeInfo
