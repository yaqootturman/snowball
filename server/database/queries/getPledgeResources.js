const dbConnection = require('./../db_connection')

const getPledgeResources = pledgeID => {
  return dbConnection
    .query(
      'select * from pledge_resources where pledge_id = $1', [pledgeID]
    ).then(res => res.rows)
}
module.exports = getPledgeResources
