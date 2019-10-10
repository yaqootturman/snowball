const dbConnection = require('./../db_connection')

const getCategoryPledges = categoryID => {
  return dbConnection
    .query(
      'select * from pledge where category_id = $1',
      [categoryID]
    )
}

module.exports = getCategoryPledges
