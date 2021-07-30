const jwt = require("jsonwebtoken")
const {jwtSecret} = require("../secrets")

module.exports = function (user) {
    const payload = {
        subject: user.user_id,
        username: user.username,
        email: user.email,
    }
    const options = {
        expiresIn: "1d",
    }
    return jwt.sign(payload, jwtSecret, options)
}