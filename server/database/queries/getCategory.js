const dbConnection = require("./../db_connection")

const getCategoryInfo = () => {
  console.log("query")

  return dbConnection
    .query("select * from category")
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getCategoryInfo
