const { findBy } = require("../users/users_model");
const {jwtSecret} = require("../secrets")
const jwt = require("jsonwebtoken")

function validateUser(req, res, next) {
    if (!req.body.username || !req.body.password || !req.body.email) {
        next({
            status: 400,
            message: "username , password and email are required"
        })
    } else {
        next()
    }
}


function validateRoleNAme(req, res , next) {
    if (!req.body.role_name || !req.body.role_name.trim()) {
        req.role_name = "students";
        next()
    } else if (req.body.role_name.trim() === "Instructor") {
        next({next: 422, message: "Role Name cannot be Instructor"})
    } else {
        req.role_name = req.body.role_name.trim()
        next()
    }
}


async function checkIfUsernameExists(req, res, next) {
try {
    const [user] = await findBy({username: req.body.username})
    if(!user) {
        next({status: 422 , message: "invalid credintials"})
    } else {
        req.user = user
        next()
    }
} catch (err) {
    next({err})
}
}


function restricted(req, res, next) {
const token = req.headers.authorization
if(!token) {
    return next({status: 401, message: "token required"})
}
jwt.verify(token, jwtSecret, (err, decodedToken) => {
    if (err) {
        next({status: 401, message: "token invalid"})
    } else {
        req.decodedToken = decodedToken
        next()
    }
})
}

const only = (role_name) => (req, res, next) => {
    if ((role_name === req.decodedToken.role_name)) {
        next()
    } else {
        next({status: 401 , message: "this is not you"})
    }
}

module.exports = {
    validateUser,
    validateRoleNAme,
    checkIfUsernameExists,
    restricted,
    only
}