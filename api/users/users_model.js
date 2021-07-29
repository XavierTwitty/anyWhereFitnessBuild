const db = require("../data/db-config")


function getAllUsers() { return db('users') }




module.exports = {getAllUsers}