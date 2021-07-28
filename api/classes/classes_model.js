const db = require("../data/db-config")

function getAllClasses() { return db('classes') }

module.exports = {
    getAllClasses
}