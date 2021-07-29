const router = require("express").Router()
const {insertUser} = require("../users/users_model")
const {validateUser, validateRoleNAme, checkIfUsernameExists} = require("./auth_middleware")

router.post('/register', validateUser, validateRoleNAme, async (req, res) => {
    
  // res.status(201).json(await insertUser(req.body))
  })

  router.post('/login', checkIfUsernameExists, (req, res, next) => {
    res.json({message: "logged in "})
      
  })

  module.exports = router