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

module.exports = {
    validateUser
}