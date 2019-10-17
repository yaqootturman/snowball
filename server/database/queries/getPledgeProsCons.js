const dbConnection = require('../db_connection')

const getPledgeProsCons = pledgeID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge_pros_cons WHERE pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeProsCons
