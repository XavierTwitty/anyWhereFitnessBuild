const { user } = require("pg/lib/defaults")
const db = require("../data/db-config")


function getAllUsers() { return db('users') }

function getsUsers () {
  return db('users as u')
  .select("u.*","c.class_name", "c.class_id")
  .join("classes as c", "u.user_id", "c.user_id")

}

async function insertUser(user) {
    // WITH POSTGRES WE CAN PASS A "RETURNING ARRAY" AS 2ND ARGUMENT TO knex.insert/update
    // AND OBTAIN WHATEVER COLUMNS WE NEED FROM THE NEWLY CREATED/UPDATED RECORD
    // UNLIKE SQLITE WHICH FORCES US DO DO A 2ND DB CALL
    const [newUserObject] = await db('users').insert(user, ['user_id', 'username', 'password', 'email', 'role_name'])// user logins and auto becomes student
    return newUserObject // { user_id: 7, username: 'foo', password: 'xxxxxxx' }
  }

  function findBy(filter) {
      return db ("users as u")
      .select("u.user_id", "u.username", "u.password")
      .where(filter)
  }

  // function findById (user_id) {
  //   return db ("users as u")
  //   .join("classes as c", "u.user_id", "c.user_id")
  //   .select("u.*", "c.name" , "c.class_id")
  //   .where("u.user_id", user_id)
  //   .first()
  // }

module.exports = {getAllUsers, insertUser, findBy, getsUsers}