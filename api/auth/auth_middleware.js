const { findBy } = require("../users/users_model");

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

module.exports = {
    validateUser,
    validateRoleNAme,
    checkIfUsernameExists
}