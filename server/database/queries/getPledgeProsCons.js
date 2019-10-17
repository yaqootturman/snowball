const dbConnection = require('../db_connection')

const getPledgeProsCons = pledgeID => {
  return dbConnection
    .query(
      'select * from pledge_pros_cons where pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeProsCons
