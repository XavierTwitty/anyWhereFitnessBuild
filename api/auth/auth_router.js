const router = require("express").Router()
const {insertUser} = require("../users/users_model")
const {validateUser, validateRoleNAme, checkIfUsernameExists} = require("./auth_middleware")
const {jwtSecret} =require("../secrets")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")


router.post('/register', validateUser, validateRoleNAme, async (req, res, next) => {
    const {username , password, email} = req.body
    const hash = bcrypt.hashSync(password, 8)

  res.status(201).json(await insertUser({username, password: hash, email}))
  next()
  })

  router.post('/login', checkIfUsernameExists, (req, res, next) => { 
    res.json({message: "login endpoint"})
    if (bcrypt.compareSync(req.body.password, req.user.password)) {
      const token = buildToken(req.user)
      res.status(200).json({
        message: `${req.user.username} Welcome Back!`,
        token,
      })
    } else {
      next({
        status: 400,
        message: "invalid credentials"
      })
    }
   
    
      
  })

  function buildToken(user) {
    const payload = {
      subject: user.user_id,
      email: user.email,
      username: user.username
    }
    const options = {
      expiresIn: "1d"
    }
    return jwt.sign(payload, jwtSecret, options)
  }

  module.exports = router