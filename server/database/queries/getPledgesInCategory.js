const dbConnection = require('./../db_connection')

const getPledgesInCategory = (userId) => {
  return dbConnection
    .query('select * from pledge_to_user inner join pledge on pledge_to_user.pledge_id = pledge.pledge_id inner join category on category.category_id = pledge.category_id where user_id=$1', [userId])
    .then(res => res.rows)
    .catch(err => console.log(err))
}

module.exports = getPledgesInCategory
