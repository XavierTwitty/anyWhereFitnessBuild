const router = require("express").Router()
const {insertUser} = require("./auth_model")

router.post('/register', async (req, res) => {
    res.status(201).json(await insertUser(req.body))
  })

  router.post('/login', (req, res, next) => {
      
  })

  module.exports = router