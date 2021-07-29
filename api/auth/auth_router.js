const router = require("express").Router()
const {insertUser} = require("./auth_model")

router.post('/api/users', async (req, res) => {
    res.status(201).json(await insertUser(req.body))
  })