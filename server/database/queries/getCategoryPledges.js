const dbConnection = require('./../db_connection')

const getCategoryPledges = categoryID => {
  return dbConnection
    .query(
      'select * from pledge where category_id = $1',
      [categoryID]
    )
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getCategoryPledges
