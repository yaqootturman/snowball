const dbConnection = require('./../db_connection')

const getPledgesInCategory = (userId) => {
  return dbConnection
    .query('SELECT * FROM pledge_to_user INNER JOIN pledge ON pledge_to_user.pledge_id = pledge.pledge_id INNER JOIN category ON category.category_id = pledge.category_id WHERE user_id=$1', [userId])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getPledgesInCategory
