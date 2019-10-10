const dbConnection = require('./../db_connection')

const getCategoryPledges = categoryID => {
  return dbConnection
    .query(
      'SELECT * FROM pledge WHERE category_id = $1',
      [categoryID]
    )
}

module.exports = getCategoryPledges
