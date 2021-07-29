const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../secrets")

module.exports = function (user) {
    const payload = {
        subject: user.id,
        username: user.username,
        email: user.email,
    }
    const options = {
        expires: "1d"
    }
    return jwt.sign(payload, jwtSecret, options)
}