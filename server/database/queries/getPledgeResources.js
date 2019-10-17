const dbConnection = require('./../db_connection')

const getPledgeResources = pledgeID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge_resources WHERE pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeResources
