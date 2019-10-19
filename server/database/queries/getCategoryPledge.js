const dbConnection = require('../db_connection')

const getCategoryPledge = categoryID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge WHERE category_id = $1',
      [categoryID]
    )
}

module.exports = getCategoryPledge
